from __future__ import annotations

import datetime as dt
import json
import logging
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

# ============================================================
# 日志
# ============================================================
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

# ============================================================
# 配置常量（便于以后提取为配置文件）
# ============================================================
API_URL = "https://export.arxiv.org/api/query"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "data" / "site-data.js"
TARGET_COUNT = 20
LLM_CANDIDATE_COUNT = 50           # 提高候选数，避免错过优质论文
MAX_RESULTS_PER_QUERY = 200
LOOKBACK_DAYS = 7
MAX_ARCHIVE_DAYS = 60
BOOTSTRAP_START_KEY = "20260601"
BOOTSTRAP_END_KEY = "20260607"
TZ_BEIJING = dt.timezone(dt.timedelta(hours=8))
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}

# 分类及权重（提升与 VLA/WAM 最相关的 cs.RO 权重）
CATEGORIES = ["cs.RO", "cs.AI", "cs.CV", "cs.LG"]
CATEGORY_SCORES = {
    "cs.RO": 8,
    "cs.AI": 4,
    "cs.CV": 4,
    "cs.LG": 2,
}

# ============================================================
# 查询策略改进：增加直接命中、缩写查询，并带分类过滤
# ============================================================
CATEGORY_QUERY = "(cat:cs.RO OR cat:cs.AI OR cat:cs.CV OR cat:cs.LG)"

RECALL_QUERIES = [
    # 缩写查询（增加命中率）
    f'{CATEGORY_QUERY} AND all:"vla"',
    f'{CATEGORY_QUERY} AND all:"wam"',

    f'{CATEGORY_QUERY} AND all:"world model"',        
    # 精确短语
    f'{CATEGORY_QUERY} AND all:"vision-language-action"',
    f'{CATEGORY_QUERY} AND all:"vision language action"',
    f'{CATEGORY_QUERY} AND all:"world action model"',
    f'{CATEGORY_QUERY} AND all:"world-language-action"',
    f'{CATEGORY_QUERY} AND all:"world language action"',
    f'{CATEGORY_QUERY} AND all:"action-conditioned world model"',

    # 宽泛但高质量的组合
    f'{CATEGORY_QUERY} AND all:"video world model"',
    f'{CATEGORY_QUERY} AND all:"generative world model" AND (all:"robot" OR all:"action")',
]

# ============================================================
# 关键词匹配列表
# ============================================================
VLA_PATTERNS = [
    "vla",
    "vision-language-action",
    "vision language action",
    "vision-language action",
]

WAM_PATTERNS = [
    "wam",
    "world action model",
    "action world model",
    "action-conditioned world model",
    "video world model",
    "generative world model",
    "latent action",
    "world model",
]

# 加强负面关键词，避免召回纯感知、纯规划等论文
NEGATIVE_PATTERNS = [
    "lane detection",
    "trajectory prediction",
    "object detection",
    "3d detection",
    "3d perception",
    "semantic segmentation",
    "depth estimation",
    "point cloud",
    "lidar",
    "motion prediction",
    "tracking",
    "localization",
    "slam",
    "path planning",
    "motion planning",
    "control barrier function",
    "model predictive control",
    "reinforcement learning policy",   # 不加 action 的纯 RL 策略
]

# ============================================================
# 主要入口
# ============================================================
def main() -> None:
    existing = load_existing_site_data()
    current_window = compute_batch_window()
    llm_config = get_llm_config()
    archive_map = {
        item["dateKey"]: item
        for item in existing.get("archives", [])
        if isinstance(item, dict) and item.get("dateKey")
    }
    # 简单的跨请求缓存（当天运行时能避免重复请求 arXiv）
    query_cache: dict[str, list[dict]] = {}

    windows = resolve_windows_to_generate(current_window)
    for window in windows:
        archive_entry = build_archive_for_window(window, llm_config, query_cache)
        archive_map[window["date_key"]] = archive_entry
        logger.info(
            f"Prepared {len(archive_entry['papers'])} papers for {window['date_key']} "
            f"({archive_entry['sourceMode']})"
        )

    archives = sort_archives(list(archive_map.values()))
    site_data = build_site_data(archives, current_window, llm_config)
    write_site_data(site_data)
    logger.info(f"Wrote {len(archives)} archives to {OUTPUT_FILE}")


# ============================================================
# 时间窗口计算（保持不变）
# ============================================================
def compute_batch_window() -> dict:
    now_bj = dt.datetime.now(TZ_BEIJING)
    eight_am = now_bj.replace(hour=8, minute=0, second=0, microsecond=0)
    end_bj = eight_am - dt.timedelta(days=1) if now_bj < eight_am else eight_am
    return build_window(end_bj)


def build_window(end_bj: dt.datetime) -> dict:
    start_bj = end_bj - dt.timedelta(days=1)
    return {
        "date_key": end_bj.strftime("%Y%m%d"),
        "date_label": end_bj.strftime("%Y-%m-%d"),
        "start_bj": start_bj,
        "end_bj": end_bj,
        "start_utc": start_bj.astimezone(dt.timezone.utc),
        "end_utc": end_bj.astimezone(dt.timezone.utc),
    }


def build_window_for_date_key(date_key: str) -> dict:
    date_value = dt.datetime.strptime(date_key, "%Y%m%d").date()
    end_bj = dt.datetime(
        date_value.year,
        date_value.month,
        date_value.day,
        8, 0, 0,
        tzinfo=TZ_BEIJING,
    )
    return build_window(end_bj)


def resolve_windows_to_generate(current_window: dict) -> list[dict]:
    windows: dict[str, dict] = {current_window["date_key"]: current_window}
    bootstrap_end = min(current_window["date_key"], BOOTSTRAP_END_KEY)
    for date_key in iter_date_keys(BOOTSTRAP_START_KEY, bootstrap_end):
        windows[date_key] = build_window_for_date_key(date_key)
    return [windows[key] for key in sorted(windows)]


def iter_date_keys(start_key: str, end_key: str) -> list[str]:
    start_date = dt.datetime.strptime(start_key, "%Y%m%d").date()
    end_date = dt.datetime.strptime(end_key, "%Y%m%d").date()
    keys: list[str] = []
    current = start_date
    while current <= end_date:
        keys.append(current.strftime("%Y%m%d"))
        current += dt.timedelta(days=1)
    return keys


# ============================================================
# 单个日期的论文归档构建
# ============================================================
def build_archive_for_window(
    window: dict,
    llm_config: dict | None,
    query_cache: dict[str, list[dict]],
) -> dict:
    # 第一优先级：严格 1 天窗口
    strict_candidates = fetch_recent_papers(window["start_utc"], window["end_utc"], query_cache)
    strict_selected = select_top_papers(strict_candidates, llm_config)
    if strict_selected:
        return build_archive_entry(
            window,
            strict_selected,
            source_mode="strict",
            source_note_cn="严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
        )

    # 第二优先级：7 天回退
    lookback_candidates = fetch_recent_papers(
        window["end_utc"] - dt.timedelta(days=LOOKBACK_DAYS),
        window["end_utc"],
        query_cache,
    )
    lookback_selected = select_top_papers(lookback_candidates, llm_config)
    if lookback_selected:
        return build_archive_entry(
            window,
            lookback_selected,
            source_mode="fallback_7d",
            source_note_cn="当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
        )

    # 第三优先级：30 天回退
    month_candidates = fetch_recent_papers(
        window["end_utc"] - dt.timedelta(days=30),
        window["end_utc"],
        query_cache,
    )
    month_selected = select_top_papers(month_candidates, llm_config)
    return build_archive_entry(
        window,
        month_selected,
        source_mode="fallback_30d",
        source_note_cn="当日严格窗口与 7 天窗口均未命中论文，已回退展示截止当日最近 30 天内最相关的 VLA / WAM 论文。",
    )


# ============================================================
# arXiv API 获取与去重
# ============================================================
def fetch_recent_papers(
    start_utc: dt.datetime,
    end_utc: dt.datetime,
    query_cache: dict[str, list[dict]],
) -> list[dict]:
    papers_by_id: dict[str, dict] = {}
    for query in RECALL_QUERIES:
        try:
            cached_results = query_cache.get(query)
            if cached_results is None:
                logger.info(f"Fetching from arXiv: {query[:100]}...")
                cached_results = fetch_query_results(query)
                query_cache[query] = cached_results
            for paper in cached_results:
                if not (start_utc <= paper["published_dt"] < end_utc):
                    continue
                existing = papers_by_id.get(paper["id"])
                # 保留启发式得分更高的版本（去重）
                if existing is None or paper["score_hint"] > existing["score_hint"]:
                    papers_by_id[paper["id"]] = paper
        except Exception as exc:
            logger.warning(f"Skip query {query!r}: {exc}")
            continue
    return list(papers_by_id.values())


def fetch_query_results(query: str) -> list[dict]:
    params = {
        "search_query": query,
        "start": 0,
        "max_results": MAX_RESULTS_PER_QUERY,
        "sortBy": "submittedDate",
        "sortOrder": "descending",
    }
    url = f"{API_URL}?{urllib.parse.urlencode(params)}"
    xml_payload = fetch_bytes(url)
    root = ET.fromstring(xml_payload)
    entries = root.findall("atom:entry", ATOM_NS)
    results: list[dict] = []
    for entry in entries:
        paper = parse_entry(entry)
        paper["score_hint"] = heuristic_focus_score(paper)
        results.append(paper)
    return results


def parse_entry(entry: ET.Element) -> dict:
    title = clean_text(entry.findtext("atom:title", default="", namespaces=ATOM_NS))
    summary_raw = clean_text(entry.findtext("atom:summary", default="", namespaces=ATOM_NS))
    paper_id = entry.findtext("atom:id", default="", namespaces=ATOM_NS).rsplit("/", 1)[-1]
    published_raw = entry.findtext("atom:published", default="", namespaces=ATOM_NS)
    updated_raw = entry.findtext("atom:updated", default="", namespaces=ATOM_NS)
    published_dt = dt.datetime.fromisoformat(published_raw.replace("Z", "+00:00"))
    updated_dt = dt.datetime.fromisoformat(updated_raw.replace("Z", "+00:00"))
    authors = [
        clean_text(author.findtext("atom:name", default="", namespaces=ATOM_NS))
        for author in entry.findall("atom:author", ATOM_NS)
    ]
    categories = [node.attrib.get("term", "") for node in entry.findall("atom:category", ATOM_NS)]
    return {
        "id": paper_id,
        "title": title,
        "summary_raw": summary_raw,
        "summary": build_short_summary(summary_raw),
        "summaryCn": "",
        "reasonCn": "",
        "lane": "OTHER",
        "link": f"https://arxiv.org/abs/{paper_id}",
        "pdfLink": f"https://arxiv.org/pdf/{paper_id}",
        "published": published_raw,
        "updated": updated_raw,
        "published_dt": published_dt,
        "updated_dt": updated_dt,
        "authors": authors[:10],
        "categories": categories[:6],
    }


# ============================================================
# 论文选择（启发式 + LLM）
# ============================================================
def select_top_papers(papers: list[dict], llm_config: dict | None) -> list[dict]:
    candidates = build_candidate_pool(papers)
    if not candidates:
        return []

    if llm_config is not None:
        llm_selected = rerank_with_deepseek(candidates, llm_config)
        if llm_selected:
            return llm_selected

    return fallback_select_top_papers(candidates)


def build_candidate_pool(papers: list[dict]) -> list[dict]:
    ranked: list[dict] = []
    for paper in papers:
        score = heuristic_focus_score(paper)
        if score <= 0:
            continue
        paper["heuristicScore"] = score
        paper["laneHint"] = infer_lane(paper)
        ranked.append(paper)

    ranked.sort(
        key=lambda item: (item["heuristicScore"], item["published_dt"], item["updated_dt"]),
        reverse=True,
    )

    selected: list[dict] = []
    seen_title_keys: set[str] = set()
    for paper in ranked:
        title_key = normalize_title(paper["title"])
        if title_key in seen_title_keys:
            continue
        seen_title_keys.add(title_key)
        selected.append(paper)
        if len(selected) >= LLM_CANDIDATE_COUNT:
            break
    return selected


def heuristic_focus_score(paper: dict) -> int:
    """
    改进的启发式打分：
    - 标题命中 VLA/WAM 得更高分
    - 缩写命中给更高权重
    - 负面词加大惩罚
    - 新鲜度采用对数平滑
    """
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    vla_hits = count_pattern_hits(haystack, VLA_PATTERNS)
    wam_hits = count_pattern_hits(haystack, WAM_PATTERNS)
    negative_hits = count_pattern_hits(haystack, NEGATIVE_PATTERNS)
    category_score = sum(CATEGORY_SCORES.get(cat, 0) for cat in paper["categories"])

    title_lower = paper["title"].lower()
    title_bonus = 0
    # 标题命中精确短语
    if "vision-language-action" in title_lower or "vision language action" in title_lower:
        title_bonus += 25
    if "world action model" in title_lower or "world-language-action" in title_lower:
        title_bonus += 25
    if "world model" in title_lower and ("action" in haystack or "robot" in haystack):
        title_bonus += 15
    # 标题中有 VLA / WAM 缩写（且不是别的单词的一部分）
    if re.search(r'\bvla\b', title_lower):
        title_bonus += 30
    if re.search(r'\bwam\b', title_lower):
        title_bonus += 30

    if vla_hits == 0 and wam_hits == 0:
        return 0

    age_days = max((dt.datetime.now(dt.timezone.utc) - paper["published_dt"]).days, 0)
    # 使用对数新鲜度，使近期论文稍有优势但不完全线性
    freshness = max(0, int(10 * (1 - age_days / max(LOOKBACK_DAYS, 1))))

    base_score = vla_hits * 20 + wam_hits * 20
    penalty = negative_hits * 8          # 负面词惩罚加重
    return base_score + title_bonus + category_score + freshness - penalty


def count_pattern_hits(haystack: str, patterns: list[str]) -> int:
    return sum(1 for pattern in patterns if pattern in haystack)


def infer_lane(paper: dict) -> str:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    vla_hits = count_pattern_hits(haystack, VLA_PATTERNS)
    wam_hits = count_pattern_hits(haystack, WAM_PATTERNS)
    if vla_hits and wam_hits:
        return "BOTH"
    if vla_hits:
        return "VLA"
    if wam_hits:
        return "WAM"
    return "OTHER"


def normalize_lane(value: str) -> str:
    normalized = value.strip().upper()
    if normalized in {"VLA", "WAM", "BOTH", "OTHER"}:
        return normalized
    return "OTHER"


def fallback_select_top_papers(papers: list[dict]) -> list[dict]:
    selected: list[dict] = []
    for paper in papers[:TARGET_COUNT]:
        lane = infer_lane(paper)
        selected.append(
            finalize_paper(
                paper,
                lane=lane,
                selection_reason="规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
                summary_cn=fallback_summary_cn(paper["summary"], lane),
                llm_total_score=None,
            )
        )
    return selected


# ============================================================
# DeepSeek 重排与摘要
# ============================================================
def rerank_with_deepseek(papers: list[dict], llm_config: dict) -> list[dict]:
    try:
        analysis_map = call_deepseek_rank_and_summarize(papers, llm_config)
    except Exception as exc:
        logger.error(f"DeepSeek rerank failed, fallback to heuristic ranking: {exc}")
        return []

    ranked: list[dict] = []
    for paper in papers:
        analysis = analysis_map.get(paper["id"])
        if not analysis or not analysis.get("include", False):
            continue
        lane = normalize_lane(str(analysis.get("lane", "")))
        if lane not in {"VLA", "WAM", "BOTH"}:
            continue
        ranked.append(
            finalize_paper(
                paper,
                lane=lane,
                selection_reason=clean_text(str(analysis.get("reason_cn", "")))
                or "DeepSeek 判断该论文与 VLA / WAM 主问题强相关。",
                summary_cn=clean_text(str(analysis.get("summary_cn", "")))
                or fallback_summary_cn(paper["summary"], lane),
                llm_total_score=int_or_none(analysis.get("total_score")),
            )
        )

    ranked.sort(
        key=lambda item: (
            item.get("llmTotalScore") or 0,
            item.get("heuristicScore") or 0,
            item.get("published", ""),
        ),
        reverse=True,
    )
    return ranked[:TARGET_COUNT]


def finalize_paper(
    paper: dict,
    lane: str,
    selection_reason: str,
    summary_cn: str,
    llm_total_score: int | None,
) -> dict:
    return {
        "id": paper["id"],
        "title": paper["title"],
        "summary": paper["summary"],
        "summaryCn": summary_cn,
        "reasonCn": selection_reason,
        "lane": lane,
        "link": paper["link"],
        "pdfLink": paper["pdfLink"],
        "published": paper["published"],
        "updated": paper["updated"],
        "authors": paper["authors"],
        "categories": [cat for cat in paper["categories"] if cat in CATEGORY_SCORES][:4],
        "heuristicScore": paper.get("heuristicScore", 0),
        "llmTotalScore": llm_total_score,
    }


def get_llm_config() -> dict | None:
    api_key = os.getenv("DEEPSEEK_API_KEY", "").strip()
    if not api_key:
        return None
    base_url = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com").rstrip("/")
    model = os.getenv("DEEPSEEK_MODEL", "deepseek-chat").strip() or "deepseek-chat"
    return {
        "api_key": api_key,
        "base_url": base_url,
        "model": model,
    }


def call_deepseek_rank_and_summarize(papers: list[dict], llm_config: dict) -> dict[str, dict]:
    endpoint = f"{llm_config['base_url']}/chat/completions"
    prompt_items = []
    for paper in papers:
        prompt_items.append(
            {
                "id": paper["id"],
                "title": paper["title"],
                "abstract": trim_text(paper["summary_raw"], 1400),
                "categories": paper["categories"][:4],
                "heuristic_score": paper.get("heuristicScore", 0),
                "lane_hint": paper.get("laneHint", "OTHER"),
            }
        )

    # 改进 system prompt：明确要求严格过滤，并给出 VLA/WAM 的判别标准
    system_prompt = (
        "你是一个只为 VLA（Vision-Language-Action）和 WAM（World Action Model）"
        "筛选论文的研究助理。请严格遵守以下规则：\n"
        "1. VLA 论文必须同时涉及视觉输入、语言指令和机器人动作输出。"
        "纯粹的视觉问答、图像描述、非具身对话系统均不符合。\n"
        "2. WAM 论文必须以世界模型（world model）为核心，并明确用于动作预测、规划或控制。"
        "仅使用 world model 做视频预测/生成而不涉及动作的，应标记为 include=false。\n"
        "3. 若论文属于一般机器人控制、自动驾驶感知、轨迹预测、目标检测等，但未聚焦 VLA/WAM，直接 exclude。\n"
        "4. 在 reason_cn 中简要说明为何符合（或不符合）上述标准。\n"
        "请只输出 JSON，不要输出代码块，不要解释。\n"
        '输出格式：{"items":[{"id":"...","include":true/false,"lane":"VLA|WAM|BOTH|OTHER",'
        '"total_score":0,"reason_cn":"...","summary_cn":"..."}]}\n'
        "summary_cn 必须是2-3句中文，突出任务、方法和价值。\n"
        "reason_cn 用1句中文说明保留理由。"
    )

    messages = [
        {"role": "system", "content": system_prompt},
        {
            "role": "user",
            "content": json.dumps({"items": prompt_items}, ensure_ascii=False),
        },
    ]
    payload = {
        "model": llm_config["model"],
        "temperature": 0.1,        # 更低温度保证确定性
        "messages": messages,
        "response_format": {"type": "json_object"},
    }
    request = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {llm_config['api_key']}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    body = fetch_bytes(request, timeout=120)
    response = json.loads(body.decode("utf-8"))
    content = response["choices"][0]["message"]["content"]
    parsed = parse_json_from_text(content)
    items = parsed.get("items", [])
    return {
        str(item.get("id", "")).strip(): item
        for item in items
        if item.get("id")
    }


# ============================================================
# 归档 & 网站数据构建
# ============================================================
def build_archive_entry(window: dict, selected: list[dict], source_mode: str, source_note_cn: str) -> dict:
    return {
        "dateKey": window["date_key"],
        "dateLabel": window["date_label"],
        "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
        "sourceMode": source_mode,
        "sourceNoteCn": source_note_cn,
        "papers": selected,
    }


def sort_archives(archives: list[dict]) -> list[dict]:
    normalized = [item for item in archives if isinstance(item, dict) and item.get("dateKey")]
    normalized.sort(key=lambda item: item["dateKey"], reverse=True)
    return normalized[:MAX_ARCHIVE_DAYS]


def build_site_data(archives: list[dict], current_window: dict, llm_config: dict | None) -> dict:
    llm_enabled = llm_config is not None
    model_info = llm_config["model"] if llm_config else "fallback-summary"
    return {
        "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
        "description": "每天北京时间 08:00 自动更新，只筛选与 VLA 和 WAM 主问题强相关的 arXiv 新论文。",
        "dateWindowDays": LOOKBACK_DAYS,
        "categories": CATEGORIES,
        "keywords": ["vision-language-action", "world action model"],
        "currentDateKey": current_window["date_key"],
        "selectionMethod": "deepseek_vla_wam_rerank",
        "llmEnabled": llm_enabled,
        "llmProvider": "DeepSeek",
        "modelInfo": model_info,
        "archives": archives,
    }


# ============================================================
# 文件读写
# ============================================================
def load_existing_site_data() -> dict:
    if not OUTPUT_FILE.exists():
        return {"archives": []}
    raw = OUTPUT_FILE.read_text(encoding="utf-8").strip()
    prefix = "window.PAPERS_SITE_DATA = "
    if raw.startswith(prefix):
        raw = raw[len(prefix):]
    if raw.endswith(";"):
        raw = raw[:-1]
    try:
        parsed = json.loads(raw)
        if isinstance(parsed, dict):
            return parsed
    except json.JSONDecodeError:
        pass
    return {"archives": []}


def write_site_data(site_data: dict) -> None:
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.PAPERS_SITE_DATA = "
        + json.dumps(site_data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


# ============================================================
# 工具函数
# ============================================================
def fetch_bytes(request_or_url, timeout: int = 30) -> bytes:
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            request = request_or_url
            if isinstance(request_or_url, str):
                request = urllib.request.Request(
                    request_or_url,
                    headers={"User-Agent": "Mozilla/5.0 paper-digest-bot/1.0"},
                )
            with urllib.request.urlopen(request, timeout=timeout) as response:
                return response.read()
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            last_error = exc
            time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"Request failed after retries: {last_error}")


def parse_json_from_text(text: str) -> dict:
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", text)
        if not match:
            raise
        return json.loads(match.group(0))


def build_short_summary(summary: str) -> str:
    summary = clean_text(summary)
    if len(summary) <= 520:
        return summary
    sentences = split_sentences(summary)
    if not sentences:
        return trim_text(summary, 520)
    concise = " ".join(sentences[:3])
    return trim_text(concise, 520)


def fallback_summary_cn(summary: str, lane: str) -> str:
    short = trim_text(clean_text(summary), 180)
    lane_text = "VLA" if lane == "VLA" else "WAM" if lane == "WAM" else "VLA / WAM"
    if not short:
        return f"这篇论文与 {lane_text} 方向相关。它提出了新的任务设定或模型方法。建议进一步阅读原文确认具体贡献。"
    return (
        f"这篇论文围绕 {lane_text} 主线展开，问题设置与方法设计具有直接相关性。"
        f"从摘要看，它的核心内容是：{short}。"
        "如果你关注该方向近期进展，这篇论文值得优先浏览原文。"
    )


def int_or_none(value) -> int | None:
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def split_sentences(text: str) -> list[str]:
    return [part.strip() for part in re.split(r"(?<=[.!?])\s+", text) if part.strip()]


def normalize_title(title: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", title.lower()).strip()


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def trim_text(text: str, limit: int) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


if __name__ == "__main__":
    main()
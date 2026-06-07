from __future__ import annotations

import datetime as dt
import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


API_URL = "https://export.arxiv.org/api/query"
OUTPUT_FILE = Path(__file__).resolve().parents[1] / "data" / "site-data.js"
TARGET_COUNT = 20
MAX_RESULTS_PER_QUERY = 200
LOOKBACK_DAYS = 7
MAX_ARCHIVE_DAYS = 60
BOOTSTRAP_START_KEY = "20260601"
BOOTSTRAP_END_KEY = "20260607"
TZ_BEIJING = dt.timezone(dt.timedelta(hours=8))
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}

CATEGORIES = ["cs.RO", "cs.AI", "cs.CV", "cs.LG"]
CATEGORY_SCORES = {
    "cs.RO": 5,
    "cs.AI": 3,
    "cs.CV": 3,
    "cs.LG": 2,
}

RECALL_QUERIES = [
    'cat:cs.RO',
    'cat:cs.AI',
    'cat:cs.CV',
    'cat:cs.LG',
    'all:"vision-language-action"',
    'all:"vision language action"',
    'all:"world action model"',
    'all:"world model"',
    'all:robot',
    'all:robotics',
    'all:"autonomous driving"',
    'all:"self-driving"',
    'all:embodied',
    'all:manipulation',
]

KEYWORD_WEIGHTS = {
    "vision-language-action": 16,
    "vision language action": 16,
    "vla": 12,
    "world action model": 16,
    "world model": 10,
    "robot": 10,
    "robotics": 10,
    "robotic": 9,
    "manipulation": 8,
    "embodied": 8,
    "navigation": 6,
    "autonomous driving": 12,
    "self-driving": 11,
    "driving": 7,
    "policy": 4,
    "planning": 4,
    "benchmark": 3,
    "foundation model": 6,
    "generalist": 5,
    "multimodal": 4,
    "action": 3,
}


def main() -> None:
    existing = load_existing_site_data()
    current_window = compute_batch_window()
    llm_config = get_llm_config()
    archive_map = {
        item["dateKey"]: item
        for item in existing.get("archives", [])
        if isinstance(item, dict) and item.get("dateKey")
    }
    query_cache: dict[str, list[dict]] = {}

    windows = resolve_windows_to_generate(current_window, set(archive_map))
    for window in windows:
        papers = fetch_recent_papers(window["start_utc"], window["end_utc"], query_cache)
        selected = select_top_papers(papers)
        selected = enrich_with_chinese_summaries(selected, llm_config)
        archive_map[window["date_key"]] = build_archive_entry(window, selected)
        print(f"Prepared {len(selected)} papers for {window['date_key']}")

    archives = sort_archives(list(archive_map.values()))
    site_data = build_site_data(archives, current_window, llm_config)
    write_site_data(site_data)
    print(f"Wrote {len(archives)} archives to {OUTPUT_FILE}")


def compute_batch_window() -> dict:
    now_bj = dt.datetime.now(TZ_BEIJING)
    eight_am = now_bj.replace(hour=8, minute=0, second=0, microsecond=0)
    if now_bj < eight_am:
        end_bj = eight_am - dt.timedelta(days=1)
    else:
        end_bj = eight_am
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
        8,
        0,
        0,
        tzinfo=TZ_BEIJING,
    )
    return build_window(end_bj)


def resolve_windows_to_generate(current_window: dict, existing_keys: set[str]) -> list[dict]:
    windows: dict[str, dict] = {current_window["date_key"]: current_window}
    bootstrap_end = min(current_window["date_key"], BOOTSTRAP_END_KEY)
    for date_key in iter_date_keys(BOOTSTRAP_START_KEY, bootstrap_end):
        if date_key not in existing_keys:
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
                cached_results = fetch_query_results(query)
                query_cache[query] = cached_results
            for paper in cached_results:
                if not (start_utc <= paper["published_dt"] < end_utc):
                    continue
                existing = papers_by_id.get(paper["id"])
                if existing is None or paper["score_hint"] > existing["score_hint"]:
                    papers_by_id[paper["id"]] = paper
        except Exception as exc:
            print(f"Skip query {query!r}: {exc}")
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
        paper["score_hint"] = score_paper(paper)
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
        "link": f"https://arxiv.org/abs/{paper_id}",
        "pdfLink": f"https://arxiv.org/pdf/{paper_id}",
        "published": published_raw,
        "updated": updated_raw,
        "published_dt": published_dt,
        "updated_dt": updated_dt,
        "authors": authors[:10],
        "categories": categories[:6],
    }


def select_top_papers(papers: list[dict]) -> list[dict]:
    ranked: list[dict] = []
    for paper in papers:
        score = score_paper(paper)
        if score <= 0:
            continue
        paper["score"] = score
        ranked.append(paper)
    ranked.sort(
        key=lambda item: (item["score"], item["published_dt"], item["updated_dt"]),
        reverse=True,
    )

    selected: list[dict] = []
    seen_title_keys: set[str] = set()
    for paper in ranked:
        title_key = normalize_title(paper["title"])
        if title_key in seen_title_keys:
            continue
        seen_title_keys.add(title_key)
        selected.append(
            {
                "id": paper["id"],
                "title": paper["title"],
                "summary": paper["summary"],
                "summaryCn": paper["summaryCn"],
                "link": paper["link"],
                "pdfLink": paper["pdfLink"],
                "published": paper["published"],
                "updated": paper["updated"],
                "authors": paper["authors"],
                "categories": [cat for cat in paper["categories"] if cat in CATEGORY_SCORES][:4],
                "score": paper["score"],
            }
        )
        if len(selected) >= TARGET_COUNT:
            break
    return selected


def score_paper(paper: dict) -> int:
    haystack = f"{paper['title']} {paper['summary_raw']}".lower()
    score = sum(CATEGORY_SCORES.get(cat, 0) for cat in paper["categories"])
    for keyword, weight in KEYWORD_WEIGHTS.items():
        if keyword in haystack:
            score += weight
    title_lower = paper["title"].lower()
    if "vision-language-action" in title_lower or "vision language action" in title_lower:
        score += 10
    if "world action model" in title_lower:
        score += 10
    if "robot" in title_lower or "driving" in title_lower:
        score += 5
    age_days = max((dt.datetime.now(dt.timezone.utc) - paper["published_dt"]).days, 0)
    score += max(0, LOOKBACK_DAYS - age_days)
    return score


def enrich_with_chinese_summaries(papers: list[dict], llm_config: dict | None) -> list[dict]:
    if not papers:
        return papers
    if llm_config is None:
        for paper in papers:
            paper["summaryCn"] = fallback_summary_cn(paper["summary"])
        return papers

    try:
        summary_map = call_deepseek_batch_summary(papers, llm_config)
        for paper in papers:
            paper["summaryCn"] = clean_text(summary_map.get(paper["id"], "")) or fallback_summary_cn(
                paper["summary"]
            )
    except Exception as exc:
        print(f"DeepSeek summarization failed, fallback to plain summaries: {exc}")
        for paper in papers:
            paper["summaryCn"] = fallback_summary_cn(paper["summary"])
    return papers


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


def call_deepseek_batch_summary(papers: list[dict], llm_config: dict) -> dict[str, str]:
    endpoint = f"{llm_config['base_url']}/chat/completions"
    prompt_items = [
        {
            "id": paper["id"],
            "title": paper["title"],
            "abstract": trim_text(paper["summary"], 900),
        }
        for paper in papers
    ]
    messages = [
        {
            "role": "system",
            "content": (
                "你是一个论文摘要助手。请只输出 JSON 对象，不要输出代码块，不要解释。"
                "字段格式为 {\"items\":[{\"id\":\"...\",\"summary_cn\":\"...\"}]}。"
                "summary_cn 必须是精简中文摘要，1-2 句，45 到 90 个中文字符，突出方法、任务和结果价值。"
            ),
        },
        {
            "role": "user",
            "content": json.dumps({"items": prompt_items}, ensure_ascii=False),
        },
    ]
    payload = {
        "model": llm_config["model"],
        "temperature": 0.2,
        "messages": messages,
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
    body = fetch_bytes(request, timeout=90)
    response = json.loads(body.decode("utf-8"))
    content = response["choices"][0]["message"]["content"]
    parsed = parse_json_from_text(content)
    items = parsed.get("items", [])
    return {
        str(item.get("id", "")).strip(): str(item.get("summary_cn", "")).strip()
        for item in items
        if item.get("id")
    }


def build_archive_entry(window: dict, selected: list[dict]) -> dict:
    return {
        "dateKey": window["date_key"],
        "dateLabel": window["date_label"],
        "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
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
        "description": "每天北京时间 08:00 自动更新，筛选 arXiv 上与 VLA、WAM、机器人、自动驾驶相关的重要新论文。",
        "dateWindowDays": LOOKBACK_DAYS,
        "categories": CATEGORIES,
        "keywords": [
            "vision-language-action",
            "world action model",
            "robotics",
            "autonomous driving",
        ],
        "currentDateKey": current_window["date_key"],
        "selectionMethod": "keyword_ranking_plus_deepseek_summary",
        "llmEnabled": llm_enabled,
        "llmProvider": "DeepSeek",
        "modelInfo": model_info,
        "archives": archives,
    }


def load_existing_site_data() -> dict:
    if not OUTPUT_FILE.exists():
        return {"archives": []}
    raw = OUTPUT_FILE.read_text(encoding="utf-8").strip()
    prefix = "window.PAPERS_SITE_DATA = "
    if raw.startswith(prefix):
        raw = raw[len(prefix) :]
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
    if len(summary) <= 320:
        return summary
    sentences = split_sentences(summary)
    if not sentences:
        return trim_text(summary, 320)
    concise = " ".join(sentences[:2])
    return trim_text(concise, 320)


def fallback_summary_cn(summary: str) -> str:
    short = trim_text(clean_text(summary), 110)
    if not short:
        return "该论文提出了一个与 VLA/WAM 或机器人智能相关的新方法，建议查看原文获取更多细节。"
    return f"论文围绕相关任务提出方法并进行了实验验证，核心内容可概括为：{short}"


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

window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-16T03:09:32.444904+00:00",
  "description": "每天北京时间 08:00 自动更新，只筛选与 VLA 和 WAM 主问题强相关的 arXiv 新论文。",
  "dateWindowDays": 7,
  "categories": [
    "cs.RO",
    "cs.AI",
    "cs.CV",
    "cs.LG"
  ],
  "keywords": [
    "vision-language-action",
    "world action model"
  ],
  "currentDateKey": "20260616",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260616",
      "dateLabel": "2026-06-16",
      "generatedAt": "2026-06-16T03:09:32.444782+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.16253v1",
          "title": "Learned Image Compression for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models increasingly rely on high-frequency multi-camera observations, making visual communication a major bottleneck for real-time robotic control in bandwidth-constrained or distributed deployment settings. Existing image and video codecs, however, are designed to preserve generic visual fidelity rather than the control performance of downstream VLA policies. In this work, we introduce SPARC (SPatially Adaptive Rate Control), a learned image compression framework tailored for VLA-driv…",
          "summaryCn": "SPARC 是一种针对 VLA 机器人的空间自适应率控压缩框架，根据任务相关性分配比特率。实验表明在相同码率下，其控制性能优于传统和最近的压缩方法，尤其在远程操控等真实部署中受益明显。",
          "reasonCn": "直接面向视觉-语言-动作（VLA）模型，提出专用于机器人控制的自适应图像压缩框架，以提升动作执行效果。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.16253v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16253v1",
          "published": "2026-06-15T05:55:58Z",
          "updated": "2026-06-15T05:55:58Z",
          "authors": [
            "Hyeonjun Kim",
            "Jegwang Ryu",
            "Sangbeom Ha",
            "Junhyeok Lee",
            "Jun-Hyuk Kim",
            "Hyemin Ahn",
            "Jaeho Lee"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.16286v1",
          "title": "FlowMPC: Improving Flow Matching policies with World Models",
          "summary": "Flow Matching (FM) is a powerful approach for behavior cloning in multimodal action spaces [Jiang et al., 2025], but because it is not trained to directly maximize expected return, there is still room to improve how FM policies act at test time. This work investigates whether a learned world model can improve FM policies by enabling Model Predictive Path Integral (MPPI) planning over candidate action sequences proposed by the policy. Building on TD-MPC2 [Hansen et al., 2024], I introduce FlowMPC, a framework that…",
          "summaryCn": "FlowMPC 将模仿学习的流匹配策略与学习到的世界模型相结合，在测试时通过 MPPI 规划候选动作序列。在 ManiSkill 操作任务上，加入世界模型后动作成功率提高，验证了规划与世界模型互补的有效性。",
          "reasonCn": "利用学习到的世界模型进行 MPPI 规划，以改进流匹配策略的动作选择，明确聚焦于动作预测与规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16286v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16286v1",
          "published": "2026-06-15T06:50:11Z",
          "updated": "2026-06-15T06:50:11Z",
          "authors": [
            "Chandon Hamel"
          ],
          "categories": [
            "cs.LG",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 59,
          "llmTotalScore": 59
        },
        {
          "id": "2606.16208v1",
          "title": "ATHENA: Accelerated Multi-Task Heterogeneous Influence Functions for Robot Data Curation",
          "summary": "In robot imitation learning, influence functions provide a principled approach to quantify each demonstration's effect on robot task outcomes, yet scaling them to billion-parameter Vision-Language-Action (VLA) models is limited by computational and multitask bottlenecks. To this end, we propose ATHENA, an influence function framework tailored for multitask VLA data curation at a billion-parameter scale. Concretely, it leverages the Kronecker structure of linear-layer gradients to reduce projection cost, and approx…",
          "summaryCn": "ATHENA 针对十亿参数级 VLA 模型，利用 Kronecker 结构加速影响力计算，实现多任务数据筛选。在仿真和真实机器人实验中，仅用 50% 甚至更少的数据即可达到与全数据微调相当的性能，显著降低数据需求。",
          "reasonCn": "提出面向大规模 VLA 模型的高效数据筛选方法，直接服务于 VLA 的微调与性能提升。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.16208v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16208v1",
          "published": "2026-06-15T04:33:16Z",
          "updated": "2026-06-15T04:33:16Z",
          "authors": [
            "Tao Xu",
            "Jiaxin Wang",
            "Runhao Zhang",
            "Jiayi Guan",
            "Xianchao Zeng",
            "Weixi Song",
            "Xinyu Zhou",
            "Zhetao Chen",
            "Guang Chen",
            "Yong-Lu Li"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.16533v1",
          "title": "Kairos: A Native World Model Stack for Physical AI",
          "summary": "World models are transitioning from passive visual generators to foundational, operational infrastructure for Physical AI: they must natively acquire world knowledge from heterogeneous experience, maintain persistent states over long horizons, and execute efficiently within real deployment constraints. We introduce Kairos, a native world model stack designed around these requirements. (1) Kairos learns the world by pioneering a Native Pre-training Paradigm governed by a Cross-Embodiment Data Curriculum, which orga…",
          "summaryCn": "Kairos 是面向物理 AI 的世界模型栈，通过跨具身数据课程、统一架构和部署感知设计实现持久状态维护与高效执行。其核心在于为机器人提供长时序、可行动的模拟能力，是 WAM 研究的基础设施级工作。",
          "reasonCn": "专为物理 AI 设计的原生世界模型栈，明确以动作条件下的未来状态生成与实时观察-动作反馈循环为目标。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16533v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16533v1",
          "published": "2026-06-15T10:37:42Z",
          "updated": "2026-06-15T10:37:42Z",
          "authors": [
            "Kairos Team",
            "Fei Wang",
            "Shan You",
            "Qiming Zhang",
            "Tao Huang",
            "Zuoyi Fu",
            "Zhisheng Zheng",
            "Yunlong Xi",
            "Feng Lv",
            "Xiaoming Wu"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 53,
          "llmTotalScore": 53
        },
        {
          "id": "2606.16504v1",
          "title": "APEX: Adaptive Policy Execution for Precise Manipulation",
          "summary": "Modern imitation learning methods, including visuomotor and Vision-Language-Action (VLA) policies, typically output high-level action references that are executed by low-level controllers. However, the absence of higher-order reference signals, together with the policy's lack of awareness of the underlying low-level control dynamics during training, inevitably induces an execution gap. As a result, realized actions deviate systematically from policy-commanded ones, with a critical impact on precision-sensitive man…",
          "summaryCn": "APEX 是一种即插即用的自适应执行框架，在不修改策略或控制器的情况下，重构动态可行的参考指令并在线适应状态反馈。在仿真和真实操作中，APEX 大幅降低跟踪误差，提升多种 VLA 策略的成功率。",
          "reasonCn": "方法作为插件直接提升 VLA 及视觉运动策略的动作执行精度，解决策略输出与底层控制器的执行差距。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.16504v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16504v1",
          "published": "2026-06-15T10:06:40Z",
          "updated": "2026-06-15T10:06:40Z",
          "authors": [
            "Mengfei Zhao",
            "Chenxi Jiang",
            "Tuo An",
            "Jindou Jia",
            "Jianfei Yang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 50,
          "llmTotalScore": 50
        },
        {
          "id": "2606.16605v1",
          "title": "ARB4WM: An Adversarial Robustness Benchmark for World Models in Continuous Control",
          "summary": "World models are widely used in robotic and agentic engineering control systems due to their ability to learn latent dynamics for planning and decision-making. As these systems are increasingly deployed in safety-critical settings, understanding their robustness under adversarial conditions has become essential. However, existing evaluations lack a unified benchmark for testing adversarial threats across the policy, value, and latent-dynamics levels of world-model agents.",
          "summaryCn": "ARB4WM 定义了白盒攻击目标并测试 Dreamer 类智能体在多种任务中的脆弱性，发现对价值估计和潜在表征的攻击与直接干扰策略同样致命。该基准为部署世界模型前的鲁棒性评估提供了必要工具。",
          "reasonCn": "针对连续控制中使用世界模型进行规划的智能体，提供统一的对抗鲁棒性基准，评估世界模型在决策中的安全性。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16605v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16605v1",
          "published": "2026-06-15T11:51:19Z",
          "updated": "2026-06-15T11:51:19Z",
          "authors": [
            "Junjian Zhang",
            "Hao Tan",
            "Ruonan Li",
            "Dong Zhu",
            "Aiping Li",
            "Zhaoquan Gu"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2606.16519v1",
          "title": "BadWorld: Adversarial Attacks on World Models",
          "summary": "Visual world models (VWMs) synthesize interactive, action-conditioned rollouts from a single context image. However, it remains an open question how robust these models are to adversarial perturbations. Standard adversarial attacks fail to assess this vulnerability because attackers lack ground-truth future videos and cannot predict subsequent user controls.",
          "summaryCn": "BadWorld 提出无标签对抗框架，通过自监督速度攻击和轨迹自适应优化，使世界模型产生的未来视频出现严重退化。这项工作指出了当前世界模型在对抗扰动下的巨大风险，也为隐私保护提供了一种可行机制。",
          "reasonCn": "专门攻击基于动作条件的自回归视觉世界模型，揭示其在安全关键系统中的结构脆弱性，属于 WAM 的鲁棒性研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16519v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16519v1",
          "published": "2026-06-15T10:21:12Z",
          "updated": "2026-06-15T10:21:12Z",
          "authors": [
            "Linghui Shen",
            "Mingyue Cui",
            "Xingyi Yang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2606.16274v1",
          "title": "GraphWorld: Long-Horizon Planning with World Models for End-to-End Autonomous Driving",
          "summary": "End-to-end autonomous driving has made significant progress by unifying perception, prediction, and planning within a single learning framework, achieving strong performance in short-horizon decision making. However, most existing E2E-AD methods remain confined to short-horizon planning and lack the ability to model long-term temporal dependencies, which severely limits their generalization and security in complex and highly interactive driving scenarios. In this work, we propose GraphWorld, an E2E-AD framework th…",
          "summaryCn": "GraphWorld 构建以自我为中心的交互图，并学习世界状态条件规划，让潜在世界表征捕捉安全相关的交互动态。在多个驾驶基准上，该方法显著降低了碰撞率并提升了长时域规划性能。",
          "reasonCn": "在端到端自动驾驶中显式使用潜在世界模型进行长时序规划，将建模的交互动态直接用于轨迹生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16274v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16274v1",
          "published": "2026-06-15T06:26:46Z",
          "updated": "2026-06-15T06:26:46Z",
          "authors": [
            "Ziying Song",
            "Caiyan Jia",
            "Lin Liu",
            "Lei Yang",
            "Shengkai Zhang",
            "Feiyang Jia",
            "Fengda Zhao",
            "Peiliang Wu",
            "Shaoqing Xu",
            "Chen Lv"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2606.16721v1",
          "title": "Medical world models: representing medical states, modelling clinical dynamics and guiding intervention policies",
          "summary": "Medical diagnosis and treatment are dynamic processes in which patient states evolve over time and clinical interventions alter future outcomes. Although current medical AI can detect disease, estimate risk and generate reports, many systems still return static labels or scores, offering limited insight into how illness may progress or how alternative interventions may reshape its trajectory. Medical world models adapt the world-model idea from artificial intelligence to healthcare by learning internal simulators…",
          "summaryCn": "该综述勾勒了医疗世界模型的路线图，涵盖患者状态构建、临床动力学建模和干预决策支持三大能力。通过整合感知与演化的模拟器，为临床决策提供基于模型的推理基础。",
          "reasonCn": "系统综述了医疗世界模型如何模拟疾病演变并指导干预决策，核心是将世界模型用于动作策略选择。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16721v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16721v1",
          "published": "2026-06-15T13:49:43Z",
          "updated": "2026-06-15T13:49:43Z",
          "authors": [
            "Ke Liu",
            "Mengxuan Li",
            "Yanyi Bao",
            "Tianyun Zhang",
            "Chong Chu",
            "Jiajun Bu",
            "Haishuai Wang"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 34,
          "llmTotalScore": 34
        },
        {
          "id": "2606.16480v1",
          "title": "HOLO-MPPI: Multi-Scenario Motion Planning via Hierarchical Policy Optimization",
          "summary": "Robots deployed in the real world must plan motions across diverse scenarios without per-scenario retuning. End-to-end reinforcement learning (RL) can generalize across scenarios but often becomes brittle under distribution shift, reward misspecification, and stochastic interactions. Model predictive path integral (MPPI) control enables strong real-time refinement without gradients, but its performance depends on a well-shaped sampling prior, while manually designing the priors does not scale to multi-scenario dep…",
          "summaryCn": "HOLO-MPPI 将离线高分学习与在线 MPPI 控制结合，用世界模型提供 rollout 推演，从而使规划适应多场景。在自动驾驶评测中，该框架在扰动下获得比端到端 RL 和纯 MPPI 更好的表现。",
          "reasonCn": "使用学习到的世界模型进行在线 rollout，支撑 MPPI 规划以生成机器人动作，是典型的世界模型用于动作规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16480v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16480v1",
          "published": "2026-06-15T09:49:14Z",
          "updated": "2026-06-15T09:49:14Z",
          "authors": [
            "Youngjae Min",
            "Jovin D'sa",
            "Faizan M. Tariq",
            "David Isele",
            "Navid Azizan",
            "Sangjae Bae"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 34,
          "llmTotalScore": 34
        },
        {
          "id": "2606.16489v1",
          "title": "BRICKS-WM: Building Reusability via Interface Composition Kinetics for Structured World Models",
          "summary": "Model-based Reinforcement Learning (MBRL) has achieved remarkable success in continuous control by leveraging latent world models. However, prevailing approaches typically rely on monolithic latent dynamics, entangling environment dynamics into a coupled process. This coupling severely limits reusability: altering the agent necessitates retraining the entire world from scratch, even if the environment remains constant.",
          "summaryCn": "BRICKS-WM 将潜在状态分解为智能体和背景模块，通过潜在接口组合动力学，实现世界模型的模块化组装。在控制任务中，该方法取得与整体式基线相当的性能，且允许冻结的背景动力学在不同智能体间复用。",
          "reasonCn": "提出结构化世界模型用于模型基强化学习控制，通过模块化设计使背景动力学可复用，直接支持动作决策。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.16489v1",
          "pdfLink": "https://arxiv.org/pdf/2606.16489v1",
          "published": "2026-06-15T09:55:33Z",
          "updated": "2026-06-15T09:55:33Z",
          "authors": [
            "Shaowei Zhang",
            "Jiahan Cao",
            "Xunlan Zhou",
            "Shenghua Wan",
            "De-Chuan Zhan"
          ],
          "categories": [
            "cs.LG"
          ],
          "heuristicScore": 32,
          "llmTotalScore": 32
        }
      ]
    },
    {
      "dateKey": "20260615",
      "dateLabel": "2026-06-15",
      "generatedAt": "2026-06-15T03:09:30.231159+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.09215v1",
          "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
          "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces an…",
          "summaryCn": "MotionWAM提出基于视频世界模型的实时世界动作模型，将上层与下层统一为单一运动潜变量，并预测全身运动令牌。通过三阶段训练逐步适应第一人称视觉动态，在真实Unitree G1任务上以超过30%优势超越VLA基线，展示了世界模型在实时物理交互中的价值。",
          "reasonCn": "以世界模型为核心，通过视频去噪特征驱动动作预测，用于人形机器人移动操作，但未使用语言指令，故为WAM而非VLA。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
          "published": "2026-06-08T08:50:14Z",
          "updated": "2026-06-08T08:50:14Z",
          "authors": [
            "Jia Zheng",
            "Teli Ma",
            "Yudong Fan",
            "Zifan Wang",
            "Shuo Yang",
            "Junwei Liang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 154,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12105v1",
          "title": "DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model",
          "summary": "Vision-language-action (VLA) models inherit a shared synchronous clock from vision-language pretraining, processing every input at one rate. This is misaligned with physical interaction, where a high-frequency modality changes at hundreds of hertz, vision evolves more slowly, and language stays constant across an episode. A synchronous VLA oversamples slow modalities, undersamples fast ones, and caps action generation at the lowest effective frequency.",
          "summaryCn": "DAM-VLA解耦各模态的时序处理，让每个模态按照自身传感器速率更新和保留信息，通过门控交叉注意力整合高频模态，实现100Hz平滑控制。在七个接触丰富的真实操控任务中，平均成功率是强同步基线两倍以上，表明解耦时钟能提升VLA在物理交互中的表示和控制。",
          "reasonCn": "论文明确涉及视觉、语言指令和机器人动作输出，提出解耦异步多模态VLA模型，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12105v1",
          "published": "2026-06-10T13:59:07Z",
          "updated": "2026-06-10T13:59:07Z",
          "authors": [
            "Pankhuri Vanjani",
            "Zhuoyue Li",
            "Jakub Suliga",
            "Moritz Reuss",
            "Gianluca Geraci",
            "Xinkai Jiang",
            "Rudolf Lioutikov"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 133,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12299v1",
          "title": "Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model Steering",
          "summary": "Vision-Language-Action (VLA) models provide a natural language interface to robot control, but the mapping from language to behavior is often brittle and unintuitive: semantically similar instructions can induce drastically different behaviors, while some capabilities may not be elicitable through prompting alone. As a result, both human instructions and zero-shot language models can fail to reliably steer VLAs toward successful task execution. In this work, we propose a framework that interactively searches for l…",
          "summaryCn": "该工作提出交互式搜索语言序列来改善闭环VLA任务表现的框架，蒸馏为测试时语言反馈策略，并学习预测何时语言引导可提升性能。在仿真和硬件上均显著提升基础VLA性能，且对冻结模型无害化保证有效，提高了语言引导VLA的可靠性和泛化性。",
          "reasonCn": "论文研究如何通过语言序列引导VLA模型，涉及视觉、语言和动作，是典型的VLA方法。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12299v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12299v1",
          "published": "2026-06-10T16:34:49Z",
          "updated": "2026-06-10T16:34:49Z",
          "authors": [
            "Hyun Joe Jeong",
            "Gokul Swamy",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 129,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10363v1",
          "title": "HiMem-WAM: Hierarchical Memory-Gated World Action Models for Robotic Manipulation",
          "summary": "World Action Models (WAMs) have emerged as a new powerful paradigm for embodied intelligence, learning action-relevant visual dynamics that significantly enhance generalization and robustness. However, existing WAMs still struggle with task-relevant memory in long-horizon robotic manipulation. To address this, we present HiMem-WAM, a Hierarchical Memory-Gated WAM that integrates motion-centric latent actions, high-level skill latents, and boundary-triggered memory updates.",
          "summaryCn": "HiMem-WAM采用层次潜动作框架，联合学习底层运动和高层技能潜变量，并利用边界感知记忆门在技能转换时写入紧凑任务状态。在LIBERO等长时序基准和真实任务中，层次潜变量提升扰动鲁棒性，记忆模块显著受益于记忆依赖的操控任务，突出了结构化时间抽象和选择性记忆的重要性。",
          "reasonCn": "论文提出层次记忆门控世界动作模型，核心是世界模型用于动作预测，未涉及语言指令，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.10363v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10363v1",
          "published": "2026-06-09T03:22:34Z",
          "updated": "2026-06-09T03:22:34Z",
          "authors": [
            "Xiaoquan Sun",
            "Ruijian Zhang",
            "Chen Cao",
            "Yihan Sun",
            "Jiahui Chen",
            "Zetian Xu",
            "Bo Chen",
            "Haijier Chen",
            "Zhen Yang",
            "Jiarun Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 125,
          "llmTotalScore": 0
        },
        {
          "id": "2606.08962v1",
          "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
          "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process.",
          "summaryCn": "C3ache是一种无需训练的方法，通过缓存和复用跨推理块的去噪残差来加速世界动作模型推断。在Fast-WAM骨干上实现最高2.5倍墙钟时间加速，任务成功率退化可忽略，为解决WAM计算开销提供了一种简单有效的跨块缓存策略。",
          "reasonCn": "论文专注于世界动作模型的推理加速，属于WAM相关技术，不涉及语言指令，故归为WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08962v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
          "published": "2026-06-08T03:01:10Z",
          "updated": "2026-06-08T03:01:10Z",
          "authors": [
            "Weisen Zhao",
            "Lam Nguyen",
            "Zhicong Lu",
            "Yuzhang Shang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 119,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12403v1",
          "title": "World Pilot: Steering Vision-Language-Action Models with World-Action Priors",
          "summary": "Vision-Language-Action (VLA) models inherit semantic grounding from large-scale pretraining and perform competently across in-distribution manipulation tasks. This grounding, however, is built on static image-text pairs, whereas manipulation is a continuous, contact-rich process whose dynamics this pretraining cannot capture. We present World Pilot, a VLA framework that augments the policy with priors from a World-Action Model (WAM), routed into the decision chain through two complementary pathways.",
          "summaryCn": "World Pilot框架通过潜变量引导和动作引导两种互补通路，将WAM的物理先验注入VLA决策链条，为策略提供场景演化和运动提示。在LIBERO-Plus零样本OOD基准上达到84.7%的总成功率，并在真实机器人视角、几何、可变形物体等变化下均取得最高成功率，展示了融合世界模型先验的优势。",
          "reasonCn": "论文提出将世界动作模型先验引入VLA框架，同时涉及语言指令、视觉输入和动作输出，属于VLA与WAM的深度结合。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.12403v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12403v1",
          "published": "2026-06-10T17:59:08Z",
          "updated": "2026-06-10T17:59:08Z",
          "authors": [
            "Zefu Lin",
            "Rongxu Cui",
            "Junjia Xu",
            "Xiaojuan Jin",
            "Wenling Li",
            "Lue Fan",
            "Zhaoxiang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 0
        },
        {
          "id": "2606.14409v1",
          "title": "Hy-Embodied-0.5-VLA: From Vision-Language-Action Models to a Real-World Robot Learning Stack",
          "summary": "In this report, we present Hy-Embodied-0.5-VLA, abbreviated as HyVLA-0.5, an end-to-end system that spans the full robot learning stack: data collection, model design, continued pre-training and supervised fine-tuning, RL post-training, and real-world deployment. Each component serves a distinct role in this stack.",
          "summaryCn": "HyVLA-0.5提供了完整的机器人学习堆栈，包括数据收集、模型设计、继续预训练、监督微调、RL后训练和真实部署。该报告系统化描述了各组件的作用，为VLA的实际落地提供了端到端解决方案。",
          "reasonCn": "标题和摘要明确表明为一个端到端VLA系统，涵盖数据、模型、训练和部署全栈，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.14409v1",
          "pdfLink": "https://arxiv.org/pdf/2606.14409v1",
          "published": "2026-06-12T12:45:18Z",
          "updated": "2026-06-12T12:45:18Z",
          "authors": [
            "He Zhang",
            "Lingzhu Xiang",
            "Haitao Lin",
            "Zeyu Huang",
            "Minghui Wang",
            "Dingyan Zhong",
            "Yubo Dong",
            "Yihao Wu",
            "Yongming Rao",
            "Dongsheng Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 114,
          "llmTotalScore": 0
        },
        {
          "id": "2606.14010v1",
          "title": "RT-VLA: Real-Time Vision-Language-Action Models via Knowledge Distillation",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for end-to-end autonomous driving by jointly modeling visual perception, language reasoning, explainability and action prediction. However, their large vision-language backbones and reasoning modules introduce substantial inference latency and thereby prevent their deployment in the unforgiving reality of the road networks. We propose RT-VLA, a lightweight, distilled VLA model that transfers the driving and reasoning capabilities of the state-of-the-a…",
          "summaryCn": "RT-VLA通过多级监督蒸馏将SimLingo的驾驶和推理能力压缩到轻量级学生模型，保持有竞争力的闭环驾驶和语言解释性能，同时推理时间减少44.8倍（纯视觉）和7.9倍。表明蒸馏是构建实时可解释VLA自动驾驶模型的有效途径。",
          "reasonCn": "论文提出通过知识蒸馏构建实时VLA模型用于自动驾驶，涉及视觉、语言推理和动作预测，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.14010v1",
          "pdfLink": "https://arxiv.org/pdf/2606.14010v1",
          "published": "2026-06-12T01:06:42Z",
          "updated": "2026-06-12T01:06:42Z",
          "authors": [
            "Xiangyu Huang",
            "Zhenlin Hua",
            "Han Zhou",
            "Shounak Sural",
            "Ragunathan Rajkumar"
          ],
          "categories": [
            "cs.CV",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 114,
          "llmTotalScore": 0
        },
        {
          "id": "2606.13494v1",
          "title": "NavWAM: A Navigation World Action Model for Goal-Conditioned Visual Navigation",
          "summary": "Goal-conditioned visual navigation requires a robot to act under partial observability by anticipating how its motion will change the future egocentric view and whether that change brings it closer to the goal. Navigation world models provide such visual foresight, but they remain prediction modules that require an external planner to convert predicted futures into closed-loop control. We propose Navigation World Action Model (NavWAM), a diffusion-transformer policy that turns navigation world-model prediction int…",
          "summaryCn": "NavWAM是一种扩散变换器策略，将未来观测、目标进度值和动作块表示为共享潜序列，联合学习未来预测和闭环控制目标。在图像目标导航中，优于基于规划的世界模型基线，默认无需CEM式搜索，使视觉预见直接用于机器人控制。",
          "reasonCn": "论文提出导航世界动作模型，将世界模型预测与可执行动作直接结合，用于视觉导航，未用语言指令，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13494v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13494v1",
          "published": "2026-06-11T15:44:36Z",
          "updated": "2026-06-11T15:44:36Z",
          "authors": [
            "Daichi Azuma",
            "Taiki Miyanishi",
            "Koya Sakamoto",
            "Shuhei Kurita",
            "Yaonan Zhu",
            "Petr Khrapchenkov",
            "Motoaki Kawanabe",
            "Yusuke Iwasawa",
            "Yutaka Matsuo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 102,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09827v1",
          "title": "MemoryVLA++: Temporal Modeling via Memory and Imagination in Vision-Language-Action Models",
          "summary": "Temporal modeling is essential for robotic manipulation, as effective control requires both memory of past interactions and imagination of future states. However, most VLA models rely primarily on the current observation and therefore struggle with long-horizon, temporally dependent tasks. Cognitive science suggests that humans rely on working memory to buffer short-lived context, the hippocampal system to preserve episodic memory of past experience, and internal models to imagine possible future state evolution.",
          "summaryCn": "MemoryVLA++受认知科学启发，为VLA配备工作记忆、感知认知记忆库和世界模型想象模块，通过去噪潜空间想象未来状态并整合记忆引导的时序令牌。在5个仿真基准和3类真实任务中取得了最先进结果，验证了记忆与想象对时序建模的有效性。",
          "reasonCn": "论文在VLA框架中引入记忆和世界模型想象力，语言指令、视觉和动作均具备，且世界模型用于想象未来状态以辅助动作预测，属VLA与WAM结合。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.09827v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09827v1",
          "published": "2026-06-08T17:59:53Z",
          "updated": "2026-06-08T17:59:53Z",
          "authors": [
            "Hao Shi",
            "Weiye Li",
            "Bin Xie",
            "Yulin Wang",
            "Renping Zhou",
            "Tiancai Wang",
            "Xiangyu Zhang",
            "Ping Luo",
            "Gao Huang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12217v1",
          "title": "Making Foresight Actionable: Repurposing Representation Alignment in World Action Models",
          "summary": "World Action Models (WAMs) offer a promising route for robot manipulation by using video generation models to model future scene evolution before producing control actions. However, our empirical observations reveal a phenomenon: generating plausible visual futures does not always guarantee the extraction of accurate actions. To diagnose this failure, we conduct action-head attention analysis and causal interventions.",
          "summaryCn": "AGRA通过动作接地表示对齐目标，正则化世界-动作接口，使中间视频扩散特征与基础视觉编码器的空间语义对齐，从而让动作解码器聚焦任务相关区域。在真实操控任务中，提升目标定位精度和扰动鲁棒性，改善了WAM的域内和域外性能。",
          "reasonCn": "论文针对世界动作模型中视觉重建与动作控制表示不匹配问题提出对齐目标，属于WAM改进工作，不涉及语言指令。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12217v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12217v1",
          "published": "2026-06-10T15:31:25Z",
          "updated": "2026-06-10T15:31:25Z",
          "authors": [
            "Lu Qiu",
            "Yizhuo Li",
            "Yi Chen",
            "Yuying Ge",
            "Yixiao Ge",
            "Xihui Liu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 0
        },
        {
          "id": "2606.13674v1",
          "title": "RepWAM: World Action Modeling with Representation Visual-Action Tokenizers",
          "summary": "This work presents RepWAM, a representation-centric world action model (WAM) built on representation visual-action tokenizers. Existing WAMs typically inherit reconstruction-oriented video tokenizers from pretrained video generation models. Although these tokenizers preserve visual fidelity, pixel reconstruction alone provides limited guidance for learning instruction-following dynamics that connect future prediction with robot control.",
          "summaryCn": "RepWAM训练表示视觉-动作标记器，将视觉输入映射为对齐的视觉和潜动作令牌，并预训练联合建模未来视觉状态和连接它们的潜动作。在真实和仿真操控任务中表现强劲，消融实验强调语义标记优于重建导向的标记，为WAM提供了新范式。",
          "reasonCn": "提出基于语义视觉-动作标记的世界动作模型，替代像素重建，用于动作预测，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13674v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13674v1",
          "published": "2026-06-11T17:59:43Z",
          "updated": "2026-06-11T17:59:43Z",
          "authors": [
            "Junke Wang",
            "Qihang Zhang",
            "Shuai Yang",
            "Yiming Luo",
            "Yujun Shen",
            "Zuxuan Wu",
            "Yu-Gang Jiang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 94,
          "llmTotalScore": 0
        },
        {
          "id": "2606.14375v1",
          "title": "Elastic Queries Reinforcement Learning: Self-Aware Policy Execution for VLA Models",
          "summary": "Vision-language-action (VLA) models are powerful action generators for robot manipulation, but they are typically executed with fixed inference and replanning schedules. This rigidity ignores the uneven difficulty of robot control: contact-rich or uncertain states may need more computation and fresher feedback, while easier states can often be handled with fewer inference steps and longer open-loop execution. We propose Elastic Queries Reinforcement Learning (EQRL), a framework that makes each VLA policy query ela…",
          "summaryCn": "EQRL通过轻量潜调度适配器联合选择潜输入、去噪预算和动作块长度，使VLA查询适应状态难度，不微调底层模型。训练评论家通过集成分歧获取难度信号，在模拟和真实机器人上减少摊销推理成本同时保持成功率，实现了任务感知的弹性执行。",
          "reasonCn": "论文针对VLA模型的固定推理调度，提出弹性查询强化学习框架，涉及视觉、语言和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.14375v1",
          "pdfLink": "https://arxiv.org/pdf/2606.14375v1",
          "published": "2026-06-12T12:06:41Z",
          "updated": "2026-06-12T12:06:41Z",
          "authors": [
            "Ge Wang",
            "Xinyu Tan",
            "Xiang Li",
            "Man Luo",
            "Chengsi Yao",
            "Shenhao Yan",
            "Jiahao Yang",
            "Fan Feng",
            "Honghao Cai",
            "Xiangyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2606.14153v1",
          "title": "Encoder Winners Do Not Reliably Transfer Across VLA Backbone Scale: A Frozen-Backbone Grafting Diagnostic",
          "summary": "Vision-language-action (VLA) policies typically inherit their vision encoder from upstream VLM releases, but it is unclear whether an encoder choice validated on a small VLA transfers to a larger backbone. We introduce a frozen-backbone grafting diagnostic: the vision tower of a released VLA is replaced by a candidate encoder under a fixed protocol (adaptive average pooling, LayerNorm, and a single trainable linear projector), with the language model and action expert frozen. Across four encoders, two LIBERO suite…",
          "summaryCn": "该工作提出冻结骨干嫁接诊断，替换VLA视觉塔并冻结语言模型和动作专家，评测不同规模下的编码器表现。发现小规模最优编码器不一定推广到大规模，且嫁接封装本身有偏倚，建议在目标规模上诊断编码器选择，为VLA视觉骨干扩展提供方法论。",
          "reasonCn": "论文研究VLA中视觉编码器跨规模迁移问题，属于VLA架构分析，涉及视觉和动作，符合VLA相关研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.14153v1",
          "pdfLink": "https://arxiv.org/pdf/2606.14153v1",
          "published": "2026-06-12T06:27:00Z",
          "updated": "2026-06-12T06:27:00Z",
          "authors": [
            "Qingping Zeng",
            "Fei She"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2606.13886v1",
          "title": "PhysVLA: Towards Physically-Grounded VLA for Embodied Robotic Manipulation",
          "summary": "Vision-Language-Action (VLA) models excel at mapping visual inputs and natural language instructions directly to robotic control policies. However, because they are trained primarily to fit behavioural demonstration data, they do not explicitly enforce fundamental physical principles such as rigid-body dynamics or contact constraints. This exposes a critical physics gap: standard temporal smoothing applied on top of single-step or chunked VLAs trades trajectory quality for added failures that short-term memory can…",
          "summaryCn": "PhysVLA是即插即用的推理时框架，用阶段感知有限状态机和选择性欧拉-拉格朗日门对冻结VLA预测的动作进行双层校正，每步开销<1ms。在多个VLA和LIBERO-Spatial上实现最高17%成功率提升和19%稳定性提升，零任务退化，有效弥合物理差距。",
          "reasonCn": "论文提出物理接地VLA框架，在推理时施加物理校正，涉及视觉、语言指令和动作输出，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13886v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13886v1",
          "published": "2026-06-11T20:23:09Z",
          "updated": "2026-06-11T20:23:09Z",
          "authors": [
            "Namai Chandra",
            "Shriram Damodaran",
            "Lin Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12352v1",
          "title": "CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy",
          "summary": "Multi-robot collaboration allows robots to efficiently take on a wide range of tasks, from moving a couch through a doorway to assembling structures on a construction site. However, achieving such coordination in mobile multi-robot settings remains challenging: centralized methods conditioned on the combined observations of a team scale poorly with team size, and decentralized methods that train one policy per robot often require explicit alignment procedures or information sharing at inference time to overcome pa…",
          "summaryCn": "CHORUS采用单个共享VLA主干为多机器人团队生成去中心化控制，每机器人只依赖本地观测和身份提示。在真实移动操作任务中比从头训练模型提升64%，反应性改善40%，显示出VLA先验能实现无需显式对齐或信息共享的主动协作。",
          "reasonCn": "论文利用预训练VLA模型实现多机器人去中心化协作，涉及视觉、语言指令和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12352v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12352v1",
          "published": "2026-06-10T17:26:08Z",
          "updated": "2026-06-10T17:26:08Z",
          "authors": [
            "Ria Doshi",
            "Tian Gao",
            "Annie Chen",
            "Chelsea Finn",
            "Jeannette Bohg"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12109v1",
          "title": "Bridging the Morphology Gap: Adapting VLA Models to Dexterous Manipulation via Intent-Conditioned Fine-Tuning",
          "summary": "Vision-Language-Action (VLA) models have demonstrated remarkable zero-shot generalization in robotic manipulation, yet the vast majority of pre-trained pipelines remain strictly confined to low-DoF parallel grippers. Adapting these rich semantic priors to high-DoF dexterous hands introduces a severe morphology gap, direct end-to-end joint fine-tuning inherently causes catastrophic forgetting of spatial reasoning and acute action manifold collapse due to data scarcity. In this paper, we present InDex, a novel, data…",
          "summaryCn": "InDex将VLA预训练的抓取输出重新用作宏观意图代理，通过两阶段解耦学习：第一阶段参数高效对齐VLA预测臂轨迹和标量意图，第二阶段冻结骨干用条件去噪头解码多指关节动作。在少量演示下掌握接触丰富灵巧操作任务，大幅优于单阶段微调，缓解灾难性遗忘。",
          "reasonCn": "论文提出将VLA从平行夹爪适配到灵巧手的微调框架，涉及视觉、语言指令和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12109v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12109v1",
          "published": "2026-06-10T14:03:52Z",
          "updated": "2026-06-10T14:03:52Z",
          "authors": [
            "Chuanke Pang",
            "Junyi Huang",
            "Zhijun Zhao",
            "Yaobing Wang",
            "Kun Xu",
            "Xilun Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 0
        },
        {
          "id": "2606.14084v1",
          "title": "Self-Improving VLA Policies: Selected Diffusion Noise for Spurious-Robust Action Smoothing",
          "summary": "Diffusion-based Vision-Language-Action (VLA) policies enable strong generalization in robotic manipulation, but remain sensitive to spurious visual correlations and noisy action generation, leading to brittle behavior under perturbations. We introduce Selected Diffusion Noise (SDN), a simple, training-free test-time method that improves both robustness and success rate by leveraging the diffusion noise space as a controllable degree of freedom. SDN dynamically samples noise vectors that are maximally separated fro…",
          "summaryCn": "SDN在测试时动态选择与参考集最大分离的噪声向量，以减轻对虚假线索的依赖，同时选择产生更连贯的动作轨迹的候选。在模拟和真实世界多个VLA上平均提升8-10%成功率，并减少动作抖动，提供了一种通用的测试时增强机制。",
          "reasonCn": "论文提出扩散噪声选择方法提升VLA策略鲁棒性和动作平滑度，涉及视觉、语言和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.14084v1",
          "pdfLink": "https://arxiv.org/pdf/2606.14084v1",
          "published": "2026-06-12T03:59:47Z",
          "updated": "2026-06-12T03:59:47Z",
          "authors": [
            "Duc Minh Nguyen",
            "Bao-Ngoc Dao",
            "Tung M. Luu",
            "Binh Gia Nguyen",
            "Vinh Tong",
            "Anji Liu",
            "Vu N. Duong",
            "Dung D. Le",
            "Daniel Sonntag",
            "Trung Le"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10267v1",
          "title": "What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents",
          "summary": "Hierarchical vision-language-action (Hi-VLA) systems have emerged as a promising paradigm for complex robot manipulation, by using high-level VLM planners to decompose tasks into language subgoals executed by low-level VLA controllers. Despite recent empirical progress, there is a lack of unified design principles for these systems: existing Hi-VLA systems differ in how they choose and connect planners, controllers, mechanisms to switch between the two, and how observations and memory are represented in the planne…",
          "summaryCn": "该工作统一Hi-VLA代理在选项式控制框架下，基准化规划器、控制器、切换机制和观察表示等核心设计。分析提炼出构建原则，遵循原则的系统在仿真和真实ALOHA上均超越平面VLA和朴素层次化系统，为构建更强大Hi-VLA代理提供了基础。",
          "reasonCn": "论文系统研究层次化VLA系统的设计选择，涉及高层VLM规划和低层VLA控制，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10267v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10267v1",
          "published": "2026-06-09T00:24:00Z",
          "updated": "2026-06-09T00:24:00Z",
          "authors": [
            "Jiaheng Hu",
            "Mohit Shridhar",
            "Caden Lu",
            "Dhruv Shah",
            "Hao-Tien Lewis Chiang",
            "Jie Tan",
            "Annie Xie"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.13578v1",
          "title": "LabVLA: Grounding Vision-Language-Action Models in Scientific Laboratories",
          "summary": "Scientific laboratories increasingly rely on AI systems to reason about experiments, but the physical act of doing science remains largely outside their reach. AI can help read literature, generate hypotheses, and plan protocols, yet the execution of those protocols at the bench still requires a human operator. Vision-Language-Action (VLA) models provide one possible interface between written protocols and robot execution, but existing policies are trained mostly on household and tabletop demonstrations and rarely…",
          "summaryCn": "LabVLA利用仿真数据引擎RoboGenesis生成实验室工作流程演示，采用FAST动作令牌预训练和流匹配后训练，使Qwen3-VL骨干具备动作感知。旨在将书面协议转化为机器人执行，缩小实验室自动化中的执行差距。",
          "reasonCn": "论文提出面向科学实验室的VLA模型，通过仿真数据引擎和两阶段训练实现协议执行，涉及视觉、语言指令和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13578v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13578v1",
          "published": "2026-06-11T17:03:53Z",
          "updated": "2026-06-11T17:03:53Z",
          "authors": [
            "Baochang Ren",
            "Xinjie Liu",
            "Xi Chen",
            "Yanshuo Liu",
            "Chenxi Li",
            "Daqi Gao",
            "Zeqin Su",
            "Jintao Xing",
            "Zirui Xue",
            "Rui Li"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260614",
      "dateLabel": "2026-06-14",
      "generatedAt": "2026-06-14T03:00:32.964046+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.09215v1",
          "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
          "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces an…",
          "summaryCn": "MotionWAM 提出了一个实时世界行动模型，用于人形机器人的移动操作任务。该模型使用单一自视角相机，通过统一运动潜在空间同时预测全身运动令牌，实现移动、躯干运动和手部操作的协调控制。在九个真实世界任务中显著优于VLA基线，成功率提升超过30%。",
          "reasonCn": "该论文以世界模型为核心，直接输出机器人全身动作，不依赖语言指令，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
          "published": "2026-06-08T08:50:14Z",
          "updated": "2026-06-08T08:50:14Z",
          "authors": [
            "Jia Zheng",
            "Teli Ma",
            "Yudong Fan",
            "Zifan Wang",
            "Shuo Yang",
            "Junwei Liang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 155,
          "llmTotalScore": 155
        },
        {
          "id": "2606.12105v1",
          "title": "DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model",
          "summary": "Vision-language-action (VLA) models inherit a shared synchronous clock from vision-language pretraining, processing every input at one rate. This is misaligned with physical interaction, where a high-frequency modality changes at hundreds of hertz, vision evolves more slowly, and language stays constant across an episode. A synchronous VLA oversamples slow modalities, undersamples fast ones, and caps action generation at the lowest effective frequency.",
          "summaryCn": "DAM-VLA提出了一种解耦异步多模态VLA模型，使不同模态按各自速率异步处理。通过门控交叉注意力集成新模态，在不破坏预训练骨干的情况下实现100Hz平滑反应控制，在七个接触丰富的真实操作任务中成功率提升一倍以上。",
          "reasonCn": "该模型同时处理视觉输入、语言指令和动作输出，属于典型的VLA模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12105v1",
          "published": "2026-06-10T13:59:07Z",
          "updated": "2026-06-10T13:59:07Z",
          "authors": [
            "Pankhuri Vanjani",
            "Zhuoyue Li",
            "Jakub Suliga",
            "Moritz Reuss",
            "Gianluca Geraci",
            "Xinkai Jiang",
            "Rudolf Lioutikov"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 134,
          "llmTotalScore": 134
        },
        {
          "id": "2606.12299v1",
          "title": "Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model Steering",
          "summary": "Vision-Language-Action (VLA) models provide a natural language interface to robot control, but the mapping from language to behavior is often brittle and unintuitive: semantically similar instructions can induce drastically different behaviors, while some capabilities may not be elicitable through prompting alone. As a result, both human instructions and zero-shot language models can fail to reliably steer VLAs toward successful task execution. In this work, we propose a framework that interactively searches for l…",
          "summaryCn": "本文提出一个在测试时通过搜索语言序列来引导VLA模型的框架，并学习一个语言反馈策略和一个改进头以避免有害干预。在仿真和硬件上，该方法在未见环境上提高了VLA基础性能，并保证了无伤害性。",
          "reasonCn": "该研究直接作用于VLA模型，通过优化语言输入来改善机器人动作执行，符合VLA范畴。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12299v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12299v1",
          "published": "2026-06-10T16:34:49Z",
          "updated": "2026-06-10T16:34:49Z",
          "authors": [
            "Hyun Joe Jeong",
            "Gokul Swamy",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 130,
          "llmTotalScore": 130
        },
        {
          "id": "2606.10363v1",
          "title": "HiMem-WAM: Hierarchical Memory-Gated World Action Models for Robotic Manipulation",
          "summary": "World Action Models (WAMs) have emerged as a new powerful paradigm for embodied intelligence, learning action-relevant visual dynamics that significantly enhance generalization and robustness. However, existing WAMs still struggle with task-relevant memory in long-horizon robotic manipulation. To address this, we present HiMem-WAM, a Hierarchical Memory-Gated WAM that integrates motion-centric latent actions, high-level skill latents, and boundary-triggered memory updates.",
          "summaryCn": "HiMem-WAM提出了一种层次记忆门控的世界行动模型，用于长时域机器人操作。通过层次潜在动作框架和边界触发记忆更新，增强了对任务相关信息的记忆，在多个基准上表现出鲁棒性。",
          "reasonCn": "该模型以世界模型为核心，通过预测未来视频状态并生成动作，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.10363v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10363v1",
          "published": "2026-06-09T03:22:34Z",
          "updated": "2026-06-09T03:22:34Z",
          "authors": [
            "Xiaoquan Sun",
            "Ruijian Zhang",
            "Chen Cao",
            "Yihan Sun",
            "Jiahui Chen",
            "Zetian Xu",
            "Bo Chen",
            "Haijier Chen",
            "Zhen Yang",
            "Jiarun Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 127,
          "llmTotalScore": 127
        },
        {
          "id": "2606.08962v1",
          "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
          "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process.",
          "summaryCn": "C^3ache提出了一种训练免费的跨推理块缓存方法，通过复用去噪残差加速世界行动模型的推理。在Fast-WAM骨干上实现高达2.5倍加速，且任务成功率几乎无损，有效提升了WAM的实时性。",
          "reasonCn": "该工作专注于世界行动模型的加速，本身不涉及语言指令，属于WAM技术改进。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08962v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
          "published": "2026-06-08T03:01:10Z",
          "updated": "2026-06-08T03:01:10Z",
          "authors": [
            "Weisen Zhao",
            "Lam Nguyen",
            "Zhicong Lu",
            "Yuzhang Shang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 121,
          "llmTotalScore": 121
        },
        {
          "id": "2606.12403v1",
          "title": "World Pilot: Steering Vision-Language-Action Models with World-Action Priors",
          "summary": "Vision-Language-Action (VLA) models inherit semantic grounding from large-scale pretraining and perform competently across in-distribution manipulation tasks. This grounding, however, is built on static image-text pairs, whereas manipulation is a continuous, contact-rich process whose dynamics this pretraining cannot capture. We present World Pilot, a VLA framework that augments the policy with priors from a World-Action Model (WAM), routed into the decision chain through two complementary pathways.",
          "summaryCn": "World Pilot框架通过引入世界行动模型的先验来增强VLA策略，包括潜在转向和行动转向两个互补途径。在LIBERO-Plus零样本OOD基准上达到最先进成功率，并在真实机器人操作中表现优异。",
          "reasonCn": "该模型同时涉及视觉-语言-动作和作为先验的世界行动模型，因此属于BOTH类别。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.12403v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12403v1",
          "published": "2026-06-10T17:59:08Z",
          "updated": "2026-06-10T17:59:08Z",
          "authors": [
            "Zefu Lin",
            "Rongxu Cui",
            "Junjia Xu",
            "Xiaojuan Jin",
            "Wenling Li",
            "Lue Fan",
            "Zhaoxiang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 118,
          "llmTotalScore": 118
        },
        {
          "id": "2606.13494v1",
          "title": "NavWAM: A Navigation World Action Model for Goal-Conditioned Visual Navigation",
          "summary": "Goal-conditioned visual navigation requires a robot to act under partial observability by anticipating how its motion will change the future egocentric view and whether that change brings it closer to the goal. Navigation world models provide such visual foresight, but they remain prediction modules that require an external planner to convert predicted futures into closed-loop control. We propose Navigation World Action Model (NavWAM), a diffusion-transformer policy that turns navigation world-model prediction int…",
          "summaryCn": "NavWAM提出了一种用于目标条件视觉导航的导航世界行动模型，将未来预测与动作生成结合在共享潜在序列中。通过仿真预训练和真实机器人适配，在图像目标导航任务中优于基于规划的世界模型基线。",
          "reasonCn": "该模型以世界模型为核心，直接预测动作，不涉及语言指令，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13494v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13494v1",
          "published": "2026-06-11T15:44:36Z",
          "updated": "2026-06-11T15:44:36Z",
          "authors": [
            "Daichi Azuma",
            "Taiki Miyanishi",
            "Koya Sakamoto",
            "Shuhei Kurita",
            "Yaonan Zhu",
            "Petr Khrapchenkov",
            "Motoaki Kawanabe",
            "Yusuke Iwasawa",
            "Yutaka Matsuo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.08530v2",
          "title": "GEAR-VLA: Learning Geometry-Aware Action Representations for Generalizable Robotic Manipulation",
          "summary": "Vision-Language-Action (VLA) models achieve strong benchmark performance but still struggle in real-world deployment with unseen objects, background shifts, and different robot embodiments. We argue that this stems from the lack of a unified geometry-aware manipulation representation, leaving existing VLAs vulnerable to low-level trajectory supervision, misaligned 3D features, and embodiment differences. To address this, we propose GEAR-VLA, a VLA framework for learning unified geometry-aware action representation…",
          "summaryCn": "GEAR-VLA提出了一种学习统一几何感知动作表示的VLA框架。从粗到细的动作学习结合多源具身预训练和梯度解耦的DiT动作专家，在多个基准上实现了强大的泛化能力。",
          "reasonCn": "该模型处理视觉、语言和动作，属于VLA，尽管声称BOTH，但摘要未体现世界模型成分。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08530v2",
          "pdfLink": "https://arxiv.org/pdf/2606.08530v2",
          "published": "2026-06-07T09:23:16Z",
          "updated": "2026-06-10T13:54:28Z",
          "authors": [
            "Yuan Zhang",
            "Shiqi Zhang",
            "Yedong Shen",
            "Shuai Dong",
            "Jiajun Deng",
            "Xin Zhang",
            "Yuxuan Gao",
            "Jiajia Wu",
            "Xin Nie",
            "Zhiyuan Cheng"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 103,
          "llmTotalScore": 103
        },
        {
          "id": "2606.09827v1",
          "title": "MemoryVLA++: Temporal Modeling via Memory and Imagination in Vision-Language-Action Models",
          "summary": "Temporal modeling is essential for robotic manipulation, as effective control requires both memory of past interactions and imagination of future states. However, most VLA models rely primarily on the current observation and therefore struggle with long-horizon, temporally dependent tasks. Cognitive science suggests that humans rely on working memory to buffer short-lived context, the hippocampal system to preserve episodic memory of past experience, and internal models to imagine possible future state evolution.",
          "summaryCn": "MemoryVLA++为VLA模型引入记忆和想象力机制，利用记忆银行和世界模型进行时间建模。世界模型想象未来状态并与记忆整合，指导动作预测，在长时域任务上表现出色。",
          "reasonCn": "该模型结合VLA和世界模型（用于动作想象），属于BOTH。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.09827v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09827v1",
          "published": "2026-06-08T17:59:53Z",
          "updated": "2026-06-08T17:59:53Z",
          "authors": [
            "Hao Shi",
            "Weiye Li",
            "Bin Xie",
            "Yulin Wang",
            "Renping Zhou",
            "Tiancai Wang",
            "Xiangyu Zhang",
            "Ping Luo",
            "Gao Huang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2606.12217v1",
          "title": "Making Foresight Actionable: Repurposing Representation Alignment in World Action Models",
          "summary": "World Action Models (WAMs) offer a promising route for robot manipulation by using video generation models to model future scene evolution before producing control actions. However, our empirical observations reveal a phenomenon: generating plausible visual futures does not always guarantee the extraction of accurate actions. To diagnose this failure, we conduct action-head attention analysis and causal interventions.",
          "summaryCn": "本文提出AGRA，通过将世界模型中间特征与基础视觉编码器的语义表示对齐，使世界行动模型的表示更有利于动作控制。实验表明改进了目标定位和鲁棒性，提高了操作成功率。",
          "reasonCn": "专注于世界行动模型的改进，不涉及语言，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12217v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12217v1",
          "published": "2026-06-10T15:31:25Z",
          "updated": "2026-06-10T15:31:25Z",
          "authors": [
            "Lu Qiu",
            "Yizhuo Li",
            "Yi Chen",
            "Yuying Ge",
            "Yixiao Ge",
            "Xihui Liu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 98
        },
        {
          "id": "2606.13674v1",
          "title": "RepWAM: World Action Modeling with Representation Visual-Action Tokenizers",
          "summary": "This work presents RepWAM, a representation-centric world action model (WAM) built on representation visual-action tokenizers. Existing WAMs typically inherit reconstruction-oriented video tokenizers from pretrained video generation models. Although these tokenizers preserve visual fidelity, pixel reconstruction alone provides limited guidance for learning instruction-following dynamics that connect future prediction with robot control.",
          "summaryCn": "RepWAM提出了一种基于表示视觉-动作分词器的世界行动模型，在语言指令下联合建模未来视觉和动作。通过语义对齐增强控制能力，为通用机器人策略奠定基础。",
          "reasonCn": "该模型接收语言指令，预测动作，并使用世界模型进行视频预测，因此同时符合VLA和WAM。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.13674v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13674v1",
          "published": "2026-06-11T17:59:43Z",
          "updated": "2026-06-11T17:59:43Z",
          "authors": [
            "Junke Wang",
            "Qihang Zhang",
            "Shuai Yang",
            "Yiming Luo",
            "Yujun Shen",
            "Zuxuan Wu",
            "Yu-Gang Jiang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 96,
          "llmTotalScore": 96
        },
        {
          "id": "2606.12352v1",
          "title": "CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy",
          "summary": "Multi-robot collaboration allows robots to efficiently take on a wide range of tasks, from moving a couch through a doorway to assembling structures on a construction site. However, achieving such coordination in mobile multi-robot settings remains challenging: centralized methods conditioned on the combined observations of a team scale poorly with team size, and decentralized methods that train one policy per robot often require explicit alignment procedures or information sharing at inference time to overcome pa…",
          "summaryCn": "CHORUS提出了一种去中心化多机器人协作框架，使用单一VLA策略，每个机器人仅基于自身观察和身份提示独立运行。在真实世界多机器人任务中显著优于去中心化基线，展示了预训练VLA的协作潜力。",
          "reasonCn": "该工作使用VLA模型进行多机器人控制，同时涉及视觉、语言和动作，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12352v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12352v1",
          "published": "2026-06-10T17:26:08Z",
          "updated": "2026-06-10T17:26:08Z",
          "authors": [
            "Ria Doshi",
            "Tian Gao",
            "Annie Chen",
            "Chelsea Finn",
            "Jeannette Bohg"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.12109v1",
          "title": "Bridging the Morphology Gap: Adapting VLA Models to Dexterous Manipulation via Intent-Conditioned Fine-Tuning",
          "summary": "Vision-Language-Action (VLA) models have demonstrated remarkable zero-shot generalization in robotic manipulation, yet the vast majority of pre-trained pipelines remain strictly confined to low-DoF parallel grippers. Adapting these rich semantic priors to high-DoF dexterous hands introduces a severe morphology gap, direct end-to-end joint fine-tuning inherently causes catastrophic forgetting of spatial reasoning and acute action manifold collapse due to data scarcity. In this paper, we present InDex, a novel, data…",
          "summaryCn": "InDex提出了一种数据高效的适配框架，将VLA模型适配到灵巧手操作。利用预训练的抓取意图作为宏观代理，并通过意图条件扩散头解码手指关节动作，在灵巧操作任务中优于端到端微调基线。",
          "reasonCn": "该工作扩展VLA模型到高自由度灵巧手，涉及视觉、语言（意图）和动作，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12109v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12109v1",
          "published": "2026-06-10T14:03:52Z",
          "updated": "2026-06-10T14:03:52Z",
          "authors": [
            "Chuanke Pang",
            "Junyi Huang",
            "Zhijun Zhao",
            "Yaobing Wang",
            "Kun Xu",
            "Xilun Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.13578v1",
          "title": "LabVLA: Grounding Vision-Language-Action Models in Scientific Laboratories",
          "summary": "Scientific laboratories increasingly rely on AI systems to reason about experiments, but the physical act of doing science remains largely outside their reach. AI can help read literature, generate hypotheses, and plan protocols, yet the execution of those protocols at the bench still requires a human operator. Vision-Language-Action (VLA) models provide one possible interface between written protocols and robot execution, but existing policies are trained mostly on household and tabletop demonstrations and rarely…",
          "summaryCn": "LabVLA旨在解决科学实验室中VLA模型的应用挑战，通过实验室特定监督和统一的跨具身学习框架，将语言协议映射到机器人执行。利用RoboGenesis生成训练数据，并在多种实验室机器人上验证。",
          "reasonCn": "该模型处理视觉、语言指令和机器人动作，属于VLA在科学领域的应用。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13578v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13578v1",
          "published": "2026-06-11T17:03:53Z",
          "updated": "2026-06-11T17:03:53Z",
          "authors": [
            "Baochang Ren",
            "Xinjie Liu",
            "Xi Chen",
            "Yanshuo Liu",
            "Chenxi Li",
            "Daqi Gao",
            "Zeqin Su",
            "Jintao Xing",
            "Zirui Xue",
            "Rui Li"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2606.12497v1",
          "title": "$μ$VLA: On Recurrent Memory for Partially Observable Manipulation in VLA Models",
          "summary": "Vision-language-action (VLA) models predict chunks of future actions from the current observation, an assumption that fails under partial observability, where decisions depend on information no longer visible. Existing memory-augmented VLAs simultaneously introduce recurrence, retrieval, compression modules, auxiliary objectives, hierarchical memory, or task-specific architectural changes, so the contribution of recurrence itself remains entangled with surrounding machinery. We present a controlled isolation study…",
          "summaryCn": "μVLA通过引入少量可学习的记忆令牌并通过截断BPTT训练，为VLA模型添加了纯递归记忆，在部分可观测操作任务中大幅提升成功率，且不依赖辅助损失或架构改动。",
          "reasonCn": "该模型直接扩展VLA架构以处理部分可观测性，涉及视觉、语言和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12497v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12497v1",
          "published": "2026-06-10T13:26:40Z",
          "updated": "2026-06-10T13:26:40Z",
          "authors": [
            "Egor Cherepanov",
            "Nikita Kachaev",
            "Daniil Zelezetsky",
            "Aydar Bulatov",
            "Artem Pshenitsyn",
            "Yuri Kuratov",
            "Alexey Skrynnik",
            "Aleksandr I. Panov",
            "Alexey K. Kovalev"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.11743v1",
          "title": "TacCoRL: Integrating Tactile Feedback into VLA via Simulation",
          "summary": "Vision-language-action (VLA) models provide strong visual, language, and action priors for robot manipulation, but visual observations alone often miss the local contact state required for contact-rich tasks. We present TacCoRL, a scalable framework that injects Tactile feedback into VLA policies and improves them through sim-real Co-training and simulation-based reinforcement learning (RL), without requiring large-scale tactile pretraining or extensive real-world contact exploration. The key idea is not only addi…",
          "summaryCn": "TacCoRL提出了一种通过仿真集成触觉反馈到VLA策略的框架，利用强化学习优化接触动作，并保持对真实分布的锚定，在双手接触丰富任务中展示了迁移能力。",
          "reasonCn": "该工作将触觉反馈引入VLA，同时处理视觉、语言和动作，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.11743v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11743v1",
          "published": "2026-06-10T07:20:36Z",
          "updated": "2026-06-10T07:20:36Z",
          "authors": [
            "Siyu Ma",
            "Yuqi Liang",
            "Chang Yu",
            "Yunuo Chen",
            "Hao Su",
            "Yixin Zhu",
            "Yin Yang",
            "Chenfanfu Jiang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.08653v1",
          "title": "FiberTune: Preserving Action-Fiber Visual Residuals in Vision-Language-Action Fine-Tuning",
          "summary": "Action-supervised fine-tuning of vision-language-action (VLA) policies fits demonstrations effectively but constrains only the directions that change predicted actions, leaving visual structure consistent across action-equivalent states free to collapse. We formalize this as residual visual collapse along local action fibers and propose FiberTune, a training-time objective that preserves teacher-structured visual residuals without adding inference-time overhead. FiberTune uses an online action probe to estimate ac…",
          "summaryCn": "FiberTune提出一种在微调VLA策略时保持视觉残差结构的训练目标，通过过滤动作预测方向并对齐残差来防止动作纤维上的视觉坍缩，在多个基准上提升了性能。",
          "reasonCn": "该工作改进了VLA的微调方法，同时涉及视觉、语言和动作，属于VLA范畴。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08653v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08653v1",
          "published": "2026-06-07T14:41:22Z",
          "updated": "2026-06-07T14:41:22Z",
          "authors": [
            "Haihao Lin",
            "Xiangsheng Huang",
            "Xiao Yang",
            "Weibang Zhou",
            "Yiqi Zhang",
            "Bo Yang",
            "Simin Zeng",
            "Jiawei Yang",
            "Zhengyang Wang",
            "Jiahui Du"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.11187v1",
          "title": "Next Forcing: Causal World Modeling with Multi-Chunk Prediction",
          "summary": "Autoregressive video generation has emerged as a powerful paradigm for World Action Models (WAMs). However, existing approaches suffer from slow training convergence and limited converged accuracy, particularly at high frame rates, as the training supervision is confined to the current chunk without explicit signals about future dynamics; they also suffer from slow inference due to iterative video denoising. In this paper, we present Next Forcing, a multi-chunk prediction (MCP) framework for causal world modeling…",
          "summaryCn": "Next Forcing提出了一个多块预测框架，通过辅助模块同时预测多个未来视频块，加速世界行动模型的训练和推理，在高帧率下显著提升收敛速度和精度。",
          "reasonCn": "该工作改进了世界行动模型的视频预测训练，涉及动作条件的未来状态建模，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.11187v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11187v1",
          "published": "2026-06-09T17:59:22Z",
          "updated": "2026-06-09T17:59:22Z",
          "authors": [
            "Gangwei Xu",
            "Qihang Zhang",
            "Jiaming Zhou",
            "Xing Zhu",
            "Yujun Shen",
            "Xin Yang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.12690v1",
          "title": "EWAM: An Enhanced World Action Model for Closed-Loop Online Adaptation in Embodied Intelligence",
          "summary": "In this paper, we propose the Enhanced World Action Model (EWAM), a closed-loop online adaptation architecture built upon a pretrained and fully frozen Cosmos3 backbone network. Evaluated entirely under a zero-shot task protocol, EWAM is centrally focused on reducing the amount of additional deployment data required to adapt to new task layouts. Notably, no extra task-specific demonstration sets were introduced in any of the evaluations, and no fine-tuning was performed on the backbone network.",
          "summaryCn": "EWAM提出了一个增强的世界行动模型，利用冻结的Cosmos3骨干和四个轻量神经层实现在线适应，无需额外微调即可在新任务布局中通过推理时共推理机制提升性能，包括动作校正。",
          "reasonCn": "该模型以世界模型为核心，用于动作预测和在线适应，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12690v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12690v1",
          "published": "2026-06-10T21:24:46Z",
          "updated": "2026-06-10T21:24:46Z",
          "authors": [
            "Xin Zhou",
            "Cong Miao"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.09630v1",
          "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
          "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses…",
          "summaryCn": "ReCoVLA提出了一种VLA策略的故障恢复框架，利用外部视觉语言模型推断故障模式并编译奖励，训练残差恢复策略，在仿真和真实实验中提高了操作成功率。",
          "reasonCn": "该工作针对VLA策略的故障恢复，同时涉及视觉、语言和动作，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09630v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
          "published": "2026-06-08T15:29:09Z",
          "updated": "2026-06-08T15:29:09Z",
          "authors": [
            "Haodi Hu",
            "Chung-Ta Huang",
            "Jing Liu",
            "Ye Wang",
            "Kei Suzuki",
            "Matthew Brand",
            "Toshiaki Koike-Akino"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        }
      ]
    },
    {
      "dateKey": "20260613",
      "dateLabel": "2026-06-13",
      "generatedAt": "2026-06-13T02:48:59.834455+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.09215v1",
          "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
          "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces an…",
          "summaryCn": "MotionWAM 是一种实时世界动作模型，面向人形机器人的移动操作，通过统一的运动潜变量取代传统的上下体分层控制，从单目视觉直接预测全身动作令牌。该方法在 Unitree G1 的九项实际任务中实时运行，成功率和执行力大幅超过微调后的 VLA 基线，展示了世界模型在具身控制中的潜力。",
          "reasonCn": "提出了一个实时世界动作模型，从单目相机输入直接驱动机器人全身运动，核心在于联合建模未来观察与动作控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
          "published": "2026-06-08T08:50:14Z",
          "updated": "2026-06-08T08:50:14Z",
          "authors": [
            "Jia Zheng",
            "Teli Ma",
            "Yudong Fan",
            "Zifan Wang",
            "Shuo Yang",
            "Junwei Liang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 157,
          "llmTotalScore": 157
        },
        {
          "id": "2606.12105v1",
          "title": "DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model",
          "summary": "Vision-language-action (VLA) models inherit a shared synchronous clock from vision-language pretraining, processing every input at one rate. This is misaligned with physical interaction, where a high-frequency modality changes at hundreds of hertz, vision evolves more slowly, and language stays constant across an episode. A synchronous VLA oversamples slow modalities, undersamples fast ones, and caps action generation at the lowest effective frequency.",
          "summaryCn": "DAM-VLA 是一种解码异步的 VLA 模型，为每种模态维护独立潜变量缓冲区，并以传感器原生速率更新，通过门控交叉注意力融合高频触觉等信息，保持预训练骨干不变。在七项接触密集型真实操作任务中，平均成功率比最强同步基线提高一倍以上，并实现 100Hz 平稳控制。",
          "reasonCn": "提出一种解耦异步多模态视觉语言动作模型，分别以不同速率处理视觉、语言和动作，符合 VLA 定义。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12105v1",
          "published": "2026-06-10T13:59:07Z",
          "updated": "2026-06-10T13:59:07Z",
          "authors": [
            "Pankhuri Vanjani",
            "Zhuoyue Li",
            "Jakub Suliga",
            "Moritz Reuss",
            "Gianluca Geraci",
            "Xinkai Jiang",
            "Rudolf Lioutikov"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 136,
          "llmTotalScore": 136
        },
        {
          "id": "2606.12299v1",
          "title": "Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model Steering",
          "summary": "Vision-Language-Action (VLA) models provide a natural language interface to robot control, but the mapping from language to behavior is often brittle and unintuitive: semantically similar instructions can induce drastically different behaviors, while some capabilities may not be elicitable through prompting alone. As a result, both human instructions and zero-shot language models can fail to reliably steer VLAs toward successful task execution. In this work, we propose a framework that interactively searches for l…",
          "summaryCn": "本文提出一个针对冻结预训练 VLA 的交互式语言引导框架，通过在线搜索发现能提升闭环任务性能的语言序列，并将其蒸馏为测试时的语言反馈策略。该策略经共形预测校准以避免有害干预，在模拟和真实环境显著提升成功率，并展现出对视觉和语义扰动的鲁棒恢复行为。",
          "reasonCn": "研究如何通过语言序列引导 VLA 模型的行为，直接涉及 VLA 的操控与改进。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12299v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12299v1",
          "published": "2026-06-10T16:34:49Z",
          "updated": "2026-06-10T16:34:49Z",
          "authors": [
            "Hyun Joe Jeong",
            "Gokul Swamy",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 132,
          "llmTotalScore": 132
        },
        {
          "id": "2606.10363v1",
          "title": "HiMem-WAM: Hierarchical Memory-Gated World Action Models for Robotic Manipulation",
          "summary": "World Action Models (WAMs) have emerged as a new powerful paradigm for embodied intelligence, learning action-relevant visual dynamics that significantly enhance generalization and robustness. However, existing WAMs still struggle with task-relevant memory in long-horizon robotic manipulation. To address this, we present HiMem-WAM, a Hierarchical Memory-Gated WAM that integrates motion-centric latent actions, high-level skill latents, and boundary-triggered memory updates.",
          "summaryCn": "HiMem-WAM 是一种分层记忆门控世界动作模型，同时学习底层运动和高层技能潜变量，并在预测的技能转换边界触发记忆写入，从而支持因果推理。在 LIBERO、LIBERO-PLUS、RMBench 及真实任务中，分层潜变量提升了部署扰动下的鲁棒性，记忆模块显著改善了依赖记忆的长期操作成功。",
          "reasonCn": "提出分层记忆门控世界动作模型，以分层潜动作和边界触发记忆更新实现长期规划与控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.10363v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10363v1",
          "published": "2026-06-09T03:22:34Z",
          "updated": "2026-06-09T03:22:34Z",
          "authors": [
            "Xiaoquan Sun",
            "Ruijian Zhang",
            "Chen Cao",
            "Yihan Sun",
            "Jiahui Chen",
            "Zetian Xu",
            "Bo Chen",
            "Haijier Chen",
            "Zhen Yang",
            "Jiarun Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 128,
          "llmTotalScore": 128
        },
        {
          "id": "2606.08962v1",
          "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
          "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process.",
          "summaryCn": "C³ache 是一种训练无关的推理加速技术，通过缓存并复用跨推理块的去噪残差，利用连续执行中的相关性减少计算冗余。在 Fast-WAM 骨干上实现最高 2.5 倍总推理时间加速，且任务成功率几乎无下降，为 WAM 的实时部署提供了实用方案。",
          "reasonCn": "提出加速世界动作模型推理的跨块缓存方法，直接针对 WAM 的效率问题。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08962v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
          "published": "2026-06-08T03:01:10Z",
          "updated": "2026-06-08T03:01:10Z",
          "authors": [
            "Weisen Zhao",
            "Lam Nguyen",
            "Zhicong Lu",
            "Yuzhang Shang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 123,
          "llmTotalScore": 123
        },
        {
          "id": "2606.12403v1",
          "title": "World Pilot: Steering Vision-Language-Action Models with World-Action Priors",
          "summary": "Vision-Language-Action (VLA) models inherit semantic grounding from large-scale pretraining and perform competently across in-distribution manipulation tasks. This grounding, however, is built on static image-text pairs, whereas manipulation is a continuous, contact-rich process whose dynamics this pretraining cannot capture. We present World Pilot, a VLA framework that augments the policy with priors from a World-Action Model (WAM), routed into the decision chain through two complementary pathways.",
          "summaryCn": "World Pilot 框架通过两条路径将世界动作模型中的场景演化潜变量和运动先验引入 VLA 的决策链：潜变量引导感知层，动作引导向动作生成器提供运动提示。在 LIBERO-Plus 零样本 OOD 基准上达到 84.7% 的总成功率，在四项真实操作任务中全部获得最高成功率，尤其在视角、几何、可变形状态和姿态变化下优势明显。",
          "reasonCn": "将世界动作模型的先验注入 VLA 框架，结合了视觉语言动作和世界模型两个要素。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.12403v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12403v1",
          "published": "2026-06-10T17:59:08Z",
          "updated": "2026-06-10T17:59:08Z",
          "authors": [
            "Zefu Lin",
            "Rongxu Cui",
            "Junjia Xu",
            "Xiaojuan Jin",
            "Wenling Li",
            "Lue Fan",
            "Zhaoxiang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 120,
          "llmTotalScore": 120
        },
        {
          "id": "2606.08094v1",
          "title": "vla.cpp: A Unified Inference Runtime for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) policies are typically shipped as Python/PyTorch stacks that assume a workstation-class GPU, a mismatch for the hardware on which robots actually run. We present vla.cpp, a portable C++ inference runtime built on llama.cpp. To our knowledge, it is the first ggml-class engine to natively serve the flow-matching and diffusion VLA inference pattern, in which a cached vision-language prefix is consumed by a cross-attending action expert integrated over several solver steps.",
          "summaryCn": "vla.cpp 是一个基于 llama.cpp 的便携 C++ 推理引擎，首次在 ggml 级别原生支持流匹配和扩散 VLA 推理模式。它能用一个请求-响应协议服务七类架构、五种骨干和四种动作头家族的模型，在低至 8GB 嵌入模块上也能运行，并通过对批量-1 推理的计算利用优化实现 4.5 倍延迟降低。",
          "reasonCn": "为 VLA 模型提供统一跨平台推理运行时，属于 VLA 部署工具。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08094v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08094v1",
          "published": "2026-06-06T10:45:40Z",
          "updated": "2026-06-06T10:45:40Z",
          "authors": [
            "Khanh D. Nguyen",
            "Hung T. Ho",
            "Chinh T. Nguyen",
            "Thanh Q. Duong",
            "Linh D. Le",
            "Duy M. H. Nguyen",
            "Vien A. Ngo",
            "An T. Le"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.13494v1",
          "title": "NavWAM: A Navigation World Action Model for Goal-Conditioned Visual Navigation",
          "summary": "Goal-conditioned visual navigation requires a robot to act under partial observability by anticipating how its motion will change the future egocentric view and whether that change brings it closer to the goal. Navigation world models provide such visual foresight, but they remain prediction modules that require an external planner to convert predicted futures into closed-loop control. We propose Navigation World Action Model (NavWAM), a diffusion-transformer policy that turns navigation world-model prediction int…",
          "summaryCn": "NavWAM 是一种面向目标条件视觉导航的扩散-Transformer 策略，将未来观测、目标进度值和动作块表示在共享潜序列中，联合学习未来预测与闭环控制目标。通过仿真预训练和真实机器人适应，在图像目标导航任务中优于基于规划的方案，且使用默认策略模式无需动作搜索。",
          "reasonCn": "提出导航世界动作模型，将世界模型预测直接转化为可执行动作，融合预测与行动。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13494v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13494v1",
          "published": "2026-06-11T15:44:36Z",
          "updated": "2026-06-11T15:44:36Z",
          "authors": [
            "Daichi Azuma",
            "Taiki Miyanishi",
            "Koya Sakamoto",
            "Shuhei Kurita",
            "Yaonan Zhu",
            "Petr Khrapchenkov",
            "Motoaki Kawanabe",
            "Yusuke Iwasawa",
            "Yutaka Matsuo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 105,
          "llmTotalScore": 105
        },
        {
          "id": "2606.08530v2",
          "title": "GEAR-VLA: Learning Geometry-Aware Action Representations for Generalizable Robotic Manipulation",
          "summary": "Vision-Language-Action (VLA) models achieve strong benchmark performance but still struggle in real-world deployment with unseen objects, background shifts, and different robot embodiments. We argue that this stems from the lack of a unified geometry-aware manipulation representation, leaving existing VLAs vulnerable to low-level trajectory supervision, misaligned 3D features, and embodiment differences. To address this, we propose GEAR-VLA, a VLA framework for learning unified geometry-aware action representation…",
          "summaryCn": "GEAR-VLA 通过多源具身预训练和潜在动作令牌提供粗略动作语义，再由解耦梯度连续动作专家细化，并训练 3D 空间主干与 VLA 表示对齐，最后通过实施例正则化实现跨机器人共享。在 LIBERO、零样本 LIBERO-Plus 和 RoboTwin 2.0 上取得领先成绩，实现物体、背景、实施例泛化。",
          "reasonCn": "学习几何感知动作表示的通用 VLA 框架，具备视觉语言指令和连续动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08530v2",
          "pdfLink": "https://arxiv.org/pdf/2606.08530v2",
          "published": "2026-06-07T09:23:16Z",
          "updated": "2026-06-10T13:54:28Z",
          "authors": [
            "Yuan Zhang",
            "Shiqi Zhang",
            "Yedong Shen",
            "Shuai Dong",
            "Jiajun Deng",
            "Xin Zhang",
            "Yuxuan Gao",
            "Jiajia Wu",
            "Xin Nie",
            "Zhiyuan Cheng"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.09827v1",
          "title": "MemoryVLA++: Temporal Modeling via Memory and Imagination in Vision-Language-Action Models",
          "summary": "Temporal modeling is essential for robotic manipulation, as effective control requires both memory of past interactions and imagination of future states. However, most VLA models rely primarily on the current observation and therefore struggle with long-horizon, temporally dependent tasks. Cognitive science suggests that humans rely on working memory to buffer short-lived context, the hippocampal system to preserve episodic memory of past experience, and internal models to imagine possible future state evolution.",
          "summaryCn": "MemoryVLA++ 受认知科学启发，为 VLA 引入工作记忆和想象能力：预训练 VLM 编码当前观察形成工作记忆，查询感知-认知记忆库检索历史上下文，世界模型在去噪潜空间想象未来状态，融合上述令牌调节扩散动作专家预测动作序列。在五个仿真基准和三类真实任务中表现出强大的时序建模能力。",
          "reasonCn": "在 VLA 中集成记忆库和世界模型对未来状态的想象，同时具备语言指令处理和动作生成，并将世界模型用于控制。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.09827v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09827v1",
          "published": "2026-06-08T17:59:53Z",
          "updated": "2026-06-08T17:59:53Z",
          "authors": [
            "Hao Shi",
            "Weiye Li",
            "Bin Xie",
            "Yulin Wang",
            "Renping Zhou",
            "Tiancai Wang",
            "Xiangyu Zhang",
            "Ping Luo",
            "Gao Huang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 101,
          "llmTotalScore": 101
        },
        {
          "id": "2606.12217v1",
          "title": "Making Foresight Actionable: Repurposing Representation Alignment in World Action Models",
          "summary": "World Action Models (WAMs) offer a promising route for robot manipulation by using video generation models to model future scene evolution before producing control actions. However, our empirical observations reveal a phenomenon: generating plausible visual futures does not always guarantee the extraction of accurate actions. To diagnose this failure, we conduct action-head attention analysis and causal interventions.",
          "summaryCn": "AGRA 观察到 WAM 中动作解码器忽视任务相关区域，提出动作接地表征对齐目标，使用基础视觉编码器的语义表征规范中间扩散特征。在真实操作任务中，该正则化使动作解码器聚焦正确交互区域，提升物体定位和示能理解，对任务无关区域扰动更鲁棒，一致提升域内和域外成功率。",
          "reasonCn": "通过表征对齐解决世界动作模型中动作解码器关注错误区域的问题，直接优化 WAM 的动作控制性能。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12217v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12217v1",
          "published": "2026-06-10T15:31:25Z",
          "updated": "2026-06-10T15:31:25Z",
          "authors": [
            "Lu Qiu",
            "Yizhuo Li",
            "Yi Chen",
            "Yuying Ge",
            "Yixiao Ge",
            "Xihui Liu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 100,
          "llmTotalScore": 100
        },
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "Light-WAM 采用紧致视频骨干并在降采样潜空间进行未来视频监督，降低计算成本同时保持表征学习收益；引入 StateFusionActionExpert 从多层骨干读取状态并预测动作块。该模型仅 0.44B 可训参数，在 LIBERO 上保持强劲性能，在 RoboTwin 2.0 上达到可用多任务水平，推理延迟 72ms，峰值显存 4.1GiB，提升训练吞吐量。",
          "reasonCn": "提出轻量级世界动作模型，通过状态融合动作解码器实现高效控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08242v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08242v1",
          "published": "2026-06-06T15:58:12Z",
          "updated": "2026-06-06T15:58:12Z",
          "authors": [
            "Ziang Li",
            "Dongzhou Cheng",
            "Yibin Wang",
            "Shiyue Wang",
            "Xiaoyang Xu",
            "Lingxuan Weng",
            "Juan Wang",
            "Jiaqi Wang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 100,
          "llmTotalScore": 100
        },
        {
          "id": "2606.13674v1",
          "title": "RepWAM: World Action Modeling with Representation Visual-Action Tokenizers",
          "summary": "This work presents RepWAM, a representation-centric world action model (WAM) built on representation visual-action tokenizers. Existing WAMs typically inherit reconstruction-oriented video tokenizers from pretrained video generation models. Although these tokenizers preserve visual fidelity, pixel reconstruction alone provides limited guidance for learning instruction-following dynamics that connect future prediction with robot control.",
          "summaryCn": "RepWAM 训练表示视觉-动作标记器将视觉输入映射为对齐的视觉和潜动作令牌，然后预训练 WAM 在语言指令下联合建模未来视觉状态和连接它们的潜动作。在真实任务和仿真基准中展现了强性能，消融实验突显了语义视觉-动作标记化相较于重建导向方案的价值，为通用策略提供了新基础。",
          "reasonCn": "提出以语义为中心的视觉-动作标记器构建的世界动作模型，直接建模指令跟随的动力学。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13674v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13674v1",
          "published": "2026-06-11T17:59:43Z",
          "updated": "2026-06-11T17:59:43Z",
          "authors": [
            "Junke Wang",
            "Qihang Zhang",
            "Shuai Yang",
            "Yiming Luo",
            "Yujun Shen",
            "Zuxuan Wu",
            "Yu-Gang Jiang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 97
        },
        {
          "id": "2606.12352v1",
          "title": "CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy",
          "summary": "Multi-robot collaboration allows robots to efficiently take on a wide range of tasks, from moving a couch through a doorway to assembling structures on a construction site. However, achieving such coordination in mobile multi-robot settings remains challenging: centralized methods conditioned on the combined observations of a team scale poorly with team size, and decentralized methods that train one policy per robot often require explicit alignment procedures or information sharing at inference time to overcome pa…",
          "summaryCn": "CHORUS 框架采用一个共享的 VLA 骨干，每个机器人运行独立副本，仅依赖局部观测和身份提示。在真实多移动操作任务（如胶带测量、书籍传递、篮筐搬运）中，成功率提升 64 个百分点，对同伴行为的反应速度提高 40 个百分点，并优于集中式基线，展示了 VLA 在多体协同中的潜力。",
          "reasonCn": "将单个 VLA 策略用于去中心化多机器人协作，涉及视觉、语言指令和多机器人动作控制。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12352v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12352v1",
          "published": "2026-06-10T17:26:08Z",
          "updated": "2026-06-10T17:26:08Z",
          "authors": [
            "Ria Doshi",
            "Tian Gao",
            "Annie Chen",
            "Chelsea Finn",
            "Jeannette Bohg"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2606.12109v1",
          "title": "Bridging the Morphology Gap: Adapting VLA Models to Dexterous Manipulation via Intent-Conditioned Fine-Tuning",
          "summary": "Vision-Language-Action (VLA) models have demonstrated remarkable zero-shot generalization in robotic manipulation, yet the vast majority of pre-trained pipelines remain strictly confined to low-DoF parallel grippers. Adapting these rich semantic priors to high-DoF dexterous hands introduces a severe morphology gap, direct end-to-end joint fine-tuning inherently causes catastrophic forgetting of spatial reasoning and acute action manifold collapse due to data scarcity. In this paper, we present InDex, a novel, data…",
          "summaryCn": "InDex 通过意图条件微调将预训练 VLA 适配到多指手：第一阶段参数高效对齐 VLA 骨干预测连续手臂轨迹和标量抓取意图；第二阶段冻结空间骨干，利用意图条件去噪扩散头解码手指关节动作。在大量多阶段、接触密集型灵巧操作基准上，以极少演示数据显著超越整体微调基线，缓解了灾难性遗忘。",
          "reasonCn": "将 VLA 适配到高自由度灵巧手，保留语言指令和视觉推理，输出精细关节动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12109v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12109v1",
          "published": "2026-06-10T14:03:52Z",
          "updated": "2026-06-10T14:03:52Z",
          "authors": [
            "Chuanke Pang",
            "Junyi Huang",
            "Zhijun Zhao",
            "Yaobing Wang",
            "Kun Xu",
            "Xilun Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2606.10267v1",
          "title": "What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents",
          "summary": "Hierarchical vision-language-action (Hi-VLA) systems have emerged as a promising paradigm for complex robot manipulation, by using high-level VLM planners to decompose tasks into language subgoals executed by low-level VLA controllers. Despite recent empirical progress, there is a lack of unified design principles for these systems: existing Hi-VLA systems differ in how they choose and connect planners, controllers, mechanisms to switch between the two, and how observations and memory are represented in the planne…",
          "summaryCn": "本文在选项式控制框架下统一代表性 Hi-VLA 系统，基准测试显示模型选择和接口机制共同影响性能。提炼的设计原则构建了一个显著超越平坦 VLA 和朴素层级方案的系统，在仿真和真实 ALOHA 机器人上均表现更优，为构建鲁棒层级 VLA 提供了指导。",
          "reasonCn": "对层级 VLA 代理进行系统研究，探索高层规划与低层执行的设计原则。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10267v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10267v1",
          "published": "2026-06-09T00:24:00Z",
          "updated": "2026-06-09T00:24:00Z",
          "authors": [
            "Jiaheng Hu",
            "Mohit Shridhar",
            "Caden Lu",
            "Dhruv Shah",
            "Hao-Tien Lewis Chiang",
            "Jie Tan",
            "Annie Xie"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2606.13578v1",
          "title": "LabVLA: Grounding Vision-Language-Action Models in Scientific Laboratories",
          "summary": "Scientific laboratories increasingly rely on AI systems to reason about experiments, but the physical act of doing science remains largely outside their reach. AI can help read literature, generate hypotheses, and plan protocols, yet the execution of those protocols at the bench still requires a human operator. Vision-Language-Action (VLA) models provide one possible interface between written protocols and robot execution, but existing policies are trained mostly on household and tabletop demonstrations and rarely…",
          "summaryCn": "LabVLA 通过两阶段训练为科学实验室构建 VLA：先利用 RoboGenesis 模拟工作流生成数据，再用 FAST 动作令牌预训练使 Qwen3-VL-4B 骨干具备动作感知，最后流匹配后训练学习连续控制。该框架适应多种实施例，旨在弥合 AI 推理与物理实验执行之间的鸿沟。",
          "reasonCn": "面向科学实验室的 VLA，连接书面协议与机器人执行。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13578v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13578v1",
          "published": "2026-06-11T17:03:53Z",
          "updated": "2026-06-11T17:03:53Z",
          "authors": [
            "Baochang Ren",
            "Xinjie Liu",
            "Xi Chen",
            "Yanshuo Liu",
            "Chenxi Li",
            "Daqi Gao",
            "Zeqin Su",
            "Jintao Xing",
            "Zirui Xue",
            "Rui Li"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.12497v1",
          "title": "$μ$VLA: On Recurrent Memory for Partially Observable Manipulation in VLA Models",
          "summary": "Vision-language-action (VLA) models predict chunks of future actions from the current observation, an assumption that fails under partial observability, where decisions depend on information no longer visible. Existing memory-augmented VLAs simultaneously introduce recurrence, retrieval, compression modules, auxiliary objectives, hierarchical memory, or task-specific architectural changes, so the contribution of recurrence itself remains entangled with surrounding machinery. We present a controlled isolation study…",
          "summaryCn": "μVLA 以控制实验方式在强预训练 VLA 骨干中引入少量可学习记忆令牌，通过截断时间反向传播更新，无辅助损失和架构变更。在 MIKASA-Robo 上，记忆增强使平均成功率从 0.42 提升至 0.84，并在留出任务中有所改进，揭示循环本身是部分可观操作的关键因素。",
          "reasonCn": "在 VLA 中隔离研究循环记忆，以处理部分可观性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12497v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12497v1",
          "published": "2026-06-10T13:26:40Z",
          "updated": "2026-06-10T13:26:40Z",
          "authors": [
            "Egor Cherepanov",
            "Nikita Kachaev",
            "Daniil Zelezetsky",
            "Aydar Bulatov",
            "Artem Pshenitsyn",
            "Yuri Kuratov",
            "Alexey Skrynnik",
            "Aleksandr I. Panov",
            "Alexey K. Kovalev"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.11743v1",
          "title": "TacCoRL: Integrating Tactile Feedback into VLA via Simulation",
          "summary": "Vision-language-action (VLA) models provide strong visual, language, and action priors for robot manipulation, but visual observations alone often miss the local contact state required for contact-rich tasks. We present TacCoRL, a scalable framework that injects Tactile feedback into VLA policies and improves them through sim-real Co-training and simulation-based reinforcement learning (RL), without requiring large-scale tactile pretraining or extensive real-world contact exploration. The key idea is not only addi…",
          "summaryCn": "TacCoRL 框架通过仿真-真实联合训练和强化学习向 VLA 注入触觉信号，学习在近失败状态中调节动作响应，无需大规模触觉预训练。在四项双臂接触任务中，最终视觉-触觉 VLA 策略零样本迁移到真实机器人，成功率显著超过仅视觉基线和先前的触觉增强方法。",
          "reasonCn": "将触觉反馈集成到 VLA 中，结合仿真与 RL 提升接触密集型操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.11743v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11743v1",
          "published": "2026-06-10T07:20:36Z",
          "updated": "2026-06-10T07:20:36Z",
          "authors": [
            "Siyu Ma",
            "Yuqi Liang",
            "Chang Yu",
            "Yunuo Chen",
            "Hao Su",
            "Yixin Zhu",
            "Yin Yang",
            "Chenfanfu Jiang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.10366v1",
          "title": "A Practical Recipe Towards Improving Sim-and-Real Correlation for VLA Evaluation",
          "summary": "Simulation has become an essential tool for evaluating and improving vision-language-action (VLA) policies, offering scalable, reproducible, and controllable alternatives to costly real-world robot evaluation. Recent simulation benchmarks have made substantial progress on realism and diversity, yet these platforms have not been widely adopted as reliable proxies for real-world policy evaluation. In this work, we investigate this issue through the lens of sim-and-real correlation.",
          "summaryCn": "本文系统测量多个仿真平台、VLA 策略、任务和扰动因素下的策略排序一致性、性能相关性和失效模式，揭示了现有仿真器局限性，并指明改进方向。还探讨了基于仿真的微调何时有益以及数据量对对齐的影响，为仿真设计和实践提供了统一框架。",
          "reasonCn": "研究 VLA 策略仿真与真实评估的相关性，以指导仿真基准的使用。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10366v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10366v1",
          "published": "2026-06-09T03:25:02Z",
          "updated": "2026-06-09T03:25:02Z",
          "authors": [
            "Shuo Wang",
            "Hanyuan Xu",
            "Yingdong Hu",
            "Fanqi Lin",
            "Yang Gao"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        }
      ]
    },
    {
      "dateKey": "20260612",
      "dateLabel": "2026-06-12",
      "generatedAt": "2026-06-12T02:59:54.508477+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.13494v1",
          "title": "NavWAM: A Navigation World Action Model for Goal-Conditioned Visual Navigation",
          "summary": "Goal-conditioned visual navigation requires a robot to act under partial observability by anticipating how its motion will change the future egocentric view and whether that change brings it closer to the goal. Navigation world models provide such visual foresight, but they remain prediction modules that require an external planner to convert predicted futures into closed-loop control. We propose Navigation World Action Model (NavWAM), a diffusion-transformer policy that turns navigation world-model prediction int…",
          "summaryCn": "提出导航世界动作模型NavWAM，将未来观测和动作块联合学习，实现视觉前瞻驱动的闭环导航控制；通过仿真预训练和真实机器人适应，在图像目标导航任务上超越基于规划的世界模型基线。",
          "reasonCn": "NavWAM将世界模型预测与动作输出结合，直接用于视觉导航控制，属于世界动作模型。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13494v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13494v1",
          "published": "2026-06-11T15:44:36Z",
          "updated": "2026-06-11T15:44:36Z",
          "authors": [
            "Daichi Azuma",
            "Taiki Miyanishi",
            "Koya Sakamoto",
            "Shuhei Kurita",
            "Yaonan Zhu",
            "Petr Khrapchenkov",
            "Motoaki Kawanabe",
            "Yusuke Iwasawa",
            "Yutaka Matsuo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 107
        },
        {
          "id": "2606.13674v1",
          "title": "RepWAM: World Action Modeling with Representation Visual-Action Tokenizers",
          "summary": "This work presents RepWAM, a representation-centric world action model (WAM) built on representation visual-action tokenizers. Existing WAMs typically inherit reconstruction-oriented video tokenizers from pretrained video generation models. Although these tokenizers preserve visual fidelity, pixel reconstruction alone provides limited guidance for learning instruction-following dynamics that connect future prediction with robot control.",
          "summaryCn": "提出以语义视觉-动作标记器为核心的表示世界动作模型RepWAM，将语言指令与视觉预测和动作控制统一建模；在真实和仿真操作任务中表现优异，验证了语义标记化相比重建式标记的优势。",
          "reasonCn": "RepWAM基于语言指令和视觉输入预测未来视觉状态与潜动作，同时具备VLA和WAM特性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.13674v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13674v1",
          "published": "2026-06-11T17:59:43Z",
          "updated": "2026-06-11T17:59:43Z",
          "authors": [
            "Junke Wang",
            "Qihang Zhang",
            "Shuai Yang",
            "Yiming Luo",
            "Yujun Shen",
            "Zuxuan Wu",
            "Yu-Gang Jiang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2606.13578v1",
          "title": "LabVLA: Grounding Vision-Language-Action Models in Scientific Laboratories",
          "summary": "Scientific laboratories increasingly rely on AI systems to reason about experiments, but the physical act of doing science remains largely outside their reach. AI can help read literature, generate hypotheses, and plan protocols, yet the execution of those protocols at the bench still requires a human operator. Vision-Language-Action (VLA) models provide one possible interface between written protocols and robot execution, but existing policies are trained mostly on household and tabletop demonstrations and rarely…",
          "summaryCn": "针对科学实验室场景，提出LabVLA和数据集构建流程RoboGenesis，通过分阶段训练让Qwen3-VL骨干具备动作感知和连续控制能力；为将VLA应用于实验室自动化提供了可行方案。",
          "reasonCn": "LabVLA是面向科学实验室的视觉-语言-动作模型，接收视觉和协议指令输出机器人操作动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13578v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13578v1",
          "published": "2026-06-11T17:03:53Z",
          "updated": "2026-06-11T17:03:53Z",
          "authors": [
            "Baochang Ren",
            "Xinjie Liu",
            "Xi Chen",
            "Yanshuo Liu",
            "Chenxi Li",
            "Daqi Gao",
            "Zeqin Su",
            "Jintao Xing",
            "Zirui Xue",
            "Rui Li"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2606.12978v1",
          "title": "Trajectory-Level Redirection Attacks on Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) policies bring natural language into closed-loop robot control, enabling robots to execute manipulation tasks directly from text instructions. The same interface gives text a recurring role in control because the prompt is reused at every replanning step, and each prompt-conditioned action changes the future observations on which the policy acts. Existing VLA attacks study adversarial prompts that elicit targeted low-level actions or make such actions persist across changing images.",
          "summaryCn": "提出轨迹级重定向攻击，可在不改变指令表面语义的情况下，通过优化文本扰动使VLA策略执行攻击者指定的任务；揭示了VLA模型在闭环策略下的安全漏洞。",
          "reasonCn": "论文研究对VLA模型的攻击，涉及视觉、语言和动作的闭环控制，属于VLA安全方向。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12978v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12978v1",
          "published": "2026-06-11T07:12:17Z",
          "updated": "2026-06-11T07:12:17Z",
          "authors": [
            "Gokul Puthumanaillam",
            "Vardhan Dongre",
            "Pranay Thangeda",
            "Hooshang Nayyeri",
            "Dilek Hakkani-Tür",
            "Melkior Ornik"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.13435v1",
          "title": "GIVE: Grounding Human Gestures in Vision-Language-Action Models",
          "summary": "Human communication is inherently multimodal, where language is often accompanied by non-verbal cues such as gestures to convey intentions. However, current Vision-Language-Action (VLA) models treat robotic manipulation as a pure text-driven task, overlooking the important role of gestures in Human-Robot Interaction (HRI). This often leads to inaccurate intent grounding and unreliable manipulation when language instructions are ambiguous or underspecified.",
          "summaryCn": "提出GIVE方法，通过视觉通路叠加入手骨架和语义通路生成手势描述，增强预训练VLA模型的手势理解；在真实人机交互中显著提升目标识别成功率和任务成功率。",
          "reasonCn": "GIVE增强VLA模型对手势的理解，融合视觉和语义信息以改善人机交互中的意图识别和操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13435v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13435v1",
          "published": "2026-06-11T14:59:38Z",
          "updated": "2026-06-11T14:59:38Z",
          "authors": [
            "Pengfei Liu",
            "Gen Li",
            "Junqiao Fan",
            "Boyu Ma",
            "Jindou Jia",
            "Yang Xiao",
            "Jianfei Yang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.12987v1",
          "title": "Diffusion Transformer World-Action Model for AV Scene Prediction",
          "summary": "Action-conditioned world models let an autonomous vehicle predict future camera scenes from its own planned controls, enabling planning and simulation without real-world rollouts, but at compact, trainable scale the futures are ambiguous and the field's standard distortion metrics actively mislead: they reward a blurry regression mean over a realistic prediction. We confront this with a compact latent world model that, given the present front-camera latent and a sequence of ego-actions, predicts future scene laten…",
          "summaryCn": "构建动作条件潜空间DiT世界模型，预测未来多帧驾驶场景；通过系统诊断揭示扩散模型在感知-失真权衡上的优势，为自动驾驶规划提供逼真可视化预测。",
          "reasonCn": "论文提出动作条件的扩散Transformer世界模型，用于自动驾驶场景预测，直接支撑规划仿真。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12987v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12987v1",
          "published": "2026-06-11T07:24:12Z",
          "updated": "2026-06-11T07:24:12Z",
          "authors": [
            "Ruslan Sharifullin",
            "Benjamin Jiang",
            "Kai Xi Chew"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 68,
          "llmTotalScore": 68
        },
        {
          "id": "2606.12859v1",
          "title": "AIR-VLA+: Decoupling Movement and Manipulation via Cascaded Dual-Action Decoders with Asymmetric MoE for Aerial Robots",
          "summary": "Aerial manipulation systems have long suffered from representation coupling in end-to-end control, as platform-level Unmanned Aerial Vehicle (UAV) movement and end-effector-level arm manipulation differ substantially in action scale, dynamics, and control objectives. In this paper, we propose AIR-VLA+, a flow matching action generation architecture specifically designed for aerial manipulation, featuring cascaded dual-action decoders and an asymmetric feature-level Mixture of Experts (MoE). We construct cascaded m…",
          "summaryCn": "针对空基操作中平台移动与机械臂控制的耦合问题，提出AIR-VLA+，采用级联双动作解码器和非对称MoE架构；在仿真和真实任务中有效解耦运动与操作，提升整体成功率。",
          "reasonCn": "AIR-VLA+是专为空基操作设计的VLA模型，处理视觉、语言和动作，并设计级联解码器协调飞行与臂操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12859v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12859v1",
          "published": "2026-06-11T03:42:33Z",
          "updated": "2026-06-11T03:42:33Z",
          "authors": [
            "Jianli Sun",
            "Bin Tian",
            "Qiyao Zhang",
            "Zijian Liu",
            "Yutong Wang",
            "Zhiyong Cui",
            "Bai Li",
            "Yisheng Lv",
            "Yonglin Tian"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 68,
          "llmTotalScore": 68
        },
        {
          "id": "2606.13515v1",
          "title": "MaskWAM: Unifying Mask Prompting and Prediction for World-Action Models",
          "summary": "World Action Models (WAMs) present a promising paradigm for robotic control via video prediction. However, current WAMs suffer from fundamental spatial bottlenecks: standard text inputs introduce referential ambiguity in cluttered scenes, while unstructured RGB predictions lack semantic grounding and remain biased by task-irrelevant backgrounds. To overcome these limitations, we introduce MaskWAM, an object-centric world-action model.",
          "summaryCn": "提出对象中心的世界动作模型MaskWAM，通过掩码输入和预测提供语义监督，大幅减少语言歧义；在多样化操作任务中证明掩码条件比纯文本条件更鲁棒，显著超越基线。",
          "reasonCn": "MaskWAM统一掩码提示和预测，利用语言指令和视觉掩码实现精确对象操作，兼具WAM和VLA功能。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.13515v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13515v1",
          "published": "2026-06-11T16:02:42Z",
          "updated": "2026-06-11T16:02:42Z",
          "authors": [
            "Hanyang Yu",
            "Haitao Lin",
            "Jingbo Zhang",
            "Wenyao Zhang",
            "Chenghao Gu",
            "Heng Li",
            "Ping Tan"
          ],
          "categories": [
            "cs.CV",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 64,
          "llmTotalScore": 64
        },
        {
          "id": "2606.13279v1",
          "title": "See Selectively, Act Adaptively: Dual-Level Structural Decomposition for Bimanual Robot Manipulation",
          "summary": "In bimanual robotic manipulation, task-relevant visual information varies with the task stage and context, while the interaction of the two arms shifts between independent and coordinated modes, making policy learning challenging. However, existing monolithic Vision-Language-Action (VLA) policies process diverse visual inputs and interaction patterns through a single shared representation and action generation pathway, often failing to separately account for visual relevance and bimanual interaction structure. To…",
          "summaryCn": "提出基于双级结构化分解的双臂VLA模型，动态调整腕部视图贡献并分解协调与独立动作通道；在仿真和真实长程任务中有效提升成功率，优于整体式基线。",
          "reasonCn": "论文提出双臂操作VLA框架，通过视角选择路由器和动作混合专家解耦视觉与双臂交互，改善策略学习。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13279v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13279v1",
          "published": "2026-06-11T12:33:55Z",
          "updated": "2026-06-11T12:33:55Z",
          "authors": [
            "Yoon-Ji Choi",
            "Young-Chae Son",
            "Soo-Chul Lim"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.13053v1",
          "title": "EA-WM: Event-Aware World Models with Task-Specification Grounding for Long-Horizon Manipulation",
          "summary": "Pretrained-feature world models provide a useful substrate for robot imagination, but visual or latent prediction alone does not determine whether an imagined future satisfies task-relevant events. Long-horizon manipulation requires progress signals that are relational, predicate-level, and physically grounded: whether an object has moved, whether a drawer or contact state has changed, whether a placement predicate is satisfied, and whether a candidate future is reliable enough for execution. We introduce EA-WM, a…",
          "summaryCn": "在冻结视觉特征世界模型中增加任务规格相关事件预测与验证，使用采样规划、门控和可靠性评分；在导航和操作任务中展示事件感知验证可提升世界模型的可解释性和任务对齐。",
          "reasonCn": "EA-WM构建事件感知世界模型，用于长程操作中的规划与验证，直接涉及动作评估与选择。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13053v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13053v1",
          "published": "2026-06-11T08:35:37Z",
          "updated": "2026-06-11T08:35:37Z",
          "authors": [
            "Kailin Wang",
            "Haoxiang Jie",
            "Yaoyuan Yan",
            "Jiacheng Zhou",
            "Zhiyou Heng"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 57,
          "llmTotalScore": 57
        },
        {
          "id": "2606.13092v1",
          "title": "Scale Buys Interpolation, Structure Buys a Horizon: Certified Predictability for Equivariant World Models",
          "summary": "Scale buys interpolation; structure buys a certified horizon. A world model's average error says nothing about whether a particular prediction can be trusted, or for how long. For equivariant latent world models we give a computable, multi-step certificate of the predictable horizon: $T$-step rollout error is provably constant over each symmetry orbit (Theorem A) and stratified channel-by-channel by the predictor's Lyapunov spectrum, $T_j(ε)\\sim\\log(1/ε)/λ_j$.",
          "summaryCn": "针对等变世界模型，推导出多步可预测时间的可计算证明，通过Lyapunov谱分层；该证书无需标定数据即能审计预训练世界模型，并在TD-MPC2上验证其对齐性。",
          "reasonCn": "论文为等变世界模型提供可计算的可预测性证书，并在模型基控制方法（TD-MPC2）上验证，与动作控制相关。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13092v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13092v1",
          "published": "2026-06-11T09:21:28Z",
          "updated": "2026-06-11T09:21:28Z",
          "authors": [
            "Hongbo Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 55,
          "llmTotalScore": 55
        },
        {
          "id": "2606.13672v1",
          "title": "$\\texttt{WEAVER}$, Better, Faster, Longer: An Effective World Model for Robotic Manipulation",
          "summary": "The potential impacts of world models (WMs, i.e., learned simulators) on robotics are far-reaching -- policy evaluation, policy improvement, and test-time planning -- all with limited real-world interaction. To unlock these downstream capabilities, a WM needs to jointly satisfy three desiderata: $\\textit{(i)}$ fidelity (i.e., producing simulated trajectories that correlate with reality), $\\textit{(ii)}$ consistency (i.e., producing simulated trajectories that are coherent over long horizons), and $\\textit{(iii)}$…",
          "summaryCn": "提出同时满足高保真、长程一致和高效的世界模型架构WEAVER，基于流匹配预测未来潜在状态和奖励值；在真实机器人上展示出非常高的策略评估相关性和策略提升效果。",
          "reasonCn": "WEAVER是面向机器人操作的多视图世界模型，用于策略评估和改善，直接支撑动作决策。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13672v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13672v1",
          "published": "2026-06-11T17:59:15Z",
          "updated": "2026-06-11T17:59:15Z",
          "authors": [
            "Arnav Kumar Jain",
            "Yilin Wu",
            "Jesse Farebrother",
            "Gokul Swamy",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 53,
          "llmTotalScore": 53
        },
        {
          "id": "2606.13460v1",
          "title": "VISA: VLM-Guided Instance Semantic Auditing for 3D Occupancy World Models",
          "summary": "Semantic 3D occupancy provides a voxelized world state for autonomous driving and robot decision making, but object and rare-class errors can affect free-space interpretation, collision checking, and temporal state propagation. We show that a common VLM strategy, aligning 3D voxel or object features with crop-caption embeddings, improves text-space similarity without reliably improving closed-set occupancy mIoU. Motivated by this mismatch, we propose VISA, a training-time semantic auditing approach for existing oc…",
          "summaryCn": "提出训练时语义审计方法VISA，利用离线VLM对占用世界模型进行实例级语义纠错，提升模型在自动驾驶场景的语义mIoU；在不增加推理代价的情况下强化了世界模型的可靠性。",
          "reasonCn": "VISA改进3D占用世界模型的语义审计，提升自动驾驶决策中世界模型的准确性，涉及动作条件规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.13460v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13460v1",
          "published": "2026-06-11T15:15:34Z",
          "updated": "2026-06-11T15:15:34Z",
          "authors": [
            "Ruiqi Xian",
            "Yuehan Xian",
            "Jing Liang",
            "Xuewei Qi",
            "Dinesh Manocha"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2606.12783v1",
          "title": "A Tutorial on World Models and Physical AI",
          "summary": "World modeling is emerging as a central principle for building intelligent systems capable of prediction, reasoning, and decision making. A central distinction can be drawn between explicit world models, which learn structured dynamics for rollout-based reasoning and planning, and implicit world models, which encode predictive structure within scalable learned representations. These complementary paradigms provide a foundation for physical AI in domains such as robotics and autonomous driving, enabling intelligenc…",
          "summaryCn": "提供世界模型及其在物理AI中应用的统一框架，区分显式与隐式范式，并讨论与基础模型融合的路径；为动作预测和决策提供了理论基础。",
          "reasonCn": "该教程系统梳理显式和隐式世界模型，明确其在机器人学和自动驾驶中的动作预测与规划作用。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12783v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12783v1",
          "published": "2026-06-11T00:52:39Z",
          "updated": "2026-06-11T00:52:39Z",
          "authors": [
            "Il-Seok Oh"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 47
        },
        {
          "id": "2606.13355v1",
          "title": "Real-Time Execution with Autoregressive Policies",
          "summary": "Real-time execution, enabled by asynchronous inference that ensures both smooth action trajectories and fast reactivity, is critical for realistic deployments of large-scale Vision-Language-Action models. However, recent work on real-time execution primarily focuses on variants of diffusion policies, even though it is more critical for autoregressive policies given their slower rollout speed in synchronous inference. In contrast, we demonstrate that autoregressive policies can achieve real-time execution by adjust…",
          "summaryCn": "证明自回归VLA策略通过调整标记化窗口和约束解码可实现实时执行，在异步推理下优于流匹配策略；揭示了自回归策略在实时机器人部署中的竞争力。",
          "reasonCn": "论文展示自回归策略在VLA模型中的实时执行能力，直接优化动作输出的延迟和性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.13355v1",
          "pdfLink": "https://arxiv.org/pdf/2606.13355v1",
          "published": "2026-06-11T13:43:01Z",
          "updated": "2026-06-11T13:43:01Z",
          "authors": [
            "Sangkyu Lee",
            "Seohyeon Park",
            "Tackgeun You",
            "Avi Caciularu",
            "Idan Szpektor",
            "Hwasup Lim",
            "Youngjae Yu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.12956v1",
          "title": "SERF: Spatiotemporal Environment and Robot Feature Map for Long-Horizon Mobile Manipulation",
          "summary": "Long-horizon robot mobile manipulation requires continual reasoning about localization, environment changes, and task progress, all of which are challenging to infer from image observations alone. In this paper, we show that conditioning a mobile manipulation policy on a spatiotemporal feature map improves reasoning over long horizons. The map represents the environment and the articulated robot body as neural points in a shared latent space and is updated online from egocentric observations and proprioceptive sta…",
          "summaryCn": "提出SERF，构建环境和机器人身体的时空点特征图，供VLA模型捕捉局部和全局上下文；在BEHAVIOR-1K长程任务上显著提升推理效率和鲁棒性。",
          "reasonCn": "SERF将时空特征地图作为VLA模型输入，统一视觉、语言和动作推理以支持长程移动操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12956v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12956v1",
          "published": "2026-06-11T06:29:49Z",
          "updated": "2026-06-11T06:29:49Z",
          "authors": [
            "Sunghwan Kim",
            "Byeonghyun Pak",
            "Kehan Long",
            "Yulun Tian",
            "Nikolay Atanasov"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.12936v1",
          "title": "An Embodied Simulation Platform, Benchmark, and Data-Efficient Augmentation Framework for Wet-Lab Robotics",
          "summary": "Wet-lab robots can improve the reproducibility, throughput, and safety of biomedical experiments, but scaling their learning requires customizable simulators for safe and reproducible task generation, open editable laboratory assets, and efficient pipelines that turn limited demonstrations into usable training data. We present Pipette, an embodied simulation platform, benchmark, and data-efficient augmentation framework for wet-lab robot learning. Pipette releases over 43 open-source and re-editable wet-lab assets…",
          "summaryCn": "发布湿实验室机器人仿真平台Pipette，提供丰富资产和数据增强管线，有效提升SmolVLA等VLA模型的成功率；为生物医学自动化提供数据高效训练方案。",
          "reasonCn": "Pipette平台旨在高效训练VLA模型，包含视觉输入、语言指令和机器人动作的仿真数据增强。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12936v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12936v1",
          "published": "2026-06-11T05:58:38Z",
          "updated": "2026-06-11T05:58:38Z",
          "authors": [
            "Zhe Liu",
            "Huanbo Jin",
            "Zhaohui Du",
            "Zhe Wang",
            "He Xu",
            "Peijia Li",
            "Jiaming Gu",
            "Quan Lu",
            "Qi Wang",
            "Bin Ji"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 42
        }
      ]
    },
    {
      "dateKey": "20260611",
      "dateLabel": "2026-06-11",
      "generatedAt": "2026-06-11T03:03:44.688227+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.12105v1",
          "title": "DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model",
          "summary": "Vision-language-action (VLA) models inherit a shared synchronous clock from vision-language pretraining, processing every input at one rate. This is misaligned with physical interaction, where a high-frequency modality changes at hundreds of hertz, vision evolves more slowly, and language stays constant across an episode. A synchronous VLA oversamples slow modalities, undersamples fast ones, and caps action generation at the lowest effective frequency.",
          "summaryCn": "提出解耦异步的多模态VLA模型DAM-VLA，按传感器速率独立更新各模态，实现高频100Hz控制。在七项真实世界接触操作任务中，成功率比最强同步基线高出一倍以上。方法保留了预训练骨干，通过门控交叉注意力整合新模态。",
          "reasonCn": "论文明确涉及视觉、语言和动作且面向机器人操作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12105v1",
          "published": "2026-06-10T13:59:07Z",
          "updated": "2026-06-10T13:59:07Z",
          "authors": [
            "Pankhuri Vanjani",
            "Zhuoyue Li",
            "Jakub Suliga",
            "Moritz Reuss",
            "Gianluca Geraci",
            "Xinkai Jiang",
            "Rudolf Lioutikov"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 139,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12299v1",
          "title": "Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model Steering",
          "summary": "Vision-Language-Action (VLA) models provide a natural language interface to robot control, but the mapping from language to behavior is often brittle and unintuitive: semantically similar instructions can induce drastically different behaviors, while some capabilities may not be elicitable through prompting alone. As a result, both human instructions and zero-shot language models can fail to reliably steer VLAs toward successful task execution. In this work, we propose a framework that interactively searches for l…",
          "summaryCn": "提出语言反馈策略框架，通过交互搜索语言序列以提升冻结VLA模型的闭环任务性能，并引入无害性保证。在仿真和硬件上实现显著性能提升，且在分布外场景下保证无害。",
          "reasonCn": "论文旨在通过语言指令操纵VLA模型动作输出，直接涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12299v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12299v1",
          "published": "2026-06-10T16:34:49Z",
          "updated": "2026-06-10T16:34:49Z",
          "authors": [
            "Hyun Joe Jeong",
            "Gokul Swamy",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 135,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12403v1",
          "title": "World Pilot: Steering Vision-Language-Action Models with World-Action Priors",
          "summary": "Vision-Language-Action (VLA) models inherit semantic grounding from large-scale pretraining and perform competently across in-distribution manipulation tasks. This grounding, however, is built on static image-text pairs, whereas manipulation is a continuous, contact-rich process whose dynamics this pretraining cannot capture. We present World Pilot, a VLA framework that augments the policy with priors from a World-Action Model (WAM), routed into the decision chain through two complementary pathways.",
          "summaryCn": "提出World Pilot框架，将世界动作先验融入VLA决策链，通过潜在场景演化先导和动作轨迹先导增强操控能力。在LIBERO-Plus和真实机器人任务中取得最优成功率，尤其对外观、几何和姿态变化具有鲁棒性。",
          "reasonCn": "论文同时利用VLA和世界动作模型（WAM）进行机器人操控，属于BOTH类别。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.12403v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12403v1",
          "published": "2026-06-10T17:59:08Z",
          "updated": "2026-06-10T17:59:08Z",
          "authors": [
            "Zefu Lin",
            "Rongxu Cui",
            "Junjia Xu",
            "Xiaojuan Jin",
            "Wenling Li",
            "Lue Fan",
            "Zhaoxiang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 123,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12217v1",
          "title": "Making Foresight Actionable: Repurposing Representation Alignment in World Action Models",
          "summary": "World Action Models (WAMs) offer a promising route for robot manipulation by using video generation models to model future scene evolution before producing control actions. However, our empirical observations reveal a phenomenon: generating plausible visual futures does not always guarantee the extraction of accurate actions. To diagnose this failure, we conduct action-head attention analysis and causal interventions.",
          "summaryCn": "针对世界动作模型中动作解码器关注错误区域的问题，提出AGRA方法，通过动作接地表示对齐正则化，使表示更有利于控制。提升了对象定位准确性和策略鲁棒性。",
          "reasonCn": "论文明确聚焦世界动作模型（WAM）中动作预测的表示对齐问题。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12217v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12217v1",
          "published": "2026-06-10T15:31:25Z",
          "updated": "2026-06-10T15:31:25Z",
          "authors": [
            "Lu Qiu",
            "Yizhuo Li",
            "Yi Chen",
            "Yuying Ge",
            "Yixiao Ge",
            "Xihui Liu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 103,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12352v1",
          "title": "CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy",
          "summary": "Multi-robot collaboration allows robots to efficiently take on a wide range of tasks, from moving a couch through a doorway to assembling structures on a construction site. However, achieving such coordination in mobile multi-robot settings remains challenging: centralized methods conditioned on the combined observations of a team scale poorly with team size, and decentralized methods that train one policy per robot often require explicit alignment procedures or information sharing at inference time to overcome pa…",
          "summaryCn": "提出CHORUS框架，利用单个预训练VLA骨干实现多机器人分布式协作，仅依赖各机器人局部观测。在真实多机任务中，成功率较分散式模型提高64个百分点，反应性提升40个百分点。",
          "reasonCn": "论文使用VLA策略实现多机器人协作，涉及视觉、语言和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12352v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12352v1",
          "published": "2026-06-10T17:26:08Z",
          "updated": "2026-06-10T17:26:08Z",
          "authors": [
            "Ria Doshi",
            "Tian Gao",
            "Annie Chen",
            "Chelsea Finn",
            "Jeannette Bohg"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12109v1",
          "title": "Bridging the Morphology Gap: Adapting VLA Models to Dexterous Manipulation via Intent-Conditioned Fine-Tuning",
          "summary": "Vision-Language-Action (VLA) models have demonstrated remarkable zero-shot generalization in robotic manipulation, yet the vast majority of pre-trained pipelines remain strictly confined to low-DoF parallel grippers. Adapting these rich semantic priors to high-DoF dexterous hands introduces a severe morphology gap, direct end-to-end joint fine-tuning inherently causes catastrophic forgetting of spatial reasoning and acute action manifold collapse due to data scarcity. In this paper, we present InDex, a novel, data…",
          "summaryCn": "提出InDex框架，通过意图条件微调将VLA模型适配至高自由度灵巧手，保留语义继承并避免灾难性遗忘。两阶段学习架构在少量数据下掌握复杂灵巧操作。",
          "reasonCn": "论文将VLA从平行夹爪适配到灵巧手，直接涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12109v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12109v1",
          "published": "2026-06-10T14:03:52Z",
          "updated": "2026-06-10T14:03:52Z",
          "authors": [
            "Chuanke Pang",
            "Junyi Huang",
            "Zhijun Zhao",
            "Yaobing Wang",
            "Kun Xu",
            "Xilun Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2606.11743v1",
          "title": "TacCoRL: Integrating Tactile Feedback into VLA via Simulation",
          "summary": "Vision-language-action (VLA) models provide strong visual, language, and action priors for robot manipulation, but visual observations alone often miss the local contact state required for contact-rich tasks. We present TacCoRL, a scalable framework that injects Tactile feedback into VLA policies and improves them through sim-real Co-training and simulation-based reinforcement learning (RL), without requiring large-scale tactile pretraining or extensive real-world contact exploration. The key idea is not only addi…",
          "summaryCn": "提出TacCoRL框架，将触觉反馈融入VLA策略，通过仿真-现实协同训练和强化学习优化接触丰富任务。在无大规模触觉预训练下，提升接近失败状态的动作响应。",
          "reasonCn": "论文扩展VLA以纳入触觉模态，核心仍是视觉语言动作控制。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.11743v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11743v1",
          "published": "2026-06-10T07:20:36Z",
          "updated": "2026-06-10T07:20:36Z",
          "authors": [
            "Siyu Ma",
            "Yuqi Liang",
            "Chang Yu",
            "Yunuo Chen",
            "Hao Su",
            "Yixin Zhu",
            "Yin Yang",
            "Chenfanfu Jiang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 90,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12366v1",
          "title": "APT: Action Expert Pretraining Improves Instruction Generalization of Vision-Language-Action Policies",
          "summary": "Vision-Language-Action (VLA) models that couple pretrained Vision-Language Models (VLMs) with continuous action experts have achieved strong manipulation performance, yet generalization to out-of-distribution (OOD) language instructions remains poor. A known challenge is the structural imbalance in VLA data, where language is far less diverse than visual and action content, making policies prone to visual shortcuts. While discrete-action methods mitigate this through vision-language co-training, continuous action…",
          "summaryCn": "提出APT两阶段训练方法，通过动作专家预训练缓解VLA数据中语言不平衡问题，提升语言指令泛化。在多种VLA架构上验证有效。",
          "reasonCn": "论文专注于改善VLA策略的语言指令泛化，符合VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12366v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12366v1",
          "published": "2026-06-10T17:34:25Z",
          "updated": "2026-06-10T17:34:25Z",
          "authors": [
            "Kechun Xu",
            "Zhenjie Zhu",
            "Anzhe Chen",
            "Rong Xiong",
            "Yue Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12396v1",
          "title": "VLGA: Vision-Language-Geometry-Action Models for Autonomous Driving",
          "summary": "Vision-language-action (VLA) models can describe scenes and reason about them in language, yet still struggle to ground their actions in the dense 3D world around them. Existing approaches either inject features from a frozen 3D foundation model without an objective that ensures the policy uses them, or constrain geometry with sparse box and map losses that provide no dense spatial signal. We introduce VLGA, the first vision-language-action model supervised to reconstruct the dense 3D world it drives through.",
          "summaryCn": "提出VLGA模型，将密集3D几何重建作为额外模态集成到视觉语言动作框架中，用于自动驾驶。在nuScenes和Bench2Drive上取得领先的规划性能。",
          "reasonCn": "论文明确提出了用于自动驾驶的VLA模型，涉及视觉、语言和动作控制。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.12396v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12396v1",
          "published": "2026-06-10T17:57:06Z",
          "updated": "2026-06-10T17:57:06Z",
          "authors": [
            "Jin Yao",
            "Dhruva Dixith Kurra",
            "Tom Lampo",
            "Zezhou Cheng",
            "Danhua Guo",
            "Burhan Yaman"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 54,
          "llmTotalScore": 0
        },
        {
          "id": "2606.12072v1",
          "title": "World Model Self-Distillation: Training World Models to Solve General Tasks",
          "summary": "Pretrained video generators are promising visual world models that exhibit emergent task-solving abilities; however, their reliance on detailed textual descriptions limits their direct use for planning and decision-making. Existing approaches either outsource this reasoning to language or vision-language models, or rely on supervised fine-tuning with paired task-execution videos, which are costly to collect and difficult to scale. We propose a scalable framework that elicits task-solving ability in such models by…",
          "summaryCn": "提出从预训练视频生成世界模型自我蒸馏任务解决能力的方法，结合强化学习无需任务视频监督。在WorldTasks-Benchmark和DreamGen机器人基准上验证可迁移规划能力。",
          "reasonCn": "论文以世界模型为核心，通过蒸馏和强化学习实现任务解决和动作规划，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.12072v1",
          "pdfLink": "https://arxiv.org/pdf/2606.12072v1",
          "published": "2026-06-10T13:40:19Z",
          "updated": "2026-06-10T13:40:19Z",
          "authors": [
            "Sebastian Stapf",
            "Pablo Acuaviva Huertos",
            "Aram Davtyan",
            "Paolo Favaro"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260610",
      "dateLabel": "2026-06-10",
      "generatedAt": "2026-06-10T02:57:09.257657+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.10363v1",
          "title": "HiMem-WAM: Hierarchical Memory-Gated World Action Models for Robotic Manipulation",
          "summary": "World Action Models (WAMs) have emerged as a new powerful paradigm for embodied intelligence, learning action-relevant visual dynamics that significantly enhance generalization and robustness. However, existing WAMs still struggle with task-relevant memory in long-horizon robotic manipulation. To address this, we present HiMem-WAM, a Hierarchical Memory-Gated WAM that integrates motion-centric latent actions, high-level skill latents, and boundary-triggered memory updates.",
          "summaryCn": "提出HiMem-WAM，通过分层记忆门控世界动作模型解决长程机器人操作中的任务相关记忆问题。在仿真和真实任务中验证了分层潜在动作和边界触发记忆更新的有效性。该方法提升了模型在扰动下的鲁棒性和长程任务的成功率。",
          "reasonCn": "提出分层记忆门控世界动作模型用于机器人操作，明确符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.10363v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10363v1",
          "published": "2026-06-09T03:22:34Z",
          "updated": "2026-06-09T03:22:34Z",
          "authors": [
            "Xiaoquan Sun",
            "Ruijian Zhang",
            "Chen Cao",
            "Yihan Sun",
            "Jiahui Chen",
            "Zetian Xu",
            "Bo Chen",
            "Haijier Chen",
            "Zhen Yang",
            "Jiarun Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 133,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10366v1",
          "title": "A Practical Recipe Towards Improving Sim-and-Real Correlation for VLA Evaluation",
          "summary": "Simulation has become an essential tool for evaluating and improving vision-language-action (VLA) policies, offering scalable, reproducible, and controllable alternatives to costly real-world robot evaluation. Recent simulation benchmarks have made substantial progress on realism and diversity, yet these platforms have not been widely adopted as reliable proxies for real-world policy evaluation. In this work, we investigate this issue through the lens of sim-and-real correlation.",
          "summaryCn": "本文通过多平台研究VLA策略的仿真与现实世界排名一致性、性能关联及故障模式对齐。提出利用仿真改进VLA策略的实用方法，并分析后训练数据量影响。为仿真设计者和VLA实践者提供了框架指导。",
          "reasonCn": "系统研究VLA策略的仿真与现实关联性，属于VLA评估方法。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10366v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10366v1",
          "published": "2026-06-09T03:25:02Z",
          "updated": "2026-06-09T03:25:02Z",
          "authors": [
            "Shuo Wang",
            "Hanyuan Xu",
            "Yingdong Hu",
            "Fanqi Lin",
            "Yang Gao"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10267v1",
          "title": "What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents",
          "summary": "Hierarchical vision-language-action (Hi-VLA) systems have emerged as a promising paradigm for complex robot manipulation, by using high-level VLM planners to decompose tasks into language subgoals executed by low-level VLA controllers. Despite recent empirical progress, there is a lack of unified design principles for these systems: existing Hi-VLA systems differ in how they choose and connect planners, controllers, mechanisms to switch between the two, and how observations and memory are represented in the planne…",
          "summaryCn": "统一了分层VLA代理框架，并对高层规划器和低层控制器等设计选择进行基准测试。从仿真和真实机器人实验中提炼出构建分层VLA系统的实用原则。为更强大、鲁棒的VLA代理提供了基础。",
          "reasonCn": "对分层VLA代理的设计选择进行了系统研究，直接涉及视觉-语言-动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10267v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10267v1",
          "published": "2026-06-09T00:24:00Z",
          "updated": "2026-06-09T00:24:00Z",
          "authors": [
            "Jiaheng Hu",
            "Mohit Shridhar",
            "Caden Lu",
            "Dhruv Shah",
            "Hao-Tien Lewis Chiang",
            "Jie Tan",
            "Annie Xie"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2606.11187v1",
          "title": "Next Forcing: Causal World Modeling with Multi-Chunk Prediction",
          "summary": "Autoregressive video generation has emerged as a powerful paradigm for World Action Models (WAMs). However, existing approaches suffer from slow training convergence and limited converged accuracy, particularly at high frame rates, as the training supervision is confined to the current chunk without explicit signals about future dynamics; they also suffer from slow inference due to iterative video denoising. In this paper, we present Next Forcing, a multi-chunk prediction (MCP) framework for causal world modeling…",
          "summaryCn": "提出Next Forcing，通过多块预测目标加速世界动作模型的训练和推理，并提高精度。在高帧率下显著提升视频生成性能，为因果世界建模提供了新方法。",
          "reasonCn": "提出多块预测框架改进世界动作模型，涉及视频生成和动作预测。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.11187v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11187v1",
          "published": "2026-06-09T17:59:22Z",
          "updated": "2026-06-09T17:59:22Z",
          "authors": [
            "Gangwei Xu",
            "Qihang Zhang",
            "Jiaming Zhou",
            "Xing Zhu",
            "Yujun Shen",
            "Xin Yang",
            "Yinghao Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10862v1",
          "title": "LIBERO-Occ: Evaluating and Improving Vision-Language-Action Models under Scene-Induced Occlusion via Viewpoint Imagination",
          "summary": "Vision-Language-Action (VLA) models achieve strong performance on standard manipulation benchmarks, but most evaluations assume that task-relevant objects are fully visible. This assumption often fails in realistic settings, where occlusion makes manipulation partially observable. In this paper, we study \\textit{scene-induced occlusion} as a fundamental challenge for VLA models and introduce \\textbf{LIBERO-Occ}, an occlusion-oriented extension of LIBERO.",
          "summaryCn": "引入LIBERO-Occ基准，评估VLA模型在遮挡下的性能下降。提出视角想象（VIM）方法，通过生成互补视图增强动作预测。该方法无需额外摄像头即可提升部分可观察场景中的鲁棒性。",
          "reasonCn": "研究场景遮挡下VLA模型的性能并提出视角想象方法，直接处理视觉-语言-动作问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10862v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10862v1",
          "published": "2026-06-09T13:39:49Z",
          "updated": "2026-06-09T13:39:49Z",
          "authors": [
            "Taishan Li",
            "Jiwen Zhang",
            "Siyuan Wang",
            "Xuanjing Huang",
            "Zhongyu Wei"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10568v1",
          "title": "VeriSpace: Spatially Grounded Action Verification for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have shown strong promise for robotic manipulation, but their reliability at test time remains limited by one-shot action prediction, where even small action errors can cause grasp failure, collision, or incorrect task progression. A natural alternative is to equip VLA systems with test-time verification, allowing multiple candidate actions to be proposed and evaluated before execution. However, reliable action verification is challenging because it requires not only distinguish…",
          "summaryCn": "提出VeriSpace，通过3D注入场景编码和空间基础动作推理对VLA候选动作进行验证。在多个基准和真实任务上提升了VLA的可靠性，展示了测试时验证的有效性。",
          "reasonCn": "提出空间感知的动作验证器，用于VLA模型的测试时动作选择。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10568v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10568v1",
          "published": "2026-06-09T08:31:59Z",
          "updated": "2026-06-09T08:31:59Z",
          "authors": [
            "Guiyu Zhao",
            "Longteng Guo",
            "Junyou Zhu",
            "Jun Fu",
            "Yanghong Mei",
            "Bin Cao",
            "Jie Jiang",
            "Xingjian He",
            "Jing Liu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10501v1",
          "title": "Uncovering Vulnerability of Vision-Language-Action Models under Joint-Level Physical Faults",
          "summary": "Deploying Vision-Language-Action (VLA) models in real robotic systems requires robustness not only to semantic and perceptual variations, but also to embodiment-side faults that change how actions are physically realized. Real robots can experience joint-level changes caused by actuator degradation, hardware faults, safety limits, collision damage, or wear-induced friction. These faults are critical because they alter the action-to-motion interface of a policy, disrupting the learned closed-loop relationship betwe…",
          "summaryCn": "分析了VLA模型在机器人关节故障时的性能下降，提出J-PARC残差校准方法。该方法从关节动力学推断故障状态并补偿动作，提高了故障下的任务成功率。",
          "reasonCn": "研究VLA模型在关节级物理故障下的脆弱性并提出残差校准框架。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10501v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10501v1",
          "published": "2026-06-09T07:26:25Z",
          "updated": "2026-06-09T07:26:25Z",
          "authors": [
            "Minsoo Jo",
            "Taeju Kwon",
            "Junha Chun",
            "Youngjoon Jeong",
            "Taesup Kim"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10495v1",
          "title": "Act on What You See: Unlocking Safe Social Navigation in Vision-Language-Action Models",
          "summary": "Safe social navigation requires robots to distinguish people from ordinary obstacles and to react before danger becomes imminent. We show that pretrained Vision-Language-Action (VLA) models already encode pedestrian-object distinctions and future collision signals in their internal representations, but behavior cloning fails to translate these signals into socially appropriate actions. To address this mismatch, we propose SALSA, a two-stage annotation-free post-training framework: (1) social behavioral alignment b…",
          "summaryCn": "利用VLA模型的内部表征，通过社交行为对齐和时间安全对齐实现安全社会导航。在SCAND和真实部署中大幅减少近碰撞，提升了社交反事实准确率。",
          "reasonCn": "提出SALSA框架，通过后训练对齐VLA内部表征改善社会导航，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10495v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10495v1",
          "published": "2026-06-09T07:18:01Z",
          "updated": "2026-06-09T07:18:01Z",
          "authors": [
            "Qingzi Wang",
            "Xiyang Wu",
            "Guangyao Shi",
            "Dianwei Chen",
            "Xianfeng Yang",
            "Dinesh Manocha"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.11129v1",
          "title": "WorldOlympiad: Can Your World Model Survive a Triathlon?",
          "summary": "We introduce WorldOlympiad, a benchmark for diagnosing video-based world models across physical faithfulness, geometric consistency, and interaction fidelity. While existing benchmarks often focus on visual quality, semantic alignment, or short-term temporal coherence, they provide limited insight into whether generated videos obey physical rules, preserve coherent 3D structure, and sustain controllable interactions over long horizons. To address this gap, WorldOlympiad decomposes world-model evaluation into three…",
          "summaryCn": "提出WorldOlympiad基准，从物理、几何和交互三个维度诊断视频世界模型。覆盖游戏、机器人和真实视频场景，为世界模型提供可扩展且可解释的评估套件。",
          "reasonCn": "为视频世界模型提出基准，评估动作条件下的生成，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.11129v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11129v1",
          "published": "2026-06-09T17:24:36Z",
          "updated": "2026-06-09T17:24:36Z",
          "authors": [
            "Yuke Zhao",
            "Wangbo Zhao",
            "Weijie Wang",
            "Zeyu Zhang",
            "Dakai An",
            "Akide Liu",
            "Yinghao Yu",
            "Jiasheng Tang",
            "Fan Wang",
            "Wei Wang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 69,
          "llmTotalScore": 0
        },
        {
          "id": "2606.10305v1",
          "title": "SARM2: Multi-Task Stage Aware Reward Modeling for Self Improving Robotic Manipulation",
          "summary": "Fine-tuning vision-language-action (VLA) policies for long-horizon manipulation still relies heavily on behavior cloning, which requires costly high-quality demonstrations and keeps policies near the demonstration distribution. Reward models can reduce this dependence by reweighting demonstrations and providing dense supervision for on-robot reinforcement learning (RL), but they must be dense, accurate, and general. Existing methods fall short: task-specific stage-aware models are accurate but require per-task ann…",
          "summaryCn": "提出SARM2，结合阶段估计和专家混合奖励模型，为VLA策略提供密集奖励。基于此，SPIRAL框架通过自主部署数据改进VLA策略，在多个任务上显著提升成功率。",
          "reasonCn": "提出多任务阶段感知奖励模型自改进VLA策略，涉及视觉-语言-动作策略微调。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.10305v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10305v1",
          "published": "2026-06-09T01:46:23Z",
          "updated": "2026-06-09T01:46:23Z",
          "authors": [
            "Qianzhong Chen",
            "Hau Zheng",
            "Justin Yu",
            "Suning Huang",
            "Jiankai Sun",
            "Ken Goldberg",
            "Chuan Wen",
            "Pieter Abbeel",
            "Yide Shentu",
            "Philipp Wu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 56,
          "llmTotalScore": 0
        },
        {
          "id": "2606.11184v1",
          "title": "TacForeSight: Force-Guided Tactile World Model for Contact-Rich Manipulation",
          "summary": "Contact-rich manipulation requires robots to continuously perceive and regulate evolving physical interactions under dynamic contact transitions or complex surface geometries. Recent imitation learning methods improve contact-aware control by incorporating tactile or force feedback, but they rarely model the asymmetric spatiotemporal roles of global force and local tactile sensing. To address this, we propose TacForeSight, a lightweight force-conditioned tactile foresight framework for real-time manipulation.",
          "summaryCn": "提出TacForeSight框架，包含轻量级触觉世界模型和预测触觉条件策略，实现实时接触推理。在多种接触操作任务中表现优于基线，特别在动态接触干扰下有效。",
          "reasonCn": "提出力引导的触觉世界模型，预测触觉动态以辅助操作动作，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.11184v1",
          "pdfLink": "https://arxiv.org/pdf/2606.11184v1",
          "published": "2026-06-09T17:59:03Z",
          "updated": "2026-06-09T17:59:03Z",
          "authors": [
            "Yujie Zang",
            "Yuhang Zheng",
            "Xian Nie",
            "Yupeng Zheng",
            "Shuai Tian",
            "Songen Gu",
            "Chen Gao",
            "Zining Wang",
            "Shuicheng Yan",
            "Wenchao Ding"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 53,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260609",
      "dateLabel": "2026-06-09",
      "generatedAt": "2026-06-09T14:05:47.843194+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.09215v1",
          "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
          "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces an…",
          "summaryCn": "提出MotionWAM，一种实时世界动作模型，通过视频世界模型的去噪特征驱动全身运动，统一上下半身动作空间。在9个真实Unitree G1任务上，比微调VLA基线成功率高30%以上。",
          "reasonCn": "提出了一个利用视频世界模型中间特征的实时世界动作模型，用于仿人移动操作，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
          "published": "2026-06-08T08:50:14Z",
          "updated": "2026-06-08T08:50:14Z",
          "authors": [
            "Jia Zheng",
            "Teli Ma",
            "Yudong Fan",
            "Zifan Wang",
            "Shuo Yang",
            "Junwei Liang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 161,
          "llmTotalScore": 0
        },
        {
          "id": "2606.08962v1",
          "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
          "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process.",
          "summaryCn": "提出C3ache，一种无训练的跨推理块残差缓存方法，利用去噪步骤间的相关性加速世界动作模型。在Fast-WAM骨干上实现最高2.5倍加速，任务成功率几乎无下降。",
          "reasonCn": "提出跨块缓存方法加速世界动作模型推理，属于WAM效率研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08962v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
          "published": "2026-06-08T03:01:10Z",
          "updated": "2026-06-08T03:01:10Z",
          "authors": [
            "Weisen Zhao",
            "Lam Nguyen",
            "Zhicong Lu",
            "Yuzhang Shang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 127,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09827v1",
          "title": "MemoryVLA++: Temporal Modeling via Memory and Imagination in Vision-Language-Action Models",
          "summary": "Temporal modeling is essential for robotic manipulation, as effective control requires both memory of past interactions and imagination of future states. However, most VLA models rely primarily on the current observation and therefore struggle with long-horizon, temporally dependent tasks. Cognitive science suggests that humans rely on working memory to buffer short-lived context, the hippocampal system to preserve episodic memory of past experience, and internal models to imagine possible future state evolution.",
          "summaryCn": "提出MemoryVLA++，为VLA模型引入记忆与想象能力，通过工作记忆、感知认知记忆库和世界模型实现全时序建模。在5个仿真基准和真实机器人任务上验证了其长时操作有效性。",
          "reasonCn": "结合VLA与世界模型进行时序建模，同时涉及视觉、语言、动作以及未来状态预测，符合BOTH标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.09827v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09827v1",
          "published": "2026-06-08T17:59:53Z",
          "updated": "2026-06-08T17:59:53Z",
          "authors": [
            "Hao Shi",
            "Weiye Li",
            "Bin Xie",
            "Yulin Wang",
            "Renping Zhou",
            "Tiancai Wang",
            "Xiangyu Zhang",
            "Ping Luo",
            "Gao Huang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09803v1",
          "title": "Echo-Memory: A Controlled Study of Memory in Action World Models",
          "summary": "We present \\textbf{Echo-Memory}, a controlled study of memory mechanisms in action-conditioned world models. These models generate multi-segment videos from a first frame, text prompt, and camera-action sequence, but their central failure is often memory rather than local image synthesis: after the camera leaves and returns, the scene or salient object may silently change. Existing memory designs are hard to compare because gains are entangled with backbone, training, retrieval, and evaluation differences.",
          "summaryCn": "提出Echo-Memory，在统一框架下对比多种记忆机制在动作条件世界模型中的表现，分离容量、压缩、读取等维度。通过回放、重访和开放域返回协议评估，揭示了记忆设计的权衡。",
          "reasonCn": "对动作条件世界模型的记忆机制进行受控研究，聚焦于世界模型在动作预测中的记忆问题，属于WAM研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09803v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09803v1",
          "published": "2026-06-08T17:54:10Z",
          "updated": "2026-06-08T17:54:10Z",
          "authors": [
            "Wayne King",
            "Zeyue Xue",
            "Yuxuan Bian",
            "Jie Huang",
            "Haoran Li",
            "Yaowei Li",
            "Yaofeng Su",
            "Yuming Li",
            "Haoyu Wang",
            "Shiyi Zhang"
          ],
          "categories": [
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 91,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09630v1",
          "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
          "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses…",
          "summaryCn": "提出ReCoVLA，一个失败条件残差恢复框架，冻结预训练VLA，用VLM推断失败模式并编译结构化奖励，训练残差策略。在仿真和真实实验中显著提高成功率，支持零样本sim-to-real。",
          "reasonCn": "研究失败恢复的VLA政策，利用VLM引导奖励编译，属于VLA研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09630v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
          "published": "2026-06-08T15:29:09Z",
          "updated": "2026-06-08T15:29:09Z",
          "authors": [
            "Haodi Hu",
            "Chung-Ta Huang",
            "Jing Liu",
            "Ye Wang",
            "Kei Suzuki",
            "Matthew Brand",
            "Toshiaki Koike-Akino"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09337v1",
          "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
          "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries.",
          "summaryCn": "提出TORL-VLA，将触觉力反馈与VLA结合，通过触觉衍生扳手感知VLA预测参考动作，并在线微调。引入干预截断评论家解决探索数据问题，在插销、咖啡杯放置等任务上提升成功率和效率。",
          "reasonCn": "提出触觉引导的在线强化学习框架，用于接触丰富操作，核心为VLA模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09337v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
          "published": "2026-06-08T11:05:05Z",
          "updated": "2026-06-08T11:05:05Z",
          "authors": [
            "Huaihang Zheng",
            "Yi Yang",
            "Kai Ma",
            "Shenglin Xu",
            "Tian Xie",
            "Guozheng Li",
            "Xiangyu Wang",
            "Yiren Ma",
            "Si Liu",
            "Yinian Mao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09258v1",
          "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
          "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface.",
          "summaryCn": "提出B2FF框架，为前瞻驱动VLA生成里程碑银行，失效时选择熟悉未来状态作为固定视觉目标。在LIBERO上，将基线VLA成功率从56.3%提升至74.0%，无需微调底层动作生成器。",
          "reasonCn": "提出利用预想象里程碑进行VLA失效恢复的方法，属于VLA恢复研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09258v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
          "published": "2026-06-08T09:30:38Z",
          "updated": "2026-06-08T09:30:38Z",
          "authors": [
            "Suyeon Shin",
            "Juwon Kim",
            "Hyeonbin Park",
            "Hyunseo Kim",
            "Hyundo Lee",
            "Hyung-Sin Kim",
            "Byoung-Tak Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09749v1",
          "title": "Your Model Already Knows: Attention-Guided Safety Filter for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have demonstrated impressive end-to-end performance across a variety of robotic manipulation tasks. However, these policies offer no guarantees against collisions with task-irrelevant objects in the scene. Existing safety filters sidestep this problem by querying a vision-language model (VLM) to identify obstacles and their locations.",
          "summaryCn": "发现VLA中少量注意力头可靠定位意图目标，据此构建控制屏障函数安全过滤器。扩展至动态障碍物，在SafeLIBERO上与预言机相当，无需外部VLM，实现实时避碰。",
          "reasonCn": "利用VLA内部注意力头定位目标物体，构建训练无关的安全过滤器，属于VLA安全研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09749v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09749v1",
          "published": "2026-06-08T17:11:16Z",
          "updated": "2026-06-08T17:11:16Z",
          "authors": [
            "Seongbin Park",
            "Fan Zhang",
            "Baharan Mirzasoleiman",
            "Shahriar Talebi",
            "Nader Sehatbakhsh"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09009v1",
          "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
          "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift.",
          "summaryCn": "提出SyVLA，通过意图解耦算法隔离控制相关特征，并使用相似样本引导的RL稳定策略更新。在真实机器人任务上实现更高成功率和泛化，同时保留视觉语言核心能力。",
          "reasonCn": "提出多样化经验训练的鲁棒VLA模型，属于VLA研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09009v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
          "published": "2026-06-08T04:13:38Z",
          "updated": "2026-06-08T04:13:38Z",
          "authors": [
            "Leiyu Wang",
            "Zhaofengnian Wang",
            "Xueqi Li",
            "Luoyi Fan",
            "Cewu Lu",
            "Nanyang Ye"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09811v1",
          "title": "AHA-WAM:Asynchronous Horizon-Adaptive World-Action Modeling with Observation-Guided Context Routing",
          "summary": "World-action models have emerged as a promising paradigm for robot manipulation, jointly modeling visual scene dynamics and actions to inject physical priors into policy learning. However, existing world-action models couple world prediction and action execution at the same temporal resolution, forcing the world branch to model near-term frame variations that are redundant and weakly informative. We posit that strictly binding world prediction and action execution to the same temporal rhythm may underutilize the p…",
          "summaryCn": "提出AHA-WAM，基于双扩散Transformer架构，低频视频分支规划长远场景，高频动作分支闭环执行。通过视界自适应偏移训练和观测引导视频上下文路由，提升世界模型利用率。",
          "reasonCn": "提出非同步视界自适应世界动作模型，解耦世界预测与动作执行的时间分辨率，属于WAM架构研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09811v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09811v1",
          "published": "2026-06-08T17:55:18Z",
          "updated": "2026-06-08T17:55:18Z",
          "authors": [
            "Jisong Cai",
            "Long Ling",
            "Shiwei Chu",
            "Zhongshan Liu",
            "Jiayue Kang",
            "Zhixuan Liang",
            "Wenjie Xu",
            "Yinan Mao",
            "Weinan Zhang",
            "Xiaokang Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 76,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09740v1",
          "title": "ProbeAct: Probe-Guided Training-Free Failure Recovery in Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models demonstrate strong perfor-1 mance on language-conditioned robotic manipulation within their training dis-2 tribution, yet their generalization capabilities remain fundamentally limited. They3 lack the robustness required to handle perturbations, frequently failing when con-4 fronted with lighting changes, altered camera viewpoints, or small initial-state5 variations. We propose PROBEACT, a training-free runtime intervention frame-6 work that detects and recovers from grasping an…",
          "summaryCn": "提出PROBEACT，组合隐藏状态探针、运动学状态机和控制屏障函数，检测并恢复抓取和放置失败。在LIBERO上即插即用，无需修改权重或额外演示，提升稳健性。",
          "reasonCn": "提出基于探针的免训练失败恢复框架，用于VLA模型，属于VLA恢复研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.09740v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09740v1",
          "published": "2026-06-08T17:04:24Z",
          "updated": "2026-06-08T17:04:24Z",
          "authors": [
            "Fan Zhang",
            "Seongbin Park",
            "Baharan Mirzasoleiman",
            "Shariar Talebi",
            "Nader Sehatbakhsh"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 67,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09028v1",
          "title": "ATM: Action-Consistency Transfer Matrix for Diagnosing and Improving Latent World Models",
          "summary": "Latent world models are increasingly used for control and goal-conditioned planning, yet assessing whether their learned representations are useful for planning usually requires slow, planner-coupled simulator evaluation with CEM or similar planners. Such evaluation is black-box and model-complexity-dependent: under the same protocol, different world models may require minutes to hours per checkpoint. In this work, we propose ATM, an Action-Consistency Transfer Matrix for diagnosing whether latent transitions pres…",
          "summaryCn": "提出ATM，通过轻量探针比较真实与预测转移中的动作信息，生成可解释矩阵诊断世界模型质量。无需模拟器 rollout，加速评估超100倍，并引入AITS作为训练信号改善规划。",
          "reasonCn": "提出诊断和改进潜在世界模型的方法，用于规划，属于WAM评估与改进研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09028v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09028v1",
          "published": "2026-06-08T04:53:10Z",
          "updated": "2026-06-08T04:53:10Z",
          "authors": [
            "Jiaheng Chen"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 59,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09813v1",
          "title": "iMaC: Translating Actions into Motion and Contact Images for Embodied World Models",
          "summary": "Embodied world models have emerged as a pivotal paradigm for visual robotic decision-making and interactive environment simulation. However, conventional embodied frameworks rely on low-dimensional structured action vectors (e.g., joint angles and end-effector poses), which suffer from limited expressive capacity, poor generalization across diverse embodiments, and unnatural dynamic modeling for complex physical interactions. To address these limitations, this paper proposesiMac (Image as Action Control), a novel…",
          "summaryCn": "提出iMac，将原始视觉图像作为统一控制范式，构建双分支架构：图像动作编码器和动态世界预测器。在公共基准和真实机器人上实现高保真预测和控制，提升具身世界模型表现。",
          "reasonCn": "提出以图像作为动作表示的具身世界模型，用于状态预测和闭环控制，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09813v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09813v1",
          "published": "2026-06-08T17:55:41Z",
          "updated": "2026-06-08T17:55:41Z",
          "authors": [
            "Zhenyu Wu",
            "Xiuwei Xu",
            "Yukun Zhou",
            "Yifan Li",
            "Qiuping Deng",
            "Xiaofeng Wang",
            "Zheng Zhu",
            "Bingyao Yu",
            "Ziwei Wang",
            "Jiwen Lu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 57,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09457v1",
          "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
          "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation.",
          "summaryCn": "提出ω-EVA，通过三阶段框架学习动作条件潜在动力学，策略提议经世界模型反馈。在多种仿真设置中一致改进提议策略，约12亿参数下取得竞争性能，展示了世界模型作为活跃反馈模块的潜力。",
          "reasonCn": "提出潜在交互式世界模型，实现预想-验证-执行循环，用于动作生成，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09457v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
          "published": "2026-06-08T13:12:56Z",
          "updated": "2026-06-08T13:12:56Z",
          "authors": [
            "Zhenguo Sun",
            "Yu Sun",
            "Hande Huang",
            "Alois Knoll"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 51,
          "llmTotalScore": 0
        },
        {
          "id": "2606.09311v1",
          "title": "FF-JEPA: Long-Horizon Planning in World Models with Latent Planners",
          "summary": "Joint Embedding Predictive Architectures (JEPAs) have shown promising world modeling capabilities, enabling planning in latent space by optimizing action trajectories using methods like the Cross-Entropy Method (CEM). These methods are, however, too computationally expensive and ineffective for long-horizon planning. Furthermore, these methods typically require an explicit image of the goal state, which is not always possible in real-world tasks.",
          "summaryCn": "提出FF-JEPA，通过分层前向动力学模型，将长时域任务分解为短时优化问题，无需目标图像。在PushT上克服长时域崩溃，展示了目标无关规划的潜力。",
          "reasonCn": "提出分层世界模型规划方法，使用无动作潜在规划器进行长时域规划，属于WAM规划研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.09311v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09311v1",
          "published": "2026-06-08T10:16:59Z",
          "updated": "2026-06-08T10:16:59Z",
          "authors": [
            "Sergi Masip",
            "Jonathan Swinnen",
            "Yutong Hu",
            "Renaud Detry",
            "Tinne Tuytelaars"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260608",
      "dateLabel": "2026-06-08",
      "generatedAt": "2026-06-08T15:27:34.669136+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作（WLA）模型，统一世界建模、语言推理和动作生成。采用自回归Transformer预测下一状态，结合语义和物理动态，支持测试时缩放。在模拟和真实环境中展现高效推理和良好性能。",
          "reasonCn": "论文同时涉及视觉输入、语言指令和动作输出（VLA），并以世界模型为核心进行动作预测（WAM），符合双重标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.05979v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05979v1",
          "published": "2026-06-04T10:23:01Z",
          "updated": "2026-06-04T10:23:01Z",
          "authors": [
            "Yi Yang",
            "Zhihong Liu",
            "Siqi Kou",
            "Yiyang Chen",
            "Yanzhe Hu",
            "Jianbo Zhou",
            "Boyuan Zhao",
            "Zhijie Wei",
            "Xiao Xia",
            "Xueqi Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 136,
          "llmTotalScore": 136
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "提出GeoSem-WAM，在RGB未来预测基础上增加几何和语义辅助分支，增强潜在表示。无需测试时视频生成，仅用结构化监督提升动作预测、场景理解和鲁棒性。",
          "reasonCn": "论文以世界模型为核心，预测未来几何和语义表示以提高动作预测准确性，明确用于动作预测，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03188v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
          "published": "2026-06-02T05:48:02Z",
          "updated": "2026-06-02T05:48:02Z",
          "authors": [
            "Fulong Ma",
            "Daojie Peng",
            "Wenjun Yue",
            "Jiahang Cao",
            "Bintao Wang",
            "Qiang Zhang",
            "Jun Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 124,
          "llmTotalScore": 124
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "提出PiL-World，一种分块世界模型，支持VLA策略的闭环评估，通过动作导出的视觉控制和潜在历史生成多视图未来观测。学习失败轨迹以提升想象保真度。",
          "reasonCn": "论文提出用于VLA策略闭环评估的分块世界模型，同时涉及VLA和世界模型，生成动作条件下的未来观测。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.05773v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05773v1",
          "published": "2026-06-04T06:57:25Z",
          "updated": "2026-06-04T06:57:25Z",
          "authors": [
            "Chong Ma",
            "Taiyi Su",
            "Jian Zhu",
            "Jianjun Zhang",
            "Zitai Huang",
            "Yi Xu",
            "Hanli Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 117
        },
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM以语义事件为学习单元，进行事件基础的VLA预训练，支持可变长度动作块执行。通过事件级标注和集群平衡采样实现可扩展学习。",
          "reasonCn": "论文提出事件基础的世界动作模型，结合视觉-语言-动作预训练，同时涉及VLA和WAM。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.01955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01955v1",
          "published": "2026-06-01T09:14:51Z",
          "updated": "2026-06-01T09:14:51Z",
          "authors": [
            "Shalfun Li",
            "Victor Yao",
            "Charles Yang",
            "Truth Qu",
            "Regis Cheng",
            "Ryan Yu",
            "Howard Lu",
            "Newton Von",
            "Vincent Chen",
            "Yohann Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 117
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model.",
          "summaryCn": "提出AHEAD，在冻结VLA上增加运动感知潜世界模型，预测未来patch token以补偿物体运动延迟。在动态抓取任务中显著提高成功率。",
          "reasonCn": "论文将潜空间预测世界模型与VLA结合，用于动态操作中的运动预测，同时涉及VLA和世界模型。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.02486v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
          "published": "2026-06-01T16:55:38Z",
          "updated": "2026-06-01T16:55:38Z",
          "authors": [
            "Shahram Najam Syed",
            "Arthur Jakobsson",
            "Haoran Hao",
            "Jeffrey Ichnowski"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 114,
          "llmTotalScore": 114
        },
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "Flash-WAM针对联合视频-动作扩散模型，提出模态感知一致性蒸馏，将推理压缩为单步，实现23倍加速，保持任务性能。",
          "reasonCn": "论文提出模态感知蒸馏框架加速世界动作模型推理，核心为世界模型生成动作预测，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05254v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05254v1",
          "published": "2026-06-03T15:29:57Z",
          "updated": "2026-06-03T15:29:57Z",
          "authors": [
            "Arman Akbari",
            "Ci Zhang",
            "Arash Akbari",
            "Lin Zhao",
            "Yixiao Chen",
            "Weiwei Chen",
            "Xuan Zhang",
            "Geng Yuan",
            "Yanzhi Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 113
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "OmniDreams基于Cosmos扩散模型，在21k小时驾驶数据上训练，自回归生成动作条件视频，用于闭环自动驾驶策略评估，支持极端天气和动态场景。",
          "reasonCn": "论文提出用于自动驾驶闭环仿真的生成式世界模型，以动作为条件生成视频，支持策略评估，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03159v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03159v1",
          "published": "2026-06-02T05:11:05Z",
          "updated": "2026-06-02T05:11:05Z",
          "authors": [
            "NVIDIA",
            ":",
            "Aarti Basant",
            "Amlan Kar",
            "Despoina Paschalidou",
            "Fangyin Wei",
            "Francesco Ferroni",
            "Guillermo Garcia Cobo",
            "Haithem Turki",
            "Huan Ling"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 112,
          "llmTotalScore": 112
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from…",
          "summaryCn": "TTT-VLA通过潜在提示优化实现VLA测试时训练，利用代理任务自监督信号适应新环境，提升分布偏移下的任务成功率。",
          "reasonCn": "论文提出测试时训练框架优化VLA模型的潜变量提示，直接涉及视觉-语言-动作策略，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03127v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
          "published": "2026-06-02T04:10:39Z",
          "updated": "2026-06-02T04:10:39Z",
          "authors": [
            "Wenbo Zhang",
            "Jianxiong Li",
            "Shuai Yang",
            "Sijin Chen",
            "Jiajun Liu",
            "Lingqiao Liu",
            "Xiao Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "LARA联合优化潜在动作模型和VLA，通过表示对齐利用无标注人类视频，提升VLA在机器人操作基准上的性能。",
          "reasonCn": "论文提出潜在动作表示对齐框架，优化VLA模型学习，核心涉及视觉-语言-动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07100v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07100v1",
          "published": "2026-06-05T09:51:25Z",
          "updated": "2026-06-05T09:51:25Z",
          "authors": [
            "Mengya Liu",
            "Baoxiong Jia",
            "Jiangyong Huang",
            "Jingze Zhang",
            "Siyuan Huang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 102,
          "llmTotalScore": 102
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "WorldFly采用双分支流匹配机制，联合生成未来视频预测和导航动作，通过空间想象引导决策，在城市峡谷穿越中超越基线。",
          "reasonCn": "论文提出基于世界模型的VLA框架，用于无人机导航，同时涉及视觉-语言-动作和世界模型。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.06147v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06147v1",
          "published": "2026-06-04T13:23:05Z",
          "updated": "2026-06-04T13:23:05Z",
          "authors": [
            "Shengtao Zheng",
            "Kai Li",
            "Weichen Zhang",
            "Yu Meng",
            "Chen Gao",
            "Xinlei Chen",
            "Yong Li",
            "Xiao-Ping Zhang"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 93,
          "llmTotalScore": 93
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "通过调整训练噪声分布，实现扩散VLA的一步动作生成，在多个基准上匹配或超过多步解码性能，提升实时性。",
          "reasonCn": "论文针对VLA模型提出一步动作生成方法，直接涉及视觉-语言-动作策略，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.05737v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05737v1",
          "published": "2026-06-04T05:58:30Z",
          "updated": "2026-06-04T05:58:30Z",
          "authors": [
            "Yitong Chen",
            "Shiduo Zhang",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "OSCAR构建大规模标准化数据管道训练动作条件世界模型，采用2D运动学骨架渲染统一条件，实现跨具身泛化，支持策略评估。",
          "reasonCn": "论文提出动作条件视频世界模型，用于机器人策略评估，核心为世界模型并与动作预测相关，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04463v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04463v2",
          "published": "2026-06-03T05:16:41Z",
          "updated": "2026-06-04T13:11:48Z",
          "authors": [
            "Zhuoyuan Wu",
            "Jun Gao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "CLAW通过对抗潜在正则化和扩散视频生成，从视频中学习潜在动作和世界模型，支持基于观察的模仿和规划。",
          "reasonCn": "论文提出从无动作视频中学习连续潜在动作世界模型，用于模仿学习和规划，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04130v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04130v1",
          "published": "2026-06-02T18:40:24Z",
          "updated": "2026-06-02T18:40:24Z",
          "authors": [
            "Tewodros Ayalew",
            "Matthew Jeung",
            "Samuel Wheeler",
            "Xiao Zhang",
            "Andre de la Cruz Arce",
            "Kaylene Stocking",
            "Michael Maire",
            "Matthew R. Walter"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with severe radial distortion and local gripper-centric perspectives, are out-of-distribution for pretrained VLMs; and human-collected trajectories frequently violate kinematic limits, incur collisions, or e…",
          "summaryCn": "VISTA通过UMI-VQA数据集和物理验证管道，桥接腕部鱼眼图像与预训练VLM的分布差距，提升VLA策略性能。",
          "reasonCn": "论文针对VLA训练提出适应UMI数据的框架，直接涉及视觉-语言-动作模型训练，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04708v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04708v2",
          "published": "2026-06-03T10:38:45Z",
          "updated": "2026-06-04T07:21:55Z",
          "authors": [
            "Siyuan Yang",
            "Linzheng Guo",
            "Ouyang Lu",
            "Zhaxizhuoma",
            "Daoran Zhang",
            "Xinmiao Wang",
            "Ting Xiao",
            "Fangzheng Yan",
            "Zhijun Chen",
            "Yan Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "TempoVLA通过变速度轨迹增强和速度条件机制，实现VLA执行速度可控，在模拟和真实任务中提升默认性能。",
          "reasonCn": "论文提出速度可控的VLA策略，直接涉及视觉-语言-动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06491v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06491v1",
          "published": "2026-06-04T17:59:40Z",
          "updated": "2026-06-04T17:59:40Z",
          "authors": [
            "Dong Jing",
            "Jingchen Nie",
            "Tianqi Zhang",
            "Jiaqi Liu",
            "Huaxiu Yao",
            "Zhiwu Lu",
            "Mingyu Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.05645v1",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape the evolution of the surrounding world. However, most end-to-end methods rely on direct state-to-action mappings, capturing correlations without explicitly modeling action-conditioned dynamics. Conversely, continuous-latent world models often lack compositional structure for causal reasoning across counterfactual futures.",
          "summaryCn": "Discrete-WAM将视觉状态和动作表示为对齐的离散token，通过统一扩散框架进行世界建模和层次决策，支持反事实推理。",
          "reasonCn": "论文提出离散视觉-动作世界模型，用于自动驾驶中的世界建模和策略学习，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05645v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05645v1",
          "published": "2026-06-04T03:16:31Z",
          "updated": "2026-06-04T03:16:31Z",
          "authors": [
            "Ziyang Yao",
            "Haochen Liu",
            "Yuncheng Jiang",
            "Zeyu Zhu",
            "Zibin Guo",
            "Jingru Wang",
            "Tianle Liu",
            "Jianwei Cui",
            "Kuiyuan Yang",
            "Hongwei Xie"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "PHASER采用基于相位的容量分配和多模态干扰路由，减轻VLA模型灾难性遗忘，支持开放环境下的终身学习。",
          "reasonCn": "论文提出针对VLA模型的持续学习框架，直接涉及视觉-语言-动作策略，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03598v2",
          "pdfLink": "https://arxiv.org/pdf/2606.03598v2",
          "published": "2026-06-02T13:04:15Z",
          "updated": "2026-06-03T03:44:16Z",
          "authors": [
            "Ziyang Chen",
            "Shaoguang Wang",
            "Weiyu Guo",
            "Qianyi Cai",
            "He Zhang",
            "Pengteng Li",
            "Yiren Zhao",
            "Yandong Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "MPCoT通过奖励引导的多路径潜空间推理，在保持VLA动作接口的同时，增强长时域和不确定控制任务中的表现。",
          "reasonCn": "论文提出多路径潜在推理框架提升VLA测试时性能，直接涉及视觉-语言-动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06245v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06245v1",
          "published": "2026-06-04T14:48:44Z",
          "updated": "2026-06-04T14:48:44Z",
          "authors": [
            "Boyang Zhang",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "3DThinkVLA解耦几何感知和空间推理，通过潜空间特征对齐和推理锚点，赋予VLA隐式3D推理能力。",
          "reasonCn": "论文通过3D思考引导协同训练为VLA模型注入潜在3D先验，直接涉及视觉-语言-动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04436v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04436v1",
          "published": "2026-06-03T04:34:07Z",
          "updated": "2026-06-03T04:34:07Z",
          "authors": [
            "Jiaxin Shi",
            "Xidong Zhang",
            "Fucai Zhu",
            "Zhe Li",
            "Siyu Zhu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "Coarse-to-Control在统一离散动作词汇空间内先预测粗动作规划再生成执行动作，改善长时域任务性能。",
          "reasonCn": "论文提出基于动作token规划的VLA模型，直接涉及视觉-语言-动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07107v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07107v1",
          "published": "2026-06-05T10:01:37Z",
          "updated": "2026-06-05T10:01:37Z",
          "authors": [
            "Jinhao Wu",
            "Shiduo Zhang",
            "Yicheng Liu",
            "Xiaopeng Yu",
            "Sixian Li",
            "Siyin Wang",
            "Hang Zhao",
            "Jing Huo",
            "Yang Gao",
            "Jingjing Gong"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        }
      ]
    },
    {
      "dateKey": "20260607",
      "dateLabel": "2026-06-07",
      "generatedAt": "2026-06-16T03:08:20.143571+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.08094v1",
          "title": "vla.cpp: A Unified Inference Runtime for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) policies are typically shipped as Python/PyTorch stacks that assume a workstation-class GPU, a mismatch for the hardware on which robots actually run. We present vla.cpp, a portable C++ inference runtime built on llama.cpp. To our knowledge, it is the first ggml-class engine to natively serve the flow-matching and diffusion VLA inference pattern, in which a cached vision-language prefix is consumed by a cross-attending action expert integrated over several solver steps.",
          "summaryCn": "提出vla.cpp，一个基于llama.cpp的可移植C++推理引擎，用于高效部署流量匹配和扩散VLA策略。支持七种架构，在LIBERO-Object上匹配最先进性能，并在嵌入式设备上以低内存运行。通过跨硬件屋顶线分析优化推理延迟，显著提升部署效率。",
          "reasonCn": "论文聚焦于VLA模型的统一推理运行时优化，直接涉及视觉输入、语言指令和动作输出，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08094v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08094v1",
          "published": "2026-06-06T10:45:40Z",
          "updated": "2026-06-06T10:45:40Z",
          "authors": [
            "Khanh D. Nguyen",
            "Hung T. Ho",
            "Chinh T. Nguyen",
            "Thanh Q. Duong",
            "Linh D. Le",
            "Duy M. H. Nguyen",
            "Vien A. Ngo",
            "An T. Le"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 109
        },
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "提出Light-WAM，通过紧凑视频骨干和降采样潜在空间中的未来视频监督，实现高效机器人操作世界动作模型。引入StateFusionActionExpert直接预测动作块，避免重生成式专家，在LIBERO和RoboTwin上保持高性能，具有低推理延迟和内存占用。",
          "reasonCn": "论文提出轻量级世界动作模型，以世界模型为核心进行未来预测，并明确用于机器人动作预测，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.08242v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08242v1",
          "published": "2026-06-06T15:58:12Z",
          "updated": "2026-06-06T15:58:12Z",
          "authors": [
            "Ziang Li",
            "Dongzhou Cheng",
            "Yibin Wang",
            "Shiyue Wang",
            "Xiaoyang Xu",
            "Lingxuan Weng",
            "Juan Wang",
            "Jiaqi Wang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2606.08015v1",
          "title": "Q-VGM: Q-Guided Value-Gradient Matching for Flow-Matching VLA Policies",
          "summary": "We propose Q-Guided Value-Gradient Matching (Q-VGM), an off-policy reinforcement learning (RL) method that tackles a long-standing challenge in fine-tuning flow-matching vision-language-action (VLA) policies: efficiently improving an expressive flow-matching action expert with respect to a learned Q-function. Effective improvement must exploit the first-order (gradient) information of the critic, but this is difficult for flow policies, because directly back-propagating the value through their multi-step denoising…",
          "summaryCn": "提出Q-VGM方法，利用价值梯度匹配解决流量匹配VLA策略的微调难题，无需通过去噪链反向传播。通过将价值梯度转换为去噪时的价值梯度场，稳定提升策略性能，在固定重放缓冲区上操作，实现高效改进。",
          "reasonCn": "论文提出了一种针对流量匹配VLA策略的离线强化学习微调方法，直接改进动作专家以优化Q函数，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08015v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08015v1",
          "published": "2026-06-06T07:10:25Z",
          "updated": "2026-06-06T07:10:25Z",
          "authors": [
            "Ziqian Wang",
            "Jiayu Sun",
            "Xingjian Mao",
            "Minqian Wang",
            "Yao Mu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        },
        {
          "id": "2606.08288v1",
          "title": "MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model",
          "summary": "Vision-language-action (VLA) models increasingly condition robot policies on history, depth, or 4D features to resolve ambiguity in long-horizon manipulation. However, more spatiotemporal evidence is not necessarily better: when the injected evidence is not motion-consistent, it can introduce geometric drift, fragmented temporal cues, and unstable action generation. This raises a simple question: should a VLA remember past frames, or remember the motion that connects them?",
          "summaryCn": "提出MotionVLA，将过去视频窗口转换为紧凑、时间连续的轨迹场令牌，为VLA模型提供运动一致的历史证据。通过运动检索和轨迹监督改善长期操作，生成更平滑的执行动作，在仿真和真实机器人上验证有效性。",
          "reasonCn": "论文直接改进视觉-语言-动作模型，通过注入几何运动信息增强长期操作能力，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08288v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08288v1",
          "published": "2026-06-06T18:20:02Z",
          "updated": "2026-06-06T18:20:02Z",
          "authors": [
            "Shanglin Yuan",
            "Weiheng Zhao",
            "Xianda Guo",
            "Wei Sui",
            "Li Yu",
            "Wenyu Liu",
            "Xinggang Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 73,
          "llmTotalScore": 73
        },
        {
          "id": "2606.08107v1",
          "title": "Ego-Pi: VLA Fine-Tuning for Ego-Centric Human and Robot Data",
          "summary": "Robotics faces a fundamental challenge of data scarcity. Unlike language or vision research, there is no internet-scale dataset for robotic manipulation. A promising path forward is to leverage egocentric human data, which can be collected more easily, with greater breadth, and at a larger scale.",
          "summaryCn": "探索利用以自我为中心的人类数据微调VLA模型π0.5，使机器人能够从人类数据中学习新任务语义并组合现有技能。在没有对应机器人数据的情况下，实现灵巧操作的新行为，为解决机器人数据稀缺提供有前景的路径。",
          "reasonCn": "论文研究使用以自我为中心的人类数据微调VLA模型，以学习新的任务语义，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08107v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08107v1",
          "published": "2026-06-06T11:14:21Z",
          "updated": "2026-06-06T11:14:21Z",
          "authors": [
            "Ji Woong Kim",
            "Ke Wang",
            "Zipeng Fu",
            "Sirui Chen",
            "Cong Zhao",
            "Jeff Lai",
            "Chelsea Finn"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.07974v1",
          "title": "PRISM: PRior-guided Imagination Sampling in world Models",
          "summary": "A learned world model provides a powerful physical intuition for evaluating future states. But its effectiveness in continuous control also depends critically on how candidate actions are generated for model-based planning. Rather than solely asking how accurately a model can simulate the future, we ask: which candidate actions are worth evaluating in the first place?",
          "summaryCn": "提出PRISM框架，从世界模型的冻结编码器中提取状态条件高斯先验，通过精度加权乘积融合到规划器的采样分布中。无需额外视觉编码器，利用模型自身表示引导候选动作采样，在连续控制任务中提升基于模型的规划效率。",
          "reasonCn": "论文提出利用世界模型内部表示提取动作先验，用于指导基于模型的规划，明确用于连续控制中的动作选择，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.07974v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07974v1",
          "published": "2026-06-06T04:18:10Z",
          "updated": "2026-06-06T04:18:10Z",
          "authors": [
            "Yuhai Wang",
            "Jiawei Xia",
            "Rongxuan Zhou",
            "Xiao Hu",
            "Yongliang Shi",
            "Jing Du",
            "Yang Ye"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 47
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-16T03:07:13.706881+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07895v1",
          "title": "TBD-VLA: Temporal Block Diffusion Vision Language Action Model",
          "summary": "Discrete Vision-Language-Action (VLA) models typically formulate action generation as next-token prediction over discretized action spaces, conditioning each token autoregressively on prior context. While effective, this paradigm incurs high inference latency and largely ignores the temporal structure inherent in action trajectories. Recent efforts introduce parallel decoding to improve efficiency, enabling faster inference, but lack explicit mechanisms for modeling token dependencies.",
          "summaryCn": "TBD-VLA将动作序列划分为时序块，块内并行扩散、块间自回归，提升了动作生成的时序一致性和推理速度，在仿真和真实任务中优于先前的VLA方法。",
          "reasonCn": "提出了一种基于离散token的VLA框架，通过时序块扩散实现视觉-语言-动作的统一生成。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07895v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07895v1",
          "published": "2026-06-05T23:10:43Z",
          "updated": "2026-06-05T23:10:43Z",
          "authors": [
            "Sung-Wook Lee",
            "Xuhui Kang",
            "Yen-Ling Kuo"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 127,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "LARA框架通过表示对齐将潜在动作模型与VLA联合优化，使LAM从动作轨迹中学习，VLA受前向动力学约束，在多个仿真和真实操作基准上取得10%-15%的性能提升。",
          "reasonCn": "联合训练潜在动作模型（世界模型）与VLA，实现视觉、语言和动作的对齐，LAM提供前向动力学正则化。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.07100v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07100v1",
          "published": "2026-06-05T09:51:25Z",
          "updated": "2026-06-05T09:51:25Z",
          "authors": [
            "Mengya Liu",
            "Baoxiong Jia",
            "Jiangyong Huang",
            "Jingze Zhang",
            "Siyuan Huang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "Coarse-to-Control在统一的离散动作词汇上实施规划，先预测粗动作令牌再生成可执行动作，在长时域多阶段任务中显著提升VLA性能。",
          "reasonCn": "提出在动作令牌空间内进行规划，将视觉-语言输入映射为粗到精的动作序列，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07107v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07107v1",
          "published": "2026-06-05T10:01:37Z",
          "updated": "2026-06-05T10:01:37Z",
          "authors": [
            "Jinhao Wu",
            "Shiduo Zhang",
            "Yicheng Liu",
            "Xiaopeng Yu",
            "Sixian Li",
            "Siyin Wang",
            "Hang Zhao",
            "Jing Huo",
            "Yang Gao",
            "Jingjing Gong"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 73,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "AdaWAM集成轻量级动态路由器，在任务执行中自主触发文本或视觉推理，在保持高动作预测精度的同时提升推理效率，在仿真和真实具身任务中优于现有方法。",
          "reasonCn": "提出自适应多模态推理的世界动作模型，根据上下文动态选择文本或视觉推理以预测动作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.07089v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07089v1",
          "published": "2026-06-05T09:35:48Z",
          "updated": "2026-06-05T09:35:48Z",
          "authors": [
            "Yinzhou Tang",
            "Jingbo Xu",
            "Yu Shang",
            "Zihao Song",
            "Chen Gao",
            "Wei Wu",
            "Yong Li"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 73,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06836v1",
          "title": "Think Like a Pilot: Fine-Grained Long-Horizon UAV Navigation",
          "summary": "Language-guided UAV agents must execute long-horizon semantic instructions while producing smooth, physically feasible continuous flight commands, yet existing Vision-Language Navigation (VLN) benchmarks typically use discrete or coarse actions and existing UAV Vision-Language-Action (VLA) tasks focus on short, atomic maneuvers. To address this gap in UAV task settings, we introduce \\textbf{FLIGHT}, a \\textbf{F}ine-grained \\textbf{L}ong-horizon \\textbf{I}nstruction-\\textbf{G}uided benchmark for \\textbf{H}ybrid UAV…",
          "summaryCn": "FLIGHT VLA采用异步架构解耦低频VLM推理与高频扩散动作模型，通过飞行员推理文本实现任务状态监控，在细粒度长时域无人机导航基准上超越基线。",
          "reasonCn": "该论文明确提出了面向无人机长时域导航的VLA模型，将视觉、语言指令和连续动作控制结合。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06836v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06836v1",
          "published": "2026-06-05T02:23:05Z",
          "updated": "2026-06-05T02:23:05Z",
          "authors": [
            "Xiangyi Zheng",
            "Xiangyu Wang",
            "Qinan Liao",
            "Zimu Tang",
            "Yue Liao",
            "Dongyue Lyu",
            "Guodong Wang",
            "Junjie Liu",
            "Si Liu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 56,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07217v1",
          "title": "Robotic Policy Adaptation via Weight-Space Meta-Learning",
          "summary": "Vision-Language-Action (VLA) models are emerging as a promising paradigm for robotic manipulation, enabling general-purpose policies trained from large corpora of demonstrations and action labels. However, adapting these models to new tasks still typically requires task-specific demonstrations, action annotations, and additional fine-tuning, making deployment costly and difficult to scale. We propose WIZARD, a weight-space meta-learning framework that sidesteps task-specific fine-tuning by generating task-specific…",
          "summaryCn": "WIZARD从语言指令和示范视频中直接预测适应性权重，无需目标任务动作标签，在LIBERO和真实Franka操作中大幅提升未见任务的成功率。",
          "reasonCn": "提出基于权重空间元学习的VLA策略适配方法，利用视觉和语言输入生成任务特定的LoRA参数。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07217v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07217v1",
          "published": "2026-06-05T12:29:28Z",
          "updated": "2026-06-05T12:29:28Z",
          "authors": [
            "Christian Bianchi",
            "Siamak Yousefi",
            "Alessio Sampieri",
            "Andrea Roberti",
            "Luca Rigazio",
            "Fabio Galasso",
            "Luca Franco"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 54,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06904v2",
          "title": "ActionMap: Robot Policy Learning via Voxel Action Heatmap",
          "summary": "Vision-language-action (VLA) models have advanced rapidly across backbones, training recipes, and data scale, yet the action decoder, which converts the backbone's hidden state into a continuous control signal, has barely changed and remains a single-point predictor across the majority of current VLAs. Whether implemented via autoregressive token bins, L1 regression, or flow-matching denoising, the resulting decoder treats the action space as unstructured, leaving the geometric proximity of neighboring actions une…",
          "summaryCn": "ActionMap将动作预测为体素热图，替代传统单点回归头，在多个VLA骨干网络上一致提升性能并具有更高的数据效率。",
          "reasonCn": "提出一种新的VLA动作解码器——体素热图，直接融入现有VLA模型，利用动作空间几何邻近性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06904v2",
          "pdfLink": "https://arxiv.org/pdf/2606.06904v2",
          "published": "2026-06-05T04:42:56Z",
          "updated": "2026-06-10T11:46:24Z",
          "authors": [
            "Pei Yang",
            "Hai Ci",
            "Yanzhe Chen",
            "Qi Lv",
            "Han Cai",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 52,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07383v1",
          "title": "RhinoVLA Technical Report",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for robotic manipulation, but real-time deployment on edge hardware remains challenging. In this work, we identify VLM visual and context tokens as a major source of deployment latency: for GEMM-dominated projection operators, computation grows linearly with the number of input tokens when model dimensions are fixed. Motivated by this observation, we propose RhinoVLA, a deployment-oriented VLA model co-designed with the Huixi R1 edge SoC.",
          "summaryCn": "RhinoVLA通过令牌高效的VLM骨干和连续动作专家降低推理负载，结合硬件优化实现10Hz以上实时控制，性能与π0.5相当。",
          "reasonCn": "面向边缘部署的VLA模型，优化视觉-语言-动作的实时推理。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07383v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07383v1",
          "published": "2026-06-05T15:21:41Z",
          "updated": "2026-06-05T15:21:41Z",
          "authors": [
            "Huixi Intelligence",
            ":",
            "Chen Zhang",
            "Chenyang Zhou",
            "Guanglei Ding",
            "Guanghui He",
            "Haibin Gao",
            "Jiajia Chen",
            "Jianyong Zhang",
            "Lianyi Yu"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 50,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06832v1",
          "title": "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images",
          "summary": "Robots performing long-horizon visual manipulation observe high-dimensional images, but successful plans depend on action-relevant facts: what can be done now and what changes afterward. A useful planning representation should discard irrelevant visual details while preserving action applicability and effects. Classical task planners exploit this structure through symbolic operators with preconditions and effects, but obtaining such representations from raw visual experience remains challenging.",
          "summaryCn": "STRIPS-WM从视觉迁移中归纳出STRIPS风格的动作模型，支持从图像开始和目标进行经典规划，在视觉重排任务中验证有效性。",
          "reasonCn": "直接从图像学习符号化的世界模型用于任务规划，明确面向动作序列生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.06832v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06832v1",
          "published": "2026-06-05T02:16:50Z",
          "updated": "2026-06-05T02:16:50Z",
          "authors": [
            "Abhiroop Ajith",
            "Constantinos Chamzas"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 43,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-16T03:05:39.732206+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作模型，统一世界建模、语言推理和动作合成；基于自回归Transformer，结合世界专家和动作专家；在模拟和真实环境评估，支持测试时扩展。",
          "reasonCn": "提出统一世界建模、语言推理和动作合成的世界-语言-动作模型，同时满足VLA和WAM标准",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.05979v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05979v1",
          "published": "2026-06-04T10:23:01Z",
          "updated": "2026-06-04T10:23:01Z",
          "authors": [
            "Yi Yang",
            "Zhihong Liu",
            "Siqi Kou",
            "Yiyang Chen",
            "Yanzhe Hu",
            "Jianbo Zhou",
            "Boyuan Zhao",
            "Zhijie Wei",
            "Xiao Xia",
            "Xueqi Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 132,
          "llmTotalScore": 132
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "提出PiL-World，一个块式世界模型，用于VLA策略在环评估；通过条件视频生成实现闭环评估，无需真实机器人执行每一步；利用失败轨迹学习，提高rollout保真度。",
          "reasonCn": "提出用于VLA策略闭环评估的块式世界模型，根据VLA rollout生成未来观测，直接支持动作评估，符合WAM标准",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05773v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05773v1",
          "published": "2026-06-04T06:57:25Z",
          "updated": "2026-06-04T06:57:25Z",
          "authors": [
            "Chong Ma",
            "Taiyi Su",
            "Jian Zhu",
            "Jianjun Zhang",
            "Zitai Huang",
            "Yi Xu",
            "Hanli Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 113
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "提出WorldFly，基于世界模型的VLA框架用于无人机导航；采用双分支耦合流匹配机制联合预测未来视频和动作；在城市峡谷遍历基准上验证了空间想象对决策的有效性。",
          "reasonCn": "提出基于世界模型的VLA框架，联合生成未来视频预测和导航动作，同时满足VLA和WAM标准",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.06147v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06147v1",
          "published": "2026-06-04T13:23:05Z",
          "updated": "2026-06-04T13:23:05Z",
          "authors": [
            "Shengtao Zheng",
            "Kai Li",
            "Weichen Zhang",
            "Yu Meng",
            "Chen Gao",
            "Xinlei Chen",
            "Yong Li",
            "Xiao-Ping Zhang"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "针对扩散VLA模型，提出通过高噪声偏置训练实现一步动作生成；在LIBERO和真实机器人双臂任务上验证，一步解码性能匹配或超过十步；显示标准扩散训练可自然涌现强一步VLA动作生成。",
          "reasonCn": "研究视觉-语言-动作模型的一步动作生成，涉及视觉输入、语言指令和机器人动作输出，符合VLA标准",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.05737v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05737v1",
          "published": "2026-06-04T05:58:30Z",
          "updated": "2026-06-04T05:58:30Z",
          "authors": [
            "Yitong Chen",
            "Shiduo Zhang",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.05645v2",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape future world evolution, rather than merely mapping observations to actions. However, most end-to-end methods rely on direct state-to-action imitation, while existing world models often remain weakly aligned with downstream policy generation. We introduce Discrete-WAM, a unified discrete vision-action world-policy framework that represents visual observations, future states, high-level decisions, and ego actions within a shared token space.",
          "summaryCn": "提出Discrete-WAM，统一离散视觉-动作标记编辑的世界-策略学习框架；联合训练世界建模、世界-策略建模和策略建模；在自动驾驶基准上实现强规划性能，支持可控未来生成和反事实评估。",
          "reasonCn": "提出统一离散视觉-动作世界-策略框架，以世界模型为核心进行动作条件未来预测并用于规划，符合WAM标准",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05645v2",
          "pdfLink": "https://arxiv.org/pdf/2606.05645v2",
          "published": "2026-06-04T03:16:31Z",
          "updated": "2026-06-09T07:25:40Z",
          "authors": [
            "Ziyang Yao",
            "Haochen Liu",
            "Yuncheng Jiang",
            "Zeyu Zhu",
            "Zibin Guo",
            "Jingru Wang",
            "Tianle Liu",
            "Jianwei Cui",
            "Kuiyuan Yang",
            "Hongwei Xie"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "提出TempoVLA，通过显式速度条件实现VLA策略的执行速度可控；利用变速度轨迹增强和模型端条件机制；在仿真和真实任务中实现灵活速度控制，同时提升默认性能。",
          "reasonCn": "提出速度可控的视觉-语言-动作策略，直接涉及视觉、语言和动作，符合VLA标准",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06491v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06491v1",
          "published": "2026-06-04T17:59:40Z",
          "updated": "2026-06-04T17:59:40Z",
          "authors": [
            "Dong Jing",
            "Jingchen Nie",
            "Tianqi Zhang",
            "Jiaqi Liu",
            "Huaxiu Yao",
            "Zhiwu Lu",
            "Mingyu Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "提出MPCoT，奖励引导的多路径潜在推理，用于VLA的测试时扩展；通过初始化多个假设并细化，保持原有动作接口，零推理令牌；在LIBERO和CALVIN上提升长程任务性能。",
          "reasonCn": "提出多路径潜在推理框架以提升视觉-语言-动作策略的测试时扩展性，直接处理视觉、语言和动作，符合VLA标准",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06245v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06245v1",
          "published": "2026-06-04T14:48:44Z",
          "updated": "2026-06-04T14:48:44Z",
          "authors": [
            "Boyang Zhang",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "提出AffordanceVLA，引入结构化可供性预测作为中间表示，建立精确的感知-动作映射；通过三个互补组件建模操作先验，使用混合Transformer架构；在机器人数据集上克服密集标签稀缺问题。",
          "reasonCn": "提出通过可供性感知理解增强动作生成的视觉-语言-动作模型，符合VLA标准",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06155v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06155v1",
          "published": "2026-06-04T13:28:51Z",
          "updated": "2026-06-04T13:28:51Z",
          "authors": [
            "Qize Yu",
            "Jiadi You",
            "Yuran Wang",
            "Jiaqi Liang",
            "Bowen Ping",
            "Yang Tian",
            "Yue Chen",
            "Minghong Cai",
            "Zeying Gong",
            "Ruihai Wu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 69,
          "llmTotalScore": 69
        },
        {
          "id": "2606.06014v1",
          "title": "PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models",
          "summary": "Latent world models (LWMs) have strengthened end-to-end autonomous driving by forecasting compact scene dynamics for downstream planning. However, existing LWM-based planners usually generate trajectories directly from entangled latent representations. This compact latent-to-planner pathway lacks explicit modeling of risk, drivability, and diverse style preferences, making driving-style dynamics difficult to supervise, inspect, or modulate before a final trajectory is selected.",
          "summaryCn": "提出PLAN-S，在潜世界模型中解码风格条件代价图，实现规划器与潜空间之间的可控桥接；在nuScenes和NAVSIM上验证，降低碰撞率并提升预测驾驶行为评分。",
          "reasonCn": "提出用于自动驾驶世界模型的规划桥梁，以世界模型为核心进行潜风格动力学规划，符合WAM标准",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.06014v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06014v1",
          "published": "2026-06-04T11:03:20Z",
          "updated": "2026-06-04T11:03:20Z",
          "authors": [
            "Xiaoyun Qiu",
            "Jingtao He",
            "Yijie Chen",
            "Yusong Huang",
            "Haotian Wang",
            "Yixuan Wang",
            "Xinhu Zheng"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 32,
          "llmTotalScore": 32
        },
        {
          "id": "2606.05960v1",
          "title": "Towards a Data Flywheel for Embodied Intelligence in Logistics",
          "summary": "Embodied intelligence is moving from laboratory demonstrations toward industrial deployment, with the logistics industry serving as a key application scenario. Learning-based policies offer a promising path beyond traditional perception-planning-control pipelines, but their scalability depends on how embodied data can be collected, organized, and reused. This research studies a data-centric framework for industrial embodied intelligence by constructing a logistics data flywheel.",
          "summaryCn": "提出物流数据飞轮框架，利用世界模型为长尾包裹操作生成可靠监督；WM-DAgger通过合成分布外恢复数据增强鲁棒模仿学习；探索大规模多模态数据对齐用于持续系统改进。",
          "reasonCn": "提出基于世界模型的数据聚合框架用于物流操作，明确将世界模型用于动作策略学习，符合WAM标准",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05960v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05960v1",
          "published": "2026-06-04T09:58:55Z",
          "updated": "2026-06-04T09:58:55Z",
          "authors": [
            "Anlan Yu",
            "Zaishu Chen",
            "Zhiqing Hong",
            "Daqing Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 28,
          "llmTotalScore": 28
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-06-16T03:04:01.049416+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "提出Flash-WAM，一种模态感知的步数蒸馏框架，将世界动作模型推理压缩至单步，实现23倍速度提升，保持任务性能，适用于实时机器人控制。",
          "reasonCn": "论文明确研究世界动作模型（WAM），联合生成视频与机器人动作，并专注于动作预测的加速蒸馏。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05254v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05254v1",
          "published": "2026-06-03T15:29:57Z",
          "updated": "2026-06-03T15:29:57Z",
          "authors": [
            "Arman Akbari",
            "Ci Zhang",
            "Arash Akbari",
            "Lin Zhao",
            "Yixiao Chen",
            "Weiwei Chen",
            "Xuan Zhang",
            "Geng Yuan",
            "Yanzhi Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "OSCAR是一个部署在单GPU上的精确动作条件视频世界模型，通过统一骨骼表示和大规模数据管道实现跨机器人实施例的泛化，用于机器人策略虚拟评估。",
          "reasonCn": "论文提出以动作为条件的视频世界模型，用于跨实施例泛化与策略评估，核心是世界模型驱动的动作条件生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04463v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04463v2",
          "published": "2026-06-03T05:16:41Z",
          "updated": "2026-06-04T13:11:48Z",
          "authors": [
            "Zhuoyuan Wu",
            "Jun Gao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with severe radial distortion and local gripper-centric perspectives, are out-of-distribution for pretrained VLMs; and human-collected trajectories frequently violate kinematic limits, incur collisions, or e…",
          "summaryCn": "VISTA框架通过UMI-VQA数据集和物理验证流水线，桥接视觉与物理失配，实现VLA模型在UMI数据上的有效训练。",
          "reasonCn": "论文聚焦于利用UMI数据训练视觉-语言-动作（VLA）模型，解决视觉失配与物理可行性问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04708v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04708v2",
          "published": "2026-06-03T10:38:45Z",
          "updated": "2026-06-04T07:21:55Z",
          "authors": [
            "Siyuan Yang",
            "Linzheng Guo",
            "Ouyang Lu",
            "Zhaxizhuoma",
            "Daoran Zhang",
            "Xinmiao Wang",
            "Ting Xiao",
            "Fangzheng Yan",
            "Zhijun Chen",
            "Yan Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "提出3D思考引导的联合训练框架，通过潜在空间中的3D几何感知和推理蒸馏，使VLA模型隐式地进行3D空间推理，无需显式链式思维生成。",
          "reasonCn": "论文旨在为VLA模型注入潜在3D先验，提升动作预测中的空间推理能力。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04436v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04436v1",
          "published": "2026-06-03T04:34:07Z",
          "updated": "2026-06-03T04:34:07Z",
          "authors": [
            "Jiaxin Shi",
            "Xidong Zhang",
            "Fucai Zhu",
            "Zhe Li",
            "Siyu Zhu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "ForesightFlow通过解耦优势加权流匹配和一步边界估计器，实现无外部评价器的VLA策略自引导推理，在仿真和真实任务中均表现优异。",
          "reasonCn": "论文围绕视觉-语言-动作（VLA）策略改进，使用流匹配和潜力引导，专注于动作预测优化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04968v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04968v1",
          "published": "2026-06-03T14:49:35Z",
          "updated": "2026-06-03T14:49:35Z",
          "authors": [
            "Yunpeng Mei",
            "Jiakai He",
            "Hongjie Cao",
            "Chenyu Wang",
            "Xiaowen Zhu",
            "Yihan Zhou",
            "Jiamin Wang",
            "Chenbo Xin",
            "Peng Cheng",
            "Yuxuan Yang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 73,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04907v2",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "WAM-Nav采用非对称联合扩散框架，同时生成长期动作和短期视觉预测，减少推理延迟和误差累积，支持多种目标类型的统一导航。",
          "reasonCn": "论文提出潜在世界-动作模型，联合学习动作生成与视觉预测，用于具身视觉导航。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04907v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04907v2",
          "published": "2026-06-03T14:05:19Z",
          "updated": "2026-06-13T10:28:53Z",
          "authors": [
            "Ning Yang",
            "Yan Huang",
            "Kaiwen Peng",
            "Ziheng He",
            "Kai Wang",
            "Cui Miao",
            "Kailin Lyu",
            "Guo Li",
            "Xiaofeng Wang",
            "Zheng Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics. We present FlowPRO, a reward-free offline reinforced fine-tuning framework for flow-matching VLAs.",
          "summaryCn": "FlowPRO提出RPRO算法，结合对抗优化和显式近端正则化，利用真实机器人干预数据高效微调VLA策略，在长时间双手任务中达到最高成功率。",
          "reasonCn": "论文专注于流匹配VLA模型的无奖励强化微调，优化动作预测性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.05468v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05468v1",
          "published": "2026-06-03T21:47:43Z",
          "updated": "2026-06-03T21:47:43Z",
          "authors": [
            "Yihao Wu",
            "He Zhang",
            "Junbo Tan",
            "Xueqian Wang",
            "Zhengyou Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04825v1",
          "title": "HapTile: A Haptic-Informed Vision-Tactile-Language-Action Dataset for Contact-Rich Imitation Learning",
          "summary": "Despite the importance of tactile sensing for reliable manipulation, most existing Vision-Language-Action (VLA) datasets remain vision-only, and those that do incorporate tactile information typically lack the joint combination of task diversity, language conditioning, and action trajectories. Furthermore, existing teleoperation pipelines rarely provide haptic feedback to the operator, despite its established role in demonstration quality and manipulation stability. In this work, we present HapTile, a contact-grou…",
          "summaryCn": "HapTile是一个具身触觉反馈的视觉-触觉-语言-动作数据集，通过同步触觉感知和操作者反馈，提升接触丰富任务的模仿学习性能。",
          "reasonCn": "论文提供了包含视觉、触觉、语言和动作的数据集，支持VLA模型在接触丰富操作上的模仿学习。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04825v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04825v1",
          "published": "2026-06-03T12:48:17Z",
          "updated": "2026-06-03T12:48:17Z",
          "authors": [
            "Amirhosein Alian",
            "Yongqiang Zhao",
            "Shiyi Gu",
            "Xuyang Zhang",
            "Zhuo Chen",
            "Christopher E. Mower",
            "Haitham Bou-Ammar",
            "Shan Luo"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05015v1",
          "title": "Generalization of World Models under Environmental Variability for Vision-based Quadrotor Navigation",
          "summary": "World models, learned generative models that predict how an environment evolves, have become a promising tool for sample-efficient robot learning. Yet how robust they are to environmental variability remains poorly understood. To address this, we conduct a systematic study using vision-based quadrotor navigation as a testbed problem, training DreamerV3-based world models under varying levels of environmental randomness and evaluating them across all levels through cross-environment validation, spanning both Self-S…",
          "summaryCn": "通过跨环境验证和真实四旋翼部署，发现世界模型在SSL预训练中的鲁棒性是sim-to-real转移的关键因素，为具身导航提供可靠世界模型设计指导。",
          "reasonCn": "论文系统地研究视觉四旋翼导航中世界模型的泛化性，涉及动作预测和控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05015v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05015v1",
          "published": "2026-06-03T15:38:36Z",
          "updated": "2026-06-03T15:38:36Z",
          "authors": [
            "Luca Zanatta",
            "Grzegorz Malczyk",
            "Kostas Alexis"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 43,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04534v1",
          "title": "MAD: Mapping-Aware World Models for Agile Quadrotor Flight",
          "summary": "Agile quadrotor flight in cluttered scenes requires more than a reactive mapping from a depth image to a control command: the vehicle must remember which regions have been observed, infer nearby occupied space, and act under partial visibility and tight latency. In this paper, we present Mapping-Aware Dreamer (MAD), a geometry-aware world model for vision-based quadrotor flight. Instead of using raw-image reconstruction as the main self-supervised objective, MAD learns recurrent latent dynamics that reconstruct ro…",
          "summaryCn": "MAD学习重建占据地图和可见性的循环潜在动态，为四旋翼提供几何感知的世界模型，在导航和竞赛任务中表现出更高的成功率和速度。",
          "reasonCn": "论文提出几何感知的世界模型，用于四旋翼敏捷飞行中的动作预测与避障。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04534v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04534v1",
          "published": "2026-06-03T07:17:57Z",
          "updated": "2026-06-03T07:17:57Z",
          "authors": [
            "Xinhong Zhang",
            "Runqing Wang",
            "Yunfan Ren",
            "Ding Yu",
            "Boyu Zhou",
            "Jian Sun",
            "Fang Deng",
            "Jie Chen",
            "Gang Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 28,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-16T03:03:03.835997+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "提出GeoSem-WAM框架，在RGB未来预测上增加几何和语义辅助任务，提升世界模型在具身决策中的动作预测准确性和场景理解能力，且推理时无需显式未来生成。",
          "reasonCn": "提出几何与语义感知的世界动作模型，通过预测未来几何和语义表示增强潜在表征并用于动作预测，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03188v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
          "published": "2026-06-02T05:48:02Z",
          "updated": "2026-06-02T05:48:02Z",
          "authors": [
            "Fulong Ma",
            "Daojie Peng",
            "Wenjun Yue",
            "Jiahang Cao",
            "Bintao Wang",
            "Qiang Zhang",
            "Jun Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 123,
          "llmTotalScore": 123
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "基于Cosmos扩散模型训练的OmniDreams世界模型，实现实时动作条件视频生成，用于自动驾驶策略闭环评估，支持复杂动态场景仿真。",
          "reasonCn": "提出生成式世界模型OmniDreams，根据动作自回归生成视频用于闭环自动驾驶仿真，不含语言指令，故为WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03159v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03159v1",
          "published": "2026-06-02T05:11:05Z",
          "updated": "2026-06-02T05:11:05Z",
          "authors": [
            "NVIDIA",
            ":",
            "Aarti Basant",
            "Amlan Kar",
            "Despoina Paschalidou",
            "Fangyin Wei",
            "Francesco Ferroni",
            "Guillermo Garcia Cobo",
            "Haithem Turki",
            "Huan Ling"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from…",
          "summaryCn": "提出TTT-VLA框架，利用潜在提示优化进行测试时训练，在不修改策略的情况下适应环境分布变化，在多具身任务中提高成功率。",
          "reasonCn": "直接针对VLA模型在部署时的分布偏移问题，通过测试时优化潜在提示提升策略性能，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03127v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
          "published": "2026-06-02T04:10:39Z",
          "updated": "2026-06-02T04:10:39Z",
          "authors": [
            "Wenbo Zhang",
            "Jianxiong Li",
            "Shuai Yang",
            "Sijin Chen",
            "Jiajun Liu",
            "Lingqiao Liu",
            "Xiao Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 103,
          "llmTotalScore": 103
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "CLAW框架利用对抗式潜在正则和扩散生成，联合学习世界模型和潜在动作表示，实现从观测中推理动作和规划，无需动作标注。",
          "reasonCn": "提出从无动作视频中学习连续潜在动作世界模型，支持模仿学习和目标导向规划，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04130v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04130v1",
          "published": "2026-06-02T18:40:24Z",
          "updated": "2026-06-02T18:40:24Z",
          "authors": [
            "Tewodros Ayalew",
            "Matthew Jeung",
            "Samuel Wheeler",
            "Xiao Zhang",
            "Andre de la Cruz Arce",
            "Kaylene Stocking",
            "Michael Maire",
            "Matthew R. Walter"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "PHASER为VLA模型设计相位中心容量分配和多模态干扰路由，缓解持续学习中的遗忘，在多个VLA主干上提升终身学习性能。",
          "reasonCn": "针对VLA模型的持续学习灾难性遗忘问题，提出相位感知经验回放，保持对视觉-语言-动作任务的适应，符合VLA方向。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03598v2",
          "pdfLink": "https://arxiv.org/pdf/2606.03598v2",
          "published": "2026-06-02T13:04:15Z",
          "updated": "2026-06-03T03:44:16Z",
          "authors": [
            "Ziyang Chen",
            "Shaoguang Wang",
            "Weiyu Guo",
            "Qianyi Cai",
            "He Zhang",
            "Pengteng Li",
            "Yiren Zhao",
            "Yandong Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent f…",
          "summaryCn": "针对VLA模型的对抗鲁棒性，提出部分可观测威胁下的两阶段攻击框架，利用注意力定位和语义干扰降低任务成功率。",
          "reasonCn": "研究VLA模型在部分可观测下的对抗攻击，通过扰动视觉-语言-动作模型，涉及视觉输入、语言指令和动作输出，符合VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03556v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03556v1",
          "published": "2026-06-02T12:19:28Z",
          "updated": "2026-06-02T12:19:28Z",
          "authors": [
            "Xiaofei Wang",
            "Mingliang Han",
            "Tianyu Hao",
            "Yi Yang",
            "Yun-Bo Zhao",
            "Keke Tang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 73,
          "llmTotalScore": 73
        },
        {
          "id": "2606.04046v1",
          "title": "Dive into the Scene: Breaking the Perceptual Bottleneck in Vision-Language Decision Making via Focus Plan Generation",
          "summary": "In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools with different benefits: VLMs are better at long-term planning, while VLAs are better at reactive control. However, their performance is limited by the same perceptual bottleneck: visual hallucinations arise due to the models' inability to distinguish task-relevant objects from distractors. In principle, accurate identification and focus o…",
          "summaryCn": "SceneDiver利用粗到细的焦点计划生成，增强VLM和VLA的感知能力，减少幻觉，提升具身决策性能。",
          "reasonCn": "旨在解决VLA模型中的视觉幻觉，通过场景理解提升视觉-语言-行动决策，符合VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.04046v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04046v1",
          "published": "2026-06-02T07:50:56Z",
          "updated": "2026-06-02T07:50:56Z",
          "authors": [
            "Boyuan Xiao",
            "Bohong Chen",
            "Yumeng Li",
            "Ji Feng",
            "Yao-Xiang Ding",
            "Kun Zhou"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout.",
          "summaryCn": "GeoAlign通过后训练几何分支和状态引导查询，增强VLA模型的空间对齐能力，在多个基准上实现高成功率。",
          "reasonCn": "提出GeoAlign架构，将几何空间对齐引入VLA策略学习，处理视觉-语言-动作任务，符合VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03240v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03240v1",
          "published": "2026-06-02T07:01:18Z",
          "updated": "2026-06-02T07:01:18Z",
          "authors": [
            "Yizhi Chen",
            "Zhanxiang Cao",
            "Xinyi Peng",
            "Yixiao Zheng",
            "Xiaxi Si",
            "Yiheng Li",
            "Liyun Yan",
            "Keqi Zhu",
            "Xueyun Chen",
            "Shengcheng Fu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.03784v2",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data.",
          "summaryCn": "通过大规模具身CoT语料和推理丢弃策略，ERVLA将链式思考作为表征塑造监督，在不增加推理时开销下提升VLA性能。",
          "reasonCn": "构建最大具身链式思考语料并训练VLA模型ERVLA，利用推理监督提升动作预测，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03784v2",
          "pdfLink": "https://arxiv.org/pdf/2606.03784v2",
          "published": "2026-06-02T15:37:59Z",
          "updated": "2026-06-03T08:29:49Z",
          "authors": [
            "Nan Sun",
            "Yuan Zhang",
            "Yongkun Yang",
            "Wentao Zhao",
            "Peiyan Li",
            "Jun Guo",
            "Wenxuan Song",
            "Pengxiang Ding",
            "Runze Suo",
            "Yifei Su"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 48
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy.",
          "summaryCn": "OpenEAI-Platform集成低成本机械臂和基于Qwen3-VL的VLA模型，使用开源数据集训练，在真实操作任务中表现可比大规模预训练基线。",
          "reasonCn": "提出开源具身AI平台，包含VLA模型（视觉-语言-动作），符合VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03392v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
          "published": "2026-06-02T09:34:08Z",
          "updated": "2026-06-02T09:34:08Z",
          "authors": [
            "Jinyuan Zhang",
            "Luoyi Fan",
            "Leiyu Wang",
            "Yeqiang Wang",
            "Yicheng Zhu",
            "Cewu Lu",
            "Nanyang Ye"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 48
        },
        {
          "id": "2606.03252v1",
          "title": "AirDreamer: Generalist Drone Navigation with World Models",
          "summary": "Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot's capabilities. Previous methods, which assume the same environment configuration, often rely heavily on human-designed perception pipelines and predefined rules to guide the robot toward the target. This process is environment-dependent and generalizes poorly across environments.",
          "summaryCn": "AirDreamer采用世界模型预测环境变化，结合稀疏奖励强化学习，实现无人机在未知复杂环境中的泛化导航，具备sim-to-real迁移能力。",
          "reasonCn": "提出基于世界模型的无人机导航框架，利用世界模型理解环境并输出导航动作，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03252v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03252v1",
          "published": "2026-06-02T07:15:13Z",
          "updated": "2026-06-02T07:15:13Z",
          "authors": [
            "Zian Liu",
            "Andong Yang",
            "Chunkai Yang",
            "Ruidong An",
            "Chao Gao",
            "Guyue Zhou"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 47
        },
        {
          "id": "2606.03609v2",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through.",
          "summaryCn": "该世界模型预测3D等视域而非外观，专注于可导航空间，学习城市几何的涌现特征，支持跨城市导航。",
          "reasonCn": "提出基于3D等视域的世界模型，根据行动预测未来可视几何，用于具身导航，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03609v2",
          "pdfLink": "https://arxiv.org/pdf/2606.03609v2",
          "published": "2026-06-02T13:11:30Z",
          "updated": "2026-06-03T07:29:22Z",
          "authors": [
            "Xuhui Lin",
            "Stephen Law",
            "Nanjiang Chen",
            "Kunyao Li",
            "Tao Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 45,
          "llmTotalScore": 45
        },
        {
          "id": "2606.03003v1",
          "title": "Exact equivariance, kept through training, buys zero-shot generalisation across the symmetry group",
          "summary": "A latent world model built from an equivariant encoder $E$ and an equivariant predictor $f$ inherits a provable symmetry of its training loss: when the world's dynamics genuinely carries a group $G$ acting on latents by an orthogonal representation $ρ(g)$, the one-step prediction relMSE is exactly invariant across the whole group, so fitting the dynamics on a restricted slice of orientations mathematically determines it on the entire orbit (jǔ yī fǎn sān). We verify this end-to-end at laptop scale (CPU/MPS, fully…",
          "summaryCn": "通过等变编码器和预测器构建世界模型，实现跨对称群零样本泛化，闭环控制误差不变，适用于机器人操作。",
          "reasonCn": "研究等变潜在世界模型用于规划与控制，在PushT等任务上验证零样本泛化，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03003v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03003v1",
          "published": "2026-06-02T01:20:24Z",
          "updated": "2026-06-02T01:20:24Z",
          "authors": [
            "Hongbo Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 34,
          "llmTotalScore": 34
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions.",
          "summaryCn": "Donk模型统一去噪生成未来视频与灵巧手动作，可作为策略和数据引擎，提升轨迹准确性与视频保真度。",
          "reasonCn": "提出统一视频-动作去噪模型，以语言、图像和手状态为条件生成未来视频和动作，兼具世界模型与VLA特性，故标记为BOTH。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.03868v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03868v1",
          "published": "2026-06-02T16:39:23Z",
          "updated": "2026-06-02T16:39:23Z",
          "authors": [
            "Dingrui Wang",
            "YuAn Wang",
            "Jinkun Liu",
            "Yue Zhang",
            "Mattia Piccinini",
            "Yu Sun",
            "Johannes Betz"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 24,
          "llmTotalScore": 24
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-16T03:01:25.237231+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "提出WALL-WM，一种以事件为单位的世界动作模型，通过事件驱动的VLA预训练解决现有方法的粒度不匹配问题；支持事件模式和统一模式，提高多行为学习的可扩展性。",
          "reasonCn": "论文同时涉及视觉-语言-动作预训练和以事件为单位的动作模型，属于WAM和VLA的交叉。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.01955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01955v1",
          "published": "2026-06-01T09:14:51Z",
          "updated": "2026-06-01T09:14:51Z",
          "authors": [
            "Shalfun Li",
            "Victor Yao",
            "Charles Yang",
            "Truth Qu",
            "Regis Cheng",
            "Ryan Yu",
            "Howard Lu",
            "Newton Von",
            "Vincent Chen",
            "Yohann Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model.",
          "summaryCn": "提出AHEAD，在冻结的VLA上叠加运动感知的潜在世界模型，通过预测未来视觉特征来处理动态物体操作；在仿真和真实机器人上大幅提升动态抓取成功率。",
          "reasonCn": "该工作为VLA模型增加了一个潜在世界模型来预测未来特征，用于动态操作中的动作预测，同时具备VLA和WAM特性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.02486v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
          "published": "2026-06-01T16:55:38Z",
          "updated": "2026-06-01T16:55:38Z",
          "authors": [
            "Shahram Najam Syed",
            "Arthur Jakobsson",
            "Haoran Hao",
            "Jeffrey Ichnowski"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02313v1",
          "title": "Towards Precise Intent-Aligned VLA Aerial Navigation via Expert-Guided GRPO",
          "summary": "Vision-Language-Action (VLA) models offer a promising end-to-end paradigm for unmanned aerial vehicles (UAVs) to accomplish complex tasks specified by fine-grained instructions. However, standard supervised fine-tuning (SFT) suffers from data scarcity, limited generalization, and weak supervision for nuanced and complicated human intents. Reinforcement fine-tuning offers a natural way to mitigate these challenges and align policy behaviors with human intents through designable feedback, but applying it to aerial n…",
          "summaryCn": "提出EG-GRPO，一种专家引导的GRPO方法，用于VLA无人机导航的强化微调，提升意图对齐和成功率；通过专家数据和并行仿真加速训练。",
          "reasonCn": "论文针对无人机导航的VLA模型，提出专家引导的强化学习框架，直接处理视觉、语言指令和动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02313v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02313v1",
          "published": "2026-06-01T14:31:35Z",
          "updated": "2026-06-01T14:31:35Z",
          "authors": [
            "Tianyang Chen",
            "Wenjun Li",
            "Xin zhou",
            "Yuze Wu",
            "Fei Gao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operat…",
          "summaryCn": "提出Lie Diffuser Actor (LDA)，一种在SE(3)流形上操作的扩散VLA框架，解决欧几里得谬误导致的约束漂移和非最短路径问题，在CALVIN和真实机器人上取得改进。",
          "reasonCn": "论文提出在SE(3)上运行的扩散VLA策略，纠正姿态表示的欧几里得谬误，直接处理视觉、语言和机器人动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.01847v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01847v1",
          "published": "2026-06-01T07:59:29Z",
          "updated": "2026-06-01T07:59:29Z",
          "authors": [
            "Bing-Cheng Chuang",
            "I-Hsuan Chu",
            "Bor-Jiun Lin",
            "YuanFu Yang",
            "Min Sun",
            "Chun-Yi Lee"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 75,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02735v2",
          "title": "See Less, Specify More: Visual Evidence Budgets for Generalizable VLAs",
          "summary": "Generalization remains a central bottleneck for vision-language-action (VLA) models: under distractors, appearance shifts, and semantically similar tasks, the policy must often infer local execution details from coarse instructions while also deciding which parts of the image matter for control. We present S2 (See Less, Specify More), a framework for improving VLA generalization by training the executor under a cleaner interface. Specify More preserves the original instruction as a stable high-level goal while rel…",
          "summaryCn": "提出S2框架，通过明确的视觉证据预算和细化的执行语言来训练VLA模型，减少视觉干扰并提高泛化能力；兼容现成VLM规划器。",
          "reasonCn": "论文提出S2框架，通过视觉证据预算和细粒度语言指导提升VLA的泛化能力，涉及视觉、语言和动作的联合训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02735v2",
          "pdfLink": "https://arxiv.org/pdf/2606.02735v2",
          "published": "2026-06-01T18:02:07Z",
          "updated": "2026-06-08T17:19:24Z",
          "authors": [
            "Yueh-Hua Wu",
            "Tatsuya Matsushima",
            "Kei Ota"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 54,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02800v2",
          "title": "Cosmos 3: Omnimodal World Models for Physical AI",
          "summary": "We introduce Cosmos 3, a family of omnimodal world models designed to jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. By supporting highly flexible input-output configurations, Cosmos 3 seamlessly unifies critical modalities for Physical AI -- effectively subsuming vision-language models, video generators, world simulators, and world-action models into a single framework. Our evaluation demonstrates that Cosmos 3 establishes a…",
          "summaryCn": "推出Cosmos 3全模态世界模型家族，统一处理语言、图像、视频、音频和动作，在理解与生成任务上达到最优；作为策略模型在RoboArena中排名第一。",
          "reasonCn": "Cosmos 3是一个统一的多模态世界模型，能够预测动作序列，明确用于物理AI的策略生成，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02800v2",
          "pdfLink": "https://arxiv.org/pdf/2606.02800v2",
          "published": "2026-06-01T19:12:30Z",
          "updated": "2026-06-05T16:34:56Z",
          "authors": [
            "NVIDIA",
            ":",
            "Aditi",
            "Niket Agarwal",
            "Arslan Ali",
            "Jon Allen",
            "Martin Antolini",
            "Adeline Aubame",
            "Alisson Azzolini",
            "Junjie Bai"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 53,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02775v1",
          "title": "AURA: Action-Gated Memory for Robot Policies at Constant VRAM",
          "summary": "The KV-cache is the right memory for datacenters but the wrong memory for robots. Datacenter inference batches many short requests and resets them, amortizing an attention cache across a crowd. Embodied agents instead run one long, non-resetting episode on bandwidth-limited edge hardware, where high-bandwidth memory and flash are scarce, flash has finite write endurance, and memory writes rather than compute can become the binding constraint.",
          "summaryCn": "提出AURA-Mem，一种动作门控的恒定内存模块，用于VLA策略的长期推理，通过动作误差信号训练门控写入，显著减少内存使用。",
          "reasonCn": "该论文为VLA模型引入动作门控的恒定大小记忆，旨在提升策略的长期记忆效率，涉及视觉-语言-动作策略。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02775v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02775v1",
          "published": "2026-06-01T18:38:21Z",
          "updated": "2026-06-01T18:38:21Z",
          "authors": [
            "Josef Chen"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 52,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02745v1",
          "title": "SeeTraceAct: Visibility-Aware Latent Planning from Cross-Embodiment Demonstration Videos",
          "summary": "Vision-language-action models (VLAs) are promising general-purpose robot policies, but adapting them to new tasks typically requires costly task-specific teleoperation data. As an alternative, we study one-shot demo-conditioned VLAs, where a robot policy is conditioned on a single demonstration video of an unseen task. We find that existing end-to-end approaches often struggle when successful execution requires precisely localizing small target regions.",
          "summaryCn": "提出SeeTraceAct，一个演示条件下的VLA框架，通过可见性感知的末端执行器轨迹预测改进空间接地；在RoboCasa-DC和真实世界任务中优于基线。",
          "reasonCn": "论文提出基于演示视频的VLA框架，通过预测末端执行器轨迹实现精确空间定位，处理视觉和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02745v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02745v1",
          "published": "2026-06-01T18:09:31Z",
          "updated": "2026-06-01T18:09:31Z",
          "authors": [
            "Jaehyeon Son",
            "Junhyun Kim",
            "Kyle Kam",
            "Jeremiah Coholich",
            "Seok Joon Kim",
            "Jinhoo Kim",
            "Chris Dongjoo Kim",
            "Jaemin Cho",
            "Dieter Fox",
            "Zsolt Kira"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 50,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01950v1",
          "title": "Learning Action-Conditional and Object-Centric Gaussian Splatting World Models for Rigid Objects",
          "summary": "World models enable intelligent agents to predict the consequences of their actions on the environment. In this paper, we propose Multi Rigid Object Gaussian World Model (MRO-GWM), a novel model that learns action-conditional dynamics of rigid objects in 3D. By representing the scene by object-centric Gaussians, we can represent arbitrary object shapes and multi-object scenes.",
          "summaryCn": "提出MRO-GWM，一种以物体为中心的高斯表示的世界模型，学习刚体在动作下的动力学；可用于模型预测控制进行非抓取操作。",
          "reasonCn": "论文提出动作条件化的物体中心高斯世界模型，用于预测刚体未来状态并用于模型预测控制，明确符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01950v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01950v1",
          "published": "2026-06-01T09:12:07Z",
          "updated": "2026-06-01T09:12:07Z",
          "authors": [
            "Jens U. Kreber",
            "Lukas Mack",
            "Joerg Stueckler"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01951v1",
          "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
          "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches to mobile robot navigation remains challenging due to viewpoint changes during locomotion. In this paper, we propose a framework that converts egocentric walking videos into dataset…",
          "summaryCn": "提出将人类行走视频转换为移动机器人学习数据的框架，与机器人数据联合训练VLA模型，提升语言理解和动作鲁棒性。",
          "reasonCn": "论文利用自我中心视频辅助训练移动机器人导航的VLA模型，结合视觉、语言指令和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.01951v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01951v1",
          "published": "2026-06-01T09:12:22Z",
          "updated": "2026-06-01T09:12:22Z",
          "authors": [
            "Shoya Kuno",
            "Yumo Ouchi",
            "Kanata Suzuki"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesiz…",
          "summaryCn": "提出RoboDream，一种组合式世界模型，通过渲染机器人运动并合成新场景、新物体的演示来扩大数据；生成的数据持续提升下游策略性能。",
          "reasonCn": "RoboDream以具身为中心的世界模型用于生成机器人操作数据，以改进策略学习，涉及动作的合成与使用。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02577v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02577v1",
          "published": "2026-06-01T17:59:38Z",
          "updated": "2026-06-01T17:59:38Z",
          "authors": [
            "Junjie Ye",
            "Rong Xue",
            "Basile Van Hoorick",
            "Runhao Li",
            "Harshitha Rajaprakash",
            "Pavel Tokmakov",
            "Muhammad Zubair Irshad",
            "Vitor Guizilini",
            "Yue Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01626v1",
          "title": "IMWM: Intuition Models Complement World Models for Latent Planning",
          "summary": "Planning with a learned latent world model is a promising route to control from raw pixels, but a strong world model alone is not enough. We show this experimentally: even with a perfect world model (operationalized by replacing the learned forward predictor with an idealized rollout of the true environment dynamics), a finite-budget sample-based planner still fails on some tasks, indicating that the bottleneck can lie in search rather than in world-model accuracy. Motivated by this gap, we propose IMWM (Intuition…",
          "summaryCn": "提出IMWM，将世界模型与直觉模型结合用于基于像素的潜在规划；通过检索初始化、混合成本等方式提升规划成功率。",
          "reasonCn": "IMWM使用潜在世界模型进行视觉运动控制规划，尽管无语言指令，但世界模型明确用于动作规划，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01626v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01626v1",
          "published": "2026-06-01T03:23:25Z",
          "updated": "2026-06-01T03:23:25Z",
          "authors": [
            "Baoqi Gao",
            "Ruize Han",
            "Miao Wang",
            "Song Wang"
          ],
          "categories": [
            "cs.LG"
          ],
          "heuristicScore": 37,
          "llmTotalScore": 0
        },
        {
          "id": "2606.02027v1",
          "title": "World-Task Factorization for Robot Learning",
          "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations.",
          "summaryCn": "提出世界-任务分解框架，将环境先验与任务逻辑分离，通过可微分世界模型AICON与紧凑策略实现泛化；无需任务特定数据。",
          "reasonCn": "论文提出世界-任务分解用于机器人学习，利用可微分的有向图世界模型传播梯度到执行器，明确用于动作控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02027v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02027v1",
          "published": "2026-06-01T10:16:07Z",
          "updated": "2026-06-01T10:16:07Z",
          "authors": [
            "Eduardo Sebastián",
            "Adrian Pfisterer",
            "Vito Mengers",
            "Oliver Brock",
            "Amanda Prorok"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 30,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01935v2",
          "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
          "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision.",
          "summaryCn": "提出统一驾驶分词器，结合表示和几何引导的离散编码，支持驾驶世界模型和规划；改进重建质量和生成性能。",
          "reasonCn": "该论文提出的分词器用于驾驶世界模型与规划，世界模型明确用于行动规划，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01935v2",
          "pdfLink": "https://arxiv.org/pdf/2606.01935v2",
          "published": "2026-06-01T09:02:32Z",
          "updated": "2026-06-04T06:01:18Z",
          "authors": [
            "Ziyang Yao",
            "Zeyu Zhu",
            "YunCheng Jiang",
            "Zibin Guo",
            "Huijing Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 24,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01520v1",
          "title": "TERRA: Task-Embedded Reasoning and Representation Architecture for Cross-Domain Applications",
          "summary": "A single action-conditioned latent predictive architecture can in principle be trained on the structured state of a driving scene, a robot workspace, or a financial order book. The ingredients for doing so within any one domain already exist and are individually validated: masked-latent prediction, action-conditioned latent world models, discrete action tokenization, and joint-embedding prediction on voxelized state. What is not established, and what TERRA addresses, is the transfer question: when does a represent…",
          "summaryCn": "提出TERRA，一种任务嵌入的表示架构，利用动作条件化的潜在世界模型实现跨领域转移；在驾驶、机器人等场景中验证结构性衔接。",
          "reasonCn": "TERRA提出一种动作条件化的潜在世界模型架构，用于跨领域结构化状态预测，涉及动作预测和控制，符合WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01520v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01520v1",
          "published": "2026-06-01T00:50:59Z",
          "updated": "2026-06-01T00:50:59Z",
          "authors": [
            "Shayan Shokri"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 24,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-16T02:59:27.954437+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "提出行为与表征双重诊断框架比较VLA与World-Action模型；在LIBERO和RoboTwin基准上评估7种策略；揭示成功指标掩盖的行为差异和预测结构特性。",
          "reasonCn": "论文明确比较VLA与WAM两种范式，涉及视觉输入、语言指令和机器人动作，且世界模型用于动作预测与评估。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.01095v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01095v1",
          "published": "2026-05-31T08:35:12Z",
          "updated": "2026-05-31T08:35:12Z",
          "authors": [
            "Hung Mai",
            "Bin Zhu",
            "Tuan Do"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 132,
          "llmTotalScore": 0
        },
        {
          "id": "2606.00966v1",
          "title": "Threading Optimization for Vision-Language-Action Model Inference in Low-Cost Smart Agricultural Manipulation",
          "summary": "Vision-Language Action (VLA) models continue to face challenges such as slow inference speed and difficulty performing fine-grained motion adjustments, limiting their widespread adoption in industry. While the Real-Time Action Chunking (RTAC) algorithm has been proposed to address these bottlenecks, bridging the gap between the algorithm provided in pseudocode to a stable, real-world deployment on a low-cost robotic arm remains a challenge. In this work, we present a complete system-level implementation of RTAC ta…",
          "summaryCn": "提出RTAC算法的系统级实现，优化线程以降低VLA推理延迟；在农业操作任务上验证提升控制稳定性与速度；桥接伪代码到实际部署的鸿沟。",
          "reasonCn": "论文优化VLA模型推理的线程实现，用于低成本农业操作，直接涉及视觉-语言-动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.00966v1",
          "pdfLink": "https://arxiv.org/pdf/2606.00966v1",
          "published": "2026-05-31T02:49:50Z",
          "updated": "2026-05-31T02:49:50Z",
          "authors": [
            "Keith Truongcao",
            "Christopher Nhu",
            "Zijian An",
            "Phong Nguyen",
            "Siwei Cai",
            "Lifeng Zhou"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 93,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01027v1",
          "title": "$τ_0$-WM: A Unified Video-Action World Model for Robotic Manipulation",
          "summary": "Robotic manipulation requires models that generate executable actions while anticipating and evaluating their future consequences before physical execution. We present $τ_0$-World Model ($τ_0$-WM), a unified video-action world model that integrates policy learning, video prediction, and action evaluation within a single future-predictive framework. Built on a shared video diffusion backbone, $τ_0$-WM provides two complementary interfaces.",
          "summaryCn": "提出τ0-WM，基于共享视频扩散骨干的统一世界模型；联合预测未来视觉潜变量和动作块，并模拟器评分；在长程精细操作任务上性能优越。",
          "reasonCn": "论文提出统一的视频-动作世界模型，以世界模型为核心进行动作预测与评估，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01027v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01027v1",
          "published": "2026-05-31T05:35:36Z",
          "updated": "2026-05-31T05:35:36Z",
          "authors": [
            "Pengfei Zhou",
            "Shengcong Chen",
            "Di Chen",
            "Jiaxu Wang",
            "Rongjun Jin",
            "Bingwen Zhu",
            "Yike Pan",
            "Songen Gu",
            "Kuanning Wang",
            "Shufeng Nan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 63,
          "llmTotalScore": 0
        },
        {
          "id": "2606.00985v1",
          "title": "Make Your VLA More Robust Without More Data By Interleaving Motion Planning",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable progress for mobile manipulation, but their performance on long-horizon tasks remains poor. These tasks are especially challenging because (1) progress toward high-level goals must be maintained across extended sequences of spatially distributed subtasks, and (2) early execution errors compound rapidly over the task horizon. These challenges persist despite finetuning on large human teleoperated mobile manipulation data, indicating that more data alone may…",
          "summaryCn": "提出MPVI框架，交错运动规划与VLA模型；利用VLM检查与本体感知触发模块切换；在BEHAVIOR-1K上任务进度提升113%。",
          "reasonCn": "论文通过运动规划与VLA交错提升长程操作鲁棒性，属于VLA改进研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.00985v1",
          "pdfLink": "https://arxiv.org/pdf/2606.00985v1",
          "published": "2026-05-31T03:52:53Z",
          "updated": "2026-05-31T03:52:53Z",
          "authors": [
            "Dan BW Choe",
            "Sundhar Vinodh Sangeetha",
            "Samuel Coogan",
            "Shreyas Kousik"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 54,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01458v1",
          "title": "LEGS: Fine-Tuning Teleop-Free VLAs for Humanoid Loco-manipulation in an Embodied Gaussian Splatting World",
          "summary": "Training vision-language-action (VLA) policies for humanoid loco-manipulation is constrained by the high cost and complexity of collecting human teleoperation demonstrations. VLA policies fine-tuned in simulators have, until now, failed to transfer effectively in humanoid loco-manipulation tasks. We present LEGS (Loco-manipulation via Embodied Gaussian Splatting), a hybrid simulator that composites a mesh foreground (robot, objects, props) over a photorealistic 3D Gaussian Splatting (3DGS) background reconstructed…",
          "summaryCn": "提出LEGS，用3DGS背景合成逼真数据训练VLA；自动生成操作演示，无需人类遥操作；在Unitree G1上多项任务超越人类遥操作基线。",
          "reasonCn": "论文在具身高斯泼溅模拟器中微调VLA模型，实现类人机器人移动操作，聚焦VLA训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.01458v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01458v1",
          "published": "2026-05-31T21:36:02Z",
          "updated": "2026-05-31T21:36:02Z",
          "authors": [
            "Hojune Kim",
            "Timothy Chen",
            "Jiankai Sun",
            "Lars W. Osterberg",
            "Qianzhong Chen",
            "Ke Wang",
            "Mac Schwager"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01241v2",
          "title": "OneVLA: A Unified Framework for Embodied Tasks",
          "summary": "Navigation and manipulation are fundamental capabilities of embodied intelligence, enabling robots to interpret natural language commands and interact physically with their surroundings. However, current Vision-Language-Action (VLA) models remain constrained by task-specific architectures, specializing in either navigation or manipulation, which hinders the development of general-purpose robotic agents. To bridge this gap, we introduce OneVLA, a unified architecture that integrates these distinct tasks into a sing…",
          "summaryCn": "设计统一动作头与渐进训练策略，融合导航与操作；实现跨任务正迁移与相互强化；在仿真和真实环境达到SOTA性能。",
          "reasonCn": "论文提出统一VLA框架处理导航与操作，属于VLA模型架构研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.01241v2",
          "pdfLink": "https://arxiv.org/pdf/2606.01241v2",
          "published": "2026-05-31T13:43:23Z",
          "updated": "2026-06-02T03:11:27Z",
          "authors": [
            "Lingfeng Zhang",
            "Xiaoshuai Hao",
            "Yingbo Tang",
            "Lei Zhou",
            "Shuyi Zhang",
            "Jinkun Liu",
            "Hongsheng Li",
            "Chenhao Zhang",
            "Qiang Zhang",
            "Hangjun Ye"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01205v2",
          "title": "ImagineUAV: Aerial Vision-Language Navigation via World-Action Modeling and Kinodynamic Planning",
          "summary": "Vision-language navigation (VLN) for UAVs demands grounding free-form instructions into 6-DoF flight under partial observability. While Vision-Language-Action (VLA) models excel at semantic reasoning, they suffer from brittleness due to geometric inconsistency and dynamics mismatch. To address this, we propose ImagineUAV, an imagination-driven framework leveraging cascaded world-action modeling.",
          "summaryCn": "提出ImagineUAV，用级联世界-动作建模实现想象驱动导航；扩散模型生成指令条件观察，提取6-DoF运动；结合运动规划实时避障飞行。",
          "reasonCn": "论文通过潜在视频扩散世界模型想象环境并提取动作，用于无人机导航，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01205v2",
          "pdfLink": "https://arxiv.org/pdf/2606.01205v2",
          "published": "2026-05-31T12:39:44Z",
          "updated": "2026-06-08T02:19:04Z",
          "authors": [
            "Xuchen Liu",
            "Jiawei Huang",
            "Shihao Xia",
            "Bingxi Liu",
            "Jinqiang Cui",
            "Jiankun Yang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01372v1",
          "title": "BRo-JEPA: Learning Modular Arithmetic in Latent Space",
          "summary": "Can neural networks learn abstract algebraic rules, or do they merely memorize training patterns? We investigate this using MNIST digits as states and modular arithmetic operations as actions in a JEPA-style latent world model. Standard supervised baselines and JEPA models with additive operation embeddings fit seen operations but fail to extrapolate reliably to unseen ones.",
          "summaryCn": "利用JEPA风格隐世界模型学习模运算规则；块旋转预测器实现强零-shot泛化；表明合理架构可使世界模型学习符号变换。",
          "reasonCn": "论文以JEPA隐世界模型预测模运算动作结果，涉及动作预测，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01372v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01372v1",
          "published": "2026-05-31T18:01:43Z",
          "updated": "2026-05-31T18:01:43Z",
          "authors": [
            "Divyansh Jha",
            "Yuanfang Xie",
            "Varan Mehra",
            "Brennen Yu"
          ],
          "categories": [
            "cs.LG",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 30,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01151v1",
          "title": "Lagrangian Perturbation Diffusion Steering: Latent Reinforcement Learning for Generative Policies",
          "summary": "Behavior cloning with high-capacity generative policies achieves strong imitation performance, but is often limited by demonstration coverage and distribution shift. Direct reinforcement learning fine-tuning can improve performance, but updating large action decoders is frequently unstable and sample inefficient. We propose Lagrangian Perturbation Diffusion Steering (LP-DS), a lightweight adaptation method that improves a frozen generative policy by learning a compact noise-space perturbation before decoding.",
          "summaryCn": "提出LP-DS，通过隐空间扰动和拉格朗日信任域微调生成式策略；在操作和运动基准上提升成功率和熵；支持VLA模型实际部署。",
          "reasonCn": "论文提出扩散策略微调方法并应用于大型VLA模型，涉及视觉-语言-动作输出改进。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.01151v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01151v1",
          "published": "2026-05-31T10:40:28Z",
          "updated": "2026-05-31T10:40:28Z",
          "authors": [
            "Hikmet Simsir",
            "Ozgur S. Oguz"
          ],
          "categories": [
            "cs.LG"
          ],
          "heuristicScore": 22,
          "llmTotalScore": 0
        }
      ]
    }
  ]
};

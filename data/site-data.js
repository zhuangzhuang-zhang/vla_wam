window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-21T03:03:45.618571+00:00",
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
  "currentDateKey": "20260621",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260621",
      "dateLabel": "2026-06-21",
      "generatedAt": "2026-06-21T03:03:45.618453+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.15768v1",
          "title": "LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies",
          "summary": "Vision-Language-Action models (VLAs) leverage large-scale vision-language pretraining for semantic robot control, but often lack explicit foresight into how robot actions change the scene. World-Action Models (WAMs) address this limitation by conditioning policies on predicted futures, yet existing approaches typically rely on computationally expensive video generation with substantial pixel-level redundancy. We present LaWAM, a Latent World Action Model that exposes predictive dynamics to robot policies through c…",
          "summaryCn": "LaWAM提出潜在世界动作模型，利用隐视觉子目标替代视频生成，实现动态感知的机器人策略；在多个基准上达到领先性能，推理延迟低，显著优于像素空间WAM。",
          "reasonCn": "提出潜在世界动作模型，结合视觉语言动作预测与潜在未来状态预测，用于高效机器人控制。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.15768v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15768v1",
          "published": "2026-06-14T12:06:58Z",
          "updated": "2026-06-14T12:06:58Z",
          "authors": [
            "Jialei Chen",
            "Kai Wang",
            "Kang Chen",
            "Shuaihang Chen",
            "Feng Gao",
            "Wenhao Tang",
            "Zhiyuan Li",
            "Weilin Liu",
            "Zhuyu Yao",
            "Boxun Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 158,
          "llmTotalScore": 158
        },
        {
          "id": "2606.19531v1",
          "title": "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
          "summary": "World Action Models (WAMs) commonly rely on video generation to bridge visual world modeling and robot control. However, video-based WAMs face three coupled limitations: dense multi-frame future tokens make inference costly, full video prediction spends capacity on action-irrelevant temporal and appearance details, and long-horizon future imagination may introduce errors that mislead action prediction. These issues raise a simple question: Does world action model really need video generation?",
          "summaryCn": "ImageWAM用图像编辑模型替代视频生成，通过KV缓存条件化动作专家，实现高效世界动作建模；性能优于VLA基线，计算量和延迟显著降低。",
          "reasonCn": "提出基于图像编辑的世界动作模型，替代视频生成，用于机器人动作预测。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.19531v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19531v1",
          "published": "2026-06-17T19:25:28Z",
          "updated": "2026-06-17T19:25:28Z",
          "authors": [
            "Yuyang Zhang",
            "Wenyao Zhang",
            "Zekun Qi",
            "He Zhang",
            "Haitao Lin",
            "Jingbo Zhang",
            "Yao Mu",
            "Xiaokang Yang",
            "Wenjun Zeng",
            "Xin Jin"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 122,
          "llmTotalScore": 122
        },
        {
          "id": "2606.20562v1",
          "title": "MemoryWAM: Efficient World Action Modeling with Persistent Memory",
          "summary": "Robust robotic manipulation in the real world requires not only an understanding of the current observation, but also memory and dynamics modeling. World action models (WAMs) possess these capabilities by jointly modeling visual foresight and actions conditioned on both current and historical observations, making them a promising paradigm for robotic manipulation. However, existing WAMs face a fundamental trade-off: methods with efficient inference typically condition only on a bounded window of recent observation…",
          "summaryCn": "MemoryWAM设计混合记忆机制，结合近期帧、锚帧和摘要令牌，实现高效世界动作建模；在记忆依赖任务上超越VLA和WAM基线。",
          "reasonCn": "提出具有持久记忆的世界动作模型，用于长时程机器人操作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.20562v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20562v1",
          "published": "2026-06-18T17:59:51Z",
          "updated": "2026-06-18T17:59:51Z",
          "authors": [
            "Sizhe Yang",
            "Juncheng Mu",
            "Tianming Wei",
            "Chenhao Lu",
            "Xiaofan Li",
            "Linning Xu",
            "Zhengrong Xue",
            "Zhecheng Yuan",
            "Dahua Lin",
            "Jiangmiao Pang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 120,
          "llmTotalScore": 120
        },
        {
          "id": "2606.15631v1",
          "title": "Retrieve, Don't Retrain: Extending Vision Language Action Models to New Tasks at Test Time",
          "summary": "Extending a vision-language-action (VLA) policy to a new task typically requires task-specific teleoperated demonstrations and per-task fine-tuning, making adaptation costly in both data collection and compute. In this paper, we show that this target-side per-task adaptation cost can be replaced by retrieval. Our retrieval-augmented policy is trained once on paired demonstrations from the target embodiment (query) and a cheaper embodiment (pool, e.g., human-hand video), then frozen.",
          "summaryCn": "该文提出检索增强策略，使VLA和WAM模型能在测试时通过检索适应新任务；在PushT和RoboTwin上验证了跨具身泛化能力。",
          "reasonCn": "提出检索增强的VLA/WAM策略，通过检索演示数据适应新任务，无需重新训练。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.15631v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15631v1",
          "published": "2026-06-14T06:48:01Z",
          "updated": "2026-06-14T06:48:01Z",
          "authors": [
            "Jeongeun Park",
            "Juhan Park",
            "Taekyung Kim",
            "Sungjoon Choi",
            "Dongyoon Han",
            "Sangdoo Yun"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 118,
          "llmTotalScore": 118
        },
        {
          "id": "2606.20285v1",
          "title": "Co-VLA: Coordination-Aware Structured Action Modeling for Dual-Arm Vision-Language-Action Systems",
          "summary": "Vision-language-action (VLA) models show strong capabilities in single and dual-arm robotic manipulation. Prior works show coordinated bimanual behaviors can emerge from end-to-end learning, leveraging large vision-language backbones with continuous action prediction. However, as bimanual tasks become tightly coupled and execution constraints become critical, implicit coordination alone is insufficient to ensure reliable, interpretable, and stable behavior.",
          "summaryCn": "Co-VLA为双臂VLA引入显式结构先验，通过结构化动作专家和协调感知损失实现可靠双臂操作；在仿真和真实机器人上验证。",
          "reasonCn": "提出协调感知的双臂VLA模型，引入结构化动作专家和协调损失。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20285v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20285v1",
          "published": "2026-06-18T14:28:37Z",
          "updated": "2026-06-18T14:28:37Z",
          "authors": [
            "Yandong Wang",
            "Jiaqian Yu",
            "Xiongfeng Peng",
            "Lu Xu",
            "Yamin Mao",
            "Weiming Li",
            "Jaewook Yoo",
            "Dongwook Lee",
            "Daehyun Ji",
            "Mingbo Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.19297v1",
          "title": "Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models",
          "summary": "Embodied Vision-Language-Action (VLA) models are typically obtained by fine-tuning powerful pretrained VLMs on robotics data, yet it is unclear how much commonsense and factual knowledge they retain after adaptation. Failures on knowledge-sensitive tasks are ambiguous, conflating missing knowledge with poor generalization of low-level control. We introduce Act2Answer, a lightweight protocol that adapts VLM knowledge benchmarks to VLA evaluation by requiring agents to answer through action.",
          "summaryCn": "Act2Answer协议使VLA通过行动回答问题，评估VLA的知识保留；发现VLA在简单概念上表现良好，但在丰富语义类别上有差距。",
          "reasonCn": "研究VLA模型在常识和世界知识方面的保留情况，通过行动回答协议评估。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19297v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19297v1",
          "published": "2026-06-17T17:20:46Z",
          "updated": "2026-06-17T17:20:46Z",
          "authors": [
            "Nikita Kachaev",
            "Andrey Moskalenko",
            "Matvey Skripkin",
            "Nikita Kurlaev",
            "Daria Pugacheva",
            "Albina Burlova",
            "Mikhail Kolosov",
            "Denis Shepelev",
            "Andrey Kuznetsov",
            "Elena Tutubalina"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.18955v1",
          "title": "Motion-Focused Latent Action Enables Cross-Embodiment VLA Training from Human EgoVideos",
          "summary": "Training generalist Vision-Language-Action(VLA) models typically requires massive, diverse robotic datasets with high-fidelity action annotations. While egocentric human manipulation videos are abundant and capture significant environmental diversity, the absence of action labels makes them difficult to use in conventional training paradigms. To address this, we propose a latent-action-based framework designed to extract general action priors from unlabeled human videos.",
          "summaryCn": "通过混合解耦VQ-VAE从人类视频提取运动先验，构建跨具身动作码本，使VLA在少量下游数据下达到竞争性能。",
          "reasonCn": "提出利用人类自我中心视频的潜在动作进行跨具身VLA训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18955v1",
          "published": "2026-06-17T11:37:59Z",
          "updated": "2026-06-17T11:37:59Z",
          "authors": [
            "Runze Xu",
            "Yiluo Zhang",
            "Jian Wang",
            "Yu Wang",
            "Jincheng Yu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 107
        },
        {
          "id": "2606.17924v1",
          "title": "PearlVLA: Progressive Embodied Action-Plan Refinement in Latent Space",
          "summary": "Current Vision-Language-Action (VLA) models face a trade-off between efficient action generation and explicit deliberation. Directly decoding actions from vision-language backbone representations enables low-latency control, whereas explicit reasoning through textual chains, pixel-level subgoals, or action search can improve planning but incurs substantial latency and computational cost. We propose PearlVLA, a VLA framework that moves deliberation into the latent space of a vision-language model (VLM).",
          "summaryCn": "PearlVLA将推演移至VLM潜在空间，通过潜在世界模型迭代优化动作计划，在LIBERO上取得领先性能。",
          "reasonCn": "提出在潜在空间中进行动作计划迭代优化的VLA框架，包含潜在世界模型。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.17924v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17924v1",
          "published": "2026-06-16T13:38:03Z",
          "updated": "2026-06-16T13:38:03Z",
          "authors": [
            "Bochen Yang",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 96,
          "llmTotalScore": 96
        },
        {
          "id": "2606.17046v1",
          "title": "Geometric Action Model for Robot Policy Learning",
          "summary": "Generalist robot policies must follow user instructions while reasoning about how objects, cameras, and robot actions interact in the 3D physical world. Recent vision-language-action models (VLAs) and video world-action models (WAMs) inherit strong semantic or temporal priors from large-scale foundation models, but they still operate primarily on 2D image frames or 2D-derived latent spaces, leaving implicit the 3D geometry required for contact-rich manipulation. We propose the Geometric Action Model (GAM), a langu…",
          "summaryCn": "GAM利用预训练几何基础模型作为感知、预测和动作解码的共享基底，实现语言条件的时序世界建模；在多个操作基准上表现优异。",
          "reasonCn": "提出基于几何基础模型的几何动作模型，用于语言条件操作，结合未来预测与动作解码。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.17046v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17046v1",
          "published": "2026-06-15T17:58:03Z",
          "updated": "2026-06-15T17:58:03Z",
          "authors": [
            "Jisang Han",
            "Seonghu Jeon",
            "Jaewoo Jung",
            "René Zurbrügg",
            "Honggyu An",
            "Tifanny Portela",
            "Marco Hutter",
            "Marc Pollefeys",
            "Seungryong Kim",
            "Sunghwan Hong"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 96,
          "llmTotalScore": 96
        },
        {
          "id": "2606.18589v1",
          "title": "DREAM-Chunk: Reactive Action Chunking with Latent World Model",
          "summary": "Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning.",
          "summaryCn": "DREAM-Chunk在测试时使用潜在世界模型采样候选动作块，通过预测未来状态选择动作，提升VLA在随机环境中的反应性。",
          "reasonCn": "提出利用潜在世界模型增强VLA的动作分块策略，提高随机动态下的鲁棒性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.18589v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18589v1",
          "published": "2026-06-17T01:28:07Z",
          "updated": "2026-06-17T01:28:07Z",
          "authors": [
            "Wenxi Chen",
            "Kaidi Zhang",
            "Chi Lin",
            "Zhiyuan Zhang",
            "Yu She",
            "Yuejiang Liu",
            "Raymond A. Yeh",
            "Shaoshuai Mou",
            "Yan Gu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.20246v1",
          "title": "Finetuning Vision-Language-Action Models Requires Fewer Layers Than You Think",
          "summary": "Vision-Language-Action (VLA) models pre-trained on massive video-robot datasets have revolutionized robotic manipulation, yet their multi-billion parameter architectures impose prohibitive computational burdens during downstream fine-tuning and real-time inference. In this work, we reveal a highly non-trivial architectural characteristic of these continuous control foundation policies (e.g., pi_0, GR00T-N1.5): despite being trained on diverse physical trajectories, they exhibit severe layer-wise representational r…",
          "summaryCn": "发现VLA模型存在严重层冗余，提出基于中心核对齐的压缩管道，实现训练和推理加速且性能不降。",
          "reasonCn": "提出一种训练无关的VLA模型结构压缩方法，通过识别冗余层深度减半。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20246v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20246v1",
          "published": "2026-06-18T13:57:12Z",
          "updated": "2026-06-18T13:57:12Z",
          "authors": [
            "Gia-Binh Nguyen",
            "Trong-Bao Ho",
            "Thien-Loc Ha",
            "Khoa Vo",
            "Philip Lund Møller",
            "Quang T. Nguyen",
            "Long Dinh",
            "Tuan Dam",
            "Vu Duong",
            "Tung M. Luu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.17906v1",
          "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
          "summary": "Recent World-Action (WA) models demonstrate strong generalization ability and data efficiency, but they typically rely on expert trajectories for training. This reliance limits their ability to acquire fine-grained manipulation skills beyond the demonstration distribution and prevents them from continuously improving through real-world interaction. To address these limitations, we propose WAM-RL, a reinforcement learning framework that enables joint optimization of the world model and the action model through onli…",
          "summaryCn": "WAM-RL首次将RL引入世界-动作模型训练，通过分层优化和联合提升实现长时程精细操作技能。",
          "reasonCn": "提出世界-动作模型的强化学习框架，联合优化世界模型和动作模型。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.17906v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17906v1",
          "published": "2026-06-16T13:29:12Z",
          "updated": "2026-06-16T13:29:12Z",
          "authors": [
            "Zezhong Qian",
            "Xiaowei Chi",
            "Yu Qi",
            "Haozhan Li",
            "Zhi Yang Chen",
            "Shanghang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.17598v1",
          "title": "MuseVLA: An Adaptive Multimodal Sensing Vision-Language-Action Model for Robotic Manipulation",
          "summary": "Humans naturally leverage diverse sensing modalities to interact with the physical world, while most Vision-Language-Action (VLA) models for robotics rely solely on RGB observations. This limits their ability to perceive physical properties that are difficult or impossible to infer from RGB cameras, such as temperature, sound, or radar response. We present MuseVLA, an adaptive multimodal sensing VLA model that integrates novel sensors as on-demand tools for robotic manipulation.",
          "summaryCn": "MuseVLA通过传感器令牌和目标描述动态选择模态，转化为统一感应图像进行融合和动作生成；在真实灵巧操作任务上验证。",
          "reasonCn": "提出自适应多模态感知的VLA模型，集成多种传感器作为按需工具。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17598v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17598v1",
          "published": "2026-06-16T07:04:13Z",
          "updated": "2026-06-16T07:04:13Z",
          "authors": [
            "Xingyuming Liu",
            "Ruichun Ma",
            "Heyu Guo",
            "Qixiu Li",
            "Qingwen Yang",
            "Lin Luo",
            "Shiqi Jiang",
            "Chenren Xu",
            "Jiaolong Yang",
            "Baining Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.19784v1",
          "title": "EquiVLA: A General Framework for Rotationally Equivariant Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a powerful paradigm for generalist robot manipulation, yet they lack geometric inductive biases: policies trained at specific orientations require substantially more data to generalize across rotational configurations. We present \\textsc{EquiVLA}, the first general framework for end-to-end $\\mathrm{SO}(2)$-equivariant VLA models, applicable to any architecture coupling a frozen vision-language backbone with a flow-matching Diffusion Transformer action head. \\text…",
          "summaryCn": "EquiVLA引入EquiPerceptor和EquiActor实现近似SO(2)等变，提升VLA旋转泛化能力，在多个基准上大幅超越基线。",
          "reasonCn": "提出旋转等变VLA的通用框架。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19784v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19784v1",
          "published": "2026-06-18T04:36:57Z",
          "updated": "2026-06-18T04:36:57Z",
          "authors": [
            "Thien-Loc Ha",
            "Quang-Tan Nguyen",
            "Trong-Bao Ho",
            "Long Dinh",
            "Minh Duc Nguyen",
            "Gia-Binh Nguyen",
            "Pham Tri Quang",
            "Minh N. Vu",
            "Duy M. H. Nguyen",
            "An Thai Le"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.17200v1",
          "title": "ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining",
          "summary": "Vision-Language-Action (VLA) models benefit from large-scale and diverse embodied data, yet scaling robot trajectory collection is costly and labor-intensive. Recent advances show that large-scale egocentric human videos provide complementary real-world supervision in pretraining. However, joint training on human and robot data remains challenging due to divergences in action spaces, embodiment structures, temporal dynamics, and supervision quality.",
          "summaryCn": "ACE-EGO-0将人类自我视频转为伪动作轨迹，采用统一动作表示和可靠性感知训练，提升VLA预训练数据效率。",
          "reasonCn": "提出联合人类自我中心数据和机器人数据的VLA预训练框架。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17200v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17200v1",
          "published": "2026-06-15T18:40:18Z",
          "updated": "2026-06-15T18:40:18Z",
          "authors": [
            "Hao Li",
            "Ganlong Zhao",
            "Yufei Liu",
            "Haotian Hou",
            "Guoquan Ye",
            "Tongyan Fang",
            "Chunxiao Liu",
            "Siyuan Huang",
            "Jianbo Liu",
            "Xiaogang Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.18043v1",
          "title": "Uncertainty Quantification for Flow-Based Vision-Language-Action Models",
          "summary": "Vision-language-action models (VLAs) combine vision-language backbones with expressive generative action heads trained via flow matching on large-scale robotic datasets. Despite their strong empirical performance in robotic manipulation, VLAs lack mechanisms to quantify confidence in their predictions and to detect when their actions may be unreliable. This presents a critical limitation for real-world deployment in non-stationary environments, where models inevitably encounter scenarios outside their pretraining…",
          "summaryCn": "通过速度场不一致估计认知不确定性，SAVE框架实现不确定性引导的多任务微调，减少所需演示数据。",
          "reasonCn": "提出基于流匹配的VLA不确定性量化方法，用于故障检测和主动微调。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18043v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18043v1",
          "published": "2026-06-16T15:19:09Z",
          "updated": "2026-06-16T15:19:09Z",
          "authors": [
            "Ralf Römer",
            "Maximilian Seeliger",
            "Saida Liu",
            "Ben Sturgis",
            "Marco Bagatella",
            "Daniel Marta",
            "Andreas Krause",
            "Angela P. Schoellig"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.15568v1",
          "title": "SAPS: Shared Autonomy for Policy Steering by Blending Teleoperation with a Pretrained VLA",
          "summary": "Recent advancements in Vision-Language-Action (VLA) models have demonstrated impressive generalist capabilities in robot manipulation, yet these policies can be brittle under out-of-distribution spatial and semantic perturbations. While human teleoperation offers reliable recovery, it can demand high cognitive load and precise manual control, and existing policy steering methods often require auxiliary models or sampler modifications. In this work, we introduce Shared Autonomy for Policy Steering (SAPS), a framewo…",
          "summaryCn": "SAPS无需重新训练，通过三种仲裁策略动态融合人类与VLA动作，显著提升任务成功率并减少人类干预。",
          "reasonCn": "提出共享自主框架，在动作层面混合人类遥操作和VLA策略动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.15568v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15568v1",
          "published": "2026-06-14T03:09:30Z",
          "updated": "2026-06-14T03:09:30Z",
          "authors": [
            "Crystal Zhou",
            "Jehan Yang",
            "Douglas J. Weber",
            "Zackory Erickson"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.20092v1",
          "title": "EventVLA: Event-Driven Visual Evidence Memory for Long-Horizon Vision-Language-Action Policies",
          "summary": "Memory remains a critical bottleneck for long-horizon robotic manipulation, as standard Vision-Language-Action (VLA) policies often fail when task-relevant cues become occluded or unobservable over time. While existing memory-augmented methods utilize historical context, they either suffer from severe information bottlenecks, incur high latency via decoupled dual systems, or rely on unselective buffers that accumulate massive visual redundancies. To address these limitations, we introduce EventVLA, an end-to-end f…",
          "summaryCn": "EventVLA通过动态关键帧证据记忆模块预测未来关键帧概率，自主捕获稀疏视觉事件，在记忆依赖任务上超过基线。",
          "reasonCn": "提出事件驱动的视觉证据记忆VLA，用于长时程操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20092v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20092v1",
          "published": "2026-06-18T11:11:37Z",
          "updated": "2026-06-18T11:11:37Z",
          "authors": [
            "Ganlin Yang",
            "Zhangzheng Tu",
            "Yuqiang Yang",
            "Sitong Mao",
            "Junyi Dong",
            "Tianxing Chen",
            "Jiaqi Peng",
            "Jing Xiong",
            "Jiafei Cao",
            "Jifeng Dai"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 76,
          "llmTotalScore": 76
        },
        {
          "id": "2606.19408v1",
          "title": "FlexLAM: Resolving the Bottleneck Trade-off in Latent Action Learning",
          "summary": "Latent actions provide a compact interface between action-free video and downstream decision-making, yet existing Latent Action Models (LAMs) force every transition through a fixed-capacity bottleneck. We identify a bottleneck trade-off: overly tight codes can discard transition cues needed for action alignment, while overly loose codes preserve additional transition variation that must be resolved when alignment labels are scarce or narrowly distributed. FlexLAM replaces this fixed capacity with variable-length l…",
          "summaryCn": "FlexLAM通过嵌套dropout实现可变长度潜在动作，作为潜在动作世界模型的升级组件，提升过渡重建和对齐。",
          "reasonCn": "提出可变长度潜在动作模型，解决潜在动作学习的瓶颈权衡，适用于世界模型。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.19408v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19408v1",
          "published": "2026-06-17T14:42:03Z",
          "updated": "2026-06-17T14:42:03Z",
          "authors": [
            "Takanori Yoshimoto",
            "Yang Hu",
            "Naruya Kondo",
            "Tatsuya Matsushima"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 75,
          "llmTotalScore": 75
        },
        {
          "id": "2606.18953v1",
          "title": "Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement",
          "summary": "Vision-Language-Action (VLA) models can generalize across diverse manipulation tasks, but their imitation-learning-based policies remain brittle in precise physical interactions due to compounding execution errors; Can a reinforcement learning policy trained purely in simulation improve the robustness of real-world VLAs zero-shot? Residual RL, which learns a corrective policy on top of a frozen VLA, offers a natural framework, but existing approaches face a fundamental sim-to-real dilemma: privileged-state methods…",
          "summaryCn": "利用物体位姿作为紧凑观测空间，在仿真中训练残差RL策略，零样本部署到真实机器人，显著提高VLA成功率。",
          "reasonCn": "提出基于物体中心残差RL的框架，零样本提升真实世界VLA策略鲁棒性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18953v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18953v1",
          "published": "2026-06-17T11:36:54Z",
          "updated": "2026-06-17T11:36:54Z",
          "authors": [
            "Kinam Kim",
            "Namiko Saito",
            "Heecheol Kim",
            "Katsushi Ikeuchi",
            "Jaegul Choo",
            "Yasuyuki Matsushita"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 75,
          "llmTotalScore": 75
        }
      ]
    },
    {
      "dateKey": "20260620",
      "dateLabel": "2026-06-20",
      "generatedAt": "2026-06-20T02:46:12.636080+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.15768v1",
          "title": "LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies",
          "summary": "Vision-Language-Action models (VLAs) leverage large-scale vision-language pretraining for semantic robot control, but often lack explicit foresight into how robot actions change the scene. World-Action Models (WAMs) address this limitation by conditioning policies on predicted futures, yet existing approaches typically rely on computationally expensive video generation with substantial pixel-level redundancy. We present LaWAM, a Latent World Action Model that exposes predictive dynamics to robot policies through c…",
          "summaryCn": "提出LaWAM，通过潜世界模型预测未来视觉子目标，实现高效动态感知机器人操控，在多个基准上取得最优性能且大幅降低延迟。",
          "reasonCn": "结合视觉-语言-动作与潜世界模型，预测未来视觉子目标实现动态感知操控，符合VLA与WAM双重特性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.15768v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15768v1",
          "published": "2026-06-14T12:06:58Z",
          "updated": "2026-06-14T12:06:58Z",
          "authors": [
            "Jialei Chen",
            "Kai Wang",
            "Kang Chen",
            "Shuaihang Chen",
            "Feng Gao",
            "Wenhao Tang",
            "Zhiyuan Li",
            "Weilin Liu",
            "Zhuyu Yao",
            "Boxun Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 159,
          "llmTotalScore": 159
        },
        {
          "id": "2606.19531v1",
          "title": "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
          "summary": "World Action Models (WAMs) commonly rely on video generation to bridge visual world modeling and robot control. However, video-based WAMs face three coupled limitations: dense multi-frame future tokens make inference costly, full video prediction spends capacity on action-irrelevant temporal and appearance details, and long-horizon future imagination may introduce errors that mislead action prediction. These issues raise a simple question: Does world action model really need video generation?",
          "summaryCn": "提出ImageWAM，用图像编辑模型替代视频生成，实现高效机器人动作预测，显著降低计算量和延迟，性能优于VLA基线。",
          "reasonCn": "以图像编辑替代视频生成构建世界模型，用于机器人动作预测，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.19531v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19531v1",
          "published": "2026-06-17T19:25:28Z",
          "updated": "2026-06-17T19:25:28Z",
          "authors": [
            "Yuyang Zhang",
            "Wenyao Zhang",
            "Zekun Qi",
            "He Zhang",
            "Haitao Lin",
            "Jingbo Zhang",
            "Yao Mu",
            "Xiaokang Yang",
            "Wenjun Zeng",
            "Xin Jin"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 124,
          "llmTotalScore": 124
        },
        {
          "id": "2606.20562v1",
          "title": "MemoryWAM: Efficient World Action Modeling with Persistent Memory",
          "summary": "Robust robotic manipulation in the real world requires not only an understanding of the current observation, but also memory and dynamics modeling. World action models (WAMs) possess these capabilities by jointly modeling visual foresight and actions conditioned on both current and historical observations, making them a promising paradigm for robotic manipulation. However, existing WAMs face a fundamental trade-off: methods with efficient inference typically condition only on a bounded window of recent observation…",
          "summaryCn": "MemoryWAM通过混合记忆设计实现高效世界动作建模，在需要记忆的长程任务上优于VLA和WAM基线。",
          "reasonCn": "提出带持久记忆的世界动作模型，用于机器人操控，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.20562v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20562v1",
          "published": "2026-06-18T17:59:51Z",
          "updated": "2026-06-18T17:59:51Z",
          "authors": [
            "Sizhe Yang",
            "Juncheng Mu",
            "Tianming Wei",
            "Chenhao Lu",
            "Xiaofan Li",
            "Linning Xu",
            "Zhengrong Xue",
            "Zhecheng Yuan",
            "Dahua Lin",
            "Jiangmiao Pang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 121,
          "llmTotalScore": 121
        },
        {
          "id": "2606.15631v1",
          "title": "Retrieve, Don't Retrain: Extending Vision Language Action Models to New Tasks at Test Time",
          "summary": "Extending a vision-language-action (VLA) policy to a new task typically requires task-specific teleoperated demonstrations and per-task fine-tuning, making adaptation costly in both data collection and compute. In this paper, we show that this target-side per-task adaptation cost can be replaced by retrieval. Our retrieval-augmented policy is trained once on paired demonstrations from the target embodiment (query) and a cheaper embodiment (pool, e.g., human-hand video), then frozen.",
          "summaryCn": "提出检索增强的VLA策略，无需重新训练即可扩展新任务，利用世界动作模型的视觉一致性强化动作预测。",
          "reasonCn": "通过检索增强VLA策略，利用世界动作模型提供视觉一致性信号，属于VLA与WAM的结合。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.15631v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15631v1",
          "published": "2026-06-14T06:48:01Z",
          "updated": "2026-06-14T06:48:01Z",
          "authors": [
            "Jeongeun Park",
            "Juhan Park",
            "Taekyung Kim",
            "Sungjoon Choi",
            "Dongyoon Han",
            "Sangdoo Yun"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 119,
          "llmTotalScore": 119
        },
        {
          "id": "2606.19297v1",
          "title": "Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models",
          "summary": "Embodied Vision-Language-Action (VLA) models are typically obtained by fine-tuning powerful pretrained VLMs on robotics data, yet it is unclear how much commonsense and factual knowledge they retain after adaptation. Failures on knowledge-sensitive tasks are ambiguous, conflating missing knowledge with poor generalization of low-level control. We introduce Act2Answer, a lightweight protocol that adapts VLM knowledge benchmarks to VLA evaluation by requiring agents to answer through action.",
          "summaryCn": "提出Act2Answer协议，通过动作应答评估VLA模型中常识和世界知识的保留程度，揭示VLA在丰富语义类别上的差距。",
          "reasonCn": "评估VLA模型常识和世界知识保留，不涉及世界模型，属于VLA评估。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19297v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19297v1",
          "published": "2026-06-17T17:20:46Z",
          "updated": "2026-06-17T17:20:46Z",
          "authors": [
            "Nikita Kachaev",
            "Andrey Moskalenko",
            "Matvey Skripkin",
            "Nikita Kurlaev",
            "Daria Pugacheva",
            "Albina Burlova",
            "Mikhail Kolosov",
            "Denis Shepelev",
            "Andrey Kuznetsov",
            "Elena Tutubalina"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 112,
          "llmTotalScore": 112
        },
        {
          "id": "2606.20285v1",
          "title": "Co-VLA: Coordination-Aware Structured Action Modeling for Dual-Arm Vision-Language-Action Systems",
          "summary": "Vision-language-action (VLA) models show strong capabilities in single and dual-arm robotic manipulation. Prior works show coordinated bimanual behaviors can emerge from end-to-end learning, leveraging large vision-language backbones with continuous action prediction. However, as bimanual tasks become tightly coupled and execution constraints become critical, implicit coordination alone is insufficient to ensure reliable, interpretable, and stable behavior.",
          "summaryCn": "Co-VLA引入结构化动作专家和潜变量控制器，显式建模双臂协调，提高协调性和可靠性。",
          "reasonCn": "提出双臂协调VLA模型，引入结构化先验，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20285v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20285v1",
          "published": "2026-06-18T14:28:37Z",
          "updated": "2026-06-18T14:28:37Z",
          "authors": [
            "Yandong Wang",
            "Jiaqian Yu",
            "Xiongfeng Peng",
            "Lu Xu",
            "Yamin Mao",
            "Weiming Li",
            "Jaewook Yoo",
            "Dongwook Lee",
            "Daehyun Ji",
            "Mingbo Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.18955v1",
          "title": "Motion-Focused Latent Action Enables Cross-Embodiment VLA Training from Human EgoVideos",
          "summary": "Training generalist Vision-Language-Action(VLA) models typically requires massive, diverse robotic datasets with high-fidelity action annotations. While egocentric human manipulation videos are abundant and capture significant environmental diversity, the absence of action labels makes them difficult to use in conventional training paradigms. To address this, we propose a latent-action-based framework designed to extract general action priors from unlabeled human videos.",
          "summaryCn": "提出基于潜动作的框架，从人类视频提取通用动作先验，预训练VLA，仅需少量下游数据即可达到竞争性能。",
          "reasonCn": "从无标签人类视频学习潜动作先验，用于跨具身VLA训练，结合潜动作与世界模型预训练属性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.18955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18955v1",
          "published": "2026-06-17T11:37:59Z",
          "updated": "2026-06-17T11:37:59Z",
          "authors": [
            "Runze Xu",
            "Yiluo Zhang",
            "Jian Wang",
            "Yu Wang",
            "Jincheng Yu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 109
        },
        {
          "id": "2606.17046v1",
          "title": "Geometric Action Model for Robot Policy Learning",
          "summary": "Generalist robot policies must follow user instructions while reasoning about how objects, cameras, and robot actions interact in the 3D physical world. Recent vision-language-action models (VLAs) and video world-action models (WAMs) inherit strong semantic or temporal priors from large-scale foundation models, but they still operate primarily on 2D image frames or 2D-derived latent spaces, leaving implicit the 3D geometry required for contact-rich manipulation. We propose the Geometric Action Model (GAM), a langu…",
          "summaryCn": "GAM将几何基础模型用于语言条件操作，直接预测未来几何和动作，在多种操作任务上精度更高。",
          "reasonCn": "利用预训练几何基础模型进行感知、未来预测和动作解码，兼具世界模型和VLA特性。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.17046v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17046v1",
          "published": "2026-06-15T17:58:03Z",
          "updated": "2026-06-15T17:58:03Z",
          "authors": [
            "Jisang Han",
            "Seonghu Jeon",
            "Jaewoo Jung",
            "René Zurbrügg",
            "Honggyu An",
            "Tifanny Portela",
            "Marco Hutter",
            "Marc Pollefeys",
            "Seungryong Kim",
            "Sunghwan Hong"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 98
        },
        {
          "id": "2606.17924v1",
          "title": "PearlVLA: Progressive Embodied Action-Plan Refinement in Latent Space",
          "summary": "Current Vision-Language-Action (VLA) models face a trade-off between efficient action generation and explicit deliberation. Directly decoding actions from vision-language backbone representations enables low-latency control, whereas explicit reasoning through textual chains, pixel-level subgoals, or action search can improve planning but incurs substantial latency and computational cost. We propose PearlVLA, a VLA framework that moves deliberation into the latent space of a vision-language model (VLM).",
          "summaryCn": "PearlVLA通过潜空间迭代精炼和潜世界模型引导，实现高效动作规划，在LIBERO上达到最优性能。",
          "reasonCn": "在VLA潜空间中进行逐步动作规划精炼，利用冻结潜世界模型预测未来，属于VLA+WAM。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.17924v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17924v1",
          "published": "2026-06-16T13:38:03Z",
          "updated": "2026-06-16T13:38:03Z",
          "authors": [
            "Bochen Yang",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 97
        },
        {
          "id": "2606.19998v1",
          "title": "Tri-Info: Generalizable, Interpretable Failure Prediction for VLA Models via Information Theory",
          "summary": "Vision-Language-Action (VLA) models are increasingly deployed across diverse tasks, yet they remain black boxes whose physical interactions can cause irreversible harm, making generalizable and interpretable failure detection essential. We observe that successful and failed rollouts carry systematically different information-theoretic signatures. Building on this, we formalize VLA control as a closed-loop information pipeline and derive the Triple Information-theoretic (Tri-Info) signals that capture whether actio…",
          "summaryCn": "Tri-Info利用信息论信号检测VLA失败，具有跨架构和跨环境泛化能力，并可解释失败模式。",
          "reasonCn": "提出VLA故障预测的信息论方法，不涉及世界模型或动作预测。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19998v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19998v1",
          "published": "2026-06-18T09:34:22Z",
          "updated": "2026-06-18T09:34:22Z",
          "authors": [
            "Jinghan Yang",
            "Yunchao Zhang",
            "Wang Yuan",
            "Haolun Wan",
            "Jiaming Zhang",
            "Zhengyang Hu",
            "Yanchao Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 96,
          "llmTotalScore": 96
        },
        {
          "id": "2606.18589v1",
          "title": "DREAM-Chunk: Reactive Action Chunking with Latent World Model",
          "summary": "Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning.",
          "summaryCn": "DREAM-Chunk利用潜世界模型对候选动作块进行未来预测，选择最佳动作，提升随机动态下的鲁棒性。",
          "reasonCn": "在VLA动作块基础上引入潜世界模型，通过测试时规划提高鲁棒性，兼具VLA和WAM。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.18589v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18589v1",
          "published": "2026-06-17T01:28:07Z",
          "updated": "2026-06-17T01:28:07Z",
          "authors": [
            "Wenxi Chen",
            "Kaidi Zhang",
            "Chi Lin",
            "Zhiyuan Zhang",
            "Yu She",
            "Yuejiang Liu",
            "Raymond A. Yeh",
            "Shaoshuai Mou",
            "Yan Gu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2606.20246v1",
          "title": "Finetuning Vision-Language-Action Models Requires Fewer Layers Than You Think",
          "summary": "Vision-Language-Action (VLA) models pre-trained on massive video-robot datasets have revolutionized robotic manipulation, yet their multi-billion parameter architectures impose prohibitive computational burdens during downstream fine-tuning and real-time inference. In this work, we reveal a highly non-trivial architectural characteristic of these continuous control foundation policies (e.g., pi_0, GR00T-N1.5): despite being trained on diverse physical trajectories, they exhibit severe layer-wise representational r…",
          "summaryCn": "发现VLA中存在层冗余，通过无训练的结构压缩减少深度，加速微调和推理，性能保持。",
          "reasonCn": "研究VLA层冗余与压缩，不涉及世界模型，属于VLA优化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20246v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20246v1",
          "published": "2026-06-18T13:57:12Z",
          "updated": "2026-06-18T13:57:12Z",
          "authors": [
            "Gia-Binh Nguyen",
            "Trong-Bao Ho",
            "Thien-Loc Ha",
            "Khoa Vo",
            "Philip Lund Møller",
            "Quang T. Nguyen",
            "Long Dinh",
            "Tuan Dam",
            "Vu Duong",
            "Tung M. Luu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.17906v1",
          "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
          "summary": "Recent World-Action (WA) models demonstrate strong generalization ability and data efficiency, but they typically rely on expert trajectories for training. This reliance limits their ability to acquire fine-grained manipulation skills beyond the demonstration distribution and prevents them from continuously improving through real-world interaction. To address these limitations, we propose WAM-RL, a reinforcement learning framework that enables joint optimization of the world model and the action model through onli…",
          "summaryCn": "WAM-RL通过强化学习在线优化世界模型和动作模型，提升长程任务操作技能。",
          "reasonCn": "提出世界动作模型的强化学习框架，联合优化世界模型和动作模型，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.17906v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17906v1",
          "published": "2026-06-16T13:29:12Z",
          "updated": "2026-06-16T13:29:12Z",
          "authors": [
            "Zezhong Qian",
            "Xiaowei Chi",
            "Yu Qi",
            "Haozhan Li",
            "Zhi Yang Chen",
            "Shanghang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.17598v1",
          "title": "MuseVLA: An Adaptive Multimodal Sensing Vision-Language-Action Model for Robotic Manipulation",
          "summary": "Humans naturally leverage diverse sensing modalities to interact with the physical world, while most Vision-Language-Action (VLA) models for robotics rely solely on RGB observations. This limits their ability to perceive physical properties that are difficult or impossible to infer from RGB cameras, such as temperature, sound, or radar response. We present MuseVLA, an adaptive multimodal sensing VLA model that integrates novel sensors as on-demand tools for robotic manipulation.",
          "summaryCn": "MuseVLA自适应集成多模态传感，将异构传感器输出转化为统一表示，用于机器人操控。",
          "reasonCn": "提出多模态感知VLA模型，集成新型传感器，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17598v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17598v1",
          "published": "2026-06-16T07:04:13Z",
          "updated": "2026-06-16T07:04:13Z",
          "authors": [
            "Xingyuming Liu",
            "Ruichun Ma",
            "Heyu Guo",
            "Qixiu Li",
            "Qingwen Yang",
            "Lin Luo",
            "Shiqi Jiang",
            "Chenren Xu",
            "Jiaolong Yang",
            "Baining Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.17200v1",
          "title": "ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining",
          "summary": "Vision-Language-Action (VLA) models benefit from large-scale and diverse embodied data, yet scaling robot trajectory collection is costly and labor-intensive. Recent advances show that large-scale egocentric human videos provide complementary real-world supervision in pretraining. However, joint training on human and robot data remains challenging due to divergences in action spaces, embodiment structures, temporal dynamics, and supervision quality.",
          "summaryCn": "ACE-EGO-0利用伪动作标注的人类视频联合预训练VLA，提升跨具身能力。",
          "reasonCn": "统一自我中心人类和机器人数据预训练VLA模型，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17200v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17200v1",
          "published": "2026-06-15T18:40:18Z",
          "updated": "2026-06-15T18:40:18Z",
          "authors": [
            "Hao Li",
            "Ganlong Zhao",
            "Yufei Liu",
            "Haotian Hou",
            "Guoquan Ye",
            "Tongyan Fang",
            "Chunxiao Liu",
            "Siyuan Huang",
            "Jianbo Liu",
            "Xiaogang Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.19784v1",
          "title": "EquiVLA: A General Framework for Rotationally Equivariant Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a powerful paradigm for generalist robot manipulation, yet they lack geometric inductive biases: policies trained at specific orientations require substantially more data to generalize across rotational configurations. We present \\textsc{EquiVLA}, the first general framework for end-to-end $\\mathrm{SO}(2)$-equivariant VLA models, applicable to any architecture coupling a frozen vision-language backbone with a flow-matching Diffusion Transformer action head. \\text…",
          "summaryCn": "EquiVLA引入SO(2)等变感知和动作头，提升旋转泛化能力，在多个基准上性能显著提高。",
          "reasonCn": "提出旋转等变VLA框架，增加几何归纳偏置，属于VLA架构改进。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19784v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19784v1",
          "published": "2026-06-18T04:36:57Z",
          "updated": "2026-06-18T04:36:57Z",
          "authors": [
            "Thien-Loc Ha",
            "Quang-Tan Nguyen",
            "Trong-Bao Ho",
            "Long Dinh",
            "Minh Duc Nguyen",
            "Gia-Binh Nguyen",
            "Pham Tri Quang",
            "Minh N. Vu",
            "Duy M. H. Nguyen",
            "An Thai Le"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.18043v1",
          "title": "Uncertainty Quantification for Flow-Based Vision-Language-Action Models",
          "summary": "Vision-language-action models (VLAs) combine vision-language backbones with expressive generative action heads trained via flow matching on large-scale robotic datasets. Despite their strong empirical performance in robotic manipulation, VLAs lack mechanisms to quantify confidence in their predictions and to detect when their actions may be unreliable. This presents a critical limitation for real-world deployment in non-stationary environments, where models inevitably encounter scenarios outside their pretraining…",
          "summaryCn": "利用速度场差异量化VLA不确定性，用于故障检测和主动微调，减少所需专家演示。",
          "reasonCn": "为流匹配VLA提出不确定性量化方法，用于故障检测和主动微调，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18043v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18043v1",
          "published": "2026-06-16T15:19:09Z",
          "updated": "2026-06-16T15:19:09Z",
          "authors": [
            "Ralf Römer",
            "Maximilian Seeliger",
            "Saida Liu",
            "Ben Sturgis",
            "Marco Bagatella",
            "Daniel Marta",
            "Andreas Krause",
            "Angela P. Schoellig"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.15568v1",
          "title": "SAPS: Shared Autonomy for Policy Steering by Blending Teleoperation with a Pretrained VLA",
          "summary": "Recent advancements in Vision-Language-Action (VLA) models have demonstrated impressive generalist capabilities in robot manipulation, yet these policies can be brittle under out-of-distribution spatial and semantic perturbations. While human teleoperation offers reliable recovery, it can demand high cognitive load and precise manual control, and existing policy steering methods often require auxiliary models or sampler modifications. In this work, we introduce Shared Autonomy for Policy Steering (SAPS), a framewo…",
          "summaryCn": "SAPS在动作层面融合人类指令与VLA策略，显著提升任务成功率并减少干预。",
          "reasonCn": "提出共享自治框架，融合人类遥操作与VLA动作，提高鲁棒性，属于VLA应用。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.15568v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15568v1",
          "published": "2026-06-14T03:09:30Z",
          "updated": "2026-06-14T03:09:30Z",
          "authors": [
            "Crystal Zhou",
            "Jehan Yang",
            "Douglas J. Weber",
            "Zackory Erickson"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.15099v1",
          "title": "Think Less, Act Early: Reinforced Latent Reasoning with Early Exit in Vision-Language-Action Models",
          "summary": "Existing Vision-Language-Action (VLA) models predominantly rely on explicit Chain-of-Thought (CoT) reasoning to bridge perception and action. While effective, this paradigm suffers from high computational costs and error propagation in multi-step tasks. In this paper, we propose Adaptive Variable Alignment VLA (AVA-VLA), a novel Latent Reasoning VLA framework that models reasoning as a sequence of unobservable latent variables, bypassing the need for explicit text generation.",
          "summaryCn": "AVA-VLA通过潜推理和强化学习优化，实现高效推理，在LIBERO上达到98.3%成功率并加速6倍。",
          "reasonCn": "提出VLA潜推理框架，自适应早期退出，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.15099v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15099v1",
          "published": "2026-06-13T04:16:18Z",
          "updated": "2026-06-13T04:16:18Z",
          "authors": [
            "Dianqiao Lei",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.CV",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.15142v1",
          "title": "MotionVLA: Vision-Language-Action Model for Humanoid Motion",
          "summary": "Generating realistic humanoid motion from scene images and text involves both low-frequency pose semantics and high-frequency physical dynamics. However, many existing methods tokenize motion with a single shared codebook, forcing heterogeneous motion signals into the same quantization space. Our frequency-domain analysis of human motion data reveals a clear mismatch between single-codebook quantization and motion statistics: five DCT coefficients capture 93% of joint-position energy but only 37% of joint-velocity…",
          "summaryCn": "MotionVLA通过双流频率分词器分离运动和物理信号，生成更真实多样的人形运动。",
          "reasonCn": "提出文本和图像驱动的人形运动生成VLA，属于VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.15142v1",
          "pdfLink": "https://arxiv.org/pdf/2606.15142v1",
          "published": "2026-06-13T06:10:48Z",
          "updated": "2026-06-13T06:10:48Z",
          "authors": [
            "Nonghai Zhang",
            "Siyu Zhai",
            "Yanjun Li",
            "Zeyu Zhang",
            "Zhihan Yin",
            "Yandong Guo",
            "Boxin Shi",
            "Hao Tang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        }
      ]
    },
    {
      "dateKey": "20260619",
      "dateLabel": "2026-06-19",
      "generatedAt": "2026-06-19T03:42:40.084757+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.20562v1",
          "title": "MemoryWAM: Efficient World Action Modeling with Persistent Memory",
          "summary": "Robust robotic manipulation in the real world requires not only an understanding of the current observation, but also memory and dynamics modeling. World action models (WAMs) possess these capabilities by jointly modeling visual foresight and actions conditioned on both current and historical observations, making them a promising paradigm for robotic manipulation. However, existing WAMs face a fundamental trade-off: methods with efficient inference typically condition only on a bounded window of recent observation…",
          "summaryCn": "论文提出MemoryWAM，一种高效持久记忆的世界动作模型，结合近期帧、事件锚点帧和压缩要点标记，通过定制注意力机制支持长期依赖决策。在仿真和真实机器人长时程操作任务中优于现有VLA和WAM基线，同时保持计算效率。",
          "reasonCn": "提出了一种具备持久记忆的世界动作模型MemoryWAM，利用视觉预测和动作条件化进行机器人操作，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.20562v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20562v1",
          "published": "2026-06-18T17:59:51Z",
          "updated": "2026-06-18T17:59:51Z",
          "authors": [
            "Sizhe Yang",
            "Juncheng Mu",
            "Tianming Wei",
            "Chenhao Lu",
            "Xiaofan Li",
            "Linning Xu",
            "Zhengrong Xue",
            "Zhecheng Yuan",
            "Dahua Lin",
            "Jiangmiao Pang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 123,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20285v1",
          "title": "Co-VLA: Coordination-Aware Structured Action Modeling for Dual-Arm Vision-Language-Action Systems",
          "summary": "Vision-language-action (VLA) models show strong capabilities in single and dual-arm robotic manipulation. Prior works show coordinated bimanual behaviors can emerge from end-to-end learning, leveraging large vision-language backbones with continuous action prediction. However, as bimanual tasks become tightly coupled and execution constraints become critical, implicit coordination alone is insufficient to ensure reliable, interpretable, and stable behavior.",
          "summaryCn": "论文提出Co-VLA，一种协调感知的双臂VLA框架，通过结构化动作专家和潜在感知控制器显式建模双臂协调。该方法在动作生成层面引入共享和残差潜在变量，提升协调任务的可靠性和可解释性。",
          "reasonCn": "明确针对视觉-语言-动作（VLA）模型，引入结构化动作专家和协调感知损失用于双臂协调操作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20285v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20285v1",
          "published": "2026-06-18T14:28:37Z",
          "updated": "2026-06-18T14:28:37Z",
          "authors": [
            "Yandong Wang",
            "Jiaqian Yu",
            "Xiongfeng Peng",
            "Lu Xu",
            "Yamin Mao",
            "Weiming Li",
            "Jaewook Yoo",
            "Dongwook Lee",
            "Daehyun Ji",
            "Mingbo Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20246v1",
          "title": "Finetuning Vision-Language-Action Models Requires Fewer Layers Than You Think",
          "summary": "Vision-Language-Action (VLA) models pre-trained on massive video-robot datasets have revolutionized robotic manipulation, yet their multi-billion parameter architectures impose prohibitive computational burdens during downstream fine-tuning and real-time inference. In this work, we reveal a highly non-trivial architectural characteristic of these continuous control foundation policies (e.g., pi_0, GR00T-N1.5): despite being trained on diverse physical trajectories, they exhibit severe layer-wise representational r…",
          "summaryCn": "论文发现VLA模型存在严重的层间冗余，提出无训练的结构化压缩流水线，基于中心核对齐永久移除冗余层，压缩深度最多50%。压缩后微调能显著减少训练时间和推理延迟，同时保持或提升原始性能。",
          "reasonCn": "该论文聚焦VLA模型的微调效率，通过层压缩简化模型结构并加速训练推理，核心对象是VLA模型，符合标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20246v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20246v1",
          "published": "2026-06-18T13:57:12Z",
          "updated": "2026-06-18T13:57:12Z",
          "authors": [
            "Gia-Binh Nguyen",
            "Trong-Bao Ho",
            "Thien-Loc Ha",
            "Khoa Vo",
            "Philip Lund Møller",
            "Quang T. Nguyen",
            "Long Dinh",
            "Tuan Dam",
            "Vu Duong",
            "Tung M. Luu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19784v1",
          "title": "EquiVLA: A General Framework for Rotationally Equivariant Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a powerful paradigm for generalist robot manipulation, yet they lack geometric inductive biases: policies trained at specific orientations require substantially more data to generalize across rotational configurations. We present \\textsc{EquiVLA}, the first general framework for end-to-end $\\mathrm{SO}(2)$-equivariant VLA models, applicable to any architecture coupling a frozen vision-language backbone with a flow-matching Diffusion Transformer action head. \\text…",
          "summaryCn": "论文提出EquiVLA，首个SO(2)-等变VLA框架，通过等变感知器和等变动作头将旋转等变性引入冻结视觉语言骨干。在LIBERO、CALVIN和真实机器人任务上大幅提升成功率，实现更高效的几何泛化。",
          "reasonCn": "EquiVLA为端到端SO(2)-等变VLA模型的通用框架，同时处理视觉和语言指令以生成动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19784v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19784v1",
          "published": "2026-06-18T04:36:57Z",
          "updated": "2026-06-18T04:36:57Z",
          "authors": [
            "Thien-Loc Ha",
            "Quang-Tan Nguyen",
            "Trong-Bao Ho",
            "Long Dinh",
            "Minh Duc Nguyen",
            "Gia-Binh Nguyen",
            "Pham Tri Quang",
            "Minh N. Vu",
            "Duy M. H. Nguyen",
            "An Thai Le"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20092v1",
          "title": "EventVLA: Event-Driven Visual Evidence Memory for Long-Horizon Vision-Language-Action Policies",
          "summary": "Memory remains a critical bottleneck for long-horizon robotic manipulation, as standard Vision-Language-Action (VLA) policies often fail when task-relevant cues become occluded or unobservable over time. While existing memory-augmented methods utilize historical context, they either suffer from severe information bottlenecks, incur high latency via decoupled dual systems, or rely on unselective buffers that accumulate massive visual redundancies. To address these limitations, we introduce EventVLA, an end-to-end f…",
          "summaryCn": "论文提出EventVLA，一种端到端VLA框架，通过动态关键帧证据记忆模块预测未来关键帧并存储任务关键视觉事件。在17个仿真和4个真实双臂任务中显著提升需要记忆的操纵表现，引入RoboTwin-MeM基准用于评估。",
          "reasonCn": "EventVLA是一种VLA策略，通过稀疏视觉证据记忆处理长时程任务，直接输出动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20092v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20092v1",
          "published": "2026-06-18T11:11:37Z",
          "updated": "2026-06-18T11:11:37Z",
          "authors": [
            "Ganlin Yang",
            "Zhangzheng Tu",
            "Yuqiang Yang",
            "Sitong Mao",
            "Junyi Dong",
            "Tianxing Chen",
            "Jiaqi Peng",
            "Jing Xiong",
            "Jiafei Cao",
            "Jifeng Dai"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20104v1",
          "title": "Sensorimotor World Models: Perception for Action via Inverse Dynamics",
          "summary": "Perception for action suggests that representations of the world should be shaped not by visual fidelity alone, but by their relevance for actions. At the same time, latent JEPA-style world models advocate learning compact predictive states from high-dimensional observations to facilitate the prediction of future states, but end-to-end training of these models is nontrivial because representations may collapse if our only goal is to construct a latent state that is easy to predict. We introduce a sensorimotor worl…",
          "summaryCn": "论文提出传感器运动世界模型（SMWM），通过逆动力学正则化端到端训练潜在世界模型，避免表示坍缩并提取与动作相关的世界动态。在2D和3D控制任务上实现竞争性规划性能，学到的潜在空间紧凑且可解释。",
          "reasonCn": "提出传感器运动世界模型，利用逆动力学学习动作对齐的表示并用于规划，明确用于控制任务，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.20104v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20104v1",
          "published": "2026-06-18T11:25:16Z",
          "updated": "2026-06-18T11:25:16Z",
          "authors": [
            "Petr Ivashkov",
            "Randall Balestriero",
            "Bernhard Schölkopf"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 51,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19990v1",
          "title": "Reward as An Agent for Embodied World Models",
          "summary": "While RL has become a promising tool for refining world models, existing methods largely rely on conservative rollouts near the training distribution, limiting exploration, behavioral diversity, and richer dynamic discovery. In this work, we challenge this conservative paradigm. We argue that the core limitation is not exploration itself, but the lack of reliable verification strategies to support broader exploration.",
          "summaryCn": "论文提出将奖励作为智能体（Reward as an Agent）框架，结合动态感知展开多样化，在具身世界模型中扩展探索并缓解奖励黑客。通过可靠奖励和多样化轨迹提升世界模型对复杂动态的规划能力。",
          "reasonCn": "提出将奖励作为智能体来改善世界模型的强化学习，世界模型用于具身任务的动作探索和规划，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.19990v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19990v1",
          "published": "2026-06-18T09:29:30Z",
          "updated": "2026-06-18T09:29:30Z",
          "authors": [
            "Pu Li",
            "Zhigang Lin",
            "Qiang Wu",
            "Yongxuan Lv",
            "Fei Wang",
            "Shan You"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19889v1",
          "title": "SurgVista: Long-Horizon Surgical World Modeling with Plausible Instrument-Tissue Dynamics",
          "summary": "Scaling robot policy learning for autonomous surgery is challenging, as expert demonstrations are expensive and in vivo exploration poses substantial safety risks. Surgical world models address this by generating realistic, action-conditioned future frames from an initial observation, but existing methods exhibit two persistent failure modes: spatial interaction incoherence, where visible instrument contact fails to induce spatially consistent tissue deformation, and temporal fidelity collapse, where prediction er…",
          "summaryCn": "论文提出SurgVista，一种外科世界模型，通过变形一致性正则化和漂移适应训练减轻空间交互不相干和时序保真度崩溃。引入SurgWorld-Bench多指标评估，在手术机器人策略学习中实现真实感长时程生成。",
          "reasonCn": "SurgVista是外科手术世界模型，生成动作条件化的未来帧以支持策略学习，明确用于动作预测和规划，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.19889v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19889v1",
          "published": "2026-06-18T07:47:28Z",
          "updated": "2026-06-18T07:47:28Z",
          "authors": [
            "Wentao Pan",
            "Wuyang Li",
            "Shengyuan Liu",
            "Xinyu Liu",
            "Hengyu Liu",
            "Yixuan Yuan"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19928v1",
          "title": "SWAP: Symmetric Equivariant World-Model for Agile Robot Parkour",
          "summary": "While latent world models enable the proactive predictions required for extreme parkour, their purely data-driven nature forces them to redundantly encode left-right symmetric interactions as independent patterns. This inflates the learning burden and hinders the capture of geometric regularities, restricting the latent space's efficiency for downstream policies. To address this, we propose SWAP, an end-to-end equivariant symmetric world model.",
          "summaryCn": "论文提出SWAP，一种端到端等变对称世界模型，将对称性嵌入世界模型和演员-评论家网络，用于四足机器人跑酷。在真实测试中打破记录，并展现对镜像地形和环境的零样本泛化能力。",
          "reasonCn": "SWAP是用于敏捷机器人跑酷的等变世界模型，直接支撑动作策略，明确用于动作预测和控制，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.19928v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19928v1",
          "published": "2026-06-18T08:28:30Z",
          "updated": "2026-06-18T08:28:30Z",
          "authors": [
            "Kaixin Lan",
            "Ze Wang",
            "Hongyi Li",
            "Lei Jiang",
            "Chaojie Fu",
            "Chengkai Su",
            "Choi Lam Wong",
            "Yongbin Jin",
            "Hongtao Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 38,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260618",
      "dateLabel": "2026-06-18",
      "generatedAt": "2026-06-18T02:58:48.955610+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.19297v1",
          "title": "Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models",
          "summary": "Embodied Vision-Language-Action (VLA) models are typically obtained by fine-tuning powerful pretrained VLMs on robotics data, yet it is unclear how much commonsense and factual knowledge they retain after adaptation. Failures on knowledge-sensitive tasks are ambiguous, conflating missing knowledge with poor generalization of low-level control. We introduce Act2Answer, a lightweight protocol that adapts VLM knowledge benchmarks to VLA evaluation by requiring agents to answer through action.",
          "summaryCn": "该工作设计了一种通过动作回答评估VLA常识保留的轻量级协议，将知识基准转化为桌面操作任务以降低控制混淆。大规模实验揭示了各VLA模型在不同语义类别下的表现差异，发现VQA联合训练有助于知识保留，为VLA评估提供了新维度。",
          "reasonCn": "论文提出Act2Answer协议评估VLA模型的常识和世界知识保留能力，直接涉及视觉-语言-动作模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19297v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19297v1",
          "published": "2026-06-17T17:20:46Z",
          "updated": "2026-06-17T17:20:46Z",
          "authors": [
            "Nikita Kachaev",
            "Andrey Moskalenko",
            "Matvey Skripkin",
            "Nikita Kurlaev",
            "Daria Pugacheva",
            "Albina Burlova",
            "Mikhail Kolosov",
            "Denis Shepelev",
            "Andrey Kuznetsov",
            "Elena Tutubalina"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 115,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18955v1",
          "title": "Motion-Focused Latent Action Enables Cross-Embodiment VLA Training from Human EgoVideos",
          "summary": "Training generalist Vision-Language-Action(VLA) models typically requires massive, diverse robotic datasets with high-fidelity action annotations. While egocentric human manipulation videos are abundant and capture significant environmental diversity, the absence of action labels makes them difficult to use in conventional training paradigms. To address this, we propose a latent-action-based framework designed to extract general action priors from unlabeled human videos.",
          "summaryCn": "针对标注机器人数据匮乏，本文通过解耦运动与背景构建跨具身动作码本，从无标注人类视频预训练VLA的动作先验。采用意图-感知分离策略适配特定机器人，仅需少量轨迹即达到与大规模标注数据训练相当的VLA性能。",
          "reasonCn": "提出基于隐式动作的框架利用人类自我中心视频训练跨具身VLA模型，核心是视觉-语言-动作学习。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18955v1",
          "published": "2026-06-17T11:37:59Z",
          "updated": "2026-06-17T11:37:59Z",
          "authors": [
            "Runze Xu",
            "Yiluo Zhang",
            "Jian Wang",
            "Yu Wang",
            "Jincheng Yu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 112,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18589v1",
          "title": "DREAM-Chunk: Reactive Action Chunking with Latent World Model",
          "summary": "Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning.",
          "summaryCn": "DREAM-Chunk提出测试时增强方法，通过轻量潜在世界模型对候选动作块进行多步预测并选择最佳匹配动作，无需额外微调。在仿真和真实机器人任务中显著提升了动作块策略在随机动态下的鲁棒性和反应性。",
          "reasonCn": "利用潜在世界模型增强VLA动作块策略的鲁棒性，同时涉及视觉-语言-动作模型和用于动作选择的世界模型。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.18589v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18589v1",
          "published": "2026-06-17T01:28:07Z",
          "updated": "2026-06-17T01:28:07Z",
          "authors": [
            "Wenxi Chen",
            "Kaidi Zhang",
            "Chi Lin",
            "Zhiyuan Zhang",
            "Yu She",
            "Yuejiang Liu",
            "Raymond A. Yeh",
            "Shaoshuai Mou",
            "Yan Gu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 91,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18953v1",
          "title": "Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement",
          "summary": "Vision-Language-Action (VLA) models can generalize across diverse manipulation tasks, but their imitation-learning-based policies remain brittle in precise physical interactions due to compounding execution errors; Can a reinforcement learning policy trained purely in simulation improve the robustness of real-world VLAs zero-shot? Residual RL, which learns a corrective policy on top of a frozen VLA, offers a natural framework, but existing approaches face a fundamental sim-to-real dilemma: privileged-state methods…",
          "summaryCn": "本文通过物体中心化观测的残差强化学习，仅用仿真数据训练校正策略，零样本迁移到真实机器人以改进VLA动作。五种操作任务成功率从42%提升至76%，并可复用改进的轨迹自提升VLA模基模型。",
          "reasonCn": "提出基于残差强化学习零样本提升VLA模型真实世界性能的方法，核心聚焦于VLA的动作细化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18953v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18953v1",
          "published": "2026-06-17T11:36:54Z",
          "updated": "2026-06-17T11:36:54Z",
          "authors": [
            "Kinam Kim",
            "Namiko Saito",
            "Heecheol Kim",
            "Katsushi Ikeuchi",
            "Jaegul Choo",
            "Yasuyuki Matsushita"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18610v1",
          "title": "SC3-Eval: Evaluating Robot Foundation Models via Self-Consistent Video Generation",
          "summary": "Evaluating generalist robot manipulation policies in the real world is expensive, slow, and difficult to scale. Action-conditioned video world models offer a scalable alternative by simulating policy rollouts. Autoregressive rollouts accumulate compounding errors, observations across multiple camera views must remain mutually consistent, and the evaluator must generalize to policies whose behaviors lie outside the training distribution.",
          "summaryCn": "SC3-Eval提出自一致的视频生成方法，通过前向-逆动力学一致性、跨视角一致性和测试时一致性训练视频世界模型，实现对通用机器人操控策略的可扩展评估。该方法能在模拟中准确复现策略行为与失败模式。",
          "reasonCn": "利用动作条件视频世界模型评估机器人基础策略（含VLA），世界模型直接用于动作相关模拟评估。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.18610v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18610v1",
          "published": "2026-06-17T02:15:46Z",
          "updated": "2026-06-17T02:15:46Z",
          "authors": [
            "Wei-Cheng Tseng",
            "Gashon Hussein",
            "Yuzhu Dong",
            "Allen Z. Ren",
            "Lucy X. Shi",
            "XuDong Wang",
            "Sergey Levine",
            "Zhaoshuo Li",
            "Jinwei Gu",
            "Florian Shkurti"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18960v1",
          "title": "Mem-World: Memory-Augmented Action-Conditioned World Models for Persistent Robot Manipulation",
          "summary": "Action-conditioned world models have emerged as a promising paradigm for robot learning, offering a scalable alternative to costly real-world experimentation by generating action-consistent video rollouts. However, persistent world modeling remains challenging in manipulation: frequent end-effector occlusions and rapid wrist-camera motion make the current observation insufficient for predicting future views, causing models to forget or hallucinate scene details seen in earlier frames. Existing memory retrieval str…",
          "summaryCn": "针对操作中因遮挡和相机运动导致的世界模型遗忘问题，Mem-World引入基于4D腕部中心surfel索引的记忆模块，实现几何感知的历史帧检索。实验表明能生成更持久的视频推演，提升策略评估的可靠性。",
          "reasonCn": "提出记忆增强的动作条件世界模型用于持久机器人操作，核心是利用世界模型预测动作一致的视频演进。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.18960v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18960v1",
          "published": "2026-06-17T11:42:00Z",
          "updated": "2026-06-17T11:42:00Z",
          "authors": [
            "Zirui Zheng",
            "Jiaqian Yu",
            "Xiongfeng Peng",
            "jun shi",
            "Mingyi Li",
            "Chao Zhang",
            "Weiming Li",
            "Dong Wang",
            "Huchuan Lu",
            "Xu Jia"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19194v1",
          "title": "Invertible Neural Network Adapter for One-Step Flow Matching in Robot Manipulation",
          "summary": "This paper presents an invertible neural network adapter for general robotic manipulation, designed to generate precise high-dimensional actions conditioned on multimodal observations, including visual, linguistic, and proprioceptive inputs, through a one-step denoising process. Built upon a flow-matching formulation, the proposed adapter effectively constrains the action generation trajectory within an invertible latent space, thereby enabling efficient and high-quality dexterous action synthesis with only a sing…",
          "summaryCn": "本文设计可逆神经网络适配器，在流匹配框架下通过单步去噪生成高维动作，显著降低VLA模型推理延迟。仿真和真实实验验证了在保持动作精度的同时推理速度提升近一倍。",
          "reasonCn": "提出可逆适配器用于VLA模型的单步动作生成，直接提升视觉-语言到动作的映射效率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19194v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19194v1",
          "published": "2026-06-17T15:35:27Z",
          "updated": "2026-06-17T15:35:27Z",
          "authors": [
            "Yu Zhang",
            "Kangyi Ji",
            "Yongxiang Zou",
            "Rongtao Xu",
            "Feng Zheng",
            "Long Cheng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18697v1",
          "title": "Stealthy World Model Manipulation via Data Poisoning",
          "summary": "Model-based learning agents use learned world models to predict future states, plan actions, and adapt to new environments. However, the process of updating world models from collected experience creates a training-time attack surface: adversarially poisoned fine-tuning trajectories can manipulate the learned dynamics and thereby corrupt downstream planning. In this paper, we propose SWAAP, the first two-stage data poisoning framework for learned world models.",
          "summaryCn": "SWAAP首次针对学习的世界模型设计两阶段数据投毒方法，通过双层优化生成有害目标模型并利用梯度匹配实现隐秘投毒。在多个连续控制任务中成功操纵下游规划行为，同时保持对抗本检测的隐蔽性。",
          "reasonCn": "论文提出针对基于世界模型的智能体的数据投毒攻击框架，世界模型用于动作规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.18697v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18697v1",
          "published": "2026-06-17T05:24:18Z",
          "updated": "2026-06-17T05:24:18Z",
          "authors": [
            "Yibin Hu",
            "Xiaolin Sun",
            "Zizhan Zheng"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 55,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19340v1",
          "title": "Zero-Shot Long-Horizon Dexterous Manipulation via Multi-View 3D-Grounded VLM Reasoning",
          "summary": "We present a zero-shot framework for long-horizon dexterous manipulation that grounds language instructions into executable 3D task plans from calibrated multi-view RGB images. Rather than training an end-to-end policy, our system uses a vision-language model (VLM) to produce reference-frame task grounding and primitive-level 2D keypoints, then lifts them into 3D via multi-view fusion. This lifting combines triangulation of view-wise VLM groundings with reference-view ray voting, which searches along a semantic ca…",
          "summaryCn": "本框架通过多视图融合将VLM的2D关键点提升为3D任务计划，实现无需训练的长程灵巧操作。在真实机器人上展示了优于VLA基线的零样本泛化，支持闭环状态验证与重规划。",
          "reasonCn": "利用视觉语言模型和3D几何推理实现零样本长程灵巧操作，涵盖视觉、语言指令到动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.19340v1",
          "pdfLink": "https://arxiv.org/pdf/2606.19340v1",
          "published": "2026-06-17T17:59:56Z",
          "updated": "2026-06-17T17:59:56Z",
          "authors": [
            "Jisoo Kim",
            "Sangwon Baik",
            "Taeksoo Kim",
            "Sungjoo Kim",
            "Junyoung Lee",
            "Mingi Choi",
            "Hanbyul Joo"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 38,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18688v1",
          "title": "Dual-Channel Grounded World Modeling (DCGWM): Structural Prevention of Objective Interference Collapse via Heterogeneous External Grounding with Inward-Only Gradient Flow",
          "summary": "Joint Embedding Predictive Architectures (JEPAs) are a leading approach to world model representation learning. We identify a failure mode in JEPA-based world models grounded against two qualitatively distinct external signals: physical dynamics (sparse, high-magnitude, constraint-satisfying gradient corrections) and social-behavioral dynamics (diffuse, distribution-matching corrections). We term this Objective Interference Collapse (OIC): we argue that joint learning in a shared latent space causes the dominant c…",
          "summaryCn": "DCGWM通过分区潜在空间和内向梯度流解决联合预测架构中的目标干涉问题，分别对物理和行为动态接地。在保持物理准确性和行为多样性的同时，防止了单通道主导导致的表示崩溃。",
          "reasonCn": "提出对偶通道接地世界模型防止表示空间坍缩，明确用于物理和社会行为动态下的多智能体动作模拟。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.18688v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18688v1",
          "published": "2026-06-17T04:55:52Z",
          "updated": "2026-06-17T04:55:52Z",
          "authors": [
            "Akshay Hazare"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 36,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260617",
      "dateLabel": "2026-06-17",
      "generatedAt": "2026-06-17T03:05:34.748695+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.17924v1",
          "title": "PearlVLA: Progressive Embodied Action-Plan Refinement in Latent Space",
          "summary": "Current Vision-Language-Action (VLA) models face a trade-off between efficient action generation and explicit deliberation. Directly decoding actions from vision-language backbone representations enables low-latency control, whereas explicit reasoning through textual chains, pixel-level subgoals, or action search can improve planning but incurs substantial latency and computational cost. We propose PearlVLA, a VLA framework that moves deliberation into the latent space of a vision-language model (VLM).",
          "summaryCn": "PearlVLA在潜在空间内渐进式细化动作计划，分离视觉分支与迭代潜在计划分支，利用轻量世界模型想象未来观测以引导计划修正，最终并行解码动作块。在LIBERO基准上达到最优，平衡了高效动作生成与显式推理。",
          "reasonCn": "因为该论文明确提出了一个结合视觉、语言和动作的VLA框架，并利用世界模型进行动作规划，同时符合VLA和WAM标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.17924v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17924v1",
          "published": "2026-06-16T13:38:03Z",
          "updated": "2026-06-16T13:38:03Z",
          "authors": [
            "Bochen Yang",
            "Lianlei Shan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 102,
          "llmTotalScore": 102
        },
        {
          "id": "2606.17906v1",
          "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
          "summary": "Recent World-Action (WA) models demonstrate strong generalization ability and data efficiency, but they typically rely on expert trajectories for training. This reliance limits their ability to acquire fine-grained manipulation skills beyond the demonstration distribution and prevents them from continuously improving through real-world interaction. To address these limitations, we propose WAM-RL, a reinforcement learning framework that enables joint optimization of the world model and the action model through onli…",
          "summaryCn": "WAM-RL提出通过在线交互联合优化世界模型和动作模型的强化学习框架，使两者协同进化，增强细粒度控制与适应性。实验表明仅优化动作模型仅在短时域任务有效，而联合优化是长时域任务性能的关键。",
          "reasonCn": "该论文以世界模型为核心，明确用于动作预测与控制，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.17906v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17906v1",
          "published": "2026-06-16T13:29:12Z",
          "updated": "2026-06-16T13:29:12Z",
          "authors": [
            "Zezhong Qian",
            "Xiaowei Chi",
            "Yu Qi",
            "Haozhan Li",
            "Zhi Yang Chen",
            "Shanghang Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2606.17598v1",
          "title": "MuseVLA: An Adaptive Multimodal Sensing Vision-Language-Action Model for Robotic Manipulation",
          "summary": "Humans naturally leverage diverse sensing modalities to interact with the physical world, while most Vision-Language-Action (VLA) models for robotics rely solely on RGB observations. This limits their ability to perceive physical properties that are difficult or impossible to infer from RGB cameras, such as temperature, sound, or radar response. We present MuseVLA, an adaptive multimodal sensing VLA model that integrates novel sensors as on-demand tools for robotic manipulation.",
          "summaryCn": "MuseVLA是一种自适应多模态感知VLA模型，集成温度、声音等传感器作为工具，生成统一感知图像进行多模态融合与动作生成。设计数据合成管道减少真实机器人数据依赖，在真实世界灵巧手操作任务中验证了有效性。",
          "reasonCn": "该论文直接涉及视觉（多模态）、语言指令和机器人动作输出，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17598v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17598v1",
          "published": "2026-06-16T07:04:13Z",
          "updated": "2026-06-16T07:04:13Z",
          "authors": [
            "Xingyuming Liu",
            "Ruichun Ma",
            "Heyu Guo",
            "Qixiu Li",
            "Qingwen Yang",
            "Lin Luo",
            "Shiqi Jiang",
            "Chenren Xu",
            "Jiaolong Yang",
            "Baining Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.18043v1",
          "title": "Uncertainty Quantification for Flow-Based Vision-Language-Action Models",
          "summary": "Vision-language-action models (VLAs) combine vision-language backbones with expressive generative action heads trained via flow matching on large-scale robotic datasets. Despite their strong empirical performance in robotic manipulation, VLAs lack mechanisms to quantify confidence in their predictions and to detect when their actions may be unreliable. This presents a critical limitation for real-world deployment in non-stationary environments, where models inevitably encounter scenarios outside their pretraining…",
          "summaryCn": "该工作针对流匹配VLA模型，提出基于小集成的流速场不一致度量认知不确定性，用于部署时的失败检测和主动微调数据选择。在LIBERO上验证了不确定性估计的校准性和故障检测性能，主动微调所需样本减少22%以上。",
          "reasonCn": "论文聚焦于VLA模型的不确定性量化，直接用于机器人动作输出的可靠性评估，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.18043v1",
          "pdfLink": "https://arxiv.org/pdf/2606.18043v1",
          "published": "2026-06-16T15:19:09Z",
          "updated": "2026-06-16T15:19:09Z",
          "authors": [
            "Ralf Römer",
            "Maximilian Seeliger",
            "Saida Liu",
            "Ben Sturgis",
            "Marco Bagatella",
            "Daniel Marta",
            "Andreas Krause",
            "Angela P. Schoellig"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.17480v1",
          "title": "GeneralVLA-2: Geometry-Aware Reconstruction and Governed Memory for Robot Planning",
          "summary": "Generalist vision-language-action systems need object-centric 3D evidence and reusable manipulation experience to plan reliable robot trajectories. GeneralVLA provides a hierarchical interface for converting language and RGB-D observations into 3D end-effector paths, but two bottlenecks remain. First, monocular SAM3D-style object reconstruction can hallucinate pose and unseen geometry, while manipulation benefits from stable object shape when calibrated multi-view observations are available.",
          "summaryCn": "GeneralVLA-2在VLA框架中引入GeoFuse-MV3D进行几何引导的多视图3D重建，并升级知识库为受控长期记忆系统，通过检索和验证提升规划可靠性。在GSO-30和Terminal-Bench上评估了重建和记忆模块的性能。",
          "reasonCn": "该改进直接针对VLA系统，整合视觉、语言与动作规划，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17480v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17480v1",
          "published": "2026-06-16T03:45:24Z",
          "updated": "2026-06-16T03:45:24Z",
          "authors": [
            "Haoyu Wang",
            "Guoqing Ma",
            "Zeyu Zhang",
            "Yandong Guo",
            "Boxin Shi",
            "Hao Tang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.17463v1",
          "title": "WeaveLA: Event Driven Cross-Subtask Latent Memory Weaving for Repetitive Robot Manipulation",
          "summary": "Vision-Language-Action (VLA) policies have achieved remarkable single-step manipulation, yet they remain brittle precisely where each stage depends on what was just completed. The core issue is structural: short-window VLAs lack an explicit channel for rouxting information across sub-task boundaries, and existing memory-augmented variants either write at every frame, retrieve from demonstration-time stages, or fire at sub-goal events without performing an explicit sub-task-to-sub-task hand-off into the action expe…",
          "summaryCn": "WeaveLA为VLA策略引入跨子任务记忆接口，在冻结的VLA骨干上根据子目标完成事件压缩片段为潜在令牌，直接路由到下一子任务的动作生成路径。在RoboMME的重复操作切片上成功率从0%提升至47.8%，而单次操作不受影响。",
          "reasonCn": "论文在VLA基础上添加记忆机制，仍以视觉、语言和动作为核心，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17463v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17463v1",
          "published": "2026-06-16T03:25:34Z",
          "updated": "2026-06-16T03:25:34Z",
          "authors": [
            "Shoujing Zhu",
            "Zhenyang Liu",
            "Fungmiu Wang",
            "Jiafeng Wang",
            "Bo Yue",
            "Guiliang Liu",
            "Simo Wu",
            "Xiangyang Xue",
            "Taiping Zeng"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.17937v1",
          "title": "ThinkingVLA: Interleaved Vision and Language Reasoning for Robotic Manipulation",
          "summary": "Most Vision-Language-Action (VLA) models map observations directly to actions without explicit reasoning, limiting their capacity for reasoning-intensive long-horizon tasks. To address this, existing approaches adopt Chain-of-Thought (CoT) reasoning to enable subgoal decomposition and spatial anticipation. However, those methods lack a unified architecture for effective cross-modal reasoning and fail to explicitly include inverse reasoning ability based on the target state.",
          "summaryCn": "ThinkingVLA在统一的自回归架构中交错文本与视觉推理，先预测子目标视觉状态，再基于预测图像进行逆动力学推理生成动作。在仿真和真实世界基准上优于现有显式推理VLA方法。",
          "reasonCn": "该模型同时使用视觉、语言和动作，并通过推理增强VLA性能，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17937v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17937v1",
          "published": "2026-06-16T13:45:17Z",
          "updated": "2026-06-16T13:45:17Z",
          "authors": [
            "Tianyi Lu",
            "Hui Zhang",
            "Zijie Diao",
            "Junke Wang",
            "Shengqi Xu",
            "Xingyao Lin",
            "Guojin Zhong",
            "Ziyi Ye",
            "Peng Wang",
            "Zuxuan Wu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.17730v1",
          "title": "ActWorld: From Explorable to Interactive World Model via Action-Aware Memory",
          "summary": "Interactive world models aim to simulate environment dynamics under real-time user actions. However, their action vocabulary is largely confined to navigation: most actions correspond to motion (e.g., walk, turn, look around), while interaction with objects in the scene (e.g., pick up plates, open doors, or trigger physical responses) is either absent, restricted to game domains, or relegated to prompt-to-full-video scenarios. The resulting worlds are visually explorable but not truly actionable.",
          "summaryCn": "ActWorld在分块自回归框架中引入动作感知记忆，使世界模型支持中途的物体交互动作（如捡盘子、开门）。构建了10万交互视频数据集，并设计了层次化记忆路由克服动作遗忘。",
          "reasonCn": "该世界模型明确扩展动作词汇到物体交互，用于动作条件下的环境动态模拟，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.17730v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17730v1",
          "published": "2026-06-16T09:47:32Z",
          "updated": "2026-06-16T09:47:32Z",
          "authors": [
            "Zhexiao Xiong",
            "Yizhi Song",
            "Hao Kang",
            "Qing Yan",
            "Liming Jiang",
            "Jenson Yang",
            "Zhoujie Fu",
            "Stathi Fotiadis",
            "Angtian Wang",
            "Zichuan Liu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2606.17846v1",
          "title": "Qwen-RobotManip Technical Report: Alignment Unlocks Scale for Robotic Manipulation Foundation Models",
          "summary": "Foundation models in language and multimodality achieve strong generalization by aligning heterogeneous data under a unified formulation and training at scale. In this report, we investigate whether this scaling recipe can be applied to robotic manipulation to achieve genuine generalization. This is challenging because, unlike text, manipulation data is heterogeneous by nature, expensive to collect, and narrow in diversity, making alignment and scale simultaneously difficult.",
          "summaryCn": "Qwen-RobotManip基于Qwen-VL构建，通过表示、运动和行为三个维度的统一对齐，利用3.8万小时预训练语料实现零样本指令跟随和干扰鲁棒性。仅使用开源数据和人类视频，展示出规模驱动的新兴泛化能力。",
          "reasonCn": "该模型是典型的VLA系统，处理视觉、语言并输出机器人动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.17846v1",
          "pdfLink": "https://arxiv.org/pdf/2606.17846v1",
          "published": "2026-06-16T12:14:39Z",
          "updated": "2026-06-16T12:14:39Z",
          "authors": [
            "Haoqi Yuan",
            "Zhixuan Liang",
            "Anzhe Chen",
            "Ye Wang",
            "Haoyang Li",
            "Pei Lin",
            "Yiyang Huang",
            "Zixing Lei",
            "Tong Zhang",
            "Jiazhao Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 44,
          "llmTotalScore": 44
        }
      ]
    },
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
      "generatedAt": "2026-06-21T03:01:45.942360+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.08094v1",
          "title": "vla.cpp: A Unified Inference Runtime for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) policies are typically shipped as Python/PyTorch stacks that assume a workstation-class GPU, a mismatch for the hardware on which robots actually run. We present vla.cpp, a portable C++ inference runtime built on llama.cpp. To our knowledge, it is the first ggml-class engine to natively serve the flow-matching and diffusion VLA inference pattern, in which a cached vision-language prefix is consumed by a cross-attending action expert integrated over several solver steps.",
          "summaryCn": "提出轻量级C++推理引擎vla.cpp，可高效部署多种VLA架构，在低算力硬件上实现高性能机器人控制，并给出了跨硬件的优化分析。",
          "reasonCn": "该论文提出了一个统一的VLA推理运行时，直接支持视觉-语言-动作模型的部署，符合VLA标准。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "设计了Light-WAM，通过紧凑视频骨干和潜空间未来监督减少计算开销，并引入StateFusionActionExpert实现高效动作预测，在保持性能的同时显著降低延迟和内存占用。",
          "reasonCn": "论文提出了轻量级世界动作模型，将未来视频预测作为表示学习的辅助目标，并直接用于动作预测，符合WAM标准。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.08015v1",
          "title": "Q-VGM: Q-Guided Value-Gradient Matching for Flow-Matching VLA Policies",
          "summary": "We propose Q-Guided Value-Gradient Matching (Q-VGM), an off-policy reinforcement learning (RL) method that tackles a long-standing challenge in fine-tuning flow-matching vision-language-action (VLA) policies: efficiently improving an expressive flow-matching action expert with respect to a learned Q-function. Effective improvement must exploit the first-order (gradient) information of the critic, but this is difficult for flow policies, because directly back-propagating the value through their multi-step denoising…",
          "summaryCn": "提出Q-VGM方法，通过值梯度流对齐解决流匹配VLA策略中无法直接回传梯度的问题，利用Cal-QL集成批评家进行高效离策略微调，提升策略性能。",
          "reasonCn": "论文针对流匹配VLA策略的微调，涉及视觉、语言和动作，提出了基于Q值梯度匹配的离线强化学习方法，属于VLA研究。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.08288v1",
          "title": "MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model",
          "summary": "Vision-language-action (VLA) models increasingly condition robot policies on history, depth, or 4D features to resolve ambiguity in long-horizon manipulation. However, more spatiotemporal evidence is not necessarily better: when the injected evidence is not motion-consistent, it can introduce geometric drift, fragmented temporal cues, and unstable action generation. This raises a simple question: should a VLA remember past frames, or remember the motion that connects them?",
          "summaryCn": "MotionVLA将过去帧转换为运动轨迹场令牌，以提供运动一致性证据，从而改善VLA在长程操作中的动作生成，在仿真和真实机器人上表现出更流畅的执行。",
          "reasonCn": "论文提出了MotionVLA，通过注入几何运动信息改进VLA模型的长程操作，符合VLA对视觉、语言和动作的要求。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.08107v1",
          "title": "Ego-Pi: VLA Fine-Tuning for Ego-Centric Human and Robot Data",
          "summary": "Robotics faces a fundamental challenge of data scarcity. Unlike language or vision research, there is no internet-scale dataset for robotic manipulation. A promising path forward is to leverage egocentric human data, which can be collected more easily, with greater breadth, and at a larger scale.",
          "summaryCn": "Ego-Pi探索了如何通过自我为中心的人类数据微调VLA模型，使机器人能够学习新任务语义并组合现有技能，无需对应机器人数据，缓解了机器人数据稀缺问题。",
          "reasonCn": "该论文研究VLA模型的微调，利用以自我为中心的人类数据来增强机器人操作技能，直接属于VLA方法。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.07974v1",
          "title": "PRISM: PRior-guided Imagination Sampling in world Models",
          "summary": "A learned world model provides a powerful physical intuition for evaluating future states. But its effectiveness in continuous control also depends critically on how candidate actions are generated for model-based planning. Rather than solely asking how accurately a model can simulate the future, we ask: which candidate actions are worth evaluating in the first place?",
          "summaryCn": "PRISM从世界模型冻结编码器中提取状态条件高斯先验，通过精度加权乘积融合到规划采样分布中，无需大型VLM，以轻量方式提升连续控制规划效率。",
          "reasonCn": "PRISM框架利用世界模型进行基于模型的规划，通过从世界模型编码器中提取先验来指导采样，用于动作选择，符合WAM标准。",
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
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-21T03:01:08.595136+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07895v1",
          "title": "TBD-VLA: Temporal Block Diffusion Vision Language Action Model",
          "summary": "Discrete Vision-Language-Action (VLA) models typically formulate action generation as next-token prediction over discretized action spaces, conditioning each token autoregressively on prior context. While effective, this paradigm incurs high inference latency and largely ignores the temporal structure inherent in action trajectories. Recent efforts introduce parallel decoding to improve efficiency, enabling faster inference, but lack explicit mechanisms for modeling token dependencies.",
          "summaryCn": "提出一种结合时间块扩散的离散VLA框架，通过块内掩码扩散与块间自回归实现并行动作生成，提升推理速度与时间一致性，在模拟和真实操作任务中表现优于先前方法。",
          "reasonCn": "论文提出结合时间块扩散的离散VLA框架，直接处理视觉输入、语言指令并生成机器人动作。",
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
          "llmTotalScore": 127
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "提出LARA框架，通过联合优化潜在动作模型(LAM)和VLA模型实现表征对齐，使LAM利用动作轨迹避免虚假视觉变化，VLA受前向动态正则化减少幻觉，在多个机器人操作基准上取得显著提升。",
          "reasonCn": "该方法联合优化潜在动作模型(LAM)与VLA，LAM学习视觉动态中的潜在动作以辅助VLA，兼具VLA和世界模型特性。",
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
          "llmTotalScore": 97
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "提出Coarse-to-Control框架，在VLA的动作令牌空间中进行规划，先预测粗粒度动作序列再生成可执行动作，尤在长程多阶段任务上提升了性能。",
          "reasonCn": "论文在VLA的动作令牌空间中引入规划，基于视觉和语言指令生成动作，属于VLA改进。",
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
          "llmTotalScore": 73
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "提出AdaWAM世界动作模型，通过动态路由器自适应触发文本或视觉推理，在任务转换时进行语言推理，在精细操作时进行视觉推理，在模拟和真实任务上提升了推理效率和性能。",
          "reasonCn": "论文以世界动作模型(WAM)为核心，自适应融合视觉和文本推理以预测动作，符合WAM定义。",
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
          "llmTotalScore": 73
        },
        {
          "id": "2606.07687v1",
          "title": "What Makes Video World Model Latents Action-Relevant: Prediction over Reconstruction",
          "summary": "Video world models are increasingly used to provide predictive visual representations, yet it remains unclear which pretraining signals induce action-relevant structure in their latent spaces. We study this question through a unified probe-based evaluation across diverse encoder families, including image-only self-supervision, video pretraining with and without latent prediction, reconstruction-based autoencoders, diffusion models, and shortcut-forcing dynamics models. Using a common inverse-dynamics probing objec…",
          "summaryCn": "通过统一的逆动力学探测评估多种编码器，发现视频世界模型的潜在空间中动作相关性主要来自时序视频预训练而非像素重建，为设计动作感知的视频世界模型提供了关键见解。",
          "reasonCn": "论文研究视频世界模型潜变量的动作相关性，旨在为动作预测提供更好的表示，直接服务于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.07687v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07687v1",
          "published": "2026-06-05T04:43:02Z",
          "updated": "2026-06-05T04:43:02Z",
          "authors": [
            "Jewon Yeom",
            "Hanseul Kim",
            "Jeongjae Park",
            "Sungmok Jung",
            "Jaejin Lee",
            "Taesup Kim"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 63,
          "llmTotalScore": 63
        },
        {
          "id": "2606.06836v1",
          "title": "Think Like a Pilot: Fine-Grained Long-Horizon UAV Navigation",
          "summary": "Language-guided UAV agents must execute long-horizon semantic instructions while producing smooth, physically feasible continuous flight commands, yet existing Vision-Language Navigation (VLN) benchmarks typically use discrete or coarse actions and existing UAV Vision-Language-Action (VLA) tasks focus on short, atomic maneuvers. To address this gap in UAV task settings, we introduce \\textbf{FLIGHT}, a \\textbf{F}ine-grained \\textbf{L}ong-horizon \\textbf{I}nstruction-\\textbf{G}uided benchmark for \\textbf{H}ybrid UAV…",
          "summaryCn": "针对无人机长程导航，提出FLIGHT VLA异步架构，将低频视觉语言模型用于任务状态推理与高频扩散动作模型用于连续控制，通过显式飞行员推理文本实现闭环评估中的优越性能。",
          "reasonCn": "论文针对无人机长程导航提出了FLIGHT VLA架构，融合视觉语言模型和动作生成，实现基于语言指令的视觉动作控制。",
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
          "llmTotalScore": 56
        },
        {
          "id": "2606.07217v1",
          "title": "Robotic Policy Adaptation via Weight-Space Meta-Learning",
          "summary": "Vision-Language-Action (VLA) models are emerging as a promising paradigm for robotic manipulation, enabling general-purpose policies trained from large corpora of demonstrations and action labels. However, adapting these models to new tasks still typically requires task-specific demonstrations, action annotations, and additional fine-tuning, making deployment costly and difficult to scale. We propose WIZARD, a weight-space meta-learning framework that sidesteps task-specific fine-tuning by generating task-specific…",
          "summaryCn": "提出WIZARD权重空间元学习框架，仅需语言指令和简短视频即可为冻结的VLA策略生成任务特定LoRA参数，无需微调，在仿真和真实机器人上显著提升了新任务性能。",
          "reasonCn": "论文提出元学习框架用于VLA策略适应，输入语言指令和视频，输出动作参数，属于VLA方法。",
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
          "llmTotalScore": 54
        },
        {
          "id": "2606.06904v2",
          "title": "ActionMap: Robot Policy Learning via Voxel Action Heatmap",
          "summary": "Vision-language-action (VLA) models have advanced rapidly across backbones, training recipes, and data scale, yet the action decoder, which converts the backbone's hidden state into a continuous control signal, has barely changed and remains a single-point predictor across the majority of current VLAs. Whether implemented via autoregressive token bins, L1 regression, or flow-matching denoising, the resulting decoder treats the action space as unstructured, leaving the geometric proximity of neighboring actions une…",
          "summaryCn": "提出ActionMap体素热力图动作头，替换现有VLA中的动作解码器，通过预测动作空间的概率热力图利用几何邻近性，在仿真和真实操作中提升了VLA的性能和数据效率。",
          "reasonCn": "论文为VLA模型设计新的动作解码头，通过视觉和语言输入预测动作热力图，直接改进VLA。",
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
          "llmTotalScore": 52
        },
        {
          "id": "2606.07383v1",
          "title": "RhinoVLA Technical Report",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for robotic manipulation, but real-time deployment on edge hardware remains challenging. In this work, we identify VLM visual and context tokens as a major source of deployment latency: for GEMM-dominated projection operators, computation grows linearly with the number of input tokens when model dimensions are fixed. Motivated by this observation, we propose RhinoVLA, a deployment-oriented VLA model co-designed with the Huixi R1 edge SoC.",
          "summaryCn": "提出RhinoVLA，通过令牌高效的主干和连续动作专家降低推理延迟，并引入统一接口支持跨机器人学习，在边缘硬件上实现实时闭环控制，性能与π0.5相当。",
          "reasonCn": "论文提出面向边缘部署的VLA模型RhinoVLA，处理视觉和语言输入并输出机器人动作，符合VLA。",
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
          "llmTotalScore": 50
        },
        {
          "id": "2606.06832v1",
          "title": "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images",
          "summary": "Robots performing long-horizon visual manipulation observe high-dimensional images, but successful plans depend on action-relevant facts: what can be done now and what changes afterward. A useful planning representation should discard irrelevant visual details while preserving action applicability and effects. Classical task planners exploit this structure through symbolic operators with preconditions and effects, but obtaining such representations from raw visual experience remains challenging.",
          "summaryCn": "提出STRIPS-WM框架，从图像转换中学习基于图像的STRIPS风格世界模型，归纳出潜在二元谓词和命题算子，实现从图像到规划的端到端视觉任务规划。",
          "reasonCn": "论文从图像转换中学习世界模型用于动作规划，核心是构建可动作预测的潜在表示，属于WAM。",
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
          "llmTotalScore": 43
        },
        {
          "id": "2606.07723v1",
          "title": "VoLo: A Physical Orchestrator for Open-Vocabulary Long-Horizon Manipulation",
          "summary": "Open-vocabulary long-horizon manipulation requires robots to reason over flexible instructions and complex multi-object scenes while adaptively planning, executing, monitoring, and recovering from failures. We address these demands with a closed agent loop in which a VLM orchestrates heterogeneous robot capabilities as interruptible tools. Unlike in virtual AI agents, the timing of decisions, actions and tool calls is important in a physical world that does not pause for reasoning.",
          "summaryCn": "提出VoLoAgent，使用视觉语言模型作为物理编排器，将VLA/WAM作为可中断工具进行规划、监控和恢复，在开放词汇长程操作中显著优于单一VLA或VLM系统，并通过真实机器人验证。",
          "reasonCn": "论文使用VLA/WAM作为可中断工具，通过VLM进行物理编排，结合了视觉、语言和动作，并涉及世界动作模型，属于BOTH。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.07723v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07723v1",
          "published": "2026-06-05T16:21:27Z",
          "updated": "2026-06-05T16:21:27Z",
          "authors": [
            "Siyi Chen",
            "Hugo Hadfield",
            "Alex Zook",
            "Mikaela Angelina Uy",
            "Chan Hee Song",
            "Erwin Coumans",
            "Xuning Yang",
            "Faisal Ladhak",
            "Qing Qu",
            "Stan Birchfield"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 40,
          "llmTotalScore": 40
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-21T03:00:22.374666+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作(WLA)模型，统一世界建模、语言推理与动作合成。基于自回归Transformer预测包含语义意图和物理动态的下一状态，从大量自我中心视频中学习。在模拟和真实环境验证原型，展示联合预测与可扩展控制能力。",
          "reasonCn": "论文同时提出视觉输入、语言指令和动作输出的VLA特性，并以世界模型为核心进行动作预测，符合VLA和WAM标准。",
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
          "summaryCn": "提出PiL-World，一种支持VLA策略闭环评估的分块世界模型。通过交替VLA推理与世界模型预测，生成多视图未来观测，避免真实机器人逐步执行。条件化动作衍生视觉控制和潜在历史，提升rollout保真度。",
          "reasonCn": "论文提出分块世界模型用于VLA策略闭环评估，以世界模型为核心生成动作条件化未来观测，符合WAM标准。",
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
          "summaryCn": "提出WorldFly，一种融合世界模型的VLA框架用于无人机导航。通过双分支耦合流匹配联合生成未来视频和导航动作，利用空间想象引导策略。在都市峡谷穿越基准上优于基线，验证世界模型在部分可观测场景的价值。",
          "reasonCn": "论文提出基于世界模型的VLA框架用于无人机导航，同时涉及视觉-语言-动作和世界模型驱动的动作生成，符合双重标准。",
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
          "summaryCn": "针对VLA模型的动作生成，提出简单一步扩散解码方法。通过训练时偏向高噪声状态分布，实现与多步解码相当的性能。在LIBERO和真实机器人实验中验证，一步解码可达95.6%成功率，证明简化生成的有效性。",
          "reasonCn": "论文专注于VLA模型的动作生成简化，涉及视觉、语言指令和动作输出，符合VLA标准。",
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
          "summaryCn": "提出Discrete-WAM，统一离散视觉-动作标记编辑的世界-策略学习框架。通过共享标记空间联合训练世界建模与策略生成，实现动作条件化未来预测直接支撑下游规划。在自动驾驶基准上展示强规划性能与可控生成、反事实评估能力。",
          "reasonCn": "论文提出统一离散视觉-动作标记的世界-策略框架，以世界模型为核心进行动作条件化预测和规划，符合WAM标准。",
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
          "summaryCn": "提出TempoVLA，一种可通过显式条件控制执行速度的VLA策略。结合变速度轨迹增强和模型条件化，实现从快到慢灵活调速。实验在模拟和真实任务中展示双向速度控制能力，且增强数据提升基准性能。",
          "reasonCn": "论文提出速度可控的VLA策略，直接聚焦视觉-语言-动作模型的执行速度调节，符合VLA标准。",
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
          "summaryCn": "提出MPCoT，一种奖励引导的多路径潜在推理框架，用于VLA的测试时扩展。通过初始化多个假设、迭代细化并软聚合，在不增加推理令牌的情况下提升长任务性能。在LIBERO和CALVIN上验证有效性，展现深度-宽度效应的益处。",
          "reasonCn": "论文提出多路径潜在推理框架以提升VLA测试时性能，核心围绕VLA的动作解码，符合VLA标准。",
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
          "summaryCn": "提出AffordanceVLA，通过引入结构化可供性预测作为中间表示，弥合VLM语义空间与具身控制策略的鸿沟。模型集成对象定位、2D交互点和3D几何推理组件，以渐进方式建立更精确的感知-动作映射。在模拟和真实机器人任务上验证。",
          "reasonCn": "论文提出基于可供性感知的VLA模型，明确结合视觉、语言指令和动作输出，符合VLA标准。",
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
          "summaryCn": "提出PLAN-S，一种连接潜在世界模型与下游规划的桥接模块。通过风格条件化解码语义代价图，融合到回归或评分规划器，实现可控驾驶风格与风险建模。在nuScenes和NAVSIM上验证，降低碰撞率并提升规划评分。",
          "reasonCn": "论文提出面向自动驾驶世界模型的规划桥接模块，以世界模型潜在表示为基础生成代价图用于动作规划，符合WAM标准。",
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
          "summaryCn": "提出物流数据飞轮框架，将日常操作转化为数据资产，利用世界模型为长尾包裹操作生成可靠监督。初步成果WM-DAgger展示世界模型合成恢复数据以增强模仿学习。研究探索大规模多模态数据对齐与持续改进的循环。",
          "reasonCn": "论文描述利用世界模型为物流操作生成监督的数据飞轮框架，核心包含世界模型驱动的数据聚合，符合WAM标准。",
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
      "generatedAt": "2026-06-21T02:59:30.590201+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "提出Flash-WAM，一种模态感知的步蒸馏框架，用于加速世界-动作模型的推理。通过为视频和动作流匹配不同的噪声调度参数化，将推理压缩至单步，在机器人操作任务上实现23倍加速，实现实时控制。该方法在确保任务成功的同时显著降低延迟。",
          "reasonCn": "该论文针对世界-动作模型（WAM）的推理速度问题提出模态感知蒸馏，直接涉及视频与动作联合生成，用于机器人实时控制。",
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
          "llmTotalScore": 109
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "提出OSCAR，一种精确的动作条件视频世界模型，可跨不同机器人实施例泛化，用于策略评估。通过大规模数据管道和2D运动骨架统一条件表示，实现在单个GPU上微调，在动作跟随、外观质量和运动一致性上显著提升。该模型为虚拟机器人策略评估铺平道路，与真实世界评估高度相关。",
          "reasonCn": "该论文提出动作条件视频世界模型，用于跨机器人实施例的泛化和策略评估，明确聚焦于动作条件世界模型。",
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
          "llmTotalScore": 83
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with severe radial distortion and local gripper-centric perspectives, are out-of-distribution for pretrained VLMs; and human-collected trajectories frequently violate kinematic limits, incur collisions, or e…",
          "summaryCn": "针对通用操作接口（UMI）数据训练VLA模型的挑战，提出VISTA框架。通过UMI-VQA数据集对齐视觉表示、物理验证管道筛选有效轨迹、两阶段联合训练，弥合视觉和物理可行性差距。实验表明该方法持续提升下游策略性能。",
          "reasonCn": "该论文提出框架解决利用UMI数据训练VLA模型时的视觉域差异和物理可行性问题，直接涉及VLA训练。",
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
          "llmTotalScore": 82
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "提出3DThinkVLA，通过3D思维引导联合训练，赋予VLA模型隐式3D空间推理能力。将3D几何感知与空间推理解耦，分别注入不同特征层级，利用共享推理锚点令牌传递空间先验，不产生显式思维链文本，提升动作预测的3D感知。",
          "reasonCn": "该论文提出3D思维引导的联合训练框架，赋予VLA模型隐式3D空间推理能力，直接改进VLA动作预测。",
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
          "llmTotalScore": 77
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "提出ForesightFlow，一种自引导流匹配VLA策略，通过学习的成功潜力轨迹增强动作块，实现无需外部评论家的最佳K值推理。使用解耦优势加权流匹配分别训练动作和潜力，避免过自信分数。在多个仿真和真实世界任务中验证有效性。",
          "reasonCn": "该论文针对VLA策略改进，提出基于流匹配的自我引导策略，利用成功潜力轨迹增强动作生成，属于VLA方法。",
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
          "llmTotalScore": 73
        },
        {
          "id": "2606.04907v2",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "提出WAM-Nav，一种潜在世界-动作模型，用于视觉导航。通过共享扩散变换器非对称扩散，同时生成长时域动作和短时域视觉预见，减少推理延迟和误差累积。双流上下文条件机制整合运动历史和视觉观测，支持多种目标类型，实现鲁棒导航。",
          "reasonCn": "该论文提出潜在世界-动作模型，联合学习动作生成和视觉预见，用于具身视觉导航，符合WAM定义。",
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
          "llmTotalScore": 58
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics. We present FlowPRO, a reward-free offline reinforced fine-tuning framework for flow-matching VLAs.",
          "summaryCn": "提出FlowPRO，一种无奖励离线强化微调框架，用于流匹配VLA模型。采用RPRO目标函数，结合对比优化与显式近端正则项，消除奖励黑客问题；通过遥操作干预和回滚数据收集范式生成对比轨迹对。在长时域双臂任务上达到最高成功率。",
          "reasonCn": "该论文提出无奖励离线强化微调框架，专门针对流匹配VLA策略优化，直接改进VLA部署可靠性。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.04825v1",
          "title": "HapTile: A Haptic-Informed Vision-Tactile-Language-Action Dataset for Contact-Rich Imitation Learning",
          "summary": "Despite the importance of tactile sensing for reliable manipulation, most existing Vision-Language-Action (VLA) datasets remain vision-only, and those that do incorporate tactile information typically lack the joint combination of task diversity, language conditioning, and action trajectories. Furthermore, existing teleoperation pipelines rarely provide haptic feedback to the operator, despite its established role in demonstration quality and manipulation stability. In this work, we present HapTile, a contact-grou…",
          "summaryCn": "提出HapTile，一个包含视觉、触觉、语言和动作的接触引导操纵数据集。通过集成触觉反馈到遥操作控制器，使操作者实时感知接触，收集日常任务轨迹。旨在为VLA策略学习提供多模态感官输入，改进接触丰富任务。",
          "reasonCn": "该论文提出触觉信息视觉-触觉-语言-动作数据集，用于接触丰富模仿学习，扩展VLA数据集模态，属于VLA相关。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.05015v1",
          "title": "Generalization of World Models under Environmental Variability for Vision-based Quadrotor Navigation",
          "summary": "World models, learned generative models that predict how an environment evolves, have become a promising tool for sample-efficient robot learning. Yet how robust they are to environmental variability remains poorly understood. To address this, we conduct a systematic study using vision-based quadrotor navigation as a testbed problem, training DreamerV3-based world models under varying levels of environmental randomness and evaluating them across all levels through cross-environment validation, spanning both Self-S…",
          "summaryCn": "系统研究世界模型对环境变化的鲁棒性，以视觉四旋翼导航为测试平台。训练DreamerV3世界模型，通过跨环境验证和真实飞行测试，发现世界模型在SSL预训练中的泛化能力是仿真到真实迁移的强预测因子。识别离散潜在大小和训练序列长度为关键因素。",
          "reasonCn": "该论文系统研究世界模型在视觉四旋翼导航中的环境泛化能力，使用世界模型进行动作预测和规划，符合WAM。",
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
          "llmTotalScore": 43
        },
        {
          "id": "2606.04534v1",
          "title": "MAD: Mapping-Aware World Models for Agile Quadrotor Flight",
          "summary": "Agile quadrotor flight in cluttered scenes requires more than a reactive mapping from a depth image to a control command: the vehicle must remember which regions have been observed, infer nearby occupied space, and act under partial visibility and tight latency. In this paper, we present Mapping-Aware Dreamer (MAD), a geometry-aware world model for vision-based quadrotor flight. Instead of using raw-image reconstruction as the main self-supervised objective, MAD learns recurrent latent dynamics that reconstruct ro…",
          "summaryCn": "提出Mapping-Aware Dreamer (MAD)，一种几何感知世界模型，用于视觉四旋翼飞行。学习重建栅格地图和本体感受状态的潜在动态，强制编码局部几何和可见性历史。在视觉导航和竞速任务中，基于MAD的智能体表现优于基线，并产生可解释的地图预测。",
          "reasonCn": "该论文提出地图感知世界模型用于敏捷四旋翼飞行，世界模型学习潜在动态并用于策略学习，涉及动作预测。",
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
          "llmTotalScore": 28
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-21T02:58:45.436849+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "GeoSem-WAM 是一种结构化的世界动作模型，通过引入未来几何和语义预测分支，联合捕捉场景动态与空间语义。该方法在不增加推理开销的前提下，显著提升了具身场景下的动作预测准确性和鲁棒性。",
          "reasonCn": "论文提出通过几何和语义监督增强潜在表示的结构化世界建模框架，直接用于提升动作预测精度。",
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
          "summaryCn": "OmniDreams 基于 Cosmos 扩散模型构建，自回归地生成驾驶动作条件下的逼真传感器视频，用于自动驾驶策略的闭环评估。它能够合成极端天气和动态行为等复杂场景，提供可扩展的反应式环境模拟。",
          "reasonCn": "OmniDreams 是一个以自回归方式生成动作条件视频的生成式世界模型，专用于自动驾驶闭环仿真中的策略评估。",
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
          "summaryCn": "TTT-VLA 是一种面向 VLA 模型的测试时训练框架，通过隐式提示优化（LPO）在部署时适配新环境。该方法在 SimplerEnv 上显著提升了单体和多体设置下的任务成功率，且主要通过纠正少量关键决策来实现。",
          "reasonCn": "TTT-VLA 针对视觉-语言-动作模型，提出在测试时通过优化隐式提示来适应分布偏移，提升策略在部署环境中的表现。",
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
          "summaryCn": "CLAW 是一种自监督框架，能在无动作标签的情况下，从视频中联合学习隐动作空间和世界模型。它支持从观察中模仿学习和目标导向规划，并在多种任务上取得了优于现有方法的性能。",
          "reasonCn": "CLAW 直接从无动作视频中学习连续隐动作世界模型，利用对抗正则化和扩散生成同时捕获动作表示与环境动态，用于模仿学习和规划。",
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
          "summaryCn": "PHASER 通过阶段中心容量分配和多模态干扰路由，为 VLA 模型提供了一种架构无关的持续学习框架。它有效缓解了连续技能学习中的灾难性遗忘，并在 LIBERO 基准上展现了显著的性能提升。",
          "reasonCn": "PHASER 针对视觉-语言-动作模型在终身学习中的灾难性遗忘问题，提出阶段性经验重放框架。",
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
          "summaryCn": "该工作提出了一种针对 VLA 机器人的部分可观察对抗攻击框架，利用模型注意力定位关键区域，并优化贴片以干扰感知和控制。仿真和真实机器人实验证明了该方法在长时程任务中的有效性和隐蔽性。",
          "reasonCn": "论文研究视觉-语言-动作模型在部分可观察条件下的对抗贴片攻击，通过破坏语义对齐和增加动作轨迹曲率来降低任务成功率。",
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
          "summaryCn": "SceneDiver 通过构建场景图并迭代分解任务，生成细粒度的焦点计划，有效减少了 VLM 和 VLA 在具身任务中的视觉幻觉。通过轻量适配器将焦点能力移植到 VLA，提升了反应式控制的标准基准表现。",
          "reasonCn": "SceneDiver 利用粗到细的焦点计划生成解决视觉-语言决策中的视觉幻觉问题，并将此能力蒸馏到 VLA 中。",
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
          "summaryCn": "GeoAlign 通过后训练 RGB 几何分支和本体状态引导的几何令牌查询，强化了 VLA 策略的几何感知和动态可供性选择。该方法在 LIBERO 和 SimplerEnv 基准以及真实 ALOHA 任务上均取得了优异成绩。",
          "reasonCn": "GeoAlign 在 VLA 模型中引入状态引导的空间对齐，利用几何后训练和本体状态查询提升操控策略的性能。",
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
          "summaryCn": "ERVLA 构建了大规模具身思维链语料库，提出将思维链作为训练时的表示监督，并采用推理丢弃策略，使模型在推理时可直接预测动作。该方法在 LIBERO-Plus 上达到了最先进性能，并避免了自回归推理的不稳定性。",
          "reasonCn": "ERVLA 重访了具身思维链，将其用作表示塑造的监督信息而非测试时推理，提升了 VLA 模型的扩展性和动作预测稳定性。",
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
          "summaryCn": "OpenEAI-Platform 集成了低成本机械臂和可复现的 VLA 模型，通过两阶段训练实现高效的动作预测。在四个真实操作任务中，该平台超越了商用机械臂和大型预训练模型，推动了具身智能的开源生态建设。",
          "reasonCn": "OpenEAI-VLA 是平台中的视觉-语言-动作模型，基于 Qwen3-VL-4B 和扩散 Transformer 动作头，仅用开源数据训练即取得与 pi0 基线相当的成功率。",
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
          "summaryCn": "AirDreamer 设计了一个基于世界模型的无人机导航框架，通过学习环境表征来训练导航策略，避免手工设计感知管道。在仿真和真实环境中，该方法展现了出色的泛化能力和局部最优逃离能力，实现了有效的 sim-to-real 迁移。",
          "reasonCn": "AirDreamer 利用世界模型学习环境理解，并基于强化学习策略进行无人机导航，显式建模了环境动态对动作的影响。",
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
          "id": "2606.03609v3",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through.",
          "summaryCn": "论文提出了一种三维等视线世界模型，通过预测给定动作后的球面可见深度图来表征城市环境中的可通行几何。该模型避免了外观建模，保留了三维结构，并展现出跨城市泛化的涌现特性。",
          "reasonCn": "该世界模型预测三维等视线（3D isovist），捕捉导航中可穿越的几何空间，直接服务于运动规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03609v3",
          "pdfLink": "https://arxiv.org/pdf/2606.03609v3",
          "published": "2026-06-02T13:11:30Z",
          "updated": "2026-06-16T16:27:24Z",
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
          "summaryCn": "该论文证明了严格等变的世界模型可在训练后保持对称性不变，从而实现跨朝向的零样本泛化。在 PushT 等机器人操作任务中，等变模型在闭环控制下表现出精确且不变的误差分布，显著优于非等变基线。",
          "reasonCn": "该工作构建了等变编码-预测世界模型，利用对称性实现闭环控制的零样本泛化，并验证了规划与控制的保真度。",
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
          "summaryCn": "Donk 提出了一种联合视频与动作的去噪扩散模型，在灵巧手操作中既能作为动作策略采样未来轨迹，又能作为数据引擎生成文本条件视频。统一训练配方下，动作精度、视频保真度与文本条件生成均得到提升。",
          "reasonCn": "Donk 是一个统一的视频-动作去噪模型，通过联合建模交互视频和可执行手部轨迹，作为世界动作模型用于灵巧手控制。",
          "lane": "WAM",
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
      "generatedAt": "2026-06-21T02:57:45.827168+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM提出以语义事件为单位的世界行动模型，将视频动作学习从固定块优化转向事件对齐的VLA预训练。该方法通过事件级描述和聚类平衡采样实现跨任务的可扩展学习，并支持事件模式和统一模式两种推理。它在保持VLA功能的同时增强了世界建模能力，平衡了语义与低层控制。",
          "reasonCn": "同时涉及视觉、语言指令与机器人动作，提出事件驱动的世界行动模型预训练，符合VLA与WAM双重标准。",
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
          "summaryCn": "AHEAD提出预测-执行包装器，利用光流和语言运动显著性训练小型世界模型，预测未来视觉标记供冻结VLA解码。该方法在动态场景中显著提升抓取成功率，仅增加490万参数，无需重新训练VLA骨干。它为解决物体移动导致的VLA失效问题提供了高效方案。",
          "reasonCn": "为动态场景下的VLA策略增加运动感知隐世界模型，预测未来特征以补偿延迟，直接改进行动生成。",
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
          "summaryCn": "EG-GRPO框架将专家引导的组相对策略优化用于VLA无人机导航，通过异构管道加速在线采样。在多个复杂意图任务上，成功率提升至SFT基线的2.13倍，意图对齐性能提高60.9%。该方法有效缓解了数据稀缺和弱监督问题，推动精确意图对齐飞行。",
          "reasonCn": "提出用于无人机导航的VLA模型，结合视觉、语言指令生成飞行动作，并采用强化学习优化意图对齐。",
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
          "summaryCn": "Lie Diffuser Actor (LDA)在SE(3)切空间进行扩散，通过左不变SDE加噪和指数映射采样，确保动作的几何一致性。在CALVIN基准上平均任务长度提升7.3%，真实机器人实验也表现出优势。该方法消除了流形漂移和坐标变换不变性问题，生成更有效的轨迹。",
          "reasonCn": "提出在SE(3)流形上的扩散VLA策略，直接从视觉语言输入生成动作，纠正欧几里得谬误。",
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
          "summaryCn": "S2框架在保持高级目标的同时，将轨迹级和子任务级指导赋予执行器，并施加显式视觉证据预算。该界面迫使策略从任务充分证据中学习，避免失真和模糊性，可兼容现成VLM规划器。它在多种泛化设置中表现出一致改进，尤其解决了粗指令导致的监督混叠问题。",
          "reasonCn": "通过视觉证据预算和语言指令细化增强VLA泛化性，不涉及世界模型但核心为视觉语言动作策略改进。",
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
          "id": "2606.02800v3",
          "title": "Cosmos 3: Omnimodal World Models for Physical AI",
          "summary": "We introduce Cosmos 3, a family of omnimodal world models designed to jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. By supporting highly flexible input-output configurations, Cosmos 3 seamlessly unifies critical modalities for Physical AI -- effectively subsuming vision-language models, video generators, world simulators, and world-action models into a single framework. Our evaluation demonstrates that Cosmos 3 establishes a…",
          "summaryCn": "Cosmos 3是一个基于混合专家Transformer的全模态世界模型家族，能够联合处理并生成语言、图像、视频、音频和动作。它在图像生成、视频生成和策略控制等多任务上达到新SOTA，已开源。该模型为物理AI提供了可扩展的通用骨干，融合了理解与生成。",
          "reasonCn": "发布全模态世界模型，统一处理视觉、语言、视频、音频和动作序列，明确包含世界行动模型。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02800v3",
          "pdfLink": "https://arxiv.org/pdf/2606.02800v3",
          "published": "2026-06-01T19:12:30Z",
          "updated": "2026-06-16T23:18:34Z",
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
          "summaryCn": "AURA-Mem通过固定大小循环记忆和学习门控，仅当观察可能改变未来动作时才写入，避免KV缓存线性增长。在合成和LIBERO-Long基准上，以极低写入次数匹配最佳基线，将状态尺寸压缩至4,224字节。这为资源受限的机器人持续任务提供了高效记忆方案。",
          "reasonCn": "为VLA骨干设计动作门控循环记忆，在恒定显存下支持长序列推理，直接优化行动决策的记忆效率。",
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
          "summaryCn": "SeeTraceAct通过可见性感知的轨迹预测增强VLA的空间基础能力，支持跨形态演示。在RoboCasa-DC和真实世界基准上，成功率优于基线，平均提升12.5个百分点。它利用单次演示完成未见任务，缓解了对昂贵遥操作数据的依赖。",
          "reasonCn": "提出基于演示视频的VLA框架，预测未来末端执行器轨迹以实现精确空间定位和动作生成。",
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
          "summaryCn": "MRO-GWM采用物体中心高斯表示和时空Transformer，从多视角重建中学习动作条件动力学。它能够处理多物体场景、遮挡和交互，并在模型预测控制中实现非抓取操作。该模型为刚体操控提供了3D感知和可泛化的世界模拟。",
          "reasonCn": "学习以动作为条件的物体中心高斯泼溅世界模型，用于预测刚体运动和控制，符合WAM定义。",
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
          "summaryCn": "该框架将人类行走视频转换为移动机器人可用的动作表示，以扩充训练数据。联合训练在水果搜索任务上提升了语言理解和动作生成鲁棒性。这为导航VLA模型提供了低成本、可扩展的数据来源。",
          "reasonCn": "利用自中心视频和机器人演示联合训练VLA导航模型，视觉、语言指令和动作输出完整。",
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
          "summaryCn": "RoboDream通过解耦轨迹执行和场景合成，从渲染运动生成真实感操作演示。它支持检索重生和无道具遥操作等数据缩放方法，大幅减少真实数据需求。实验表明生成数据能持续提升下游策略表现。",
          "reasonCn": "提出具身中心的世界模型，以动作条件生成含机器人操作的视频数据，间接用于策略学习，属于WAM范畴。",
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
          "id": "2606.02436v1",
          "title": "Geometry-Aware Implicit Memory for Video World Models",
          "summary": "Video world models aim to simulate controllable visual environments, but long-horizon rollouts depend on what the model remembers after observations leave its native context window. Explicit memories retain frames or online 3D reconstructions, which can suffer from heuristic retrieval errors, redundant appearance storage, or reconstruction artifacts. Implicit memories compress history into a compact state, but existing designs are not explicitly constrained to encode cross-view scene geometry.",
          "summaryCn": "GIM-World通过轻量Transformer编码器生成定长记忆令牌，并用可查询几何头蒸馏3D结构，确保跨视图一致性。在MIND数据集上，它比显式和隐式记忆基线更好地保持几何与视觉一致性。该方法使世界模型能够更稳定地进行长时预测和模拟。",
          "reasonCn": "提出几何感知隐式记忆用于视频世界模型，增强长程可控模拟，隐含动作条件下的一致性保持。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02436v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02436v1",
          "published": "2026-06-01T16:08:43Z",
          "updated": "2026-06-01T16:08:43Z",
          "authors": [
            "Zhengxuan Wei",
            "Xu Guo",
            "Xinghui Li",
            "Xunzhi Xiang",
            "Min Wei",
            "Yiran Zhu",
            "Qiulin Wang",
            "Xintao Wang",
            "Pengfei Wan",
            "Xiangwang Hou"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 44,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01626v1",
          "title": "IMWM: Intuition Models Complement World Models for Latent Planning",
          "summary": "Planning with a learned latent world model is a promising route to control from raw pixels, but a strong world model alone is not enough. We show this experimentally: even with a perfect world model (operationalized by replacing the learned forward predictor with an idealized rollout of the true environment dynamics), a finite-budget sample-based planner still fails on some tasks, indicating that the bottleneck can lie in search rather than in world-model accuracy. Motivated by this gap, we propose IMWM (Intuition…",
          "summaryCn": "IMWM在标准世界模型基础上增加直觉模型，通过检索初始化、混合成本和可靠性门控提升规划效率。在四项视觉目标到达任务上成功率均超过纯世界模型规划器，尤其在复杂环境取得显著提升。该方法证明了搜索瓶颈可通过学习先验缓解。",
          "reasonCn": "结合世界模型与直觉模型进行像素级潜在规划，世界模型用于预测未来状态以评估动作，符合WAM。",
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
          "summaryCn": "该工作将机器人策略建模为世界与任务因子的乘积，世界因子通过可微图网络传播梯度，任务因子学习调节梯度路径。它避免了为每个新任务重新训练，并展示了组合泛化能力。这为机器人学习提供了结构化的因子分解框架。",
          "reasonCn": "通过可微世界模型（AICON）和梯度调制实现机器人任务分解，世界模型直接用于动作规划。",
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
          "summaryCn": "统一驾驶标记器在离散瓶颈中对齐DINO特征并保持RGB重建，同时注入帧间深度和位姿监督。在NAVSIM上，该标记器提升了重建保真度、规划性能和生成质量。它为基于世界模型的自动驾驶提供了紧凑且有效的视觉表示。",
          "reasonCn": "提出面向驾驶世界模型和规划的离散标记器，联合视觉表示与几何监督，服务于下游动作规划。",
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
          "summaryCn": "TERRA研究了结构化状态域间的迁移问题，将动作条件世界模型分解为域适配器和共享核心。通过近似MDP同态和Gromov-Wasserstein距离量化转移差距。它为统一架构下的跨域世界模型提供了理论分析。",
          "reasonCn": "提出跨领域动作条件隐世界模型架构，涵盖驾驶、机器人等，明确涉及世界模型和动作预测。",
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
      "generatedAt": "2026-06-21T02:56:42.626129+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "该论文提出模型无关的诊断框架，通过行为回放和特征分析评估WAM和VLA策略。在LIBERO等基准上测试七种策略，揭示成功指标掩盖的差异，为机器人操控策略选择提供依据。",
          "reasonCn": "论文提出了同时对WAM和VLA进行行为与表征诊断的框架，涉及视觉、语言和动作。",
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
          "llmTotalScore": 132
        },
        {
          "id": "2606.00966v1",
          "title": "Threading Optimization for Vision-Language-Action Model Inference in Low-Cost Smart Agricultural Manipulation",
          "summary": "Vision-Language Action (VLA) models continue to face challenges such as slow inference speed and difficulty performing fine-grained motion adjustments, limiting their widespread adoption in industry. While the Real-Time Action Chunking (RTAC) algorithm has been proposed to address these bottlenecks, bridging the gap between the algorithm provided in pseudocode to a stable, real-world deployment on a low-cost robotic arm remains a challenge. In this work, we present a complete system-level implementation of RTAC ta…",
          "summaryCn": "该工作实现并优化了实时动作分块算法(RTAC)的线程级推理，用于低成本农业机械臂。通过对线程调度进行定制优化，降低了端到端延迟，提升了操控稳定性和速度。",
          "reasonCn": "论文针对VLA模型在低成本农业机械臂上的推理优化，涉及视觉输入、语言指令和动作输出。",
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
          "llmTotalScore": 93
        },
        {
          "id": "2606.01027v1",
          "title": "$τ_0$-WM: A Unified Video-Action World Model for Robotic Manipulation",
          "summary": "Robotic manipulation requires models that generate executable actions while anticipating and evaluating their future consequences before physical execution. We present $τ_0$-World Model ($τ_0$-WM), a unified video-action world model that integrates policy learning, video prediction, and action evaluation within a single future-predictive framework. Built on a shared video diffusion backbone, $τ_0$-WM provides two complementary interfaces.",
          "summaryCn": "τ0-WM是一个基于视频扩散的统一世界模型，能够联合预测视觉潜在表征和连续动作块，并通过重去噪评分和模拟器修正候选动作。在长时程精细操作任务上表现优异。",
          "reasonCn": "论文提出了统一视频-动作世界模型，整合策略学习、视频预测和动作评估，用于机器人操控。",
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
          "llmTotalScore": 63
        },
        {
          "id": "2606.01164v1",
          "title": "Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends",
          "summary": "With rapid development of large language models and diffusion-based content generation, world modeling has attracted increasing research attention, benefiting various downstream domains such as game engines, embodied AI, autonomous driving, etc. Through explicitly incorporating user actions into world state transition, recent literature empowers world modeling with interactivity in an action-conditioned video or 3D generation paradigm, further enhancing controllability over world evolutions and facilitating users…",
          "summaryCn": "系统回顾交互式世界建模的研究趋势与技术挑战，包括动作条件生成、长时程记忆和实时响应。对比了在开放世界、游戏、自动驾驶和机器人领域的基准，并展望未来方向。",
          "reasonCn": "综述交互式视频世界建模，涵盖动作条件可控、长时程交互等核心技术，用于机器人等具身智能领域。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01164v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01164v1",
          "published": "2026-05-31T11:12:30Z",
          "updated": "2026-05-31T11:12:30Z",
          "authors": [
            "Jiuming Liu",
            "Chaojun Ni",
            "Mengmeng Liu",
            "Chensheng Peng",
            "Fangjinhua Wang",
            "Sitian Shen",
            "Marc Pollefeys",
            "Masayoshi Tomizuka",
            "Ayush Tewari",
            "Per Ola Kristensson"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 59,
          "llmTotalScore": 59
        },
        {
          "id": "2606.00985v1",
          "title": "Make Your VLA More Robust Without More Data By Interleaving Motion Planning",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable progress for mobile manipulation, but their performance on long-horizon tasks remains poor. These tasks are especially challenging because (1) progress toward high-level goals must be maintained across extended sequences of spatially distributed subtasks, and (2) early execution errors compound rapidly over the task horizon. These challenges persist despite finetuning on large human teleoperated mobile manipulation data, indicating that more data alone may…",
          "summaryCn": "针对长时段移动操控，MPVI将基于模型的运动规划与VLA策略交织，利用VLM完成性检查和本体感知触发进行模块切换。在BEHAVIOR-1K上任务进展提升113%。",
          "reasonCn": "提出将运动规划与VLA模型交织的框架MPVI，提升移动操作鲁棒性，涉及视觉、语言和动作。",
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
          "llmTotalScore": 54
        },
        {
          "id": "2606.01458v1",
          "title": "LEGS: Fine-Tuning Teleop-Free VLAs for Humanoid Loco-manipulation in an Embodied Gaussian Splatting World",
          "summary": "Training vision-language-action (VLA) policies for humanoid loco-manipulation is constrained by the high cost and complexity of collecting human teleoperation demonstrations. VLA policies fine-tuned in simulators have, until now, failed to transfer effectively in humanoid loco-manipulation tasks. We present LEGS (Loco-manipulation via Embodied Gaussian Splatting), a hybrid simulator that composites a mesh foreground (robot, objects, props) over a photorealistic 3D Gaussian Splatting (3DGS) background reconstructed…",
          "summaryCn": "LEGS通过混合高斯泼溅模拟器合成规模化演示数据，无需人类遥操作。微调后的VLA策略在真实人形机器人上达到或超越人类演示训练的性能，展示了照片级渲染对仿真迁移的关键作用。",
          "reasonCn": "论文训练人形机器人运动操纵VLA策略，利用高斯泼溅生成合成数据，涉及视觉、语言和动作。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.01241v2",
          "title": "OneVLA: A Unified Framework for Embodied Tasks",
          "summary": "Navigation and manipulation are fundamental capabilities of embodied intelligence, enabling robots to interpret natural language commands and interact physically with their surroundings. However, current Vision-Language-Action (VLA) models remain constrained by task-specific architectures, specializing in either navigation or manipulation, which hinders the development of general-purpose robotic agents. To bridge this gap, we introduce OneVLA, a unified architecture that integrates these distinct tasks into a sing…",
          "summaryCn": "OneVLA设计了统一动作头，同时输出导航和操纵动作，并通过多阶段渐进训练实现跨任务正迁移。在模拟和真实环境中均取得最先进性能。",
          "reasonCn": "提出统一VLA框架OneVLA，将导航与操纵整合进单一模型，处理视觉、语言和动作。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.01205v2",
          "title": "ImagineUAV: Aerial Vision-Language Navigation via World-Action Modeling and Kinodynamic Planning",
          "summary": "Vision-language navigation (VLN) for UAVs demands grounding free-form instructions into 6-DoF flight under partial observability. While Vision-Language-Action (VLA) models excel at semantic reasoning, they suffer from brittleness due to geometric inconsistency and dynamics mismatch. To address this, we propose ImagineUAV, an imagination-driven framework leveraging cascaded world-action modeling.",
          "summaryCn": "ImagineUAV使用潜视频扩散模型生成指令条件下的未来观测，再经动作提取器和运动学规划得到无碰撞轨迹。仅1.3B参数，在基准和真实飞行中超越先前方法。",
          "reasonCn": "提出ImagineUAV，利用世界-动作建模进行空中视觉语言导航，通过视频扩散模型想象未来并提取动作。",
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
          "llmTotalScore": 48
        }
      ]
    }
  ]
};

window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-10T01:19:06.256549+00:00",
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
  "currentDateKey": "20260610",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260610",
      "dateLabel": "2026-06-10",
      "generatedAt": "2026-06-10T01:19:06.256433+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.10363v1",
          "title": "HiMem-WAM: Hierarchical Memory-Gated World Action Models for Robotic Manipulation",
          "summary": "World Action Models (WAMs) have emerged as a new powerful paradigm for embodied intelligence, learning action-relevant visual dynamics that significantly enhance generalization and robustness. However, existing WAMs still struggle with task-relevant memory in long-horizon robotic manipulation. To address this, we present HiMem-WAM, a Hierarchical Memory-Gated WAM that integrates motion-centric latent actions, high-level skill latents, and boundary-triggered memory updates.",
          "summaryCn": "针对长序列机器人操作中的任务记忆问题，提出分层记忆门控世界动作模型HiMem-WAM，结合运动驱控与高层技能潜在变量及边界触发的记忆更新，提高了扰动弹性和长时操作性能。",
          "reasonCn": "该论文提出分层记忆门控世界动作模型HiMem-WAM，以世界模型为核心明确用于机器人操作的动作预测和规划。",
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
          "llmTotalScore": 133
        },
        {
          "id": "2606.10366v1",
          "title": "A Practical Recipe Towards Improving Sim-and-Real Correlation for VLA Evaluation",
          "summary": "Simulation has become an essential tool for evaluating and improving vision-language-action (VLA) policies, offering scalable, reproducible, and controllable alternatives to costly real-world robot evaluation. Recent simulation benchmarks have made substantial progress on realism and diversity, yet these platforms have not been widely adopted as reliable proxies for real-world policy evaluation. In this work, we investigate this issue through the lens of sim-and-real correlation.",
          "summaryCn": "针对VLA策略的仿真评估，研究不同仿真平台与实际部署的关联性，提出衡量和改善仿真有用性的框架，为仿真设计者和使用者提供指导。",
          "reasonCn": "该论文系统研究VLA策略仿真与实际部署的关联性，直接涉及视觉-语言-动作模型的评估。",
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
          "llmTotalScore": 92
        },
        {
          "id": "2606.10267v1",
          "title": "What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents",
          "summary": "Hierarchical vision-language-action (Hi-VLA) systems have emerged as a promising paradigm for complex robot manipulation, by using high-level VLM planners to decompose tasks into language subgoals executed by low-level VLA controllers. Despite recent empirical progress, there is a lack of unified design principles for these systems: existing Hi-VLA systems differ in how they choose and connect planners, controllers, mechanisms to switch between the two, and how observations and memory are represented in the planne…",
          "summaryCn": "针对分层视觉-语言-行动系统的设计原则进行系统研究，统一代表性Hi-VLA代理并基准测试核心设计选择，提炼出构建更强大分层VLA代理的实用原则。",
          "reasonCn": "该论文系统研究分层VLA代理的设计原则，直接涉及视觉输入、语言指令和机器人动作输出。",
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
          "llmTotalScore": 92
        },
        {
          "id": "2606.10862v1",
          "title": "LIBERO-Occ: Evaluating and Improving Vision-Language-Action Models under Scene-Induced Occlusion via Viewpoint Imagination",
          "summary": "Vision-Language-Action (VLA) models achieve strong performance on standard manipulation benchmarks, but most evaluations assume that task-relevant objects are fully visible. This assumption often fails in realistic settings, where occlusion makes manipulation partially observable. In this paper, we study \\textit{scene-induced occlusion} as a fundamental challenge for VLA models and introduce \\textbf{LIBERO-Occ}, an occlusion-oriented extension of LIBERO.",
          "summaryCn": "针对VLA模型在遮挡场景下的性能退化问题，提出视点想象方法，通过生成补充视图来增强部分可观察条件下的操作判决，提高了鲁棒性。",
          "reasonCn": "该论文研究场景遮挡对VLA模型的影响并改进，直接涉及视觉、语言和动作。",
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
          "llmTotalScore": 83
        },
        {
          "id": "2606.10568v1",
          "title": "VeriSpace: Spatially Grounded Action Verification for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have shown strong promise for robotic manipulation, but their reliability at test time remains limited by one-shot action prediction, where even small action errors can cause grasp failure, collision, or incorrect task progression. A natural alternative is to equip VLA systems with test-time verification, allowing multiple candidate actions to be proposed and evaluated before execution. However, reliable action verification is challenging because it requires not only distinguish…",
          "summaryCn": "提出一个空间感知的动作验证器VeriSpace，用于VLA模型在测试时选择动作，结合双路径3D注入场景编码和空间接地动作推理，提升动作判别的可靠性。",
          "reasonCn": "该论文为VLA模型提出测试时动作验证方法，直接涉及视觉、语言和动作。",
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
          "llmTotalScore": 83
        },
        {
          "id": "2606.10501v1",
          "title": "Uncovering Vulnerability of Vision-Language-Action Models under Joint-Level Physical Faults",
          "summary": "Deploying Vision-Language-Action (VLA) models in real robotic systems requires robustness not only to semantic and perceptual variations, but also to embodiment-side faults that change how actions are physically realized. Real robots can experience joint-level changes caused by actuator degradation, hardware faults, safety limits, collision damage, or wear-induced friction. These faults are critical because they alter the action-to-motion interface of a policy, disrupting the learned closed-loop relationship betwe…",
          "summaryCn": "揭示VLA模型在关节级物理故障下的脆弱性，并提出轻量级残差校准框架J-PARC，从近期关节动力学推断故障状态以校准动作，增强鲁棒性。",
          "reasonCn": "该论文研究VLA模型在关节级物理故障下的脆弱性并校准，直接涉及视觉、语言和动作。",
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
          "llmTotalScore": 83
        },
        {
          "id": "2606.10495v1",
          "title": "Act on What You See: Unlocking Safe Social Navigation in Vision-Language-Action Models",
          "summary": "Safe social navigation requires robots to distinguish people from ordinary obstacles and to react before danger becomes imminent. We show that pretrained Vision-Language-Action (VLA) models already encode pedestrian-object distinctions and future collision signals in their internal representations, but behavior cloning fails to translate these signals into socially appropriate actions. To address this mismatch, we propose SALSA, a two-stage annotation-free post-training framework: (1) social behavioral alignment b…",
          "summaryCn": "利用预训练VLA模型内部表征中已编码的行人-物体区分和碰撞信号，提出两阶段后训练框架SALSA，实现安全社交导航，大幅减少近碰撞事件。",
          "reasonCn": "该论文将VLA模型用于安全社交导航，涉及视觉、语言和动作。",
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
          "llmTotalScore": 83
        },
        {
          "id": "2606.10305v1",
          "title": "SARM2: Multi-Task Stage Aware Reward Modeling for Self Improving Robotic Manipulation",
          "summary": "Fine-tuning vision-language-action (VLA) policies for long-horizon manipulation still relies heavily on behavior cloning, which requires costly high-quality demonstrations and keeps policies near the demonstration distribution. Reward models can reduce this dependence by reweighting demonstrations and providing dense supervision for on-robot reinforcement learning (RL), but they must be dense, accurate, and general. Existing methods fall short: task-specific stage-aware models are accurate but require per-task ann…",
          "summaryCn": "提出多任务阶段感知奖励模型，结合自政策改进框架SPIRAL，通过密集奖励指导VLA策略从自主部署中提升，在长时域操作任务上实现性能飞跃。",
          "reasonCn": "该论文提出奖励模型改进VLA策略微调，直接涉及视觉、语言和动作。",
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
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.10825v1",
          "title": "MODIP: Efficient Model-Based Optimization for Diffusion Policies",
          "summary": "Diffusion policies (DPs) have emerged as expressive policy representations for robot learning, often used with imitation learning methods such as behavioral cloning (BC). However, while their success has largely been confined to BC, direct reinforcement learning (RL) fine-tuning remains challenging because actions are generated through a multi-step denoising process. In this work, we propose MODIP, a framework for the offline-to-online fine-tuning of DPs.",
          "summaryCn": "提出基于世界模型的离线到在线扩散策略微调框架MODIP，利用模型预测控制生成高质量轨迹以监督扩散策略，提升机器人学习性能。",
          "reasonCn": "该论文利用世界模型进行扩散策略的模型驱动优化，用于机器人任务的动作规划与控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.10825v1",
          "pdfLink": "https://arxiv.org/pdf/2606.10825v1",
          "published": "2026-06-09T13:09:21Z",
          "updated": "2026-06-09T13:09:21Z",
          "authors": [
            "Zakariae El Asri",
            "Philippe Gratias-Quiquandon",
            "Nicolas Thome",
            "Olivier Sigaud"
          ],
          "categories": [
            "cs.LG"
          ],
          "heuristicScore": 24,
          "llmTotalScore": 24
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
      "generatedAt": "2026-06-10T01:18:07.708356+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.08094v1",
          "title": "vla.cpp: A Unified Inference Runtime for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) policies are typically shipped as Python/PyTorch stacks that assume a workstation-class GPU, a mismatch for the hardware on which robots actually run. We present vla.cpp, a portable C++ inference runtime built on llama.cpp. To our knowledge, it is the first ggml-class engine to natively serve the flow-matching and diffusion VLA inference pattern, in which a cached vision-language prefix is consumed by a cross-attending action expert integrated over several solver steps.",
          "summaryCn": "vla.cpp 是一个基于 llama.cpp 的 C++ 推理引擎，支持多种 VLA 架构和动作头，在嵌入式硬件上高效运行。在 LIBERO-Object 和 ALOHA 机械臂上验证了低延迟与低内存占用，并通过 roofline 分析优化了计算利用率。",
          "reasonCn": "该论文提出了一个专门用于视觉-语言-动作（VLA）模型的推理运行时，直接涉及视觉输入、语言指令和动作输出。",
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
          "heuristicScore": 114,
          "llmTotalScore": 114
        },
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "Light-WAM 通过紧凑视频骨干和下采样潜在空间监督，引入 StateFusionActionExpert 在单次前向传递中预测动作块，实现轻量高效的机器人操作。在 LIBERO 和 RoboTwin 2.0 上表现优异，参数仅0.44B，推理延迟72ms。",
          "reasonCn": "该论文提出了 Light-WAM，一个以未来帧预测为辅助目标的世界动作模型，并直接输出动作块，符合WAM定义。",
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
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.08015v1",
          "title": "Q-VGM: Q-Guided Value-Gradient Matching for Flow-Matching VLA Policies",
          "summary": "We propose Q-Guided Value-Gradient Matching (Q-VGM), an off-policy reinforcement learning (RL) method that tackles a long-standing challenge in fine-tuning flow-matching vision-language-action (VLA) policies: efficiently improving an expressive flow-matching action expert with respect to a learned Q-function. Effective improvement must exploit the first-order (gradient) information of the critic, but this is difficult for flow policies, because directly back-propagating the value through their multi-step denoising…",
          "summaryCn": "Q-VGM 通过价值梯度匹配实现流匹配 VLA 策略的离线强化学习微调，避免了反向传播过去噪链，在稀疏奖励任务上提升了性能。它利用 Cal-QL 评价器与紧凑感知特征实现高效训练。",
          "reasonCn": "该论文提出一种用于微调流匹配VLA策略的强化学习方法，直接涉及视觉、语言和动作组件。",
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
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.08288v1",
          "title": "MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model",
          "summary": "Vision-language-action (VLA) models increasingly condition robot policies on history, depth, or 4D features to resolve ambiguity in long-horizon manipulation. However, more spatiotemporal evidence is not necessarily better: when the injected evidence is not motion-consistent, it can introduce geometric drift, fragmented temporal cues, and unstable action generation. This raises a simple question: should a VLA remember past frames, or remember the motion that connects them?",
          "summaryCn": "MotionVLA 将过去帧转化为连续轨迹场令牌，代替传统的稀疏帧记忆，为 VLA 提供运动一致的时空证据。在仿真与真实机器人实验中，它提升了长程任务的执行平稳性与成功率。",
          "reasonCn": "该论文通过注入运动历史改进VLA模型的长程操控性能，直接处理视觉、语言和动作。",
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
          "heuristicScore": 78,
          "llmTotalScore": 78
        },
        {
          "id": "2606.08107v1",
          "title": "Ego-Pi: VLA Fine-Tuning for Ego-Centric Human and Robot Data",
          "summary": "Robotics faces a fundamental challenge of data scarcity. Unlike language or vision research, there is no internet-scale dataset for robotic manipulation. A promising path forward is to leverage egocentric human data, which can be collected more easily, with greater breadth, and at a larger scale.",
          "summaryCn": "Ego-Pi 研究了在 π0.5 基座上用人类数据微调 VLA 的设计选择，使人形机器人能够学习新任务语义并组合技能。实验表明数据可转化至真实机器人，无需对应机器人数据。",
          "reasonCn": "该论文利用自我中心的人类数据微调 VLA 模型以实现人形机器人操作，涉及视觉、语言和动作。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.07974v1",
          "title": "PRISM: PRior-guided Imagination Sampling in world Models",
          "summary": "A learned world model provides a powerful physical intuition for evaluating future states. But its effectiveness in continuous control also depends critically on how candidate actions are generated for model-based planning. Rather than solely asking how accurately a model can simulate the future, we ask: which candidate actions are worth evaluating in the first place?",
          "summaryCn": "PRISM 在 JEPA 风格潜在世界模型的冻结编码器上附加轻量 MLP，提取状态条件高斯先验，并通过乘积高斯融合指导规划采样。该方法无需额外视觉编码器，简化了架构并提升了规划效率。",
          "reasonCn": "该论文从世界模型编码器中提取动作先验用于基于模型的规划，明确利用世界模型进行动作决策。",
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
          "heuristicScore": 52,
          "llmTotalScore": 52
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-10T01:17:01.461359+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07895v1",
          "title": "TBD-VLA: Temporal Block Diffusion Vision Language Action Model",
          "summary": "Discrete Vision-Language-Action (VLA) models typically formulate action generation as next-token prediction over discretized action spaces, conditioning each token autoregressively on prior context. While effective, this paradigm incurs high inference latency and largely ignores the temporal structure inherent in action trajectories. Recent efforts introduce parallel decoding to improve efficiency, enabling faster inference, but lack explicit mechanisms for modeling token dependencies.",
          "summaryCn": "提出TBD-VLA，一种基于离散令牌的VLA框架，通过时间块扩散统一自回归与并行解码，提升动作生成的时间连贯性和推理速度。在仿真和真实操作任务上显著优于先前的VLA方法，为快速、时序感知的离散VLA模型提供了一条可扩展路径。",
          "reasonCn": "提出了一种同时处理视觉、语言和动作的离散VLA模型，利用时间块扩散提升动作生成效率与时间一致性。",
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
          "heuristicScore": 131,
          "llmTotalScore": 131
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "提出LARA框架，通过表征对齐联合优化潜在动作模型（LAM）与视觉-语言-动作模型（VLA），实现相互促进。LAM学习动作轨迹以规避虚假视觉变化，VLA通过LAM中的前向动态正则化减少幻觉轨迹，在多个基准上平均提升约10%、5%和15%。",
          "reasonCn": "结合VLA和潜在动作模型，通过对齐表示实现联合优化，提升机器人操作性能。",
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
          "heuristicScore": 101,
          "llmTotalScore": 101
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "提出Coarse-to-Control框架，让VLA模型首先预测粗粒度动作令牌序列作为计划，再生成可执行动作令牌。在LIBERO和真实世界操作任务中，动作令牌规划一致优于直接动作生成，尤其在长时长多阶段任务上增益显著。",
          "reasonCn": "该论文提出在动作令牌空间内进行计划，直接提升VLA模型在长时长任务上的表现。",
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
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "提出AdaWAM，一种具有自适应多模态推理能力的世界动作模型。它集成轻量级动态路由器，在任务执行中自主触发文本或视觉推理，在保持高推理效率的同时优于现有具身策略，仿真和真实世界实验验证其有效性。",
          "reasonCn": "提出自适应多模态推理的世界动作模型，根据任务上下文动态选择文本或视觉推理，用于动作预测和控制。",
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
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.07687v1",
          "title": "What Makes Video World Model Latents Action-Relevant: Prediction over Reconstruction",
          "summary": "Video world models are increasingly used to provide predictive visual representations, yet it remains unclear which pretraining signals induce action-relevant structure in their latent spaces. We study this question through a unified probe-based evaluation across diverse encoder families, including image-only self-supervision, video pretraining with and without latent prediction, reconstruction-based autoencoders, diffusion models, and shortcut-forcing dynamics models. Using a common inverse-dynamics probing objec…",
          "summaryCn": "通过统一的探针评估，揭示视频世界模型潜在空间中动作相关性的主要驱动力是时序视频预训练而非像素重建。发现视频预训练的自监督编码器在视觉保真度和动作预测间取得最佳帕累托权衡，且逆动力学监督能增强对视觉损坏的鲁棒性。这对设计动作感知的世界模型具有重要意义。",
          "reasonCn": "研究视频世界模型潜在空间中动作相关结构的影响因素，直接关联动作预测。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.06836v1",
          "title": "Think Like a Pilot: Fine-Grained Long-Horizon UAV Navigation",
          "summary": "Language-guided UAV agents must execute long-horizon semantic instructions while producing smooth, physically feasible continuous flight commands, yet existing Vision-Language Navigation (VLN) benchmarks typically use discrete or coarse actions and existing UAV Vision-Language-Action (VLA) tasks focus on short, atomic maneuvers. To address this gap in UAV task settings, we introduce \\textbf{FLIGHT}, a \\textbf{F}ine-grained \\textbf{L}ong-horizon \\textbf{I}nstruction-\\textbf{G}uided benchmark for \\textbf{H}ybrid UAV…",
          "summaryCn": "提出FLIGHT基准和FLIGHT VLA模型，用于细粒度长时长无人机导航。FLIGHT VLA采用异步架构，将低频流式VLM用于任务状态推理与高频扩散动作模型结合，实现实时飞行推理和精准控制，在封闭环评估中超越现有VLN和VLA基线。",
          "reasonCn": "提出面向无人机导航的VLA框架，结合视觉、语言指令和连续动作控制。",
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
          "heuristicScore": 60,
          "llmTotalScore": 60
        },
        {
          "id": "2606.07217v1",
          "title": "Robotic Policy Adaptation via Weight-Space Meta-Learning",
          "summary": "Vision-Language-Action (VLA) models are emerging as a promising paradigm for robotic manipulation, enabling general-purpose policies trained from large corpora of demonstrations and action labels. However, adapting these models to new tasks still typically requires task-specific demonstrations, action annotations, and additional fine-tuning, making deployment costly and difficult to scale. We propose WIZARD, a weight-space meta-learning framework that sidesteps task-specific fine-tuning by generating task-specific…",
          "summaryCn": "提出WIZARD，一种权重空间元学习框架，仅需语言指令和简短演示视频即可为冻结VLA策略预测适配权重，无需目标任务动作标签或测试时优化。在LIBERO和真实Franka机器人上，WIZARD显著提升性能，为VLA模型的快速适配提供高效方案。",
          "reasonCn": "提出在权重空间进行的元学习框架，为冻结的VLA策略生成任务特定的适配参数，实现快速适应。",
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
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.06904v1",
          "title": "ActionMap: Robot Policy Learning via Voxel Action Heatmap",
          "summary": "Vision-language-action (VLA) models have advanced rapidly across backbones, training recipes, and data scale, yet the action decoder, which converts the backbone's hidden state into a continuous control signal, has barely changed and remains a single-point predictor across the majority of current VLAs. Whether implemented via autoregressive token bins, L1 regression, or flow-matching denoising, the resulting decoder treats the action space as unstructured, leaving the geometric proximity of neighboring actions une…",
          "summaryCn": "提出ActionMap，一种体素热图动作头，可直接集成到VLA中。该热图头预测动作空间上的概率分布，利用动作间的空间结构，在LIBERO仿真和真实Franka操作中，性能超越原有解码器，且数据效率更高，表明动作表征是提升VLA性能的有效杠杆。",
          "reasonCn": "提出体素热图动作头，替换VLA中原有动作解码器，利用动作空间几何临近性提升性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.06904v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06904v1",
          "published": "2026-06-05T04:42:56Z",
          "updated": "2026-06-05T04:42:56Z",
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
          "heuristicScore": 56,
          "llmTotalScore": 56
        },
        {
          "id": "2606.07383v1",
          "title": "RhinoVLA Technical Report",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for robotic manipulation, but real-time deployment on edge hardware remains challenging. In this work, we identify VLM visual and context tokens as a major source of deployment latency: for GEMM-dominated projection operators, computation grows linearly with the number of input tokens when model dimensions are fixed. Motivated by this observation, we propose RhinoVLA, a deployment-oriented VLA model co-designed with the Huixi R1 edge SoC.",
          "summaryCn": "提出面向边缘部署的RhinoVLA模型，与Huixi R1芯片协同设计，通过令牌高效的主干和连续动作专家，以及跨机器人统一接口，实现高性能与实时控制。在Huixi R1上达到11.69 Hz端到端推理，性能与π0.5相当。",
          "reasonCn": "提出面向部署的VLA模型，实现高效的边缘推理。",
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
          "heuristicScore": 54,
          "llmTotalScore": 54
        },
        {
          "id": "2606.06832v1",
          "title": "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images",
          "summary": "Robots performing long-horizon visual manipulation observe high-dimensional images, but successful plans depend on action-relevant facts: what can be done now and what changes afterward. A useful planning representation should discard irrelevant visual details while preserving action applicability and effects. Classical task planners exploit this structure through symbolic operators with preconditions and effects, but obtaining such representations from raw visual experience remains challenging.",
          "summaryCn": "提出STRIPS-WM框架，从视觉转换中学习基于图像的命题STRIPS风格世界模型。通过诱导抽象转换图、学习隐含二元谓词和算子，蒸馏为视觉编码器，实现从新图像进行经典规划，适用于长时域视觉操作任务。",
          "reasonCn": "从图像学习用于动作规划的STRIPS风格世界模型，明确用于动作预测与规划。",
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
          "heuristicScore": 47,
          "llmTotalScore": 47
        },
        {
          "id": "2606.07723v1",
          "title": "VoLo: A Physical Orchestrator for Open-Vocabulary Long-Horizon Manipulation",
          "summary": "Open-vocabulary long-horizon manipulation requires robots to reason over flexible instructions and complex multi-object scenes while adaptively planning, executing, monitoring, and recovering from failures. We address these demands with a closed agent loop in which a VLM orchestrates heterogeneous robot capabilities as interruptible tools. Unlike in virtual AI agents, the timing of decisions, actions and tool calls is important in a physical world that does not pause for reasoning.",
          "summaryCn": "提出VoLoAgent，一个物理编排框架，将VLA/WAM作为可中断工具，由VLM在闭环中进行规划、监控与恢复。在RoboVoLo基准和真实机器人实验中，VoLoAgent显著超越单一VLA/VLM或工具系统，展示了长时域操作中整合世界模型与动作模型的优势。",
          "reasonCn": "将VLA和WAM作为可中断工具，通过VLM进行物理编排，实现开放词汇长时域操作。",
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
          "heuristicScore": 44,
          "llmTotalScore": 44
        },
        {
          "id": "2606.07386v1",
          "title": "Spline Policy: A Structured Representation for Robot Policies",
          "summary": "Modern imitation-learning policies for robot manipulation often represent actions as fixed-resolution action chunks, which are simple and effective but expose limited geometric and temporal structure before execution. This paper studies Spline Policy (SP), a structured representation that replaces action chunks with spline parameters while keeping the policy backbone unchanged. The predicted spline can be decoded as a compact continuous trajectory, queried at different temporal resolutions, constrained or edited i…",
          "summaryCn": "提出样条策略（SP），用样条参数替代动作块，提供紧凑连续轨迹，支持不同时间分辨率、参数空间约束和不确定性传播。在扩散、流匹配、Transformer和VLA等主轴上实例化，验证了其有效性和灵活性，为机器人策略提供结构化表示。",
          "reasonCn": "提出样条策略表示，可集成到VLA模型中，提升动作的结构化表达和可控性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.07386v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07386v1",
          "published": "2026-06-05T15:23:54Z",
          "updated": "2026-06-05T15:23:54Z",
          "authors": [
            "Mengze Tian",
            "Yiming Li",
            "Sichao Liu",
            "Auke Ijspeert",
            "Sylvain Calinon"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 32,
          "llmTotalScore": 32
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-10T01:15:42.136288+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作（WLA）模型，将世界建模和语言推理结合。采用自回归Transformer预测下一状态，包括语义意图和物理动态。在仿真和真实环境中验证，实现了40ms快速推理。",
          "reasonCn": "论文同时具备世界模型接口和语言推理能力，以视觉、文本和状态为输入，联合预测子任务、子目标图像和机器人动作，符合VLA和WAM标准。",
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
          "heuristicScore": 134,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "PiL-World是一个分块世界模型，用于VLA策略的闭环评估。它交替进行VLA推理和世界模型预测，无需实际机器人执行。通过条件视频生成和联合多视角预测提高保真度。",
          "reasonCn": "提出专门用于VLA策略闭环评估的世界模型，根据当前观察和动作序列生成多视角未来观察，直接支持动作评估。",
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
          "heuristicScore": 115,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "WorldFly针对无人机导航，利用世界模型“想象”未来状态以解决部分可观测性问题。采用双分支流匹配同时预测视频和动作，在城市场景中性能优于基线。",
          "reasonCn": "提出基于世界模型的VLA框架，通过双分支耦合流匹配联合生成未来视频预测和导航动作，明确结合了世界模型和VLA。",
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
          "heuristicScore": 91,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "论文简化VLA动作生成，通过调整训练时噪声分布实现一步去噪。在LIBERO和真实机器人任务中，一步策略性能匹配多步解码，显著提高推理速度。",
          "reasonCn": "聚焦于VLA模型的动作生成，提出一步扩散方案，直接从高维条件预测低维动作，优化VLA策略效率。",
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
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05645v2",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape future world evolution, rather than merely mapping observations to actions. However, most end-to-end methods rely on direct state-to-action imitation, while existing world models often remain weakly aligned with downstream policy generation. We introduce Discrete-WAM, a unified discrete vision-action world-policy framework that represents visual observations, future states, high-level decisions, and ego actions within a shared token space.",
          "summaryCn": "Discrete-WAM在共享离散标记空间中联合建模世界和策略。通过多任务预训练，动作条件预测直接支持规划，实现可控未来生成与高效并行解码。",
          "reasonCn": "提出统一离散视觉-动作世界-策略框架，联合训练世界建模和动作生成，将动作条件未来预测直接用于策略，符合WAM核心。",
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
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "TempoVLA让VLA模型具备可调执行速度的能力，通过变速度轨迹增强和模型条件化实现。仿真和真实实验显示灵活的速度控制，且数据增强提升了默认性能。",
          "reasonCn": "提出速度可控的VLA策略，通过数据增强和条件机制控制动作速度，不涉及世界模型。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "MPCoT为VLA引入奖励引导的多路径潜在推理，在推理时细化假设并聚合。在LIBERO和CALVIN上提升长程序列性能，且不增加推理令牌开销。",
          "reasonCn": "通过多路径潜在推理提高VLA在长程任务中的性能，维持动作接口，无推理延迟，属于VLA改进。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "AffordanceVLA通过逐步建模“哪个物体”、“何处交互”、“如何操作”的affordance线索，构建精确的感知-动作映射。采用混合专家架构和三阶段训练，克服结构不匹配。",
          "reasonCn": "提出引入affordance预测作为中间表示的VLA模型，增强视觉-语言-动作映射，明确为VLA方法。",
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
          "heuristicScore": 71,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05699v1",
          "title": "DexFuture: Hierarchical Future-State Visuomotor Targeting for Bimanual Dexterous Tool Use",
          "summary": "Bimanual dexterous tool use remains challenging for robots due to high-dimensional hand configurations and complex hand-tool-object dynamics and contact. Most existing control policies depend on future configuration references provided from demonstrations, while future action-conditioned world models require slow online planning over high-dimensional action sequences. A significant challenge is generating a dynamically consistent future reference trajectory without relying on privileged states from demonstrations…",
          "summaryCn": "DexFuture针对双手灵巧工具使用，高层预测未来状态参考轨迹，低层跟踪这些目标执行动作。在OakInk2任务上达到90%的oracle性能，运行频率60Hz。",
          "reasonCn": "提出分层系统，高层使用世界模型预测未来目标状态，低层据此生成动作，明确将世界模型用于动作生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.05699v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05699v1",
          "published": "2026-06-04T04:37:23Z",
          "updated": "2026-06-04T04:37:23Z",
          "authors": [
            "Runfa Blark Li",
            "Kuang-Ting Tu",
            "Nikola Raicevic",
            "Dwait Bhatt",
            "Xinshuang Liu",
            "Keito Suzuki",
            "Ki Myung Brian Lee",
            "Nikolay Atanasov",
            "Truong Nguyen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 50,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06014v1",
          "title": "PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models",
          "summary": "Latent world models (LWMs) have strengthened end-to-end autonomous driving by forecasting compact scene dynamics for downstream planning. However, existing LWM-based planners usually generate trajectories directly from entangled latent representations. This compact latent-to-planner pathway lacks explicit modeling of risk, drivability, and diverse style preferences, making driving-style dynamics difficult to supervise, inspect, or modulate before a final trajectory is selected.",
          "summaryCn": "PLAN-S在潜世界模型中引入风格动力学，解码语义代价图指导规划。在nuScenes和NAVSIM上验证，降低碰撞率，提升预测驾驶员分数。",
          "reasonCn": "提出用于自动驾驶的潜世界模型，从潜表示解码风格条件代价图，用于下游规划，核心是世界模型用于动作规划。",
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
          "heuristicScore": 34,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05960v1",
          "title": "Towards a Data Flywheel for Embodied Intelligence in Logistics",
          "summary": "Embodied intelligence is moving from laboratory demonstrations toward industrial deployment, with the logistics industry serving as a key application scenario. Learning-based policies offer a promising path beyond traditional perception-planning-control pipelines, but their scalability depends on how embodied data can be collected, organized, and reused. This research studies a data-centric framework for industrial embodied intelligence by constructing a logistics data flywheel.",
          "summaryCn": "该研究构建物流数据飞轮，利用世界模型为长尾包裹操作生成监督。WM-DAgger框架合成分布外恢复数据，提升模仿学习的鲁棒性。",
          "reasonCn": "提出基于世界模型的数据聚合框架WM-DAgger，利用世界模型生成恢复数据用于鲁棒模仿学习，世界模型直接用于动作策略改进。",
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
          "heuristicScore": 30,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-06-10T01:14:16.251744+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "提出Flash-WAM框架，通过模态感知一致性蒸馏将世界-行动模型的推理压缩至单步，实现实时控制。在RoboTwin 2.0上，将延迟从8.1秒降至348毫秒，速度提升23倍，并保持任务成功率。该方法为实时具身智能应用提供了高效的世界模型。",
          "reasonCn": "论文提出了一种面向世界-行动模型的模态感知蒸馏方法，直接处理视频和机器人动作的联合生成，符合WAM定义。",
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
          "heuristicScore": 110,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "OSCAR是一个精确的动作驱动视频世界模型，能跨机器人形态泛化，用于评估策略。通过大规模标准化数据流程和2D运动骨架表示，模型在动作跟随和外观质量上显著提升。在RoboArena上的虚拟评估与真实世界高度相关，为机器人策略评估开辟了道路。",
          "reasonCn": "论文提出了一种行动条件的视频世界模型，用于机器人策略评估，符合WAM核心定义。",
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
          "heuristicScore": 84,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with severe radial distortion and local gripper-centric perspectives, are out-of-distribution for pretrained VLMs; and human-collected trajectories frequently violate kinematic limits, incur collisions, or e…",
          "summaryCn": "VISTA框架通过UMI-VQA数据集、物理验证和两阶段共训练，弥合了UMI数据与VLA训练之间的视觉畸变和动作可行性差距。实验表明，该方法提升了策略性能并保证了物理合理性。为大规模真实数据训练VLA提供了可行方案。",
          "reasonCn": "论文聚焦于利用UMI数据训练VLA模型，涉及视觉语言指令与动作预测，符合VLA标准。",
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
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "提出3DThinking引导的共训练框架，将3D几何感知和空间推理解耦注入VLA模型，无需推理文本生成。在模拟和真实机器人实验中，提升操作成功率，展现了隐式3D推理对VLA的增益。",
          "reasonCn": "论文旨在使VLA模型获得3D空间推理能力，通过3D几何感知和推理注入，直接改进动作预测，符合VLA定义。",
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
          "heuristicScore": 78,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "ForesightFlow是一种自引导流匹配策略，通过解耦优势加权流匹配和一步边界估计，无需外部批评家即可实现策略改进。在BEHAVIOR-1K和真实双臂任务中，显著优于基线，提升了VLA策略的部署性能。",
          "reasonCn": "论文针对VLA策略改进，利用条件流匹配进行动作生成，涉及视觉条件与语言指令，符合VLA标准。",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04907v1",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "WAM-Nav利用共享扩散Transformer和不对称联合扩散，同时生成长时序动作和短时序视觉预测，实现高效、有先见的导航。在Image-Goal、Point-Goal等多种任务上优于现有方法，提升了复杂环境下的碰撞避免和轨迹平滑性。",
          "reasonCn": "论文提出潜在世界-行动模型，结合动作生成和视觉预测，用于具身视觉导航，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04907v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04907v1",
          "published": "2026-06-03T14:05:19Z",
          "updated": "2026-06-03T14:05:19Z",
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
          "heuristicScore": 59,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics. We present FlowPRO, a reward-free offline reinforced fine-tuning framework for flow-matching VLAs.",
          "summaryCn": "FlowPRO框架通过RPRO偏好优化目标和干预-回滚数据收集，无需奖励设计即可微调VLA策略。在四项双臂长时序任务中取得最高成功率，解决了真实机器人部署中的挑战。",
          "reasonCn": "论文提出针对流匹配VLA模型的无奖励强化微调方法，直接优化机器人动作策略，符合VLA标准。",
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
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04825v1",
          "title": "HapTile: A Haptic-Informed Vision-Tactile-Language-Action Dataset for Contact-Rich Imitation Learning",
          "summary": "Despite the importance of tactile sensing for reliable manipulation, most existing Vision-Language-Action (VLA) datasets remain vision-only, and those that do incorporate tactile information typically lack the joint combination of task diversity, language conditioning, and action trajectories. Furthermore, existing teleoperation pipelines rarely provide haptic feedback to the operator, despite its established role in demonstration quality and manipulation stability. In this work, we present HapTile, a contact-grou…",
          "summaryCn": "HapTile是一个接触丰富的视觉-触觉-语言-动作数据集，通过集成触觉反馈的遥操作平台收集，包含多种日常操作任务。为触觉驱动的VLA策略训练提供了基础，推动可靠操纵研究。",
          "reasonCn": "数据集结合触觉反馈，为接触丰富的模仿学习提供视觉-语言-动作轨迹，符合VLA框架。",
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
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05015v1",
          "title": "Generalization of World Models under Environmental Variability for Vision-based Quadrotor Navigation",
          "summary": "World models, learned generative models that predict how an environment evolves, have become a promising tool for sample-efficient robot learning. Yet how robust they are to environmental variability remains poorly understood. To address this, we conduct a systematic study using vision-based quadrotor navigation as a testbed problem, training DreamerV3-based world models under varying levels of environmental randomness and evaluating them across all levels through cross-environment validation, spanning both Self-S…",
          "summaryCn": "在视觉四旋翼导航中，研究了世界模型对环境变化的鲁棒性，发现SSL预训练阶段的泛化能力是sim-to-real转移的关键预测因素。在真实四旋翼上成功部署，甚至在仅2.5秒真实输入后完全依靠想象飞行12米，验证了世界模型在现实中的可行性。",
          "reasonCn": "论文系统研究了基于世界模型的四旋翼导航泛化性，使用DreamerV3进行动作决策，符合WAM范畴。",
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
          "heuristicScore": 44,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04534v1",
          "title": "MAD: Mapping-Aware World Models for Agile Quadrotor Flight",
          "summary": "Agile quadrotor flight in cluttered scenes requires more than a reactive mapping from a depth image to a control command: the vehicle must remember which regions have been observed, infer nearby occupied space, and act under partial visibility and tight latency. In this paper, we present Mapping-Aware Dreamer (MAD), a geometry-aware world model for vision-based quadrotor flight. Instead of using raw-image reconstruction as the main self-supervised objective, MAD learns recurrent latent dynamics that reconstruct ro…",
          "summaryCn": "MAD学习以占用和可视性地图为重建目标的隐式世界模型，为避障提供几何感知表示。在视觉导航和竞速任务中，基于MAD的策略成功率更高，飞行更快，并实现了真实四旋翼部署。",
          "reasonCn": "论文提出映射感知的世界模型，用于四旋翼敏捷飞行中的动作规划，符合WAM定义。",
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
          "heuristicScore": 29,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-10T01:12:50.341373+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "提出GeoSem-WAM，通过引入未来几何与语义预测作为辅助任务，增强世界动作模型的潜在表征。无需测试时未来预测显式展开，在保持推理效率的同时提升动作预测准确性。适用于具身决策场景，展现出良好的结构理解与泛化能力。",
          "reasonCn": "以世界动作模型为核心，利用几何语义监督增强世界模型，用于动作预测，显著提升场景理解与鲁棒性。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "OmniDreams是一个基于扩散模型的基础生成式世界模型，能够根据动作条件实时生成自动驾驶场景的视频。该模型在闭环仿真中作为反应式环境，与策略模型交互，用于自主驾驶策略的安全评估，能够泛化到极端天气等长尾场景。提供可扩展的、无需重建的神经仿真器，价值显著。",
          "reasonCn": "以世界模型为核心，根据驾驶动作自回归生成视频，并用于自动驾驶闭环仿真，属于动作条件的未来预测，可用于策略评估。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from…",
          "summaryCn": "TTT-VLA框架通过在测试时利用交互数据优化潜在提示，以自监督方式适应环境分布偏移，无需修改策略模型本身。该方法提升了在单具身和多具身场景下的任务成功率，分析表明主要是通过纠正少量关键决策实现的。提供了一种实用高效的VLA模型部署适应路径。",
          "reasonCn": "提出了测试时训练框架以优化潜提示，直接针对VLA模型的分布偏移问题，提升策略成功率。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "CLAW是一个自监督框架，通过对抗潜正则化从无动作视频中同时学习世界模型和连续潜动作表征。该潜动作世界模型支持从观察中模仿学习和目标导向规划，能够推理出如何通过推断的动作实现环境转换，展现出语义有意义的潜动作。",
          "reasonCn": "提出从无动作视频中学习连续潜动作世界模型，并直接用于模仿学习和目标导向规划，符合WAM标准。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "PHASER是一种架构无关的持续学习框架，通过阶段中心容量分配和多模态干扰路由，确保VLA模型在学习新技能时保留旧技能。它集成了自动阶段边界检测，在LIBERO基准上提升了多个VLA模型的持续学习性能。",
          "reasonCn": "针对VLA模型持续学习中的灾难性遗忘问题，提出阶段感知经验重放方法，直接服务于VLA模型。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent f…",
          "summaryCn": "该工作针对部分可观测威胁模型下的VLA机器人系统，提出两阶段攻击框架，先定位注意力关键区域再优化补丁。通过破坏语义对齐和增加动作曲率，在仿真和真实环境中显著降低了VLA的任务成功率，揭示了VLA的脆弱性。",
          "reasonCn": "研究针对机器人VLA模型的对抗性补丁攻击，分析VLA的鲁棒性，属于VLA安全方向。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.04046v1",
          "title": "Dive into the Scene: Breaking the Perceptual Bottleneck in Vision-Language Decision Making via Focus Plan Generation",
          "summary": "In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools with different benefits: VLMs are better at long-term planning, while VLAs are better at reactive control. However, their performance is limited by the same perceptual bottleneck: visual hallucinations arise due to the models' inability to distinguish task-relevant objects from distractors. In principle, accurate identification and focus o…",
          "summaryCn": "SceneDiver提出了一种粗到细的焦点计划生成方法，先构建场景图，再迭代分解任务，让VLM进行深入理解，并将聚焦能力蒸馏到VLA中。在标准具身AI基准上，显著降低了视觉幻觉，提升了VLA的决策性能。",
          "reasonCn": "通过从场景图分解任务，生成焦点计划以减少视觉幻觉，并蒸馏到VLA中，提升具身决策表现。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout.",
          "summaryCn": "GeoAlign在VLA模型中引入状态引导的空间对齐架构，通过几何后训练和本体状态查询几何特征，生成紧凑的动作指引。在LIBERO、SimplerEnv及真实世界ALOHA任务中取得高成功率，证明了几何信息对精确操作的必要性。",
          "reasonCn": "为VLA模型引入几何感知空间对齐，利用深度图后训练几何分支，提升操作任务精度。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03784v2",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data.",
          "summaryCn": "该工作构建了大规模具身CoT数据集，发现有效的CoT应落地到具体动作指导。提出ERVLA，训练时吸收推理痕迹，推理时不需CoT解码，直接预测动作，从而避免自回归不稳定，在LIBERO-Plus上取得最优性能。",
          "reasonCn": "重新审视具身链式思考在VLA中的应用，提出用CoT作为表征监督而非推理前缀，提升可扩展性。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy.",
          "summaryCn": "OpenEAI-Platform是一个完全开源平台，包括低成本的6+1自由度机器人臂和基于Qwen3-VL-4B的VLA模型。该VLA模型通过两阶段训练，仅用开源数据即达到与大模型pi0相当的成功率，旨在推动可复现研究。",
          "reasonCn": "提供了一个包含VLA模型的开源具身AI平台，模型处理视觉和语言指令并输出动作，属于VLA范畴。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03252v1",
          "title": "AirDreamer: Generalist Drone Navigation with World Models",
          "summary": "Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot's capabilities. Previous methods, which assume the same environment configuration, often rely heavily on human-designed perception pipelines and predefined rules to guide the robot toward the target. This process is environment-dependent and generalizes poorly across environments.",
          "summaryCn": "AirDreamer框架利用世界模型对环境进行表征，并在其基础上使用强化学习策略导航。通过稀疏奖励设计避免局部最优，在复杂环境中展现出涌现能力，并实现了有效的从仿真到真实迁移，适用于通用无人机导航。",
          "reasonCn": "基于世界模型的环境理解，结合强化学习策略进行无人机导航，世界模型直接用于动作决策。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03003v1",
          "title": "Exact equivariance, kept through training, buys zero-shot generalisation across the symmetry group",
          "summary": "A latent world model built from an equivariant encoder $E$ and an equivariant predictor $f$ inherits a provable symmetry of its training loss: when the world's dynamics genuinely carries a group $G$ acting on latents by an orthogonal representation $ρ(g)$, the one-step prediction relMSE is exactly invariant across the whole group, so fitting the dynamics on a restricted slice of orientations mathematically determines it on the entire orbit (jǔ yī fǎn sān). We verify this end-to-end at laptop scale (CPU/MPS, fully…",
          "summaryCn": "该工作表明，当世界模型具有等变编码器和预测器时，训练损失在群上是等变的，从而只需在部分方向上拟合，即可泛化到整个轨道。实验证明等变世界模型在闭环控制中实现了零样本泛化，且模型更小。",
          "reasonCn": "该方法构建等变世界模型并用于控制，明确利用世界模型进行规划，符合WAM。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions.",
          "summaryCn": "Donk是一个统一的视频-动作去噪模型，能够根据语言和初始观测生成灵巧手的未来视频和动作轨迹。该模型既可产生动作策略，也可作为数据引擎，在保持视频质量的同时提升轨迹精度，实现动作与视频的联合生成。",
          "reasonCn": "该工作提出联合视频-动作去噪模型，作为世界动作模型用于灵巧手动作生成，明确涉及动作预测。",
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
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-10T01:11:03.994232+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM是一种世界动作模型，通过事件驱动的VLA预训练将视频-动作学习从固定块优化转变为语义事件对齐。它支持事件模式和统一模式两种推理方式，能够灵活生成可变长度的动作块或固定长度的动作，有望提升机器人策略的泛化能力。",
          "reasonCn": "提出事件驱动的世界动作模型，同时进行视觉-语言-动作预训练，兼顾世界模型与VLA。",
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
          "summaryCn": "AHEAD框架通过在冻结的VLA模型上添加一个轻量级的运动感知世界模型，预测未来时间步的视觉标记，从而弥补静态假设与动态场景之间的差距。该方法在动态抓取任务中大幅提高了成功率，仅增加少量参数便显著提升了VLA模型的实时响应能力。",
          "reasonCn": "在冻结的VLA上叠加运动感知隐式世界模型，预测未来视觉特征以改进动态场景下的动作执行。",
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
          "summaryCn": "EG-GRPO框架针对VLA无人机导航，利用专家引导的组相对策略优化，有效缓解了数据稀缺和强化学习探索困难的问题。在复杂意图对齐任务上，该方法将成功率提升至SFT基线的2.13倍，显著改善了指令跟随精度。",
          "reasonCn": "提出结合专家引导的强化学习框架，用于微调VLA无人机导航模型，直接处理视觉、指令与动作。",
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
          "summaryCn": "李扩散Actor (LDA) 通过在切空间上进行扩散和分数匹配，确保了姿态表示满足几何约束和坐标等变性。在CALVIN和真实机器人任务上，该方法提升了操纵性能，并生成更平滑的运动轨迹。",
          "reasonCn": "直接在SE(3)流形上构建扩散VLA策略，纠正了以往方法将姿态视为欧氏向量的误差。",
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
          "summaryCn": "S2框架通过重新标注轨迹为更细粒度的语言指令并约束视觉证据范围，减少VLA学习中的歧义。该方法在不增加标注的情况下，显著提升了在干扰物和外观变化下的泛化性能。",
          "reasonCn": "提出通过精细化语言指导和视觉证据预算来提升VLA模型泛化能力的框架。",
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
          "summaryCn": "Cosmos 3采用混合Transformer架构，支持任意输入输出模态的组合，实现了视觉语言模型、视频生成器、世界模拟器和世界动作模型的统一。它在多项理解和生成任务上达到最佳性能，并作为策略模型在RoboArena排名第一。",
          "reasonCn": "Cosmos 3是统一处理语言、图像、视频、音频和动作序列的全模态世界模型，明确用于具身智能。",
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
          "summaryCn": "AURA-Mem通过动作驱动的门控机制，仅在与动作相关的观测上写入记忆，大幅降低了长程任务中的写入次数和内存占用。在LIBERO-Long基准上，该方法以固定的4KB状态实现了与线性增长的KV缓存相当的性能。",
          "reasonCn": "提出一种恒定内存的循环门控记忆模块，用于扩展VLA模型的长期推理能力。",
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
          "summaryCn": "SeeTraceAct利用单次演示视频引导VLA策略，通过预测未来末端执行器轨迹的可见性来增强空间关联。在跨具身场景下，该方法在仿真和真实机器人任务中均取得了领先的成功率。",
          "reasonCn": "SeeTraceAct是一种基于演示条件的VLA框架，通过预测可见性感知的末端轨迹实现精准空间定位。",
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
          "summaryCn": "MRO-GWM利用物体中心高斯表示和时空Transformer架构，从多视角重建中学习刚体物体的动作条件动力学。该模型可用于非抓握式操作的模型预测控制，在仿真中展现了良好的预测性能。",
          "reasonCn": "提出物体中心的高斯世界模型，直接学习动作条件刚体动力学，用于模型预测控制。",
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
          "summaryCn": "该方法通过相机运动估计将第一人称步行视频转换为适合地面移动机器人的动作表示，并结合机器人数据集联合训练VLA模型。在果实搜索导航任务中，混合训练显著提高了语言理解和动作生成的鲁棒性。",
          "reasonCn": "将人类行走视频转换为移动机器人模仿学习数据，并协同训练VLA模型以提升导航能力。",
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
          "id": "2606.01626v1",
          "title": "IMWM: Intuition Models Complement World Models for Latent Planning",
          "summary": "Planning with a learned latent world model is a promising route to control from raw pixels, but a strong world model alone is not enough. We show this experimentally: even with a perfect world model (operationalized by replacing the learned forward predictor with an idealized rollout of the true environment dynamics), a finite-budget sample-based planner still fails on some tasks, indicating that the bottleneck can lie in search rather than in world-model accuracy. Motivated by this gap, we propose IMWM (Intuition…",
          "summaryCn": "IMWM在隐式世界中引入从示范中学习的直觉模型，通过检索初始化、混合代价和可靠性门控来改进模型预测控制中的搜索效率。在四个基于像素的目标达成任务中，该方法显著提高了成功率，特别是在长程任务中表现突出。",
          "reasonCn": "提出直觉模型与世界模型协作的隐式规划方法，用于像素级控制任务，明确涉及动作规划。",
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
          "summaryCn": "该研究提出世界-任务因素化框架，将环境物理特性与任务逻辑解耦，利用可微分的AICON世界模型将代价梯度传播至执行器。结合紧凑的学习策略，实现了符合物理规律且泛化能力强的机器人控制。",
          "reasonCn": "将世界模型与任务因素化分离，结合可微分的解析世界模型用于机器人的梯度传播与策略学习。",
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
          "summaryCn": "Unified Driving Tokens通过表征引导和几何增强学习离散视觉标记，同时支持世界模型和高性能规划。在NAVSIM上的实验表明，该tokenizer能够保持较高的重建保真度，并提升生成质量与规划性能。",
          "reasonCn": "提出用于驾驶世界模型与规划的离散tokenizer，直接支持视觉输入和规划输出。",
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
          "summaryCn": "TERRA提出一种动作条件隐世界模型的统一架构，并形式化了跨领域转移的条件，可为驾驶、机器人操作等不同领域建立共享表征。理论上推导了转移误差界限，并通过实证验证了跨领域世界模型的可迁移性。",
          "reasonCn": "研究跨结构域的动作条件隐世界模型转移，框架明确用于动作预测。",
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
      "generatedAt": "2026-06-10T01:08:28.037470+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "提出模型无关的诊断框架，从行为回放和稀疏自编码器特征分析比较VLA和WAM。在LIBERO和RoboTwin2.0上评估，揭示成功指标外的行为差异，表明顺序WAM具有更清晰的预测结构。",
          "reasonCn": "论文同时涉及VLA和WAM的评估与诊断，属于两者交叉研究。",
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
          "summaryCn": "提出针对低成本农业操作臂的VLA模型推理线程优化，通过优化RTAC算法的线程实现降低端到端延迟，提升控制稳定性。在蒜头和核桃操作任务中验证了优化效果。",
          "reasonCn": "论文旨在优化VLA模型推理速度，直接涉及视觉-语言-动作模型在机器人操作中的应用。",
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
          "summaryCn": "提出统一视频-动作世界模型τ0-WM，基于视频扩散骨干，联合策略学习、视频预测与动作评估。在长时域精细操作任务上表现优于基线，实现动作采样、排序与修正。",
          "reasonCn": "论文核心是世界模型，明确用于动作预测、规划与控制，符合WAM定义。",
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
          "summaryCn": "提出MPVI框架，将基于模型的运动规划与VLA交错结合，以无额外数据提升移动操作长时域任务的鲁棒性。在BEHAVIOR-1K基准上任务进度提升113%。",
          "reasonCn": "论文聚焦于提升VLA模型在长时域任务中的鲁棒性，直接涉及VLA。",
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
          "summaryCn": "提出LEGS混合模拟器，合成遥操作Free的VLA微调数据，用于人形机器人运动操作。在Unitree G1上训练的策略匹敌甚至超越遥操作演示训练。",
          "reasonCn": "论文旨在通过合成数据微调VLA策略，属于VLA训练方法研究。",
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
          "summaryCn": "提出统一VLA框架OneVLA，集成导航与操作任务，通过统一动作头和渐进式训练策略实现领域间正向迁移。在仿真和真实世界均达SOTA。",
          "reasonCn": "论文提出统一的VLA模型，处理导航和操作任务，符合VLA定义。",
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
          "summaryCn": "提出ImagineUAV框架，通过级联世界-动作建模，利用潜在视频扩散生成未来观测并提取动作，结合动力学规划实现无人机视觉语言导航。在基准和实际飞行中表现优异。",
          "reasonCn": "论文使用世界模型驱动动作推理，同时满足VLA和WAM特征，属于两者结合。",
          "lane": "BOTH",
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
          "id": "2606.01151v1",
          "title": "Lagrangian Perturbation Diffusion Steering: Latent Reinforcement Learning for Generative Policies",
          "summary": "Behavior cloning with high-capacity generative policies achieves strong imitation performance, but is often limited by demonstration coverage and distribution shift. Direct reinforcement learning fine-tuning can improve performance, but updating large action decoders is frequently unstable and sample inefficient. We propose Lagrangian Perturbation Diffusion Steering (LP-DS), a lightweight adaptation method that improves a frozen generative policy by learning a compact noise-space perturbation before decoding.",
          "summaryCn": "提出拉格朗日扰动扩散引导方法，通过优化噪声空间扰动对冻结生成式策略进行轻量适应，提升仿制、运动与操控性能，并已扩展至大规模VLA模型。",
          "reasonCn": "该方法被应用于大规模VLA模型，旨在提升VLA性能，符合VLA相关研究。",
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

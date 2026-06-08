window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-08T01:51:03.787700+00:00",
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
  "currentDateKey": "20260608",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260608",
      "dateLabel": "2026-06-08",
      "generatedAt": "2026-06-08T01:51:03.787666+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作(WLA)模型，统一世界建模、语言推理与动作合成，采用自回归Transformer预测下一状态，结合世界专家与动作专家。该模型支持隐式世界预测影响动作生成，并可实现测试时缩放，在模拟和真实环境验证了有效性。",
          "reasonCn": "该论文明确提出了结合WAM和VLA的新模型，是VLA和WAM融合方向的代表性工作。",
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
          "heuristicScore": 102,
          "llmTotalScore": 102
        },
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "提出WALL-WM，以语义事件为单元进行事件接地的VLA预训练，解决块中心优化导致的粒度不匹配问题。支持事件模式和统一模式两种推理，在多种行为、场景和任务结构上实现可扩展学习。",
          "reasonCn": "该论文是WAM与VLA结合的创新方法，通过事件级学习提升一致性。",
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
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "提出LARA框架，通过表示对齐联合优化潜在动作模型(LAM)和VLA，让LAM学习动作轨迹以过滤虚假视觉变化，同时VLA受前向动力学正则化减少幻觉。框架支持预训练、后训练增强和LAM精炼，在多个基准上取得提升。",
          "reasonCn": "该论文聚焦VLA模型的改进，利用潜在动作模型提供额外监督，属于VLA核心技术。",
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
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "介绍OmniDreams，一个基于Cosmos扩散模型的自回归动作条件视频生成世界模型，用于自动驾驶闭环仿真。通过中后训练21k小时驾驶场景，合成复杂未见现象，作为响应式环境进行安全评估。",
          "reasonCn": "该论文提出了一个动作条件世界模型，属于WAM范畴，用于自动驾驶仿真。",
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
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "提出WorldFly，一种基于世界模型的VLA框架，利用双分支耦合流匹配同时生成未来视频预测和导航动作，通过空间想象显式引导策略。在城市场景导航基准上优于基线，特别在未见环境中。",
          "reasonCn": "该论文将世界模型显式集成到VLA中，用于无人机导航，属于VLA与WAM结合。",
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
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "提出GeoSem-WAM，引入几何和语义监督的结构化世界建模框架，通过未来RGB、几何和语义预测分支增强潜在表示，无需推理时显式未来 rollout。实验证明结构化世界监督持续提升动作预测、场景理解和鲁棒性。",
          "reasonCn": "该论文致力于改进世界动作模型(WAM)的表示学习，是WAM方向的提升。",
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
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "论证VLA动作生成中单步去噪的有效性，通过偏向训练时间分布至高噪声状态实现单步动作生成。在LIBERO基准和真实机器人上，单步策略匹配或超过多步解码，性能达95.6%。",
          "reasonCn": "该论文聚焦VLA模型的动作生成效率，简化扩散过程，是VLA模型加速的重要探索。",
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
          "heuristicScore": 71,
          "llmTotalScore": 71
        },
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "提出Flash-WAM，一种模态感知的步数蒸馏框架，解决世界动作模型中视频与动作流噪声分布不对称问题。将推理压缩到单步，加速23倍，实现实时控制，同时保持任务性能。",
          "reasonCn": "该论文专注于WAM的推理加速，是WAM落地应用的关键技术。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "提出PHASER，一种针对VLA模型的持续学习框架，通过相位中心容量分配和多模态干扰路由防止灾难性遗忘。集成Auto-PC自动提取时间边界，在LIBERO持续学习套件上显著优于均匀重放。",
          "reasonCn": "该论文解决VLA持续学习中的遗忘问题，是VLA持续适应的重要方向。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "提出TempoVLA，使VLA模型支持速度可控执行。通过变速轨迹增强和速度条件注入，实现快速和慢速两种模式，同时提升默认性能。与大模型合作进一步改进。",
          "reasonCn": "该论文为VLA模型添加速度控制能力，扩展了VLA的灵活性。",
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
          "heuristicScore": 66,
          "llmTotalScore": 66
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "提出MPCoT，奖励引导的多路径潜在推理框架，在动作解码前初始化多条假设并精炼，增加推理深度而不增加推理 token。在LIBERO和CALVIN上提升长程表现。",
          "reasonCn": "该论文为VLA模型提供测试时推理缩放方法，提升长程任务性能。",
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
          "heuristicScore": 66,
          "llmTotalScore": 66
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "提出AffordanceVLA，引入结构化可供性预测作为中间表示，包括Which2Act、Where2Act和How2Act三个组件，建立更精确的感知-行动映射。采用Mixture-of-Transformer架构和三阶段训练。",
          "reasonCn": "该论文通过可供性建模增强VLA的感知与行动对齐，是VLA感知能力的提升。",
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
          "heuristicScore": 66,
          "llmTotalScore": 66
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "提出3DThinkVLA，通过潜在3D几何感知和3D推理蒸馏为VLA模型注入3D空间先验。解耦几何和推理能力，在不改变VLM主干的情况下隐式进行3D推理，提升动作预测。",
          "reasonCn": "该论文为VLA模型加入3D先验，提高空间推理能力，属VLA能力拓展。",
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
          "heuristicScore": 65,
          "llmTotalScore": 65
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "提出Coarse-to-Control，在动作 token 空间中引入规划，先生成粗粒度的动作 token 计划，再解码可执行动作。共享离散动作词汇，在长程多阶段任务中效果提升显著。",
          "reasonCn": "该论文为VLA模型添加显式规划步骤，增强长程任务能力。",
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
          "heuristicScore": 64,
          "llmTotalScore": 64
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "提出AdaWAM，自适应多模态推理的世界动作模型，通过轻量动态路由器在任务执行中自动触发文本或视觉推理。在模拟和真实环境中提高推理效率并超越最新策略。",
          "reasonCn": "该论文是世界动作模型的自适应推理改进，是WAM的智能推理方法。",
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
          "heuristicScore": 64,
          "llmTotalScore": 64
        },
        {
          "id": "2606.06556v1",
          "title": "Robots Need More than VLA and World Models",
          "summary": "Generalist robot intelligence is often framed as a policy-scaling problem: collect more robot demonstrations, train larger Vision-Language-Action (VLA) models, and expect broader generalisation. In this position paper, we argue that this framing is incomplete. The central bottleneck is not only policy learning, but the absence of mechanisms that convert the world's abundant unstructured behavioural data into grounded robot supervision.",
          "summaryCn": "立场论文，指出机器人智能不仅需要VLA和世界模型，还需四个缺失组件：数据接口、实施例接口、世界模型接口和奖励接口。提出研究议程，利用非结构化行为数据。",
          "reasonCn": "该论文直接讨论VLA和世界模型的局限性及下一步方向，对主线有指导意义。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.06556v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06556v1",
          "published": "2026-06-04T10:43:14Z",
          "updated": "2026-06-04T10:43:14Z",
          "authors": [
            "Elis Karcini",
            "Faisal Mehrban",
            "Quang Nguyen",
            "Mac Schwager",
            "Arash Ajoudani",
            "Cesar Cadena",
            "Jan Peters",
            "Marco Hutter",
            "Haitham Bou-Ammar"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 63,
          "llmTotalScore": 63
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "提出PiL-World，用于VLA策略在环评估的块级世界模型。交替进行VLA推理和世界模型预测，实现闭环评估。利用失败轨迹学习，提升虚拟评估的保真度。",
          "reasonCn": "该论文为VLA提供世界模型评估环境，是VLA与WAM的协作。",
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
          "heuristicScore": 63,
          "llmTotalScore": 63
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "提出ForesightFlow，自引导流匹配策略，为每个动作块增加成功潜力轨迹，实现最佳K推理。解耦优势加权流匹配，解决策略提升与价值校准的监督冲突。",
          "reasonCn": "该论文为VLA策略提升提出自引导方法，无需额外价值网络。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "提出OSCAR，泛化多实施例的动作条件视频世界模型，通过标准化数据管道和2D运动骨架渲染统一条件。用于机器人策略评估，与真实评估高度相关。",
          "reasonCn": "该论文是动作条件世界模型，支持策略评估，属于WAM方向。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operat…",
          "summaryCn": "指出扩散VLA策略中的欧几里得谬误，提出Lie Diffuser Actor (LDA)，在SE(3)上本质运算，消除流形漂移，保证等变性和测地线最优。在CALVIN和真实机器人上提升任务完成度。",
          "reasonCn": "该论文修正VLA动作空间的几何表示错误，是VLA动作建模的重要改进。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        }
      ]
    },
    {
      "dateKey": "20260607",
      "dateLabel": "2026-06-07",
      "generatedAt": "2026-06-08T01:48:51.286260+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作模型（WLA），使用自回归Transformer骨干和世界专家训练，在一次推理中联合预测文本子任务、子目标图像和动作，实现40 ms快速推理，并在模拟和真实环境中展示有效性。",
          "reasonCn": "直接提出统一世界、语言、动作的WLA模型，连接WAM和VLA。",
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
          "heuristicScore": 102,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM通过事件级对齐和聚类平衡采样，将世界动作建模与VLA预训练相结合，支持变长动作块和统一推理，提升感知、语言与动作的粒度一致性。",
          "reasonCn": "以语义事件为单元联合训练世界动作模型和VLA，提出事件驱动新范式。",
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
          "heuristicScore": 99,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "LARA通过表示对齐联合训练潜在动作模型和VLA，使VLA正则化于前向动态，减少幻觉，在操作基准上平均提升约10%。",
          "reasonCn": "提出联合优化潜在动作模型与VLA的对齐框架，提升VLA性能。",
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
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "针对密集城市环境中的遮挡问题，WorldFly通过双分支耦合流匹配联合生成未来视频和导航动作，利用空间想象力提升无人机VLA导航性能。",
          "reasonCn": "将世界模型预测未来视频与VLA导航动作生成结合，提出面向UAV的世界模型增强VLA框架。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "提出GeoSem-WAM，在RGB未来预测基础上增加几何和语义分支，增强隐式表征的结构理解，提升动作预测和场景理解，保持高效推理。",
          "reasonCn": "直接提出增强的WAM，引入几何和语义监督提升表征学习。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.00966v1",
          "title": "Threading Optimization for Vision-Language-Action Model Inference in Low-Cost Smart Agricultural Manipulation",
          "summary": "Vision-Language Action (VLA) models continue to face challenges such as slow inference speed and difficulty performing fine-grained motion adjustments, limiting their widespread adoption in industry. While the Real-Time Action Chunking (RTAC) algorithm has been proposed to address these bottlenecks, bridging the gap between the algorithm provided in pseudocode to a stable, real-world deployment on a low-cost robotic arm remains a challenge. In this work, we present a complete system-level implementation of RTAC ta…",
          "summaryCn": "提出面向低成本农业操作的VLA推理线程优化，减少延迟提升响应性，在真实农业任务中验证稳定性和速度。",
          "reasonCn": "针对VLA在低成本机械臂上的推理优化，提供系统级线程实现。",
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
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "发现VLA条件与目标不对称性，通过训练时高噪声偏向实现一步动作生成，在LIBERO和真实机器人上达到十步解码性能，大幅降低推理成本。",
          "reasonCn": "提出VLA的一步动作生成方法，简化扩散模型推理。",
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
          "heuristicScore": 71,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "Flash-WAM通过模态感知一致性蒸馏解决视频与动作流噪声分布不对称问题，将WAM推理压缩至单步，在RoboTwin 2.0上实现23倍加速且保持性能。",
          "reasonCn": "提出WAM的模态感知步蒸馏框架，实现单步推理加速。",
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
          "heuristicScore": 67,
          "llmTotalScore": 0
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "PHASER通过阶段中心容量分配和多模态干扰路由，为VLA模型提供终身学习能力，结合自监督变化点检测，在LIBERO上表现优异。",
          "reasonCn": "提出VLA持续学习的阶段感知重放框架，缓解灾难性遗忘。",
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
          "heuristicScore": 67,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "TempoVLA通过变速轨迹增强和速度条件机制，使单一VLA能在不同阶段以不同速度执行，提升数据利用率和任务性能。",
          "reasonCn": "提出速度可控的VLA策略，实现执行速度灵活调节。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "MPCoT通过多路径假设细化和奖励引导的路径评分，在不对模型进行更多训练的情况下提升VLA长周期性能，保持动作接口一致。",
          "reasonCn": "提出VLA推理阶段的多路径潜在推理，增强长程任务能力。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "AffordanceVLA通过预测对象中心视觉潜变量、2D可供性图和3D几何推理，构建任务导向的中间表示，提升机器人操作的精度和鲁棒性。",
          "reasonCn": "提出基于可供性理解的VLA，改善感知-动作映射。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "提出3DThinking引导的协同训练，利用隐式3D先验增强VLA的空间推理，无需显式思维链，在操作任务中提高准确率。",
          "reasonCn": "将3D几何感知和空间推理注入VLA，提升操作能力。",
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
          "heuristicScore": 65,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "Coarse-to-Control让VLA先生成粗粒度动作令牌计划，再预测可执行动作，统一离散动作空间，在长程多阶段任务中显著提升。",
          "reasonCn": "提出在VLA动作空间中引入规划，改善长程任务性能。",
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
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "AdaWAM通过轻量动态路由器自适应触发文本或视觉推理，在长周期任务中提升效率并超越现有WAM策略。",
          "reasonCn": "提出自适应多模态推理的世界动作模型，提升长程任务效率。",
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
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "PiL-World是一种块状世界模型，能根据VLA策略生成多视图未来观察，实现闭环评估，无需每一步真实机器人执行，提高评估效率。",
          "reasonCn": "提出用于VLA策略闭环评估的世界模型，实现无需真实执行的VLA训练。",
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
          "heuristicScore": 63,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "ForesightFlow通过解耦优势加权流匹配，使VLA在生成动作时预测成功潜力，实现无外部评价器的最佳-K选择，提升策略质量。",
          "reasonCn": "提出利用潜力引导流匹配改进VLA策略的自我引导方法。",
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
          "heuristicScore": 62,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operat…",
          "summaryCn": "Lie Diffuser Actor 在 VLA 中直接操作 SE(3) 流形，通过左不变 SDE 和指数映射确保位姿约束和等变性，在 CALVIN 上提升任务完成率。",
          "reasonCn": "提出在VLA中使用SE(3)流形上的扩散来解决欧几里得谬误。",
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
          "heuristicScore": 62,
          "llmTotalScore": 0
        },
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "该框架通过行为分析和稀疏自编码器，对比直接VLA和联合/序列WAM，揭示成功背后隐藏的行为差异与表征特性，为模型选择提供依据。",
          "reasonCn": "提出针对WAM和VLA的行为与表征诊断框架，分析二者差异。",
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
          "heuristicScore": 62,
          "llmTotalScore": 0
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "CLAW通过对抗正则化学习连续潜在动作和世界模型，支持从观察中模仿和基于目标规划，在多种任务中展现语义上有意义的动作表征。",
          "reasonCn": "从无动作视频中自监督学习潜在动作世界模型，属于WAM范畴。",
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
          "heuristicScore": 61,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-08T01:46:58.960275+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "提出LARA框架，通过表示对齐联合优化潜动作模型(LAM)和VLA，使两者相互促进，在多个仿真和真实机器人基准上显著提升VLA的预训练和后训练性能。",
          "reasonCn": "提出LARA框架，通过潜动作表示对齐联合优化LAM和VLA，直接提升VLA性能。",
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
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "提出Coarse-to-Control方法，在VLA的动作标记空间中先预测粗动作序列作为规划，再生成可执行动作，在长程多阶段任务上一致优于直接动作生成。",
          "reasonCn": "在VLA的动作标记空间中引入规划，提出粗到控制的方法，改善长程任务性能。",
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
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "提出AdaWAM，一种具备自适应多模态推理的世界动作模型，通过轻量动态路由器在任务执行中自动触发文本或视觉推理，显著提升推理效率和长程任务表现。",
          "reasonCn": "直接改进世界动作模型，提出自适应多模态推理的AdaWAM，根据执行上下文动态切换文本和视觉推理。",
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
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06836v1",
          "title": "Think Like a Pilot: Fine-Grained Long-Horizon UAV Navigation",
          "summary": "Language-guided UAV agents must execute long-horizon semantic instructions while producing smooth, physically feasible continuous flight commands, yet existing Vision-Language Navigation (VLN) benchmarks typically use discrete or coarse actions and existing UAV Vision-Language-Action (VLA) tasks focus on short, atomic maneuvers. To address this gap in UAV task settings, we introduce \\textbf{FLIGHT}, a \\textbf{F}ine-grained \\textbf{L}ong-horizon \\textbf{I}nstruction-\\textbf{G}uided benchmark for \\textbf{H}ybrid UAV…",
          "summaryCn": "提出FLIGHT VLA，一种异步架构，将低频的飞行员VLM推理与高频扩散动作模型相结合，在新型FLIGHT无人机长程细粒度导航基准上超越现有方法。",
          "reasonCn": "提出面向无人机导航的VLA架构，结合低频推理和高频控制，针对长程细粒度任务。",
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
          "heuristicScore": 52,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07217v1",
          "title": "Robotic Policy Adaptation via Weight-Space Meta-Learning",
          "summary": "Vision-Language-Action (VLA) models are emerging as a promising paradigm for robotic manipulation, enabling general-purpose policies trained from large corpora of demonstrations and action labels. However, adapting these models to new tasks still typically requires task-specific demonstrations, action annotations, and additional fine-tuning, making deployment costly and difficult to scale. We propose WIZARD, a weight-space meta-learning framework that sidesteps task-specific fine-tuning by generating task-specific…",
          "summaryCn": "提出WIZARD，一个权重空间元学习框架，根据语言指令和演示视频一次性生成VLA策略的适配权重，无需目标任务动作标注，在新任务上显著提升性能。",
          "reasonCn": "通过权重空间元学习为冻结VLA策略生成任务适配器，解决VLA模型适配新任务的成本问题。",
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
          "heuristicScore": 51,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06904v1",
          "title": "ActionMap: Robot Policy Learning via Voxel Action Heatmap",
          "summary": "Vision-language-action (VLA) models have advanced rapidly across backbones, training recipes, and data scale, yet the action decoder, which converts the backbone's hidden state into a continuous control signal, has barely changed and remains a single-point predictor across the majority of current VLAs. Whether implemented via autoregressive token bins, L1 regression, or flow-matching denoising, the resulting decoder treats the action space as unstructured, leaving the geometric proximity of neighboring actions une…",
          "summaryCn": "提出ActionMap，一种体素热力图动作头，将动作空间结构化为热力图预测，替代VLA中的单点预测，在LIBERO和真实机器人上提升性能并加快收敛。",
          "reasonCn": "为VLA设计新的动作解码器，利用动作空间的几何结构提升性能和数据效率。",
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
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07383v1",
          "title": "RhinoVLA Technical Report",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for robotic manipulation, but real-time deployment on edge hardware remains challenging. In this work, we identify VLM visual and context tokens as a major source of deployment latency: for GEMM-dominated projection operators, computation grows linearly with the number of input tokens when model dimensions are fixed. Motivated by this observation, we propose RhinoVLA, a deployment-oriented VLA model co-designed with the Huixi R1 edge SoC.",
          "summaryCn": "提出RhinoVLA，一种与边缘SoC协同设计的VLA模型，通过令牌高效设计和统一接口，在保持下游性能的同时在边缘硬件上达到实时推理频率。",
          "reasonCn": "提出面向边缘部署的VLA模型，优化令牌效率和硬件适配，实现实时控制。",
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
          "heuristicScore": 48,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06832v1",
          "title": "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images",
          "summary": "Robots performing long-horizon visual manipulation observe high-dimensional images, but successful plans depend on action-relevant facts: what can be done now and what changes afterward. A useful planning representation should discard irrelevant visual details while preserving action applicability and effects. Classical task planners exploit this structure through symbolic operators with preconditions and effects, but obtaining such representations from raw visual experience remains challenging.",
          "summaryCn": "提出STRIPS-WM框架，直接从图像转换中学习STRIPS风格的世界模型，实现从图像到符号规划的桥接，在视觉重排任务上验证了有效性。",
          "reasonCn": "从图像中学习符号化世界模型，服务于机器人规划，属于世界模型范畴。",
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
          "heuristicScore": 28,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07326v1",
          "title": "AnchorWorld: Embodied Egocentric World Simulation with View-based Evolution Customization",
          "summary": "Despite being a pivotal frontier, interactive world modeling remains underexplored in terms of the versatile controllability required by practical scenarios. To bridge this gap, we present AnchorWorld, a framework that advances egocentric simulation through enhanced interaction integrity and a flexible mechanism for world customization. First, we utilize 3D human motion as the primary interaction modality.",
          "summaryCn": "提出AnchorWorld，利用3D人体运动交互和锚点视图定制实现自我中心世界模拟，在时空一致性和动态演进方面表现出色，推动了交互式世界建模。",
          "reasonCn": "提出自我中心世界模拟框架，支持交互式世界演化和定制，属于世界动作模型相关研究。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.07326v1",
          "pdfLink": "https://arxiv.org/pdf/2606.07326v1",
          "published": "2026-06-05T14:43:13Z",
          "updated": "2026-06-05T14:43:13Z",
          "authors": [
            "Yu Li",
            "Menghan Xia",
            "Gongye Liu",
            "Xintao Wang",
            "Conglang Zhang",
            "Lei Ke",
            "Yuxuan Lin",
            "Ruihang Chu",
            "Pengfei Wan",
            "Kun Gai"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 26,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-08T01:46:06.455864+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作(WLA)模型，统一世界建模、语言推理和动作生成。核心为自回归Transformer，预测包含语义意图和物理动态的下一状态，通过元查询隐式影响动作生成，支持推理时缩放。在仿真和真实环境中验证了其有效性。",
          "reasonCn": "明确提出世界-语言-动作(WLA)模型，将世界建模接口(WAM)与语言推理(VLA)相结合。",
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
          "heuristicScore": 102,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "提出WorldFly，一种基于世界模型的视觉-语言-动作(VLA)框架，通过双分支耦合流匹配联合生成未来视频预测和导航动作，解决无人机在遮挡和剧烈视角变化下的导航难题。在城市峡谷穿越基准上性能优于基线，验证了在体化智能中引入空间想象的价值。",
          "reasonCn": "将世界模型与VLA框架结合，用于无人机导航，明确面向VLA与WAM交叉方向。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "针对扩散型VLA模型，发现高噪声偏向训练即可实现强单步动作生成，无需复杂蒸馏或辅助目标。在LIBERO等基准上，单步策略匹配或超越十步解码，1.4B VLM模型在LIBERO-Long达95.6%成功率。为VLA的高效推理提供了简单有效的方案。",
          "reasonCn": "专注于VLA模型的单步动作生成优化，直接提升VLA推理效率。",
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
          "heuristicScore": 71,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "TempoVLA通过显式速度条件实现VLA策略执行速度的可控性，包含变速度轨迹增强(VSTA)和模型侧条件机制。VSTA在不损失运动语义的前提下重定时演示数据，同时提升默认1x性能。在仿真和真实任务中展示了双向灵活速度控制能力。",
          "reasonCn": "提出速度可控的VLA策略，直接扩展VLA在实际部署中的灵活性。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "提出MPCoT，一种奖励引导的多路径隐式推理框架，在VLA动作解码前初始化并精炼多个假设，软聚合后生成动作。无需额外推理token，保留原始动作接口，通过训练时的路径偏好目标对齐评分器与执行质量。在LIBERO和CALVIN上提升了长程表现。",
          "reasonCn": "为VLA模型引入测试时多路径隐式推理，提升长程任务性能。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "AffordanceVLA提出将可供性预测作为中间表示，包含Which2Act、Where2Act和How2Act三个模块，分别进行物体中心化、2D交互定位和3D几何推理。使用混合Transformer架构和三阶段渐进训练，弥合了VLM语义空间与具身控制之间的鸿沟。",
          "reasonCn": "通过引入结构化可供性预测，增强VLA模型的感知-动作映射精确性。",
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
          "heuristicScore": 66,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06556v1",
          "title": "Robots Need More than VLA and World Models",
          "summary": "Generalist robot intelligence is often framed as a policy-scaling problem: collect more robot demonstrations, train larger Vision-Language-Action (VLA) models, and expect broader generalisation. In this position paper, we argue that this framing is incomplete. The central bottleneck is not only policy learning, but the absence of mechanisms that convert the world's abundant unstructured behavioural data into grounded robot supervision.",
          "summaryCn": "本文指出当前机器人智能聚焦于VLA策略扩展的不足，认为瓶颈在于缺乏将非结构化行为数据转化为有监督信号的机制。确定了数据接口、体验接口、世界模型接口和奖励接口四个缺失组件，并提出了从更广泛物理世界学习的机器人系统研究议程。",
          "reasonCn": "直接探讨VLA和世界模型在机器人智能中的局限与未来方向，符合主线讨论。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.06556v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06556v1",
          "published": "2026-06-04T10:43:14Z",
          "updated": "2026-06-04T10:43:14Z",
          "authors": [
            "Elis Karcini",
            "Faisal Mehrban",
            "Quang Nguyen",
            "Mac Schwager",
            "Arash Ajoudani",
            "Cesar Cadena",
            "Jan Peters",
            "Marco Hutter",
            "Haitham Bou-Ammar"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 63,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "PiL-World是一种块式世界模型，支持VLA策略在闭环中的评估，无需真实机器人执行每一步。通过动作导出的视觉控制和隐式历史条件生成多视图未来观察，与VLA推理交替形成闭环评估回路，并利用失败轨迹提升保真度，降低了VLA评估成本。",
          "reasonCn": "提出面向VLA策略闭环评估的世界模型，直接服务VLA开发与测试。",
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
          "heuristicScore": 63,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05645v1",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape the evolution of the surrounding world. However, most end-to-end methods rely on direct state-to-action mappings, capturing correlations without explicitly modeling action-conditioned dynamics. Conversely, continuous-latent world models often lack compositional structure for causal reasoning across counterfactual futures.",
          "summaryCn": "Discrete-WAM将未来视觉状态和自车动作表示为对齐的离散标记，构建统一潜在空间，共享离散扩散框架进行世界建模和世界-动作策略联合学习。在自动驾驶基准上实现竞争性能，支持可控生成和反事实推理，为因果推理提供结构化路径。",
          "reasonCn": "明确以WAM为核心，提出离散视觉-动作标记编辑的统一世界策略学习框架。",
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
          "heuristicScore": 45,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-06-08T01:45:18.235231+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "该工作针对世界-动作模型迭代扩散推理速度慢的问题，提出模态感知一致性蒸馏框架Flash-WAM，通过为视频和动作流设计匹配噪声机制的蒸馏参数，将LingBot-VA模型在RoboTwin 2.0上的推理速度提升23倍至实时水平，并保持任务成功率。价值在于为WAM部署提供了关键加速方案。",
          "reasonCn": "提出模态感知蒸馏加速世界-动作模型推理，直接针对WAM实时控制瓶颈。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at different feature hierarchies. During training, three tightly coupled components work in concert primarily within the latent space: (1) To gain geometric priors, a latent 3D geometry perception module aligns…",
          "summaryCn": "该工作针对VLA模型缺乏3D空间推理能力的问题，提出3D-thinking-guided协同训练框架，通过解耦几何感知、在线推理蒸馏和空间增强动作集成，将3D先验隐含地注入VLM backbone，在不生成显式思考文本的情况下增强动作预测。其价值在于让VLA模型具备高效的3D空间推理能力，提升复杂操作任务性能。",
          "reasonCn": "提出将3D空间推理隐式注入VLA的协同训练框架，提升VLA的3D空间理解能力。",
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
          "heuristicScore": 65,
          "llmTotalScore": 65
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation. Full behavior cloning (BC) imitates failures, filtered BC discards useful sub-trajectories, and offline reinforcement learning adds a large critic.",
          "summaryCn": "该工作针对VLA生成式动作策略无法有效利用混合质量经验数据的问题，提出ForesightFlow，一种自引导流匹配策略，联合生成动作块和成功潜力轨迹，并设计解耦优势加权流匹配方法，在仿真和真实双臂任务中提升性能。价值在于无需外部critic实现VLA策略自我改进，便于持续学习。",
          "reasonCn": "提出自引导流匹配策略改进VLA，通过解耦优势加权流匹配实现策略自我提升。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise action following, and poor generalization across embodiments for broad adoption. We tackle these challenges from two perspectives.",
          "summaryCn": "OSCAR构建了一个精确的动作条件视频世界模型，通过大规模标准化数据管道和2D运动骨架渲染实现跨机器人泛化，在Cosmos-Predict2.5-2B上微调获得优异动作跟随和外观质量，并在RoboArena策略评估中与真实世界高度相关。其价值在于为机器人策略提供了高效、跨具身的虚拟评估环境。",
          "reasonCn": "提出跨具身动作条件世界模型，用于机器人策略评估，符合WAM框架。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with severe radial distortion and local gripper-centric perspectives, are out-of-distribution for pretrained VLMs; and human-collected trajectories frequently violate kinematic limits, incur collisions, or e…",
          "summaryCn": "该工作针对UMI腕部鱼眼视角和物理不可行轨迹给VLA训练带来的挑战，提出VISTA框架，通过构建UMI-VQA视觉问答数据集对齐VLM表示、物理验证管道过滤轨迹、两阶段协同训练，提升VLA政策对UMI数据的利用效率。其价值在于释放了大规模低成本遥操作数据在VLA训练中的潜力。",
          "reasonCn": "针对UMI数据与VLA模型的不匹配问题提出适配框架，直接服务于VLA训练。",
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
          "heuristicScore": 47,
          "llmTotalScore": 47
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics. We present FlowPRO, a reward-free offline reinforced fine-tuning framework for flow-matching VLAs.",
          "summaryCn": "FlowPRO针对流匹配VLA模型难以可靠部署的问题，提出奖励无关的离线强化微调框架，通过RPRO目标结合对比优化和显式近端正则化防止奖励破解，并利用遥操作干预-回滚范式产生自然成对正负轨迹，在长时域双臂任务上取得最高成功率。价值在于为VLA策略提供了一种无需人工奖励设计的自我提升方法。",
          "reasonCn": "提出无奖励的流匹配VLA强化微调方法，解决VLA部署瓶颈。",
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
          "heuristicScore": 44,
          "llmTotalScore": 44
        },
        {
          "id": "2606.04825v1",
          "title": "HapTile: A Haptic-Informed Vision-Tactile-Language-Action Dataset for Contact-Rich Imitation Learning",
          "summary": "Despite the importance of tactile sensing for reliable manipulation, most existing Vision-Language-Action (VLA) datasets remain vision-only, and those that do incorporate tactile information typically lack the joint combination of task diversity, language conditioning, and action trajectories. Furthermore, existing teleoperation pipelines rarely provide haptic feedback to the operator, despite its established role in demonstration quality and manipulation stability. In this work, we present HapTile, a contact-grou…",
          "summaryCn": "HapTile构建了面向接触富集操作的视觉-触觉-语言-动作数据集，通过指尖触觉传感器和遥操作触觉反馈采集日常操作任务数据，每个任务配以语言指令和同步视觉触觉观测。其价值在于填补VLA领域触觉感知数据的空白，推动多模态灵巧操作模型发展。",
          "reasonCn": "发布首个集视觉、触觉、语言和动作的多模态数据集HapTile，服务于接触富集操作模仿学习，延伸VLA感知维度。",
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
          "heuristicScore": 44,
          "llmTotalScore": 44
        },
        {
          "id": "2606.04627v1",
          "title": "MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models",
          "summary": "Mobile agents are increasingly expected to operate everyday applications from screenshots and language goals, where reliable control requires reasoning over screen affordances, multi-step navigation, and future state changes. However, many agents externalize this computation as long textual chains of thought, which slows interaction, increases supervision cost, and complicates deployment. We introduce MIRAGE, a framework that learns continuous latent reasoning representations from visible textual reasoning traces.",
          "summaryCn": "MIRAGE将显式推理路径压缩为连续隐状态，并加入生成世界模型目标对齐未来屏幕截图，使移动代理在无需解码长思维链的情况下进行内部推理，在AndroidWorld等任务上以更少token生成实现性能匹配或提升。价值在于为数字代理提供高效、低推理成本的内部世界模型。",
          "reasonCn": "提出隐式推理与生成式世界模型结合，压缩数字代理的思考过程，符合WAM思想。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04627v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04627v1",
          "published": "2026-06-03T09:01:24Z",
          "updated": "2026-06-03T09:01:24Z",
          "authors": [
            "Zhichao Yang",
            "Yuanze Hu",
            "Haojie Hao",
            "Longkun Hao",
            "Dongshuo Huang",
            "Hongyu Lin",
            "Gen Li",
            "Lanqing Hong",
            "Yihang Lou",
            "Yan Bai"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.04907v1",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "WAM-Nav设计了一个共享扩散Transformer的非对称联合扩散框架，同时生成长时域动作和短时域视觉预测，通过双流上下文条件化和统一目标对齐实现多种视觉导航任务。其价值在于实现了动作生成与视觉远见的融合，提升导航的主动避障能力。",
          "reasonCn": "提出非对称潜在世界-动作模型，联合生成动作与视觉预测，明确围绕WAM。",
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
          "heuristicScore": 26,
          "llmTotalScore": 26
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-08T01:43:59.341808+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "OmniDreams 基于Cosmos 扩散模型训练，通过过去帧、状态和动作自回归生成逼真传感器数据，支持极端天气和动态场景的闭环仿真。与策略模型集成后，为自动驾驶评估提供可扩展的虚拟环境，突破了传统仿真器的泛化瓶颈。",
          "reasonCn": "该工作提出一个生成式世界模型，用于自动驾驶闭环仿真，根据动作自回归生成视频，兼具世界模型与策略交互，属于WAM与VLA交叉范畴。",
          "lane": "BOTH",
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
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "该工作提出GeoSem-WAM框架，在预测未来RGB之外加入几何和语义辅助分支，联合捕获场景动态、空间几何与语义上下文。推理时无需显式未来预测，仅用增强表示即显著提升动作预测精度和场景理解鲁棒性。",
          "reasonCn": "明确聚焦于世界行动模型（WAM），引入几何与语义监督以增强潜在表示学习。",
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
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "PHASER 框架利用操作轨迹的时间特性，通过相位中心容量分配和多模态干扰路由，均衡子技能记忆并优先重放遗忘风险高的历史阶段。在LIBERO 持续学习基准上，提升多种VLA主干的持续学习能力。",
          "reasonCn": "针对VLA模型的持续学习问题，提出相位感知的经验重放策略，直接服务于VLA的终身适应。",
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
          "heuristicScore": 67,
          "llmTotalScore": 67
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "CLAW 框架利用对抗正则化和扩散生成，从原始视频中同时学习世界模型与潜在动作表示，无需动作标签。学习到的动作空间支持观察模仿和目标导向规划，在多种任务上优于现有方法，并实现有效的动作迁移。",
          "reasonCn": "从无动作视频中自监督学习连续潜在动作世界模型，属于WAM的新型学习范式。",
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
          "heuristicScore": 61,
          "llmTotalScore": 61
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent f…",
          "summaryCn": "该工作提出两阶段攻击框架，在仅观测轨迹前缀的前提下，通过注意力图定位关键区域并优化补丁，破坏语义接地并扭曲动作轨迹。在仿真与真实机器人的实验中，成功诱导长期任务失败，揭示了VLA的安全隐患。",
          "reasonCn": "研究VLA模型在部分可观测条件下的对抗鲁棒性，属于VLA安全方向。",
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
          "heuristicScore": 61,
          "llmTotalScore": 61
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from…",
          "summaryCn": "TTT-VLA 在训练阶段学习潜在提示作为辅助条件信号，测试时利用交互数据自监督优化该提示而无需修改模型。在单/多形态设置下，成功纠正少量关键决策，提升任务成功率。",
          "reasonCn": "提出VLA的测试时训练方法，通过优化潜在提示实现分布偏移下的快速适应。",
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
          "heuristicScore": 61,
          "llmTotalScore": 61
        },
        {
          "id": "2606.04046v1",
          "title": "Dive into the Scene: Breaking the Perceptual Bottleneck in Vision-Language Decision Making via Focus Plan Generation",
          "summary": "In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools with different benefits: VLMs are better at long-term planning, while VLAs are better at reactive control. However, their performance is limited by the same perceptual bottleneck: visual hallucinations arise due to the models' inability to distinguish task-relevant objects from distractors. In principle, accurate identification and focus o…",
          "summaryCn": "SceneDiver 先生成场景图建立整体理解，再通过识别-理解-分析的迭代循环分解任务，生成细粒度聚焦计划。同时为VLA设计适配器蒸馏该能力，在具身AI基准上大幅减少幻觉，提升决策准确率。",
          "reasonCn": "针对VLA/VLM的视觉幻觉问题，提出由粗到细的聚焦规划方法，改善感知与决策。",
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
          "heuristicScore": 51,
          "llmTotalScore": 51
        },
        {
          "id": "2606.03784v2",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data.",
          "summaryCn": "基于最大规模具身CoT数据集，该工作发现有效的CoT应接地为具体动作指导，并由此提出ERVLA模型。其采用推理丢弃策略，在训练时吸收推理痕迹，推理时直接预测动作，避免自回归错误累积，在LIBERO-Plus上达到86.9%成功率。",
          "reasonCn": "大规模研究VLA中的具身链式思维，提出以推理作为训练监督而非推理前缀的新范式。",
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
          "heuristicScore": 43,
          "llmTotalScore": 43
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy.",
          "summaryCn": "OpenEAI-Platform 集成了低成本高精度机械臂与基于Qwen3-VL的扩散动作头VLA模型，仅使用开源数据训练。在真实操作任务中性能可比大规模预训练的pi0，且全面开源硬件设计和训练流程。",
          "reasonCn": "开源平台包含完整的VLA模型（OpenEAI-VLA），推动可重复的具身AI研究。",
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
          "heuristicScore": 43,
          "llmTotalScore": 43
        },
        {
          "id": "2606.03003v1",
          "title": "Exact equivariance, kept through training, buys zero-shot generalisation across the symmetry group",
          "summary": "A latent world model built from an equivariant encoder $E$ and an equivariant predictor $f$ inherits a provable symmetry of its training loss: when the world's dynamics genuinely carries a group $G$ acting on latents by an orthogonal representation $ρ(g)$, the one-step prediction relMSE is exactly invariant across the whole group, so fitting the dynamics on a restricted slice of orientations mathematically determines it on the entire orbit (jǔ yī fǎn sān). We verify this end-to-end at laptop scale (CPU/MPS, fully…",
          "summaryCn": "通过构建等变编码器与预测器，证明世界模型的训练损失具有群对称性，在受限姿态数据上训练即可泛化到整个群。在2D/3D任务和SE(3)下实现闭环控制的精确零样本泛化，参数量较基线减少4.5倍以上。",
          "reasonCn": "研究等变世界模型的零样本泛化，从理论到实践验证世界模型的对称性。",
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
          "heuristicScore": 29,
          "llmTotalScore": 29
        },
        {
          "id": "2606.03252v1",
          "title": "AirDreamer: Generalist Drone Navigation with World Models",
          "summary": "Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot's capabilities. Previous methods, which assume the same environment configuration, often rely heavily on human-designed perception pipelines and predefined rules to guide the robot toward the target. This process is environment-dependent and generalizes poorly across environments.",
          "summaryCn": "AirDreamer 使用世界模型编码环境结构，并在此之上训练强化学习导航策略，采用无手工奖励的稀疏回报避免局部最优。在复杂仿真和真实环境中展示出强泛化能力，sim-to-real 无需参数调整。",
          "reasonCn": "提出基于世界模型的无人机导航框架，将环境理解与强化学习结合。",
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
          "heuristicScore": 28,
          "llmTotalScore": 28
        },
        {
          "id": "2606.03609v2",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through.",
          "summaryCn": "该世界模型预测动作后的未来3D等视域（球面距离图），以深度残差保持几何边缘，结合持久潜在空间地图确保跨路径一致性。实验揭示了建筑之间开放空间的跨城市几何签名，为导航提供超越外观的空间感知。",
          "reasonCn": "提出预测3D等视域的世界模型，用于城市导航的空间理解，属于新颖的WAM方向。",
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
          "heuristicScore": 27,
          "llmTotalScore": 27
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout.",
          "summaryCn": "GeoAlign 通过RGB-D后训练分支获取几何增强特征，机器人本体状态动态查询生成相位相关几何令牌。在LIBERO、SimplerEnv和真实ALOHA任务上，成功率大幅提升，证实了几何后训练和状态引导查询的价值。",
          "reasonCn": "提出空间对齐架构增强VLA的几何感知，解决纯语义接地的局限。",
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
          "heuristicScore": 25,
          "llmTotalScore": 25
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions.",
          "summaryCn": "Donk 模型统一处理视频和手部轨迹的联合去噪，既可基于语言、图像和初始状态采样未来视频与动作作为策略，也可作为文本条件的数据引擎生成动作序列。在灵巧手任务上轨迹精度和视频保真度均有提升。",
          "reasonCn": "提出统一视频-动作去噪模型，明确定位为世界行动模型，支持动作策略与数据生成。",
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
          "heuristicScore": 23,
          "llmTotalScore": 23
        },
        {
          "id": "2606.03603v1",
          "title": "World Models Meet Language Models: On the Complementarity of Concrete and Abstract Reasoning",
          "summary": "World models and multimodal large language models (MLLMs) provide complementary capabilities for predicting future outcomes from static visual observations. World models can generate concrete visual rollouts of possible futures, while MLLMs can reason abstractly over questions, goals, and rules. However, generated rollouts are stochastic and may be visually plausible but task-incorrect, making it necessary to determine when visual simulation is useful, whether a rollout is credible, and how it should influence the…",
          "summaryCn": "该工作提出PF-OPSD方法，训练时利用真实未来视频作为特权上下文评估推理轨迹，推理时仅依赖生成的世界模型预测。在空间前瞻和物理预测两个基准上，显著提升推理准确性并增强对噪声的鲁棒性。",
          "reasonCn": "研究世界模型与语言模型在推理中的互补，利用视觉未来模拟增强抽象推理。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03603v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03603v1",
          "published": "2026-06-02T13:07:49Z",
          "updated": "2026-06-02T13:07:49Z",
          "authors": [
            "Yucheng Zhou",
            "Wei Tao",
            "Yiwen Guo",
            "Jianbing Shen"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 23,
          "llmTotalScore": 23
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-08T01:42:37.290014+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM 将视频-行动学习从块中心优化转向事件级视觉-语言-行动预训练，解决现有WAM中语言、视觉与行动时间尺度不一致的问题。它通过事件级描述和聚类平衡采样构建数据生态，支持事件模式和统一模式两种推理。该方法可扩展到多种行为和场景，提升可扩展性和适应性。",
          "reasonCn": "该工作直接针对VLA与WAM的粒度不匹配问题，提出以语义事件为原子单元的预训练框架，是事件级世界行动模型的核心贡献。",
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
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operat…",
          "summaryCn": "论文指出VLA策略中常用的欧几里得表示违反了SO(3)约束，导致流形漂移和轨迹非最优。提出Lie Diffuser Actor (LDA)，在SE(3)切空间上进行扩散，保证坐标等变性和测地线最优。实验在CALVIN和真实机器人上验证了改进效果。",
          "reasonCn": "该文纠正VLA策略中SE(3)姿态的欧几里得谬误，在扩散框架中引入切空间得分匹配，对VLA动作表示有根本性改进。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model.",
          "summaryCn": "AHEAD 是一个预测-再行动包装器，通过运动感知的潜在世界模型预测未来特征，弥补VLA在动态操作中的反应滞后。它利用光流和语言-运动显著性掩码自适应地前滚，再将预测结果送入动作解码器。在仿真和实物实验中，成功率达到79-97%，显著优于基线。",
          "reasonCn": "该文提出AHEAD，用潜在空间预测世界模型增强冻结VLA，解决动态场景中观测-执行延迟问题，兼具VLA与世界模型特点。",
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
          "heuristicScore": 60,
          "llmTotalScore": 60
        },
        {
          "id": "2606.02307v1",
          "title": "FATE-VLA:Failue-aware test generation for vision-language-action models",
          "summary": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. In high-dimensional embodied spaces, failures are sparse and clustered, so static benchmarking can underestimate robustness risks. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven exploration with surrogate models learned from observe…",
          "summaryCn": "FATE-VLA 针对VLA模型在高维具身空间中的失败稀疏性，提出通过多样驱动和代理模型引导失败发现，生成高风险且多样的场景。测试四款SOTA VLA后，发现失败率最多增加29.7%，揭示了隐藏的弱点。这推动评估从静态基准测试转向失败定向的探索性测试。",
          "reasonCn": "该文将VLA评估重构为主动失败发现问题，提出基于代理模型的失败感知测试生成，对VLA鲁棒性分析有重要价值。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02307v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02307v1",
          "published": "2026-06-01T14:27:13Z",
          "updated": "2026-06-01T14:27:13Z",
          "authors": [
            "Arusa Kanwal",
            "Pablo Valle",
            "Shaukat Ali",
            "Aitor Arrieta"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 60,
          "llmTotalScore": 60
        },
        {
          "id": "2606.02735v1",
          "title": "See Less, Specify More: Visual Evidence Budgets for Generalizable VLAs",
          "summary": "Generalization remains a central bottleneck for vision-language-action (VLA) models: under distractors, appearance shifts, and semantically similar tasks, the policy must often infer local execution details from coarse instructions while also deciding which parts of the image matter for control. We present S2 (See Less, Specify More), a framework for improving VLA generalization by training the executor under a cleaner interface. Specify More preserves the original instruction as a stable high-level goal while rel…",
          "summaryCn": "S2 框架通过保留高层次指令并用精炼的子任务语言细化执行细节，减少VLA在干扰物和外观变化下的歧义。同时引入视觉证据预算，强制策略仅从任务充分的视觉信息中决策，避免无关上下文干扰。实验表明该方法可提升泛化指标，且兼容现成VLM规划器。",
          "reasonCn": "该文通过细化指令和视觉证据预算改善VLA泛化性，直接优化执行器的学习问题，方法简洁有效。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02735v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02735v1",
          "published": "2026-06-01T18:02:07Z",
          "updated": "2026-06-01T18:02:07Z",
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
          "heuristicScore": 47,
          "llmTotalScore": 47
        },
        {
          "id": "2606.02775v1",
          "title": "AURA: Action-Gated Memory for Robot Policies at Constant VRAM",
          "summary": "The KV-cache is the right memory for datacenters but the wrong memory for robots. Datacenter inference batches many short requests and resets them, amortizing an attention cache across a crowd. Embodied agents instead run one long, non-resetting episode on bandwidth-limited edge hardware, where high-bandwidth memory and flash are scarce, flash has finite write endurance, and memory writes rather than compute can become the binding constraint.",
          "summaryCn": "AURA-Mem 为机器人策略设计了一种恒定大小的循环记忆模块，通过动作门控决定何时写入，避免传统KV缓存随步数增长的内存开销。门控信号由闭环动作误差训练，写入次数大幅减少，且在LIBERO-Long等任务上保持竞争力。该设计适合带宽受限的长期具身推理。",
          "reasonCn": "该文针对机器人边缘部署，提出恒定内存的动作门控循环记忆，有效替代VLA中的KV缓存，解决了带宽和写入约束问题。",
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
          "heuristicScore": 45,
          "llmTotalScore": 45
        },
        {
          "id": "2606.01600v1",
          "title": "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation",
          "summary": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactual, and Adversarial. Built from real-world DROID episodes, RoboTrustBench contains 1,207 expert-validated instruction-image pairs and a six-dimensional evaluation protocol with 13 fine-grained criteri…",
          "summaryCn": "RoboTrustBench 构建了基于DROID数据集的基准，评估视频世界模型在正常、约束敏感、反事实和对抗四种条件下的表现。通过7个模型的人类和MLLM评估，发现当前模型在约束推理、物理交互和不安全指令抑制方面存在不足，强调可信世界模型需超越视觉质量。",
          "reasonCn": "该基准专门评估机器人操作中视频世界模型的可信度，涵盖约束敏感、反事实和对抗场景，对WAM发展有参考意义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.01600v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01600v1",
          "published": "2026-06-01T02:56:09Z",
          "updated": "2026-06-01T02:56:09Z",
          "authors": [
            "Huiqiong Li",
            "Jiayu Wang",
            "Zhiting Mei",
            "Anirudha Majumdar",
            "Jingjing Chen",
            "Bin Zhu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 45,
          "llmTotalScore": 45
        },
        {
          "id": "2606.02745v1",
          "title": "SeeTraceAct: Visibility-Aware Latent Planning from Cross-Embodiment Demonstration Videos",
          "summary": "Vision-language-action models (VLAs) are promising general-purpose robot policies, but adapting them to new tasks typically requires costly task-specific teleoperation data. As an alternative, we study one-shot demo-conditioned VLAs, where a robot policy is conditioned on a single demonstration video of an unseen task. We find that existing end-to-end approaches often struggle when successful execution requires precisely localizing small target regions.",
          "summaryCn": "SeeTraceAct 引入可复现的跨形态演示条件VLA评估基准RoboCasa-DC，并设计可见性感知的未来端部轨迹预测。该方法鼓励策略精确地关注小目标区域，避免现有方法的空间定位模糊。在仿真和真实机器人实验中，成功率平均提高12.5个百分点。",
          "reasonCn": "该文提出单次演示条件化的VLA框架，通过可见性感知的端部轨迹预测增强空间接地，解决了精确定位难题。",
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
          "heuristicScore": 44,
          "llmTotalScore": 44
        },
        {
          "id": "2606.02753v1",
          "title": "MetaWorld: Scaling Multi-Agent Video World Model from Single-view Video Data",
          "summary": "Video world models are a foundational generative technology for embodied AI and the Metaverse, yet existing approaches are inherently limited to a single agent observing from a single perspective. Extending these models to multi-agent settings introduces two critical challenges: data scarcity (coordinated multi-view recordings are prohibitively expensive to collect for general open-domain scenarios) and world state alignment (independently generated video streams cannot ensure that shared physical environments and…",
          "summaryCn": "MetaWorld 通过单目世界状态展开，将单视角视频分解为相机运动和智能体轨迹，从而无需多相机设置即可提取多智能体运动数据。主体感知世界生成器实现外观驱动模拟，世界状态对齐保证多视图一致性。该方法为多智能体世界建模开辟了新路径。",
          "reasonCn": "该文提出从单视角视频扩展多智能体视频世界模型，解决了多视角数据稀缺和世界状态对齐难题。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02753v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02753v1",
          "published": "2026-06-01T18:20:20Z",
          "updated": "2026-06-01T18:20:20Z",
          "authors": [
            "Teng Hu",
            "Mingchun Lu",
            "Yating Wang",
            "Jiangning Zhang",
            "Jinkun Hao",
            "Ye Pan",
            "Ran Yi",
            "Lizhuang Ma",
            "Dacheng Tao"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 43,
          "llmTotalScore": 43
        },
        {
          "id": "2606.02313v1",
          "title": "Towards Precise Intent-Aligned VLA Aerial Navigation via Expert-Guided GRPO",
          "summary": "Vision-Language-Action (VLA) models offer a promising end-to-end paradigm for unmanned aerial vehicles (UAVs) to accomplish complex tasks specified by fine-grained instructions. However, standard supervised fine-tuning (SFT) suffers from data scarcity, limited generalization, and weak supervision for nuanced and complicated human intents. Reinforcement fine-tuning offers a natural way to mitigate these challenges and align policy behaviors with human intents through designable feedback, but applying it to aerial n…",
          "summaryCn": "EG-GRPO 引入专家引导的群体相对策略优化用于VLA无人机导航微调，通过少量专家数据增强在线探索效率。同时设计异构流水线并行仿真与推理，减少滚动时间43.5%。在复杂意图任务中，成功率提升2.13倍，意图对齐指标提高60.9%。",
          "reasonCn": "该文针对VLA在无人机导航中意图对齐困难，提出专家引导的强化学习微调框架，有效提升了成功率和对齐度。",
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
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.02277v1",
          "title": "RoboSemanticBench: Diagnosing Semantic Grounding in Action Prediction for VLA Models",
          "summary": "Vision-language-action (VLA) models are built on the premise that semantic understanding from pretrained language or vision-language backbones should guide robot action prediction. Yet robot fine-tuning is optimized as imitation over task-specific action distributions, and many evaluations can be solved through visual or instruction-action shortcuts. We introduce RoboSemanticBench (RSB), an embodied benchmark for diagnosing semantic grounding in action prediction: whether post-trained VLA models can use complex in…",
          "summaryCn": "RoboSemanticBench 要求机器人解读数学或常识问题并抓取正确答案块，评估VLA是否能利用复杂指令语义选择正确物体。测试显示即使模型能抓取块，选择语义正确块的成功率接近随机，表明语义接地仍是VLA的薄弱环节。",
          "reasonCn": "该基准专为诊断VLA模型的动作预测中的语义接地而设计，揭示后端语义与动作执行间的脱节。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.02277v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02277v1",
          "published": "2026-06-01T14:02:37Z",
          "updated": "2026-06-01T14:02:37Z",
          "authors": [
            "Bin Yu",
            "Yao Zhang",
            "Haishan Liu",
            "Shijie Lian",
            "Yuliang Wei",
            "Xiaopeng Lin",
            "Zhaolong Shen",
            "Changti Wu",
            "Ruina Hu",
            "Bailing Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.01951v1",
          "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
          "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches to mobile robot navigation remains challenging due to viewpoint changes during locomotion. In this paper, we propose a framework that converts egocentric walking videos into dataset…",
          "summaryCn": "提出将自我中心行走视频转换为移动机器人模仿学习数据的方法，通过相机运动估计和动作表示适配，使VLA模型在人类和机器人数据上联合训练。在水果搜索导航任务中，该方法提升了语言理解和动作生成的鲁棒性。",
          "reasonCn": "该文利用人类自我中心视频扩充移动机器人导航的VLA训练数据，解决了数据稀缺问题。",
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
          "heuristicScore": 42,
          "llmTotalScore": 42
        },
        {
          "id": "2606.02436v1",
          "title": "Geometry-Aware Implicit Memory for Video World Models",
          "summary": "Video world models aim to simulate controllable visual environments, but long-horizon rollouts depend on what the model remembers after observations leave its native context window. Explicit memories retain frames or online 3D reconstructions, which can suffer from heuristic retrieval errors, redundant appearance storage, or reconstruction artifacts. Implicit memories compress history into a compact state, but existing designs are not explicitly constrained to encode cross-view scene geometry.",
          "summaryCn": "GIM-World 通过轻量级Transformer将变长历史编码为固定大小的记忆令牌，并利用冻结基础模型蒸馏3D几何信息。推断时丢弃几何教师，仅靠记忆模块实现长视界几何和视觉一致性，优于显式和隐式记忆基线。实验在MIND数据集上验证了其有效性。",
          "reasonCn": "该文提出几何感知的隐式记忆框架，增强视频世界模型的长程一致性和场景几何保持。",
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
          "heuristicScore": 40,
          "llmTotalScore": 40
        },
        {
          "id": "2606.02800v1",
          "title": "Cosmos 3: Omnimodal World Models for Physical AI",
          "summary": "We introduce Cosmos 3, a family of omnimodal world models designed to jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. By supporting highly flexible input-output configurations, Cosmos 3 seamlessly unifies critical modalities for Physical AI -- effectively subsuming vision-language models, video generators, world simulators, and world-action models into a single framework. Our evaluation demonstrates that Cosmos 3 establishes a…",
          "summaryCn": "Cosmos 3 是一个全模态世界模型家族，通过混合Transformer统一处理语言、图像、视频、音频和动作序列。它集视觉语言模型、视频生成、世界模拟和世界行动模型于一体，在多项理解和生成任务中达到SOTA，并开源许可供物理AI研究。",
          "reasonCn": "该文提出的全模态世界模型Cosmos 3，将世界动作模型统一进一个框架，是WAM方向的重大进展。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02800v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02800v1",
          "published": "2026-06-01T19:12:30Z",
          "updated": "2026-06-01T19:12:30Z",
          "authors": [
            "Aditi",
            "Niket Agarwal",
            "Arslan Ali",
            "Jon Allen",
            "Martin Antolini",
            "Adeline Aubame",
            "Alisson Azzolini",
            "Junjie Bai",
            "Maciej Bala",
            "Yogesh Balaji"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 32,
          "llmTotalScore": 32
        },
        {
          "id": "2606.01950v1",
          "title": "Learning Action-Conditional and Object-Centric Gaussian Splatting World Models for Rigid Objects",
          "summary": "World models enable intelligent agents to predict the consequences of their actions on the environment. In this paper, we propose Multi Rigid Object Gaussian World Model (MRO-GWM), a novel model that learns action-conditional dynamics of rigid objects in 3D. By representing the scene by object-centric Gaussians, we can represent arbitrary object shapes and multi-object scenes.",
          "summaryCn": "MRO-GWM 使用对象中心的高斯溅射表示场景，并设计时空Transformer预测未来刚体运动。模型在多视角重建数据上训练，可处理遮挡，并应用于非抓取操作的模型预测控制。仿真实验验证了其在多对象交互场景下的预测性能。",
          "reasonCn": "该文提出动作条件下的多刚体对象高斯世界模型，可用于非抓取操作的模型预测控制，聚焦3D动态预测。",
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
          "heuristicScore": 29,
          "llmTotalScore": 29
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesiz…",
          "summaryCn": "RoboDream 通过将生成锚定在渲染的机器人运动，并条件化于显式场景和对象先验，解耦轨迹执行与环境合成。实现“检索重生”和“无道具遥操作”，显著降低真实数据需求，并验证生成数据可提升下游策略性能。",
          "reasonCn": "该文提出以机器人运动为中心的世界模型，合成新对象、新场景下的真实感演示，解决数据扩展问题。",
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
          "heuristicScore": 27,
          "llmTotalScore": 27
        },
        {
          "id": "2606.02027v1",
          "title": "World-Task Factorization for Robot Learning",
          "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations.",
          "summaryCn": "论文论证世界-任务分解是一种原则性的机器人学习结构，世界因子独立于任务，任务因子由逻辑定义。通过贝叶斯模型证据理论分析，并实例化AICON微分图与紧凑策略，梯度作为界面传递信息，实现无需任务特定数据即可泛化。",
          "reasonCn": "该文研究将世界与任务分离为机器人学习的基本分解，形式化世界因子与任务因子的不对称性，并实例化为世界模型与策略的组合。",
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
          "heuristicScore": 26,
          "llmTotalScore": 26
        },
        {
          "id": "2606.02388v1",
          "title": "Policy and World Modeling Co-Training for Language Agents",
          "summary": "Reinforcement learning (RL) improves large language model (LLM) agents by teaching them which actions lead to high rewards, but provides little supervision on what those actions do to the environment. World modeling (WM) can fill this gap, yet existing approaches often require separate simulators, extra training stages, or additional inference-time computation. We observe that on-policy RL rollouts already contain the needed signal: each transition pairs an action with its resulting next observation.",
          "summaryCn": "PaW 在RL训练中将世界模型作为辅助任务与政策共同训练，利用滚动中的动作-下一观测对进行监督。引入动作熵数据选择、噪声容忍损失和奖励自适应均衡，在三个代理任务基准上稳定提升性能，证明标准RL滚动是有效的世界模型监督源。",
          "reasonCn": "该文提出在语言代理强化学习中与政策共同训练世界模型，利用已有在线数据，无需额外推理成本。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02388v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02388v1",
          "published": "2026-06-01T15:35:40Z",
          "updated": "2026-06-01T15:35:40Z",
          "authors": [
            "Ning Lu",
            "Baijiong Lin",
            "Shengcai Liu",
            "Jiahao Wu",
            "Haoze Lv",
            "Yanbin Wei",
            "Lingting Zhu",
            "Shengju Qian",
            "Xin Wang",
            "Ying-Cong Chen"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 24,
          "llmTotalScore": 24
        },
        {
          "id": "2606.02575v1",
          "title": "From Zero to Hero: Training-Free Custom Concept Spawning in World Models",
          "summary": "Autoregressive world models have emerged as a powerful paradigm for interactive video generation, allowing users to navigate dynamically generated environments through actions. These models are typically conditioned on a text prompt and/or a single reference frame, from which the entire world is generated. Yet the moment the user navigates beyond what is visible in that frame, the unseen regions are populated by the base model's priors, with no mechanism for the user to specify what should appear and where.",
          "summaryCn": "SPAWN 利用图像到视频模型中参考帧的锚定特性，通过在短窗口注入外部概念潜在表示并恢复原始锚点，实现概念的自然传播。该方法支持细粒度到大型概念的无训练插入，适用于游戏和仿真等应用，无需重新训练模型。",
          "reasonCn": "该文针对世界模型中概念生成缺失，提出无需训练的概念注入方法，增强了交互式世界模型的可控性。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02575v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02575v1",
          "published": "2026-06-01T17:59:05Z",
          "updated": "2026-06-01T17:59:05Z",
          "authors": [
            "Kiymet Akdemir",
            "Pinar Yanardag"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 22,
          "llmTotalScore": 22
        },
        {
          "id": "2606.02372v1",
          "title": "COMAP: Co-Evolving World Models and Agent Policies for LLM Agents",
          "summary": "Equipping language agents with world models enables them to anticipate environment dynamics and evaluate candidate actions before execution. However, existing textual world models are typically fixed after training, preventing them from adapting to the on-policy state-action distributions induced by an evolving agent. Meanwhile, agent-improvement methods often rely on external rewards or verifiers, limiting their applicability in realistic interactive environments.",
          "summaryCn": "COMAP 让世界模型预测候选动作的未来状态反馈，代理基于可靠性估计进行反思并优化动作。在线数据通过自蒸馏更新世界模型，使其适应代理的分布。在具身规划、Web导航和工具使用基准上，性能提升显著，世界模型预测准确度随进化提高。",
          "reasonCn": "该文提出文本世界模型与代理策略协同进化的框架，通过闭环交互提升长期决策效果。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.02372v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02372v1",
          "published": "2026-06-01T15:21:17Z",
          "updated": "2026-06-01T15:21:17Z",
          "authors": [
            "Youwei Liu",
            "Jian Wang",
            "Hanlin Wang",
            "Wenjie Li"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 22,
          "llmTotalScore": 22
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-08T01:41:28.775194+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.00966v1",
          "title": "Threading Optimization for Vision-Language-Action Model Inference in Low-Cost Smart Agricultural Manipulation",
          "summary": "Vision-Language Action (VLA) models continue to face challenges such as slow inference speed and difficulty performing fine-grained motion adjustments, limiting their widespread adoption in industry. While the Real-Time Action Chunking (RTAC) algorithm has been proposed to address these bottlenecks, bridging the gap between the algorithm provided in pseudocode to a stable, real-world deployment on a low-cost robotic arm remains a challenge. In this work, we present a complete system-level implementation of RTAC ta…",
          "summaryCn": "论文旨在优化低成本农业机器人中VLA模型的推理速度与操控精度，提出针对RTAC算法的系统级多线程优化方案。通过改进推理与控制管线的线程实现，显著提升反应速度与控制稳定性，并在农产品抓取任务中验证了效果。该工作为VLA模型的实际部署提供了有效的工程优化参考。",
          "reasonCn": "该论文针对VLA模型推理速度慢的问题，通过优化多线程实现降低延迟提升响应，直接面向VLA系统优化。",
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
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "论文构建模型无关的诊断框架，通过行为回滚分析和稀疏自编码器特征分析，比较WAM与VLA的内部表征与行为差异。在LIBERO和RoboTwin2.0上评估7种策略表明，WAM在目标选择性和预测结构上存在优势，但伴随推理成本增加。该工作为理解WAM与VLA的本质区别提供了可操作的评估工具。",
          "reasonCn": "论文提出针对WAM和VLA的诊断框架，从行为和表征层面分析两类模型差异，直接比较WAM与VLA。",
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
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2606.01458v1",
          "title": "LEGS: Fine-Tuning Teleop-Free VLAs for Humanoid Loco-manipulation in an Embodied Gaussian Splatting World",
          "summary": "Training vision-language-action (VLA) policies for humanoid loco-manipulation is constrained by the high cost and complexity of collecting human teleoperation demonstrations. VLA policies fine-tuned in simulators have, until now, failed to transfer effectively in humanoid loco-manipulation tasks. We present LEGS (Loco-manipulation via Embodied Gaussian Splatting), a hybrid simulator that composites a mesh foreground (robot, objects, props) over a photorealistic 3D Gaussian Splatting (3DGS) background reconstructed…",
          "summaryCn": "论文提出LEGS，一种混合模拟器，通过合成程序化演示数据实现VLA策略的免遥端训练。在Unitree G1上三个拾取任务显示，纯合成数据训练的VLA策略与遥端数据训练性能相当或更优，凸显了照片级渲染对合成数据迁移的关键作用。这为人形机器人VLA策略的低成本训练提供了新途径。",
          "reasonCn": "论文专注于VLA策略的免遥端微调，利用具身高斯泼溅合成数据训练人形机器人loco-manipulation，直接属于VLA训练方法。",
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
          "heuristicScore": 41,
          "llmTotalScore": 41
        },
        {
          "id": "2606.01241v2",
          "title": "OneVLA: A Unified Framework for Embodied Tasks",
          "summary": "Navigation and manipulation are fundamental capabilities of embodied intelligence, enabling robots to interpret natural language commands and interact physically with their surroundings. However, current Vision-Language-Action (VLA) models remain constrained by task-specific architectures, specializing in either navigation or manipulation, which hinders the development of general-purpose robotic agents. To bridge this gap, we introduce OneVLA, a unified architecture that integrates these distinct tasks into a sing…",
          "summaryCn": "论文提出OneVLA，通过统一动作头和分阶段渐进训练策略，将导航与操作任务整合到单一VLA框架中。在模拟与真实环境中，OneVLA性能优于专有单任务和跨任务模型，展示了多任务协同学习的正向迁移。该工作为构建通用机器人VLA系统奠定了基础。",
          "reasonCn": "论文提出OneVLA统一框架，解决VLA模型在导航与操作任务间割裂的问题，直接推动通用VLA发展。",
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
          "heuristicScore": 41,
          "llmTotalScore": 41
        },
        {
          "id": "2606.01205v1",
          "title": "ImagineUAV: Aerial Vision-Language Navigation via World-Action Modeling and Kinodynamic Planning",
          "summary": "Vision-language navigation (VLN) for UAVs demands grounding free-form instructions into 6-DoF flight under partial observability. While Vision-Language-Action (VLA) models excel at semantic reasoning, they suffer from brittleness due to geometric inconsistency and dynamics mismatch. To address this, we propose ImagineUAV, an imagination-driven framework leveraging cascaded world-action modeling.",
          "summaryCn": "论文提出ImagineUAV，通过潜视频扩散模型预测未来观测并提取6-DoF动作，再经动力学规划生成轨迹，构成想象力驱动的级联世界-动作建模。在仅1.3B参数下，于基准和实际飞行中超越先前的VLA方法，验证了想象力驱动导航的实用性。该框架有效融合了VLA的语义推理与WAM的未来预测能力。",
          "reasonCn": "论文面向无人机VLA导航，引入级联世界-动作建模，结合VLA和WAM解决几何不一致与动态失配，属于BOTH。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.01205v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01205v1",
          "published": "2026-05-31T12:39:44Z",
          "updated": "2026-05-31T12:39:44Z",
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
          "heuristicScore": 41,
          "llmTotalScore": 41
        },
        {
          "id": "2606.01027v1",
          "title": "$τ_0$-WM: A Unified Video-Action World Model for Robotic Manipulation",
          "summary": "Robotic manipulation requires models that generate executable actions while anticipating and evaluating their future consequences before physical execution. We present $τ_0$-World Model ($τ_0$-WM), a unified video-action world model that integrates policy learning, video prediction, and action evaluation within a single future-predictive framework. Built on a shared video diffusion backbone, $τ_0$-WM provides two complementary interfaces.",
          "summaryCn": "论文提出τ0-WM，基于共享视频扩散骨干，提供视频动作模型和动作条件视频模拟器双接口，实现动作预测、未来可视化与评估一体化。在真实机器人数据上训练后，通过测试时计算优化，在长程精细操作任务上表现优越。该工作展示了未来预测世界模型在决策中的赋能作用。",
          "reasonCn": "论文提出统一视频-动作世界模型τ0-WM，整合策略学习、视频预测和动作评估，属于典型的WAM。",
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
          "heuristicScore": 41,
          "llmTotalScore": 41
        },
        {
          "id": "2606.01164v1",
          "title": "Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends",
          "summary": "With rapid development of large language models and diffusion-based content generation, world modeling has attracted increasing research attention, benefiting various downstream domains such as game engines, embodied AI, autonomous driving, etc. Through explicitly incorporating user actions into world state transition, recent literature empowers world modeling with interactivity in an action-conditioned video or 3D generation paradigm, further enhancing controllability over world evolutions and facilitating users…",
          "summaryCn": "论文综述了交互式世界建模的研究趋势与技术挑战，聚焦动作条件的可控性、长时程交互和实时响应。比较了开放世界探索、游戏引擎、自动驾驶和机器人领域的基准，并指出未来方向。为WAM的发展提供了全面的研究脉络。",
          "reasonCn": "论文系统综述交互式视频世界建模，涵盖动作条件生成和未来状态控制，直接关联WAM核心议题。",
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
          "heuristicScore": 39,
          "llmTotalScore": 39
        },
        {
          "id": "2606.00985v1",
          "title": "Make Your VLA More Robust Without More Data By Interleaving Motion Planning",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable progress for mobile manipulation, but their performance on long-horizon tasks remains poor. These tasks are especially challenging because (1) progress toward high-level goals must be maintained across extended sequences of spatially distributed subtasks, and (2) early execution errors compound rapidly over the task horizon. These challenges persist despite finetuning on large human teleoperated mobile manipulation data, indicating that more data alone may…",
          "summaryCn": "针对VLA在长程任务中的复合误差问题，论文提出MPVI，一种运动规划与VLA交替执行的框架。通过VLM检验完成状态并触发规划模块，在BEHAVIOR-1K上实现113%的任务进度提升。该方法展示了经典规划与学习型VLA协同的潜力。",
          "reasonCn": "论文提出MPVI框架，通过插拔运动规划增强VLA在长程移动操作中的鲁棒性，直接改进VLA性能。",
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
          "heuristicScore": 39,
          "llmTotalScore": 39
        }
      ]
    }
  ]
};

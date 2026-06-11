window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-11T03:03:44.688357+00:00",
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
  "currentDateKey": "20260611",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
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
      "generatedAt": "2026-06-11T03:02:39.798938+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.08094v1",
          "title": "vla.cpp: A Unified Inference Runtime for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) policies are typically shipped as Python/PyTorch stacks that assume a workstation-class GPU, a mismatch for the hardware on which robots actually run. We present vla.cpp, a portable C++ inference runtime built on llama.cpp. To our knowledge, it is the first ggml-class engine to natively serve the flow-matching and diffusion VLA inference pattern, in which a cached vision-language prefix is consumed by a cross-attending action expert integrated over several solver steps.",
          "summaryCn": "vla.cpp是一个统一的VLA推理运行时，构建于llama.cpp之上，支持多种VLA架构。它通过跨硬件优化，将BitVLA的每步延迟降低4.5倍，在8 GB嵌入式模块上实现100%成功率，为机器人部署提供了高效、便携的解决方案。",
          "reasonCn": "论文提出了一个统一的VLA推理运行时，直接服务于视觉-语言-动作模型的部署，符合收录标准。",
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
          "heuristicScore": 113,
          "llmTotalScore": 113
        },
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "Light-WAM是一种轻量级世界动作模型，通过下采样潜在空间中的未来视频监督和StateFusionActionExpert直接预测动作块，降低了视频协同训练成本。在LIBERO和RoboTwin 2.0上保持了强大性能，参数量仅0.44B，推理延迟72ms，提升了训练吞吐量。",
          "reasonCn": "论文以世界动作模型为核心，融合未来预测与动作输出，明确用于机器人操作，属于WAM范畴。",
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
          "heuristicScore": 103,
          "llmTotalScore": 103
        },
        {
          "id": "2606.08015v1",
          "title": "Q-VGM: Q-Guided Value-Gradient Matching for Flow-Matching VLA Policies",
          "summary": "We propose Q-Guided Value-Gradient Matching (Q-VGM), an off-policy reinforcement learning (RL) method that tackles a long-standing challenge in fine-tuning flow-matching vision-language-action (VLA) policies: efficiently improving an expressive flow-matching action expert with respect to a learned Q-function. Effective improvement must exploit the first-order (gradient) information of the critic, but this is difficult for flow policies, because directly back-propagating the value through their multi-step denoising…",
          "summaryCn": "Q-VGM提出了一种Q引导的价值梯度匹配方法，用于离线强化学习微调流匹配VLA策略。通过将价值梯度转化为去噪时的值梯度场，避免了回传整个去噪链，实现了稳定高效的策略改善。",
          "reasonCn": "论文专注于流匹配VLA策略的强化学习微调，直接涉及视觉-语言-动作范式。",
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
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.08288v1",
          "title": "MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model",
          "summary": "Vision-language-action (VLA) models increasingly condition robot policies on history, depth, or 4D features to resolve ambiguity in long-horizon manipulation. However, more spatiotemporal evidence is not necessarily better: when the injected evidence is not motion-consistent, it can introduce geometric drift, fragmented temporal cues, and unstable action generation. This raises a simple question: should a VLA remember past frames, or remember the motion that connects them?",
          "summaryCn": "MotionVLA通过将短历史视频窗口转换为连续运动轨迹场令牌，将运动一致性证据注入VLA模型。在仿真和真实机器人测试中，改善了长时程操作，生成更平滑直接的执行动作。",
          "reasonCn": "论文提出了在VLA中注入几何运动信息的方法，增强长期操作能力，符合VLA定义。",
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
          "heuristicScore": 77,
          "llmTotalScore": 77
        },
        {
          "id": "2606.08107v1",
          "title": "Ego-Pi: VLA Fine-Tuning for Ego-Centric Human and Robot Data",
          "summary": "Robotics faces a fundamental challenge of data scarcity. Unlike language or vision research, there is no internet-scale dataset for robotic manipulation. A promising path forward is to leverage egocentric human data, which can be collected more easily, with greater breadth, and at a larger scale.",
          "summaryCn": "Ego-Pi探索了利用以自我为中心的人类数据微调VLA模型π0.5，使机器人学习新任务语义并组合技能，无需相应机器人数据。实验证明人类数据能有效扩展机器人的灵巧操作能力。",
          "reasonCn": "论文研究利用自我中心人类数据微调VLA模型，实现跨具身技能迁移，属于VLA方向。",
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
          "heuristicScore": 66,
          "llmTotalScore": 66
        },
        {
          "id": "2606.08169v1",
          "title": "CLASP: Language-Driven Robot Skill Selection and Composition using Task-Parameterized Learning",
          "summary": "Enabling robots to understand and execute tasks from natural language commands while maintaining data efficiency remains challenging. Foundation models such as vision-language-action (VLA) and vision-language models (VLMs) provide intuitive interaction channels but require extensive data; task-parameterized imitation learning achieves data efficiency but lacks natural language grounding. This work bridges this gap through a modular architecture combining task-parameterized kernelized movement primitives (TP-KMPs)…",
          "summaryCn": "CLASP结合任务参数化核运动原语和预训练VLM，实现了语言驱动的机器人技能选择与组合。系统无需微调即可从2-5次演示中学习技能，在7自由度机械臂上实现73.3%-100%的成功率。",
          "reasonCn": "论文通过VLMs实现语言指令到技能选择和组合，输出机器人动作，符合VLA特征。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.08169v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08169v1",
          "published": "2026-06-06T13:33:39Z",
          "updated": "2026-06-06T13:33:39Z",
          "authors": [
            "Markus Knauer",
            "Valentin Gieraths",
            "Tai Mai",
            "Samuel Bustamante",
            "Alin Albu-Schäffer",
            "Freek Stulp",
            "João Silvério"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.07974v1",
          "title": "PRISM: PRior-guided Imagination Sampling in world Models",
          "summary": "A learned world model provides a powerful physical intuition for evaluating future states. But its effectiveness in continuous control also depends critically on how candidate actions are generated for model-based planning. Rather than solely asking how accurately a model can simulate the future, we ask: which candidate actions are worth evaluating in the first place?",
          "summaryCn": "PRISM是一种任务无关的框架，利用世界模型自身的表征提取状态条件高斯先验，引导基于模型的规划中的动作采样。通过参数自由的乘积集成，在连续控制任务中提高了样本效率。",
          "reasonCn": "论文以世界模型为基础，引入先验引导的想象采样来改进基于模型的规划，明确用于动作决策。",
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
          "heuristicScore": 51,
          "llmTotalScore": 51
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-11T03:01:20.752150+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07895v1",
          "title": "TBD-VLA: Temporal Block Diffusion Vision Language Action Model",
          "summary": "Discrete Vision-Language-Action (VLA) models typically formulate action generation as next-token prediction over discretized action spaces, conditioning each token autoregressively on prior context. While effective, this paradigm incurs high inference latency and largely ignores the temporal structure inherent in action trajectories. Recent efforts introduce parallel decoding to improve efficiency, enabling faster inference, but lack explicit mechanisms for modeling token dependencies.",
          "summaryCn": "TBD-VLA 提出基于时间块扩散的离散 VLA 框架，将动作序列分块并执行块内掩蔽扩散，实现时间自回归与并行动作解码的统一，在仿真和真实操作中显著优于现有方法。",
          "reasonCn": "论文提出基于时间块扩散的离散视觉语言动作模型，同时处理视觉输入、语言指令和动作生成。",
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
          "heuristicScore": 129,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07100v1",
          "title": "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
          "summary": "Visual-language action (VLA) models enable robots to predict actions directly from observations and language instructions, but their performance depends on large-scale, high-quality data and is limited by the scarcity of real-world robot action datasets. To facilitate VLA model learning with abundant unlabeled human videos, Latent Action Models (LAM) learn latent action representations from visual dynamics to provide additional supervision for VLA learning. However, LAM and VLA are typically trained separately, le…",
          "summaryCn": "LARA 通过联合优化潜在动作模型和VLA，利用人类视频中的视觉动态提供额外监督，提升了VLA在多个机器人操作基准上的性能，平均提升约10%。",
          "reasonCn": "论文专注于VLA模型优化，通过潜在动作表示对齐提升视觉-语言-动作学习效果。",
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
          "heuristicScore": 99,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07107v1",
          "title": "Coarse-to-Control: Action-Token Planning for Vision-Language-Action Models",
          "summary": "Most vision-language-action (VLA) models map observations directly to actions without explicit intermediate planning, which limits performance on long-horizon tasks where early mistakes compound. We propose Coarse-to-Control, a plan-execute VLA that introduces planning natively in the action-token space. The key idea is to let the policy first predict a compact sequence of coarse action tokens that summarize the intended future trajectory, and then generate executable action tokens conditioned on this plan.",
          "summaryCn": "Coarse-to-Control 在 VLA 的动作标记空间中引入规划，先预测粗粒度动作序列再条件生成控制动作，在长时域任务中显著优于直接动作生成。",
          "reasonCn": "论文在VLA模型中引入动作标记规划，结合视觉与语言先预测粗动作再生成细粒度控制。",
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
          "heuristicScore": 75,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "AdaWAM 提出自适应多模态推理的世界动作模型，根据执行上下文动态触发文本或视觉推理，在仿真和真实具身任务中既提高了推理效率又超越了现有策略。",
          "reasonCn": "论文提出自适应多模态推理的世界动作模型，明确用于具身任务的动作预测与控制。",
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
          "heuristicScore": 75,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07687v1",
          "title": "What Makes Video World Model Latents Action-Relevant: Prediction over Reconstruction",
          "summary": "Video world models are increasingly used to provide predictive visual representations, yet it remains unclear which pretraining signals induce action-relevant structure in their latent spaces. We study this question through a unified probe-based evaluation across diverse encoder families, including image-only self-supervision, video pretraining with and without latent prediction, reconstruction-based autoencoders, diffusion models, and shortcut-forcing dynamics models. Using a common inverse-dynamics probing objec…",
          "summaryCn": "该研究通过统一探测评估，发现视频世界模型的潜在动作结构主要由时间预训练驱动而非像素重建质量，并且在多个机器人基准上表明时间上下文至关重要。",
          "reasonCn": "论文探究视频世界模型潜在表示与动作的相关性，发现时间预测优于重建，并在机器人基准上验证了动作可恢复性。",
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
          "heuristicScore": 65,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06836v1",
          "title": "Think Like a Pilot: Fine-Grained Long-Horizon UAV Navigation",
          "summary": "Language-guided UAV agents must execute long-horizon semantic instructions while producing smooth, physically feasible continuous flight commands, yet existing Vision-Language Navigation (VLN) benchmarks typically use discrete or coarse actions and existing UAV Vision-Language-Action (VLA) tasks focus on short, atomic maneuvers. To address this gap in UAV task settings, we introduce \\textbf{FLIGHT}, a \\textbf{F}ine-grained \\textbf{L}ong-horizon \\textbf{I}nstruction-\\textbf{G}uided benchmark for \\textbf{H}ybrid UAV…",
          "summaryCn": "FLIGHT VLA 针对无人机长时程精细导航，采用异步架构解耦低频推理与高频控制，在细粒度指令跟随和动态避障中表现优异。",
          "reasonCn": "论文提出无人机视觉语言导航的VLA框架，结合视觉、语言指令和连续飞行控制动作。",
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
          "heuristicScore": 57,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07217v1",
          "title": "Robotic Policy Adaptation via Weight-Space Meta-Learning",
          "summary": "Vision-Language-Action (VLA) models are emerging as a promising paradigm for robotic manipulation, enabling general-purpose policies trained from large corpora of demonstrations and action labels. However, adapting these models to new tasks still typically requires task-specific demonstrations, action annotations, and additional fine-tuning, making deployment costly and difficult to scale. We propose WIZARD, a weight-space meta-learning framework that sidesteps task-specific fine-tuning by generating task-specific…",
          "summaryCn": "WIZARD 提出权重空间元学习框架，仅需语言指令和演示视频即可为冻结的VLA策略生成任务特定适配器，在LIBERO和真实机器人上显著提升性能。",
          "reasonCn": "论文专注于VLA模型的快速适应，通过权重空间元学习免去任务特定微调，涉及视觉、语言和动作。",
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
          "heuristicScore": 56,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06904v2",
          "title": "ActionMap: Robot Policy Learning via Voxel Action Heatmap",
          "summary": "Vision-language-action (VLA) models have advanced rapidly across backbones, training recipes, and data scale, yet the action decoder, which converts the backbone's hidden state into a continuous control signal, has barely changed and remains a single-point predictor across the majority of current VLAs. Whether implemented via autoregressive token bins, L1 regression, or flow-matching denoising, the resulting decoder treats the action space as unstructured, leaving the geometric proximity of neighboring actions une…",
          "summaryCn": "ActionMap 为 VLA 提出体素动作热图解码头，利用动作空间的几何邻近性，在仿真和真实操作中提高数据效率和性能。",
          "reasonCn": "论文改进VLA动作解码器，用体素热图替代传统单点预测，保持视觉语言骨干不变。",
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
          "heuristicScore": 54,
          "llmTotalScore": 0
        },
        {
          "id": "2606.07383v1",
          "title": "RhinoVLA Technical Report",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for robotic manipulation, but real-time deployment on edge hardware remains challenging. In this work, we identify VLM visual and context tokens as a major source of deployment latency: for GEMM-dominated projection operators, computation grows linearly with the number of input tokens when model dimensions are fixed. Motivated by this observation, we propose RhinoVLA, a deployment-oriented VLA model co-designed with the Huixi R1 edge SoC.",
          "summaryCn": "RhinoVLA 提出面向边缘SoC的VLA模型，通过token高效骨干和持续动作专家，实现跨机器人学习和11.69 Hz实时推理。",
          "reasonCn": "RhinoVLA 是面向边缘部署的VLA模型，结合视觉、语言和动作专家，实现实时机器人控制。",
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
          "heuristicScore": 52,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06832v1",
          "title": "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images",
          "summary": "Robots performing long-horizon visual manipulation observe high-dimensional images, but successful plans depend on action-relevant facts: what can be done now and what changes afterward. A useful planning representation should discard irrelevant visual details while preserving action applicability and effects. Classical task planners exploit this structure through symbolic operators with preconditions and effects, but obtaining such representations from raw visual experience remains challenging.",
          "summaryCn": "STRIPS-WM 从图像转换中学习接地命题 STRIPS 风格世界模型，通过抽象转换图和谓词蒸馏，实现从原始图像直接进行经典规划。",
          "reasonCn": "论文从图像学习符号化世界模型，用于机器人规划与动作序列生成。",
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
          "heuristicScore": 44,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-11T02:59:39.243834+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出统一的世界-语言-动作（WLA）框架，通过自回归Transformer联合预测文本子任务、子目标图像和机器人动作。该模型融合世界建模与语言推理，并在仿真和真实环境中验证了有效性。为具身基础模型提供了新方向。",
          "reasonCn": "提出世界-语言-动作（WLA）模型，同时结合视觉输入、语言指令和机器人动作输出，并设计自回归世界模型用于动作预测与规划，符合VLA和WAM双重标准。",
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
          "heuristicScore": 133,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-collected action trajectories. This prevents them from supporting closed-loop VLA evaluation, where each action chunk must be conditioned on the observation generated by the previous execution.",
          "summaryCn": "提出PiL-World，一种块式世界模型，用于VLA策略的闭环评估，通过交替VLA推理和世界模型预测生成未来观测。它利用动作视觉控制条件和潜在历史提高预测保真度，支持无需真实机器人执行的评估。",
          "reasonCn": "提出PiL-World，一个面向VLA策略评估的块式世界模型，直接用于动作条件下的未来观测生成和闭环评估，核心为世界模型的动作预测。",
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
          "heuristicScore": 114,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions. We argue that the ability to \"imagine\" future states -- inherent in World Models -- is critical for robust decision-making under such partial observability.",
          "summaryCn": "针对无人机在密集城市环境中的导航，提出WorldFly框架，通过双分支耦合流匹配机制联合生成未来视频与动作。该框架利用世界模型进行空间想象，在自建基准上超越其他方法，尤其适用于未知环境。",
          "reasonCn": "提出WorldFly，一种基于世界模型的VLA框架，同时执行视频预测和导航动作生成，集成视觉、语言和动作，并用世界模型指导决策。",
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
          "heuristicScore": 90,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, low-dimensional action chunk. Under this asymmetry, strong one-step action generation should not necessarily require the advanced one-step methods developed for image synthesis.",
          "summaryCn": "提出简化的一步动作生成方法用于VLA模型，通过偏置训练时步的高噪声分布，使一步解码性能匹配多步扩散。在LIBERO基准和真实双臂任务上验证，证明强一步VLA动作生成可从标准扩散训练中获得。",
          "reasonCn": "专注于VLA模型的动作生成，提出一步生成方法，改进扩散训练策略，直接应用于机器人控制任务。",
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
          "heuristicScore": 84,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05645v2",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape future world evolution, rather than merely mapping observations to actions. However, most end-to-end methods rely on direct state-to-action imitation, while existing world models often remain weakly aligned with downstream policy generation. We introduce Discrete-WAM, a unified discrete vision-action world-policy framework that represents visual observations, future states, high-level decisions, and ego actions within a shared token space.",
          "summaryCn": "提出Discrete-WAM框架，在共享离散token空间内统一视觉观测、未来状态和自车动作，联合训练世界模型、世界策略和策略。在自动驾驶基准上实现强规划性能，并支持可控未来生成和反事实评估。",
          "reasonCn": "提出Discrete-WAM，一种统一的离散视觉-动作世界模型，联合训练世界模型与策略，并用于自动驾驶规划，属于典型的WAM。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations. Prior efforts to accelerate VLAs through model compression, KV-cache reuse, or reinforcement learning only shift the policy from one fixed speed to another, and leave deceleration almost unexplored.",
          "summaryCn": "提出TempoVLA，通过变速率轨迹增强和显式速度条件，使单一VLA模型实现灵活的速度控制。在仿真和真实任务中证明可加速和减速，且数据增强还提升了默认速度下的性能。",
          "reasonCn": "提出TempoVLA，一种速度可控的VLA模型，通过条件控制执行速度，直接改进视觉-语言-动作策略。",
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
          "heuristicScore": 78,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface. We propose MPCoT, a reward-guided multi-path latent reasoning framework that initializes $M$ hypotheses, refines them for K weight-tied steps, and softly aggregates them before action decoding.",
          "summaryCn": "提出MPCoT，通过奖励引导的多路径潜在推理提升VLA的测试时缩放性，在LIBERO和CALVIN上改善长时域性能。它保留原始动作接口，不产生推理token，提供可配置的深度和宽度控制。",
          "reasonCn": "提出MPCoT，一种用于VLA策略的多路径潜在推理框架，增强长时域控制性能，直接针对视觉-语言-动作模型。",
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
          "heuristicScore": 78,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action mappings. To address this challenge, we propose \\textbf{AffordanceVLA}, a unified framework that introduces structured affordance forecasting as a task-oriented intermediate representation to establish a…",
          "summaryCn": "提出AffordanceVLA，通过Which2Act、Where2Act和How2Act三个组件渐进建模可供性，建立更精准的感知-动作映射。采用MoE架构和三阶段训练，在不组配数据集上提升操作性能。",
          "reasonCn": "提出AffordanceVLA，通过引入结构化可供性预测改进VLA的感知-动作映射，核心为VLA模型。",
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
          "heuristicScore": 70,
          "llmTotalScore": 0
        },
        {
          "id": "2606.06014v1",
          "title": "PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models",
          "summary": "Latent world models (LWMs) have strengthened end-to-end autonomous driving by forecasting compact scene dynamics for downstream planning. However, existing LWM-based planners usually generate trajectories directly from entangled latent representations. This compact latent-to-planner pathway lacks explicit modeling of risk, drivability, and diverse style preferences, making driving-style dynamics difficult to supervise, inspect, or modulate before a final trajectory is selected.",
          "summaryCn": "提出PLAN-S，解码风格条件语义代价图，架接潜在世界模型和规划器，使自动驾驶规划可控。在nuScenes和NAVSIM上验证，降低碰撞率，提高规划评分。",
          "reasonCn": "提出PLAN-S，在自动驾驶世界模型中引入风格条件代价图用于规划，核心为世界模型的动作预测与规划。",
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
          "heuristicScore": 33,
          "llmTotalScore": 0
        },
        {
          "id": "2606.05960v1",
          "title": "Towards a Data Flywheel for Embodied Intelligence in Logistics",
          "summary": "Embodied intelligence is moving from laboratory demonstrations toward industrial deployment, with the logistics industry serving as a key application scenario. Learning-based policies offer a promising path beyond traditional perception-planning-control pipelines, but their scalability depends on how embodied data can be collected, organized, and reused. This research studies a data-centric framework for industrial embodied intelligence by constructing a logistics data flywheel.",
          "summaryCn": "提出WM-DAgger框架，利用世界模型合成物流场景中的长尾数据，用于鲁棒模仿学习。旨在构建物流数据飞轮，实现持续策略改进。",
          "reasonCn": "提出基于世界模型的数据飞轮框架，利用世界模型生成合成数据提升物流机器人策略，明确使用世界模型进行动作相关数据增强。",
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
          "heuristicScore": 29,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-06-11T02:58:23.470736+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "Flash-WAM通过模态感知一致性蒸馏压缩世界-动作模型推理至单步，实现实时控制。在RoboTwin 2.0上延迟从8.1秒降至348毫秒，提速23倍，保持任务性能。",
          "reasonCn": "论文提出针对世界-动作模型（WAM）的模态感知蒸馏方法，联合生成未来视频与机器人动作，符合WAM定义。",
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
          "summaryCn": "OSCAR是一个跨机器人形态的动作条件视频世界模型，通过大规模标准化数据管道和2D骨架统一条件，实现策略评估。在虚拟评估与真实世界评估间取得显著相关性，为机器人策略测试铺路。",
          "reasonCn": "论文提出动作条件的视频世界模型，用于跨机器人形态的策略评估，核心为世界模型且用于动作相关评估，符合WAM。",
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
          "summaryCn": "VISTA通过UMI-VQA数据集和物理验证管线，弥合UMI数据与VLA模型之间的视觉与物理鸿沟。两阶段联合训练提升策略性能，使VLA模型能有效利用人类采集的遥操作数据。",
          "reasonCn": "论文针对VLA训练适配UMI数据，涉及视觉、语言监督（VQA）和动作预测，属于VLA范畴。",
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
          "summaryCn": "3DThinkVLA通过解体3D几何感知与空间推理，以共享锚令牌传递高层空间思维，赋予VLA模型隐式3D先验。在机器人操作任务中提升动作预测的鲁棒性与泛化能力。",
          "reasonCn": "论文为VLA模型注入3D先验，通过3D思考引导联合训练实现隐式空间推理以预测动作，符合VLA。",
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
          "summaryCn": "ForesightFlow通过在流匹配VLA中预测成功潜能轨迹，实现无批评家的自引导最佳-K采样动作生成。解耦优势加权流匹配和一步边界估计，在仿真和真实双手任务中超越了传统模仿学习。",
          "reasonCn": "论文改进大型VLA策略，基于流匹配生成动作序列并用潜能引导，明确处理VLA动作输出。",
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
          "id": "2606.04627v2",
          "title": "MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models",
          "summary": "Mobile agents are increasingly expected to operate everyday applications from screenshots and language goals, where reliable control requires reasoning over screen affordances, multi-step navigation, and future state changes. However, many agents externalize this computation as long textual chains of thought, which slows interaction, increases supervision cost, and complicates deployment. We introduce MIRAGE, a framework that learns continuous latent reasoning representations from visible textual reasoning traces.",
          "summaryCn": "MIRAGE框架将显式推理痕迹压缩为连续潜在表示，并利用生成式世界模型预测未来屏幕截图，指导移动设备操作。在AndroidWorld和AndroidControl上，以更少token生成实现相当或更优的任务成功率。",
          "reasonCn": "论文将生成式世界模型用于移动设备控制，预测未来界面状态以指导动作，世界模型是核心且用于动作规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04627v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04627v2",
          "published": "2026-06-03T09:01:24Z",
          "updated": "2026-06-06T08:34:56Z",
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
          "heuristicScore": 59,
          "llmTotalScore": 59
        },
        {
          "id": "2606.04907v1",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "WAM-Nav是一个非对称联合扩散的潜在世界-动作模型，同时生成长程动作和短程视觉预见，提升导航鲁棒性。支持Image-Goal等多种目标类型，减少视觉误差累积和推理延迟。",
          "reasonCn": "论文提出潜在世界-动作模型用于视觉导航，联合学习动作生成和视觉预见，核心为世界模型且用于导航动作。",
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
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics. We present FlowPRO, a reward-free offline reinforced fine-tuning framework for flow-matching VLAs.",
          "summaryCn": "FlowPRO采用基于偏好优化的RPRO目标对VLA进行微调，通过干预回滚收集成对轨迹，无需奖励设计。在四项长时双手任务上取得最高成功率，并验证了各损失组件的作用。",
          "reasonCn": "论文提出对流匹配VLA进行无奖励离线强化微调，专注于优化VLA的动作预测，符合VLA。",
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
          "summaryCn": "HapTile是一个触觉信息的视觉-触觉-语言-动作数据集，通过集成触觉反馈的遥操作平台收集，涵盖多种日常操作任务。为VLA模型提供了物理交互感知的训练数据，以提升接触丰富场景下的操作能力。",
          "reasonCn": "论文构建了融合视觉、触觉、语言和动作的数据集，用于接触丰富任务的模仿学习，直接支持VLA训练。",
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
          "summaryCn": "文章通过在环境变异性下训练DreamerV3世界模型并进行跨环境验证，发现SSL预训练阶段的鲁棒性是sim-to-real迁移的强预测因子。在真实四旋翼上无需传感器纯靠想象成功穿越0.67米窄缝。",
          "reasonCn": "论文系统研究基于世界模型的四旋翼导航，世界模型用于生成想象轨迹并部署至真实四旋翼，符合WAM。",
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
          "summaryCn": "MAD世界模型学习重建机器人中心占据栅格和可见性地图，而非原始图像，使其潜在状态直接包含碰撞避免相关信息。通过想象或特征提取方式训练策略，在视觉导航和竞赛任务中超越纯视觉基线。",
          "reasonCn": "论文提出几何感知的世界模型用于四旋翼飞行，通过重建占据栅格等监督强制学习局部几何，直接用于动作策略学习。",
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
      "generatedAt": "2026-06-11T02:57:00.860694+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imaginatio…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to general…",
          "summaryCn": "这篇论文围绕 VLA / WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving po…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "heuristicScore": 111,
          "llmTotalScore": null
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from…",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA mod…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.04130v1",
          "title": "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization",
          "summary": "We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos. Our approach leverages adversarial latent regularization and diffusion-based video generation to capture structured and semantically meaningful action representations while modeling rich, predictive environment dynamics, without relying on any action labels or annotations. By simultaneously training the Latent Action Model and world model…",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：We introduce CLAW, a fully end-to-end self-supervised framework for learning a world model jointly with continuous latent action representations directly from action-free videos.…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requi…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent f…",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.04046v1",
          "title": "Dive into the Scene: Breaking the Perceptual Bottleneck in Vision-Language Decision Making via Focus Plan Generation",
          "summary": "In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools with different benefits: VLMs are better at long-term planning, while VLAs are better at reactive control. However, their performance is limited by the same perceptual bottleneck: visual hallucinations arise due to the models' inability to distinguish task-relevant objects from distractors. In principle, accurate identification and focus o…",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools w…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout.",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordan…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03784v2",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data.",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we re…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy.",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that inte…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03252v1",
          "title": "AirDreamer: Generalist Drone Navigation with World Models",
          "summary": "Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot's capabilities. Previous methods, which assume the same environment configuration, often rely heavily on human-designed perception pipelines and predefined rules to guide the robot toward the target. This process is environment-dependent and generalizes poorly across environments.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03609v2",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03685v1",
          "title": "A Close Look At World Model Recovery In Supervised Fine-Tuned LLM Planners",
          "summary": "Supervised fine-tuning (SFT) improves end-to-end classical planning in large language models (LLMs), but do these models also learn to represent and reason about the planning problems they are solving? Due to the relative complexity of classical planning problems and the challenge that end-to-end plan generation poses for LLMs, it has been difficult to explore this question. In our work, we devise and perform a series of interpretability experiments that holistically interrogate world model recovery by examining b…",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Supervised fine-tuning (SFT) improves end-to-end classical planning in large language models (LLMs), but do these models also learn to represent and reason about the planning prob…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.03685v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03685v1",
          "published": "2026-06-02T14:09:16Z",
          "updated": "2026-06-02T14:09:16Z",
          "authors": [
            "Patrick Emami",
            "Nan Qiang",
            "Peter Graf"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 41,
          "llmTotalScore": null
        },
        {
          "id": "2606.03003v1",
          "title": "Exact equivariance, kept through training, buys zero-shot generalisation across the symmetry group",
          "summary": "A latent world model built from an equivariant encoder $E$ and an equivariant predictor $f$ inherits a provable symmetry of its training loss: when the world's dynamics genuinely carries a group $G$ acting on latents by an orthogonal representation $ρ(g)$, the one-step prediction relMSE is exactly invariant across the whole group, so fitting the dynamics on a restricted slice of orientations mathematically determines it on the entire orbit (jǔ yī fǎn sān). We verify this end-to-end at laptop scale (CPU/MPS, fully…",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：A latent world model built from an equivariant encoder $E$ and an equivariant predictor $f$ inherits a provable symmetry of its training loss: when the world's dynamics genuinely…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.04264v1",
          "title": "UniCanvas: A Diffusion-base Unified Model for Text-in-Image Joint Generation",
          "summary": "Recent years have seen remarkable progress in unified vision-language models handling both multimodal understanding and generation within a single architecture. While autoregressive VLMs can reason across modalities, they fail to generate high-quality images. In contrast, diffusion models produce photorealistic visuals yet struggle to generate coherent text, making it challenging to develop a single unified model that can seamlessly handle both visual and text generation.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Recent years have seen remarkable progress in unified vision-language models handling both multimodal understanding and generation within a single architecture. While autoregressi…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04264v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04264v1",
          "published": "2026-06-02T22:30:46Z",
          "updated": "2026-06-02T22:30:46Z",
          "authors": [
            "Zeyuan Yang",
            "Hao-Wei Chen",
            "Xueyang Yu",
            "Yuncong Yang",
            "Haoyu Zhen",
            "Ziqiao Ma",
            "Maohao Shen",
            "Chuang Gan"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 24,
          "llmTotalScore": null
        },
        {
          "id": "2606.04184v1",
          "title": "GroupToM-Bench: Benchmarking Group Theory of Mind and Nonlinear Social Emergence in MLLMs",
          "summary": "True general intelligence requires not only a model of the physical world but also a social world model: the capacity to infer how individual mental states interact and crystallize into group-level outcomes. Despite notable progress in individual-level Theory of Mind (ToM) reasoning, existing multimodal large language models fail at this broader task. Collective behavior emerges non-linearly from social tensions, conformity dynamics, and structural constraints, meaning it cannot be recovered by merely summing indi…",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：True general intelligence requires not only a model of the physical world but also a social world model: the capacity to infer how individual mental states interact and crystalliz…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04184v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04184v1",
          "published": "2026-06-02T20:06:32Z",
          "updated": "2026-06-02T20:06:32Z",
          "authors": [
            "Weidong Tang",
            "Jierui Li",
            "Yueling Hou",
            "Zihan Mei",
            "Can Zhang",
            "Xinyan Wan",
            "Zhiyuan Liang",
            "Pengfei Zhou",
            "Yang You",
            "Wangbo Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 24,
          "llmTotalScore": null
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "llmTotalScore": null
        },
        {
          "id": "2606.03603v1",
          "title": "World Models Meet Language Models: On the Complementarity of Concrete and Abstract Reasoning",
          "summary": "World models and multimodal large language models (MLLMs) provide complementary capabilities for predicting future outcomes from static visual observations. World models can generate concrete visual rollouts of possible futures, while MLLMs can reason abstractly over questions, goals, and rules. However, generated rollouts are stochastic and may be visually plausible but task-incorrect, making it necessary to determine when visual simulation is useful, whether a rollout is credible, and how it should influence the…",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：World models and multimodal large language models (MLLMs) provide complementary capabilities for predicting future outcomes from static visual observations. World models can gener…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
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
          "heuristicScore": 24,
          "llmTotalScore": null
        },
        {
          "id": "2606.03385v1",
          "title": "Grasp-Then-Plan with Failure Attribution: A Closed Two-Stage Framework for Precise and Generalizable Robotic Manipulation",
          "summary": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. To enable efficient long-horizon manipulation, we propose GTP-FA (Grasp-Then-Plan with Failure Attribution), a task-oriented two-stage grasp-then-plan framework that generates grasp candidates and performs downstream motion planning conditioned on the selected grasp. Given a failed manipulation trajectory, we learn a failure attribution model that gener…",
          "summaryCn": "这篇论文围绕 VLA 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. To enable effic…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.03385v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03385v1",
          "published": "2026-06-02T09:29:03Z",
          "updated": "2026-06-02T09:29:03Z",
          "authors": [
            "Jiahao Xu",
            "Peiyuan Wang",
            "Hanzhuo Zhang",
            "Zihao Yu",
            "Tianyu Fu",
            "Hao Chen",
            "Xuanhao Xiang",
            "Jianbo Yu",
            "Chenchen Fu",
            "Wanyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 24,
          "llmTotalScore": null
        },
        {
          "id": "2606.04291v1",
          "title": "A Cookbook of 3D Vision: Data, Learning Paradigms, and Application",
          "summary": "3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representations and benchmarks, making it difficult to develop unified perspectives on efficiency, fidelity, and scalability. This work provides a data-centric taxonomy of 3D vision that connects geometric representations, datasets, learning frameworks, and applications within a single conceptual map.",
          "summaryCn": "这篇论文围绕 WAM 主线展开，问题设置与方法设计具有直接相关性。从摘要看，它的核心内容是：3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representa…。如果你关注该方向近期进展，这篇论文值得优先浏览原文。",
          "reasonCn": "规则回退：标题和摘要多次命中 VLA / WAM 相关术语，因此被保留。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.04291v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04291v1",
          "published": "2026-06-02T23:41:52Z",
          "updated": "2026-06-02T23:41:52Z",
          "authors": [
            "Hongyang Du",
            "Zongxia Li",
            "Dawei Liu",
            "Runhao Li",
            "Haoyuan Song",
            "Qingyu Zhang",
            "Yubo Wang",
            "Jingcheng Ni",
            "Shihang Gui",
            "Congchao Dong"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 16,
          "llmTotalScore": null
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-11T02:55:09.911267+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM 提出以语义事件为原子单元的世界-行动模型，解决了视频-动作学习中粒度不匹配问题。通过事件驱动的VLA预训练和数据生态，支持可变长度动作执行。在多样行为场景下实现可扩展学习。",
          "reasonCn": "论文提出事件驱动的世界-行动模型，同时融合视觉-语言-动作预训练，符合VLA和WAM双重标准。",
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
          "summaryCn": "AHEAD提出一个预测-再行动的框架，通过潜在世界模型预测未来视觉特征，使VLA能处理动态物体。在仿真和真实实验中显著提升了动态抓取成功率，轻量化嵌入冻结VLA。",
          "reasonCn": "论文为动态VLA操控引入预测性世界模型，直接结合视觉-语言-动作和世界模型进行动作预测。",
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
          "llmTotalScore": 113
        },
        {
          "id": "2606.02313v1",
          "title": "Towards Precise Intent-Aligned VLA Aerial Navigation via Expert-Guided GRPO",
          "summary": "Vision-Language-Action (VLA) models offer a promising end-to-end paradigm for unmanned aerial vehicles (UAVs) to accomplish complex tasks specified by fine-grained instructions. However, standard supervised fine-tuning (SFT) suffers from data scarcity, limited generalization, and weak supervision for nuanced and complicated human intents. Reinforcement fine-tuning offers a natural way to mitigate these challenges and align policy behaviors with human intents through designable feedback, but applying it to aerial n…",
          "summaryCn": "针对无人机精细指令导航，提出EG-GRPO强化学习框架，利用专家引导的GRPO提升VLA策略的意图对齐能力和成功率。通过异构并行管道加速训练，在复杂任务上显著优于监督微调。",
          "reasonCn": "论文提出用于无人机导航的VLA模型，结合视觉-语言指令输出动作，符合VLA标准。",
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
          "llmTotalScore": 78
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operat…",
          "summaryCn": "论文指出VLA策略中将SE(3)姿态表达为欧几里得向量的几何错误，提出在切空间上进行分数匹配的Lie Diffuser Actor，保持流形约束和等变性，在CALVIN和真实机器人上提升任务长度。",
          "reasonCn": "论文提出基于扩散的VLA策略，解决欧几里得谬误，直接涉及视觉-语言-动作。",
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
          "llmTotalScore": 75
        },
        {
          "id": "2606.02735v2",
          "title": "See Less, Specify More: Visual Evidence Budgets for Generalizable VLAs",
          "summary": "Generalization remains a central bottleneck for vision-language-action (VLA) models: under distractors, appearance shifts, and semantically similar tasks, the policy must often infer local execution details from coarse instructions while also deciding which parts of the image matter for control. We present S2 (See Less, Specify More), a framework for improving VLA generalization by training the executor under a cleaner interface. Specify More preserves the original instruction as a stable high-level goal while rel…",
          "summaryCn": "S2框架通过保留原始指令作为高层目标并用细粒度执行描述重新标记轨迹，结合显式视觉证据预算，提升VLA的泛化性。无需区域标注，兼容现成VLM规划器，改善了歧义场景下的性能。",
          "reasonCn": "论文提出提升VLA泛化能力的框架，通过视觉证据预算和精细指令，直接涉及视觉-语言-动作。",
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
          "llmTotalScore": 54
        },
        {
          "id": "2606.02800v2",
          "title": "Cosmos 3: Omnimodal World Models for Physical AI",
          "summary": "We introduce Cosmos 3, a family of omnimodal world models designed to jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. By supporting highly flexible input-output configurations, Cosmos 3 seamlessly unifies critical modalities for Physical AI -- effectively subsuming vision-language models, video generators, world simulators, and world-action models into a single framework. Our evaluation demonstrates that Cosmos 3 establishes a…",
          "summaryCn": "Cosmos 3提出全模态世界模型，通过混合Transformer架构统一处理语言、图像、视频、音频和动作，为物理AI提供通用基础。在多个理解和生成任务上达最佳，并开源支持具身智能。",
          "reasonCn": "Cosmos 3 是统一处理语言、视觉、动作等模态的全模态世界模型，明确用于具身智能体的动作预测。",
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
          "llmTotalScore": 53
        },
        {
          "id": "2606.02775v1",
          "title": "AURA: Action-Gated Memory for Robot Policies at Constant VRAM",
          "summary": "The KV-cache is the right memory for datacenters but the wrong memory for robots. Datacenter inference batches many short requests and resets them, amortizing an attention cache across a crowd. Embodied agents instead run one long, non-resetting episode on bandwidth-limited edge hardware, where high-bandwidth memory and flash are scarce, flash has finite write endurance, and memory writes rather than compute can become the binding constraint.",
          "summaryCn": "AURA-Mem提出恒定大小的循环记忆和动作惊喜门控，在固定VRAM下为机器人VLA策略提供长时记忆，显著减少写入次数，适合边缘部署。",
          "reasonCn": "论文为VLA策略提出动作门控记忆模块，直接基于视觉-语言-动作模型工作。",
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
          "llmTotalScore": 52
        },
        {
          "id": "2606.02745v1",
          "title": "SeeTraceAct: Visibility-Aware Latent Planning from Cross-Embodiment Demonstration Videos",
          "summary": "Vision-language-action models (VLAs) are promising general-purpose robot policies, but adapting them to new tasks typically requires costly task-specific teleoperation data. As an alternative, we study one-shot demo-conditioned VLAs, where a robot policy is conditioned on a single demonstration video of an unseen task. We find that existing end-to-end approaches often struggle when successful execution requires precisely localizing small target regions.",
          "summaryCn": "SeeTraceAct通过可见性感知的末端轨迹预测，实现跨平台演示视频下的空间精确定位，无需任务特定遥操作数据。在RoboCasa-DC和真实世界实验中提升成功率。",
          "reasonCn": "论文提出基于演示视频条件的VLA框架，使用视觉-语言输入预测机器人动作，符合VLA标准。",
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
          "llmTotalScore": 50
        },
        {
          "id": "2606.01950v1",
          "title": "Learning Action-Conditional and Object-Centric Gaussian Splatting World Models for Rigid Objects",
          "summary": "World models enable intelligent agents to predict the consequences of their actions on the environment. In this paper, we propose Multi Rigid Object Gaussian World Model (MRO-GWM), a novel model that learns action-conditional dynamics of rigid objects in 3D. By representing the scene by object-centric Gaussians, we can represent arbitrary object shapes and multi-object scenes.",
          "summaryCn": "MRO-GWM学习刚体对象的动作条件3D高斯动态，通过时空Transformer预测未来运动，适用于多对象场景。模型支持模型预测控制，实现非抓取操控。",
          "reasonCn": "论文提出动作条件的物体中心高斯世界模型，用于机器人操控的预测控制，符合WAM标准。",
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
          "llmTotalScore": 49
        },
        {
          "id": "2606.01951v1",
          "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
          "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches to mobile robot navigation remains challenging due to viewpoint changes during locomotion. In this paper, we propose a framework that converts egocentric walking videos into dataset…",
          "summaryCn": "提出将自我中心步行视频转化为移动机器人模仿学习数据的方法，与机器人数据联合训练VLA模型，提升语言理解和动作鲁棒性，降低数据采集成本。",
          "reasonCn": "论文通过自我中心视频与演示联合训练VLA模型，实现移动机器人导航，涉及视觉-语言-动作。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesiz…",
          "summaryCn": "RoboDream提出组合式世界模型，通过解耦轨迹和环境合成逼真演示，支持检索重生和无道具遥操作。生成的数据显著提升下游策略性能，减少真实数据需求。",
          "reasonCn": "RoboDream 是具身中心的世界模型，基于机器人运动条件生成演示，直接用于机器人数据扩增，服务于动作策略学习。",
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
          "llmTotalScore": 47
        },
        {
          "id": "2606.02436v1",
          "title": "Geometry-Aware Implicit Memory for Video World Models",
          "summary": "Video world models aim to simulate controllable visual environments, but long-horizon rollouts depend on what the model remembers after observations leave its native context window. Explicit memories retain frames or online 3D reconstructions, which can suffer from heuristic retrieval errors, redundant appearance storage, or reconstruction artifacts. Implicit memories compress history into a compact state, but existing designs are not explicitly constrained to encode cross-view scene geometry.",
          "summaryCn": "GIM-World通过几何感知记忆令牌和相机可查询几何头，提升视频世界模型的长期几何和视觉一致性。轻量级模块在MIND数据集上优于显式和隐式记忆基线。",
          "reasonCn": "论文提出几何感知隐式记忆框架用于视频世界模型，旨在增强长期一致性，服务于可控制环境的模拟，隐含动作控制。",
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
          "llmTotalScore": 44
        },
        {
          "id": "2606.02575v1",
          "title": "From Zero to Hero: Training-Free Custom Concept Spawning in World Models",
          "summary": "Autoregressive world models have emerged as a powerful paradigm for interactive video generation, allowing users to navigate dynamically generated environments through actions. These models are typically conditioned on a text prompt and/or a single reference frame, from which the entire world is generated. Yet the moment the user navigates beyond what is visible in that frame, the unseen regions are populated by the base model's priors, with no mechanism for the user to specify what should appear and where.",
          "summaryCn": "SPAWN利用图像到视频模型的记忆特性，实现无需训练的视觉概念注入，使世界模型在交互中动态生成指定内容。适用于游戏和模拟，增强可控性。",
          "reasonCn": "论文提出世界模型中自定义概念注入方法，基于动作条件的自回归视频生成，服务于交互式模拟。",
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
          "heuristicScore": 39,
          "llmTotalScore": 39
        },
        {
          "id": "2606.01626v1",
          "title": "IMWM: Intuition Models Complement World Models for Latent Planning",
          "summary": "Planning with a learned latent world model is a promising route to control from raw pixels, but a strong world model alone is not enough. We show this experimentally: even with a perfect world model (operationalized by replacing the learned forward predictor with an idealized rollout of the true environment dynamics), a finite-budget sample-based planner still fails on some tasks, indicating that the bottleneck can lie in search rather than in world-model accuracy. Motivated by this gap, we propose IMWM (Intuition…",
          "summaryCn": "IMWM将世界模型与演示学习的直觉模型结合，通过检索初始化、混合成本和可靠性门控提升规划效率，在像素目标到达任务上显著优于单纯世界模型规划器。",
          "reasonCn": "论文结合直觉模型和世界模型进行潜在规划，世界模型用于像素级控制任务的动作规划。",
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
          "llmTotalScore": 37
        },
        {
          "id": "2606.02027v1",
          "title": "World-Task Factorization for Robot Learning",
          "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations.",
          "summaryCn": "通过贝叶斯模型证据证明世界-任务分解的合理性，结合可微分图和紧凑学习策略，实现无需任务特定数据的高泛化性机器人控制。",
          "reasonCn": "论文将机器人策略分解为世界模型和任务模型，世界模型用于动作梯度传播，符合WAM标准。",
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
          "llmTotalScore": 30
        },
        {
          "id": "2606.01935v2",
          "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
          "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision.",
          "summaryCn": "提出表示和几何引导的离散分词器，在DINO特征空间和深度姿态监督下联合训练，服务于驾驶世界模型和规划。在NAVSIM上提升重建和规划性能。",
          "reasonCn": "论文为驾驶世界模型提出统一离散分词器，用于规划，涉及动作预测。",
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
          "llmTotalScore": 24
        },
        {
          "id": "2606.01520v1",
          "title": "TERRA: Task-Embedded Reasoning and Representation Architecture for Cross-Domain Applications",
          "summary": "A single action-conditioned latent predictive architecture can in principle be trained on the structured state of a driving scene, a robot workspace, or a financial order book. The ingredients for doing so within any one domain already exist and are individually validated: masked-latent prediction, action-conditioned latent world models, discrete action tokenization, and joint-embedding prediction on voxelized state. What is not established, and what TERRA addresses, is the transfer question: when does a represent…",
          "summaryCn": "TERRA提出跨域动作条件表示架构，通过马尔可夫决策过程同态和Gromov-Wasserstein距离量化可迁移性，为结构化状态域中的世界模型迁移提供理论依据。",
          "reasonCn": "论文研究跨域动作条件潜世界模型，明确用于动作条件下的预测和控制。",
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
          "llmTotalScore": 24
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-11T02:52:23.863923+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "提出行为与表征诊断框架，从行为与特征空间分析VLA与WAM差异；揭示未来预测如何影响动作动态及内部表征；为具身策略评估提供新视角。",
          "reasonCn": "论文涉及VLA和WAM的对比诊断框架，符合两者标准。",
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
          "summaryCn": "针对低成本农业机械臂优化VLA模型推理的线程实现；通过RTAC算法降低延迟提升控制稳定性；在抓取农产品的任务上验证有效性。",
          "reasonCn": "论文明确针对VLA模型推理优化，用于农业机器人操作，涉及视觉-语言-动作。",
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
          "summaryCn": "提出τ0-WM统一视频-动作世界模型；基于扩散backbone联合预测未来视觉和动作，并评估候选动作；在长程精细操作任务上表现优越。",
          "reasonCn": "统一视频-动作世界模型，接收语言指令并预测动作，同时进行未来状态预测和评估，符合WAM和VLA。",
          "lane": "BOTH",
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
          "id": "2606.00985v1",
          "title": "Make Your VLA More Robust Without More Data By Interleaving Motion Planning",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable progress for mobile manipulation, but their performance on long-horizon tasks remains poor. These tasks are especially challenging because (1) progress toward high-level goals must be maintained across extended sequences of spatially distributed subtasks, and (2) early execution errors compound rapidly over the task horizon. These challenges persist despite finetuning on large human teleoperated mobile manipulation data, indicating that more data alone may…",
          "summaryCn": "提出MPVI框架将运动规划与VLA交错；利用VLM完成检查和本体感觉触发切换模块；在BEHAVIOR-1K上任务进度提升113%。",
          "reasonCn": "论文通过运动规划与VLA模型交错，提升长程移动操作鲁棒性，直接涉及VLA。",
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
          "summaryCn": "提出LEGS混合模拟器，用3DGS背景与程序化动作生成免遥控训练数据；微调多种VLA骨干网络，在实物实验中匹配或超越人类遥操作训练的策略。",
          "reasonCn": "论文针对人形机器人操作微调VLA策略，免遥控采集数据，使用高斯泼溅环境，符合VLA。",
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
          "summaryCn": "提出OneVLA统一导航与操作的VLA框架；设计统一动作头和多阶段训练策略；在模拟与真实环境实现领先性能。",
          "reasonCn": "提出统一VLA模型处理导航与操作，涉及视觉、语言、动作。",
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
          "summaryCn": "提出ImagineUAV，利用潜视频扩散模型想象指令条件下的未来，从而推断6DoF动作；结合动力学规划实现碰撞避免；在基准和真实飞行中优于基线。",
          "reasonCn": "提出想象力驱动框架，结合世界模型预测未来观测并提取动作，同时接收语言指令，符合VLA和WAM。",
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
          "llmTotalScore": 48
        },
        {
          "id": "2606.01372v1",
          "title": "BRo-JEPA: Learning Modular Arithmetic in Latent Space",
          "summary": "Can neural networks learn abstract algebraic rules, or do they merely memorize training patterns? We investigate this using MNIST digits as states and modular arithmetic operations as actions in a JEPA-style latent world model. Standard supervised baselines and JEPA models with additive operation embeddings fit seen operations but fail to extrapolate reliably to unseen ones.",
          "summaryCn": "提出BRo-JEPA世界模型，在潜空间学习模运算变换；通过块旋转预测器实现零样本泛化；实验表明架构与问题结构匹配可实现符号规则学习。",
          "reasonCn": "基于JEPA的世界模型，以数字图像为状态、模运算为动作，实现零样预测，符合WAM。",
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
          "llmTotalScore": 30
        }
      ]
    }
  ]
};

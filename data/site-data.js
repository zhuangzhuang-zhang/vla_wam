window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-07T14:08:18.448455+00:00",
  "description": "每天北京时间 08:00 自动更新，筛选 arXiv 上与 VLA、WAM、机器人、自动驾驶相关的重要新论文。",
  "dateWindowDays": 7,
  "categories": [
    "cs.RO",
    "cs.AI",
    "cs.CV",
    "cs.LG"
  ],
  "keywords": [
    "vision-language-action",
    "world action model",
    "robotics",
    "autonomous driving"
  ],
  "currentDateKey": "20260607",
  "selectionMethod": "keyword_ranking_plus_deepseek_summary",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260607",
      "dateLabel": "2026-06-07",
      "generatedAt": "2026-06-07T14:08:18.448436+00:00",
      "papers": []
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-06-07T14:08:18.448304+00:00",
      "papers": []
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-06-07T14:08:18.447612+00:00",
      "papers": [
        {
          "id": "2606.06155v1",
          "title": "AffordanceVLA: A Vision-Language-Action Model Empowering Action Generation through Affordance-Aware Understanding",
          "summary": "Vision-Language-Action (VLA) models leverage the rich world knowledge of pretrained vision-language models (VLMs) to enable instruction-following robotic manipulation. However, the structural mismatch between VLM semantic spaces and embodied control policies often hinders the learning of precise perception--action map…",
          "summaryCn": "提出可供性感知视觉-语言-动作模型，通过引入可供性感知理解，解决预训练VLM语义空间与具身控制策略的结构不匹配问题，提升机器人指令跟随操作精度。",
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
          "score": 88
        },
        {
          "id": "2606.06491v1",
          "title": "TempoVLA: Learning Speed-Controllable Vision-Language-Action Policies",
          "summary": "Robot manipulation alternates between low-risk transit phases that call for fast execution and high-risk contact stages that demand slow, precise motion. Yet existing Vision-Language-Action models (VLAs) only inherit a single fixed speed from training demonstrations.",
          "summaryCn": "提出速度可控视觉-语言-动作策略TempoVLA，使机器人能够根据任务阶段自适应调整速度，在快速转运和精细接触操作间切换。",
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
          "score": 80
        },
        {
          "id": "2606.06147v1",
          "title": "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation",
          "summary": "End-to-end Vision-Language-Action (VLA) models have shown promise in UAV navigation. However, existing approaches typically rely on historical observations to directly predict actions, often struggling in dense urban environments where severe occlusions and sharp turns result in drastic viewpoint transitions.",
          "summaryCn": "提出基于世界模型的无人机导航模型WorldFly，通过世界模型预测未来状态，克服密集城市环境中遮挡和视点突变导致的动作预测困难。",
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
          "score": 79
        },
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos…",
          "summaryCn": "提出世界-语言-动作模型(WLA)，统一世界建模、语言推理和动作合成，从自我中心视频中联合学习子任务规划、子目标图像和机器人动作。",
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
          "score": 77
        },
        {
          "id": "2606.05773v1",
          "title": "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation",
          "summary": "Vision-language-action (VLA) policies operate in a closed loop in real-world robot tasks: a robot observes the scene, executes an action chunk, and conditions its next decision on the resulting observation. However, most existing world models for robot action evaluation are limited to open-loop prediction along pre-co…",
          "summaryCn": "提出分块世界模型PiL-World，用于视觉-语言-动作策略的闭环评估，克服现有开环预测局限，实现真实机器人任务中的在线策略测试。",
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
          "score": 72
        },
        {
          "id": "2606.05737v1",
          "title": "Let It Be Simple: One-Step Action Generation for Vision-Language-Action Models",
          "summary": "Diffusion-based vision-language-action (VLA) models often inherit the image-generation view: actions are generated by iterative denoising. We argue that VLA action generation has a different condition-target structure: the policy is conditioned on rich observations, language, and state, but predicts only a compact, lo…",
          "summaryCn": "针对扩散VLA的迭代去噪冗余，提出一步动作生成方法，利用丰富感知条件直接预测动作序列，简化推理过程并保持操作性能。",
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
          "score": 72
        },
        {
          "id": "2606.06255v1",
          "title": "RadiusFPS: Efficient Farthest Point Sampling on CPUs and GPUs via Spherical Voxel Pruning",
          "summary": "Point clouds are a primary sensory representation for robotic perception, underpinning LiDAR-based autonomous driving, simultaneous localization and mapping (SLAM), and navigation. Within these pipelines, Farthest Point Sampling (FPS) is the most well-known downsampling operator, as its uniform coverage preserves the…",
          "summaryCn": "提出RadiusFPS，一种基于球形体素剪枝的高效最远点采样算法，在CPU和GPU上显著加速点云下采样，适用于机器人和自动驾驶感知。",
          "link": "https://arxiv.org/abs/2606.06255v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06255v1",
          "published": "2026-06-04T14:57:05Z",
          "updated": "2026-06-04T14:57:05Z",
          "authors": [
            "Ziyang Yu",
            "Xiang Li",
            "Qiong Chang",
            "Jun Miyazaki"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "score": 64
        },
        {
          "id": "2606.05660v1",
          "title": "Safe Embodied AI for Long-horizon Tasks: A Cross-layer Analysis of Robotic Manipulation",
          "summary": "Embodied AI systems are increasingly expected to reason and act over extended horizons in physical environments. This growing capability brings safety to the foreground, because failures in the physical world can harm people, damage objects, and disrupt workplaces.",
          "summaryCn": "针对具体AI在长程操作中的安全问题，对机器人操作进行跨层分析，揭示安全关键因素，为设计安全策略提供框架性指导。",
          "link": "https://arxiv.org/abs/2606.05660v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05660v1",
          "published": "2026-06-04T03:43:09Z",
          "updated": "2026-06-04T03:43:09Z",
          "authors": [
            "Dabin Kim",
            "Daemin Park",
            "Sangyub Lee",
            "Jinsik Kim",
            "Yeongtak Oh",
            "Jongho Shin",
            "Sungroh Yoon"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 63
        },
        {
          "id": "2606.05677v1",
          "title": "LongSpace: Exploring Long-Horizon Spatial Memory from Perception to Recall in Video",
          "summary": "Multimodal Large Language Models (MLLMs) have advanced image and video understanding and can increasingly handle longer visual inputs. Long-horizon tasks such as autonomous driving and robotic navigation require more than recognizing the current view, as models must remember and retrieve previously observed spatial la…",
          "summaryCn": "提出LongSpace，探索视频中长时空间记忆，使多模态大模型能记忆和检索先前空间布局，增强自动驾驶和导航等长程任务的空间推理能力。",
          "link": "https://arxiv.org/abs/2606.05677v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05677v1",
          "published": "2026-06-04T04:00:12Z",
          "updated": "2026-06-04T04:00:12Z",
          "authors": [
            "Shiqiang Lang",
            "Jing Liu",
            "Haoyang He",
            "Peiwen Sun",
            "Yuanteng Chen",
            "Tao Liu",
            "Lan Yang",
            "Longteng Guo",
            "Honggang Zhang"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "score": 61
        },
        {
          "id": "2606.05960v1",
          "title": "Towards a Data Flywheel for Embodied Intelligence in Logistics",
          "summary": "Embodied intelligence is moving from laboratory demonstrations toward industrial deployment, with the logistics industry serving as a key application scenario. Learning-based policies offer a promising path beyond traditional perception-planning-control pipelines, but their scalability depends on how embodied data can…",
          "summaryCn": "提出面向物流具体智能的数据飞轮方法，通过持续采集和利用具体数据，推动学习型策略在工业物流中的可扩展部署。",
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
          "score": 57
        },
        {
          "id": "2606.06245v1",
          "title": "MPCoT: Reward-Guided Multi-Path Latent Reasoning for Test-Time Scalable Vision-Language-Action",
          "summary": "Vision-Language-Action (VLA) policies remain brittle in long-horizon and high-uncertainty control, where one-pass action decoding provides limited inference-time deliberation. Explicit chain-of-thought can increase reasoning depth, but introduces token latency and an indirect text-to-action interface.",
          "summaryCn": "提出基于奖励引导的多路径潜在推理方法MPCoT，在测试时扩展VLA的推理深度，无需额外文本延迟，提升长程和不确定控制的鲁棒性。",
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
          "score": 54
        },
        {
          "id": "2606.06049v1",
          "title": "L-SDPPO: Policy Optimization of Spiking Diffusion Policy for Intra-vehicular Robotic Manipulation",
          "summary": "Intra-vehicular robots in spacecraft help reduce astronaut workload and improve mission efficiency. Recent research focuses on using deep learning methods to achieve the acute control required for operations in these complex environments.",
          "summaryCn": "提出脉冲扩散策略的强化学习方法L-SDPPO，用于航天器内机器人操作，实现高能效和精确的低级控制。",
          "link": "https://arxiv.org/abs/2606.06049v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06049v1",
          "published": "2026-06-04T11:45:37Z",
          "updated": "2026-06-04T11:45:37Z",
          "authors": [
            "Liwen Zhang",
            "Dong Zhou",
            "Guanghui Sun",
            "Yifei Zheng",
            "Yuhui Hu",
            "Kaihong Ouyang",
            "Zuoquan Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 52
        },
        {
          "id": "2606.06014v1",
          "title": "PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models",
          "summary": "Latent world models (LWMs) have strengthened end-to-end autonomous driving by forecasting compact scene dynamics for downstream planning. However, existing LWM-based planners usually generate trajectories directly from entangled latent representations.",
          "summaryCn": "提出PLAN-S，通过解耦潜在风格动态，为自动驾驶世界模型提供更清晰的环境表示，提升端到端规划的准确性与多样性。",
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
          "score": 50
        },
        {
          "id": "2606.05758v1",
          "title": "DRIFT: A Residual Flow Adapter for Decoding Continuous Outputs in Vision-Language Models",
          "summary": "Many modern vision-language models (VLMs) build on autoregressive decoding of discrete tokens. While text-based output interfaces enable scalable pretraining and strong zero-shot generalization across diverse tasks, they are poorly suited for problems that require precise continuous outputs, such as localizing tempora…",
          "summaryCn": "提出残差流适配器DRIFT，使视觉语言模型能自回归生成精确连续输出，解决时间定位等任务中连续预测难题。",
          "link": "https://arxiv.org/abs/2606.05758v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05758v1",
          "published": "2026-06-04T06:37:10Z",
          "updated": "2026-06-04T06:37:10Z",
          "authors": [
            "Zhuoming Liu",
            "Jinhong Lin",
            "Kwan Man Cheng",
            "Lin Zhang",
            "Shayok Bagchi",
            "Yin Li"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.LG"
          ],
          "score": 50
        },
        {
          "id": "2606.06041v1",
          "title": "Sample-efficient Low-level Motion Planning for Robotic Manipulation Tasks via Zero-shot Transfer Learning",
          "summary": "As robotic systems become more sophisticated, the growing complexity of their motion planning models and the longer training times pose substantial challenges. Evolutionary algorithms such as the Sample-efficient Cross-Entropy Method (iCEM) have recently demonstrated promising potential for low-level real-time plannin…",
          "summaryCn": "通过零样本迁移学习，提升基于进化算法的机器人操作低级运动规划的样本效率，缩短训练时间并适应复杂模型。",
          "link": "https://arxiv.org/abs/2606.06041v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06041v1",
          "published": "2026-06-04T11:34:50Z",
          "updated": "2026-06-04T11:34:50Z",
          "authors": [
            "Yuanzhi He",
            "Victor Romero-Cano",
            "José J. Patiño",
            "Juan David Hernández",
            "William Sawtell",
            "Gualtiero Colombo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 48
        },
        {
          "id": "2606.05645v1",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape the evolution of the surrounding world. However, most end-to-end methods rely on direct state-to-action mappings, capturing correlations without explicitly modeling action-conditioned dynamics.",
          "summaryCn": "提出离散视觉-动作令牌编辑框架Discrete-WAM，显式建模动作条件世界动态，实现自动驾驶的世界-策略联合学习。",
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
          "score": 48
        },
        {
          "id": "2606.06130v1",
          "title": "Towards Realistic 3D Sonar Simulation",
          "summary": "As underwater robotics research increasingly addresses complex 3D perception and autonomous navigation, the fidelity of sonar simulation has become a key factor in algorithm development. Current simulation frameworks typically rely on geometry-driven rendering, approximating 3D sonar as an underwater equivalent to LiD…",
          "summaryCn": "针对水下机器人声纳仿真，提出一种走向真实感的方法，通过更精确的物理建模提升3D声纳仿真保真度，助力算法开发。",
          "link": "https://arxiv.org/abs/2606.06130v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06130v1",
          "published": "2026-06-04T13:16:32Z",
          "updated": "2026-06-04T13:16:32Z",
          "authors": [
            "Youssef Attia",
            "Davide Costa",
            "Francesco Wanderlingh",
            "Filippo Campagnaro",
            "Enrico Simetti"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 47
        },
        {
          "id": "2606.06077v1",
          "title": "3D Underwater Path Planning via Generative Flow Field Surrogates",
          "summary": "Autonomous underwater vehicle (AUV) launch and recovery (LAR) into the hull of an advancing host platform requires traversal of a complex, three-dimensional propeller wake whose hydrodynamic structure cannot be characterised by a uniform current model. High-fidelity Reynolds-Averaged Navier-Stokes (RANS) Computational…",
          "summaryCn": "提出基于生成流场代理的3D水下路径规划方法，学习高保真CFD流场低维表示，实现AUV在复杂尾流中的实时路径规划。",
          "link": "https://arxiv.org/abs/2606.06077v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06077v1",
          "published": "2026-06-04T12:14:59Z",
          "updated": "2026-06-04T12:14:59Z",
          "authors": [
            "Zachary Cooper-Baldock",
            "Paulo E. Santos",
            "Russell S. A. Brinkworth",
            "Karl Sammut"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "score": 47
        },
        {
          "id": "2606.06281v1",
          "title": "Multi-Resolution Tactile Imitation Learning for Contact-Rich Robotic Manipulation",
          "summary": "Touch sensing is beneficial for solving a wide variety of manipulation tasks. While there exists a wide range of tactile sensors with different properties, exploiting the fusion of multiple heterogeneous tactile sensors to improve manipulation learning remains underexplored.",
          "summaryCn": "探索多分辨率异构触觉传感器融合的模仿学习，用于接触丰富机器人操作，发挥不同触觉传感互补优势，提升操作性能。",
          "link": "https://arxiv.org/abs/2606.06281v1",
          "pdfLink": "https://arxiv.org/pdf/2606.06281v1",
          "published": "2026-06-04T15:23:03Z",
          "updated": "2026-06-04T15:23:03Z",
          "authors": [
            "Rickmer Krohn",
            "Erik Helmut",
            "Niklas Funk",
            "Jan Peters",
            "Vignesh Prasad",
            "Georgia Chalvatzaki"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 46
        },
        {
          "id": "2606.05923v1",
          "title": "Run and tumble dynamics of a soft robotic cell",
          "summary": "The continuous regulation of transport properties through softness remains a longstanding challenge in active matter. Here, we show that encasing a programmable active particle within a deformable membrane naturally gives rise to intermittent stop-and-go dynamics, with ballistic motion at short times crossing over to…",
          "summaryCn": "展示将可编程活性粒子封装于可变形膜内自然产生间歇性跑-跌动力学，实现软体机器人运输特性连续调节，为活性物质控制提供新思路。",
          "link": "https://arxiv.org/abs/2606.05923v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05923v1",
          "published": "2026-06-04T09:26:56Z",
          "updated": "2026-06-04T09:26:56Z",
          "authors": [
            "Siddhant Mohapatra",
            "Fanny Wéry",
            "Filip Novkoski",
            "Piotr Nowakowski",
            "Ana-Suncana Smith",
            "Nicolas Vandewalle"
          ],
          "categories": [],
          "score": 45
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-06-07T14:07:05.376005+00:00",
      "papers": [
        {
          "id": "2606.04825v1",
          "title": "HapTile: A Haptic-Informed Vision-Tactile-Language-Action Dataset for Contact-Rich Imitation Learning",
          "summary": "Despite the importance of tactile sensing for reliable manipulation, most existing Vision-Language-Action (VLA) datasets remain vision-only, and those that do incorporate tactile information typically lack the joint combination of task diversity, language conditioning, and action trajectories. Furthermore, existing te…",
          "summaryCn": "提出融合触觉的视觉语言动作数据集，用于接触丰富任务模仿学习，弥补任务多样性、语言条件与动作轨迹联合缺失。",
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
          "score": 73
        },
        {
          "id": "2606.04436v1",
          "title": "3DThinkVLA: Endowing Vision-Language-Action Models with Latent 3D Priors via 3D-Thinking-Guided Co-training",
          "summary": "We propose a 3D-thinking-guided co-training framework that enables vision-language-action (VLA) models to perform 3D spatial reasoning implicitly during action prediction. Our core insight is that 3D geometry perception and 3D spatial reasoning are distinct capabilities that can be disentangled and injected at differe…",
          "summaryCn": "提出3D思维引导共训练框架，让VLA模型在动作预测时隐式进行3D空间推理，分离3D几何感知与空间推理能力。",
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
          "score": 66
        },
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods…",
          "summaryCn": "通过模态感知蒸馏加速世界动作模型，从数十步扩散降至少步，满足实时控制需求，并维持操作性能。",
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
          "score": 64
        },
        {
          "id": "2606.04708v2",
          "title": "VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training",
          "summary": "Universal Manipulation Interface (UMI) enables scalable real-world robot data collection without hardware-specific teleoperation, yet leveraging UMI data to train large-scale Vision-Language-Action (VLA) models remains fundamentally challenging. We identify two critical mismatches: wrist-mounted fisheye views, with se…",
          "summaryCn": "针对UMI数据腕载鱼眼视图和缺乏物理验证的问题，提出视觉接地和物理验证的适配方法，使大规模VLA训练成为可能。",
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
          "score": 64
        },
        {
          "id": "2606.05468v1",
          "title": "FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization",
          "summary": "Post-training Vision-Language-Action (VLA) models into policies that can be reliably deployed on real robots remains a major bottleneck. SFT and DAgger exploit failure signals only indirectly, and reward-based RL is bottlenecked by the difficulty of real-world reward design and of training reliable critics.",
          "summaryCn": "提出无奖励的强化微调方法，通过近端偏好优化直接利用混合质量经验数据改进流匹配VLA策略，克服奖励设计瓶颈。",
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
          "score": 63
        },
        {
          "id": "2606.05159v1",
          "title": "X4Val: Learning Neural Surrogates for Variance-Reduced Policy Evaluation",
          "summary": "Rigorous evaluation of learning-based robotic systems is an essential prerequisite for deployment. However, real-world test data is expensive to gather; moreover, in a typical iterative development context, data gathered from the latest policy is necessarily limited in scale.",
          "summaryCn": "X4Val学习神经代理模型，通过方差缩减实现机器人策略的可靠评估，缓解真实测试数据稀缺问题。",
          "link": "https://arxiv.org/abs/2606.05159v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05159v1",
          "published": "2026-06-03T17:57:09Z",
          "updated": "2026-06-03T17:57:09Z",
          "authors": [
            "Rachel Luo",
            "Michael Watson",
            "Apoorva Sharma",
            "Heng Yang",
            "Han Qi",
            "Edward Schmerling",
            "Sushant Veer",
            "Boris Ivanovic",
            "Marco Pavone"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2606.04463v2",
          "title": "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics",
          "summary": "We present OSCAR, a precise action-conditioned video world model that generalizes across different robot embodiments and enables robot policy evaluation. Existing video world models face three main challenges for real-world robot evaluation: limited scenario diversity in current robot training datasets, imprecise acti…",
          "summaryCn": "OSCAR是动作条件世界模型，泛化多种机器人形态，提供精确策略评估，解决场景多样性、动作控制与长时一致性问题。",
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
          "score": 59
        },
        {
          "id": "2606.04968v1",
          "title": "Potential-Guided Flow Matching for Vision-Language-Action Policy Improvement",
          "summary": "Large vision-language-action (VLA) policies are increasingly trained as conditional generative models over action chunks. Yet deployment produces mixed-quality experience-successful demonstrations, partial completions, recoverable mistakes, and failures-that is difficult to use with standard imitation.",
          "summaryCn": "提出势能引导流匹配框架，从混合质量经验中提取势能函数，引导动作生成朝成功方向优化，显著提升VLA策略性能。",
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
          "score": 54
        },
        {
          "id": "2606.05248v1",
          "title": "Inverse Manipulation through Symbolic Planning and Residual Operator Learning",
          "summary": "Inverting a robotic task requires more than reversing symbolic state transitions or rewinding motor trajectories. In robot manipulation tasks, symbolic inverse plans often fail to fully restore the effects of forward executions under continuous interaction dynamics.",
          "summaryCn": "提出符号规划与残差算子学习框架，通过残差学习补偿连续交互动力学，解决符号逆计划失效问题，实现可靠逆操作。",
          "link": "https://arxiv.org/abs/2606.05248v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05248v1",
          "published": "2026-06-03T12:18:09Z",
          "updated": "2026-06-03T12:18:09Z",
          "authors": [
            "Yigit Yildirim",
            "Giuseppe Rauso",
            "Riccardo Caccavale",
            "Alberto Finzi"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 46
        },
        {
          "id": "2606.04773v1",
          "title": "NextMotionQA: Benchmarking and Judging Human Motion Understanding with Vision-Language Models",
          "summary": "Reliable evaluation of human motion understanding is fundamental to advancing embodied AI, robotics, and animation. However, existing benchmarks suffer from coarse semantic granularity, undifferentiated difficulty, limited annotation quality, and pervasive answer ambiguity, leaving them unable to diagnose where curren…",
          "summaryCn": "构建NextMotionQA基准，细粒度语义难度分级，解决现有基准语义粗糙、难度均质、答案模糊等问题，诊断视觉语言模型运动理解缺陷。",
          "link": "https://arxiv.org/abs/2606.04773v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04773v1",
          "published": "2026-06-03T11:53:57Z",
          "updated": "2026-06-03T11:53:57Z",
          "authors": [
            "Yong Cao",
            "Chuqiao Li",
            "Xianghui Xie",
            "Gerard Pons-Moll",
            "Andreas Geiger"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 46
        },
        {
          "id": "2606.05461v1",
          "title": "Output Type Before Quality: A Standards-Derived XAI Admissibility Rubric for Autonomous-Driving Safety",
          "summary": "Safety standards for ML-based autonomous driving specify the kind of evidence an assurance case must contain (directed cause-and-effect chains, quantified interventional effects, named root-cause variables), yet the XAI literature is organised by output type and technique family (saliency maps, feature attribution, co…",
          "summaryCn": "从安全标准推导XAI可接纳性量表，要求因果链、干预效应等证据类型，纠正仅凭输出类型评估的偏向，为自动驾驶安全提供符合标准的评估框架。",
          "link": "https://arxiv.org/abs/2606.05461v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05461v1",
          "published": "2026-06-03T21:37:52Z",
          "updated": "2026-06-03T21:37:52Z",
          "authors": [
            "Abhinaw Priyadershi",
            "Mandar Pitale",
            "Jelena Frtunikj",
            "Maria Spence"
          ],
          "categories": [
            "cs.AI"
          ],
          "score": 43
        },
        {
          "id": "2606.04853v1",
          "title": "Teaching Robots to Say 'I Don't Know' : SENTINEL for Uncertainty-Aware SLAM",
          "summary": "Low-cost 2D LiDARs lack the intensity channel that higher-end sensors use to diagnose measurement failures, yet they are widely used on educational and budget robotics platforms. We present SENTINEL, a training - free, label - free reliability estimation framework that gives range - only LiDAR an effective diagnostic…",
          "summaryCn": "SENTINEL无需训练和标注，为仅测距激光雷达提供有效诊断能力，使低端平台实现鲁棒不确定性感知SLAM。",
          "link": "https://arxiv.org/abs/2606.04853v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04853v1",
          "published": "2026-06-03T13:22:05Z",
          "updated": "2026-06-03T13:22:05Z",
          "authors": [
            "Abhishek S",
            "Badrikanath Praharaj",
            "Sreeram MV"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 42
        },
        {
          "id": "2606.04871v1",
          "title": "Recent Advances and Trends in Learning-based 3D Representations",
          "summary": "The selection of an appropriate 3D representation is a fundamental design decision that dictates the efficiency, quality, and capabilities of modern computer vision and graphics pipelines for tasks such as 3D reconstruction, novel-view synthesis and rendering, shape and motion analysis, recognition, and generation. Wh…",
          "summaryCn": "综述基于学习的3D表征进展，梳理显式、隐式、混合表征的优缺点，涵盖重建、新视角合成、识别与生成任务，为管线设计提供参考。",
          "link": "https://arxiv.org/abs/2606.04871v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04871v1",
          "published": "2026-06-03T13:35:50Z",
          "updated": "2026-06-03T13:35:50Z",
          "authors": [
            "Adrien Schockaert",
            "Hamid Laga",
            "Hazem Wannous",
            "Vincent Magnier",
            "Guillaume Dufaye",
            "Jean-françois Witz"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 41
        },
        {
          "id": "2606.04811v2",
          "title": "Dream.exe: Can Video Generation Models Dream Executable Robot Manipulation?",
          "summary": "Video generation models have made impressive strides in synthesizing visually compelling content, yet their outputs remain confined to the virtual domain. A natural question follows: how well do these models reflect the physical world when their generated videos leave the screen and enter reality?",
          "summaryCn": "通过将生成视频操作执行于真实机器人，评估视频模型物理一致性，揭示虚拟到现实的鸿沟，为具身智能提供新视角。",
          "link": "https://arxiv.org/abs/2606.04811v2",
          "pdfLink": "https://arxiv.org/pdf/2606.04811v2",
          "published": "2026-06-03T12:35:35Z",
          "updated": "2026-06-04T10:52:20Z",
          "authors": [
            "Rui Zhao",
            "Kaiming Yang",
            "Jifeng Zhu",
            "Siyang Chen",
            "Ziqi Wang",
            "Weijia Wu",
            "Kevin Qinghong Lin",
            "Heng Wang",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 41
        },
        {
          "id": "2606.05411v1",
          "title": "A Motivational Architecture for Conversational AGI",
          "summary": "Motivational architectures in cognitive AI have largely been designed for physical agents regulating bodily needs. Conversational agents operate in a different regime: their sensorimotor loop is linguistic, their environment is a user's evolving mental state, and their consequential actions are speech acts, tool invoc…",
          "summaryCn": "提出面向对话代理的动机架构，以语言交互为感知行动回路，调节言语行为与工具使用，旨在引导用户心智状态，区别于生理驱动型物理代理。",
          "link": "https://arxiv.org/abs/2606.05411v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05411v1",
          "published": "2026-06-03T20:25:15Z",
          "updated": "2026-06-03T20:25:15Z",
          "authors": [
            "Anna Mikeda",
            "Ben Goertzel"
          ],
          "categories": [
            "cs.AI"
          ],
          "score": 39
        },
        {
          "id": "2606.05015v1",
          "title": "Generalization of World Models under Environmental Variability for Vision-based Quadrotor Navigation",
          "summary": "World models, learned generative models that predict how an environment evolves, have become a promising tool for sample-efficient robot learning. Yet how robust they are to environmental variability remains poorly understood.",
          "summaryCn": "研究世界模型在视觉四旋翼导航中对环境变化的泛化能力，揭示光照、纹理等因素导致的性能退化，提出评估与改进见解。",
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
          "score": 39
        },
        {
          "id": "2606.04884v1",
          "title": "D$^3$-MoE:Dual Disentangled Diffusion Mixture-of-Experts for Style-Controllable End-to-End Autonomous Driving",
          "summary": "Traditional end-to-end autonomous driving frameworks frequently suffer from the \"style-averaging\" dilemma when trained on high-variance human demonstrations, yielding homogenized, style-uncontrollable, and even kinematically unsafe policies. To overcome this limitation, we present D$^3$-MoE (Dual Disentangled Diffusio…",
          "summaryCn": "提出双解耦扩散混合专家框架，解耦风格与行为，实现风格可控的端到端自动驾驶，避免风格平均化导致的不安全策略。",
          "link": "https://arxiv.org/abs/2606.04884v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04884v1",
          "published": "2026-06-03T13:46:46Z",
          "updated": "2026-06-03T13:46:46Z",
          "authors": [
            "Renju Feng",
            "Rukang Wang",
            "Ning Xi",
            "Jianguo Yu",
            "Liping Lu",
            "Pan Zhou",
            "Duanfeng Chu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 39
        },
        {
          "id": "2606.04823v1",
          "title": "R-APS: Compositional Reasoning and In-Context Meta-Learning for Constrained Design via Reflective Adversarial Pareto Search",
          "summary": "Large language models (LLMs) are fluent on open-ended tasks, yet in agentic settings, where a system must plan, use tools, and act over extended horizons, fluency does not ensure reliable delivery. We trace this gap to three coupled structural failures: errors propagate without localization, worst-case perturbations g…",
          "summaryCn": "提出反射敌对帕累托搜索，结合组合推理与上下文元学习，定位并修正LLM代理中的错误传播与最坏情况扰动，实现可靠约束设计。",
          "link": "https://arxiv.org/abs/2606.04823v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04823v1",
          "published": "2026-06-03T12:45:39Z",
          "updated": "2026-06-03T12:45:39Z",
          "authors": [
            "João Pedro Gandarela",
            "Thiago Rios",
            "Stefan Menzel",
            "André Freitas"
          ],
          "categories": [
            "cs.AI"
          ],
          "score": 38
        },
        {
          "id": "2606.05143v1",
          "title": "HORIZON: Recoverability-Governed Curriculum for Physical-Domain Scaling",
          "summary": "Scaling robust robot policies requires more than broader randomization, because physical-domain experience must remain organized and learnable throughout training. We study when a policy can benefit from harder physics and identify recoverability as a central constraint in on-policy physical-domain scaling.",
          "summaryCn": "提出基于可恢复性的课程学习框架，识别策略能从更难物理环境中受益的边界，以可恢复性组织物理域扩展，实现鲁棒策略高效扩展。",
          "link": "https://arxiv.org/abs/2606.05143v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05143v1",
          "published": "2026-06-03T17:50:02Z",
          "updated": "2026-06-03T17:50:02Z",
          "authors": [
            "Chenhao Bai",
            "Liqin Lu",
            "Kaijun Wang",
            "Hui Chen",
            "Jin-Chuan Shi",
            "Yuyang Liu",
            "Hao Chen",
            "Chunhua Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 37
        },
        {
          "id": "2606.05395v1",
          "title": "VASO: Formally Verifiable Self-Evolving Skills for Physical AI Agents",
          "summary": "Reusable robot skills are becoming the basic units through which embodied agents turn open-ended instructions into long-horizon physical behavior. We argue that, while foundation models have collapsed the cost of creating these skills, the cost of trusting them has not.",
          "summaryCn": "VASO为物理AI代理提出形式可验证的自进化技能框架，确保技能在进化中满足安全规范，降低对基础模型技能信任风险。",
          "link": "https://arxiv.org/abs/2606.05395v1",
          "pdfLink": "https://arxiv.org/pdf/2606.05395v1",
          "published": "2026-06-03T20:02:35Z",
          "updated": "2026-06-03T20:02:35Z",
          "authors": [
            "Yunhao Yang",
            "Neel P. Bhatt",
            "Kevin Wang",
            "Samuel Tetteh",
            "Zhangyang Wang",
            "Ufuk Topcu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 36
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-07T14:05:07.581514+00:00",
      "papers": [
        {
          "id": "2606.04046v1",
          "title": "Dive into the Scene: Breaking the Perceptual Bottleneck in Vision-Language Decision Making via Focus Plan Generation",
          "summary": "In embodied vision-language decision making tasks such as robotic manipulation and navigation, Vision-Language and Vision-Language-Action Models (VLMs & VLAs) are powerful tools with different benefits: VLMs are better at long-term planning, while VLAs are better at reactive control. However, their performance is limi…",
          "summaryCn": "提出焦点计划生成方法，通过深入场景细节打破视觉-语言决策的感知瓶颈，提升机器人操作与导航任务的规划与控制能力。",
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
          "score": 94
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice.",
          "summaryCn": "研究部分可观测条件下针对VLA模型的对抗性补丁攻击，仅基于不完整轨迹的补丁即可误导机器人，揭示了更实际的安全威胁。",
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
          "score": 82
        },
        {
          "id": "2606.03598v2",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors.",
          "summaryCn": "提出PHASER方法，利用阶段感知和语义经验重放，在开放式环境中连续学习新技能时有效缓解VLA模型的灾难性遗忘问题。",
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
          "score": 81
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
          "summaryCn": "推出OpenEAI-Platform，集成低成本六自由度机械臂与可复现VLA模型，为具身AI研究提供全开源软硬件统一平台。",
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
          "score": 81
        },
        {
          "id": "2606.03784v2",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
          "summaryCn": "针对VLA模型，在大规模设定下重新审视具身链式思维，探索其有效形式与整合策略，以提升机器人操作的泛化能力。",
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
          "score": 79
        },
        {
          "id": "2606.03609v2",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go.",
          "summaryCn": "提出3D等视域世界模型，捕捉城市中不可见空间几何并发现跨城市导航特征，为具身智能体提供更有效的导航世界模型。",
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
          "score": 65
        },
        {
          "id": "2606.03890v1",
          "title": "OVO-S-Bench: A Hierarchical Benchmark for Streaming Spatial Intelligence in Multimodal LLMs",
          "summary": "Multimodal agents in robotics, AR, and autonomous driving must reason about places and layouts from continuous egocentric streams, often using evidence outside the current view. Existing benchmarks either evaluate offline over full videos or target events rather than spatial structure.",
          "summaryCn": "构建OVO-S-Bench分层基准，评估多模态大模型在连续自我中心流式输入下的空间智能推理能力，弥补现有离线或事件基准的不足。",
          "link": "https://arxiv.org/abs/2606.03890v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03890v1",
          "published": "2026-06-02T16:51:32Z",
          "updated": "2026-06-02T16:51:32Z",
          "authors": [
            "Yifei Li",
            "Pengyiang Liu",
            "Yuhang Zang",
            "Zhongyue Shi",
            "Qi Fu",
            "Hongye Hao",
            "Jiwen Lu"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 64
        },
        {
          "id": "2606.03385v1",
          "title": "Grasp-Then-Plan with Failure Attribution: A Closed Two-Stage Framework for Precise and Generalizable Robotic Manipulation",
          "summary": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. To enable efficient long-horizon manipulation, we propose GTP-FA (Grasp-Then-Plan with Failure Attribution), a task-oriented two-stage grasp-then-plan fram…",
          "summaryCn": "提出GTP-FA两阶段框架，通过先抓取后规划并归因失败，解耦抓取与运动规划，实现机器人精确且可泛化的长时域操作。",
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
          "score": 62
        },
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next…",
          "summaryCn": "提出OmniDreams实时生成世界模型，支持闭环自动驾驶仿真中策略与环境的动态交互，有效应对长尾场景的安全评估瓶颈。",
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
          "score": 61
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically reli…",
          "summaryCn": "提出TTT-VLA，在测试时通过隐式提示优化动态调整策略行为，有效增强VLA模型面对分布偏移时的部署鲁棒性。",
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
          "score": 60
        },
        {
          "id": "2606.04233v1",
          "title": "What Are We Actually Benchmarking in Robot Manipulation?",
          "summary": "A robotics benchmark score measures success under one fixed evaluation setup, yet is routinely treated as evidence of general manipulation capability. We identify four failure modes, each of which weakens or invalidates a benchmark's role as a valid proxy for that capability: shortcut solvability, lack of statistical…",
          "summaryCn": "识别机器人操作基准的四种失效模式，揭示基准分数无法可靠衡量泛化操作能力的问题，为构建有效评估提供方向。",
          "link": "https://arxiv.org/abs/2606.04233v1",
          "pdfLink": "https://arxiv.org/pdf/2606.04233v1",
          "published": "2026-06-02T21:33:28Z",
          "updated": "2026-06-02T21:33:28Z",
          "authors": [
            "Tianchong Jiang",
            "Xiangshan Tan",
            "Samuel Wheeler",
            "Luzhe Sun",
            "Tewodros W. Ayalew",
            "Matthew Walter"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 57
        },
        {
          "id": "2606.03682v1",
          "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
          "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities.",
          "summaryCn": "提出GN0统一范式，将数据生成、评估与策略学习融为一体，突破数据限制，显著提升视觉语言导航系统的泛化与长时域能力。",
          "link": "https://arxiv.org/abs/2606.03682v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
          "published": "2026-06-02T14:05:47Z",
          "updated": "2026-06-02T14:05:47Z",
          "authors": [
            "Xinhai Li",
            "Xiaotao Zhang",
            "Yuehao Huang",
            "Jiankun Dong",
            "Tianhang Wang",
            "Sunyao Zhou",
            "Yunzi Wu",
            "Chengnuo Sun",
            "Yunfei Ge",
            "Qizhen Weng"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 57
        },
        {
          "id": "2606.03724v1",
          "title": "Same Weights, Different Robot: A Deployment Safety View of VLA Policies",
          "summary": "Vision-language-action (VLA) policies are often treated as checkpoint-defined objects: if the weights, prompt, and benchmark suite match, the deployment is assumed to be the same policy. Robot execution breaks this assumption because the same normalized model output can become a different physical action after action…",
          "summaryCn": "从部署安全视角指出，相同VLA策略权重经行动空间转换后在不同机器人上会产生不同物理动作，揭示被忽视的安全风险。",
          "link": "https://arxiv.org/abs/2606.03724v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03724v1",
          "published": "2026-06-02T14:45:00Z",
          "updated": "2026-06-02T14:45:00Z",
          "authors": [
            "Jianwei Tai"
          ],
          "categories": [],
          "score": 56
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question.",
          "summaryCn": "提出GeoSem-WAM，结合几何与语义感知，探索世界动作模型在具身决策中有效性的根源，为模型设计提供新见解。",
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
          "score": 54
        },
        {
          "id": "2606.03314v1",
          "title": "TASE: Truncation-Aware Semantic Embeddings for 3D Scene Understanding and Editing",
          "summary": "High-fidelity semantic 3D scene representations are crucial for numerous applications, including robotics, autonomous driving, and simulation. Beyond this, the ability to edit such representations enables developers to adapt these applications more easily to specific target scenarios.",
          "summaryCn": "提出TASE截断感知语义嵌入方法，实现高保真3D场景理解并支持编辑，便于机器人、自动驾驶等应用适应特定场景。",
          "link": "https://arxiv.org/abs/2606.03314v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03314v1",
          "published": "2026-06-02T08:25:53Z",
          "updated": "2026-06-02T08:25:53Z",
          "authors": [
            "Tim-Felix Faasch",
            "Jochen Kall",
            "Lucas Nunes",
            "Jens Behley",
            "Cyrill Stachniss"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 53
        },
        {
          "id": "2606.03694v1",
          "title": "Face versus Body Tracking for Human-Robot Interaction: An Egocentric Dataset",
          "summary": "To enable meaningful human-robot interaction (HRI), a robot must continuously assess engagement by consistently tracking users over time. State-of-the-art computer vision models, however, are heavily optimized for surveillance or autonomous driving.",
          "summaryCn": "构建自我中心数据集，系统比较面部与身体跟踪在人机交互中的表现，发现身体跟踪在持续用户参与评估中更稳健。",
          "link": "https://arxiv.org/abs/2606.03694v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03694v1",
          "published": "2026-06-02T14:15:17Z",
          "updated": "2026-06-02T14:15:17Z",
          "authors": [
            "Jessica Wenninger",
            "Gabriel Skantze"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "score": 51
        },
        {
          "id": "2606.03312v1",
          "title": "RobotValues: Evaluating Household Robots When Human Values Conflict",
          "summary": "While household robots are often evaluated based on task completion, everyday domestic environments involve value-conflicting situations in which robots are expected to choose actions that prioritize other values than task success, such as human autonomy, efficiency, or social appropriateness. Yet, there are no benchm…",
          "summaryCn": "推出RobotValues基准，评估家庭机器人在任务成功与人类自主、效率等价值冲突时的决策能力，引导机器人符合人类价值观。",
          "link": "https://arxiv.org/abs/2606.03312v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03312v1",
          "published": "2026-06-02T08:25:01Z",
          "updated": "2026-06-02T08:25:01Z",
          "authors": [
            "Jongwook Han",
            "Hyeongjin Kim",
            "Yohan Jo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 50
        },
        {
          "id": "2606.03949v1",
          "title": "Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation",
          "summary": "Human-in-the-loop reinforcement learning (HIL-RL) improves sample efficiency in real-robot manipulation through online human intervention. However, successful trajectories may include suboptimal actions that deviate from the desired task-execution path and force human intervention.",
          "summaryCn": "提出偏好校准的人机协同强化学习方法，通过识别并过滤成功轨迹中的次优动作，减少不必要的人工干预，提高机器人操作学习效率。",
          "link": "https://arxiv.org/abs/2606.03949v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03949v1",
          "published": "2026-06-02T17:38:25Z",
          "updated": "2026-06-02T17:38:25Z",
          "authors": [
            "Zeyi Liu",
            "Guangyao Liu",
            "Yinuo Qu",
            "Yuquan Xue",
            "Bofang Jia",
            "Chunhua Yang",
            "Weihua Gui",
            "Keke Huang",
            "Ziwei Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 47
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective.",
          "summaryCn": "从分布视角提出统一视频-动作联合去噪方法，对齐视觉动态先验与可执行动作，生成灵巧操作动作及数据。",
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
          "score": 45
        },
        {
          "id": "2606.03252v1",
          "title": "AirDreamer: Generalist Drone Navigation with World Models",
          "summary": "Navigating a drone in unseen and cluttered environments requires reliable generalization to unseen scene layouts and understanding of environmental structure relative to the robot's capabilities. Previous methods, which assume the same environment configuration, often rely heavily on human-designed perception pipeline…",
          "summaryCn": "提出AirDreamer，利用世界模型实现无人机在未知杂乱环境中的通用导航，无需依赖人工设计感知管线，具备强大布局泛化能力。",
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
          "score": 45
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-07T14:03:17.238076+00:00",
      "papers": [
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (…",
          "summaryCn": "该论文指出现有扩散视觉-语言-动作策略将SE(3)姿态建模为欧氏向量导致流形漂移和SO(3)约束违反，提出在切空间上进行分数匹配以修正几何错误，提升机器人操作精度。",
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
          "score": 80
        },
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimiz…",
          "summaryCn": "WALL-WM提出以语义连贯动作事件为原子单元的事件地基化视觉-语言-动作预训练方法，替代传统块中心优化，使世界动作建模更贴合机器人操作的语义边界，提升学习效率。",
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
          "score": 76
        },
        {
          "id": "2606.01951v1",
          "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
          "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applyi…",
          "summaryCn": "针对机器人导航数据稀缺问题，提出利用自我中心人类视频与演示进行共同训练，有效降低对昂贵真实机器人数据收集的依赖，提升视觉-语言-动作模型的导航性能。",
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
          "score": 75
        },
        {
          "id": "2606.02307v1",
          "title": "FATE-VLA:Failue-aware test generation for vision-language-action models",
          "summary": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. In high-dimensional embodied spaces, failures are sparse and clustered, so static benchmarking can underestimate robustness risks.",
          "summaryCn": "FATE-VLA提出失败感知的测试生成方法，针对视觉-语言-动作模型在具身空间中失败稀疏且聚集的特点进行针对性评估，更准确地揭示其鲁棒性风险。",
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
          "score": 74
        },
        {
          "id": "2606.02775v1",
          "title": "AURA: Action-Gated Memory for Robot Policies at Constant VRAM",
          "summary": "The KV-cache is the right memory for datacenters but the wrong memory for robots. Datacenter inference batches many short requests and resets them, amortizing an attention cache across a crowd.",
          "summaryCn": "AURA提出动作门控记忆机制，为机器人策略提供恒定显存占用的记忆方案，解决传统KV缓存难以支持机器人长时间上下文推理的问题，使其更适合持续运行。",
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
          "score": 71
        },
        {
          "id": "2606.02027v1",
          "title": "World-Task Factorization for Robot Learning",
          "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled.",
          "summaryCn": "该工作提出世界-任务分解方法，结构化解耦机器人策略中与环境、约束、队友相关的因素，明确泛化与重训练边界，提升对新颖组合任务的适应能力。",
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
          "score": 64
        },
        {
          "id": "2606.02745v1",
          "title": "SeeTraceAct: Visibility-Aware Latent Planning from Cross-Embodiment Demonstration Videos",
          "summary": "Vision-language-action models (VLAs) are promising general-purpose robot policies, but adapting them to new tasks typically requires costly task-specific teleoperation data. As an alternative, we study one-shot demo-conditioned VLAs, where a robot policy is conditioned on a single demonstration video of an unseen task.",
          "summaryCn": "SeeTraceAct通过可见性感知的潜在规划，使机器人策略能够从单一跨形态演示视频中学习新任务，以一次性条件化替代昂贵遥操作数据收集，实现高效任务适应。",
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
          "score": 61
        },
        {
          "id": "2606.02277v1",
          "title": "RoboSemanticBench: Diagnosing Semantic Grounding in Action Prediction for VLA Models",
          "summary": "Vision-language-action (VLA) models are built on the premise that semantic understanding from pretrained language or vision-language backbones should guide robot action prediction. Yet robot fine-tuning is optimized as imitation over task-specific action distributions, and many evaluations can be solved through visual…",
          "summaryCn": "RoboSemanticBench构建基准以诊断视觉-语言-动作模型，检验其中语义理解是否有效指导动作预测，而不仅依赖表浅视觉模式匹配，旨在提升模型语义接地能力。",
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
          "score": 59
        },
        {
          "id": "2606.01757v1",
          "title": "PillarDETR: YOLO-Backbone and RT-DETR Head for Real-Time 3D Object Detection",
          "summary": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge.",
          "summaryCn": "PillarDETR结合YOLO骨干与RT-DETR检测头，实现高效的实时三维目标检测，满足自动驾驶和机器人领域对高精度LiDAR点云处理的实时性需求。",
          "link": "https://arxiv.org/abs/2606.01757v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01757v1",
          "published": "2026-06-01T06:22:47Z",
          "updated": "2026-06-01T06:22:47Z",
          "authors": [
            "Smit Kadvani",
            "Shriya Gumber",
            "Kriti Faujdar",
            "Harsh Dave"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 58
        },
        {
          "id": "2606.02735v1",
          "title": "See Less, Specify More: Visual Evidence Budgets for Generalizable VLAs",
          "summary": "Generalization remains a central bottleneck for vision-language-action (VLA) models: under distractors, appearance shifts, and semantically similar tasks, the policy must often infer local execution details from coarse instructions while also deciding which parts of the image matter for control. We present S2 (See Les…",
          "summaryCn": "提出S2方法，通过限制视觉证据并更精确指定任务指令，提升视觉-语言-动作模型在干扰、外观变化和语义相似场景下的泛化能力。",
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
          "score": 57
        },
        {
          "id": "2606.01600v1",
          "title": "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation",
          "summary": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactu…",
          "summaryCn": "RoboTrustBench在正常、约束敏感和反事实等多种场景下评估视频世界模型的可信度，揭示其在危险或不可行指令下的可靠性问题，服务于安全机器人操作。",
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
          "score": 57
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time avail…",
          "summaryCn": "针对视觉-语言-动作模型忽略物体运动导致动态操作失败的问题，提出潜在空间预测世界模型以预先推断未来状态，实现稳定动态操作。",
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
          "score": 56
        },
        {
          "id": "2606.01545v1",
          "title": "Hierarchical Object Representation for Spatial Robot Perception: Points, Meshes, and Superquadrics",
          "summary": "Hierarchical 3D Scene Graphs (3DSG) have emerged as an actionable and scalable representation for long-term autonomy incorporating metric, semantic, and topological information in the scene. However, the question of geometric representation of objects in 3DSG has been overlooked as most methods use simplified geometri…",
          "summaryCn": "提出在层次三维场景图中采用点、网格和超二次曲面等多层级几何表示物体，克服以往简化几何的局限，增强机器人空间感知的精确性和长期自主能力。",
          "link": "https://arxiv.org/abs/2606.01545v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01545v1",
          "published": "2026-06-01T01:45:47Z",
          "updated": "2026-06-01T01:45:47Z",
          "authors": [
            "Ceng Zhang",
            "Wan Su",
            "Mohamed Samshad",
            "Gregory S. Chirikjian",
            "Rajat Talak"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 53
        },
        {
          "id": "2606.02562v1",
          "title": "Permissive Safety Through Trusted Inference: Verifiable Belief-Space Neural Safety Filters for Assured Interactive Robotics",
          "summary": "Autonomous robots that interact with people must make safe and efficient decisions under human-induced uncertainty, such as their preferences, goals, competency, and willingness to cooperate. Safety filters are a popular approach for ensuring safety in interactive robotics, since their modular design separates safety…",
          "summaryCn": "提出可验证信念空间神经安全滤波器，结合模块化安全分离与可信推理，在人机交互不确定性下确保机器人安全且高效地做出决策。",
          "link": "https://arxiv.org/abs/2606.02562v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02562v1",
          "published": "2026-06-01T17:54:00Z",
          "updated": "2026-06-01T17:54:00Z",
          "authors": [
            "Haimin Hu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "score": 52
        },
        {
          "id": "2606.02956v1",
          "title": "The Road Ahead in Autonomous Driving: The KITScenes Multimodal Dataset",
          "summary": "Existing autonomous driving datasets have enabled major progress, but fall short in sensor fidelity, map completeness, or geographic diversity. We present KITScenes Multimodal, a European dataset built around high-fidelity sensors and maps.",
          "summaryCn": "KITScenes多模态数据集提供高保真传感器和完备地图，弥补现有自动驾驶数据集在传感器精度和地理多样性方面的不足，有力推动感知与决策技术发展。",
          "link": "https://arxiv.org/abs/2606.02956v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02956v1",
          "published": "2026-06-01T23:23:14Z",
          "updated": "2026-06-01T23:23:14Z",
          "authors": [
            "Richard Schwarzkopf",
            "Fabian Immel",
            "Alexander Blumberg",
            "Jonas Merkert",
            "Nils Rack",
            "Kaiwen Wang",
            "Fabian Konstantinidis",
            "Julian Truetsch",
            "Carlos Fernandez",
            "Annika Bätz"
          ],
          "categories": [
            "cs.CV",
            "cs.LG",
            "cs.RO"
          ],
          "score": 51
        },
        {
          "id": "2606.01788v1",
          "title": "PlatonicNav: Unveiling Semantic Correspondence in Navigation with Platonic Topological Maps",
          "summary": "Embodied visual navigation, where an agent perceives a complex environment and acts to reach a goal from raw sensory input, underpins a wide range of applications such as household service robotics, assistive robotics, and large-scale autonomous exploration. However, recent attempts to unify vision-and-language naviga…",
          "summaryCn": "PlatonicNav提出柏拉图拓扑地图以揭示语义对应，统一视觉与语言导航，提升具身智能体在复杂环境中利用原始感官输入达成目标的导航性能。",
          "link": "https://arxiv.org/abs/2606.01788v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01788v1",
          "published": "2026-06-01T07:08:50Z",
          "updated": "2026-06-01T07:08:50Z",
          "authors": [
            "Junlin Long",
            "Zeyu Zhang",
            "Xu Deng",
            "Yiran Wang",
            "Yue Yang",
            "Luke Borgnolo",
            "Maxwell Twelftree",
            "Yang Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 50
        },
        {
          "id": "2606.02951v1",
          "title": "SCOPE: Real-Time Natural Language Camera Agent at the Edge",
          "summary": "Deploying language-driven agents in robotics requires evaluations that reflect real-world task demands: natural-language instructions with reproducible outcomes. Such agents must connect language models to callable perception and control tools, and be assessed using deployment-critical metrics including latency, accur…",
          "summaryCn": "SCOPE提出边缘端实时自然语言摄像智能体，通过连接语言模型与可调用的感知控制工具，满足机器人任务中对延迟、准确性和结果可复现性的严格评估需求。",
          "link": "https://arxiv.org/abs/2606.02951v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02951v1",
          "published": "2026-06-01T23:07:44Z",
          "updated": "2026-06-01T23:07:44Z",
          "authors": [
            "Nikolaj Hindsbo",
            "Sina Ehsani",
            "Pragyana Mishra"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "score": 49
        },
        {
          "id": "2606.02313v1",
          "title": "Towards Precise Intent-Aligned VLA Aerial Navigation via Expert-Guided GRPO",
          "summary": "Vision-Language-Action (VLA) models offer a promising end-to-end paradigm for unmanned aerial vehicles (UAVs) to accomplish complex tasks specified by fine-grained instructions. However, standard supervised fine-tuning (SFT) suffers from data scarcity, limited generalization, and weak supervision for nuanced and compl…",
          "summaryCn": "针对无人机视觉-语言-动作模型面临的数据稀缺和弱监督挑战，提出专家引导的GRPO训练框架，实现精确意图对齐的空中导航，有效应对复杂指令。",
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
          "score": 48
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmen…",
          "summaryCn": "RoboDream通过组合世界模型实现可扩展的机器人数据合成，无需昂贵遥操作数据即可生成多样化操作演示，推动机器人学习的大规模数据需求。",
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
          "score": 47
        },
        {
          "id": "2606.02274v1",
          "title": "Dexterity-BEV: Aligning 3D World and Actions for Generalizable Robot Policies Learning",
          "summary": "End-to-end manipulation policies, combined with web-scale pretrained Vision-Language Models (VLMs), show the promise for generalizable and dexterous robotic manipulation. However, they inherit two key limitations from 2D foundation models: 1) the reliance on 2D RGB inputs that ignores the intrinsically 3D nature of ma…",
          "summaryCn": "Dexterity-BEV提出对齐三维世界与动作的鸟瞰表示，克服二维基础模型忽略三维空间本质的局限，实现可泛化的灵巧操作策略学习。",
          "link": "https://arxiv.org/abs/2606.02274v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02274v1",
          "published": "2026-06-01T14:01:11Z",
          "updated": "2026-06-01T14:01:11Z",
          "authors": [
            "Huayi Zhou",
            "Wei Gao",
            "Dekun Lu",
            "Ruiji Liu",
            "Zhanqi Zhang",
            "Ziyang Zhang",
            "Jian Chen",
            "Wenlve Zhou",
            "Sheng Xu",
            "Shumin Li"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 47
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-07T14:02:13.469811+00:00",
      "papers": [
        {
          "id": "2606.01241v2",
          "title": "OneVLA: A Unified Framework for Embodied Tasks",
          "summary": "Navigation and manipulation are fundamental capabilities of embodied intelligence, enabling robots to interpret natural language commands and interact physically with their surroundings. However, current Vision-Language-Action (VLA) models remain constrained by task-specific architectures, specializing in either navig…",
          "summaryCn": "提出OneVLA统一框架，将导航与操作集成于单一模型，在多种具身任务中验证了有效性。",
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
          "score": 77
        },
        {
          "id": "2606.00966v1",
          "title": "Threading Optimization for Vision-Language-Action Model Inference in Low-Cost Smart Agricultural Manipulation",
          "summary": "Vision-Language Action (VLA) models continue to face challenges such as slow inference speed and difficulty performing fine-grained motion adjustments, limiting their widespread adoption in industry. While the Real-Time Action Chunking (RTAC) algorithm has been proposed to address these bottlenecks, bridging the gap b…",
          "summaryCn": "针对低成本智能农业操作，提出线程优化方法加速VLA模型推理，实现实时精细动作控制。",
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
          "score": 77
        },
        {
          "id": "2606.01164v1",
          "title": "Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends",
          "summary": "With rapid development of large language models and diffusion-based content generation, world modeling has attracted increasing research attention, benefiting various downstream domains such as game engines, embodied AI, autonomous driving, etc. Through explicitly incorporating user actions into world state transition…",
          "summaryCn": "综述交互式视频世界建模的前沿、挑战与基准，指出未来趋势，为游戏引擎、具身AI等下游领域提供参考。",
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
          "score": 75
        },
        {
          "id": "2606.01458v1",
          "title": "LEGS: Fine-Tuning Teleop-Free VLAs for Humanoid Loco-manipulation in an Embodied Gaussian Splatting World",
          "summary": "Training vision-language-action (VLA) policies for humanoid loco-manipulation is constrained by the high cost and complexity of collecting human teleoperation demonstrations. VLA policies fine-tuned in simulators have, until now, failed to transfer effectively in humanoid loco-manipulation tasks.",
          "summaryCn": "提出LEGS，在具身高斯泼溅世界中微调VLA，无需遥操作演示即可实现人形机器人移动操作任务的零样本迁移。",
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
          "score": 67
        },
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success.",
          "summaryCn": "通过行为与表征诊断，比较WAM与VLA范式，揭示未来预测在任务成功之外的深层行为差异。",
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
          "score": 66
        },
        {
          "id": "2606.00985v1",
          "title": "Make Your VLA More Robust Without More Data By Interleaving Motion Planning",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable progress for mobile manipulation, but their performance on long-horizon tasks remains poor. These tasks are especially challenging because (1) progress toward high-level goals must be maintained across extended sequences of spatially distributed subtasks, and (…",
          "summaryCn": "提出交错运动规划的方法，在不增加数据的情况下提升VLA模型在长时域移动操作任务中的鲁棒性。",
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
          "score": 57
        },
        {
          "id": "2606.01036v1",
          "title": "Position: Good Embodied Reward Models Need Bad Behavior Data",
          "summary": "This position paper argues that to obtain reliable embodied reward models, the community must invest in ``bad'' robot data: failed, suboptimal, error-prone, and even hazardous behaviors. While reward models are central to any foundation model's lifecycle, today's embodied reward models are trained primarily on success…",
          "summaryCn": "主张构建具身奖励模型必须纳入失败与次优等不良行为数据，以提升模型的可靠性与泛化能力。",
          "link": "https://arxiv.org/abs/2606.01036v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01036v1",
          "published": "2026-05-31T05:56:28Z",
          "updated": "2026-05-31T05:56:28Z",
          "authors": [
            "Ran Tian",
            "Yilin Wu",
            "Andrea Bajcsy"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 54
        },
        {
          "id": "2606.01027v1",
          "title": "$τ_0$-WM: A Unified Video-Action World Model for Robotic Manipulation",
          "summary": "Robotic manipulation requires models that generate executable actions while anticipating and evaluating their future consequences before physical execution. We present $τ_0$-World Model ($τ_0$-WM), a unified video-action world model that integrates policy learning, video prediction, and action evaluation within a sing…",
          "summaryCn": "提出τ₀-WM，一种统一视频-行动世界模型，集成策略学习、视频预测与行动评估，提升机器人操作效率。",
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
          "score": 54
        },
        {
          "id": "2606.01015v1",
          "title": "AI-IoT-Robotics Integration: Survey of Frameworks, Emerging Trends, and the Path Toward Connected Robotics",
          "summary": "The convergence of Artificial Intelligence, the Internet of Things, and Robotics is no longer a futuristic vision; it is rapidly becoming the foundation of real-time, intelligent, and context-aware systems. AI enables perception and reasoning, IoT provides scalable sensing and communication, and robotics delivers embo…",
          "summaryCn": "综述AI、物联网与机器人集成的框架与新兴趋势，指出走向互联机器人的发展路径。",
          "link": "https://arxiv.org/abs/2606.01015v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01015v1",
          "published": "2026-05-31T05:10:34Z",
          "updated": "2026-05-31T05:10:34Z",
          "authors": [
            "Ranulfo Bezerra",
            "Satoshi Tadokoro",
            "Kazunori Ohno"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 50
        },
        {
          "id": "2606.01205v1",
          "title": "ImagineUAV: Aerial Vision-Language Navigation via World-Action Modeling and Kinodynamic Planning",
          "summary": "Vision-language navigation (VLN) for UAVs demands grounding free-form instructions into 6-DoF flight under partial observability. While Vision-Language-Action (VLA) models excel at semantic reasoning, they suffer from brittleness due to geometric inconsistency and dynamics mismatch.",
          "summaryCn": "提出ImagineUAV，融合世界-行动建模与动力学规划，解决无人机视觉语言导航中的几何与动力学失配问题。",
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
          "score": 49
        },
        {
          "id": "2606.01478v1",
          "title": "Crazyflow: An Accurate, GPU-Accelerated, Differentiable Drone Simulator in JAX",
          "summary": "High-quality, large-scale synthetic data from simulations is becoming a cornerstone for pushing the capabilities of robot algorithms. While aerial robotics simulators have evolved to support specialized needs such as fidelity, differentiability, and swarms independently, a unified platform that can synthesize data acr…",
          "summaryCn": "提出Crazyflow，基于JAX的高精度GPU加速可微无人机模拟器，支持大规模合成数据生成。",
          "link": "https://arxiv.org/abs/2606.01478v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01478v1",
          "published": "2026-05-31T22:38:46Z",
          "updated": "2026-05-31T22:38:46Z",
          "authors": [
            "Martin Schuck",
            "Marcel P. Rath",
            "Yufei Hua",
            "AbhisheK Goudar",
            "SiQi Zhou",
            "Angela P. Schoellig"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 45
        },
        {
          "id": "2606.01072v1",
          "title": "Expanding Spatial and Temporal Context for Robotic Imitation Learning With Scene Graphs",
          "summary": "Imitation learning enables robots to learn how to execute tasks via observation. However, real-world environments like homes and offices are often severely partially observed due to their large spatial scales.",
          "summaryCn": "利用场景图扩展时空上下文，改善部分可观测环境下的机器人模仿学习，提升任务执行能力。",
          "link": "https://arxiv.org/abs/2606.01072v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01072v1",
          "published": "2026-05-31T07:34:25Z",
          "updated": "2026-05-31T07:34:25Z",
          "authors": [
            "Jianing Qian",
            "Qinhe Peng",
            "Emmanuel Panov",
            "Leonor Fermoselle",
            "Dinesh Jayaraman",
            "Bernadette Bucher",
            "Tarik Kelestemur"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "score": 44
        },
        {
          "id": "2606.01047v1",
          "title": "Learning Multi-Modal Trajectory Policies for Data-Efficient Robotic Manipulation",
          "summary": "Robotic manipulation requires the effective integration of heterogeneous inputs, including visual observations, language instructions, and trajectory representations, to generate accurate actions. Existing transformer-based policies typically process these heterogeneous modalities within a shared parameter space, whic…",
          "summaryCn": "提出多模态轨迹策略学习方法，高效融合视觉、语言和轨迹输入，实现数据高效的机器人操作。",
          "link": "https://arxiv.org/abs/2606.01047v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01047v1",
          "published": "2026-05-31T06:35:10Z",
          "updated": "2026-05-31T06:35:10Z",
          "authors": [
            "Zijia Chen",
            "Yuenan Hou",
            "Xinhua Jiang",
            "Yu Li",
            "Weijie Li",
            "Li Liu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 43
        },
        {
          "id": "2606.01277v1",
          "title": "DeepIPCv3: Event-Aware Multi-Modal Sensor Fusion for Sudden Pedestrian Crossing Avoidance",
          "summary": "Current end-to-end autonomous driving systems predominantly rely on frame-based sensors, which suffer from inherent perception latency and motion blur during highly dynamic encounters, specifically sudden pedestrian crossings. To address this critical safety vulnerability, we propose DeepIPCv3, a novel multi-modal aut…",
          "summaryCn": "提出DeepIPCv3，融合事件传感器与多模态数据，显著提升自动驾驶对突然行人横穿的感知与避免能力。",
          "link": "https://arxiv.org/abs/2606.01277v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01277v1",
          "published": "2026-05-31T14:59:01Z",
          "updated": "2026-05-31T14:59:01Z",
          "authors": [
            "Oskar Natan",
            "Andi Dharmawan",
            "Aufaclav Zatu Kusuma Frisky",
            "Jazi Eko Istiyanto",
            "Jun Miura"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "score": 41
        },
        {
          "id": "2606.01170v1",
          "title": "Coordinating Task Switching in a Robotics Multi-Agent System Using Behavior Trees",
          "summary": "The application of multi-agent systems in robotics is a very challenging field. Several competitions involving such systems are proposed to foster research and development of strategies and mechanisms using games as the underlying domain.",
          "summaryCn": "提出基于行为树的多智能体系统任务切换协调方法，在机器人竞赛场景中验证有效性。",
          "link": "https://arxiv.org/abs/2606.01170v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01170v1",
          "published": "2026-05-31T11:22:16Z",
          "updated": "2026-05-31T11:22:16Z",
          "authors": [
            "Lucas Haug",
            "Anarosa Alves Franco Brandão",
            "Arthur Casals"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 39
        },
        {
          "id": "2606.01151v1",
          "title": "Lagrangian Perturbation Diffusion Steering: Latent Reinforcement Learning for Generative Policies",
          "summary": "Behavior cloning with high-capacity generative policies achieves strong imitation performance, but is often limited by demonstration coverage and distribution shift. Direct reinforcement learning fine-tuning can improve performance, but updating large action decoders is frequently unstable and sample inefficient.",
          "summaryCn": "提出拉格朗日扰动扩散引导方法，通过潜在强化学习微调生成策略，在保持稳定性的同时提升操作性能。",
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
          "score": 36
        },
        {
          "id": "2606.01098v1",
          "title": "Implicit Drifting Policy: One-Step Action Generation via Conditional Expert Geometry",
          "summary": "Generative action policies based on diffusion or flow matching excel in behavior cloning, yet their iterative sampling is prohibitive for high-frequency robot control. While recent one-step formulations alleviate this latency, they inevitably discard the intermediate trajectory evolution that provides crucial action c…",
          "summaryCn": "提出隐式漂移策略，利用条件专家几何实现一步动作生成，在保持行为克隆性能的同时大幅降低控制延迟。",
          "link": "https://arxiv.org/abs/2606.01098v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01098v1",
          "published": "2026-05-31T08:39:57Z",
          "updated": "2026-05-31T08:39:57Z",
          "authors": [
            "Zemin Yang",
            "Yaoyu He",
            "Yiming Zhong",
            "Yuhao Zhang",
            "Xinge Zhu",
            "Yao Mu",
            "Qingqiu Huang",
            "Yuexin Ma"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 33
        },
        {
          "id": "2606.01363v1",
          "title": "All Models are Wrong, Knowing Where is Useful: On Model Uncertainty in Reinforcement Learning",
          "summary": "Model-based reinforcement learning (MBRL) infers information about the environment from a learned dynamics model and bears the potential to address open problems such as data efficient and safe learning in robotics. However, inaccuracies of the learned dynamics model are typically exploited by the agent, substantially…",
          "summaryCn": "研究模型不确定性在强化学习中的作用，提出在何处了解模型误差可提升机器人的数据效率与安全性。",
          "link": "https://arxiv.org/abs/2606.01363v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01363v1",
          "published": "2026-05-31T17:34:22Z",
          "updated": "2026-05-31T17:34:22Z",
          "authors": [
            "Bernd Frauenknecht",
            "Devdutt Subhasish",
            "Artur Eisele",
            "Friedrich Solowjow",
            "Sebastian Trimpe"
          ],
          "categories": [
            "cs.LG"
          ],
          "score": 32
        },
        {
          "id": "2606.01063v1",
          "title": "MindClaw: Closed-Loop Embodied Mental-State Reasoning for Precision Intervention",
          "summary": "Theory of Mind (ToM) enables an agent to reason about another actor's beliefs, goals, and intentions, which is essential for human-centered embodied assistance. Existing ToM benchmarks have advanced text and multimodal mental-state recognition, but they mostly evaluate offline question answering or final action predic…",
          "summaryCn": "提出MindClaw，实现闭环具身心智状态推理，在实时交互中提供精确干预，推动人机协助发展。",
          "link": "https://arxiv.org/abs/2606.01063v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01063v1",
          "published": "2026-05-31T07:09:37Z",
          "updated": "2026-05-31T07:09:37Z",
          "authors": [
            "Ruoxuan Zhang",
            "Qiaoqiao Wan",
            "Zhengguang Wang",
            "Chenghao Yu",
            "Hongxia Xie",
            "Jianlong Fu",
            "Wen-Huang Cheng"
          ],
          "categories": [
            "cs.AI"
          ],
          "score": 31
        },
        {
          "id": "2606.00990v1",
          "title": "OSCAR: Obstacle Survival Curves for Adaptive Robot Navigation",
          "summary": "A mobile robot following a graph of known routes can make costly navigation errors when a temporary obstacle blocks a critical edge: waiting too long behind a parked cart wastes time, but immediately rerouting around a person who would move in a few seconds is also inefficient. Standard reactive obstacle avoidance add…",
          "summaryCn": "提出OSCAR，通过障碍物生存曲线建模障碍物动态，实现移动机器人在临时阻塞时的自适应高效导航。",
          "link": "https://arxiv.org/abs/2606.00990v1",
          "pdfLink": "https://arxiv.org/pdf/2606.00990v1",
          "published": "2026-05-31T04:12:04Z",
          "updated": "2026-05-31T04:12:04Z",
          "authors": [
            "Hshmat Sahak",
            "Aoran Jiao",
            "Nicholas Rhinehart",
            "Tim Barfoot"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 30
        }
      ]
    }
  ]
};

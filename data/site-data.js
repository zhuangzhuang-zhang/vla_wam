window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-07-06T02:34:35.277797+00:00",
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
  "currentDateKey": "20260706",
  "selectionMethod": "deepseek_vla_wam_rerank",
  "llmEnabled": true,
  "llmProvider": "DeepSeek",
  "modelInfo": "deepseek-v4-pro",
  "archives": [
    {
      "dateKey": "20260706",
      "dateLabel": "2026-07-06",
      "generatedAt": "2026-07-06T02:34:35.277645+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2607.00678v1",
          "title": "ABot-M0.5: Unified Mobility-and-Manipulation World Action Model",
          "summary": "Mobile manipulation is a key capability for general-purpose robots, yet remains challenging for current embodied learning methods. VLA policies are typically reactive and lack explicit world modeling, while existing World Action Models (WAMs) are still poorly aligned with the structure of mobile manipulation: they operate on coarse video chunks, model entangled navigation-manipulation actions, and train inverse dynamics under supervision that does not match autoregressive inference. As a result, they often miss fi…",
          "summaryCn": "针对移动操作中世界动作模型的对齐问题，提出从时间粒度、动作空间、训练推理一致性三个层面进行对齐的方法。通过中间潜在动作桥接视频与本体控制，采用双层级混合Transformer架构解耦导航与操作动作子空间，并设计dream-forcing训练策略提升长期滚动预测的稳定性。该工作提升了移动操作世界动作模型的精细动作建模与长程规划能力。",
          "reasonCn": "该论文提出世界动作模型ABot-M0.5，直接面向移动操作的动作预测与控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00678v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00678v1",
          "published": "2026-07-01T09:21:20Z",
          "updated": "2026-07-01T09:21:20Z",
          "authors": [
            "Ronghan Chen",
            "Yandan Yang",
            "Zuojin Tang",
            "Dongjie Huo",
            "Tong Lin",
            "Haoning Wu",
            "Haoyun Liu",
            "Yuzhi Chen",
            "Lulu Zheng",
            "Botai Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 141,
          "llmTotalScore": 141
        },
        {
          "id": "2607.02503v1",
          "title": "VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation",
          "summary": "Contact-rich manipulation requires policies to react to local deformation, pressure, slip, and friction, yet these cues are temporally sparse and often invisible in visual observations. Existing visual-tactile policies usually feed tactile observations directly into action prediction, but rarely model tactile deformation dynamics during action generation. In this paper, we introduce VT-WAM, a Visual-Tactile World Action Model that jointly learns future visual prediction, tactile deformation prediction, and action…",
          "summaryCn": "针对接触丰富操作，提出VT-WAM，在统一流匹配框架内联合学习视觉预测、触觉变形预测与动作预测。引入非对称混合Transformer注意力桥接首帧视觉与时间触觉动态，以及接触门控注意力引导动作查询依赖触觉证据，显著提升了接触丰富操作的成功率。",
          "reasonCn": "该论文提出视觉-触觉世界动作模型VT-WAM，联合预测未来视觉、触觉变形与动作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02503v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02503v1",
          "published": "2026-07-02T17:58:36Z",
          "updated": "2026-07-02T17:58:36Z",
          "authors": [
            "Shuai Tian",
            "Yupeng Zheng",
            "Yuhang Zheng",
            "Songen Gu",
            "Yujie Zang",
            "Yuxing Qin",
            "Weize Li",
            "Haoran Li",
            "Wenchao Ding",
            "Dongbin Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.30113v1",
          "title": "SA-VLA: State-aware tokenizer for improving Vision-Language-Action Models' performance",
          "summary": "Discrete action tokenization provides a compact interface for autoregressive VLA policies, but accurately recovering continuous robot actions from discrete codes remains challenging. Existing tokenizers typically map each discrete code to a fixed continuous action prototype, ignoring the robot's current proprioceptive state. This limitation is particularly pronounced in manipulation, where the same action token may require different continuous controls under different joint configurations, object poses, and contac…",
          "summaryCn": "针对VLA模型中离散动作分词难以恢复连续动作的问题，提出状态感知动作分词器SA-VLA，根据机器人本体状态动态调整离散码到连续动作的映射。通过轻量级状态适配器扩展码本的有效支持范围，提升VLA模型在操作任务中的成功率。",
          "reasonCn": "该论文提出状态感知的离散动作分词器，改进VLA模型的连续动作重建。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30113v1",
          "pdfLink": "https://arxiv.org/pdf/2606.30113v1",
          "published": "2026-06-29T10:45:53Z",
          "updated": "2026-06-29T10:45:53Z",
          "authors": [
            "Tengyue Jiang",
            "Chunpu Xu",
            "Jiayue Kang",
            "Yao Mu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.31382v1",
          "title": "Revisiting Parameter Redundancy in Vision-Language-Action Models: Insights from VLM-to-VLA Adaptation",
          "summary": "Vision-Language-Action (VLA) models have made significant strides in embodied intelligence by integrating the powerful representations of pre-trained Vision-Language Models (VLMs). However, the massive parameter scale of VLAs imposes a heavy computational burden, and these models exhibit extreme sensitivity to parameter pruning. Current paradigms often treat the resulting performance degradation as inevitable, relying on fine-tuning or low-rank corrections to recover efficacy.",
          "summaryCn": "针对VLA模型参数量大且对剪枝敏感的问题，从VLM到VLA的适应性角度重新审视参数冗余。通过量化适配过程中的参数分化空间分布，引入控制剪枝诊断，建立分化信号与功能贡献的因果关系，并设计多模块联合剪枝方案，在LIBERO基准上有效压缩模型。",
          "reasonCn": "该论文研究VLA模型的参数冗余，通过剪枝诊断揭示模块异质性并设计压缩方案。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31382v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31382v1",
          "published": "2026-06-30T09:10:31Z",
          "updated": "2026-06-30T09:10:31Z",
          "authors": [
            "Fengnian Zhang",
            "Tao Huang",
            "Siyu Xu",
            "Zhong Jin",
            "Chang Xu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 105,
          "llmTotalScore": 105
        },
        {
          "id": "2606.29908v1",
          "title": "Pondering the Way: Spatial-perceiving World Action Model for Embodied Navigation",
          "summary": "Existing world model-based planners for visual navigation typically follow a verification-centric paradigm, decoupling goal intent from trajectory synthesis. This approach suffers from candidate dependence, heavy computational overhead, and inconsistencies between sampled actions and predicted visuals. To address these issues, we propose SWAM (Spatial-perceiving World Action Model), a task-centric joint observation-action generation framework.",
          "summaryCn": "针对视觉导航中世界模型规划器的候选依赖与计算效率问题，提出任务中心的联合观察-动作生成框架SWAM。从起始与目标RGB观测直接同时生成中间RGB-D序列和动作轨迹，并通过视觉引导动作精炼和轨迹尺度正则化提升空间可行性与泛化性。",
          "reasonCn": "该论文提出空间感知世界动作模型SWAM，联合生成观察与动作轨迹用于具身导航。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.29908v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29908v1",
          "published": "2026-06-29T07:43:47Z",
          "updated": "2026-06-29T07:43:47Z",
          "authors": [
            "Hong Chen",
            "Daqi Liu",
            "Zehan Zhang",
            "Haiguang Wang",
            "Tianhao Lu",
            "Longfei Yan",
            "Haiyang Sun",
            "Fangzhen Li",
            "Hongwei Xie",
            "Bing Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 98
        },
        {
          "id": "2606.31723v1",
          "title": "UniTacVLA: Unified Tactile Understanding and Prediction in Vision Language Action Models",
          "summary": "Vision-language-action (VLA) models have achieved strong performance in many robotic manipulation tasks, yet remain limited in contact-rich dexterous manipulation. To overcome this limitation, recent vision-tactile-language-action (VTLA) methods incorporate tactile sensing into VLA models to provide direct contact information. However, they typically treat tactile signals as passive auxiliary inputs, making it difficult to model tactile semantics and future physical interactions.",
          "summaryCn": "针对VLA模型在接触丰富操作中的局限，提出统一触觉学习框架，联合建模当前触觉状态与未来触觉变化，通过触觉思维链和从粗到细的预测形成动态触觉先验。并结合触觉-动作混合控制器，在调整、插入等任务中提升成功率与精度。",
          "reasonCn": "该论文提出统一触觉学习框架UniTacVLA，将触觉作为动态交互线索建模VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31723v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31723v1",
          "published": "2026-06-30T14:24:00Z",
          "updated": "2026-06-30T14:24:00Z",
          "authors": [
            "Xidong Zhang",
            "Yichi Zhang",
            "Jiaxin Shi",
            "Fucai Zhu",
            "Siyu Zhu",
            "Michael Yu Wang",
            "Xiaojun Wu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 95,
          "llmTotalScore": 95
        },
        {
          "id": "2607.02195v1",
          "title": "Bridge-WA: Predicting Where and How the World Changes for Robotic Action",
          "summary": "General-purpose vision-language-action models benefit from large vision-language priors, but effective manipulation also requires anticipating action-relevant scene changes. Existing world-action models often rely on large generative world models or dense future rollouts, which are expensive and spend capacity on visual details weakly coupled to control. We present Bridge-WA, a lightweight world-action framework that distills a frozen future-change teacher into three compact priors: future tokens for intended outc…",
          "summaryCn": "针对现有世界动作模型视觉预测冗余的问题，提出Bridge-WA，从冻结的未来变化教师中蒸馏出未来令牌、变化图和运动流图等紧凑先验。通过WorldBridge将动作变换器条件化于这些先验上，抑制无关外观因素，提升操作任务的泛化性和鲁棒性。",
          "reasonCn": "该论文提出轻量级世界动作框架Bridge-WA，通过蒸馏未来变化先验引导动作生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02195v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02195v1",
          "published": "2026-07-02T14:03:44Z",
          "updated": "2026-07-02T14:03:44Z",
          "authors": [
            "Yongjie Bai",
            "Hanting Wang",
            "Mingtong Dai",
            "Qijun Zhong",
            "Yang Liu",
            "Liang Lin"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 93,
          "llmTotalScore": 93
        },
        {
          "id": "2607.00666v1",
          "title": "Domain Arithmetic: One-Shot VLA Adaptation under Environmental Shifts",
          "summary": "Vision-Language-Action (VLA) models often fail to perform the same learned tasks under environmental shifts, such as changes in camera pose and shifts to a different but similar robot (e.g., from Panda to UR5e). Adapting these models to the shifted environment (i.e., target domain) often requires training on multiple demonstrations for each task, which are costly to collect. To reduce the burden of data curation and training, we propose an analogy-based method that adapts VLA models under environmental shifts thro…",
          "summaryCn": "针对VLA模型在环境变化下性能下降的问题，提出域算术方法DART，仅需单次演示即可通过权重向量算术添加域特定信息实现适应。通过子空间对齐过滤噪声，在多样视觉和具身变化下优于现有多次演示适应方法。",
          "reasonCn": "该论文提出基于权重算术的VLA单次域适应方法DART。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00666v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00666v1",
          "published": "2026-07-01T09:13:40Z",
          "updated": "2026-07-01T09:13:40Z",
          "authors": [
            "Taewook Kang",
            "Taeheon Kim",
            "Donghyun Shin",
            "Jonghyun Choi"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2607.02322v1",
          "title": "The Moving Eye: Enhancing VLA Spatial Generalization via Hybrid Dynamic Data Collection",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable promise in generalized robotic manipulation. However, their spatial generalization remains fragile. We argue that simply increasing the number of viewpoints is insufficient.",
          "summaryCn": "针对VLA模型空间泛化中的捷径学习问题，利用双臂设置，一臂执行操作，一臂作为移动环境相机，系统性评估固定、多固定和移动视角分布。发现混合连续运动与多样静态视角的策略最佳，能减少虚假相关，提升未见视角和物体配置下的泛化。",
          "reasonCn": "该论文提出数据为中心的解决方案，通过混合动态相机视角提升VLA空间泛化性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02322v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02322v1",
          "published": "2026-07-02T15:30:26Z",
          "updated": "2026-07-02T15:30:26Z",
          "authors": [
            "Jincheng Tang",
            "Yilong Zhu",
            "Zhengyuan Xie",
            "Jiang-Jiang Liu",
            "Jiaxing Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2607.01586v1",
          "title": "VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment",
          "summary": "Vision-language-action models (VLAs) have recently advanced robotic manipulation, yet the effects of different robot-data pre-training paradigms remain difficult to compare because existing models often differ in architecture, data, action space, and evaluation protocol. We present VLAFlow (Vision-Language-Action Flow), a unified flow-matching framework for controlled comparison of VLA training objectives. Using a heterogeneous robot corpus, OXEMix, containing approximately 5,000 hours of data from DROID, OpenX-Em…",
          "summaryCn": "针对VLA预训练范式难以公平比较的问题，提出VLAFlow，在pi0风格架构下统一评估动作建模、语言监督联合训练、未来潜在对齐及其组合。发现语言监督保持泛化，未来对齐改善状态转移建模，二者结合实现最稳定迁移。",
          "reasonCn": "该论文提出统一流匹配框架VLAFlow，比较不同VLA预训练范式。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01586v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01586v1",
          "published": "2026-07-02T01:38:16Z",
          "updated": "2026-07-02T01:38:16Z",
          "authors": [
            "Guoyang Xia",
            "Fengfa Li",
            "Hongjin Ji",
            "Lei Ren",
            "Fangxiang Feng",
            "Kun Zhan",
            "Yan Xie"
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
          "id": "2607.01804v1",
          "title": "VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon",
          "summary": "Vision-Language-Action (VLA) foundation models have recently achieved strong progress in embodied intelligence. To reduce policy-call frequency while preserving temporal coherence, most generative policies adopt an action chunk mechanism, executing multiple future actions in an open-loop manner under a fixed action horizon. However, this \"predict-then-blindly-execute\" paradigm sacrifices closed-loop reactivity: in contact-rich physical interactions, even small local perturbations can rapidly amplify within the ope…",
          "summaryCn": "针对动作分块VLA策略开环执行的错误累积问题，提出VLA-Corrector，包含潜在空间视觉监视器在线检测视觉动态偏差，以及在线梯度引导的校正重规划。无需修改骨干策略，通过事件触发的自适应动作区间，在长区间可靠执行与短区间校正之间灵活切换。",
          "reasonCn": "该论文提出轻量级检测-校正推理框架VLA-Corrector，实现自适应动作区间。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01804v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01804v1",
          "published": "2026-07-02T07:18:53Z",
          "updated": "2026-07-02T07:18:53Z",
          "authors": [
            "Yi Pan",
            "Miao Pan",
            "Qi Lu",
            "Jiaming Huang",
            "Man Zhang",
            "Siteng Huang",
            "Xin Li",
            "Jie Zhang",
            "Yongliang Shen",
            "Xuhong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.31329v2",
          "title": "3D HAMSTER: Bridging Planning and Control in Hierarchical Vision Language Action Models through 3D Trajectory Guidance",
          "summary": "Hierarchical Vision-Language-Action (VLA) models decouple high-level planning from low-level control to improve generalization in robot manipulation. Recent work in this paradigm uses 2D end-effector trajectories predicted by a Vision-Language Model (VLM) as explicit guidance for a downstream policy. However, state-of-the-art low-level policies operate in 3D metric space on point clouds, and feeding them 2D guidance that lacks depth forces each waypoint to be assigned the depth of whatever scene surface lies benea…",
          "summaryCn": "针对层次VLA中2D轨迹引导缺乏深度信息导致几何失真，提出3D HAMSTER，让高层VLM直接输出度量可靠的3D航点序列，并与基于点云的低层策略集成。通过深度编码器和密集深度重建，在轨迹预测、仿真和真实世界操作中均优于基线。",
          "reasonCn": "该论文提出3D HAMSTER，通过3D轨迹引导弥合层次VLA模型中规划与控制间的差距。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31329v2",
          "pdfLink": "https://arxiv.org/pdf/2606.31329v2",
          "published": "2026-06-30T08:31:35Z",
          "updated": "2026-07-01T13:05:08Z",
          "authors": [
            "Dongyoon Hwang",
            "Byungkun Lee",
            "Dongjin Kim",
            "Hyojin Jang",
            "Hoiyeong Jin",
            "Jueun Mun",
            "Minho Park",
            "Hojoon Lee",
            "Hyunseung Kim",
            "Jaegul Choo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2607.02092v1",
          "title": "Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies",
          "summary": "Flow-matching vision-language-action policies generate robot action chunks through an iterative transport process, creating an opportunity for test-time guidance without retraining the base policy. We study this opportunity in Guided Action Flow, an inference-time framework that keeps a pretrained SmolVLA policy frozen and uses a learned action-chunk critic to guide its reverse-time flow sampler. The critic is trained from real success and failure rollouts, can condition on task-description features from the froze…",
          "summaryCn": "针对流匹配VLA策略，提出推理时引导框架Guided Action Flow，使用从真实成功/失败轨迹训练的动作-块评论家，在采样过程中通过动作梯度引导预训练策略。在LIBERO上提升成功率，验证了Q引导的可行性。",
          "reasonCn": "该论文提出推理时Q引导框架，利用学到的动作-块评论家引导冻结的流匹配VLA策略。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02092v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02092v1",
          "published": "2026-07-02T12:30:50Z",
          "updated": "2026-07-02T12:30:50Z",
          "authors": [
            "Liuhaichen Yang",
            "Zhuang Jiang",
            "Chenchao Sheng",
            "Zezhi Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2607.00351v1",
          "title": "Unleashing More Actions via Action Compositional Training for VLA Models",
          "summary": "Vision-Language-Action models excel at robotic manipulation, driven by the scale and diversity of demonstration data. However, standard training paradigms often cause VLA models to severely overfit to specific behavioral patterns, rendering them unable to generalize to out-of-distribution scenarios even when those scenarios merely require novel combinations of identical sub-skills. While expanding datasets can mitigate this overfitting, acquiring high-quality robot data remains notoriously labor-intensive and cost…",
          "summaryCn": "针对VLA模型过拟合演示数据导致泛化差，提出ACT-VLA，利用模型潜在任务表征从现有任务合成新颖且物理有效的演示，无需额外人工遥操作。在挑战性操作任务上，合成数据训练的策略显着优于基线。",
          "reasonCn": "该论文提出动作组合训练框架ACT-VLA，通过离线数据增强合成新动作组合。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00351v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00351v1",
          "published": "2026-07-01T02:48:17Z",
          "updated": "2026-07-01T02:48:17Z",
          "authors": [
            "Kai Peng",
            "Jie Lu",
            "Xiaojiang Peng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2607.01212v1",
          "title": "FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model",
          "summary": "Current work on robot furniture assembly mostly focuses on toy-scale settings or single-arm manipulation. We introduce FurnitureVLA, the first systematic study of real-scale bimanual furniture assembly using Vision-Language-Action models (VLAs). We formalize the task, develop a scalable simulation pipeline for expert data generation and evaluation, and build a VR teleoperation system for single-operator bimanual control to collect high-quality real-world demonstrations.",
          "summaryCn": "首次系统研究基于VLA的真实双臂家具装配，提供规模化仿真管路、VR遥操作采集高质量真机数据。提出进度增强的VLA，联合预测动作和连续进度信号，实现自动子任务切换，减少组合错误。在三种家具类型上大幅提升成功率，并验证了真实平台。",
          "reasonCn": "该论文提出FurnitureVLA，首个用VLA模型研究真实尺度双臂家具装配。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01212v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01212v1",
          "published": "2026-07-01T17:51:21Z",
          "updated": "2026-07-01T17:51:21Z",
          "authors": [
            "Chenyang Ma",
            "Yue Yang",
            "Radu Corcodel",
            "Siddarth Jain",
            "Andrew Wu",
            "Chiori Hori",
            "Diego Romeres"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.31846v1",
          "title": "Z-1: Efficient Reinforcement Learning for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models offer a promising framework for robotic manipulation by connecting language instructions, visual observations, and continuous control. However, most existing policies remain limited by behavior cloning or supervised fine-tuning (SFT) from fixed demonstrations, which provides limited opportunity to improve from the policy's own failures. In this paper, we present Z-1, a reinforcement learning (RL) post-training framework for flow-based VLA models.",
          "summaryCn": "针对流匹配VLA模型的强化学习后训练，提出Z-1框架，在pi0.5基础上，仅用公开演示进行SFT，然后采用分组相对策略优化(GRPO)提升策略。结合共享前缀、树状轨迹分支等技巧，在24个RoboCasa任务上超越已发布最优模型。",
          "reasonCn": "该论文提出Z-1，对流式VLA模型进行强化学习后训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31846v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31846v1",
          "published": "2026-06-30T15:46:57Z",
          "updated": "2026-06-30T15:46:57Z",
          "authors": [
            "Lang Cao",
            "Renhong Chen",
            "Luyi Li",
            "Peng Wang",
            "Mofan Peng",
            "Yitong Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.31167v1",
          "title": "MIRTH: Mutual-Information Reasoning with Temporal Hubs for Vision-Language-Action Agents",
          "summary": "VLA models have emerged as a powerful paradigm for transferring semantic knowledge from web-scale data to physical robotic control. However, current single-frame architectures suffer from intrinsic limitations: temporal myopia that discards historical dynamics, reasoning gaps between high-level instructions and low-level motor commands, and inference inefficiency due to autoregressive scalar decoding. In this work, we propose MIRTH, a unified framework designed to address these challenges.",
          "summaryCn": "为解决单帧VLA架构的时序短视和推理效率问题，提出MIRTH框架，增加双尺度时间记忆中心压缩场景演化与运动趋势，以及基于互信息的潜在推理令牌对齐多模态上下文与动作轨迹，同时采用并行动作解码提升控制吞吐，在仿真和真机上取得SOTA。",
          "reasonCn": "该论文提出MIRTH，通过双尺度时间记忆和互信息推理提升VLA代理性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31167v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31167v1",
          "published": "2026-06-30T05:57:13Z",
          "updated": "2026-06-30T05:57:13Z",
          "authors": [
            "Hao Sun",
            "Yu Song",
            "Shiyu Teng",
            "Ziwei Niu",
            "Yen-Wei Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.31144v1",
          "title": "A Modular Vision-Language-Action Robotics Framework for Indoor Environments",
          "summary": "This paper presents an integrated system for the CMU Vision-Language-Action (VLA) Challenge, designed to enable an autonomous agent to perform complex tasks based on natural language instructions. Our framework employs a modular architecture that orchestrates environment mapping, question processing, and navigation. The system operates in two parallel streams: a perception pipeline that constructs a semantic voxel map from real-time camera feeds using OwlViT embeddings, and a language pipeline that classifies user…",
          "summaryCn": "面向CMU VLA挑战赛，提出集成化系统，包含感知管线构建语义体素地图、语言管线分类用户指令，并将查询在地图上下文定位后生成行动输出，衔接语言与机器人动作。",
          "reasonCn": "该论文提出模块化VLA框架，集成环境建图、问题处理与导航。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31144v1",
          "published": "2026-06-30T05:17:02Z",
          "updated": "2026-06-30T05:17:02Z",
          "authors": [
            "Anindya Jana",
            "Snehasis Banerjee",
            "Arup Sadhu",
            "Ranjan Dasgupta"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 79
        },
        {
          "id": "2606.30552v2",
          "title": "Training Vision-Language-Action Models with Dense Embodied Chain-of-Thought Supervision",
          "summary": "Cross-embodiment transfer in vision-language-action (VLA) models remains challenging because low-level state and action spaces differ fundamentally across robot platforms. We observe that the high-level cognitive process underlying manipulation, including scene perception, object identification, task planning, and sub-task decomposition, is largely shared across embodiments. Based on this observation, we present ZR-0, a 2.6 billion parameter end-to-end VLA model that uses dense Embodied Chain-of-Thought (ECoT) sup…",
          "summaryCn": "针对跨具身VLA迁移的挑战，观察高层次认知过程共享，提出ZR-0模型，双流架构下，预训练VLM生成结构化具身思维链，扩散Transformer行为专家产生动作。思维链可在推理时跳过，零成本提升跨具身性能，预训练于60M帧大规模数据集。",
          "reasonCn": "该论文提出ZR-0，用密集具身思维链监督训练VLA模型，促进跨具身迁移。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30552v2",
          "pdfLink": "https://arxiv.org/pdf/2606.30552v2",
          "published": "2026-06-29T16:48:48Z",
          "updated": "2026-07-01T17:07:04Z",
          "authors": [
            "Haoyang Li",
            "Guanlin Li",
            "Youhe Feng",
            "Chen Zhao",
            "Zhuoran Wang",
            "Yang Li",
            "Qizhe Wei",
            "Shifeng Bao",
            "Haitao Shen",
            "Yihan Zhao"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        },
        {
          "id": "2606.30456v1",
          "title": "Vision-Language-Action Models: Experimental Insights from a Real-World UR5 Platform",
          "summary": "This project investigates whether recent Vision-Language-Action (VLA) models can be transferred from controlled research benchmarks to a real-world robotic platform, specifically a UR5e manipulator, in a reproducible and operationally meaningful manner. The work integrates real-robot data acquisition, dataset engineering (compatible with the RLDS format), and the fine-tuning and deployment of OpenVLA and OpenVLA-OFT models, with systematic validation of action representations and control interfaces. The project re…",
          "summaryCn": "该项目将OpenVLA等模型从基准迁移到UR5e真实平台，系统集成数据采集、数据集工程、微调部署，并分析闭环行为不稳定性。揭示离线指标到闭环表现的差距受动作语义、坐标帧、时序对齐等多种因素影响，为VLA实际部署提供洞察。",
          "reasonCn": "该论文在实际UR5平台实验研究VLA模型的现实部署问题与表现差距。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30456v1",
          "pdfLink": "https://arxiv.org/pdf/2606.30456v1",
          "published": "2026-06-29T15:23:34Z",
          "updated": "2026-06-29T15:23:34Z",
          "authors": [
            "Mathilde Hochedel",
            "Marc Lalonde"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 78
        }
      ]
    },
    {
      "dateKey": "20260705",
      "dateLabel": "2026-07-05",
      "generatedAt": "2026-07-05T03:18:58.197603+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2607.00678v1",
          "title": "ABot-M0.5: Unified Mobility-and-Manipulation World Action Model",
          "summary": "Mobile manipulation is a key capability for general-purpose robots, yet remains challenging for current embodied learning methods. VLA policies are typically reactive and lack explicit world modeling, while existing World Action Models (WAMs) are still poorly aligned with the structure of mobile manipulation: they operate on coarse video chunks, model entangled navigation-manipulation actions, and train inverse dynamics under supervision that does not match autoregressive inference. As a result, they often miss fi…",
          "summaryCn": "ABot-M0.5是一种针对移动操作的统一世界动作模型，通过引入中间潜在动作对齐时间粒度、双级混合Transformer对齐动作空间、dream-forcing对齐训练与推理一致性，缓解长程导航和操作中的误差累积。",
          "reasonCn": "明确提出World Action Model(ABot-M0.5)，针对移动操作进行三层对齐，涉及动作空间和时间粒度。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00678v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00678v1",
          "published": "2026-07-01T09:21:20Z",
          "updated": "2026-07-01T09:21:20Z",
          "authors": [
            "Ronghan Chen",
            "Yandan Yang",
            "Zuojin Tang",
            "Dongjie Huo",
            "Tong Lin",
            "Haoning Wu",
            "Haoyun Liu",
            "Yuzhi Chen",
            "Lulu Zheng",
            "Botai Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 142,
          "llmTotalScore": 142
        },
        {
          "id": "2607.02503v1",
          "title": "VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation",
          "summary": "Contact-rich manipulation requires policies to react to local deformation, pressure, slip, and friction, yet these cues are temporally sparse and often invisible in visual observations. Existing visual-tactile policies usually feed tactile observations directly into action prediction, but rarely model tactile deformation dynamics during action generation. In this paper, we introduce VT-WAM, a Visual-Tactile World Action Model that jointly learns future visual prediction, tactile deformation prediction, and action…",
          "summaryCn": "VT-WAM通过非对称混合Transformer和接触门控注意力引导，在流匹配框架中同步预测未来视觉、触觉变形和机器人动作，在六项真实接触丰富任务中成功率提升26.67%以上。",
          "reasonCn": "提出Visual-Tactile World Action Model(VT-WAM)，联合预测视觉、触觉和动作，用于接触丰富操作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02503v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02503v1",
          "published": "2026-07-02T17:58:36Z",
          "updated": "2026-07-02T17:58:36Z",
          "authors": [
            "Shuai Tian",
            "Yupeng Zheng",
            "Yuhang Zheng",
            "Songen Gu",
            "Yujie Zang",
            "Yuxing Qin",
            "Weize Li",
            "Haoran Li",
            "Wenchao Ding",
            "Dongbin Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.30113v1",
          "title": "SA-VLA: State-aware tokenizer for improving Vision-Language-Action Models' performance",
          "summary": "Discrete action tokenization provides a compact interface for autoregressive VLA policies, but accurately recovering continuous robot actions from discrete codes remains challenging. Existing tokenizers typically map each discrete code to a fixed continuous action prototype, ignoring the robot's current proprioceptive state. This limitation is particularly pronounced in manipulation, where the same action token may require different continuous controls under different joint configurations, object poses, and contac…",
          "summaryCn": "SA-VLA通过交叉注意力或状态适配器将机器人本体状态注入动作解码，使有限码本中的每个离散token能表达状态依赖的连续动作，在12个RoboTwin任务上平均成功率从0.29提升至0.5以上。",
          "reasonCn": "提出状态感知动作分词器来改进VLA策略的动作重建，直接涉及视觉、语言和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30113v1",
          "pdfLink": "https://arxiv.org/pdf/2606.30113v1",
          "published": "2026-06-29T10:45:53Z",
          "updated": "2026-06-29T10:45:53Z",
          "authors": [
            "Tengyue Jiang",
            "Chunpu Xu",
            "Jiayue Kang",
            "Yao Mu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 109
        },
        {
          "id": "2606.29384v1",
          "title": "Event-VLA: Action-Conditioned Event Fusion for Robust Vision-Language-Action Model",
          "summary": "Vision-Language-Action (VLA) models have become an important paradigm of embodied AI. However, existing VLA models typically assume well-lit and stable indoor settings, while real-world embodied manipulation may involve degraded RGB observations caused by illumination shifts, posing critical challenges for robust robotic manipulation. To address this gap, we propose \\textbf{Event-VLA}, an event-enhanced VLA framework for generalizable manipulation across varying illumination conditions.",
          "summaryCn": "Event-VLA通过动作查询路由机制选择性地聚合事件token，保留预训练RGB-语言先验的同时利用事件信息，在仿真和真实世界中维持稳定操作成功率，尤其应对恶劣光照。",
          "reasonCn": "提出Event-VLA框架，利用事件流增强VLA在光照变化下的鲁棒性，涉及视觉、语言和动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29384v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29384v1",
          "published": "2026-06-28T13:19:11Z",
          "updated": "2026-06-28T13:19:11Z",
          "authors": [
            "Jiaxin Liu",
            "Xun Xu",
            "Zhenhao Zhang",
            "Hanqing Wang",
            "Ruiqi Chen",
            "Shi Chang",
            "Weiyu Guo",
            "Laurent Kneip"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.31382v1",
          "title": "Revisiting Parameter Redundancy in Vision-Language-Action Models: Insights from VLM-to-VLA Adaptation",
          "summary": "Vision-Language-Action (VLA) models have made significant strides in embodied intelligence by integrating the powerful representations of pre-trained Vision-Language Models (VLMs). However, the massive parameter scale of VLAs imposes a heavy computational burden, and these models exhibit extreme sensitivity to parameter pruning. Current paradigms often treat the resulting performance degradation as inevitable, relying on fine-tuning or low-rank corrections to recover efficacy.",
          "summaryCn": "通过量化VLM到VLA适应过程中的参数分歧分布，引入受控剪枝作为诊断探针，建立分歧信号与功能贡献的因果关联，提出多模块联合剪枝方法，在LIBERO基准上减少参数同时保持性能。",
          "reasonCn": "重新审视VLA模型中的参数冗余，从VLM到VLA适应的角度分析并设计剪枝方案。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31382v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31382v1",
          "published": "2026-06-30T09:10:31Z",
          "updated": "2026-06-30T09:10:31Z",
          "authors": [
            "Fengnian Zhang",
            "Tao Huang",
            "Siyu Xu",
            "Zhong Jin",
            "Chang Xu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 107
        },
        {
          "id": "2606.29908v1",
          "title": "Pondering the Way: Spatial-perceiving World Action Model for Embodied Navigation",
          "summary": "Existing world model-based planners for visual navigation typically follow a verification-centric paradigm, decoupling goal intent from trajectory synthesis. This approach suffers from candidate dependence, heavy computational overhead, and inconsistencies between sampled actions and predicted visuals. To address these issues, we propose SWAM (Spatial-perceiving World Action Model), a task-centric joint observation-action generation framework.",
          "summaryCn": "SWAM通过单次推理同步生成中间RGB-D和动作轨迹，利用深度伪标签内化空间先验，引入视觉引导动作细化模块和轨迹尺度正则化，在视觉导航中显著超越两阶段规划器。",
          "reasonCn": "提出空间感知世界动作模型SWAM，给定起点和终点RGB生成中间RGB-D序列和动作轨迹，联合观测与动作建模。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.29908v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29908v1",
          "published": "2026-06-29T07:43:47Z",
          "updated": "2026-06-29T07:43:47Z",
          "authors": [
            "Hong Chen",
            "Daqi Liu",
            "Zehan Zhang",
            "Haiguang Wang",
            "Tianhao Lu",
            "Longfei Yan",
            "Haiyang Sun",
            "Fangzhen Li",
            "Hongwei Xie",
            "Bing Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 99,
          "llmTotalScore": 99
        },
        {
          "id": "2607.00836v2",
          "title": "From World Models to World Action Models: A Concise Tutorial for Robotics",
          "summary": "World models are increasingly used in embodied intelligence and generative simulation, yet their scope remains ambiguous across communities. This tutorial presents a design-space view of world models as action-conditioned predictive models that estimate the future evolution of task-relevant observations or states. We categorize existing methods into observation-space and state-space world models, comparing their trade-offs in visual fidelity, spatial structure, physical interpretability, and control usability.",
          "summaryCn": "本教程将世界模型定义为动作条件预测模型，分类为观测空间和状态空间世界模型，进一步引入世界动作模型并总结四种范式：想象后执行、视频特征条件动作预测、联合视频-动作建模和辅助视频预测，为具身预测与控制提供结构化分类。",
          "reasonCn": "综述性教程，全面介绍世界动作模型(WAM)的概念、范式和分类，明确连接预测未来与可执行动作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00836v2",
          "pdfLink": "https://arxiv.org/pdf/2607.00836v2",
          "published": "2026-07-01T11:56:54Z",
          "updated": "2026-07-02T03:53:42Z",
          "authors": [
            "Xiaoxiong Zhang",
            "Xiong Zeng",
            "Wei Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 97
        },
        {
          "id": "2606.31723v1",
          "title": "UniTacVLA: Unified Tactile Understanding and Prediction in Vision Language Action Models",
          "summary": "Vision-language-action (VLA) models have achieved strong performance in many robotic manipulation tasks, yet remain limited in contact-rich dexterous manipulation. To overcome this limitation, recent vision-tactile-language-action (VTLA) methods incorporate tactile sensing into VLA models to provide direct contact information. However, they typically treat tactile signals as passive auxiliary inputs, making it difficult to model tactile semantics and future physical interactions.",
          "summaryCn": "UniTacVLA构建统一触觉潜在空间，通过触觉链式推理和粗到细未来触觉预测形成动态感知触觉先验，利用触觉-动作混合控制器以高频校正改进低频动作块，在四类接触丰富任务上提升成功率和精度。",
          "reasonCn": "提出统一触觉学习框架UniTacVLA，在VLA中建模触觉动态和预测，用于接触丰富操作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31723v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31723v1",
          "published": "2026-06-30T14:24:00Z",
          "updated": "2026-06-30T14:24:00Z",
          "authors": [
            "Xidong Zhang",
            "Yichi Zhang",
            "Jiaxin Shi",
            "Fucai Zhu",
            "Siyu Zhu",
            "Michael Yu Wang",
            "Xiaojun Wu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 97
        },
        {
          "id": "2607.02195v1",
          "title": "Bridge-WA: Predicting Where and How the World Changes for Robotic Action",
          "summary": "General-purpose vision-language-action models benefit from large vision-language priors, but effective manipulation also requires anticipating action-relevant scene changes. Existing world-action models often rely on large generative world models or dense future rollouts, which are expensive and spend capacity on visual details weakly coupled to control. We present Bridge-WA, a lightweight world-action framework that distills a frozen future-change teacher into three compact priors: future tokens for intended outc…",
          "summaryCn": "Bridge-WA从冷冻的未来变化教师模型中蒸馏未来token、变化图和运动流图，通过WorldBridge注入动作Transformer，聚焦场景改变的位置和方式，抑制背景、光照等干扰，提高操作泛化性和鲁棒性。",
          "reasonCn": "提出轻量级世界动作框架Bridge-WA，将未来变化先验蒸馏并条件化动作Transformer，明确用于动作生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02195v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02195v1",
          "published": "2026-07-02T14:03:44Z",
          "updated": "2026-07-02T14:03:44Z",
          "authors": [
            "Yongjie Bai",
            "Hanting Wang",
            "Mingtong Dai",
            "Qijun Zhong",
            "Yang Liu",
            "Liang Lin"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 95,
          "llmTotalScore": 95
        },
        {
          "id": "2607.02322v1",
          "title": "The Moving Eye: Enhancing VLA Spatial Generalization via Hybrid Dynamic Data Collection",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable promise in generalized robotic manipulation. However, their spatial generalization remains fragile. We argue that simply increasing the number of viewpoints is insufficient.",
          "summaryCn": "利用双臂设置中移动相机拍摄的混合数据，结合连续运动和多样静态视角，显著减少VLA模型对相机-基座相对位姿等虚假相关性的依赖，提升对未见相机位姿和物体配置的空间泛化能力。",
          "reasonCn": "研究VLA空间泛化，通过混合动态数据收集策略减少虚假相关性，直接优化VLA模型的视觉-语言-动作映射。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02322v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02322v1",
          "published": "2026-07-02T15:30:26Z",
          "updated": "2026-07-02T15:30:26Z",
          "authors": [
            "Jincheng Tang",
            "Yilong Zhu",
            "Zhengyuan Xie",
            "Jiang-Jiang Liu",
            "Jiaxing Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2607.00666v1",
          "title": "Domain Arithmetic: One-Shot VLA Adaptation under Environmental Shifts",
          "summary": "Vision-Language-Action (VLA) models often fail to perform the same learned tasks under environmental shifts, such as changes in camera pose and shifts to a different but similar robot (e.g., from Panda to UR5e). Adapting these models to the shifted environment (i.e., target domain) often requires training on multiple demonstrations for each task, which are costly to collect. To reduce the burden of data curation and training, we propose an analogy-based method that adapts VLA models under environmental shifts thro…",
          "summaryCn": "DART将领域特定信息添加到VLA权重中实现一击适应，通过奇异分量子空间对齐过滤噪声分量，在仿真和真实实验中以单个演示高效适配视觉和实施例变化。",
          "reasonCn": "提出DART方法，通过权重向量算术实现VLA模型在环境偏移下的一击适应，属VLA模型快速适应。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00666v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00666v1",
          "published": "2026-07-01T09:13:40Z",
          "updated": "2026-07-01T09:13:40Z",
          "authors": [
            "Taewook Kang",
            "Taeheon Kim",
            "Donghyun Shin",
            "Jonghyun Choi"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2607.01586v1",
          "title": "VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment",
          "summary": "Vision-language-action models (VLAs) have recently advanced robotic manipulation, yet the effects of different robot-data pre-training paradigms remain difficult to compare because existing models often differ in architecture, data, action space, and evaluation protocol. We present VLAFlow (Vision-Language-Action Flow), a unified flow-matching framework for controlled comparison of VLA training objectives. Using a heterogeneous robot corpus, OXEMix, containing approximately 5,000 hours of data from DROID, OpenX-Em…",
          "summaryCn": "VLAFlow基于流匹配，在约5000小时异构机器人数据上评估纯动作建模、语言监督联合训练、未来潜在对齐及其组合，发现语言与未来潜在信号互补能实现最稳定迁移，提供元动作空间视角。",
          "reasonCn": "提供VLA训练的统一框架VLAFlow，比较多种预训练范式，涉及视觉、语言和动作联合训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01586v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01586v1",
          "published": "2026-07-02T01:38:16Z",
          "updated": "2026-07-02T01:38:16Z",
          "authors": [
            "Guoyang Xia",
            "Fengfa Li",
            "Hongjin Ji",
            "Lei Ren",
            "Fangxiang Feng",
            "Kun Zhan",
            "Yan Xie"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2607.01804v1",
          "title": "VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon",
          "summary": "Vision-Language-Action (VLA) foundation models have recently achieved strong progress in embodied intelligence. To reduce policy-call frequency while preserving temporal coherence, most generative policies adopt an action chunk mechanism, executing multiple future actions in an open-loop manner under a fixed action horizon. However, this \"predict-then-blindly-execute\" paradigm sacrifices closed-loop reactivity: in contact-rich physical interactions, even small local perturbations can rapidly amplify within the ope…",
          "summaryCn": "VLA-Corrector引入轻量潜在空间视觉监视器在线比较预测与真实视觉特征，一旦检测到持久偏差则丢弃剩余动作并调用在线梯度引导进行纠正性重规划，自然过渡到自适应动作水平，在接触丰富交互中避免累积误差。",
          "reasonCn": "提出VLA-Corrector，检测视觉动态偏差并触发重规划，实现动作执行块的自适应动作水平，增强VLA闭环反应。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01804v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01804v1",
          "published": "2026-07-02T07:18:53Z",
          "updated": "2026-07-02T07:18:53Z",
          "authors": [
            "Yi Pan",
            "Miao Pan",
            "Qi Lu",
            "Jiaming Huang",
            "Man Zhang",
            "Siteng Huang",
            "Xin Li",
            "Jie Zhang",
            "Yongliang Shen",
            "Xuhong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.31329v2",
          "title": "3D HAMSTER: Bridging Planning and Control in Hierarchical Vision Language Action Models through 3D Trajectory Guidance",
          "summary": "Hierarchical Vision-Language-Action (VLA) models decouple high-level planning from low-level control to improve generalization in robot manipulation. Recent work in this paradigm uses 2D end-effector trajectories predicted by a Vision-Language Model (VLM) as explicit guidance for a downstream policy. However, state-of-the-art low-level policies operate in 3D metric space on point clouds, and feeding them 2D guidance that lacks depth forces each waypoint to be assigned the depth of whatever scene surface lies benea…",
          "summaryCn": "3D HAMSTER通过增强VLM的深度编码器和密集深度重建损失，直接预测3D路点序列，集成到基于点云的低层策略，在3D轨迹预测、仿真和真实操作中优于2D引导基线，尤其在视觉和语言条件变化时增益最大。",
          "reasonCn": "分层VLA框架3D HAMSTER，使规划器直接输出3D度量可靠轨迹引导底层策略，融合视觉和语言。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31329v2",
          "pdfLink": "https://arxiv.org/pdf/2606.31329v2",
          "published": "2026-06-30T08:31:35Z",
          "updated": "2026-07-01T13:05:08Z",
          "authors": [
            "Dongyoon Hwang",
            "Byungkun Lee",
            "Dongjin Kim",
            "Hyojin Jang",
            "Hoiyeong Jin",
            "Jueun Mun",
            "Minho Park",
            "Hojoon Lee",
            "Hyunseung Kim",
            "Jaegul Choo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2607.02092v1",
          "title": "Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies",
          "summary": "Flow-matching vision-language-action policies generate robot action chunks through an iterative transport process, creating an opportunity for test-time guidance without retraining the base policy. We study this opportunity in Guided Action Flow, an inference-time framework that keeps a pretrained SmolVLA policy frozen and uses a learned action-chunk critic to guide its reverse-time flow sampler. The critic is trained from real success and failure rollouts, can condition on task-description features from the froze…",
          "summaryCn": "Guided Action Flow在冷冻的SmolVLA策略上，利用从真实成败记录中训练的动作块评论家通过动作梯度引导反向流采样，在LIBERO任务上将单任务成功率从68%提升至82.0%，验证了无需重训练即可提高VLA性能的可行性。",
          "reasonCn": "提出推理时引导框架，用动作块评论家引导冻结的流匹配VLA策略，不修改模型权重，用于动作改进。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02092v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02092v1",
          "published": "2026-07-02T12:30:50Z",
          "updated": "2026-07-02T12:30:50Z",
          "authors": [
            "Liuhaichen Yang",
            "Zhuang Jiang",
            "Chenchao Sheng",
            "Zezhi Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2607.01212v1",
          "title": "FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model",
          "summary": "Current work on robot furniture assembly mostly focuses on toy-scale settings or single-arm manipulation. We introduce FurnitureVLA, the first systematic study of real-scale bimanual furniture assembly using Vision-Language-Action models (VLAs). We formalize the task, develop a scalable simulation pipeline for expert data generation and evaluation, and build a VR teleoperation system for single-operator bimanual control to collect high-quality real-world demonstrations.",
          "summaryCn": "FurnitureVLA首次系统研究真实尺寸双臂家具装配，通过微调语义接地子任务并预测连续进度信号自动触发子任务切换，减少长程推理中的累积误差，在三种家具上仿真成功率从48%提升至80%，真实平台最高仅下降16%。",
          "reasonCn": "提出FurnitureVLA，使用进度增强的VLA模型进行长程双臂家具装配，联合预测动作和进度。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01212v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01212v1",
          "published": "2026-07-01T17:51:21Z",
          "updated": "2026-07-01T17:51:21Z",
          "authors": [
            "Chenyang Ma",
            "Yue Yang",
            "Radu Corcodel",
            "Siddarth Jain",
            "Andrew Wu",
            "Chiori Hori",
            "Diego Romeres"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2607.00351v1",
          "title": "Unleashing More Actions via Action Compositional Training for VLA Models",
          "summary": "Vision-Language-Action models excel at robotic manipulation, driven by the scale and diversity of demonstration data. However, standard training paradigms often cause VLA models to severely overfit to specific behavioral patterns, rendering them unable to generalize to out-of-distribution scenarios even when those scenarios merely require novel combinations of identical sub-skills. While expanding datasets can mitigate this overfitting, acquiring high-quality robot data remains notoriously labor-intensive and cost…",
          "summaryCn": "ACT-VLA利用模型潜在任务表征，从现有任务直接合成物理有效的全新演示，无需额外人工采集，在挑战性操作模拟中缓解VLA过拟合，显著提升分布外泛化能力。",
          "reasonCn": "提出ACT-VLA离线数据增强框架，通过组合已知子技能合成新演示扩展VLA训练分布，使VLA能生成新行为。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00351v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00351v1",
          "published": "2026-07-01T02:48:17Z",
          "updated": "2026-07-01T02:48:17Z",
          "authors": [
            "Kai Peng",
            "Jie Lu",
            "Xiaojiang Peng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.31846v1",
          "title": "Z-1: Efficient Reinforcement Learning for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models offer a promising framework for robotic manipulation by connecting language instructions, visual observations, and continuous control. However, most existing policies remain limited by behavior cloning or supervised fine-tuning (SFT) from fixed demonstrations, which provides limited opportunity to improve from the policy's own failures. In this paper, we present Z-1, a reinforcement learning (RL) post-training framework for flow-based VLA models.",
          "summaryCn": "Z-1在公开RoboCasa演示上进行监督微调后，采用任务级Group Relative Policy Optimization，结合共享前缀展开、树形分支、完成度校准和选择性联合训练，在24项任务上平均成功率80.6%，比SFT初始化提升13.2%。",
          "reasonCn": "为流匹配VLA模型π0.5设计强化学习后训练框架Z-1，使其从自身失败中改进，提升动作成功率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31846v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31846v1",
          "published": "2026-06-30T15:46:57Z",
          "updated": "2026-06-30T15:46:57Z",
          "authors": [
            "Lang Cao",
            "Renhong Chen",
            "Luyi Li",
            "Peng Wang",
            "Mofan Peng",
            "Yitong Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.31167v1",
          "title": "MIRTH: Mutual-Information Reasoning with Temporal Hubs for Vision-Language-Action Agents",
          "summary": "VLA models have emerged as a powerful paradigm for transferring semantic knowledge from web-scale data to physical robotic control. However, current single-frame architectures suffer from intrinsic limitations: temporal myopia that discards historical dynamics, reasoning gaps between high-level instructions and low-level motor commands, and inference inefficiency due to autoregressive scalar decoding. In this work, we propose MIRTH, a unified framework designed to address these challenges.",
          "summaryCn": "MIRTH增强预训练VLA骨干，用紧凑嵌入压缩长期场景演变和短期运动趋势，通过互信息目标优化潜在推理令牌，用并行解码替代自回归生成，在LIBERO和真实机器人上达到最先进并展现错误恢复。",
          "reasonCn": "MIRTH为VLA代理人引入双尺度时间记忆、互信息推理令牌和并行动作解码，解决时序短视和推理效率问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31167v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31167v1",
          "published": "2026-06-30T05:57:13Z",
          "updated": "2026-06-30T05:57:13Z",
          "authors": [
            "Hao Sun",
            "Yu Song",
            "Shiyu Teng",
            "Ziwei Niu",
            "Yen-Wei Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.31144v1",
          "title": "A Modular Vision-Language-Action Robotics Framework for Indoor Environments",
          "summary": "This paper presents an integrated system for the CMU Vision-Language-Action (VLA) Challenge, designed to enable an autonomous agent to perform complex tasks based on natural language instructions. Our framework employs a modular architecture that orchestrates environment mapping, question processing, and navigation. The system operates in two parallel streams: a perception pipeline that constructs a semantic voxel map from real-time camera feeds using OwlViT embeddings, and a language pipeline that classifies user…",
          "summaryCn": "该框架并行运行感知和语言流水线，构建语义体素地图并分类用户指令，最后将查询接地生成VLM提示，输出可执行动作，在CMU VLA挑战中展示可行方案。",
          "reasonCn": "提出模块化VLA框架，结合语义映射和语言指令处理来输出机器人动作，用于室内任务。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31144v1",
          "published": "2026-06-30T05:17:02Z",
          "updated": "2026-06-30T05:17:02Z",
          "authors": [
            "Anindya Jana",
            "Snehasis Banerjee",
            "Arup Sadhu",
            "Ranjan Dasgupta"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        }
      ]
    },
    {
      "dateKey": "20260704",
      "dateLabel": "2026-07-04",
      "generatedAt": "2026-07-04T03:17:55.693332+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2607.00678v1",
          "title": "ABot-M0.5: Unified Mobility-and-Manipulation World Action Model",
          "summary": "Mobile manipulation is a key capability for general-purpose robots, yet remains challenging for current embodied learning methods. VLA policies are typically reactive and lack explicit world modeling, while existing World Action Models (WAMs) are still poorly aligned with the structure of mobile manipulation: they operate on coarse video chunks, model entangled navigation-manipulation actions, and train inverse dynamics under supervision that does not match autoregressive inference. As a result, they often miss fi…",
          "summaryCn": "针对移动操作任务，提出ABot-M0.5世界动作模型，通过引入中间潜在动作、双层级混合专家Transformer和dream-forcing训练策略，提升长时间序列下的细粒度交互和动作一致性。该模型在移动操作任务中展现出更强的接触动力学建模和误差累积缓解能力。",
          "reasonCn": "提出统一的移动操作世界动作模型WAM，对齐时间粒度、动作空间与推理条件。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00678v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00678v1",
          "published": "2026-07-01T09:21:20Z",
          "updated": "2026-07-01T09:21:20Z",
          "authors": [
            "Ronghan Chen",
            "Yandan Yang",
            "Zuojin Tang",
            "Dongjie Huo",
            "Tong Lin",
            "Haoning Wu",
            "Haoyun Liu",
            "Yuzhi Chen",
            "Lulu Zheng",
            "Botai Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 144,
          "llmTotalScore": 144
        },
        {
          "id": "2606.29089v1",
          "title": "TAP-VLA: Tactile Annotation Prompting for Vision Language Action Models",
          "summary": "Vision-Language-Action (VLA) models demonstrate impressive reasoning over visual, semantic, and spatial task variations by leveraging large-scale vision and language pre-training. They remain, however, largely blind to contact forces, which seldom manifest clearly in visual feedback but are central to contact-rich manipulation. Tactile sensing measures these forces directly, but integrating it into VLAs is difficult: tactile data is absent from the large-scale corpora used to pre-train VLAs, so adding it as a new…",
          "summaryCn": "提出TAP-VLA框架，将视觉触觉传感器的剪切场向量叠加到RGB图像上，为VLA模型提供空间对齐的触觉提示，无需修改架构即可提升接触丰富任务的成功率。实验表明该方法在四种任务上达到78%成功率，显著优于纯视觉微调基线。",
          "reasonCn": "在VLA模型中通过视觉增强注入触觉信息，解决接触丰富操作的盲点。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29089v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29089v1",
          "published": "2026-06-27T21:06:06Z",
          "updated": "2026-06-27T21:06:06Z",
          "authors": [
            "Mark Van der Merwe",
            "Mohamad Louai Shehab",
            "Jayjun Lee",
            "Youngsun Wi",
            "Yinpei Dai",
            "Dmitry Berenson",
            "Nima Fazeli"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 124,
          "llmTotalScore": 124
        },
        {
          "id": "2607.02503v1",
          "title": "VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation",
          "summary": "Contact-rich manipulation requires policies to react to local deformation, pressure, slip, and friction, yet these cues are temporally sparse and often invisible in visual observations. Existing visual-tactile policies usually feed tactile observations directly into action prediction, but rarely model tactile deformation dynamics during action generation. In this paper, we introduce VT-WAM, a Visual-Tactile World Action Model that jointly learns future visual prediction, tactile deformation prediction, and action…",
          "summaryCn": "VT-WAM引入非对称混合专家注意力和接触门控注意力引导，在流匹配框架内统一建模视觉预测、触觉形变和动作预测，专门针对接触丰富操作。在六个真实世界任务中平均成功率达71.67%，验证了建模触觉形变动态和接触阶段注意力引导的重要性。",
          "reasonCn": "提出视觉-触觉世界动作模型VT-WAM，联合预测未来视觉、触觉形变与动作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02503v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02503v1",
          "published": "2026-07-02T17:58:36Z",
          "updated": "2026-07-02T17:58:36Z",
          "authors": [
            "Shuai Tian",
            "Yupeng Zheng",
            "Yuhang Zheng",
            "Songen Gu",
            "Yujie Zang",
            "Yuxing Qin",
            "Weize Li",
            "Haoran Li",
            "Wenchao Ding",
            "Dongbin Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.30113v1",
          "title": "SA-VLA: State-aware tokenizer for improving Vision-Language-Action Models' performance",
          "summary": "Discrete action tokenization provides a compact interface for autoregressive VLA policies, but accurately recovering continuous robot actions from discrete codes remains challenging. Existing tokenizers typically map each discrete code to a fixed continuous action prototype, ignoring the robot's current proprioceptive state. This limitation is particularly pronounced in manipulation, where the same action token may require different continuous controls under different joint configurations, object poses, and contac…",
          "summaryCn": "SA-VLA针对离散动作token化中的失准问题，设计状态条件解码机制，包括交叉注意力和轻量状态适配器，使得同一token可表示状态依赖的动作族。集成到LLM基VLA后，在12个RoboTwin任务上平均成功率从0.29提升至0.50，保持了离散动作建模的兼容性。",
          "reasonCn": "提出状态感知的动作分词器，改善VLA模型从离散token恢复连续动作的准确性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30113v1",
          "pdfLink": "https://arxiv.org/pdf/2606.30113v1",
          "published": "2026-06-29T10:45:53Z",
          "updated": "2026-06-29T10:45:53Z",
          "authors": [
            "Tengyue Jiang",
            "Chunpu Xu",
            "Jiayue Kang",
            "Yao Mu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.29384v1",
          "title": "Event-VLA: Action-Conditioned Event Fusion for Robust Vision-Language-Action Model",
          "summary": "Vision-Language-Action (VLA) models have become an important paradigm of embodied AI. However, existing VLA models typically assume well-lit and stable indoor settings, while real-world embodied manipulation may involve degraded RGB observations caused by illumination shifts, posing critical challenges for robust robotic manipulation. To address this gap, we propose \\textbf{Event-VLA}, an event-enhanced VLA framework for generalizable manipulation across varying illumination conditions.",
          "summaryCn": "针对VLA在恶劣照明下失效问题，将事件相机作为互补观测，通过动作查询路由和门控交叉注意力选择性聚合事件token，保留预训练RGB-语言先验的同时增强动作预测。在仿真和真实场景中，该方法在可见度变化下维持高性能，优于直接融合基线。",
          "reasonCn": "提出事件增强的VLA框架Event-VLA，利用事件流提高光照变化下的鲁棒性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29384v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29384v1",
          "published": "2026-06-28T13:19:11Z",
          "updated": "2026-06-28T13:19:11Z",
          "authors": [
            "Jiaxin Liu",
            "Xun Xu",
            "Zhenhao Zhang",
            "Hanqing Wang",
            "Ruiqi Chen",
            "Shi Chang",
            "Weiyu Guo",
            "Laurent Kneip"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 109
        },
        {
          "id": "2606.31382v1",
          "title": "Revisiting Parameter Redundancy in Vision-Language-Action Models: Insights from VLM-to-VLA Adaptation",
          "summary": "Vision-Language-Action (VLA) models have made significant strides in embodied intelligence by integrating the powerful representations of pre-trained Vision-Language Models (VLMs). However, the massive parameter scale of VLAs imposes a heavy computational burden, and these models exhibit extreme sensitivity to parameter pruning. Current paradigms often treat the resulting performance degradation as inevitable, relying on fine-tuning or low-rank corrections to recover efficacy.",
          "summaryCn": "本文从VLM到VLA的适配角度量化参数分歧，利用受控剪枝作为诊断探针建立适配信号与功能贡献的因果联系。基于发现的模块异质性设计多模块联合剪枝方案，在LIBERO基准上有效降低参数规模，挑战了剪枝后必须恢复的惯例。",
          "reasonCn": "重新审视VLA模型的参数冗余，通过诊断剪枝揭示模块异质性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31382v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31382v1",
          "published": "2026-06-30T09:10:31Z",
          "updated": "2026-06-30T09:10:31Z",
          "authors": [
            "Fengnian Zhang",
            "Tao Huang",
            "Siyu Xu",
            "Zhong Jin",
            "Chang Xu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.29908v1",
          "title": "Pondering the Way: Spatial-perceiving World Action Model for Embodied Navigation",
          "summary": "Existing world model-based planners for visual navigation typically follow a verification-centric paradigm, decoupling goal intent from trajectory synthesis. This approach suffers from candidate dependence, heavy computational overhead, and inconsistencies between sampled actions and predicted visuals. To address these issues, we propose SWAM (Spatial-perceiving World Action Model), a task-centric joint observation-action generation framework.",
          "summaryCn": "SWAM以任务为核心，给定起始和目标RGB观测，单次推理联合生成观察和动作，引入视觉引导的动作细化模块和轨迹尺度正则化，促进目标一致的轨迹生成。在仿真中，成功率、轨迹准确度和推理效率均显著优于两级规划器，并泛化到未见过环境。",
          "reasonCn": "提出空间感知的世界动作模型SWAM，用于具身导航，同时生成中间RGB-D序列和动作轨迹。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.29908v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29908v1",
          "published": "2026-06-29T07:43:47Z",
          "updated": "2026-06-29T07:43:47Z",
          "authors": [
            "Hong Chen",
            "Daqi Liu",
            "Zehan Zhang",
            "Haiguang Wang",
            "Tianhao Lu",
            "Longfei Yan",
            "Haiyang Sun",
            "Fangzhen Li",
            "Hongwei Xie",
            "Bing Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 101,
          "llmTotalScore": 101
        },
        {
          "id": "2606.31723v1",
          "title": "UniTacVLA: Unified Tactile Understanding and Prediction in Vision Language Action Models",
          "summary": "Vision-language-action (VLA) models have achieved strong performance in many robotic manipulation tasks, yet remain limited in contact-rich dexterous manipulation. To overcome this limitation, recent vision-tactile-language-action (VTLA) methods incorporate tactile sensing into VLA models to provide direct contact information. However, they typically treat tactile signals as passive auxiliary inputs, making it difficult to model tactile semantics and future physical interactions.",
          "summaryCn": "构建统一触觉潜在空间，通过触觉思维链推理和粗到细的未来触觉预测形成状态与动态感知先验，并设计触觉-动作混合控制器，结合实时与预测反馈来修正低频动作块。在四种接触丰富任务中，成功率、精度和接触稳定性均显著提升。",
          "reasonCn": "提出统一触觉学习框架UniTacVLA，在VLA中建模触觉语义和未来交互。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31723v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31723v1",
          "published": "2026-06-30T14:24:00Z",
          "updated": "2026-06-30T14:24:00Z",
          "authors": [
            "Xidong Zhang",
            "Yichi Zhang",
            "Jiaxin Shi",
            "Fucai Zhu",
            "Siyu Zhu",
            "Michael Yu Wang",
            "Xiaojun Wu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 98
        },
        {
          "id": "2607.02195v1",
          "title": "Bridge-WA: Predicting Where and How the World Changes for Robotic Action",
          "summary": "General-purpose vision-language-action models benefit from large vision-language priors, but effective manipulation also requires anticipating action-relevant scene changes. Existing world-action models often rely on large generative world models or dense future rollouts, which are expensive and spend capacity on visual details weakly coupled to control. We present Bridge-WA, a lightweight world-action framework that distills a frozen future-change teacher into three compact priors: future tokens for intended outc…",
          "summaryCn": "从冻结的未来变化教师中蒸馏出未来token、变化图和运动流图三种先验，通过WorldBridge条件化动作Transformer。在多个VLA基准和真实机器人上，该方法提升任务成功率和鲁棒性，尤其抑制了背景、光照等无关外观因素的干扰，无需在线生成密集未来图像。",
          "reasonCn": "提出轻量级世界-动作框架Bridge-WA，同时利用视觉语言先验和预测场景变化进行动作生成。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2607.02195v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02195v1",
          "published": "2026-07-02T14:03:44Z",
          "updated": "2026-07-02T14:03:44Z",
          "authors": [
            "Yongjie Bai",
            "Hanting Wang",
            "Mingtong Dai",
            "Qijun Zhong",
            "Yang Liu",
            "Liang Lin"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 96,
          "llmTotalScore": 96
        },
        {
          "id": "2607.00666v1",
          "title": "Domain Arithmetic: One-Shot VLA Adaptation under Environmental Shifts",
          "summary": "Vision-Language-Action (VLA) models often fail to perform the same learned tasks under environmental shifts, such as changes in camera pose and shifts to a different but similar robot (e.g., from Panda to UR5e). Adapting these models to the shifted environment (i.e., target domain) often requires training on multiple demonstrations for each task, which are costly to collect. To reduce the burden of data curation and training, we propose an analogy-based method that adapts VLA models under environmental shifts thro…",
          "summaryCn": "通过权重向量算术添加域特定信息，仅需单次演示即可适应视觉和实施例偏移。在模拟和真实实验中，DART在单次适应场景下超越现有VLA适应方法，有效分离域信息并滤除噪声。",
          "reasonCn": "提出域算术方法DART，实现VLA模型在环境偏移下的一次性适应。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00666v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00666v1",
          "published": "2026-07-01T09:13:40Z",
          "updated": "2026-07-01T09:13:40Z",
          "authors": [
            "Taewook Kang",
            "Taeheon Kim",
            "Donghyun Shin",
            "Jonghyun Choi"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 91,
          "llmTotalScore": 91
        },
        {
          "id": "2607.02322v1",
          "title": "The Moving Eye: Enhancing VLA Spatial Generalization via Hybrid Dynamic Data Collection",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable promise in generalized robotic manipulation. However, their spatial generalization remains fragile. We argue that simply increasing the number of viewpoints is insufficient.",
          "summaryCn": "利用双臂设置，一臂操作一臂充当移动环境相机，评估固定、多固定和移动视角三种模式，发现结合连续相机运动和静态视角的混合策略最能减少伪相关，使VLA泛化到新相机位姿和物体配置。揭示捷径学习是多种架构的普遍问题，强调数据分布设计的重要性。",
          "reasonCn": "通过混合动态数据采集增强VLA的空间泛化能力。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02322v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02322v1",
          "published": "2026-07-02T15:30:26Z",
          "updated": "2026-07-02T15:30:26Z",
          "authors": [
            "Jincheng Tang",
            "Yilong Zhu",
            "Zhengyuan Xie",
            "Jiang-Jiang Liu",
            "Jiaxing Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 90,
          "llmTotalScore": 90
        },
        {
          "id": "2607.01586v1",
          "title": "VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment",
          "summary": "Vision-language-action models (VLAs) have recently advanced robotic manipulation, yet the effects of different robot-data pre-training paradigms remain difficult to compare because existing models often differ in architecture, data, action space, and evaluation protocol. We present VLAFlow (Vision-Language-Action Flow), a unified flow-matching framework for controlled comparison of VLA training objectives. Using a heterogeneous robot corpus, OXEMix, containing approximately 5,000 hours of data from DROID, OpenX-Em…",
          "summaryCn": "在共享pi0式架构和OXEMix异构机器人数据集上，评估动作仅建模、语言监督共训练、未来潜在对齐及其组合四种目标。发现语言监督有助于保持视觉语言泛化，未来潜在对齐改善状态转移建模，组合后MindLWPI迁移性能最稳定，建议语言和未来潜在作为互补约束。",
          "reasonCn": "提供统一流匹配框架VLAFlow，比较不同VLA预训练范式的效果。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01586v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01586v1",
          "published": "2026-07-02T01:38:16Z",
          "updated": "2026-07-02T01:38:16Z",
          "authors": [
            "Guoyang Xia",
            "Fengfa Li",
            "Hongjin Ji",
            "Lei Ren",
            "Fangxiang Feng",
            "Kun Zhan",
            "Yan Xie"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2607.01804v1",
          "title": "VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon",
          "summary": "Vision-Language-Action (VLA) foundation models have recently achieved strong progress in embodied intelligence. To reduce policy-call frequency while preserving temporal coherence, most generative policies adopt an action chunk mechanism, executing multiple future actions in an open-loop manner under a fixed action horizon. However, this \"predict-then-blindly-execute\" paradigm sacrifices closed-loop reactivity: in contact-rich physical interactions, even small local perturbations can rapidly amplify within the ope…",
          "summaryCn": "设计潜在视觉监视器LVM在线检测视觉动态偏差，触发截断事件并丢弃过期动作，通过在线梯度引导进行纠正性重规划。该机制在保持可靠执行时长窗口的同时，当偏差发生时快速反应，提升接触丰富交互中的闭环反应能力。",
          "reasonCn": "提出轻量级检测-纠正推理框架VLA-Corrector，为动作分块VLA策略引入自适应动作窗口。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01804v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01804v1",
          "published": "2026-07-02T07:18:53Z",
          "updated": "2026-07-02T07:18:53Z",
          "authors": [
            "Yi Pan",
            "Miao Pan",
            "Qi Lu",
            "Jiaming Huang",
            "Man Zhang",
            "Siteng Huang",
            "Xin Li",
            "Jie Zhang",
            "Yongliang Shen",
            "Xuhong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2606.31329v2",
          "title": "3D HAMSTER: Bridging Planning and Control in Hierarchical Vision Language Action Models through 3D Trajectory Guidance",
          "summary": "Hierarchical Vision-Language-Action (VLA) models decouple high-level planning from low-level control to improve generalization in robot manipulation. Recent work in this paradigm uses 2D end-effector trajectories predicted by a Vision-Language Model (VLM) as explicit guidance for a downstream policy. However, state-of-the-art low-level policies operate in 3D metric space on point clouds, and feeding them 2D guidance that lacks depth forces each waypoint to be assigned the depth of whatever scene surface lies benea…",
          "summaryCn": "为VLM增加深度编码器和密集深度重建目标，预测3D路点序列，直接集成到基于点云的低层策略中。在3D轨迹预测、仿真和真实操作中，该方法在视觉偏移和未见条件下显著优于商用VLM和2D引导基线，弥合了高层次规划与3D底层控制之间的几何鸿沟。",
          "reasonCn": "提出分层VLA框架3D HAMSTER，让规划器直接输出度量可靠的3D轨迹。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31329v2",
          "pdfLink": "https://arxiv.org/pdf/2606.31329v2",
          "published": "2026-06-30T08:31:35Z",
          "updated": "2026-07-01T13:05:08Z",
          "authors": [
            "Dongyoon Hwang",
            "Byungkun Lee",
            "Dongjin Kim",
            "Hyojin Jang",
            "Hoiyeong Jin",
            "Jueun Mun",
            "Minho Park",
            "Hojoon Lee",
            "Hyunseung Kim",
            "Jaegul Choo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2607.02092v1",
          "title": "Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies",
          "summary": "Flow-matching vision-language-action policies generate robot action chunks through an iterative transport process, creating an opportunity for test-time guidance without retraining the base policy. We study this opportunity in Guided Action Flow, an inference-time framework that keeps a pretrained SmolVLA policy frozen and uses a learned action-chunk critic to guide its reverse-time flow sampler. The critic is trained from real success and failure rollouts, can condition on task-description features from the froze…",
          "summaryCn": "在不修改预训练SmolVLA权重的条件下，训练一个从真实成功/失败轨迹中学习的动作块评论家，通过动作梯度在采样时引导。单任务评论家将成功率从68%提升至82%，多家族评论家验证集提升10%，表明引导可行性，但评论家泛化仍是瓶颈。",
          "reasonCn": "提出引导动作流框架，在测试时用学习到的动作块评论家引导冻结流匹配VLA策略。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02092v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02092v1",
          "published": "2026-07-02T12:30:50Z",
          "updated": "2026-07-02T12:30:50Z",
          "authors": [
            "Liuhaichen Yang",
            "Zhuang Jiang",
            "Chenchao Sheng",
            "Zezhi Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2607.01212v1",
          "title": "FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model",
          "summary": "Current work on robot furniture assembly mostly focuses on toy-scale settings or single-arm manipulation. We introduce FurnitureVLA, the first systematic study of real-scale bimanual furniture assembly using Vision-Language-Action models (VLAs). We formalize the task, develop a scalable simulation pipeline for expert data generation and evaluation, and build a VR teleoperation system for single-operator bimanual control to collect high-quality real-world demonstrations.",
          "summaryCn": "定义长程装配任务，开发仿真数据生成和双臂遥操作系统，提出进度增强的VLA，联合预测动作和连续进度信号，实现子任务自动切换。在三种家具上仿真成功率从48%提升至80%，设计因素研究额外增益21%，真实Kinova平台上难度最大任务仅16%下降。",
          "reasonCn": "第一个系统研究真实规模双臂家具装配的VLA模型FurnitureVLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01212v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01212v1",
          "published": "2026-07-01T17:51:21Z",
          "updated": "2026-07-01T17:51:21Z",
          "authors": [
            "Chenyang Ma",
            "Yue Yang",
            "Radu Corcodel",
            "Siddarth Jain",
            "Andrew Wu",
            "Chiori Hori",
            "Diego Romeres"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.28758v1",
          "title": "X-Mind: Efficient Visual Chain-of-Thought via Predictive World Model for End-to-End Driving",
          "summary": "Predicting future states is essential for autonomous agents, yet current Vision-Language-Action (VLA) models fundamentally lack this capability, relying instead on reactive perception-action mapping. While integrating Predictive World Models (PWMs) addresses this gap, existing approaches either incur prohibitive cascaded latency or act as shallow terminal tasks that fail to deeply embed forward-looking reasoning. To endow VLA models with this reasoning capability, we propose X-Mind.",
          "summaryCn": "X-Mind框架强制模型在动作前想象未来演化，利用紧凑BEV布局抽象草图作为心理画布，通过深度压缩自编码器将12帧未来压缩为96个token。在nuScenes上，该方法在保持VLA推理效率的同时，显著提升开环规划准确度，展示了世界模型与VLA的深度融合。",
          "reasonCn": "将预测世界模型内化为VLA中的视觉思维链，增强端到端驾驶的物理推理。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.28758v1",
          "pdfLink": "https://arxiv.org/pdf/2606.28758v1",
          "published": "2026-06-27T06:17:50Z",
          "updated": "2026-06-27T06:17:50Z",
          "authors": [
            "Bohao Zhao",
            "Chengrui Wei",
            "Guangfeng Jiang",
            "Ruixin Liu",
            "Xuejie Lv",
            "Liu Liang",
            "Sutao Deng",
            "Xiuyang Fan",
            "Pengkun Zheng",
            "Jinyun Zhou"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2607.00351v1",
          "title": "Unleashing More Actions via Action Compositional Training for VLA Models",
          "summary": "Vision-Language-Action models excel at robotic manipulation, driven by the scale and diversity of demonstration data. However, standard training paradigms often cause VLA models to severely overfit to specific behavioral patterns, rendering them unable to generalize to out-of-distribution scenarios even when those scenarios merely require novel combinations of identical sub-skills. While expanding datasets can mitigate this overfitting, acquiring high-quality robot data remains notoriously labor-intensive and cost…",
          "summaryCn": "利用模型潜在任务表示，从现有任务合成新颖但物理有效的演示，无需额外人工数据。在仿真操作任务上，基线VLA因过拟合而泛化差，而使用合成数据训练的策略成功执行新组合任务，有效缓解分布外泛化问题，释放更多行为。",
          "reasonCn": "提出动作组合训练ACT-VLA，通过离线数据增强扩大VLA模型的技能组合范围。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00351v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00351v1",
          "published": "2026-07-01T02:48:17Z",
          "updated": "2026-07-01T02:48:17Z",
          "authors": [
            "Kai Peng",
            "Jie Lu",
            "Xiaojiang Peng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.31846v1",
          "title": "Z-1: Efficient Reinforcement Learning for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models offer a promising framework for robotic manipulation by connecting language instructions, visual observations, and continuous control. However, most existing policies remain limited by behavior cloning or supervised fine-tuning (SFT) from fixed demonstrations, which provides limited opportunity to improve from the policy's own failures. In this paper, we present Z-1, a reinforcement learning (RL) post-training framework for flow-based VLA models.",
          "summaryCn": "在π0.5基础上，利用公开RoboCasa演示进行SFT，再采用任务级GRPO策略进行在线优化，结合共享前缀展开、树状分支、完成感知奖励校准和联合训练。在24个RoboCasa任务上平均成功率达80.6%，比SFT初始化提升13.2个百分点，无需额外私有演示。",
          "reasonCn": "提出基于流匹配VLA的强化学习后训练框架Z-1。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31846v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31846v1",
          "published": "2026-06-30T15:46:57Z",
          "updated": "2026-06-30T15:46:57Z",
          "authors": [
            "Lang Cao",
            "Renhong Chen",
            "Luyi Li",
            "Peng Wang",
            "Mofan Peng",
            "Yitong Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.31167v1",
          "title": "MIRTH: Mutual-Information Reasoning with Temporal Hubs for Vision-Language-Action Agents",
          "summary": "VLA models have emerged as a powerful paradigm for transferring semantic knowledge from web-scale data to physical robotic control. However, current single-frame architectures suffer from intrinsic limitations: temporal myopia that discards historical dynamics, reasoning gaps between high-level instructions and low-level motor commands, and inference inefficiency due to autoregressive scalar decoding. In this work, we propose MIRTH, a unified framework designed to address these challenges.",
          "summaryCn": "设计双尺度时序记忆枢纽压缩长短期场景演变，利用互信息目标优化潜在推理token以对齐多模态上下文和动作轨迹，并用并行动作解码替代自回归生成。在LIBERO和真实LeRobot平台上达到最优性能，并展现出错误恢复能力。",
          "reasonCn": "提出MIRTH框架，通过时序记忆和互信息推理增强VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31167v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31167v1",
          "published": "2026-06-30T05:57:13Z",
          "updated": "2026-06-30T05:57:13Z",
          "authors": [
            "Hao Sun",
            "Yu Song",
            "Shiyu Teng",
            "Ziwei Niu",
            "Yen-Wei Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        }
      ]
    },
    {
      "dateKey": "20260703",
      "dateLabel": "2026-07-03",
      "generatedAt": "2026-07-03T03:18:15.245405+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2607.02503v1",
          "title": "VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation",
          "summary": "Contact-rich manipulation requires policies to react to local deformation, pressure, slip, and friction, yet these cues are temporally sparse and often invisible in visual observations. Existing visual-tactile policies usually feed tactile observations directly into action prediction, but rarely model tactile deformation dynamics during action generation. In this paper, we introduce VT-WAM, a Visual-Tactile World Action Model that jointly learns future visual prediction, tactile deformation prediction, and action…",
          "summaryCn": "VT-WAM 是视觉-触觉世界动作模型，通过非对称混合 Transformer 和接触门控注意力引导，在 6 个真实接触丰富操作任务上平均成功率达 71.67%，优于 Fast-WAM 和 OmniVTLA。",
          "reasonCn": "提出视觉-触觉世界动作模型，联合学习未来视觉/触觉预测和行动生成，用于接触丰富操作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02503v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02503v1",
          "published": "2026-07-02T17:58:36Z",
          "updated": "2026-07-02T17:58:36Z",
          "authors": [
            "Shuai Tian",
            "Yupeng Zheng",
            "Yuhang Zheng",
            "Songen Gu",
            "Yujie Zang",
            "Yuxing Qin",
            "Weize Li",
            "Haoran Li",
            "Wenchao Ding",
            "Dongbin Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02195v1",
          "title": "Bridge-WA: Predicting Where and How the World Changes for Robotic Action",
          "summary": "General-purpose vision-language-action models benefit from large vision-language priors, but effective manipulation also requires anticipating action-relevant scene changes. Existing world-action models often rely on large generative world models or dense future rollouts, which are expensive and spend capacity on visual details weakly coupled to control. We present Bridge-WA, a lightweight world-action framework that distills a frozen future-change teacher into three compact priors: future tokens for intended outc…",
          "summaryCn": "Bridge-WA 轻量级世界-动作框架，通过变化图、流场等先验指导动作 Transformer，提升任务成功率、鲁棒性和分布外泛化，无需推理时生成未来图像。",
          "reasonCn": "提出世界-动作框架，利用视觉语言先验预测场景变化位置和方式，指导动作生成。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2607.02195v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02195v1",
          "published": "2026-07-02T14:03:44Z",
          "updated": "2026-07-02T14:03:44Z",
          "authors": [
            "Yongjie Bai",
            "Hanting Wang",
            "Mingtong Dai",
            "Qijun Zhong",
            "Yang Liu",
            "Liang Lin"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 98,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02322v1",
          "title": "The Moving Eye: Enhancing VLA Spatial Generalization via Hybrid Dynamic Data Collection",
          "summary": "Vision-Language-Action (VLA) models have shown remarkable promise in generalized robotic manipulation. However, their spatial generalization remains fragile. We argue that simply increasing the number of viewpoints is insufficient.",
          "summaryCn": "提出混合动态数据收集方法，利用双机械臂中移动环境相机，结合连续运动与多视角，显著减少 VLA 模型中的简捷学习问题，并证明架构普适性。",
          "reasonCn": "提出数据收集策略提升 VLA 模型空间泛化能力，通过移动相机减少虚假相关性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02322v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02322v1",
          "published": "2026-07-02T15:30:26Z",
          "updated": "2026-07-02T15:30:26Z",
          "authors": [
            "Jincheng Tang",
            "Yilong Zhu",
            "Zhengyuan Xie",
            "Jiang-Jiang Liu",
            "Jiaxing Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2607.01586v1",
          "title": "VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment",
          "summary": "Vision-language-action models (VLAs) have recently advanced robotic manipulation, yet the effects of different robot-data pre-training paradigms remain difficult to compare because existing models often differ in architecture, data, action space, and evaluation protocol. We present VLAFlow (Vision-Language-Action Flow), a unified flow-matching framework for controlled comparison of VLA training objectives. Using a heterogeneous robot corpus, OXEMix, containing approximately 5,000 hours of data from DROID, OpenX-Em…",
          "summaryCn": "VLAFlow 在统一架构下评估四种 VLA 预训练范式，发现语言监督和未来潜在对齐互补，MindLWPI 在多个基准上实现最稳定的迁移性能。",
          "reasonCn": "提出统一流匹配框架 VLAFlow，比较不同预训练范式对视觉-语言-动作模型的影响。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01586v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01586v1",
          "published": "2026-07-02T01:38:16Z",
          "updated": "2026-07-02T01:38:16Z",
          "authors": [
            "Guoyang Xia",
            "Fengfa Li",
            "Hongjin Ji",
            "Lei Ren",
            "Fangxiang Feng",
            "Kun Zhan",
            "Yan Xie"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 0
        },
        {
          "id": "2607.01804v1",
          "title": "VLA-Corrector: Lightweight Detect-and-Correct Inference for Adaptive Action Horizon",
          "summary": "Vision-Language-Action (VLA) foundation models have recently achieved strong progress in embodied intelligence. To reduce policy-call frequency while preserving temporal coherence, most generative policies adopt an action chunk mechanism, executing multiple future actions in an open-loop manner under a fixed action horizon. However, this \"predict-then-blindly-execute\" paradigm sacrifices closed-loop reactivity: in contact-rich physical interactions, even small local perturbations can rapidly amplify within the ope…",
          "summaryCn": "VLA-Corrector 引入潜在空间视觉监控和在线梯度引导，检测视觉动态偏差后截断旧动作并重规划，实现事件触发的自适应动作时长，提高操作成功率。",
          "reasonCn": "提出轻量级修正框架，通过视觉监控在线检测动作块执行的偏差并触发重规划，提升 VLA 策略闭环反应性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01804v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01804v1",
          "published": "2026-07-02T07:18:53Z",
          "updated": "2026-07-02T07:18:53Z",
          "authors": [
            "Yi Pan",
            "Miao Pan",
            "Qi Lu",
            "Jiaming Huang",
            "Man Zhang",
            "Siteng Huang",
            "Xin Li",
            "Jie Zhang",
            "Yongliang Shen",
            "Xuhong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02092v1",
          "title": "Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies",
          "summary": "Flow-matching vision-language-action policies generate robot action chunks through an iterative transport process, creating an opportunity for test-time guidance without retraining the base policy. We study this opportunity in Guided Action Flow, an inference-time framework that keeps a pretrained SmolVLA policy frozen and uses a learned action-chunk critic to guide its reverse-time flow sampler. The critic is trained from real success and failure rollouts, can condition on task-description features from the froze…",
          "summaryCn": "Guided Action Flow 使用任务描述条件评论家对 SmolVLA 策略进行推理时引导，在 LIBERO 上提升成功率，并指出评论家泛化是主要瓶颈。",
          "reasonCn": "提出推理时引导方法，用学习到的动作块评论家引导冻结的流匹配 VLA 策略。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02092v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02092v1",
          "published": "2026-07-02T12:30:50Z",
          "updated": "2026-07-02T12:30:50Z",
          "authors": [
            "Liuhaichen Yang",
            "Zhuang Jiang",
            "Chenchao Sheng",
            "Zezhi Tang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02403v1",
          "title": "ACID: Action Consistency via Inverse Dynamics for Planning with World Models",
          "summary": "Decision-time planning with action-conditioned world models has become a popular paradigm for embodied control. However, the standard planning cost judges a candidate solely by how close its predicted terminal state lies to the goal, leaving the realizability of the intermediate transitions unchecked -- a predicted trajectory can look convincing while the environment rollout drifts away from it. In this paper, we propose ACID, a decision-time planning framework that introduces cycle action consistency: the action…",
          "summaryCn": "ACID 通过逐步动作一致性残差调整规划代价，使世界模型规划的轨迹更可执行，在多项任务中匹配基线精度且大幅减少所需规划计算。",
          "reasonCn": "提出决策时规划框架，利用逆动力学模型校验世界模型预测轨迹中的动作一致性。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02403v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02403v1",
          "published": "2026-07-02T16:38:10Z",
          "updated": "2026-07-02T16:38:10Z",
          "authors": [
            "Gawon Seo",
            "Dongwon Kim",
            "Suha Kwak"
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
          "id": "2607.01658v1",
          "title": "Teaching Vision-Language-Action Models What to See and Where to Look",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for end-to-end autonomous driving. However, existing VLAs' training relies heavily on text-centric visual question answering and chain-of-thought reasoning data, which emphasizes linguistic reasoning rather than action-grounded planning. As a result, the learned representations capture semantic knowledge but lack spatial dependencies crucial for reliable trajectory prediction.",
          "summaryCn": "DriveTeach-VLA 通过驾驶感知视觉蒸馏和 2D 轨迹引导提示，明确教 VLA 模型看什么和往哪看，在 NAVSIM 和 nuScenes 上达到 SOTA。",
          "reasonCn": "提出教学框架，为端到端自动驾驶 VLA 模型注入驾驶感知先验和轨迹引导。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01658v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01658v1",
          "published": "2026-07-02T03:34:32Z",
          "updated": "2026-07-02T03:34:32Z",
          "authors": [
            "Yuguang Yang",
            "Canyu Chen",
            "Zhewen Tan",
            "Yizhi Wang",
            "Zichao Feng",
            "Chunyang Liu",
            "Kehua Sheng",
            "Juan Zhang",
            "Linlin Yang",
            "Baochang Zhang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 71,
          "llmTotalScore": 0
        },
        {
          "id": "2607.01938v1",
          "title": "PhysMani: Physics-principled 3D World Model for Dynamic Object Manipulation",
          "summary": "Manipulating fast and dynamically moving targets in unstructured 3D environments remains challenging for embodied AI. Existing visual-language-action models and world models struggle with accurate 3D geometry and physically meaningful forecasting. We propose PhysMani, a framework that couples a physics-principled 3D Gaussian world model with a future-aware action policy model.",
          "summaryCn": "PhysMani 利用散度为零的高斯速度场在线优化实现物理合理预测，策略通过交叉注意力融合未来动态，在动态操作基准上显著优于基线。",
          "reasonCn": "提出物理原理驱动的 3D 世界模型，与动作策略耦合，用于动态物体操作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.01938v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01938v1",
          "published": "2026-07-02T09:32:39Z",
          "updated": "2026-07-02T09:32:39Z",
          "authors": [
            "Peng Yun",
            "Shouwang Huang",
            "Hao Li",
            "Jinxi Li",
            "Jianan Wang",
            "Bo Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 63,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02466v1",
          "title": "Learning to Move Before Learning to Do: Task-Agnostic pretraining for VLAs",
          "summary": "Vision-Language-Action (VLA) models are fundamentally bottlenecked by the scarcity of expert demonstrations -- triplets of observations, instructions, and actions that are costly to collect at scale. We argue that this bottleneck stems from conflating two distinct learning objectives: acquiring physical competence (how to move) and acquiring semantic alignment (what to do). Crucially, only the latter requires language supervision.",
          "summaryCn": "任务无关预训练 TAP 将 VLA 学习解耦为无监督逆动力学建模和语言对齐，仅需少量数据即匹配百万级演示性能，并提高相机扰动下的鲁棒性。",
          "reasonCn": "提出两阶段预训练框架，先学习移动先验再对齐语言，减少 VLA 对专家演示的依赖。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02466v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02466v1",
          "published": "2026-07-02T17:33:37Z",
          "updated": "2026-07-02T17:33:37Z",
          "authors": [
            "Junhao Shi",
            "Siyin Wang",
            "Xiaopeng Yu",
            "Li Ji",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 62,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02431v1",
          "title": "WorldSample: Closed-loop Real-robot RL with World Modelling",
          "summary": "Reinforcement learning (RL) can overcome the demonstration-coverage limitation of imitation learning (IL) by allowing robots to improve through trial-and-error interaction beyond the states observed in demonstrations. However, deploying RL on real robots remains constrained by high interaction costs, since each physical rollout is costly and reflects only one realized action-outcome path. To address this challenge, we propose WorldSample, a physically grounded data augmentation framework for real-robot RL that clo…",
          "summaryCn": "WorldSample 通过对真实交互后训练世界模型产生高保真合成数据，结合策略节奏学习缓解幻觉和过估计，在操作任务上提升 28% 成功率并减少 59% 训练步数。",
          "reasonCn": "提出以世界模型为核心的数据增强框架，用于真实机器人强化学习，生成合成转换并调控训练。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.02431v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02431v1",
          "published": "2026-07-02T17:00:37Z",
          "updated": "2026-07-02T17:00:37Z",
          "authors": [
            "Yuquan Xue",
            "Le Xu",
            "Zeyi Liu",
            "Zhenyu Wu",
            "Zhengyi Gu",
            "Xinyang Song",
            "Bofang Jia",
            "Ziwei Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 57,
          "llmTotalScore": 0
        },
        {
          "id": "2607.01736v1",
          "title": "Predicting Closed-Loop Performance of Latent World Models: Offline Checkpoint Selection for MPC and Model-Based RL Under Non-Markovian Rewards in LunarLander",
          "summary": "We study how to predict the downstream closed-loop performance of a learned latent world model from validation-time diagnostics alone. Choosing the right checkpoint from a world-model training run is difficult: validation loss and multi-step prediction RMSE keep improving long after closed-loop performance has collapsed. We present a suite of structural validation-time diagnostics drawn from optimal-control theory and apply them to Gymnasium's LunarLander v3, which features shaped rewards.",
          "summaryCn": "提出复合奖励可观测分数 CROF，用于离线选择使闭环性能最优的世界模型检查点，选中的模型仅需极少交互即训练出超越无模型 A2C 的策略。",
          "reasonCn": "研究世界模型检查点选择对 MPC 和基于模型强化学习闭环性能的影响，并应用于 LunarLander 控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.01736v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01736v1",
          "published": "2026-07-02T05:46:03Z",
          "updated": "2026-07-02T05:46:03Z",
          "authors": [
            "Nikolai Smolyanskiy"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 51,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02417v1",
          "title": "LIME: Learning Intent-aware Camera Motion from Egocentric Video",
          "summary": "Autonomous robots often need to move their camera before they can act: to inspect an object, reveal an occluded region, or obtain a view that responds to a user's intent. While vision-language navigation translates instructions to base motion and vision-language-action policies map instructions to manipulation actions, language-conditioned camera motion remains comparatively underexplored as a first-class action. We formulate language-conditioned camera motion generation: given a current RGB observation and a free…",
          "summaryCn": "LIME 提出视觉-语言相机运动生成器，结合自回归观察增益和流匹配姿态头预测多意图目标视角，在下游任务中展现有效性。",
          "reasonCn": "输入视觉观察和语言意图，输出相机相对位姿作为动作，实现主动感知。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02417v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02417v1",
          "published": "2026-07-02T16:48:43Z",
          "updated": "2026-07-02T16:48:43Z",
          "authors": [
            "Boyang Sun",
            "Jiajie Li",
            "Yung-Hsu Yang",
            "Chenyangguang Zhang",
            "Tim Engelbracht",
            "Sunghwan Hong",
            "Cesar Cadena",
            "Marc Pollefeys",
            "Hermann Blum"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 44,
          "llmTotalScore": 0
        },
        {
          "id": "2607.02222v1",
          "title": "CoFL-S: Spatially Queryable Sector Flow Fields for Local Language-Conditioned Navigation",
          "summary": "Vision-Language Navigation has increasingly emphasized high-level instruction reasoning, memory, global map construction, and instruction decomposition, while the low-level action representation remains comparatively underexplored. We propose CoFL-S, a low-level vision-language-action framework that predicts a language-conditioned flow field over the robot's local visible sector and generates continuous trajectories by rolling out the predicted field. To train this low-level representation, we convert each VLN-CE…",
          "summaryCn": "CoFL-S 预测局部扇区流场并展开为连续轨迹，在连续时间 Habitat 和真实世界中均优于离散动作基线，提升低层动作表示的零样本泛化。",
          "reasonCn": "低层次视觉-语言-动作框架，预测语言条件的流场以生成连续导航轨迹。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.02222v1",
          "pdfLink": "https://arxiv.org/pdf/2607.02222v1",
          "published": "2026-07-02T14:26:55Z",
          "updated": "2026-07-02T14:26:55Z",
          "authors": [
            "Haokun Liu",
            "Zhaoqi Ma",
            "Yicheng Chen",
            "Wentao Zhang",
            "Masaki Kitagawa",
            "Zicen Xiong",
            "Jinjie Li",
            "Moju Zhao"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260702",
      "dateLabel": "2026-07-02",
      "generatedAt": "2026-07-02T02:41:13.350318+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2607.00678v1",
          "title": "ABot-M0.5: Unified Mobility-and-Manipulation World Action Model",
          "summary": "Mobile manipulation is a key capability for general-purpose robots, yet remains challenging for current embodied learning methods. VLA policies are typically reactive and lack explicit world modeling, while existing World Action Models (WAMs) are still poorly aligned with the structure of mobile manipulation: they operate on coarse video chunks, model entangled navigation-manipulation actions, and train inverse dynamics under supervision that does not match autoregressive inference. As a result, they often miss fi…",
          "summaryCn": "提出ABot-M0.5世界动作模型，通过时间粒度、动作空间与训练-测试一致性三层对齐，实现移动操作中导航与操作的统一预测。方法引入中间潜在动作解耦异构动作子空间，并采用梦境强制训练减少累积误差。",
          "reasonCn": "明确提出世界动作模型，解决移动操作中的时空对齐与动作预测，不依赖语言指令",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00678v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00678v1",
          "published": "2026-07-01T09:21:20Z",
          "updated": "2026-07-01T09:21:20Z",
          "authors": [
            "Ronghan Chen",
            "Yandan Yang",
            "Zuojin Tang",
            "Dongjie Huo",
            "Tong Lin",
            "Haoning Wu",
            "Haoyun Liu",
            "Yuzhi Chen",
            "Lulu Zheng",
            "Botai Yuan"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 147,
          "llmTotalScore": 147
        },
        {
          "id": "2607.00836v1",
          "title": "From World Models to World Action Models: A Concise Tutorial for Robotics",
          "summary": "World models are increasingly used in embodied intelligence and generative simulation, yet their scope remains ambiguous across communities. This tutorial presents a design-space view of world models as action-conditioned predictive models that estimate the future evolution of task-relevant observations or states. We categorize existing methods into observation-space and state-space world models, comparing their trade-offs in visual fidelity, spatial structure, physical interpretability, and control usability.",
          "summaryCn": "本教程梳理了从世界模型到世界动作模型的概念，提出行动条件预测未来观测量或状态的设计空间。分类为观测空间与状态空间世界模型，并总结四种世界动作模型范式，为具身预测与控制提供结构化分类法。",
          "reasonCn": "教程聚焦世界动作模型，连接预测未来与可执行行动，总结四种实现范式",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00836v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00836v1",
          "published": "2026-07-01T11:56:54Z",
          "updated": "2026-07-01T11:56:54Z",
          "authors": [
            "Xiaoxiong Zhang",
            "Xiong Zeng",
            "Wei Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 102,
          "llmTotalScore": 102
        },
        {
          "id": "2607.00666v1",
          "title": "Domain Arithmetic: One-Shot VLA Adaptation under Environmental Shifts",
          "summary": "Vision-Language-Action (VLA) models often fail to perform the same learned tasks under environmental shifts, such as changes in camera pose and shifts to a different but similar robot (e.g., from Panda to UR5e). Adapting these models to the shifted environment (i.e., target domain) often requires training on multiple demonstrations for each task, which are costly to collect. To reduce the burden of data curation and training, we propose an analogy-based method that adapts VLA models under environmental shifts thro…",
          "summaryCn": "提出DART方法，通过权重向量算术实现VLA模型在视觉和形态变化下的一次性适应。仅需一次演示即可高效迁移，并利用奇异分量子空间对齐过滤噪声，在仿真和真实实验中优于现有方法。",
          "reasonCn": "直接针对VLA模型在环境变化下的适应性，涉及视觉、语言和动作",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00666v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00666v1",
          "published": "2026-07-01T09:13:40Z",
          "updated": "2026-07-01T09:13:40Z",
          "authors": [
            "Taewook Kang",
            "Taeheon Kim",
            "Donghyun Shin",
            "Jonghyun Choi"
          ],
          "categories": [
            "cs.RO",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 94,
          "llmTotalScore": 94
        },
        {
          "id": "2607.00351v1",
          "title": "Unleashing More Actions via Action Compositional Training for VLA Models",
          "summary": "Vision-Language-Action models excel at robotic manipulation, driven by the scale and diversity of demonstration data. However, standard training paradigms often cause VLA models to severely overfit to specific behavioral patterns, rendering them unable to generalize to out-of-distribution scenarios even when those scenarios merely require novel combinations of identical sub-skills. While expanding datasets can mitigate this overfitting, acquiring high-quality robot data remains notoriously labor-intensive and cost…",
          "summaryCn": "针对VLA模型易过拟合特定行为的问题，提出行动组合训练框架ACT-VLA。利用模型自身潜任务表示合成新示范，无需额外数据收集即可扩展训练分布，有效提升泛化能力并解锁更多可执行动作。",
          "reasonCn": "聚焦VLA模型的过拟合问题，通过离线数据增强释放更多动作组合",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.00351v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00351v1",
          "published": "2026-07-01T02:48:17Z",
          "updated": "2026-07-01T02:48:17Z",
          "authors": [
            "Kai Peng",
            "Jie Lu",
            "Xiaojiang Peng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2607.01212v1",
          "title": "FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model",
          "summary": "Current work on robot furniture assembly mostly focuses on toy-scale settings or single-arm manipulation. We introduce FurnitureVLA, the first systematic study of real-scale bimanual furniture assembly using Vision-Language-Action models (VLAs). We formalize the task, develop a scalable simulation pipeline for expert data generation and evaluation, and build a VR teleoperation system for single-operator bimanual control to collect high-quality real-world demonstrations.",
          "summaryCn": "首次系统研究真实尺寸双臂家具装配的VLA模型，提出进展增强VLA联合预测动作与连续进展信号。开发仿真管线与VR遥操作，在三种家具上将平均成功率从48%提升至80%，并在真实机器人上验证。",
          "reasonCn": "明确使用VLA模型进行长时域双臂家具装配，涉及视觉输入和语言指令",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01212v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01212v1",
          "published": "2026-07-01T17:51:21Z",
          "updated": "2026-07-01T17:51:21Z",
          "authors": [
            "Chenyang Ma",
            "Yue Yang",
            "Radu Corcodel",
            "Siddarth Jain",
            "Andrew Wu",
            "Chiori Hori",
            "Diego Romeres"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2607.01067v1",
          "title": "Human-Centric Transferable Tactile Pre-Training for Dexterous Robotic Manipulation",
          "summary": "As an essential modality for dexterous and contact-rich tasks, tactile sensing provides precise force feedback that cannot be reliably inferred from vision. However, limited by hardware and data collection systems, existing datasets with tactility remain small in scale and narrow in contact coverage. Meanwhile, Vision-Language-Action (VLA) models with tactile modality are constrained on dynamics-agnostic post-training, which limits the performance ceiling on downstream tasks.",
          "summaryCn": "推出大规模触觉-动作数据集H-Tac和迁移触觉预训练系统TTP，将人类数据用于机器人精细操作。通过统一触觉与动作空间弥合人机差距，并利用触觉专家预测未来触觉，实现了鲁棒泛化和精细操作。",
          "reasonCn": "工作聚焦于VLA模型的触觉预训练，旨在提升精细操作能力",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2607.01067v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01067v1",
          "published": "2026-07-01T15:26:26Z",
          "updated": "2026-07-01T15:26:26Z",
          "authors": [
            "Chi Zhang",
            "Penglin Cai",
            "Ziheng Xi",
            "Haoqi Yuan",
            "Hao Luo",
            "Wanpeng Zhang",
            "Sipeng Zheng",
            "Chaoyi Xu",
            "Zongqing Lu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 62,
          "llmTotalScore": 62
        },
        {
          "id": "2607.01060v1",
          "title": "RoboWorld: Fast and Reliable Neural Simulators for Generalist Robot Policy Evaluation",
          "summary": "Video world models are emerging as a scalable alternative for evaluating generalist robot policies, bypassing the physical constraints and engineering burdens of real-world deployment. However, evaluating policies with video world models remains challenging, as world-model errors can make generated rollouts unreliable and slow inference limits large-scale throughput. We introduce RoboWorld, an automated evaluation pipeline that pairs a fast autoregressive video world model with a task-progress-aware vision-languag…",
          "summaryCn": "提出RoboWorld自动评估管线，将快速自回归视频世界模型与任务进展感知VLM评分结合。通过Step Forcing减少训练-测试不匹配，实现与真实世界高度相关的长时域展开，Pearson系数达0.989。",
          "reasonCn": "以视频世界模型为核心，结合动作条件预测，用于策略评估",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.01060v1",
          "pdfLink": "https://arxiv.org/pdf/2607.01060v1",
          "published": "2026-07-01T15:22:41Z",
          "updated": "2026-07-01T15:22:41Z",
          "authors": [
            "Byeongguk Jeon",
            "Seonghyeon Ye",
            "JaeHyeok Doo",
            "Sungdong Kim",
            "Minjoon Seo",
            "Hyungmok Son",
            "Kimin Lee"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2607.00457v1",
          "title": "Multi-scale Mixture of World Models for Embodied Agents in Evolving Environments",
          "summary": "Embodied agents operating in the real world require multi-scale reasoning and knowledge adaptation as conditions change. We identify two challenges in applying Mixture of Experts (MoE) to this setting: routing lacks an explicit notion of scale, preventing targeted updates at specific scales, and a uniform update policy cannot accommodate the different rates at which knowledge at each scale becomes outdated. We present MuSix, a framework that addresses both challenges through scale-aware world model mixture and evo…",
          "summaryCn": "提出多尺度混合世界模型框架MuSix，通过经验距离驱动的尺度感知路由和尺度依赖遗忘率实现知识动态更新。在EmbodiedBench和HAZARD上提升了多尺度推理与适应能力，适用于动态环境。",
          "reasonCn": "明确以世界模型为核心，用于具身智能体的多尺度推理与动态适应",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00457v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00457v1",
          "published": "2026-07-01T05:23:56Z",
          "updated": "2026-07-01T05:23:56Z",
          "authors": [
            "Jinwoo Jang",
            "Daniel J. Rho",
            "Sihyung Yoon",
            "Hyunsuk Cho",
            "Honguk Woo"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 49
        },
        {
          "id": "2607.00673v1",
          "title": "Path Planning in Physically Viable World Models",
          "summary": "Robots deployed in unstructured outdoor environments often plan from scene reconstructions collected before deployment because operators cannot remap large or remote sites before every mission. As a result, robots must make long-horizon planning decisions using stale maps that assume the terrain remains unchanged, even though physical changes to the environment may render previously feasible routes unsafe or unreachable at execution time. We present a physically viable world model for evaluating what-if queries fo…",
          "summaryCn": "提出物理可行世界模型，结合3D高斯泼溅与物理模拟，生成地形变化后的环境状态。用于机器人导航路径规划评估，使操作者能在变化条件下验证路线安全性，在真实场地和模拟洪水下验证。",
          "reasonCn": "使用物理世界模型评估地形变化下的路径可行性，直接支持导航规划",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00673v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00673v1",
          "published": "2026-07-01T09:19:29Z",
          "updated": "2026-07-01T09:19:29Z",
          "authors": [
            "Su Ann Low",
            "Cheng-Hsi Hsiao",
            "Xingjian Li",
            "Adam J. Thorpe",
            "Ufuk Topcu",
            "Krishna Kumar"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 45,
          "llmTotalScore": 45
        },
        {
          "id": "2607.00917v1",
          "title": "Valdi: Value Diffusion World Models",
          "summary": "World models can enable Model Predictive Control (MPC), but this requires dynamics prediction that is both fast enough for online use and expressive enough to represent uncertain futures. Diffusion models offer a natural mechanism for modeling uncertain dynamics, yet their iterative inference procedure makes them difficult to use for low-latency latent planning. We bridge this gap with Value Diffusion World Models (Valdi), combining end-to-end online training for MPC with a latent diffusion dynamics model.",
          "summaryCn": "提出价值扩散世界模型Valdi，将隐式扩散动力学模型与MPC在线训练相结合。单步扩散即可匹配确定性基线，并探讨预测多模态性与控制性能的权衡，适用于低延迟规划。",
          "reasonCn": "使用扩散世界模型进行模型预测控制，直接用于动作预测",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2607.00917v1",
          "pdfLink": "https://arxiv.org/pdf/2607.00917v1",
          "published": "2026-07-01T13:22:18Z",
          "updated": "2026-07-01T13:22:18Z",
          "authors": [
            "Christopher Lindenberg",
            "Kashyap Chitta"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 28,
          "llmTotalScore": 28
        }
      ]
    },
    {
      "dateKey": "20260701",
      "dateLabel": "2026-07-01",
      "generatedAt": "2026-07-01T02:50:24.283868+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.31382v1",
          "title": "Revisiting Parameter Redundancy in Vision-Language-Action Models: Insights from VLM-to-VLA Adaptation",
          "summary": "Vision-Language-Action (VLA) models have made significant strides in embodied intelligence by integrating the powerful representations of pre-trained Vision-Language Models (VLMs). However, the massive parameter scale of VLAs imposes a heavy computational burden, and these models exhibit extreme sensitivity to parameter pruning. Current paradigms often treat the resulting performance degradation as inevitable, relying on fine-tuning or low-rank corrections to recover efficacy.",
          "summaryCn": "重新审视VLA模型的参数冗余，提出基于VLM到VLA适配过程中参数分歧的诊断性剪枝方法。在LIBERO基准上实现高效压缩，揭示模块异质性对剪枝的因果影响，为VLA轻量化提供新视角。",
          "reasonCn": "论文研究VLA模型的参数冗余与剪枝，在LIBERO机器人操作基准上验证，涉及视觉输入、语言指令和动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31382v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31382v1",
          "published": "2026-06-30T09:10:31Z",
          "updated": "2026-06-30T09:10:31Z",
          "authors": [
            "Fengnian Zhang",
            "Tao Huang",
            "Siyu Xu",
            "Zhong Jin",
            "Chang Xu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31723v1",
          "title": "UniTacVLA: Unified Tactile Understanding and Prediction in Vision Language Action Models",
          "summary": "Vision-language-action (VLA) models have achieved strong performance in many robotic manipulation tasks, yet remain limited in contact-rich dexterous manipulation. To overcome this limitation, recent vision-tactile-language-action (VTLA) methods incorporate tactile sensing into VLA models to provide direct contact information. However, they typically treat tactile signals as passive auxiliary inputs, making it difficult to model tactile semantics and future physical interactions.",
          "summaryCn": "针对灵巧操作中的接触感知不足，提出统一触觉-视觉-语言-动作模型，通过触觉链式推理和预测构建动态先验。在多种接触丰富任务上实现高成功率和精度，提升VLA在物理交互中的鲁棒性。",
          "reasonCn": "提出统一的触觉学习框架UniTacVLA，将触觉作为动态交互线索融入VLA模型，用于接触丰富的操作任务，涉及视觉、语言和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31723v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31723v1",
          "published": "2026-06-30T14:24:00Z",
          "updated": "2026-06-30T14:24:00Z",
          "authors": [
            "Xidong Zhang",
            "Yichi Zhang",
            "Jiaxin Shi",
            "Fucai Zhu",
            "Siyu Zhu",
            "Michael Yu Wang",
            "Xiaojun Wu",
            "Weihao Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 103,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31329v1",
          "title": "3D HAMSTER: Bridging Planning and Control in Hierarchical Vision Language Action Models through 3D Trajectory Guidance",
          "summary": "Hierarchical Vision-Language-Action (VLA) models decouple high-level planning from low-level control to improve generalization in robot manipulation. Recent work in this paradigm uses 2D end-effector trajectories predicted by a Vision-Language Model (VLM) as explicit guidance for a downstream policy. However, state-of-the-art low-level policies operate in 3D metric space on point clouds, and feeding them 2D guidance that lacks depth forces each waypoint to be assigned the depth of whatever scene surface lies benea…",
          "summaryCn": "针对2D分层VLA中深度缺失导致的轨迹畸变，设计3D轨迹预测的VLM，通过与点云低级策略集成实现几何一致的操控。在仿真和真实世界均优于2D方法，显著提升泛化性能。",
          "reasonCn": "提出分层VLA框架3D HAMSTER，直接预测3D轨迹指导低级策略，结合视觉、语言指令和操作动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31329v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31329v1",
          "published": "2026-06-30T08:31:35Z",
          "updated": "2026-06-30T08:31:35Z",
          "authors": [
            "Dongyoon Hwang",
            "Byungkun Lee",
            "Dongjin Kim",
            "Hyojin Jang",
            "Hoiyeong Jin",
            "Jueun Mun",
            "Minho Park",
            "Hojoon Lee",
            "Hyunseung Kim",
            "Jaegul Choo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 91,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31846v1",
          "title": "Z-1: Efficient Reinforcement Learning for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models offer a promising framework for robotic manipulation by connecting language instructions, visual observations, and continuous control. However, most existing policies remain limited by behavior cloning or supervised fine-tuning (SFT) from fixed demonstrations, which provides limited opportunity to improve from the policy's own failures. In this paper, we present Z-1, a reinforcement learning (RL) post-training framework for flow-based VLA models.",
          "summaryCn": "利用分组相对策略优化（GRPO）和共享前缀树搜索等策略，高效提升VLA策略的成功率。在不增加额外演示的条件下，平均成功率提高13.2%，展示了RL后训练对VLA的有效性。",
          "reasonCn": "提出Z-1框架，通过强化学习后训练优化流式VLA模型，在RoboCasa任务上显式使用视觉和语言输入输出动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31846v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31846v1",
          "published": "2026-06-30T15:46:57Z",
          "updated": "2026-06-30T15:46:57Z",
          "authors": [
            "Lang Cao",
            "Renhong Chen",
            "Luyi Li",
            "Peng Wang",
            "Mofan Peng",
            "Yitong Li"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31167v1",
          "title": "MIRTH: Mutual-Information Reasoning with Temporal Hubs for Vision-Language-Action Agents",
          "summary": "VLA models have emerged as a powerful paradigm for transferring semantic knowledge from web-scale data to physical robotic control. However, current single-frame architectures suffer from intrinsic limitations: temporal myopia that discards historical dynamics, reasoning gaps between high-level instructions and low-level motor commands, and inference inefficiency due to autoregressive scalar decoding. In this work, we propose MIRTH, a unified framework designed to address these challenges.",
          "summaryCn": "针对VLA时序短视、推理鸿沟和推理效率问题，设计双尺度记忆hub、互信息潜空间规划和向量化解码。在基准测试和实物平台取得SOTA，并涌现错误恢复能力。",
          "reasonCn": "提出MIRTH统一框架，通过时序记忆、互信息推理和并行动作解码增强VLA，在LIBERO和真实机器人上验证。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31167v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31167v1",
          "published": "2026-06-30T05:57:13Z",
          "updated": "2026-06-30T05:57:13Z",
          "authors": [
            "Hao Sun",
            "Yu Song",
            "Shiyu Teng",
            "Ziwei Niu",
            "Yen-Wei Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31144v1",
          "title": "A Modular Vision-Language-Action Robotics Framework for Indoor Environments",
          "summary": "This paper presents an integrated system for the CMU Vision-Language-Action (VLA) Challenge, designed to enable an autonomous agent to perform complex tasks based on natural language instructions. Our framework employs a modular architecture that orchestrates environment mapping, question processing, and navigation. The system operates in two parallel streams: a perception pipeline that constructs a semantic voxel map from real-time camera feeds using OwlViT embeddings, and a language pipeline that classifies user…",
          "summaryCn": "集成感知与语言流水线构建语义体素地图，并通过VLM将自然语言指令转化为导航/操作动作。在限定时间内实现高效自主任务执行，衔接语言理解与行动。",
          "reasonCn": "面向CMU VLA挑战搭建模块化系统，将视觉建图与语言查询结合，为机器人输出可执行动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31144v1",
          "published": "2026-06-30T05:17:02Z",
          "updated": "2026-06-30T05:17:02Z",
          "authors": [
            "Anindya Jana",
            "Snehasis Banerjee",
            "Arup Sadhu",
            "Ranjan Dasgupta"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31160v1",
          "title": "Reasoning-aware Speculative Decoding for Efficient Vision-Language-Action Models in Autonomous Driving",
          "summary": "Modern Vision-Language-Action (VLA) planners for autonomous driving emit a chain-of-causation (CoC) reasoning step \\emph{before} producing a trajectory. The reasoning is autoregressive and dominates inference latency, while the trajectory head is parallel and cheap. Latency is an operational constraint in autonomous driving, so accelerating the reasoning step is the central problem we address.",
          "summaryCn": "将Chain-of-Causation推理拆分为例行和审慎路径，利用推测解码框架减少自回归步骤。引入FlatRoPE打破旋转对称性，在保持规划质量的同时显著降低延迟。",
          "reasonCn": "针对自动驾驶VLA规划器的推理延迟，提出推理感知推测解码加速链式推理，直接输出轨迹动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31160v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31160v1",
          "published": "2026-06-30T05:41:25Z",
          "updated": "2026-06-30T05:41:25Z",
          "authors": [
            "Anh Dung Dinh",
            "Simon Khan",
            "Flora Salim"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.32028v1",
          "title": "DVG-WM: Disentangled Video Generation Enables Efficient Embodied World Model for Robotic Manipulation",
          "summary": "Video-based embodied world models provide an appealing substrate for robotic manipulation by predicting future states, yet current approaches remain limited by a fundamental entanglement: accurately modeling dynamics typically requires low-level temporal reasoning, while producing high-resolution frames demands expansive visual synthesis according to high-level semantics. This entanglement results in slow inference speed for iterative planning or too coarse predictions to retain contact-rich details. To solve this…",
          "summaryCn": "为解决视频世界模型中动力学与视觉合成的纠缠，设计动力学学习与精炼生成分离的框架。通过流匹配和潜在退化机制，实现高效高保真的未来状态预览，加速迭代规划并保留接触细节。",
          "reasonCn": "提出解耦视频生成世界模型DVG-WM，明确用于机器人操作中的规划，融合语言指令和视觉状态预测动作序列。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.32028v1",
          "pdfLink": "https://arxiv.org/pdf/2606.32028v1",
          "published": "2026-06-30T17:54:32Z",
          "updated": "2026-06-30T17:54:32Z",
          "authors": [
            "Ziyu Shan",
            "Zhenyu Wu",
            "Xiaofeng Wang",
            "Zheng Zhu",
            "Ziwei Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 53,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31232v1",
          "title": "Delta-JEPA: Learning Action-Sensitive World Models via Latent Difference Decoding",
          "summary": "Learning visual world models for planning requires compact latent dynamics that remain sensitive to actions, yet reconstruction-free joint-embedding objectives can collapse to action-insensitive representations. We propose Delta-JEPA, an end-to-end reconstruction-free world model that augments latent forward prediction with a Latent Difference Action Decoder (LDAD). Unlike inverse decoders that infer actions from concatenated endpoint embeddings, LDAD reconstructs the executed action from the latent displacement b…",
          "summaryCn": "针对联合嵌入世界模型的动作坍缩问题，引入对潜在状态差分解码动作的监督。无需像素重建，在连续控制任务中提高规划性能，证明位移级正则化的有效性。",
          "reasonCn": "提出Delta-JEPA世界模型，通过潜在位移解码动作增强动作敏感性，直接服务于基于展开的规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.31232v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31232v1",
          "published": "2026-06-30T07:08:24Z",
          "updated": "2026-06-30T07:08:24Z",
          "authors": [
            "Zhenghao Zhang",
            "Yuanxiang Wang",
            "Zhenyu Guan",
            "Yujia Yang",
            "Bingkang Shi",
            "Tianyu Zong",
            "Hongzhu Yi",
            "Guoqing Chao",
            "Xingchen Chen",
            "Tiankun Yang"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31672v1",
          "title": "WorldRoamBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models",
          "summary": "Despite rapid progress in interactive world models (IWMs), existing benchmarks evaluate action following only at trajectory level and ignore memory and interaction physics. We introduce WorldRoamBench, an open-world benchmark for long-horizon stability across four dimensions, each with tailored innovations: (i) Action: per-frame action metric bypassing cross-model semantic scale disparity and exposing failures hidden by trajectory; (ii) Vision: segment-based drift metric capturing non-monotonic mid-sequence collap…",
          "summaryCn": "提出涵盖动作、视觉、物理和记忆四维度的开放世界长程稳定性基准，包含600+测试案例。评估超10个模型揭示现有方法在真实世界里应用的不足，为交互式世界模型发展提供方向。",
          "reasonCn": "构建WorldRoamBench基准，系统评估交互式世界模型在动作跟随、视觉漂移、物理合理性和记忆方面的长程稳定性，服务于规划与控制的模型选择。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.31672v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31672v1",
          "published": "2026-06-30T13:51:44Z",
          "updated": "2026-06-30T13:51:44Z",
          "authors": [
            "Ting-Bing Xu",
            "Jiacheng Sui",
            "Zhe Gao",
            "Kewei Shi",
            "Wenjin Yang",
            "Zhicheng Liu",
            "Zhaoxu Sun",
            "Mingchao Sun",
            "Hongyu Pan",
            "Fan Jiang"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 45,
          "llmTotalScore": 0
        },
        {
          "id": "2606.32026v1",
          "title": "AdaJEPA: An Adaptive Latent World Model",
          "summary": "Latent world models enable planning from high-dimensional observations by predicting future states in a compact latent space. However, these models are typically kept frozen at test time: when their predictions become inaccurate, planning can fail, especially under test-time distribution shift. To address this, we propose AdaJEPA, an adaptive latent world model that performs test-time adaptation within the closed loop of model predictive control (MPC).",
          "summaryCn": "为应对分布偏移导致的预测误差，在MPC的每次重规划步骤中利用观测信号在线更新模型。仅需极少量梯度步即可大幅提升目标达成成功率。",
          "reasonCn": "提出自适应世界模型AdaJEPA，在模型预测控制闭环中进行测试时适应，显式用于动作规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.32026v1",
          "pdfLink": "https://arxiv.org/pdf/2606.32026v1",
          "published": "2026-06-30T17:53:48Z",
          "updated": "2026-06-30T17:53:48Z",
          "authors": [
            "Ying Wang",
            "Oumayma Bounou",
            "Yann LeCun",
            "Mengye Ren"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 43,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31958v1",
          "title": "Adapting Generalist Robot Policies with Semantic Reinforcement Learning",
          "summary": "Generalist robot policies learn a diverse repertoire of behaviors from large-scale pretraining. In principle, this makes them excellent priors for downstream adaptation via reinforcement learning (RL). In practice, however, standard RL methods leveraging this prior optimize directly over robot actions, requiring the base policy's action distribution to be close to that of a performant policy from the start.",
          "summaryCn": "将通用策略视为可控技能先验，将语言提示作为动作空间学习解决长程复杂任务。在真实和仿真环境中实现高效在线适应，无需精细动作搜索。",
          "reasonCn": "提出语义强化学习SARL，通过优化语言提示空间适应通用机器人策略，涉及视觉观察和动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31958v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31958v1",
          "published": "2026-06-30T17:00:33Z",
          "updated": "2026-06-30T17:00:33Z",
          "authors": [
            "Jagdeep Singh Bhatia",
            "Andrew Wagenmaker",
            "William Chen",
            "Sergey Levine"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 38,
          "llmTotalScore": 0
        },
        {
          "id": "2606.31132v1",
          "title": "ELASTIC: Efficiently Learning to Adaptively Scale Test-Time Compute for Generative Control Policies",
          "summary": "Generative control policies (GCPs), such as diffusion policies and flow-based vision-language-action models, enable test-time scaling in robot control. Test-time compute can be allocated along two axes: sequential scaling, which increases denoising steps to refine actions, and parallel scaling, which samples multiple candidate actions to search across modes of the policy distribution. However, the optimal allocation of sequential and parallel compute is hard to know a priori as it is state-, task-, and policy-depe…",
          "summaryCn": "将计算分配建模为元MDP，学习状态自适应的串行与并行缩放调度。在扩散策略和π0.5 VLA上实现帕累托优化，以更低计算成本提升操作成功率。",
          "reasonCn": "提出ELASTIC算法优化生成式控制策略的测试时计算分配，目标策略包括VLA模型，直接涉及动作优化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.31132v1",
          "pdfLink": "https://arxiv.org/pdf/2606.31132v1",
          "published": "2026-06-30T05:00:32Z",
          "updated": "2026-06-30T05:00:32Z",
          "authors": [
            "Andrew Zou Li",
            "Gokul Swamy",
            "Yonatan Bisk",
            "Andrea Bajcsy"
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
      "dateKey": "20260630",
      "dateLabel": "2026-06-30",
      "generatedAt": "2026-06-30T02:44:57.622105+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.30113v1",
          "title": "SA-VLA: State-aware tokenizer for improving Vision-Language-Action Models' performance",
          "summary": "Discrete action tokenization provides a compact interface for autoregressive VLA policies, but accurately recovering continuous robot actions from discrete codes remains challenging. Existing tokenizers typically map each discrete code to a fixed continuous action prototype, ignoring the robot's current proprioceptive state. This limitation is particularly pronounced in manipulation, where the same action token may require different continuous controls under different joint configurations, object poses, and contac…",
          "summaryCn": "提出状态感知动作分词器SA-VLA，通过状态注入机制使每个离散动作令牌能表示依赖于机器人状态的连续动作族。集成到基于LLM的VLA策略中，在12个RoboTwin操作任务上将平均成功率从0.29提升至0.5。该分词器保持了离散动作建模的效率和兼容性。",
          "reasonCn": "论文直接改进VLA模型的离散动作分词，涉及视觉输入、语言指令和机器人动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.30113v1",
          "pdfLink": "https://arxiv.org/pdf/2606.30113v1",
          "published": "2026-06-29T10:45:53Z",
          "updated": "2026-06-29T10:45:53Z",
          "authors": [
            "Tengyue Jiang",
            "Chunpu Xu",
            "Jiayue Kang",
            "Yao Mu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 0
        },
        {
          "id": "2606.29908v1",
          "title": "Pondering the Way: Spatial-perceiving World Action Model for Embodied Navigation",
          "summary": "Existing world model-based planners for visual navigation typically follow a verification-centric paradigm, decoupling goal intent from trajectory synthesis. This approach suffers from candidate dependence, heavy computational overhead, and inconsistencies between sampled actions and predicted visuals. To address these issues, we propose SWAM (Spatial-perceiving World Action Model), a task-centric joint observation-action generation framework.",
          "summaryCn": "提出空间感知世界行动模型SWAM，通过单次推理同时生成中间RGB-D序列和动作轨迹，用于具身导航。使用深度伪标签训练，推理时仅需单目RGB输入，引入视觉引导动作细化模块和轨迹正则化损失，在成功率、轨迹精度和效率上显著优于两阶段规划器，并展现了零样本泛化能力。",
          "reasonCn": "以世界模型为核心，直接用于动作轨迹生成和视觉导航规划，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.29908v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29908v1",
          "published": "2026-06-29T07:43:47Z",
          "updated": "2026-06-29T07:43:47Z",
          "authors": [
            "Hong Chen",
            "Daqi Liu",
            "Zehan Zhang",
            "Haiguang Wang",
            "Tianhao Lu",
            "Longfei Yan",
            "Haiyang Sun",
            "Fangzhen Li",
            "Hongwei Xie",
            "Bing Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 0
        },
        {
          "id": "2606.29892v1",
          "title": "Trust Your Instincts: Confidence-Driven Test-Time RL for Vision-Language-Action Models",
          "summary": "Reinforcement learning (RL) has become indispensable for pushing Vision-Language-Action Models (VLAs) beyond static imitation learning. However, existing RL methods typically require external environmental feedback, relying on predefined success signals to guide policy updates. In this work, we show that VLA models possess useful internal evaluative capabilities: in discrete-action VLAs, trajectories with higher generation confidence are significantly more likely to succeed.",
          "summaryCn": "引入测试时强化学习框架T^2VLA，利用VLA模型内部生成置信度作为内在奖励，无需外部环境反馈即可实现策略自举改进。提出置信度驱动双专家引导机制平衡探索与稳定性，在LIBERO和RoboTwin上超越监督基线，逼近oracle RL性能。",
          "reasonCn": "针对VLA模型的自改进方法，利用视觉、语言和行动策略的内部置信度进行测试时学习。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29892v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29892v1",
          "published": "2026-06-29T07:31:41Z",
          "updated": "2026-06-29T07:31:41Z",
          "authors": [
            "Siyao Chen",
            "Jiakang Yuan",
            "Jiaxin Wang",
            "Tao Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.29699v1",
          "title": "Early Warning Signals for OpenVLA Failure under Visual Distribution Shift",
          "summary": "Vision Language Action models combine perception, language grounding, and control in a single policy, but their failures are hard to diagnose once visual conditions shift. We test whether OpenVLA feedforward activations contain linearly decodable information about near term task failure in LIBERO manipulation rollouts. The policy is fixed throughout.",
          "summaryCn": "测试OpenVLA在前馈激活中是否存在可线性解码的失败信息。在视觉分布偏移下，用逻辑回归探针在15步范围内预测失败，达到AUROC 0.972。发现层16解码性最强，且跨视觉扰动具有泛化性，表明VLA内部状态包含任务失败相关信息。",
          "reasonCn": "分析VLA模型内部状态表征以预测任务失败，研究对象是VLA模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29699v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29699v1",
          "published": "2026-06-29T02:07:17Z",
          "updated": "2026-06-29T02:07:17Z",
          "authors": [
            "Dipesh Tharu Mahato",
            "Rachel Ren"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 56,
          "llmTotalScore": 0
        },
        {
          "id": "2606.29936v1",
          "title": "OpenSPM: An Environment-Transferable Robotic Key Spatial Pose Memory and Closed-Loop High-Frequency Flow-Matching Action Generation Model",
          "summary": "Open-environment tabletop robotic manipulation requires systems to possess semantic understanding, precise geometric pose estimation, and high-frequency action generation. While end-to-end vision-language-action (VLA) models excel at semantic generalization, they often lack explicit geometric constraints for fine-grained tasks and require costly training. To bridge the gap between high-level semantics and low-level physical execution, we propose OpenSPM, an open environment spatial persistent memory framework cons…",
          "summaryCn": "提出开放环境空间持久记忆框架OpenSPM，利用3D感知和卡尔曼滤波跟踪位姿，从人类演示中提取关键空间位姿作为记忆条目。通过自然语言指令检索并迁移至新场景，结合流匹配生成高频动作，在10个LIBERO-GOAL任务上达到85.6%成功率和1033.3Hz控制频率。",
          "reasonCn": "框架融合视觉3D感知、自然语言指令和动作生成为一体，解决具身操作任务，符合VLA定义。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.29936v1",
          "pdfLink": "https://arxiv.org/pdf/2606.29936v1",
          "published": "2026-06-29T08:12:58Z",
          "updated": "2026-06-29T08:12:58Z",
          "authors": [
            "Iok Tong Lei",
            "Qingchen Xie",
            "Yifan Wang",
            "Yap Ying Jie",
            "Zhidong Deng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 50,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260629",
      "dateLabel": "2026-06-29",
      "generatedAt": "2026-06-29T02:55:33.743964+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.27872v1",
          "title": "S$^2$-VLA: State-Space Guided Vision-Language-Action Models for Long-Horizon Manipulation",
          "summary": "Vision-Language-Action (VLA) models have demonstrated strong capabilities in robotic manipulation, but their performance degrades significantly in long-horizon tasks due to cumulative error propagation. This limitation largely arises from static feature fusion mechanisms that rely on fixed weights to combine visual, language, and action representations, preventing the model from adapting to different phases of task execution. To address this limitation, we propose S$^2$-VLA, a framework that introduces a State-Spa…",
          "summaryCn": "针对长周期操作中VLA模型性能下降问题，提出状态空间引导的自适应注意力机制SSGAA，动态融合视觉、任务意图和时序动作。2B参数模型即超越7B模型，在LIBERO等基准取得SOTA，验证了自适应融合对长周期操作的重要性。",
          "reasonCn": "提出S^2-VLA框架，通过状态空间引导的自适应注意力机制改进长周期操作中的视觉-语言-动作融合。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27872v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27872v1",
          "published": "2026-06-26T09:13:16Z",
          "updated": "2026-06-26T09:13:16Z",
          "authors": [
            "Zhipeng Xie",
            "Zongyi Han",
            "Xiangyi Wei",
            "Shiliang Sun",
            "Yang Li",
            "Jing Zhao"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 114,
          "llmTotalScore": 0
        },
        {
          "id": "2606.25800v1",
          "title": "ROAD-VLA: Robust Online Adaptation via Self-Distillation for Vision-Language-Action Models",
          "summary": "Effective online adaptation of vision-language-action (VLA) models remains challenging, as sparse rewards provide weak supervision for high-dimensional autoregressive action policies. Although self-distillation can in principle provide denser training signals, we find that text-based privileged teachers conditioned on demonstrations, retrieved experiences, or high-level plans are ineffective for VLA adaptation, exposing a modality gap between symbolic guidance and low-level robot actions. We propose ROAD-VLA, an a…",
          "summaryCn": "提出ROAD-VLA框架，通过优势引导的自蒸馏将稀疏奖励转换为动作空间的密集监督，实现VLA模型的鲁棒在线适应。在七个环境中优于PPO，展示了其对抗分布偏移的有效性。",
          "reasonCn": "直接针对VLA模型的在线适应问题，利用自蒸馏和优势估计提供密集动作空间监督。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25800v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25800v1",
          "published": "2026-06-24T13:17:59Z",
          "updated": "2026-06-24T13:17:59Z",
          "authors": [
            "Kejing Wang",
            "Toan Nguyen",
            "Minh Hoang Nguyen",
            "Simon Khan",
            "Flora D. Salim"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24472v1",
          "title": "G$^3$VLA: Geometric inductive bias for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have made rapid progress in generalist robot manipulation by harnessing semantic knowledge from pretrained vision-language backbones, but their visual tokens remain grounded in 2D image coordinates rather than the calibrated geometry of the robot's cameras -- a mismatch especially pronounced in multi-camera setups, where views are coupled by known intrinsics and extrinsics yet processed as independent images. We propose G$^3$VLA, a camera-aware geometric module that injects cali…",
          "summaryCn": "提出G3VLA，为预训练VLA注入相机感知几何模块，包括射线嵌入、投影位置编码和跨视图融合，无需深度传感器。在LIBERO、RoboCasa24等基准上取得一致增益，验证了几何迁移对动作生成路径的有效性。",
          "reasonCn": "面向VLA模型的几何偏差注入，增强视觉token的3D结构理解，直接改进动作预测。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24472v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24472v1",
          "published": "2026-06-23T12:02:36Z",
          "updated": "2026-06-23T12:02:36Z",
          "authors": [
            "Yue Peng",
            "Yongzhe Zhao",
            "Artur Habuda",
            "Khuyen Pham",
            "Yanheng Zhu",
            "Tran Nguyen Le",
            "Fares Abu-Dakka",
            "Li Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 109,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27146v1",
          "title": "PhysReflect-VLA: Physical Feasibility and Self-Reflective Regulation for Reliable Vision-Language-Action Policies",
          "summary": "Long-horizon robotic manipulation is highly sensitive to physically infeasible transitions, contact-induced disturbances, and the lack of effective self-correction during execution. Although Vision-Language-Action (VLA) models provide strong task grounding through multimodal learning, they typically generate actions in a feed-forward manner without explicitly checking physical feasibility or diagnosing execution errors online. We present PhysReflect-VLA, a plug-and-play execution-time reliability framework that au…",
          "summaryCn": "提出PhysReflect-VLA即插即用框架，通过物理可行性评估和LLM反思在闭环控制中提升VLA可靠性。在接触丰富任务上平均成功率提升5.4%，消融实验证明各组件贡献。",
          "reasonCn": "扩展VLA策略，加入可行性操作符和反思模块，直接优化动作生成的物理一致性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27146v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27146v1",
          "published": "2026-06-25T15:18:10Z",
          "updated": "2026-06-25T15:18:10Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Weijun Li",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26663v1",
          "title": "Tactile-WAM: Touch-Aware World Action Model with Tactile Asymmetric Attention",
          "summary": "World Action Models (WAMs) generate actions together with predicted futures, offering a powerful interface for robot decision making. In contact-rich manipulation, however, visually plausible futures can be physically incomplete: insertion, assembly, search, and reorientation often depend on slip, jamming, contact normals, or small alignment errors that are weakly visible or hidden in RGB. A natural solution is to predict future tactile states, however, we identify tactile pollution, a failure mode where unconstra…",
          "summaryCn": "提出Tactile-WAM，引入触觉非对称注意力机制TAAM，通过VideoClean掩码保护视觉预测同时将接触信息用于动作生成。在ManiFeel上平均成功率提升38.9%，接触丰富任务提升86%。",
          "reasonCn": "提出触觉感知的世界动作模型，明确用于动作生成和预测，解决接触丰富操作中的视觉不足。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26663v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26663v1",
          "published": "2026-06-25T06:54:56Z",
          "updated": "2026-06-25T06:54:56Z",
          "authors": [
            "Siyu Wu",
            "Linjing You",
            "Junjie Zhu",
            "Yaozu Liu",
            "Changhao Zhang",
            "Jian Liu",
            "Weiqiang Wang",
            "Qi Li",
            "Jituo Li",
            "Hengshuang Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 0
        },
        {
          "id": "2606.25591v1",
          "title": "WOLF-VLA: Whole-Body Humanoid Optimal Locomotion Framework for Vision-Language-Action Learning",
          "summary": "Vision-Language-Action (VLA) models have recently demonstrated strong generalization in robotic manipulation, yet their applicability to whole-body, contact-rich humanoid locomotion remains severely underexplored due to data scarcity, the absence of dynamically consistent demonstrations, and the difficulty of encoding optimality and safety in learning-based pipelines. This work introduces a unified framework WOLF-VLA that integrates whole-body optimal-control (OC) motion synthesis with large-scale multi-modal data…",
          "summaryCn": "提出WOLF-VLA框架，结合全身最优控制运动合成与大规模多模态数据集，训练VLA直接根据自然语言指令生成人形机器人运动策略。在六类运动任务中展示出强推理和鲁棒性。",
          "reasonCn": "直接处理视觉-语言-动作，实现人形机器人的指令跟随运动控制。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25591v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25591v1",
          "published": "2026-06-24T08:59:59Z",
          "updated": "2026-06-24T08:59:59Z",
          "authors": [
            "Melya Boukheddimi",
            "Omar Adjali",
            "Daniel Sontag",
            "Frank Kirchner"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 107,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27504v1",
          "title": "ReWorld: Learning Better Representations for World Action Models",
          "summary": "World Action Models (WAMs) model future environment evolution under action conditioning, offering a scalable paradigm for autonomous driving. However, existing approaches focus largely on model architecture design, and how a WAM can efficiently learn better world representations for planning remains underexplored. To address this gap, we propose ReWorld, the first representation learning framework specifically designed for autonomous-driving world action models.",
          "summaryCn": "提出ReWorld，首个自动驾驶世界动作模型表征学习框架，通过优化中间表征的未来预测、跨模态对齐和安全边界判别，提升生成和规划质量，并讨论现有方法的局限性。",
          "reasonCn": "以世界动作模型为核心，改进表征学习以提升动作规划，针对自动驾驶场景。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27504v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27504v1",
          "published": "2026-06-25T19:37:58Z",
          "updated": "2026-06-25T19:37:58Z",
          "authors": [
            "Tianze Xia",
            "Lijun Zhou",
            "Kaixin Xiong",
            "Jingfeng Yao",
            "Yu Zhu",
            "Zhenxin Zhu",
            "Bing Wang",
            "Guang Chen",
            "Hangjun Ye",
            "Wenyu Liu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 94,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24051v1",
          "title": "DriveStack-VLA: Render-Teacher Alignment for BEV-Based DeepStack Vision-Language-Action Model",
          "summary": "Vision-Language-Action driving models convert a pretrained Vision-Language Model into a driving policy, allowing them to use world knowledge and follow language guidances. However, existing VLA driving models still lack driving-oriented spatial intelligence: their policies are mainly grounded on perspective image tokens and language priors, while precise motion planning requires metric geometry, top-down scene structure, and attention to safety-critical perceptual cues. This limitation makes current models vulnera…",
          "summaryCn": "提出DriveStack-VLA，通过BEV深度堆叠连接和渲染-教师对齐增强VLA驾驶模型的空间智能，并在NAVSIM和Bench2Drive上取得领先性能，展示了驱动型空间理解的重要性。",
          "reasonCn": "自动驾驶领域的视觉-语言-动作模型，结合BEV和语言指令输出驾驶动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24051v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24051v1",
          "published": "2026-06-23T01:40:54Z",
          "updated": "2026-06-23T01:40:54Z",
          "authors": [
            "Jingke Wang",
            "Zhenru Zhao",
            "Shuangming Lei",
            "Hao Su",
            "Yuehao Huang",
            "Yijia Xie",
            "Kai Tang",
            "Guanglin Xu",
            "AiXue Ye",
            "Yukai Ma"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26025v2",
          "title": "In-Context World Modeling for Robotic Control",
          "summary": "Modern Vision-Language-Action (VLA) models often fail to generalize to novel setups, such as altered camera viewpoints or robot morphologies, because they are typically conditioned only on current observations and language instructions. By ignoring the underlying system configuration as a variable, these models implicitly assume a fixed execution context encountered during training, necessitating data-intensive fine-tuning for any new environment. In this work, we introduce In-Context World Modeling (ICWM), a fram…",
          "summaryCn": "提出上下文世界建模ICWM，使VLA策略能从少量自生成交互中推断系统动力学变量，适应新相机视角和形态，无需参数更新。在模拟和真实机器人上显著超越标准VLA基线。",
          "reasonCn": "结合VLA和世界建模，通过上下文历史推断动态，直接改进动作预测与泛化。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.26025v2",
          "pdfLink": "https://arxiv.org/pdf/2606.26025v2",
          "published": "2026-06-24T16:53:36Z",
          "updated": "2026-06-25T01:51:45Z",
          "authors": [
            "Siyin Wang",
            "Junhao Shi",
            "Senyu Fei",
            "Zhaoyang Fu",
            "Li Ji",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 91,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26006v1",
          "title": "FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation",
          "summary": "Vision-Language-Action (VLA) models are often constrained by the imitation ceiling imposed by sub-optimal data. While Reinforcement Learning (RL) fine-tuning can surpass this limit, it is notoriously sample inefficient. This challenge arises from two core issues: (1) catastrophic initial unlearning due to an unstable Q-function and (2) inefficient policy updates caused by low-quality exploration data, often forcing a reliance on costly human interventions.",
          "summaryCn": "提出FORCE框架，通过价值校准预热缓解初始遗忘，并以Q函数过滤探索数据，实现高效的VLA强化学习微调。成功率绝对提升79%，训练加速32.5%，且无需人工干预。",
          "reasonCn": "针对VLA模型强化学习微调，改进线上训练稳定性和效率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26006v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26006v1",
          "published": "2026-06-24T16:23:18Z",
          "updated": "2026-06-24T16:23:18Z",
          "authors": [
            "Shuyi Zhang",
            "Yunfan Lou",
            "Hongyang Cheng",
            "Yichen Guo",
            "Chuyao Fu",
            "Yaoxu Lyu",
            "Xiaojie Zhang",
            "Haoran Li",
            "Pengwei Wang",
            "Zhongyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27755v1",
          "title": "Drop-Then-Recovery: How Redundant Are Vision-Language-Action Models?",
          "summary": "Vision-Language-Action (VLA) models enable instruction-driven robotic manipulation, but they inherit oversized language backbones from pretrained VLMs whose capacity far exceeds what is needed for short robotic instructions. This raises a basic question: how much of a VLA model is actually necessary for closed-loop control? In this work, we study architectural redundancy in VLA models by using transformer block removal as a controlled intervention.",
          "summaryCn": "通过Drop-Then-Recovery协议研究VLA架构冗余，发现语言骨干高度冗余而视觉和动作路径更关键。在LIBERO上移除一半LLM块后性能反升至98.3%，为VLA轻量化提供见解。",
          "reasonCn": "聚焦VLA模型冗余分析，直接涉及视觉和动作路径的研究，属于VLA架构优化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27755v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27755v1",
          "published": "2026-06-26T06:22:17Z",
          "updated": "2026-06-26T06:22:17Z",
          "authors": [
            "Guoheng Sun",
            "Kaixi Feng",
            "Shwai He",
            "Xiaochuan Gong",
            "Yexiao He",
            "Ziyao Wang",
            "Zheyu Shen",
            "Wanghao Ye",
            "Ramana Rao Kompella",
            "Gaowen Liu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 0
        },
        {
          "id": "2606.25215v1",
          "title": "Reflective VLA: In-Context Action Consequences Make VLAs Generalize",
          "summary": "Most vision-language-action (VLA) models are reactive: they predict the next action from the current instruction and observation, implicitly assuming that the current observation fully specifies the action-relevant state. In embodied control, however, embodiment-specific factors such as camera-to-robot geometry, robot calibration, or systematic actuation bias are often hard to identify from a single observation. As a result, reactive policies cannot reliably disambiguate these factors in general, overfitting to tr…",
          "summaryCn": "提出Reflective VLA，通过观测-动作-结果三元组上下文条件化决策，使模型能区分部署环境固有参数。在LIBERO-Plus-Hard上提升成功率，同时保持分布内性能。",
          "reasonCn": "改进VLA的上下文条件机制，利用历史交互改善分布外泛化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25215v1",
          "published": "2026-06-23T22:23:35Z",
          "updated": "2026-06-23T22:23:35Z",
          "authors": [
            "Qing Lian",
            "Kent Yu",
            "Lei Zhang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 0
        },
        {
          "id": "2606.23085v1",
          "title": "Foresight: Failure Detection for Long-Horizon Robotic Manipulation with Action-Conditioned World Model Latents",
          "summary": "Long-horizon tasks are common in real-world robotic deployments, yet failure detection for such tasks remains underexplored. Detecting failures in long-horizon robotic tasks is particularly challenging because failure onset is often ambiguous and dense temporal annotations are typically unavailable. We present Foresight, a failure detection framework that monitors manipulation trajectories using latent representations from an action-conditioned world model.",
          "summaryCn": "提出Foresight框架，利用动作条件世界模型的潜在表示进行长周期操作失败检测，仅需任务成功标签。通过功能共形预测校准，在仿真和真实机器人上验证了有效性。",
          "reasonCn": "以世界模型为核心，提取动作条件潜在特征用于机器人操作失败检测，属于动作监控与控制。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.23085v1",
          "pdfLink": "https://arxiv.org/pdf/2606.23085v1",
          "published": "2026-06-22T09:32:28Z",
          "updated": "2026-06-22T09:32:28Z",
          "authors": [
            "Haoran Zhang",
            "Yifu Lu",
            "Boyang Wang",
            "Xuhui Kang",
            "Yen-Ling Kuo",
            "Zezhou Cheng",
            "Mengdi Wang",
            "Odest Chadwicke Jenkins"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27374v1",
          "title": "World Action Models Enable Continual Imitation Learning with Recurrent Generative Replays",
          "summary": "Going beyond predicting robot actions, World Action Models (WAMs) can also generate future visual observations. We build on this generative capability to propose Recurrent Generative Replay (REGEN), a continual imitation learning framework that synthesizes pseudo-replay trajectories, enabling a robot policy to rehearse previously learned tasks without storing their original human demonstrations. During continual adaptation, REGEN recursively queries the WAM to synthesize pseudo-replay trajectories conditioned only…",
          "summaryCn": "提出REGEN框架，利用WAM递归生成伪重演轨迹实现持续模仿学习，无需存储原始演示。减少灾难性遗忘最多50%，分析长周期视觉退化和不一致为主要瓶颈。",
          "reasonCn": "以世界动作模型为核心，通过生成未来观测进行持续学习，直接用于动作策略排练。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27374v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27374v1",
          "published": "2026-06-25T17:59:56Z",
          "updated": "2026-06-25T17:59:56Z",
          "authors": [
            "Manish Kumar Govind",
            "Dominick Reilly",
            "Smit Patel",
            "Hieu Le",
            "Srijan Das"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26801v1",
          "title": "Improving Vision-Language-Action Model Fine-Tuning with Structured Stage and Keyframe Supervision",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for generalizable robotic manipulation. During fine-tuning, however, action supervision applies equally across all timesteps, without structured supervision on which manipulation stage the robot is in or what the next gripper-event target should be. This causes failures to concentrate around challenging gripper-event transitions.",
          "summaryCn": "提出StaKe框架，自动从夹爪状态衍生阶段分类和关键帧预测作为辅助监督，提升VLA微调在夹爪事件过渡上的可靠性。在双臂仿真和真实机器人上相对收益14-56%。",
          "reasonCn": "改进VLA微调，引入结构化阶段和关键帧监督，强化动作预测的时序一致性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26801v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26801v1",
          "published": "2026-06-25T09:38:11Z",
          "updated": "2026-06-25T09:38:11Z",
          "authors": [
            "Yuan Xu",
            "Yixiang Chen",
            "Kai Wang",
            "Jiabing Yang",
            "Peiyan Li",
            "Qisen Ma",
            "Yan Huang",
            "Liang Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27807v1",
          "title": "SpikeVLA: Vision-Language-Action Models with Spiking Neural Networks",
          "summary": "Vision-Language-Action (VLA) models have become a dominant paradigm for embodied intelligence. However, most existing approaches are built on large-scale transformers, resulting in substantial inference latency and energy consumption that limit their practical deployment in low-power, real-time scenarios. We propose SpikeVLA, a spiking VLA architecture for embodied navigation with energy-efficient inference, consisting of three key components.",
          "summaryCn": "提出SpikeVLA，用脉冲神经网络构建VLA，包括脉冲视觉编码器、多模态脉冲语言模型和脉冲动作策略。在导航任务上能耗大幅降低且保持竞争力，适合低功耗实时具身智能。",
          "reasonCn": "面向VLA的脉冲神经网络架构，实现视觉-语言-动作的低功耗推理。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27807v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27807v1",
          "published": "2026-06-26T07:45:45Z",
          "updated": "2026-06-26T07:45:45Z",
          "authors": [
            "Ruiqi Song",
            "Dujun Nie",
            "Siyu Teng",
            "Baiyong Ding",
            "Xiaotong Zhang",
            "Dong Li",
            "Chenming Zhang",
            "Yuchen Li",
            "Hangbin Wu",
            "Long Chen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24448v1",
          "title": "Supervise What Survives: Geometry-Guided VLA Adaptation from Synthetic Robot Videos",
          "summary": "Vision-Language-Action (VLA) models require large-scale video-action pairs, yet real teleoperation remains scarce. While generated robot videos offer a scalable alternative, existing methods treat them as real robot data by recovering pseudo-actions from synthesized pixels. We argue that deriving low-level control from generated visuals is a mismatched abstraction.",
          "summaryCn": "提出GRA框架，基于非对称保留原理，从合成机器人视频中提取几何信息监督VLA视觉感知，动作头仅用真实演示训练。提升数据效率，仅用50条真实演示即可有效适应。",
          "reasonCn": "利用几何引导自适应VLA，处理合成视频中的控制信息缺失问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24448v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24448v1",
          "published": "2026-06-23T11:35:13Z",
          "updated": "2026-06-23T11:35:13Z",
          "authors": [
            "Danze Chen",
            "Yanzhe Chen",
            "Qiming Huang",
            "Zhijun Cao",
            "Chen Gao",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.23617v1",
          "title": "RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models are commonly fine-tuned through passive imitation learning, where additional demonstrations are collected for tasks where the policy performs poorly. This approach incurs several downsides: it requires the robot to fail before data collection is triggered, provides little guidance about which states require supervision, and wastes demonstrator effort on redundant parts of the task where the policy already performs well. In this paper, we propose an active, continual learning par…",
          "summaryCn": "提出RECALL范式，通过主动不确定性引导恢复数据收集实现VLAs的持续学习，发现微调仅恢复数据会导致灾难性遗忘，并评估重放和弹性权重巩固等缓解技术的权衡。",
          "reasonCn": "聚焦VLA的主动持续学习，利用不确定性引导经验收集改进策略适应。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.23617v1",
          "pdfLink": "https://arxiv.org/pdf/2606.23617v1",
          "published": "2026-06-22T17:12:50Z",
          "updated": "2026-06-22T17:12:50Z",
          "authors": [
            "Ulas Berk Karli",
            "Tesca Fitzgerald"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.22836v1",
          "title": "Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA",
          "summary": "We present Cloak, a training recipe that endows a Vision-Language-Action (VLA) model with zero-shot cross-embodiment transfer by cloaking the end-effector from its own wrist camera. The end-effector occupies a large and consistent region of the wrist view and masking it allows for embodiment-agnostic visual reasoning. Cloak renders a mask in simulation from the robot's known geometry, accurately and in real time, with no segmentation or generative models.",
          "summaryCn": "提出Cloak训练方法，通过屏蔽腕部摄像头中的末端执行器使VLA实现零样本跨形态迁移，无需任何新形态数据。在单夹爪数据集训练后成功迁移至五指手等从未见过的形态。",
          "reasonCn": "改进VLA训练的视觉掩码策略，实现具身无关的跨形态泛化。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.22836v1",
          "pdfLink": "https://arxiv.org/pdf/2606.22836v1",
          "published": "2026-06-22T04:16:05Z",
          "updated": "2026-06-22T04:16:05Z",
          "authors": [
            "Michael Piseno",
            "Guy Tevet",
            "C. Karen Liu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27144v1",
          "title": "PAMAE: Phase-Aware-MoE Action Experts Towards Reliable Flow-Matching Vision-Language-Action Policies",
          "summary": "Reliable action generation for multi-stage robotic manipulation remains challenging for Vision-Language-Action (VLA) models. While existing flow-matching VLA policies offer strong multimodal grounding and generalization, they typically employ a single shared action expert, limiting their ability to capture phase-specific control patterns across distinct execution stages. We propose a plug-and-play Phase-Aware Mixture-of-Experts Action Module (PAMAE), as a step towards more reliable phase-consistent action generati…",
          "summaryCn": "提出PAMAE即插即用模块，用相位感知MoE替代单一动作专家，通过阶段预测和路由对齐目标优化流匹配VLA。在多阶段操作任务上成功率提升9.2%，验证了阶段一致性的价值。",
          "reasonCn": "引入相位感知专家混合改进VLA的动作解码，增强多阶段操作一致性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27144v1",
          "published": "2026-06-25T15:17:43Z",
          "updated": "2026-06-25T15:17:43Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 78,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260628",
      "dateLabel": "2026-06-28",
      "generatedAt": "2026-06-28T02:50:40.286775+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.24472v1",
          "title": "G$^3$VLA: Geometric inductive bias for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have made rapid progress in generalist robot manipulation by harnessing semantic knowledge from pretrained vision-language backbones, but their visual tokens remain grounded in 2D image coordinates rather than the calibrated geometry of the robot's cameras -- a mismatch especially pronounced in multi-camera setups, where views are coupled by known intrinsics and extrinsics yet processed as independent images. We propose G$^3$VLA, a camera-aware geometric module that injects cali…",
          "summaryCn": "G³VLA提出一个相机感知的几何模块，通过射线嵌入、投影位置编码和双向跨视图融合，将标定结构注入VLA的视觉token流。该方法在不改变动作空间的前提下，提升了VLA在多视角和物体敏感任务上的性能，并在多个具身环境中验证了有效性。",
          "reasonCn": "提出为预训练VLA模型注入相机几何偏差的模块，直接改进视觉-语言-动作策略的空间定位。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24472v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24472v1",
          "published": "2026-06-23T12:02:36Z",
          "updated": "2026-06-23T12:02:36Z",
          "authors": [
            "Yue Peng",
            "Yongzhe Zhao",
            "Artur Habuda",
            "Khuyen Pham",
            "Yanheng Zhu",
            "Tran Nguyen Le",
            "Fares Abu-Dakka",
            "Li Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.27146v1",
          "title": "PhysReflect-VLA: Physical Feasibility and Self-Reflective Regulation for Reliable Vision-Language-Action Policies",
          "summary": "Long-horizon robotic manipulation is highly sensitive to physically infeasible transitions, contact-induced disturbances, and the lack of effective self-correction during execution. Although Vision-Language-Action (VLA) models provide strong task grounding through multimodal learning, they typically generate actions in a feed-forward manner without explicitly checking physical feasibility or diagnosing execution errors online. We present PhysReflect-VLA, a plug-and-play execution-time reliability framework that au…",
          "summaryCn": "PhysReflect-VLA为VLA策略引入可行性操作符和反思模块，在闭环控制中评估动作的物理一致性和执行错误，生成纠正指导。实验显示该方法在多阶段接触丰富的操作任务中平均成功率提升5.4%，并证明可行性检查和反思校正对执行鲁棒性均有贡献。",
          "reasonCn": "提出在VLA策略中加入物理可行性评估和自反思的框架，直接提升视觉-语言-动作策略的可靠性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27146v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27146v1",
          "published": "2026-06-25T15:18:10Z",
          "updated": "2026-06-25T15:18:10Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Weijun Li",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.27079v1",
          "title": "ForesightSafety-VLA: A Unified Diagnostic Safety Benchmark for Vision-Language-Action Models",
          "summary": "In embodied intelligence, safety is a prerequisite for reliable robot deployment in the physical world. Current vision-language-action (VLA) models continue to advance toward general-purpose task capability, yet their embodied safety limits remain poorly understood. To address this gap, we introduce ForesightSafety-VLA, a diagnostic benchmark that makes safety the primary evaluation target for VLA systems.",
          "summaryCn": "ForesightSafety-VLA构建了一个13类安全分类体系，并控制场景结构、语言指令和视觉观测三种变化维度，诊断VLA模型的失败来源。除任务成功外，还通过累积安全代价和风险暴露时间等过程级指标，实现了全面的安全评估，揭示当前VLA的安全短板。",
          "reasonCn": "提出针对VLA模型的统一安全基准，系统评估视觉-语言-动作策略的安全性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27079v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27079v1",
          "published": "2026-06-25T14:19:36Z",
          "updated": "2026-06-25T14:19:36Z",
          "authors": [
            "Mingyang Lyu",
            "Yinqian Sun",
            "Yiyang Jia",
            "Sicheng Shen",
            "Moquan Sha",
            "Huangrui Li",
            "Feifei Zhao",
            "Yi Zeng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.26663v1",
          "title": "Tactile-WAM: Touch-Aware World Action Model with Tactile Asymmetric Attention",
          "summary": "World Action Models (WAMs) generate actions together with predicted futures, offering a powerful interface for robot decision making. In contact-rich manipulation, however, visually plausible futures can be physically incomplete: insertion, assembly, search, and reorientation often depend on slip, jamming, contact normals, or small alignment errors that are weakly visible or hidden in RGB. A natural solution is to predict future tactile states, however, we identify tactile pollution, a failure mode where unconstra…",
          "summaryCn": "Tactile-WAM通过触觉非对称注意力机制解决了触觉注入导致的视觉退化问题，在接触丰富的操作任务中大幅提升成功率。该模型保护视觉预测的同时，将接触信息用于动作生成，在ManiFeel数据集上平均成功率提升38.9%，接触任务提升86%。",
          "reasonCn": "提出触觉感知的世界动作模型，直接将触觉信息用于动作生成和未来预测。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26663v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26663v1",
          "published": "2026-06-25T06:54:56Z",
          "updated": "2026-06-25T06:54:56Z",
          "authors": [
            "Siyu Wu",
            "Linjing You",
            "Junjie Zhu",
            "Yaozu Liu",
            "Changhao Zhang",
            "Jian Liu",
            "Weiqiang Wang",
            "Qi Li",
            "Jituo Li",
            "Hengshuang Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.25800v1",
          "title": "ROAD-VLA: Robust Online Adaptation via Self-Distillation for Vision-Language-Action Models",
          "summary": "Effective online adaptation of vision-language-action (VLA) models remains challenging, as sparse rewards provide weak supervision for high-dimensional autoregressive action policies. Although self-distillation can in principle provide denser training signals, we find that text-based privileged teachers conditioned on demonstrations, retrieved experiences, or high-level plans are ineffective for VLA adaptation, exposing a modality gap between symbolic guidance and low-level robot actions. We propose ROAD-VLA, an a…",
          "summaryCn": "ROAD-VLA通过优势引导的自蒸馏，在动作空间构造近端教师，将稀疏奖励转化为稠密的token级监督，实现VLA的在线适应。在七个模拟操作环境中，该方法优于PPO，显示了在分布偏移下鲁棒的在线适应能力。",
          "reasonCn": "提出VLA模型的鲁棒在线自适应框架，利用动作空间的自蒸馏提高适应效率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25800v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25800v1",
          "published": "2026-06-24T13:17:59Z",
          "updated": "2026-06-24T13:17:59Z",
          "authors": [
            "Kejing Wang",
            "Toan Nguyen",
            "Minh Hoang Nguyen",
            "Simon Khan",
            "Flora D. Salim"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.25591v1",
          "title": "WOLF-VLA: Whole-Body Humanoid Optimal Locomotion Framework for Vision-Language-Action Learning",
          "summary": "Vision-Language-Action (VLA) models have recently demonstrated strong generalization in robotic manipulation, yet their applicability to whole-body, contact-rich humanoid locomotion remains severely underexplored due to data scarcity, the absence of dynamically consistent demonstrations, and the difficulty of encoding optimality and safety in learning-based pipelines. This work introduces a unified framework WOLF-VLA that integrates whole-body optimal-control (OC) motion synthesis with large-scale multi-modal data…",
          "summaryCn": "WOLF-VLA构建了一个包含六类运动任务的全身人形机器人数据集，并训练VLA生成自然语言指令下的运动策略。该框架结合最优控制合成动作，使策略在多种环境和初始条件下表现出强推理能力和鲁棒性，并计划开源数据集和模型。",
          "reasonCn": "将VLA应用于全身人形机器人运动，结合最优控制合成动态可行的动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25591v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25591v1",
          "published": "2026-06-24T08:59:59Z",
          "updated": "2026-06-24T08:59:59Z",
          "authors": [
            "Melya Boukheddimi",
            "Omar Adjali",
            "Daniel Sontag",
            "Frank Kirchner"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.22966v1",
          "title": "Attacking the Trusted Imagination: Oracle-Level Integrity Attacks on Imagine-then-Act World Models",
          "summary": "Many recent vision-language-action (VLA) policies adopt an imagine-then-act design. A world-action model (WAM) first imagines a short future as a latent trajectory z~, on which the action is then conditioned. We identify this trusted imagination, rather than the reactive policy, as the exposed attack surface.",
          "summaryCn": "本文揭示VLA策略中“先想象后执行”设计的安全性漏洞，指出攻击者可轻易破坏世界动作模型生成的未来想象轨迹。通过梯度攻击和检测器设计，实验表明无目标破坏效率是随机的60倍，而检测器达到AUC 1.0，反应策略本身仍具鲁棒性。",
          "reasonCn": "研究想象-执行VLA/WAM框架下的完整性攻击，关注世界动作模型的想象组件。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.22966v1",
          "pdfLink": "https://arxiv.org/pdf/2606.22966v1",
          "published": "2026-06-22T07:45:34Z",
          "updated": "2026-06-22T07:45:34Z",
          "authors": [
            "Linghan Chen",
            "Kaiyan Ji",
            "Minyu Guo"
          ],
          "categories": [
            "cs.LG",
            "cs.AI"
          ],
          "heuristicScore": 103,
          "llmTotalScore": 103
        },
        {
          "id": "2606.24051v1",
          "title": "DriveStack-VLA: Render-Teacher Alignment for BEV-Based DeepStack Vision-Language-Action Model",
          "summary": "Vision-Language-Action driving models convert a pretrained Vision-Language Model into a driving policy, allowing them to use world knowledge and follow language guidances. However, existing VLA driving models still lack driving-oriented spatial intelligence: their policies are mainly grounded on perspective image tokens and language priors, while precise motion planning requires metric geometry, top-down scene structure, and attention to safety-critical perceptual cues. This limitation makes current models vulnera…",
          "summaryCn": "DriveStack-VLA在VLM解码器中注入鸟瞰图表示，并通过渲染-教师对齐使模型关注安全关键的感知线索。此外，通过自批评轨迹选择模块，在NAVSIM和闭环Bench2Drive上取得先进性能，显著增强了驾驶策略的空间推理和安全性。",
          "reasonCn": "提出面向自动驾驶的VLA模型，结合BEV表示和渲染-教师对齐提升空间智能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24051v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24051v1",
          "published": "2026-06-23T01:40:54Z",
          "updated": "2026-06-23T01:40:54Z",
          "authors": [
            "Jingke Wang",
            "Zhenru Zhao",
            "Shuangming Lei",
            "Hao Su",
            "Yuehao Huang",
            "Yijia Xie",
            "Kai Tang",
            "Guanglin Xu",
            "AiXue Ye",
            "Yukai Ma"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 93,
          "llmTotalScore": 93
        },
        {
          "id": "2606.26025v2",
          "title": "In-Context World Modeling for Robotic Control",
          "summary": "Modern Vision-Language-Action (VLA) models often fail to generalize to novel setups, such as altered camera viewpoints or robot morphologies, because they are typically conditioned only on current observations and language instructions. By ignoring the underlying system configuration as a variable, these models implicitly assume a fixed execution context encountered during training, necessitating data-intensive fine-tuning for any new environment. In this work, we introduce In-Context World Modeling (ICWM), a fram…",
          "summaryCn": "ICWM让机器人政策在执行任务前先进行短的历史交互，不依赖外部参数更新即可推断相机位姿等系统变量。该方法在模拟和真实机器人上大幅超越标准VLA基线，尤其在新颖相机视角下，证明了内联世界建模对泛化的有效性。",
          "reasonCn": "提出内联世界建模框架，使VLA通过交互历史推断系统配置，实现跨配置泛化。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.26025v2",
          "pdfLink": "https://arxiv.org/pdf/2606.26025v2",
          "published": "2026-06-24T16:53:36Z",
          "updated": "2026-06-25T01:51:45Z",
          "authors": [
            "Siyin Wang",
            "Junhao Shi",
            "Senyu Fei",
            "Zhaoyang Fu",
            "Li Ji",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 92
        },
        {
          "id": "2606.26006v1",
          "title": "FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation",
          "summary": "Vision-Language-Action (VLA) models are often constrained by the imitation ceiling imposed by sub-optimal data. While Reinforcement Learning (RL) fine-tuning can surpass this limit, it is notoriously sample inefficient. This challenge arises from two core issues: (1) catastrophic initial unlearning due to an unstable Q-function and (2) inefficient policy updates caused by low-quality exploration data, often forcing a reliance on costly human interventions.",
          "summaryCn": "FORCE通过价值校准的预热阶段稳定Q函数，并在在线阶段用其过滤低质量动作，实现高效微调。实验表明该方法在不依赖人类干预的情况下，成功率绝对提升79%，训练加速32.5%，并避免了常见的性能骤降。",
          "reasonCn": "提出VLA强化微调框架，通过价值校准预热和自蒸馏解决样本效率低的问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26006v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26006v1",
          "published": "2026-06-24T16:23:18Z",
          "updated": "2026-06-24T16:23:18Z",
          "authors": [
            "Shuyi Zhang",
            "Yunfan Lou",
            "Hongyang Cheng",
            "Yichen Guo",
            "Chuyao Fu",
            "Yaoxu Lyu",
            "Xiaojie Zhang",
            "Haoran Li",
            "Pengwei Wang",
            "Zhongyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.25215v1",
          "title": "Reflective VLA: In-Context Action Consequences Make VLAs Generalize",
          "summary": "Most vision-language-action (VLA) models are reactive: they predict the next action from the current instruction and observation, implicitly assuming that the current observation fully specifies the action-relevant state. In embodied control, however, embodiment-specific factors such as camera-to-robot geometry, robot calibration, or systematic actuation bias are often hard to identify from a single observation. As a result, reactive policies cannot reliably disambiguate these factors in general, overfitting to tr…",
          "summaryCn": "Reflective VLA利用观测-动作-后果三元组构成决策上下文，通过共享注意力在VLM中推理历史与当前观测，实现并行训练和实时推理。在LIBERO-Plus-Hard等泛化任务上大幅提升成功率，同时保持标准环境的性能。",
          "reasonCn": "提出反射式VLA，利用动作后果历史进行决策，提高分布外泛化能力。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25215v1",
          "published": "2026-06-23T22:23:35Z",
          "updated": "2026-06-23T22:23:35Z",
          "authors": [
            "Qing Lian",
            "Kent Yu",
            "Lei Zhang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2606.27355v1",
          "title": "RouterVLA: Turning Smoke Tests into Supervision for Heterogeneous VLA Selection",
          "summary": "We study whether pre-deployment evaluation rollouts can be reused to supervise policy selection. Robot teams routinely smoke test candidate vision-language-action (VLA) policies, then compress those trials into a global winner. RouterVLA evaluates this idea with outcome-disjoint cross-fitting: recorded probes build a profile for each frozen expert, and a separate trial scores the selected expert without entering its profile.",
          "summaryCn": "RouterVLA将部署前评估中的探测轨迹用于监督策略选择，通过结果分离的交叉拟合，使用简单的探测成功规则将LIBERO-Plus上的成功率从0.4686提升至0.6149。分析表明，仅标量剖面信息已足够，学得的打分器与规则无统计差异，路由收益主要源于集成选择而非模型容量。",
          "reasonCn": "提出重用冒烟测试数据为VLA选择提供监督，实现异质策略有效路由。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27355v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27355v1",
          "published": "2026-06-25T17:56:33Z",
          "updated": "2026-06-25T17:56:33Z",
          "authors": [
            "Xingyu Ren",
            "Chugang Yi",
            "Ge Ma",
            "Youran Sun"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.23085v1",
          "title": "Foresight: Failure Detection for Long-Horizon Robotic Manipulation with Action-Conditioned World Model Latents",
          "summary": "Long-horizon tasks are common in real-world robotic deployments, yet failure detection for such tasks remains underexplored. Detecting failures in long-horizon robotic tasks is particularly challenging because failure onset is often ambiguous and dense temporal annotations are typically unavailable. We present Foresight, a failure detection framework that monitors manipulation trajectories using latent representations from an action-conditioned world model.",
          "summaryCn": "Foresight使用动作条件世界模型的嵌入监控操作轨迹，仅需任务级成败标签即可训练。结合函数保形预测，在LIBERO-Long等仿真任务和真实双臂操作上进行验证，表明世界模型嵌入为长时域失败检测提供了可扩展的表征。",
          "reasonCn": "利用动作条件世界模型的潜在表示进行长序列操作失败检测，服务于VLA策略。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.23085v1",
          "pdfLink": "https://arxiv.org/pdf/2606.23085v1",
          "published": "2026-06-22T09:32:28Z",
          "updated": "2026-06-22T09:32:28Z",
          "authors": [
            "Haoran Zhang",
            "Yifu Lu",
            "Boyang Wang",
            "Xuhui Kang",
            "Yen-Ling Kuo",
            "Zezhou Cheng",
            "Mengdi Wang",
            "Odest Chadwicke Jenkins"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.27374v1",
          "title": "World Action Models Enable Continual Imitation Learning with Recurrent Generative Replays",
          "summary": "Going beyond predicting robot actions, World Action Models (WAMs) can also generate future visual observations. We build on this generative capability to propose Recurrent Generative Replay (REGEN), a continual imitation learning framework that synthesizes pseudo-replay trajectories, enabling a robot policy to rehearse previously learned tasks without storing their original human demonstrations. During continual adaptation, REGEN recursively queries the WAM to synthesize pseudo-replay trajectories conditioned only…",
          "summaryCn": "REGEN框架递归查询WAM生成伪回放轨迹，使机器人政策在不遗忘旧任务的情况下持续适应。实验表明，相比顺序微调，遗忘减少最高达50%，接近有回放数据的性能，证明WAM可作为免存储演示的连续学习底座。",
          "reasonCn": "利用世界动作模型的生成能力实现连续模仿学习，无需存储人类演示。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27374v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27374v1",
          "published": "2026-06-25T17:59:56Z",
          "updated": "2026-06-25T17:59:56Z",
          "authors": [
            "Manish Kumar Govind",
            "Dominick Reilly",
            "Smit Patel",
            "Hieu Le",
            "Srijan Das"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.26801v1",
          "title": "Improving Vision-Language-Action Model Fine-Tuning with Structured Stage and Keyframe Supervision",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for generalizable robotic manipulation. During fine-tuning, however, action supervision applies equally across all timesteps, without structured supervision on which manipulation stage the robot is in or what the next gripper-event target should be. This causes failures to concentrate around challenging gripper-event transitions.",
          "summaryCn": "StaKe从演示夹爪状态自动提取操纵阶段和过渡点目标，作为轻量辅助头丰富VLA表征。在双臂仿真和真实Franka任务上，成功率相对提升14%和56%，尤其在涉及夹爪事件的任务中改进显著，且不改变推理流程。",
          "reasonCn": "为VLA微调添加阶段分类和关键帧预测辅助监督，提升长序列任务性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26801v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26801v1",
          "published": "2026-06-25T09:38:11Z",
          "updated": "2026-06-25T09:38:11Z",
          "authors": [
            "Yuan Xu",
            "Yixiang Chen",
            "Kai Wang",
            "Jiabing Yang",
            "Peiyan Li",
            "Qisen Ma",
            "Yan Huang",
            "Liang Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.24448v1",
          "title": "Supervise What Survives: Geometry-Guided VLA Adaptation from Synthetic Robot Videos",
          "summary": "Vision-Language-Action (VLA) models require large-scale video-action pairs, yet real teleoperation remains scarce. While generated robot videos offer a scalable alternative, existing methods treat them as real robot data by recovering pseudo-actions from synthesized pixels. We argue that deriving low-level control from generated visuals is a mismatched abstraction.",
          "summaryCn": "GRA遵循不对称保留原则，仅从合成视频中提取末端执行器轨迹作为几何监督，通过辅助2D头路由到VLA视觉主干。真实演示控制动作头，微调时持续施加逐点损失，有效利用生成数据提升VLA适应性。",
          "reasonCn": "提出利用合成视频中保留的几何信息监督VLA视觉表征，避免伪动作噪声。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24448v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24448v1",
          "published": "2026-06-23T11:35:13Z",
          "updated": "2026-06-23T11:35:13Z",
          "authors": [
            "Danze Chen",
            "Yanzhe Chen",
            "Qiming Huang",
            "Zhijun Cao",
            "Chen Gao",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.23617v1",
          "title": "RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models are commonly fine-tuned through passive imitation learning, where additional demonstrations are collected for tasks where the policy performs poorly. This approach incurs several downsides: it requires the robot to fail before data collection is triggered, provides little guidance about which states require supervision, and wastes demonstrator effort on redundant parts of the task where the policy already performs well. In this paper, we propose an active, continual learning par…",
          "summaryCn": "RECALL探索主动持续学习在自回归VLA中的应用，发现主动采集恢复数据比被动收集更高效，但会导致灾难性遗忘。通过评估回放和弹性权重巩固等技术，揭示了在VLA中平衡适应性与记忆保持的权衡。",
          "reasonCn": "提出主动终身学习范式，利用不确定性引导的恢复演示提高VLA适应效率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.23617v1",
          "pdfLink": "https://arxiv.org/pdf/2606.23617v1",
          "published": "2026-06-22T17:12:50Z",
          "updated": "2026-06-22T17:12:50Z",
          "authors": [
            "Ulas Berk Karli",
            "Tesca Fitzgerald"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.27144v1",
          "title": "PAMAE: Phase-Aware-MoE Action Experts Towards Reliable Flow-Matching Vision-Language-Action Policies",
          "summary": "Reliable action generation for multi-stage robotic manipulation remains challenging for Vision-Language-Action (VLA) models. While existing flow-matching VLA policies offer strong multimodal grounding and generalization, they typically employ a single shared action expert, limiting their ability to capture phase-specific control patterns across distinct execution stages. We propose a plug-and-play Phase-Aware Mixture-of-Experts Action Module (PAMAE), as a step towards more reliable phase-consistent action generati…",
          "summaryCn": "PAMAE用稀疏专家混合替换流匹配VLA的单一动作专家，通过阶段感知路由器分配生成，辅以阶段预测头和路由对齐目标。多阶段操作仿真中任务成功率提升9.2%，实验证明阶段监督路由和分阶段优化至关重要。",
          "reasonCn": "引入阶段感知的混合专家动作模块，提升流匹配VLA策略的阶段一致性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27144v1",
          "published": "2026-06-25T15:17:43Z",
          "updated": "2026-06-25T15:17:43Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.22836v1",
          "title": "Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA",
          "summary": "We present Cloak, a training recipe that endows a Vision-Language-Action (VLA) model with zero-shot cross-embodiment transfer by cloaking the end-effector from its own wrist camera. The end-effector occupies a large and consistent region of the wrist view and masking it allows for embodiment-agnostic visual reasoning. Cloak renders a mask in simulation from the robot's known geometry, accurately and in real time, with no segmentation or generative models.",
          "summaryCn": "Cloak在仿真中实时渲染掩码，训练中数据增强使VLA对未见执行器泛化。仅用平行爪数据训练，Cloak-VLA零样本迁移到其他夹爪、手臂和五指手，并保持源性能，解耦了腕部视图的形态依赖。",
          "reasonCn": "通过遮蔽腕部相机中的末端执行器实现VLA的零样本跨形态迁移。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.22836v1",
          "pdfLink": "https://arxiv.org/pdf/2606.22836v1",
          "published": "2026-06-22T04:16:05Z",
          "updated": "2026-06-22T04:16:05Z",
          "authors": [
            "Michael Piseno",
            "Guy Tevet",
            "C. Karen Liu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.25985v1",
          "title": "Action ControlNet: A Lightweight Delay-Aware Adapter for Smooth Asynchronous Control in Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have shown strong potential for general-purpose robot manipulation, but their inference latency remains a major obstacle to stable high-frequency control. Asynchronous execution mitigates this bottleneck by overlapping policy inference with action execution, yet the next action chunk is still predicted from stale observations while the robot continues to move. Direct chunk stitching therefore introduces handoff discontinuities, action jitter, and failures in contact-rich manipul…",
          "summaryCn": "Action ControlNet将已执行动作的后缀作为残差条件输入冻结的动作头，以极少的参数实现平滑的异步控制。在Kinetix和真实机械臂上，提高了推理延迟下的鲁棒性，轨迹比直接拼接更平滑。",
          "reasonCn": "提出轻量级延迟感知适配器，解决VLA异步执行中的动作间断问题。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25985v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25985v1",
          "published": "2026-06-24T15:53:43Z",
          "updated": "2026-06-24T15:53:43Z",
          "authors": [
            "Tiecheng Guo",
            "Meng Guo"
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
      "dateKey": "20260627",
      "dateLabel": "2026-06-27",
      "generatedAt": "2026-06-27T02:44:15.539654+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.25800v1",
          "title": "ROAD-VLA: Robust Online Adaptation via Self-Distillation for Vision-Language-Action Models",
          "summary": "Effective online adaptation of vision-language-action (VLA) models remains challenging, as sparse rewards provide weak supervision for high-dimensional autoregressive action policies. Although self-distillation can in principle provide denser training signals, we find that text-based privileged teachers conditioned on demonstrations, retrieved experiences, or high-level plans are ineffective for VLA adaptation, exposing a modality gap between symbolic guidance and low-level robot actions. We propose ROAD-VLA, an a…",
          "summaryCn": "本文提出ROAD-VLA，通过优势引导的自蒸馏框架在动作空间构建近端教师，将稀疏奖励转为密集令牌级监督，实现VLA模型鲁棒在线适应，在多个操作环境超越PPO。",
          "reasonCn": "提出针对VLA模型的在线自适应方法，利用优势引导的自蒸馏将稀疏奖励转化为密集监督，提升机器人操作性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25800v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25800v1",
          "published": "2026-06-24T13:17:59Z",
          "updated": "2026-06-24T13:17:59Z",
          "authors": [
            "Kejing Wang",
            "Toan Nguyen",
            "Minh Hoang Nguyen",
            "Simon Khan",
            "Flora D. Salim"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 112,
          "llmTotalScore": 112
        },
        {
          "id": "2606.24472v1",
          "title": "G$^3$VLA: Geometric inductive bias for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have made rapid progress in generalist robot manipulation by harnessing semantic knowledge from pretrained vision-language backbones, but their visual tokens remain grounded in 2D image coordinates rather than the calibrated geometry of the robot's cameras -- a mismatch especially pronounced in multi-camera setups, where views are coupled by known intrinsics and extrinsics yet processed as independent images. We propose G$^3$VLA, a camera-aware geometric module that injects cali…",
          "summaryCn": "本文提出G^3VLA，通过内参条件射线嵌入、投影位置编码和双向跨视角融合，将校准几何结构注入VLA的视觉令牌流，在多个基准和真机实验中提升空间敏感任务的成功率。",
          "reasonCn": "为预训练VLA模型注入相机感知几何模块，增强空间推理，提升多相机操作任务性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24472v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24472v1",
          "published": "2026-06-23T12:02:36Z",
          "updated": "2026-06-23T12:02:36Z",
          "authors": [
            "Yue Peng",
            "Yongzhe Zhao",
            "Artur Habuda",
            "Khuyen Pham",
            "Yanheng Zhu",
            "Tran Nguyen Le",
            "Fares Abu-Dakka",
            "Li Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 112,
          "llmTotalScore": 112
        },
        {
          "id": "2606.27146v1",
          "title": "PhysReflect-VLA: Physical Feasibility and Self-Reflective Regulation for Reliable Vision-Language-Action Policies",
          "summary": "Long-horizon robotic manipulation is highly sensitive to physically infeasible transitions, contact-induced disturbances, and the lack of effective self-correction during execution. Although Vision-Language-Action (VLA) models provide strong task grounding through multimodal learning, they typically generate actions in a feed-forward manner without explicitly checking physical feasibility or diagnosing execution errors online. We present PhysReflect-VLA, a plug-and-play execution-time reliability framework that au…",
          "summaryCn": "本文提出PhysReflect-VLA，通过可行性算子、动作解释算子和LLM反思模块闭环调控VLA策略，在真实世界多阶段操作中提升任务成功率5.4%，增强执行鲁棒性。",
          "reasonCn": "为VLA策略添加物理可行性评估与自反思调节的即插即用框架，提高长序列接触丰富任务的可靠性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27146v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27146v1",
          "published": "2026-06-25T15:18:10Z",
          "updated": "2026-06-25T15:18:10Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Weijun Li",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.27079v1",
          "title": "ForesightSafety-VLA: A Unified Diagnostic Safety Benchmark for Vision-Language-Action Models",
          "summary": "In embodied intelligence, safety is a prerequisite for reliable robot deployment in the physical world. Current vision-language-action (VLA) models continue to advance toward general-purpose task capability, yet their embodied safety limits remain poorly understood. To address this gap, we introduce ForesightSafety-VLA, a diagnostic benchmark that makes safety the primary evaluation target for VLA systems.",
          "summaryCn": "本文提出ForesightSafety-VLA基准，定义13类安全分类，从物理交互、指令和视觉三个维度诊断VLA模型的故障源，通过累积安全成本和风险暴露时间等指标评估具身智能体的安全性。",
          "reasonCn": "提出针对VLA模型的安全诊断基准，涉及视觉、语言、动作输入输出，用于评估VLA的安全性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27079v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27079v1",
          "published": "2026-06-25T14:19:36Z",
          "updated": "2026-06-25T14:19:36Z",
          "authors": [
            "Mingyang Lyu",
            "Yinqian Sun",
            "Yiyang Jia",
            "Sicheng Shen",
            "Moquan Sha",
            "Huangrui Li",
            "Feifei Zhao",
            "Yi Zeng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.26663v1",
          "title": "Tactile-WAM: Touch-Aware World Action Model with Tactile Asymmetric Attention",
          "summary": "World Action Models (WAMs) generate actions together with predicted futures, offering a powerful interface for robot decision making. In contact-rich manipulation, however, visually plausible futures can be physically incomplete: insertion, assembly, search, and reorientation often depend on slip, jamming, contact normals, or small alignment errors that are weakly visible or hidden in RGB. A natural solution is to predict future tactile states, however, we identify tactile pollution, a failure mode where unconstra…",
          "summaryCn": "本文提出Tactile-WAM，针对接触丰富操作中视觉预测不足，引入触觉预测和触觉非对称注意力机制（TAAM），通过VideoClean掩码和触觉偏差，在ManiFeel上平均成功率提升38.9%，接触丰富任务提升86%。",
          "reasonCn": "提出触觉感知的世界动作模型，利用非对称注意力机制将触觉信息用于动作生成，提升接触丰富操作任务成功率。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26663v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26663v1",
          "published": "2026-06-25T06:54:56Z",
          "updated": "2026-06-25T06:54:56Z",
          "authors": [
            "Siyu Wu",
            "Linjing You",
            "Junjie Zhu",
            "Yaozu Liu",
            "Changhao Zhang",
            "Jian Liu",
            "Weiqiang Wang",
            "Qi Li",
            "Jituo Li",
            "Hengshuang Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 111,
          "llmTotalScore": 111
        },
        {
          "id": "2606.25591v1",
          "title": "WOLF-VLA: Whole-Body Humanoid Optimal Locomotion Framework for Vision-Language-Action Learning",
          "summary": "Vision-Language-Action (VLA) models have recently demonstrated strong generalization in robotic manipulation, yet their applicability to whole-body, contact-rich humanoid locomotion remains severely underexplored due to data scarcity, the absence of dynamically consistent demonstrations, and the difficulty of encoding optimality and safety in learning-based pipelines. This work introduces a unified framework WOLF-VLA that integrates whole-body optimal-control (OC) motion synthesis with large-scale multi-modal data…",
          "summaryCn": "本文提出WOLF-VLA，整合全身最优控制运动合成与大规模多模态数据集，训练VLA模型根据自然语言指令生成人形机器人运动策略，在多种任务中展现鲁棒性。",
          "reasonCn": "为人形机器人全身运动构建VLA框架，结合最优控制合成动态可行轨迹和多模态数据集，实现从语言指令到运动策略的生成。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25591v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25591v1",
          "published": "2026-06-24T08:59:59Z",
          "updated": "2026-06-24T08:59:59Z",
          "authors": [
            "Melya Boukheddimi",
            "Omar Adjali",
            "Daniel Sontag",
            "Frank Kirchner"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.22136v2",
          "title": "Wh0: Generative World Models as Scalable Sources of Egocentric Human Hand Manipulation Data",
          "summary": "Scaling dexterous manipulation requires generalization across objects, scenes, and tasks, yet existing data sources face a trade-off between scale and scene/embodiment alignment: teleoperation data is well aligned with robot deployment but expensive to collect; simulation is scalable but limited by the sim-to-real gap; and real egocentric videos scale effectively but remain misaligned with robot deployment. We propose Wh0, a framework that uses generative video world models as scalable and controllable sources of…",
          "summaryCn": "本文提出Wh0框架，利用生成式世界模型产生人手交互视频数据集，通过手部运动重建和视觉编辑将其转换为机器人训练监督，与少量真实数据协同训练，将零样本成功率从8.3%提升至38.9%。",
          "reasonCn": "利用生成式世界模型生成第一人称人手操作数据，扩充数据以训练VLA模型，结合了世界模型和VLA。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.22136v2",
          "pdfLink": "https://arxiv.org/pdf/2606.22136v2",
          "published": "2026-06-20T16:31:40Z",
          "updated": "2026-06-23T09:28:18Z",
          "authors": [
            "Yangtao Chen",
            "Zixuan Chen",
            "Peiyang Wang",
            "Yong-Lu Li",
            "Jing Huo",
            "Jieqi Shi",
            "Yang Gao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.24051v1",
          "title": "DriveStack-VLA: Render-Teacher Alignment for BEV-Based DeepStack Vision-Language-Action Model",
          "summary": "Vision-Language-Action driving models convert a pretrained Vision-Language Model into a driving policy, allowing them to use world knowledge and follow language guidances. However, existing VLA driving models still lack driving-oriented spatial intelligence: their policies are mainly grounded on perspective image tokens and language priors, while precise motion planning requires metric geometry, top-down scene structure, and attention to safety-critical perceptual cues. This limitation makes current models vulnera…",
          "summaryCn": "本文提出DriveStack-VLA，在大型VLM骨干中注入BEV表示，通过Render-Teacher Alignment对齐感知焦点，并引入自批评模块进行多模态轨迹选择与精炼，在NAVSIM和闭环Bench2Drive上取得领先成绩。",
          "reasonCn": "提出用于自动驾驶的VLA模型，结合BEV表示和渲染-教师对齐，提升空间理解和轨迹规划。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24051v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24051v1",
          "published": "2026-06-23T01:40:54Z",
          "updated": "2026-06-23T01:40:54Z",
          "authors": [
            "Jingke Wang",
            "Zhenru Zhao",
            "Shuangming Lei",
            "Hao Su",
            "Yuehao Huang",
            "Yijia Xie",
            "Kai Tang",
            "Guanglin Xu",
            "AiXue Ye",
            "Yukai Ma"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 95,
          "llmTotalScore": 95
        },
        {
          "id": "2606.26025v2",
          "title": "In-Context World Modeling for Robotic Control",
          "summary": "Modern Vision-Language-Action (VLA) models often fail to generalize to novel setups, such as altered camera viewpoints or robot morphologies, because they are typically conditioned only on current observations and language instructions. By ignoring the underlying system configuration as a variable, these models implicitly assume a fixed execution context encountered during training, necessitating data-intensive fine-tuning for any new environment. In this work, we introduce In-Context World Modeling (ICWM), a fram…",
          "summaryCn": "本文提出In-Context World Modeling (ICWM)，将系统辨识视为上下文适应问题，利用任务无关的交互历史让VLA模型隐式捕捉世界动态，无需参数更新即可适应新环境，在仿真和真机实验中显著优于标准VLA基线。",
          "reasonCn": "提出上下文世界建模框架，使VLA策略能从自生成交互历史推断系统变量，实现对新相机视点等配置的适应。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.26025v2",
          "pdfLink": "https://arxiv.org/pdf/2606.26025v2",
          "published": "2026-06-24T16:53:36Z",
          "updated": "2026-06-25T01:51:45Z",
          "authors": [
            "Siyin Wang",
            "Junhao Shi",
            "Senyu Fei",
            "Zhaoyang Fu",
            "Li Ji",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 94,
          "llmTotalScore": 94
        },
        {
          "id": "2606.26006v1",
          "title": "FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation",
          "summary": "Vision-Language-Action (VLA) models are often constrained by the imitation ceiling imposed by sub-optimal data. While Reinforcement Learning (RL) fine-tuning can surpass this limit, it is notoriously sample inefficient. This challenge arises from two core issues: (1) catastrophic initial unlearning due to an unstable Q-function and (2) inefficient policy updates caused by low-quality exploration data, often forcing a reliance on costly human interventions.",
          "summaryCn": "本文提出FORCE，一个三阶段框架，通过价值校准预热减轻Q函数分布偏移，利用校准Q函数过滤低质量动作进行策略更新，实现在仿真和真机任务上79%的绝对成功率提升，且无需人工干预。",
          "reasonCn": "提出高效VLA强化微调框架，通过价值校准预热和自蒸馏解决样本效率低问题，提升机器人操作成功率。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26006v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26006v1",
          "published": "2026-06-24T16:23:18Z",
          "updated": "2026-06-24T16:23:18Z",
          "authors": [
            "Shuyi Zhang",
            "Yunfan Lou",
            "Hongyang Cheng",
            "Yichen Guo",
            "Chuyao Fu",
            "Yaoxu Lyu",
            "Xiaojie Zhang",
            "Haoran Li",
            "Pengwei Wang",
            "Zhongyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 89,
          "llmTotalScore": 89
        },
        {
          "id": "2606.25215v1",
          "title": "Reflective VLA: In-Context Action Consequences Make VLAs Generalize",
          "summary": "Most vision-language-action (VLA) models are reactive: they predict the next action from the current instruction and observation, implicitly assuming that the current observation fully specifies the action-relevant state. In embodied control, however, embodiment-specific factors such as camera-to-robot geometry, robot calibration, or systematic actuation bias are often hard to identify from a single observation. As a result, reactive policies cannot reliably disambiguate these factors in general, overfitting to tr…",
          "summaryCn": "本文提出Reflective VLA，通过记录执行后的场景变化，将观察-动作-后果三元组作为条件输入，使模型推理过去经验，在分布偏移下显著提升成功率，同时保持原位性能。",
          "reasonCn": "提出Reflective VLA，利用观察-动作-后果三元组作为上下文，使VLA策略能适应部署环境差异，提升泛化能力。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25215v1",
          "published": "2026-06-23T22:23:35Z",
          "updated": "2026-06-23T22:23:35Z",
          "authors": [
            "Qing Lian",
            "Kent Yu",
            "Lei Zhang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 87
        },
        {
          "id": "2606.27355v1",
          "title": "RouterVLA: Turning Smoke Tests into Supervision for Heterogeneous VLA Selection",
          "summary": "We study whether pre-deployment evaluation rollouts can be reused to supervise policy selection. Robot teams routinely smoke test candidate vision-language-action (VLA) policies, then compress those trials into a global winner. RouterVLA evaluates this idea with outcome-disjoint cross-fitting: recorded probes build a profile for each frozen expert, and a separate trial scores the selected expert without entering its profile.",
          "summaryCn": "本文提出RouterVLA，通过结果不相交的交叉拟合，将烟测试回的记录用于构建专家画像，实现VLA策略的透明选择，在LIBERO-Plus上将成功率从46.86%提升至61.49%。",
          "reasonCn": "提出利用预部署评估回放监督异质VLA策略选择的方法，提升系统整体成功率，属于VLA应用研究。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27355v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27355v1",
          "published": "2026-06-25T17:56:33Z",
          "updated": "2026-06-25T17:56:33Z",
          "authors": [
            "Xingyu Ren",
            "Chugang Yi",
            "Ge Ma",
            "Youran Sun"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 86,
          "llmTotalScore": 86
        },
        {
          "id": "2606.27374v1",
          "title": "World Action Models Enable Continual Imitation Learning with Recurrent Generative Replays",
          "summary": "Going beyond predicting robot actions, World Action Models (WAMs) can also generate future visual observations. We build on this generative capability to propose Recurrent Generative Replay (REGEN), a continual imitation learning framework that synthesizes pseudo-replay trajectories, enabling a robot policy to rehearse previously learned tasks without storing their original human demonstrations. During continual adaptation, REGEN recursively queries the WAM to synthesize pseudo-replay trajectories conditioned only…",
          "summaryCn": "本文提出REGEN，通过递归查询WAM合成伪回放轨迹，使策略在持续学习中重温先前任务，无需存储真实演示，在仿真和真机实验中减少遗忘达50%，接近特权经验回放性能。",
          "reasonCn": "利用世界动作模型生成伪回放轨迹实现持续模仿学习，以减轻灾难性遗忘，核心基于WAM的动作与视觉生成。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27374v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27374v1",
          "published": "2026-06-25T17:59:56Z",
          "updated": "2026-06-25T17:59:56Z",
          "authors": [
            "Manish Kumar Govind",
            "Dominick Reilly",
            "Smit Patel",
            "Hieu Le",
            "Srijan Das"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.26801v1",
          "title": "Improving Vision-Language-Action Model Fine-Tuning with Structured Stage and Keyframe Supervision",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for generalizable robotic manipulation. During fine-tuning, however, action supervision applies equally across all timesteps, without structured supervision on which manipulation stage the robot is in or what the next gripper-event target should be. This causes failures to concentrate around challenging gripper-event transitions.",
          "summaryCn": "本文提出StaKe，自动从演示夹爪状态派生阶段分类和关键帧预测作为辅助监督，丰富VLA训练时的表征，在双臂仿真和真机任务上分别相对提升14%和56%。",
          "reasonCn": "提出结构化阶段和关键帧监督辅助VLA微调，提升长序列任务中抓取事件过渡的性能。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26801v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26801v1",
          "published": "2026-06-25T09:38:11Z",
          "updated": "2026-06-25T09:38:11Z",
          "authors": [
            "Yuan Xu",
            "Yixiang Chen",
            "Kai Wang",
            "Jiabing Yang",
            "Peiyan Li",
            "Qisen Ma",
            "Yan Huang",
            "Liang Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 85,
          "llmTotalScore": 85
        },
        {
          "id": "2606.24448v1",
          "title": "Supervise What Survives: Geometry-Guided VLA Adaptation from Synthetic Robot Videos",
          "summary": "Vision-Language-Action (VLA) models require large-scale video-action pairs, yet real teleoperation remains scarce. While generated robot videos offer a scalable alternative, existing methods treat them as real robot data by recovering pseudo-actions from synthesized pixels. We argue that deriving low-level control from generated visuals is a mismatched abstraction.",
          "summaryCn": "本文提出GRA，依据非对称保留原理，从合成机器人视频中提取未来2D末端执行器路径点作为几何监督，引导VLA视觉表征对齐，解决合成数据控制信号丢失问题。",
          "reasonCn": "提出几何引导的表示对齐方法，利用合成视频中保留的几何信息监督VLA视觉感知，执行头仅用真实数据训练。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24448v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24448v1",
          "published": "2026-06-23T11:35:13Z",
          "updated": "2026-06-23T11:35:13Z",
          "authors": [
            "Danze Chen",
            "Yanzhe Chen",
            "Qiming Huang",
            "Zhijun Cao",
            "Chen Gao",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.23617v1",
          "title": "RECALL: Recovery Experience Collection for Active Lifelong Learning in Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models are commonly fine-tuned through passive imitation learning, where additional demonstrations are collected for tasks where the policy performs poorly. This approach incurs several downsides: it requires the robot to fail before data collection is triggered, provides little guidance about which states require supervision, and wastes demonstrator effort on redundant parts of the task where the policy already performs well. In this paper, we propose an active, continual learning par…",
          "summaryCn": "本文提出RECALL，一种VLA的主动持续学习框架，利用不确定性引导恢复演示，并评估重放和弹性权重巩固等方法，探索适应效率与知识保留的权衡。",
          "reasonCn": "提出VLA的主动持续学习范式，通过不确定性引导的恢复数据收集提高微调效率，并研究灾难性遗忘缓解技术。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.23617v1",
          "pdfLink": "https://arxiv.org/pdf/2606.23617v1",
          "published": "2026-06-22T17:12:50Z",
          "updated": "2026-06-22T17:12:50Z",
          "authors": [
            "Ulas Berk Karli",
            "Tesca Fitzgerald"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.22836v1",
          "title": "Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA",
          "summary": "We present Cloak, a training recipe that endows a Vision-Language-Action (VLA) model with zero-shot cross-embodiment transfer by cloaking the end-effector from its own wrist camera. The end-effector occupies a large and consistent region of the wrist view and masking it allows for embodiment-agnostic visual reasoning. Cloak renders a mask in simulation from the robot's known geometry, accurately and in real time, with no segmentation or generative models.",
          "summaryCn": "本文提出Cloak，通过从腕部相机视图中遮蔽末端执行器，使VLA模型进行具身无关的视觉推理，在单一夹爪数据集上训练后零样本地迁移到多种未见过的机器人。",
          "reasonCn": "提出在VLA训练中遮盖末端执行器的方法，实现零样本跨具身迁移，不改变模型架构。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.22836v1",
          "pdfLink": "https://arxiv.org/pdf/2606.22836v1",
          "published": "2026-06-22T04:16:05Z",
          "updated": "2026-06-22T04:16:05Z",
          "authors": [
            "Michael Piseno",
            "Guy Tevet",
            "C. Karen Liu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 82,
          "llmTotalScore": 82
        },
        {
          "id": "2606.27144v1",
          "title": "PAMAE: Phase-Aware-MoE Action Experts Towards Reliable Flow-Matching Vision-Language-Action Policies",
          "summary": "Reliable action generation for multi-stage robotic manipulation remains challenging for Vision-Language-Action (VLA) models. While existing flow-matching VLA policies offer strong multimodal grounding and generalization, they typically employ a single shared action expert, limiting their ability to capture phase-specific control patterns across distinct execution stages. We propose a plug-and-play Phase-Aware Mixture-of-Experts Action Module (PAMAE), as a step towards more reliable phase-consistent action generati…",
          "summaryCn": "本文提出PAMAE，替换原有动作专家为稀疏专家混合，引入阶段感知路由分配，通过两阶段训练优化，在仿真多阶段操作任务上成功率提升9.2%。",
          "reasonCn": "提出阶段感知的混合专家动作模块，增强流匹配VLA在多阶段操作中的阶段一致性动作生成。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27144v1",
          "published": "2026-06-25T15:17:43Z",
          "updated": "2026-06-25T15:17:43Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.25985v1",
          "title": "Action ControlNet: A Lightweight Delay-Aware Adapter for Smooth Asynchronous Control in Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have shown strong potential for general-purpose robot manipulation, but their inference latency remains a major obstacle to stable high-frequency control. Asynchronous execution mitigates this bottleneck by overlapping policy inference with action execution, yet the next action chunk is still predicted from stale observations while the robot continues to move. Direct chunk stitching therefore introduces handoff discontinuities, action jitter, and failures in contact-rich manipul…",
          "summaryCn": "本文提出Action ControlNet，将已执行动作后缀作为残差条件输入冻结的动作头，以极少量参数实现VLA在推理延迟下的平滑异步控制，在仿真和真机上提高鲁棒性。",
          "reasonCn": "提出轻量级延迟感知适配器Action ControlNet，改善VLA异步执行中的动作连续性，无需全策略重训。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25985v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25985v1",
          "published": "2026-06-24T15:53:43Z",
          "updated": "2026-06-24T15:53:43Z",
          "authors": [
            "Tiecheng Guo",
            "Meng Guo"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.27326v1",
          "title": "Hallucination in World Models is Predictable and Preventable",
          "summary": "Modern generative world models render increasingly realistic action-controllable futures, yet they frequently hallucinate: rollouts remain visually fluent while drifting from the ground-truth dynamics. We hypothesize that hallucination concentrates in low-coverage regions of the state-action space, where lightweight data-centric signals can both detect it and guide mitigation. To test this, we introduce MMBench2, a 427-hour, 210-task dataset for visual world modeling with ground-truth actions, rewards, and live si…",
          "summaryCn": "本文提出MMBench2数据集并训练3.5亿参数世界模型，识别三种幻觉模式并开发预测信号，通过覆盖感知采样和好奇心奖励进行缓解，实现高效微调适应新环境。",
          "reasonCn": "研究世界模型中的幻觉问题，提出基于数据覆盖的检测和缓解方法，并用于动作可控的未来预测。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27326v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27326v1",
          "published": "2026-06-25T17:38:45Z",
          "updated": "2026-06-25T17:38:45Z",
          "authors": [
            "Nicklas Hansen",
            "Xiaolong Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 77,
          "llmTotalScore": 77
        }
      ]
    },
    {
      "dateKey": "20260626",
      "dateLabel": "2026-06-26",
      "generatedAt": "2026-06-26T02:47:40.589508+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.27146v1",
          "title": "PhysReflect-VLA: Physical Feasibility and Self-Reflective Regulation for Reliable Vision-Language-Action Policies",
          "summary": "Long-horizon robotic manipulation is highly sensitive to physically infeasible transitions, contact-induced disturbances, and the lack of effective self-correction during execution. Although Vision-Language-Action (VLA) models provide strong task grounding through multimodal learning, they typically generate actions in a feed-forward manner without explicitly checking physical feasibility or diagnosing execution errors online. We present PhysReflect-VLA, a plug-and-play execution-time reliability framework that au…",
          "summaryCn": "PhysReflect-VLA为VLA策略引入物理可行性评估和结构化自我反思，提升多阶段接触丰富操作任务的可靠性。通过可行性算子和LLM反思模块实现闭环修正，在真实机器人任务上平均提高5.4%成功率。",
          "reasonCn": "论文提出物理可行性自反思框架，直接增强VLA策略的闭环控制，涉及视觉、语言和动作输出。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27146v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27146v1",
          "published": "2026-06-25T15:18:10Z",
          "updated": "2026-06-25T15:18:10Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Weijun Li",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27079v1",
          "title": "ForesightSafety-VLA: A Unified Diagnostic Safety Benchmark for Vision-Language-Action Models",
          "summary": "In embodied intelligence, safety is a prerequisite for reliable robot deployment in the physical world. Current vision-language-action (VLA) models continue to advance toward general-purpose task capability, yet their embodied safety limits remain poorly understood. To address this gap, we introduce ForesightSafety-VLA, a diagnostic benchmark that makes safety the primary evaluation target for VLA systems.",
          "summaryCn": "ForesightSafety-VLA提出面向VLA模型的诊断性安全基准，涵盖物理交互、指令和感知三大类13种安全类别。通过过程级风险指标（累积安全代价和风险暴露时间）诊断故障来源，发现视觉和场景变化比语言变化更易导致安全退化。",
          "reasonCn": "论文提供面向VLA模型的安全诊断基准，评估视觉-语言-动作策略的安全性。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27079v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27079v1",
          "published": "2026-06-25T14:19:36Z",
          "updated": "2026-06-25T14:19:36Z",
          "authors": [
            "Mingyang Lyu",
            "Yinqian Sun",
            "Yiyang Jia",
            "Sicheng Shen",
            "Moquan Sha",
            "Huangrui Li",
            "Feifei Zhao",
            "Yi Zeng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26663v1",
          "title": "Tactile-WAM: Touch-Aware World Action Model with Tactile Asymmetric Attention",
          "summary": "World Action Models (WAMs) generate actions together with predicted futures, offering a powerful interface for robot decision making. In contact-rich manipulation, however, visually plausible futures can be physically incomplete: insertion, assembly, search, and reorientation often depend on slip, jamming, contact normals, or small alignment errors that are weakly visible or hidden in RGB. A natural solution is to predict future tactile states, however, we identify tactile pollution, a failure mode where unconstra…",
          "summaryCn": "Tactile-WAM提出触觉感知的世界动作模型，通过非对称注意力机制解决触觉污染问题，保护视觉预测的同时利用触觉信息生成动作。在ManiFeel接触丰富任务上成功率提升38.9%。",
          "reasonCn": "论文提出触觉感知的世界动作模型，生成动作并预测未来，利用触觉信息提升接触丰富操作。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26663v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26663v1",
          "published": "2026-06-25T06:54:56Z",
          "updated": "2026-06-25T06:54:56Z",
          "authors": [
            "Siyu Wu",
            "Linjing You",
            "Junjie Zhu",
            "Yaozu Liu",
            "Changhao Zhang",
            "Jian Liu",
            "Weiqiang Wang",
            "Qi Li",
            "Jituo Li",
            "Hengshuang Zhao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27355v1",
          "title": "RouterVLA: Turning Smoke Tests into Supervision for Heterogeneous VLA Selection",
          "summary": "We study whether pre-deployment evaluation rollouts can be reused to supervise policy selection. Robot teams routinely smoke test candidate vision-language-action (VLA) policies, then compress those trials into a global winner. RouterVLA evaluates this idea with outcome-disjoint cross-fitting: recorded probes build a profile for each frozen expert, and a separate trial scores the selected expert without entering its profile.",
          "summaryCn": "RouterVLA利用预部署评估数据实现异构VLA策略选择，通过不连通的交叉拟合将试运行转化为监督信号。在LIBERO-Plus上显著提升成功率，表明调试价值可重用，而标量评分器容量未带来额外增益。",
          "reasonCn": "论文研究如何复用VLA策略的预部署评估数据来监督策略选择，涉及VLA系统。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27355v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27355v1",
          "published": "2026-06-25T17:56:33Z",
          "updated": "2026-06-25T17:56:33Z",
          "authors": [
            "Xingyu Ren",
            "Chugang Yi",
            "Ge Ma",
            "Youran Sun"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27374v1",
          "title": "World Action Models Enable Continual Imitation Learning with Recurrent Generative Replays",
          "summary": "Going beyond predicting robot actions, World Action Models (WAMs) can also generate future visual observations. We build on this generative capability to propose Recurrent Generative Replay (REGEN), a continual imitation learning framework that synthesizes pseudo-replay trajectories, enabling a robot policy to rehearse previously learned tasks without storing their original human demonstrations. During continual adaptation, REGEN recursively queries the WAM to synthesize pseudo-replay trajectories conditioned only…",
          "summaryCn": "提出REGEN框架，利用WAM的生成能力合成伪重放轨迹，实现持续模仿学习而无需存储原始演示。在模拟和真实操作中减少灾难性遗忘，性能接近需要真实重放数据的方法。",
          "reasonCn": "论文利用WAM的生成能力实现持续模仿学习的重放，核心是世界动作模型。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27374v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27374v1",
          "published": "2026-06-25T17:59:56Z",
          "updated": "2026-06-25T17:59:56Z",
          "authors": [
            "Manish Kumar Govind",
            "Dominick Reilly",
            "Smit Patel",
            "Hieu Le",
            "Srijan Das"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26801v1",
          "title": "Improving Vision-Language-Action Model Fine-Tuning with Structured Stage and Keyframe Supervision",
          "summary": "Vision-Language-Action (VLA) models have shown strong potential for generalizable robotic manipulation. During fine-tuning, however, action supervision applies equally across all timesteps, without structured supervision on which manipulation stage the robot is in or what the next gripper-event target should be. This causes failures to concentrate around challenging gripper-event transitions.",
          "summaryCn": "StaKe为VLA微调引入结构化阶段和关键帧监督，自动从夹爪状态导出阶段分类器和关键帧预测器，增强模型对操作阶段的理解。在双臂仿真和真实机器人任务上显著提升成功率，尤其对长时程任务效果更佳。",
          "reasonCn": "论文提出结构化阶段和关键帧监督来改进VLA微调，涉及视觉、语言和动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26801v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26801v1",
          "published": "2026-06-25T09:38:11Z",
          "updated": "2026-06-25T09:38:11Z",
          "authors": [
            "Yuan Xu",
            "Yixiang Chen",
            "Kai Wang",
            "Jiabing Yang",
            "Peiyan Li",
            "Qisen Ma",
            "Yan Huang",
            "Liang Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 87,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27144v1",
          "title": "PAMAE: Phase-Aware-MoE Action Experts Towards Reliable Flow-Matching Vision-Language-Action Policies",
          "summary": "Reliable action generation for multi-stage robotic manipulation remains challenging for Vision-Language-Action (VLA) models. While existing flow-matching VLA policies offer strong multimodal grounding and generalization, they typically employ a single shared action expert, limiting their ability to capture phase-specific control patterns across distinct execution stages. We propose a plug-and-play Phase-Aware Mixture-of-Experts Action Module (PAMAE), as a step towards more reliable phase-consistent action generati…",
          "summaryCn": "PAMAE为流匹配VLA策略引入阶段感知的混合专家动作模块，通过阶段路由器分配专家，提升多阶段操作中对相位相关控制模式的捕获。在仿真任务上成功率达9.2%提升，消融验证阶段监督路由和分阶段训练的重要性。",
          "reasonCn": "论文提出阶段感知的混合专家动作模块以增强VLA策略，涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27144v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27144v1",
          "published": "2026-06-25T15:17:43Z",
          "updated": "2026-06-25T15:17:43Z",
          "authors": [
            "Jiayu Yang",
            "Tao Yang",
            "Xiang Chang",
            "Fei Chao",
            "Changjing Shang",
            "Qiang Shen"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27326v1",
          "title": "Hallucination in World Models is Predictable and Preventable",
          "summary": "Modern generative world models render increasingly realistic action-controllable futures, yet they frequently hallucinate: rollouts remain visually fluent while drifting from the ground-truth dynamics. We hypothesize that hallucination concentrates in low-coverage regions of the state-action space, where lightweight data-centric signals can both detect it and guide mitigation. To test this, we introduce MMBench2, a 427-hour, 210-task dataset for visual world modeling with ground-truth actions, rewards, and live si…",
          "summaryCn": "通过MMBench2数据集训练世界模型，发现幻觉集中在状态-动作空间低覆盖区域，提出可检测信号和覆盖感知采样及好奇心奖励微调方法，减轻幻觉。表明幻觉是数据覆盖问题，可预测可预防。",
          "reasonCn": "论文研究世界模型幻觉的预测和预防，使用数据覆盖信号指导缓解，用于动作条件化预测。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27326v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27326v1",
          "published": "2026-06-25T17:38:45Z",
          "updated": "2026-06-25T17:38:45Z",
          "authors": [
            "Nicklas Hansen",
            "Xiaolong Wang"
          ],
          "categories": [
            "cs.LG",
            "cs.CV",
            "cs.RO"
          ],
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27325v1",
          "title": "Not All Actions Are Equal: Rethinking Conditioning for Dexterous World Model",
          "summary": "Recent advances in action-conditioned world models show promising progress in modeling complex interactions and forecasting future states under diverse action sequences. While these models are often driven by stronger visual representations and model capacity, action conditioning itself remains underexplored. Most existing approaches compress the entire action sequence into a single representation, which works well for low-DoF control but becomes less reliable in high-DoF scenarios.",
          "summaryCn": "DexAC-WM提出结构化动作条件化方法，通过动作分词和局部-全局调制保留维度语义，解决高自由度灵巧动作的异质性问题。引入语义分支提供对象-场景先验，提升世界模型对细粒度效果的建模。",
          "reasonCn": "论文提出灵巧世界模型的动作条件化方法，用于高自由度动作条件化视频预测。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27325v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27325v1",
          "published": "2026-06-25T17:36:35Z",
          "updated": "2026-06-25T17:36:35Z",
          "authors": [
            "Zizhao Yuan",
            "Zhengtu Liang",
            "Taowen Wang",
            "Qiwei Liang",
            "Yichi Wang",
            "Yunheng Wang",
            "Yuetong Fang",
            "Lusong Li",
            "Zecui Zeng",
            "Renjing Xu"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 69,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27163v1",
          "title": "Learning to Fold: prizewinning solution at LeHome Challenge 2026 (1st place online, 2nd offline)",
          "summary": "I describe my solution to the LeHome Challenge 2026, an ICRA 2026 competition on bimanual garment folding. The system placed 1st of 62 teams in the online (simulation) round and 2nd in the real-world final. It improves a vision-language-action (VLA) policy with a reinforcement-learning loop.",
          "summaryCn": "提出结合强化学习的VLA策略用于衣物折叠，网络同时预测动作和任务相关量以驱动优势估计和故障检测。在LeHome挑战赛中获得在线第一、离线第二，包含分布式训练和仿真到现实迁移等技术贡献。",
          "reasonCn": "论文描述结合强化学习的VLA策略用于衣物折叠，涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27163v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27163v1",
          "published": "2026-06-25T15:31:23Z",
          "updated": "2026-06-25T15:31:23Z",
          "authors": [
            "Ilia Larchenko"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27375v1",
          "title": "Scalable Behavior Cloning with Open Data, Training, and Evaluation",
          "summary": "We introduce ABC, a fully open-source stack for manipulation with behavior cloning. At its core is ABC-130K: the largest open-source teleoperation dataset to date, featuring 3,500 hours of data spanning over 130K episodes across 195 diverse tasks. Furthermore, we open-source our accessible hardware setup, training infrastructure, and simulation pipeline.",
          "summaryCn": "ABC开源行为克隆全栈，含最大遥操作数据集ABC-130K及训练评估流程。探索扩散Transformer和VLA架构，实现灵巧操作任务，为社区提供可复现工具包。",
          "reasonCn": "论文开源行为克隆全栈并比较DiT和VLA架构，涉及视觉语言动作模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27375v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27375v1",
          "published": "2026-06-25T17:59:57Z",
          "updated": "2026-06-25T17:59:57Z",
          "authors": [
            "Arthur Allshire",
            "Himanshu Gaurav Singh",
            "Ritvik Singh",
            "Adam Rashid",
            "Hongsuk Choi",
            "David McAllister",
            "Justin Yu",
            "Yiyuan Chen",
            "Huang Huang",
            "Pieter Abbeel"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27295v1",
          "title": "LA4VLA: Learning to Act without Seeing via Language-Action Pretraining",
          "summary": "Vision-Language-Action (VLA) models are commonly pretrained on robot demonstrations by jointly mapping visual observations and language instructions to actions. However, dense visual-action supervision can dominate the comparatively sparse language-action signal. As a result, policies may rely on visual shortcuts rather than learn how language conditions action execution, making them sensitive to visual variations.",
          "summaryCn": "LA4VLA提出语言-动作预训练框架，从演示中分解原子动作并配对语言描述，使VLA获取语言条件化动作先验，减少对视觉捷径的依赖。LA4-33K数据集和LA4VLA-1B模型在仿真与真实任务中持续提升性能。",
          "reasonCn": "论文提出语言-动作预训练以增强VLA对语言条件的依赖，涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27295v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27295v1",
          "published": "2026-06-25T17:13:02Z",
          "updated": "2026-06-25T17:13:02Z",
          "authors": [
            "Tao Lin",
            "Yuxin Du",
            "Yiran Mao",
            "Zewei Ye",
            "Yilei Zhong",
            "Bing Cheng",
            "Yiming Wang",
            "Jiting Liu",
            "Yang Tian",
            "Junchi Yan"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26922v1",
          "title": "Risk-Aware Selective Multimodal Driver Monitoring with Driver-State World Modeling",
          "summary": "Continuous driver monitoring in automated vehicles requires low-latency inference while avoiding unsafe decisions under uncertain driver states. Large vision-language models provide broad multimodal priors, but their latency and limited reliability in this setting make them unsuitable as always-on in-cabin monitors. We propose a cost-aware selective inference framework for deployable multimodal driver monitoring.",
          "summaryCn": "提出成本感知选择性推理框架，结合轻量RGB-生理学生模型和驾驶员状态世界建模，决定何时接受快速预测或为安全干预而弃权。世界模型预测未来模型误差和反事实系统行动代价，在驾驶员需求识别上降低不安全漏检率。",
          "reasonCn": "论文使用驾驶员状态世界建模进行风险感知选择性推理，涉及基于世界模型的动作决策（干预或接受）。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26922v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26922v1",
          "published": "2026-06-25T11:59:21Z",
          "updated": "2026-06-25T11:59:21Z",
          "authors": [
            "Daosheng Qiu",
            "Haozhuang Chi",
            "Hao Su",
            "Shu Long",
            "Xinyue Miao",
            "Yongle Dong",
            "Wei Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 57,
          "llmTotalScore": 0
        },
        {
          "id": "2606.26694v1",
          "title": "PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models",
          "summary": "Recent game world models can synthesize visually plausible, action-conditioned rollouts. However, their interaction behaviors often remain limited to exploratory or wandering trajectories, and physical dynamics are typically learned as implicit correlations from data rather than as controllable variables. This limitation hinders their applicability to authored game environments, where physical rules are deliberately designed and require explicit manipulation.",
          "summaryCn": "PhysEditWorld提供大规模多模态物理参数数据集，通过UE5重放渲染管道捕获不同重力配置下的动作条件化轨迹，支持物理可编辑世界模型研究。包含100小时交互和6000万帧数据，用于视频生成和世界理解模型。",
          "reasonCn": "论文提供面向物理可编辑世界模型的大规模数据集，支持动作条件化世界模型训练。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.26694v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26694v1",
          "published": "2026-06-25T07:27:09Z",
          "updated": "2026-06-25T07:27:09Z",
          "authors": [
            "Bin Hu",
            "Yanwen Ma",
            "Jiehui Huang",
            "Ziliang Zhang",
            "Haoning Wu",
            "Ruicheng Zhang",
            "Yaokun Li",
            "Zijun Wang",
            "Yuechen Zhang",
            "Chun-Mei Tseng"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 49,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27014v1",
          "title": "A Generalization Theory for JEPA-Based World Models",
          "summary": "Joint Embedding Predictive Architectures (JEPAs) have recently emerged as a promising paradigm for world modeling by learning predictive dynamics in a latent space rather than generating future observations at the input level. Despite their empirical success, the theoretical understanding of JEPA-based world models remains limited. In this paper, we develop the first generalization theory for JEPA-based world models.",
          "summaryCn": "首次为JEPA基于世界模型建立泛化理论，将其预训练形式化为条件谱图学习，并建立预训练误差与下游规划遗憾的联系。分析揭示潜在维度在近似与样本误差间的权衡，为潜在预测模型提供理论洞见。",
          "reasonCn": "论文为JEPA世界模型建立泛化理论，涉及动作条件化世界模型用于规划。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.27014v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27014v1",
          "published": "2026-06-25T13:29:20Z",
          "updated": "2026-06-25T13:29:20Z",
          "authors": [
            "Jingyi Cui",
            "Qi Zhang",
            "Hongwei Wen",
            "Yisen Wang"
          ],
          "categories": [
            "cs.LG"
          ],
          "heuristicScore": 47,
          "llmTotalScore": 0
        },
        {
          "id": "2606.27268v1",
          "title": "E-TTS: A New Embodied Test-Time Scaling Framework for Robotic Manipulation",
          "summary": "Recently, a few works have made early attempts to study test-time scaling for embodied tasks. However, two major challenges remain unsolved: (1) reasoning can effectively improve the performance of the policy, but its scaling mechanism has seldom been studied; (2) historical information is essential, as embodied tasks are inherently long-horizon and sequential, making sole reliance on current observations for action scaling inadequate due to the lack of historical context utilization. To address these challenges,…",
          "summaryCn": "E-TTS提出具身测试时缩放框架，通过历史感知迭代优化和视觉-语言验证器统一推理与动作缩放。采用成对采样评分和历史缓冲器，形成闭环优化，提升长时程操作性能。",
          "reasonCn": "论文提出具身测试时缩放框架，结合视觉-语言验证器统一推理和动作缩放，涉及视觉语言动作。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.27268v1",
          "pdfLink": "https://arxiv.org/pdf/2606.27268v1",
          "published": "2026-06-25T16:50:21Z",
          "updated": "2026-06-25T16:50:21Z",
          "authors": [
            "Wen Ye",
            "Peiyan Li",
            "Tingyu Yuan",
            "Yuan Xu",
            "Xiangnan Wu",
            "Chaoyang Zhao",
            "Jing Liu",
            "Nianfeng Liu",
            "Yan Huang",
            "Liang Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 42,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260625",
      "dateLabel": "2026-06-25",
      "generatedAt": "2026-06-25T02:44:56.012949+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.25800v1",
          "title": "ROAD-VLA: Robust Online Adaptation via Self-Distillation for Vision-Language-Action Models",
          "summary": "Effective online adaptation of vision-language-action (VLA) models remains challenging, as sparse rewards provide weak supervision for high-dimensional autoregressive action policies. Although self-distillation can in principle provide denser training signals, we find that text-based privileged teachers conditioned on demonstrations, retrieved experiences, or high-level plans are ineffective for VLA adaptation, exposing a modality gap between symbolic guidance and low-level robot actions. We propose ROAD-VLA, an a…",
          "summaryCn": "提出ROAD-VLA框架，通过优势引导的自蒸馏为VLA模型提供稠密监督，实现稀疏奖励下的鲁棒在线适应。在多种机器人操作环境中，性能优于PPO基准。",
          "reasonCn": "该论文聚焦于VLA模型的在线自适应，使用视觉和语言指令驱动机器人操作动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25800v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25800v1",
          "published": "2026-06-24T13:17:59Z",
          "updated": "2026-06-24T13:17:59Z",
          "authors": [
            "Kejing Wang",
            "Toan Nguyen",
            "Minh Hoang Nguyen",
            "Simon Khan",
            "Flora D. Salim"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 115,
          "llmTotalScore": 115
        },
        {
          "id": "2606.25591v1",
          "title": "WOLF-VLA: Whole-Body Humanoid Optimal Locomotion Framework for Vision-Language-Action Learning",
          "summary": "Vision-Language-Action (VLA) models have recently demonstrated strong generalization in robotic manipulation, yet their applicability to whole-body, contact-rich humanoid locomotion remains severely underexplored due to data scarcity, the absence of dynamically consistent demonstrations, and the difficulty of encoding optimality and safety in learning-based pipelines. This work introduces a unified framework WOLF-VLA that integrates whole-body optimal-control (OC) motion synthesis with large-scale multi-modal data…",
          "summaryCn": "引入WOLF-VLA框架，集成最优控制与多模态数据集，训练VLA模型从自然语言指令生成人形机器人全身运动。在多个任务上展示出强泛化性，并公开数据集与模型。",
          "reasonCn": "论文结合视觉、语言指令和全身运动合成，训练VLA模型生成人形机器人运动策略，直接符合VLA定义。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25591v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25591v1",
          "published": "2026-06-24T08:59:59Z",
          "updated": "2026-06-24T08:59:59Z",
          "authors": [
            "Melya Boukheddimi",
            "Omar Adjali",
            "Daniel Sontag",
            "Frank Kirchner"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 113
        },
        {
          "id": "2606.26025v1",
          "title": "In-Context World Modeling for Robotic Control",
          "summary": "Modern Vision-Language-Action (VLA) models often fail to generalize to novel setups, such as altered camera viewpoints or robot morphologies, because they are typically conditioned only on current observations and language instructions. By ignoring the underlying system configuration as a variable, these models implicitly assume a fixed execution context encountered during training, necessitating data-intensive fine-tuning for any new environment. In this work, we introduce In-Context World Modeling (ICWM), a fram…",
          "summaryCn": "提出In-Context World Modeling框架，使机器人策略从交互历史中推断系统变量，无需参数更新即可适应新配置。在仿真和真实机器人上相比标准VLA基线显著提升，展示了上下文世界建模用于控制的潜力。",
          "reasonCn": "论文提出上下文世界建模，使VLA策略能推断系统动态以实现动作控制，同时涉及世界模型和动作预测，符合BOTH标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.26025v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26025v1",
          "published": "2026-06-24T16:53:36Z",
          "updated": "2026-06-24T16:53:36Z",
          "authors": [
            "Siyin Wang",
            "Junhao Shi",
            "Senyu Fei",
            "Zhaoyang Fu",
            "Li Ji",
            "Jingjing Gong",
            "Xipeng Qiu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 97,
          "llmTotalScore": 97
        },
        {
          "id": "2606.26006v1",
          "title": "FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation",
          "summary": "Vision-Language-Action (VLA) models are often constrained by the imitation ceiling imposed by sub-optimal data. While Reinforcement Learning (RL) fine-tuning can surpass this limit, it is notoriously sample inefficient. This challenge arises from two core issues: (1) catastrophic initial unlearning due to an unstable Q-function and (2) inefficient policy updates caused by low-quality exploration data, often forcing a reliance on costly human interventions.",
          "summaryCn": "提出FORCE三阶段框架，通过价值校准预热和自蒸馏稳定VLA的在线微调，避免灾难性遗忘并提升样本效率。在仿真和真实任务中实现79%的成功率提升，且无需人工干预。",
          "reasonCn": "针对VLA模型的强化学习微调，解决机器人动作策略优化问题，必然涉及视觉、语言和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26006v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26006v1",
          "published": "2026-06-24T16:23:18Z",
          "updated": "2026-06-24T16:23:18Z",
          "authors": [
            "Shuyi Zhang",
            "Yunfan Lou",
            "Hongyang Cheng",
            "Yichen Guo",
            "Chuyao Fu",
            "Yaoxu Lyu",
            "Xiaojie Zhang",
            "Haoran Li",
            "Pengwei Wang",
            "Zhongyuan Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 92,
          "llmTotalScore": 92
        },
        {
          "id": "2606.25985v1",
          "title": "Action ControlNet: A Lightweight Delay-Aware Adapter for Smooth Asynchronous Control in Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have shown strong potential for general-purpose robot manipulation, but their inference latency remains a major obstacle to stable high-frequency control. Asynchronous execution mitigates this bottleneck by overlapping policy inference with action execution, yet the next action chunk is still predicted from stale observations while the robot continues to move. Direct chunk stitching therefore introduces handoff discontinuities, action jitter, and failures in contact-rich manipul…",
          "summaryCn": "提出Action ControlNet，一种轻量级延迟感知适配器，利用已执行动作后缀作为残差条件，缓解VLA异步控制中的抖动与不连贯。在多个机器人平台上提升鲁棒性，且兼容扩散和流匹配等生成式动作头。",
          "reasonCn": "该工作为VLA模型设计延迟感知适配器以平滑异步控制，核心是改进机器人动作输出，属于VLA范畴。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25985v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25985v1",
          "published": "2026-06-24T15:53:43Z",
          "updated": "2026-06-24T15:53:43Z",
          "authors": [
            "Tiecheng Guo",
            "Meng Guo"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.26095v1",
          "title": "Learning Action Priors for Cross-embodiment Robot Manipulation",
          "summary": "Most Vision-Language-Action (VLA) models build on a Vision-Language Model (VLM) backbone by attaching an action module and optimizing the full policy jointly. This design inherits strong visual and linguistic priors from the VLM, but leaves the action module to learn physical motion almost from scratch. As a result, the policy lacks an explicit motion prior, forcing early optimization to simultaneously discover temporal action dynamics and cross-modal alignment, a challenge further amplified in cross-embodiment se…",
          "summaryCn": "提出两阶段训练框架，先为动作模块预训练运动先验，再与视觉语言对齐，赋予VLA模型跨具身时序结构。通过提取的动作编码器压缩历史信息，提高策略效率。",
          "reasonCn": "论文聚焦于跨具身VLA模型的动作先验学习，处理视觉、语言输入与动作输出，明确为VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.26095v1",
          "pdfLink": "https://arxiv.org/pdf/2606.26095v1",
          "published": "2026-06-24T17:59:56Z",
          "updated": "2026-06-24T17:59:56Z",
          "authors": [
            "Dong Jing",
            "Tianqi Zhang",
            "Jiaqi Liu",
            "Jinman Zhao",
            "Zelong Sun",
            "Li Erran Li",
            "Zhiwu Lu",
            "Mingyu Ding"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV"
          ],
          "heuristicScore": 66,
          "llmTotalScore": 66
        },
        {
          "id": "2606.25360v1",
          "title": "Decoupling Semantics and Geometric Grounding: Spatial Visual Prompts for Language-Conditioned Imitation Learning",
          "summary": "While end-to-end Vision-Language-Action (VLA) models show promise in robotic manipulation, their monolithic paradigm inherently couples semantic reasoning and spatial control. This creates a severe alignment bottleneck, limiting precise target disambiguation in data-constrained imitation learning. To overcome this, we propose SVP-IL, a decoupled architecture that explicitly extracts spatial visual grounding from the action generation loop.",
          "summaryCn": "提出SVP-IL架构，将空间视觉提示从VLA的动作生成中解耦，通过零样本几何掩码注入连续动作生成器，改善语言条件下的目标消歧。在少样本下显著超越现有VLA方法，并在真实环境验证鲁棒性。",
          "reasonCn": "论文解耦VLA模型的语义和空间定位，利用视觉语言基础模型生成空间提示辅助模仿学习的动作生成，核心仍为VLA。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.25360v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25360v1",
          "published": "2026-06-24T03:45:06Z",
          "updated": "2026-06-24T03:45:06Z",
          "authors": [
            "Yanzhe Tang",
            "Xinyu Shao",
            "Yuxuan Hu",
            "Siyu Chen",
            "Bowen Yang",
            "Yajun Gao",
            "Tongtong Cao",
            "Xiu Li",
            "Long Zeng"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 58,
          "llmTotalScore": 58
        },
        {
          "id": "2606.25473v1",
          "title": "Causal-rCM: A Unified Teacher-Forcing and Self-Forcing Open Recipe for Autoregressive Diffusion Distillation in Streaming Video Generation and Interactive World Models",
          "summary": "Autoregressive video diffusion with causal diffusion transformers has emerged as a major paradigm for real-time streaming video generation and action-conditioned interactive world models. In this work, we extend rCM, an advanced diffusion distillation framework, to autoregressive video diffusion. The core philosophy of rCM lies in the complementarity between forward and reverse divergences, represented by consistency models (CMs) and distribution matching distillation (DMD), respectively, in diffusion distillation.",
          "summaryCn": "提出Causal-rCM，一个统一的自回归视频扩散蒸馏方案，结合教师强迫与自强迫，用于流式视频生成和交互世界模型。在视频质量和世界模型一致性上达到最先进水平，并加速训练收敛。",
          "reasonCn": "论文专注重于动作条件交互世界模型的自回归扩散蒸馏，明确将世界模型用于动作条件生成，属于WAM范畴。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.25473v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25473v1",
          "published": "2026-06-24T06:58:02Z",
          "updated": "2026-06-24T06:58:02Z",
          "authors": [
            "Kaiwen Zheng",
            "Guande He",
            "Min Zhao",
            "Jintao Zhang",
            "Huayu Chen",
            "Jianfei Chen",
            "Chen-Hsuan Lin",
            "Ming-Yu Liu",
            "Jun Zhu",
            "Qianli Ma"
          ],
          "categories": [
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 51,
          "llmTotalScore": 51
        },
        {
          "id": "2606.25880v1",
          "title": "USS: Unified Spatial-Semantic Prompts for Embodied Visual Tracking with Latent Dynamics Learning",
          "summary": "Embodied Visual Tracking (EVT) requires an agent to continuously follow a specified target while actively moving through dynamic environments. However, prevailing EVT paradigms predominantly rely on language-based target indication. While language is expressive and convenient, cluttered scenes often contain multiple objects that satisfy the same semantic description, leading to ambiguous target grounding.",
          "summaryCn": "提出USS框架，支持文本、点、框、掩码等多种提示，通过潜在动态学习增强时间鲁棒性，实现端到端具身跟踪。真实机器人实验证明空间提示优于纯文本提示，在干扰多、长时时序任务中优势明显。",
          "reasonCn": "论文提出统一空间语义提示的具身视觉跟踪框架，融合视觉、语言（文本提示）和动作（航点）输出，并包含潜在世界模型预测未来表征辅助控制，符合VLA和WAM双重标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.25880v1",
          "pdfLink": "https://arxiv.org/pdf/2606.25880v1",
          "published": "2026-06-24T14:25:05Z",
          "updated": "2026-06-24T14:25:05Z",
          "authors": [
            "Yuchen Xie",
            "Xinyu Zhou",
            "Kuangji Zuo",
            "Yanshuo Lu",
            "Fengrui Huang",
            "Boyu Ma",
            "Jianfei Yang"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 26,
          "llmTotalScore": 26
        }
      ]
    },
    {
      "dateKey": "20260624",
      "dateLabel": "2026-06-24",
      "generatedAt": "2026-06-24T03:44:17.549484+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.24472v1",
          "title": "G$^3$VLA: Geometric inductive bias for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models have made rapid progress in generalist robot manipulation by harnessing semantic knowledge from pretrained vision-language backbones, but their visual tokens remain grounded in 2D image coordinates rather than the calibrated geometry of the robot's cameras -- a mismatch especially pronounced in multi-camera setups, where views are coupled by known intrinsics and extrinsics yet processed as independent images. We propose G$^3$VLA, a camera-aware geometric module that injects cali…",
          "summaryCn": "任务：提升VLA模型在多相机设置下的3D几何理解。方法：通过射线嵌入、投影位置编码和跨视图融合将相机标定信息注入视觉token。价值：在多个基准和真实机器人上实现一致改进，且无需深度传感器。",
          "reasonCn": "该论文专注于为VLA模型引入几何归纳偏置以提升机器人操作性能，涉及视觉、语言和动作三个要素，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24472v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24472v1",
          "published": "2026-06-23T12:02:36Z",
          "updated": "2026-06-23T12:02:36Z",
          "authors": [
            "Yue Peng",
            "Yongzhe Zhao",
            "Artur Habuda",
            "Khuyen Pham",
            "Yanheng Zhu",
            "Tran Nguyen Le",
            "Fares Abu-Dakka",
            "Li Guo"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24051v1",
          "title": "DriveStack-VLA: Render-Teacher Alignment for BEV-Based DeepStack Vision-Language-Action Model",
          "summary": "Vision-Language-Action driving models convert a pretrained Vision-Language Model into a driving policy, allowing them to use world knowledge and follow language guidances. However, existing VLA driving models still lack driving-oriented spatial intelligence: their policies are mainly grounded on perspective image tokens and language priors, while precise motion planning requires metric geometry, top-down scene structure, and attention to safety-critical perceptual cues. This limitation makes current models vulnera…",
          "summaryCn": "任务：构建具有空间智能的自动驾驶VLA模型。方法：通过DeepStack连接将BEV表示注入LLM解码器，并利用渲染-教师对齐强化感知焦点。价值：在NAVSIM和闭环基准上取得领先成绩，提升了驾驶策略的准确性和安全性。",
          "reasonCn": "该论文提出一种用于自动驾驶的VLA模型，结合BEV表示和语言指令进行运动规划，满足VLA的三个要素。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24051v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24051v1",
          "published": "2026-06-23T01:40:54Z",
          "updated": "2026-06-23T01:40:54Z",
          "authors": [
            "Jingke Wang",
            "Zhenru Zhao",
            "Shuangming Lei",
            "Hao Su",
            "Yuehao Huang",
            "Yijia Xie",
            "Kai Tang",
            "Guanglin Xu",
            "AiXue Ye",
            "Yukai Ma"
          ],
          "categories": [
            "cs.CV"
          ],
          "heuristicScore": 99,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24448v1",
          "title": "Supervise What Survives: Geometry-Guided VLA Adaptation from Synthetic Robot Videos",
          "summary": "Vision-Language-Action (VLA) models require large-scale video-action pairs, yet real teleoperation remains scarce. While generated robot videos offer a scalable alternative, existing methods treat them as real robot data by recovering pseudo-actions from synthesized pixels. We argue that deriving low-level control from generated visuals is a mismatched abstraction.",
          "summaryCn": "任务：利用合成机器人视频为VLA模型提供几何引导的适应。方法：通过提取未来2D末端执行器航点作为辅助任务来对齐视觉表示，仅从真实演示训练动作头。价值：在合成数据利用上提出新原则，减少对真实遥操作的依赖，提升VLA的几何鲁棒性。",
          "reasonCn": "该论文研究如何利用合成视频为VLA模型提供几何监督，以提升视觉感知，最终用于动作生成，符合VLA定义。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24448v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24448v1",
          "published": "2026-06-23T11:35:13Z",
          "updated": "2026-06-23T11:35:13Z",
          "authors": [
            "Danze Chen",
            "Yanzhe Chen",
            "Qiming Huang",
            "Zhijun Cao",
            "Chen Gao",
            "Mike Zheng Shou"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24101v1",
          "title": "NavWM: A Unified Navigation World Model for Foresight-Driven Planning",
          "summary": "Conventional visual navigation policies often struggle with myopic decision-making and mode collapse in complex environments. While world models offer a promising alternative, existing paradigms typically isolate perception, generation, and control, failing to capture their shared spatio-temporal dynamics. In this paper, we propose NavWM, a unified navigation world model that seamlessly integrates latent world reasoning, multimodal action prediction, and controllable visual generation.",
          "summaryCn": "任务：构建统一的导航世界模型以支持有远见的规划。方法：利用潜在世界令牌蒸馏几何和语义先验，结合锚点多模态轨迹预测。价值：在多个机器人数据集上实现了高保真未来状态生成和零样本导航成功率的显著提升。",
          "reasonCn": "该论文以世界模型为核心，用于动作预测和规划，通过视觉预见评估和选择最优路径，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.24101v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24101v1",
          "published": "2026-06-23T03:30:20Z",
          "updated": "2026-06-23T03:30:20Z",
          "authors": [
            "Yanghong Mei",
            "Longteng Guo",
            "Ming-Ming Yu",
            "Guiyu Zhao",
            "Xingjian He",
            "Jing Liu"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 75,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24884v1",
          "title": "InSight: Self-Guided Skill Acquisition via Steerable VLAs",
          "summary": "Vision-language-action (VLA) models can learn manipulation skills from demonstrations, but their capabilities are bounded by the skills in the training data. We present InSight, a framework that unlocks autonomous skill acquisition by rendering VLAs steerable at the primitive-action level (e.g., \"move gripper to the bowl\", \"lift upward\", \"pour the bottle\"). InSight consists of two primary stages: (1) an automated segmentation pipeline that partitions demonstrations into labeled primitives via VLM plan decompositio…",
          "summaryCn": "任务：实现VLA的自主技能获取和可操控性。方法：通过自动分割管道和VLM引导的数据飞轮来识别和获取缺失原语。价值：无需人类演示即可在仿真和真实世界中学习并组合新技能，推动VLA持续学习。",
          "reasonCn": "该论文提出使VLA模型可操控并在原始动作层面进行技能获取，涉及视觉、语言和动作，符合VLA标准。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.24884v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24884v1",
          "published": "2026-06-23T17:59:01Z",
          "updated": "2026-06-23T17:59:01Z",
          "authors": [
            "Maggie Wang",
            "Lars Osterberg",
            "Stephen Tian",
            "Ola Shorinwa",
            "Jiajun Wu",
            "Mac Schwager"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 64,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24089v1",
          "title": "DynaWM: Dynamics-Aware Distillation with World Model and Momentum Targets for Smooth Locomotion over Continuous Stairs",
          "summary": "Recent advances in control have enabled bipedal-wheeled robots to traverse slopes and single-step obstacles, yet long staircase traversal remains challenging as current teacher-student frameworks suffer from weakened dynamics-aware representations and incomplete terrain geometry encoding. To bridge this gap, we propose DynaWM, a dynamics-aware representation learning framework. To enhance terrain encoding capability and enable transparent assessment, we introduce a world model as a regularizer to enforce forward-d…",
          "summaryCn": "任务：实现双轮足机器人连续楼梯的平滑移动。方法：通过世界模型正则化强制前向动力学感知，并结合动量目标编码器稳定知识蒸馏。价值：在仿真和真实硬件上提升了地形适应性和运动平滑度，克服了长楼梯挑战。",
          "reasonCn": "该论文利用世界模型作为正则化器实现动力学感知表征学习，用于机器人移动控制，符合WAM定义。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.24089v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24089v1",
          "published": "2026-06-23T03:07:42Z",
          "updated": "2026-06-23T03:07:42Z",
          "authors": [
            "Haidong Hou",
            "Zhangguo Yu",
            "Hengbo Qi",
            "Jianlin Zhang"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 55,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24152v1",
          "title": "Autonomous Video Generation with Counterfactual Controllability for Self-Evolving World Models",
          "summary": "Existing literature claims that video generation essentially is world modelling. On the one hand, the claim is productive because it pushes generative AI beyond static images and toward temporally extended physical scenes. On the other hand, this claim dangerously relies on the belief that scaling visual prediction alone will automatically yield physical agents.",
          "summaryCn": "任务：探讨通过具有反事实可控性的自主视频生成实现自我进化世界模型的新视角。方法：提出世界模型应能回答干预下的未来状态，并测试生成未来是否满足具身约束。价值：为世界模型从视觉预测走向具身智能体提供了新方向。",
          "reasonCn": "该论文以世界模型为核心，强调通过反事实可控性实现自我进化的世界模型，用于动作预测和规划，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.24152v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24152v1",
          "published": "2026-06-23T05:19:47Z",
          "updated": "2026-06-23T05:19:47Z",
          "authors": [
            "Xin Wang",
            "Wenxuan Liu",
            "Tongtong Feng",
            "Wenwu Zhu"
          ],
          "categories": [
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 51,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24742v1",
          "title": "World Value Models for Robotic Manipulation",
          "summary": "Generalist value models play a pivotal role in scaling robotic policy learning from large-scale, mixed-quality data. Mathematically, accurate value estimation demands deep temporal understanding, requiring models to both ground the current belief using historical context and plan over future outcomes. However, most existing robotic value models are built on Vision-Language Model (VLM) backbones that are pretrained primarily on static or temporally sparse visual observations, lacking the requisite temporal modeling…",
          "summaryCn": "任务：利用世界模型构建通用机器人价值模型进行价值估计。方法：通过世界模型的时序建模能力实现准确的任务进展评估，并引入次优价值基准。价值：在标准基准和次优数据上均取得最先进结果，提升了从混合质量数据中可扩展策略学习的能力。",
          "reasonCn": "该论文将世界模型与价值估计相结合，构建通用的机器人价值模型，用于动作质量评估和策略学习，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.24742v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24742v1",
          "published": "2026-06-23T16:07:48Z",
          "updated": "2026-06-23T16:07:48Z",
          "authors": [
            "Zhihao Wang",
            "Jianxiong Li",
            "Yu Cui",
            "Yuan Gao",
            "Xianyuan Zhan",
            "Junzhi Yu",
            "Xiao Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 38,
          "llmTotalScore": 0
        },
        {
          "id": "2606.24842v1",
          "title": "World Models in Pieces: Structural Certification for General Agents",
          "summary": "In the big-world regime, agents cannot be universally capable and their ability is inevitably specialized across a world model in pieces. Consequently, standard uniform guarantees fail to distinguish between the understanding of critical bottlenecks and irrelevant failures. We first formalize this limitation by proving that general agents are not universal, rendering standard worst-case analysis uninformative.",
          "summaryCn": "任务：为通用智能体提供世界模型的结构化认证以实现可靠部署。方法：提出转换局部框架，通过组合目标过滤特定转换并证明误差界限。价值：使通用智能体的长时规划可靠性可认证，定位可信赖的转换。",
          "reasonCn": "该论文研究通用智能体的世界模型结构认证，用于长时规划，明确世界模型在动作规划中的作用，符合WAM标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.24842v1",
          "pdfLink": "https://arxiv.org/pdf/2606.24842v1",
          "published": "2026-06-23T17:21:09Z",
          "updated": "2026-06-23T17:21:09Z",
          "authors": [
            "Yikai Lu",
            "Yifei Wu",
            "Xinyu Lu",
            "Tongxin Li"
          ],
          "categories": [
            "cs.AI"
          ],
          "heuristicScore": 34,
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260623",
      "dateLabel": "2026-06-23",
      "generatedAt": "2026-06-23T02:44:09.512035+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.20781v1",
          "title": "World Action Models: A Survey",
          "summary": "World Action Models (WAMs) are embodied predictive-action models that make a forecast of the future available to action. Recent WAMs repurpose large video generation models, and a parallel line relies on language or vision-language backbones without a video-generation core. This rapid expansion has blurred the boundary among broad world models, video generation models, action-grounded video world models, Vision-Language-Action policies, and WAMs.",
          "summaryCn": "本文综述了世界动作模型（WAM），澄清了与视频生成、VLA等概念的边界，从生成未来、预测基座、动作耦合等角度梳理现有工作，并讨论了交互性、因果性等关键挑战。",
          "reasonCn": "系统综述世界动作模型（WAM），明确面向动作预测的未来模型，符合WAM论文标准。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.20781v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20781v1",
          "published": "2026-06-18T17:05:19Z",
          "updated": "2026-06-18T17:05:19Z",
          "authors": [
            "Qiuhong Shen",
            "Shihua Zhang",
            "Yue Liao",
            "Qi Li",
            "Zhenxiong Tan",
            "Shizun Wang",
            "Shuicheng Yan",
            "Xinchao Wang"
          ],
          "categories": [
            "cs.RO",
            "cs.CV"
          ],
          "heuristicScore": 141,
          "llmTotalScore": 141
        },
        {
          "id": "2606.19531v1",
          "title": "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
          "summary": "World Action Models (WAMs) commonly rely on video generation to bridge visual world modeling and robot control. However, video-based WAMs face three coupled limitations: dense multi-frame future tokens make inference costly, full video prediction spends capacity on action-irrelevant temporal and appearance details, and long-horizon future imagination may introduce errors that mislead action prediction. These issues raise a simple question: Does world action model really need video generation?",
          "summaryCn": "ImageWAM利用预训练图像编辑模型进行动作预测，仅关注动作相关的视觉变化，避免生成未来帧，将推理FLOPs降至1/6，延迟降至1/4，在仿真和真实实验中超越VLA基线。",
          "reasonCn": "提出以图像编辑替代视频生成的世界动作模型ImageWAM，直接用于机器人动作预测，属于WAM。",
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
          "heuristicScore": 119,
          "llmTotalScore": 119
        },
        {
          "id": "2606.20867v1",
          "title": "FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation",
          "summary": "Vision-Language-Action (VLA) models enable general-purpose robotic control via large-scale multimodal pretraining, yet their effectiveness under few-shot imitation learning remains limited. We conduct a systematic stress test of state-of-the-art VLA models and show that performance degrades sharply as demonstrations are reduced, revealing a key weakness of existing adaptation strategies. To address this, we introduce FOCA, a future-oriented conditioning framework for data-efficient VLA adaptation.",
          "summaryCn": "提出FOCA框架，通过显式未来交互嵌入预测和隐式目标观察对齐改进VLA小样本适应，并利用世界模型生成合成视频进行联合训练，在LIBERO、RoboCasa和真实机器人上取得最优结果。",
          "reasonCn": "结合VLA适应与未来导向条件，利用视频世界模型生成合成数据共同训练，属于VLA与WAM的交叉。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.20867v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20867v1",
          "published": "2026-06-18T18:54:51Z",
          "updated": "2026-06-18T18:54:51Z",
          "authors": [
            "Duc Minh Nguyen",
            "Nghiem Tuong Diep",
            "Binh Gia Nguyen",
            "Trong-Bao Ho",
            "Doanh Le",
            "Tan Q. Nguyen",
            "Thien-Loc Ha",
            "Nhiem Tran",
            "Bao Thach",
            "Nhat X. Tran"
          ],
          "categories": [
            "cs.CV",
            "cs.AI"
          ],
          "heuristicScore": 117,
          "llmTotalScore": 117
        },
        {
          "id": "2606.20562v1",
          "title": "MemoryWAM: Efficient World Action Modeling with Persistent Memory",
          "summary": "Robust robotic manipulation in the real world requires not only an understanding of the current observation, but also memory and dynamics modeling. World action models (WAMs) possess these capabilities by jointly modeling visual foresight and actions conditioned on both current and historical observations, making them a promising paradigm for robotic manipulation. However, existing WAMs face a fundamental trade-off: methods with efficient inference typically condition only on a bounded window of recent observation…",
          "summaryCn": "MemoryWAM采用混合记忆设计（近期帧、事件锚帧和摘要令牌），结合专用注意力机制，在长时域记忆依赖任务中性能超越VLA和WAM基线，并保持计算效率。",
          "reasonCn": "提出高效持久记忆的世界动作模型MemoryWAM，解决非马尔可夫环境下的动作预测。",
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
          "heuristicScore": 117,
          "llmTotalScore": 117
        },
        {
          "id": "2606.21501v1",
          "title": "UniviewVLA: A Unified Multiview Vision-Language-Action Model with World Modeling",
          "summary": "Occluded tasks remain a bottleneck in robot manipulation. Existing solutions either deploy additional physical cameras requiring training-inference camera parity, or rely on explicit 3D reconstruction with high computational cost. Moreover, both approaches rely on standard agent-view and wrist-view observations, while failing to capture occlusion information and future scene evolution.",
          "summaryCn": "UniviewVLA仅从标准双相机推理多视角场景演化，揭示遮挡线索，加速推理并动态选择最相关视角，在LIBERO和CALVIN上达到领先性能，并大幅提升遮挡任务成功率。",
          "reasonCn": "统一多视角VLA与世界建模，通过生成多视角未来视图改善遮挡下的动作预测。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.21501v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21501v1",
          "published": "2026-06-19T14:53:40Z",
          "updated": "2026-06-19T14:53:40Z",
          "authors": [
            "Tao Xu",
            "Runhao Zhang",
            "Zhijian Huang",
            "Jiayi Guan",
            "Jiaxin Wang",
            "Yifan Ding",
            "Yong-Lu Li",
            "Long Chen",
            "Guang Chen",
            "Jinghui Lu"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 113,
          "llmTotalScore": 113
        },
        {
          "id": "2606.22136v1",
          "title": "Wh0: Generative World Models as Scalable Sources of Egocentric Human Hand Manipulation Data",
          "summary": "Scaling dexterous manipulation requires generalization across objects, scenes, and tasks, yet existing data sources face a trade-off between scale and scene/embodiment alignment: teleoperation data is well aligned with robot deployment but expensive to collect; simulation is scalable but limited by the sim-to-real gap; and real egocentric videos scale effectively but remain misaligned with robot deployment. We propose Wh0, a framework that uses generative video world models as scalable and controllable sources of…",
          "summaryCn": "Wh0框架使用生成式世界模型创建50k集第一人称人手交互视频，转换为机器人训练数据，与少量真实数据共训后，VLA在灵巧操作任务中零样本成功率从8.3%提升至38.9%。",
          "reasonCn": "利用生成式世界模型产生大规模人手操作数据，用于微调VLA模型，结合世界模型与VLA。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.22136v1",
          "pdfLink": "https://arxiv.org/pdf/2606.22136v1",
          "published": "2026-06-20T16:31:40Z",
          "updated": "2026-06-20T16:31:40Z",
          "authors": [
            "Yangtao Chen",
            "Zixuan Chen",
            "Peiyang Wang",
            "Yong-Lu Li",
            "Jing Huo",
            "Jieqi Shi",
            "Yang Gao"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 110,
          "llmTotalScore": 110
        },
        {
          "id": "2606.21088v1",
          "title": "MV-WAM: Manifold-Aware World Action Model with Value Augmentation",
          "summary": "Achieving robust and generalizable manipulation across diverse environments remains a fundamental challenge in embodied robotics. Recent world action models achieve strong in-domain performance, yet their gains do not extend proportionally to out-of-distribution scenarios. We attribute this to a structural mismatch between visual and action modalities, whose intrinsically heterogeneous manifolds cause joint optimization to disproportionately degrade action robustness under distribution shift.",
          "summaryCn": "MV-WAM通过跨模态因果掩码、流形感知优化和价值引导回滚机制，在分布外场景中增强泛化和自主纠偏能力，优于现有WAM和VLA。",
          "reasonCn": "提出流形感知的世界动作模型MV-WAM，联合视觉预测、动作生成和价值估计，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.21088v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21088v1",
          "published": "2026-06-19T04:35:18Z",
          "updated": "2026-06-19T04:35:18Z",
          "authors": [
            "Jintao Chen",
            "Peidong Jia",
            "Qingpo Wuwu",
            "Jiaming Liu",
            "Mengfei Du",
            "Chun-Kai Fan",
            "Xiaowei Chi",
            "Hao Chen",
            "Chengyu Bai",
            "Zezhong Qian"
          ],
          "categories": [
            "cs.RO"
          ],
          "heuristicScore": 108,
          "llmTotalScore": 108
        },
        {
          "id": "2606.20285v1",
          "title": "Co-VLA: Coordination-Aware Structured Action Modeling for Dual-Arm Vision-Language-Action Systems",
          "summary": "Vision-language-action (VLA) models show strong capabilities in single and dual-arm robotic manipulation. Prior works show coordinated bimanual behaviors can emerge from end-to-end learning, leveraging large vision-language backbones with continuous action prediction. However, as bimanual tasks become tightly coupled and execution constraints become critical, implicit coordination alone is insufficient to ensure reliable, interpretable, and stable behavior.",
          "summaryCn": "Co-VLA在VLA中引入结构化动作专家和协调损失，通过共享和残差潜变量显式建模双臂协调，并部署潜在感知控制器实时调节执行，提升可靠性与可解释性。",
          "reasonCn": "提出协调感知的结构化动作模组，专门用于双臂VLA系统，不涉及世界模型。",
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
          "heuristicScore": 107,
          "llmTotalScore": 107
        },
        {
          "id": "2606.19297v1",
          "title": "Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models",
          "summary": "Embodied Vision-Language-Action (VLA) models are typically obtained by fine-tuning powerful pretrained VLMs on robotics data, yet it is unclear how much commonsense and factual knowledge they retain after adaptation. Failures on knowledge-sensitive tasks are ambiguous, conflating missing knowledge with poor generalization of low-level control. We introduce Act2Answer, a lightweight protocol that adapts VLM knowledge benchmarks to VLA evaluation by requiring agents to answer through action.",
          "summaryCn": "通过Act2Answer协议将知识基准转为动作回答任务，评测7个VLA模型，发现VLA在简单概念上表现良好但在丰富语义类上有较大差距，且VQA共训有助于知识保留。",
          "reasonCn": "系统测量VLA模型常识与世界知识保留情况，属于VLA分析与评估。",
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
          "heuristicScore": 107,
          "llmTotalScore": 107
        },
        {
          "id": "2606.21386v1",
          "title": "VLA-FAIL: Efficient Task Failure Detection for Finetuned Vision-Language-Action Models",
          "summary": "Vision-language-action models (VLAs) achieve state-of-the-art performance on many robotic manipulation tasks, yet they can still behave unpredictably in out-of-distribution scenarios. Runtime failure detection is therefore essential for the safe real-world deployment of VLAs. However, existing task failure detectors require computationally expensive action sampling, are based on architectural assumptions that limit their applicability to VLAs, or need access to failure rollouts.",
          "summaryCn": "VLA-FAIL结合最后层马氏距离和动作块一致性检测，无需故障数据即可实现高精度早期故障检测，并提出新指标AUCPDT综合评估。",
          "reasonCn": "提出轻量级VLA故障检测框架，不依赖世界模型，仅利用模型内部特征。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.21386v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21386v1",
          "published": "2026-06-19T12:51:21Z",
          "updated": "2026-06-19T12:51:21Z",
          "authors": [
            "Florian Seligmann",
            "Emiliyan Gospodinov",
            "Enes Ulas Dincer",
            "Gerhard Neumann"
          ],
          "categories": [
            "cs.LG",
            "cs.CV"
          ],
          "heuristicScore": 106,
          "llmTotalScore": 106
        },
        {
          "id": "2606.18955v1",
          "title": "Motion-Focused Latent Action Enables Cross-Embodiment VLA Training from Human EgoVideos",
          "summary": "Training generalist Vision-Language-Action(VLA) models typically requires massive, diverse robotic datasets with high-fidelity action annotations. While egocentric human manipulation videos are abundant and capture significant environmental diversity, the absence of action labels makes them difficult to use in conventional training paradigms. To address this, we propose a latent-action-based framework designed to extract general action priors from unlabeled human videos.",
          "summaryCn": "提出混合解耦VQ-VAE从人类自我中心视频中提取运动专注的潜在动作，构建跨具身动作码书，仅需50条下游轨迹即可与大规模标注VLA竞争。",
          "reasonCn": "通过无标注人类视频学习潜在动作，作为跨具身VLA训练的预训练，结合了潜在动作建模与世界模型思想。",
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
          "heuristicScore": 104,
          "llmTotalScore": 104
        },
        {
          "id": "2606.21672v1",
          "title": "Imitation from Heterogeneous Demonstrations using Grounded Latent-Action World Models",
          "summary": "Imitation learning has emerged as a powerful paradigm for learning visuomotor policies, but its generalisation and stability are limited by the scale and quality of demonstration data needed. A promising direction is to leverage more abundant but heterogeneous data sources, which differ in action space and often lack action labels altogether. Existing co-training approaches that combine heterogeneous data sources rely on heuristic and hand-engineered alignment techniques.",
          "summaryCn": "GLAM通过共享潜在动作空间在不同数据源上一致地预测未来观测，实现无动作标签的模仿学习，在5个操作任务上验证了跨源动作迁移。",
          "reasonCn": "提出基于潜在动作世界模型（GLAM）的异构模仿学习框架，通过预测未来使动作空间对齐，属于WAM。",
          "lane": "WAM",
          "link": "https://arxiv.org/abs/2606.21672v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21672v1",
          "published": "2026-06-19T18:23:24Z",
          "updated": "2026-06-19T18:23:24Z",
          "authors": [
            "Tianyou Wang",
            "Anson Lei",
            "Joe Watson",
            "Ingmar Posner"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.LG"
          ],
          "heuristicScore": 94,
          "llmTotalScore": 94
        },
        {
          "id": "2606.17924v1",
          "title": "PearlVLA: Progressive Embodied Action-Plan Refinement in Latent Space",
          "summary": "Current Vision-Language-Action (VLA) models face a trade-off between efficient action generation and explicit deliberation. Directly decoding actions from vision-language backbone representations enables low-latency control, whereas explicit reasoning through textual chains, pixel-level subgoals, or action search can improve planning but incurs substantial latency and computational cost. We propose PearlVLA, a VLA framework that moves deliberation into the latent space of a vision-language model (VLM).",
          "summaryCn": "PearlVLA在VLM潜在空间内进行多轮规划优化，利用冻结的潜在世界模型预测未来观测以引导更新，在LIBERO上取得最优性能且计算开销低。",
          "reasonCn": "VLA框架内集成潜在世界模型用于迭代规划细化，属于VLA与WAM的结合。",
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
          "heuristicScore": 93,
          "llmTotalScore": 93
        },
        {
          "id": "2606.19998v1",
          "title": "Tri-Info: Generalizable, Interpretable Failure Prediction for VLA Models via Information Theory",
          "summary": "Vision-Language-Action (VLA) models are increasingly deployed across diverse tasks, yet they remain black boxes whose physical interactions can cause irreversible harm, making generalizable and interpretable failure detection essential. We observe that successful and failed rollouts carry systematically different information-theoretic signatures. Building on this, we formalize VLA control as a closed-loop information pipeline and derive the Triple Information-theoretic (Tri-Info) signals that capture whether actio…",
          "summaryCn": "Tri-Info将VLA控制视为信息管道，提取动作多样性、时序一致性和状态耦合三个信息量，实现跨架构和跨域（仿真到真实）的通用故障检测与诊断。",
          "reasonCn": "基于信息论为VLA模型设计故障预测信号，不涉及世界模型。",
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
          "heuristicScore": 92,
          "llmTotalScore": 92
        },
        {
          "id": "2606.21496v1",
          "title": "Decoupling the Declarative from the Procedural in Vision-Language-Action Models",
          "summary": "Deploying generalist robotic agents in the real world requires transferable skills. Specifically, a policy trained to clone a behavior from object-specific demonstrations must generalize beyond that object, otherwise data collection requirements become intractable. Recently, fine-tuning of pre-trained billion-parameter Vision-Language Models (VLMs), initially on large-scale robot datasets and then on fewer scenario-specific demonstrations, has emerged as the predominant paradigm for designing Vision-Language-Actio…",
          "summaryCn": "w²VLA通过模块化方式调制机器人状态序列与视觉、空间和技能信息，改善零样本迁移至新物体的能力，显著优于流行的VLA基线。",
          "reasonCn": "重新设计VLA信息流以解耦陈述与程序知识，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.21496v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21496v1",
          "published": "2026-06-19T14:43:58Z",
          "updated": "2026-06-19T14:43:58Z",
          "authors": [
            "Nikolaos Tsagkas",
            "Andreas Sochopoulos",
            "Chris Xiaoxuan Lu",
            "Oisin Mac Aodha",
            "Alexandros Kouris"
          ],
          "categories": [
            "cs.RO",
            "cs.AI",
            "cs.CV",
            "cs.LG"
          ],
          "heuristicScore": 88,
          "llmTotalScore": 88
        },
        {
          "id": "2606.18589v1",
          "title": "DREAM-Chunk: Reactive Action Chunking with Latent World Model",
          "summary": "Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning.",
          "summaryCn": "DREAM-Chunk在测试时采样候选动作块，用潜在世界模型预测其未来并选择与实际最一致的块，无需微调即可提高动作块策略在随机动态下的鲁棒性。",
          "reasonCn": "测试时利用潜在世界模型增强VLA动作块策略的反应性，属于二者结合。",
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
          "heuristicScore": 84,
          "llmTotalScore": 84
        },
        {
          "id": "2606.20857v1",
          "title": "SignVLA: Real-Time Sign Language-Guided Robotic Manipulation via Attention LSTM and Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models enable robots to execute manipulation tasks from natural-language instructions grounded in visual observations. However, existing VLA interfaces primarily rely on speech or text input, limiting accessibility for deaf, hard-of-hearing, and speech-impaired users. We present SignVLA, a real-time sign-language-guided VLA framework for accessible human-robot interaction.",
          "summaryCn": "SignVLA通过注意力LSTM实时识别手语手势转换为文本指令，送入下游VLA策略，实现听障人士可用的机器人操控。",
          "reasonCn": "为VLA模型扩展手语输入模态，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20857v1",
          "pdfLink": "https://arxiv.org/pdf/2606.20857v1",
          "published": "2026-06-18T18:46:12Z",
          "updated": "2026-06-18T18:46:12Z",
          "authors": [
            "Ningwei Bai",
            "Xinyu Tan",
            "Harry Gardner",
            "Zhengyang Zhong",
            "Liuhaichen Yang",
            "Luoyu Zhang",
            "Zhekai Duan",
            "Monkgogi Galeitsiwe",
            "Zezhi Tang"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "heuristicScore": 83,
          "llmTotalScore": 83
        },
        {
          "id": "2606.20246v2",
          "title": "Finetuning Vision-Language-Action Models Requires Fewer Layers Than You Think",
          "summary": "Vision-Language-Action (VLA) models pre-trained on massive video-robot datasets have revolutionized robotic manipulation, yet their multi-billion parameter architectures impose prohibitive computational burdens during downstream fine-tuning and real-time inference. In this work, we reveal a highly non-trivial architectural characteristic of these continuous control foundation policies (e.g., pi_0, GR00T-N1.5): despite being trained on diverse physical trajectories, they exhibit severe layer-wise representational r…",
          "summaryCn": "发现大型VLA存在严重层冗余，利用中心核对齐可永久压缩50%深度，微调后性能不变，训练和推理均加速。",
          "reasonCn": "提出VLA模型的无训练深度压缩，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.20246v2",
          "pdfLink": "https://arxiv.org/pdf/2606.20246v2",
          "published": "2026-06-18T13:57:12Z",
          "updated": "2026-06-20T12:01:11Z",
          "authors": [
            "Gia-Binh Nguyen",
            "Trong-Bao Ho",
            "Thien-Loc Ha",
            "Khoa Vo",
            "Philip Lund Møller",
            "Quang T. Nguyen",
            "Long Dinh",
            "Tung M. Luu",
            "Tuan Dam",
            "Vu Duong"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "heuristicScore": 81,
          "llmTotalScore": 81
        },
        {
          "id": "2606.21372v1",
          "title": "NAC: Neural Action Codec for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models rely on discrete action tokenizers to bridge continuous robot control and autoregressive sequence modeling, yet existing tokenizers often trade off between compression, latency, and downstream performance. We revisit this design through the lens of neural audio codecs-convolutional encoder-decoder architectures with residual vector quantization that serve as the standard front end for audio foundation models. Motivated by their success, we introduce the Neural Action Codec (NAC)…",
          "summaryCn": "NAC借鉴音频编解码器设计，将动作轨迹视为多通道信号进行多尺度RVQ压缩，提供紧凑有序的令牌空间，提升重建精度和下游成功率。",
          "reasonCn": "提出神经动作编解码器改进VLA动作分词，不涉及世界模型。",
          "lane": "VLA",
          "link": "https://arxiv.org/abs/2606.21372v1",
          "pdfLink": "https://arxiv.org/pdf/2606.21372v1",
          "published": "2026-06-19T12:24:49Z",
          "updated": "2026-06-19T12:24:49Z",
          "authors": [
            "Ahad Jawaid",
            "Yu Xiang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "heuristicScore": 80,
          "llmTotalScore": 80
        },
        {
          "id": "2606.17906v1",
          "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
          "summary": "Recent World-Action (WA) models demonstrate strong generalization ability and data efficiency, but they typically rely on expert trajectories for training. This reliance limits their ability to acquire fine-grained manipulation skills beyond the demonstration distribution and prevents them from continuously improving through real-world interaction. To address these limitations, we propose WAM-RL, a reinforcement learning framework that enables joint optimization of the world model and the action model through onli…",
          "summaryCn": "WAM-RL首次将RL引入世界动作模型，分层协调世界和动作模型优化，发现长时域任务必须联合优化二者，显著提升精细操控能力。",
          "reasonCn": "提出WAM-RL，通过在线交互联合强化学习优化世界模型与动作模型，属于WAM。",
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
          "heuristicScore": 79,
          "llmTotalScore": 79
        }
      ]
    },
    {
      "dateKey": "20260622",
      "dateLabel": "2026-06-22",
      "generatedAt": "2026-06-22T03:09:25.180856+00:00",
      "sourceMode": "fallback_7d",
      "sourceNoteCn": "当日严格窗口没有命中论文，已回退展示截止当日最近 7 天内最相关的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.19531v1",
          "title": "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
          "summary": "World Action Models (WAMs) commonly rely on video generation to bridge visual world modeling and robot control. However, video-based WAMs face three coupled limitations: dense multi-frame future tokens make inference costly, full video prediction spends capacity on action-irrelevant temporal and appearance details, and long-horizon future imagination may introduce errors that mislead action prediction. These issues raise a simple question: Does world action model really need video generation?",
          "summaryCn": "ImageWAM 利用预训练图像编辑模型替代视频生成，实现高效世界动作建模。该方法无需在推理时解码目标帧，直接生成隐式世界-动作上下文用于流匹配动作预测，显著降低计算开销。在仿真和真实实验中均优于 VLA 和 WAM 基线。",
          "reasonCn": "提出一种基于图像编辑的世界动作模型框架，节省计算资源并提升动作预测性能，同时涉及视觉、语言指令和动作。",
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
          "heuristicScore": 121,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20562v1",
          "title": "MemoryWAM: Efficient World Action Modeling with Persistent Memory",
          "summary": "Robust robotic manipulation in the real world requires not only an understanding of the current observation, but also memory and dynamics modeling. World action models (WAMs) possess these capabilities by jointly modeling visual foresight and actions conditioned on both current and historical observations, making them a promising paradigm for robotic manipulation. However, existing WAMs face a fundamental trade-off: methods with efficient inference typically condition only on a bounded window of recent observation…",
          "summaryCn": "MemoryWAM 通过混合记忆设计（近期帧、事件锚帧、压缩要旨令牌）实现持久记忆的世界动作模型。定制注意力机制在保持低延迟和内存的同时，支持长程依赖决策，在长周期记忆相关任务中优于 VLA 和 WAM 基线。",
          "reasonCn": "提出兼具高效推理与持久记忆的世界动作模型，联合视觉、历史与动作，适用于非马尔可夫环境。",
          "lane": "BOTH",
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
          "heuristicScore": 118,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19297v1",
          "title": "Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models",
          "summary": "Embodied Vision-Language-Action (VLA) models are typically obtained by fine-tuning powerful pretrained VLMs on robotics data, yet it is unclear how much commonsense and factual knowledge they retain after adaptation. Failures on knowledge-sensitive tasks are ambiguous, conflating missing knowledge with poor generalization of low-level control. We introduce Act2Answer, a lightweight protocol that adapts VLM knowledge benchmarks to VLA evaluation by requiring agents to answer through action.",
          "summaryCn": "Act2Answer 是一个轻量级协议，将 VLM 知识基准转化为 VLA 评估，要求智能体通过动作选择答案。通过层内意向探测，系统比较了7种 VLA 和9种 VLM 的知识保留情况，揭示了简单概念与复杂语义之间的差距。",
          "reasonCn": "专注于 VLA 模型的常识与世界知识保留评估，通过动作形式回答知识问题。",
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
          "heuristicScore": 109,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20285v1",
          "title": "Co-VLA: Coordination-Aware Structured Action Modeling for Dual-Arm Vision-Language-Action Systems",
          "summary": "Vision-language-action (VLA) models show strong capabilities in single and dual-arm robotic manipulation. Prior works show coordinated bimanual behaviors can emerge from end-to-end learning, leveraging large vision-language backbones with continuous action prediction. However, as bimanual tasks become tightly coupled and execution constraints become critical, implicit coordination alone is insufficient to ensure reliable, interpretable, and stable behavior.",
          "summaryCn": "Co-VLA 在 VLA 主干上引入结构化动作专家，通过模块化协调损失学习共享与残差潜在变量，显式建模双臂协调。潜在感知控制器在部署时实时调制同步、非对称、平滑及安全约束，增强可解释性与稳定性。",
          "reasonCn": "明确针对双臂 VLA 模型引入协调先验，提升协调性与可靠性。",
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
          "heuristicScore": 108,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18955v1",
          "title": "Motion-Focused Latent Action Enables Cross-Embodiment VLA Training from Human EgoVideos",
          "summary": "Training generalist Vision-Language-Action(VLA) models typically requires massive, diverse robotic datasets with high-fidelity action annotations. While egocentric human manipulation videos are abundant and capture significant environmental diversity, the absence of action labels makes them difficult to use in conventional training paradigms. To address this, we propose a latent-action-based framework designed to extract general action priors from unlabeled human videos.",
          "summaryCn": "该框架通过混合解耦 VQ-VAE 从人类自我中心视频中分离运动动态与背景，构建跨具身动作码书。VLM 骨干在人类数据上预训练学习动作意图，适应新具身时仅需少量轨迹，在模拟与真实环境中媲美大规模标注 VLA 模型。",
          "reasonCn": "利用无标签人类视频提取动作先验，实现 VLA 训练的跨具身泛化，明确涉及视觉、语言和动作。",
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
          "heuristicScore": 106,
          "llmTotalScore": 0
        },
        {
          "id": "2606.17046v1",
          "title": "Geometric Action Model for Robot Policy Learning",
          "summary": "Generalist robot policies must follow user instructions while reasoning about how objects, cameras, and robot actions interact in the 3D physical world. Recent vision-language-action models (VLAs) and video world-action models (WAMs) inherit strong semantic or temporal priors from large-scale foundation models, but they still operate primarily on 2D image frames or 2D-derived latent spaces, leaving implicit the 3D geometry required for contact-rich manipulation. We propose the Geometric Action Model (GAM), a langu…",
          "summaryCn": "几何动作模型（GAM）将几何基础模型拆分为观测编码器和因果未来预测器，在单一骨干中生成未来几何与动作。该设计保留了丰富的几何先验，在仿真和真实机器人操作基准上精度更高。",
          "reasonCn": "结合预训练几何基础模型，同时进行语言条件的未来预测和动作解码，兼具世界模型与动作模型功能。",
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
          "heuristicScore": 95,
          "llmTotalScore": 0
        },
        {
          "id": "2606.17924v1",
          "title": "PearlVLA: Progressive Embodied Action-Plan Refinement in Latent Space",
          "summary": "Current Vision-Language-Action (VLA) models face a trade-off between efficient action generation and explicit deliberation. Directly decoding actions from vision-language backbone representations enables low-latency control, whereas explicit reasoning through textual chains, pixel-level subgoals, or action search can improve planning but incurs substantial latency and computational cost. We propose PearlVLA, a VLA framework that moves deliberation into the latent space of a vision-language model (VLM).",
          "summaryCn": "PearlVLA 在 VLM 潜在空间中进行迭代动作计划细化，将元查询表示分为视觉分支和潜在计划分支。通过查询冻结隐式世界模型预测未来观察，计划条件引导更新，最后并行解码为动作块，在 LIBERO 基准上实现最优性能。",
          "reasonCn": "VLA 框架集成了隐式世界模型用于潜在动作计划细化，直接关联视觉、语言和动作。",
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
          "heuristicScore": 94,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19998v1",
          "title": "Tri-Info: Generalizable, Interpretable Failure Prediction for VLA Models via Information Theory",
          "summary": "Vision-Language-Action (VLA) models are increasingly deployed across diverse tasks, yet they remain black boxes whose physical interactions can cause irreversible harm, making generalizable and interpretable failure detection essential. We observe that successful and failed rollouts carry systematically different information-theoretic signatures. Building on this, we formalize VLA control as a closed-loop information pipeline and derive the Triple Information-theoretic (Tri-Info) signals that capture whether actio…",
          "summaryCn": "Tri-Info 基于信息论推导出三重信号（动作多样性、时间一致性、状态耦合），用于检测 VLA 失败。该方法无需再训练，跨架构、环境和真机迁移，准确率达 83%，并提供可解释的失败模式诊断。",
          "reasonCn": "为 VLA 模型提供可泛化的失败检测方法，虽不直接输出动作，但服务于 VLA 安全部署。",
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
          "heuristicScore": 93,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18589v1",
          "title": "DREAM-Chunk: Reactive Action Chunking with Latent World Model",
          "summary": "Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning.",
          "summaryCn": "DREAM-Chunk 在测试时对 VLA 策略采样多个候选动作块，用轻量隐式世界模型展开预测并选择最匹配的动作。该方法无需微调，在随机动态下提高动作块策略的鲁棒性，仿真和硬件实验中均有效。",
          "reasonCn": "测试时增强 VLA 动作块策略，利用隐式世界模型预测未来状态以选择更优动作块，属 VLA+世界模型。",
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
          "heuristicScore": 85,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20246v1",
          "title": "Finetuning Vision-Language-Action Models Requires Fewer Layers Than You Think",
          "summary": "Vision-Language-Action (VLA) models pre-trained on massive video-robot datasets have revolutionized robotic manipulation, yet their multi-billion parameter architectures impose prohibitive computational burdens during downstream fine-tuning and real-time inference. In this work, we reveal a highly non-trivial architectural characteristic of these continuous control foundation policies (e.g., pi_0, GR00T-N1.5): despite being trained on diverse physical trajectories, they exhibit severe layer-wise representational r…",
          "summaryCn": "本文揭示大型 VLA 模型（如 pi_0、GR00T-N1.5）存在层间冗余，提出无需训练的压缩流程。利用中心核对齐识别冗余层并永久移除，微调后训练时间减少 40-50%，推理提速 30%，性能不降。",
          "reasonCn": "专注于 VLA 模型的层冗余分析与压缩，直接涉及 VLA 架构优化。",
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
          "heuristicScore": 82,
          "llmTotalScore": 0
        },
        {
          "id": "2606.17906v1",
          "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
          "summary": "Recent World-Action (WA) models demonstrate strong generalization ability and data efficiency, but they typically rely on expert trajectories for training. This reliance limits their ability to acquire fine-grained manipulation skills beyond the demonstration distribution and prevents them from continuously improving through real-world interaction. To address these limitations, we propose WAM-RL, a reinforcement learning framework that enables joint optimization of the world model and the action model through onli…",
          "summaryCn": "WAM-RL 通过在线交互同时优化世界模型和动作模型，设计了分层 RL 方法。实验表明联合优化对长周期任务至关重要，仅优化动作模型对长周期增益有限，开拓了世界-动作模型在线 RL 方向。",
          "reasonCn": "针对世界-动作模型提出在线强化学习框架，联合优化世界模型和动作模型，明确用于动作策略提升。",
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
          "heuristicScore": 80,
          "llmTotalScore": 0
        },
        {
          "id": "2606.17598v1",
          "title": "MuseVLA: An Adaptive Multimodal Sensing Vision-Language-Action Model for Robotic Manipulation",
          "summary": "Humans naturally leverage diverse sensing modalities to interact with the physical world, while most Vision-Language-Action (VLA) models for robotics rely solely on RGB observations. This limits their ability to perceive physical properties that are difficult or impossible to infer from RGB cameras, such as temperature, sound, or radar response. We present MuseVLA, an adaptive multimodal sensing VLA model that integrates novel sensors as on-demand tools for robotic manipulation.",
          "summaryCn": "MuseVLA 是一种自适应多模态传感 VLA 模型，将新型传感器作为按需工具，通过生成传感器令牌和目标描述调用相应模态。引入统一中间表示（grounded sensor image）和合成数据管线，在需触觉、温度等的真实灵巧操作任务中表现优异。",
          "reasonCn": "扩展 VLA 至多模态传感，统一视觉与语言指令进行动作预测。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.17200v1",
          "title": "ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining",
          "summary": "Vision-Language-Action (VLA) models benefit from large-scale and diverse embodied data, yet scaling robot trajectory collection is costly and labor-intensive. Recent advances show that large-scale egocentric human videos provide complementary real-world supervision in pretraining. However, joint training on human and robot data remains challenging due to divergences in action spaces, embodiment structures, temporal dynamics, and supervision quality.",
          "summaryCn": "ACE-EGO-0 构建可扩展管道将自我中心人类视频转换为伪动作轨迹，并用统一的相机空间动作表示和形态条件进行联合训练。可靠性感知损失聚焦高质量信号，在4.53K小时机器人数据与1.48K小时人类数据上提升 VLA 预训练效果。",
          "reasonCn": "提出统一异构数据（人类和机器人）的 VLA 预训练框架，核心为动作空间对齐与可靠监督。",
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
          "heuristicScore": 79,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19784v1",
          "title": "EquiVLA: A General Framework for Rotationally Equivariant Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a powerful paradigm for generalist robot manipulation, yet they lack geometric inductive biases: policies trained at specific orientations require substantially more data to generalize across rotational configurations. We present \\textsc{EquiVLA}, the first general framework for end-to-end $\\mathrm{SO}(2)$-equivariant VLA models, applicable to any architecture coupling a frozen vision-language backbone with a flow-matching Diffusion Transformer action head. \\text…",
          "summaryCn": "EquiVLA 是首个端到端 SO(2) 等变 VLA 框架，包含近似等变视觉感知器和精确等变流匹配扩散 Transformer 动作头。在 LIBERO、CALVIN 和真实 Mobile ALOHA 任务上显著提高成功率，减少训练数据需求。",
          "reasonCn": "为 VLA 模型引入旋转等变性，从视觉输入到动作输出均保持 SO(2) 近似等变，提升泛化。",
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
          "heuristicScore": 78,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18043v1",
          "title": "Uncertainty Quantification for Flow-Based Vision-Language-Action Models",
          "summary": "Vision-language-action models (VLAs) combine vision-language backbones with expressive generative action heads trained via flow matching on large-scale robotic datasets. Despite their strong empirical performance in robotic manipulation, VLAs lack mechanisms to quantify confidence in their predictions and to detect when their actions may be unreliable. This presents a critical limitation for real-world deployment in non-stationary environments, where models inevitably encounter scenarios outside their pretraining…",
          "summaryCn": "本文推导流匹配模型中通过速度场分歧（VFD）高效估计认知不确定性的方法。SAVE 框架利用不确定性引导主动多任务微调，减少 22% 专家演示需求，在 LIBERO 基准上实现良好校准和失败检测。",
          "reasonCn": "针对流匹配 VLA 模型提出不确定性量化方法，用于失败检测与主动微调，直接服务 VLA。",
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
          "heuristicScore": 77,
          "llmTotalScore": 0
        },
        {
          "id": "2606.20092v1",
          "title": "EventVLA: Event-Driven Visual Evidence Memory for Long-Horizon Vision-Language-Action Policies",
          "summary": "Memory remains a critical bottleneck for long-horizon robotic manipulation, as standard Vision-Language-Action (VLA) policies often fail when task-relevant cues become occluded or unobservable over time. While existing memory-augmented methods utilize historical context, they either suffer from severe information bottlenecks, incur high latency via decoupled dual systems, or rely on unselective buffers that accumulate massive visual redundancies. To address these limitations, we introduce EventVLA, an end-to-end f…",
          "summaryCn": "EventVLA 引入动态关键帧证据记忆（KEM）模块，从 VLA 潜在嵌入预测未来关键帧概率，主动存储任务关键视觉事件。在 RoboTwin-MeM 等17项记忆依赖任务中，显著优于基线，解决遮挡后的信息丢失问题。",
          "reasonCn": "为长周期 VLA 策略设计稀疏视觉证据记忆，直接提升 VLA 在遮挡任务中的表现。",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        },
        {
          "id": "2606.19408v1",
          "title": "FlexLAM: Resolving the Bottleneck Trade-off in Latent Action Learning",
          "summary": "Latent actions provide a compact interface between action-free video and downstream decision-making, yet existing Latent Action Models (LAMs) force every transition through a fixed-capacity bottleneck. We identify a bottleneck trade-off: overly tight codes can discard transition cues needed for action alignment, while overly loose codes preserve additional transition variation that must be resolved when alignment labels are scarce or narrowly distributed. FlexLAM replaces this fixed capacity with variable-length l…",
          "summaryCn": "FlexLAM 用可变长度潜在动作替代固定容量瓶颈，通过嵌套 dropout 训练得到前缀有效码。在相同令牌预算下性能更优，且支持推理时调整码长度，无需重新训练，提升视频重建与下游决策。",
          "reasonCn": "改进潜在动作模型（LAM），用于世界模型与动作模型，本质是提升 WAM 中潜在动作瓶颈。",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18953v1",
          "title": "Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement",
          "summary": "Vision-Language-Action (VLA) models can generalize across diverse manipulation tasks, but their imitation-learning-based policies remain brittle in precise physical interactions due to compounding execution errors; Can a reinforcement learning policy trained purely in simulation improve the robustness of real-world VLAs zero-shot? Residual RL, which learns a corrective policy on top of a frozen VLA, offers a natural framework, but existing approaches face a fundamental sim-to-real dilemma: privileged-state methods…",
          "summaryCn": "提出对象中心残差 RL 框架，仅用对象位姿在仿真中训练修正 VLA 动作的策略，并通过域对齐和噪声注入实现零样本迁移。在 Franka 机器人上五项任务成功率从 42% 提升至 76%，改善数据还可用于 VLA 自训练。",
          "reasonCn": "利用 RL 在仿真中训练残差策略，零样本提升 VLA 的真实世界鲁棒性，直接增强 VLA 动作。",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        },
        {
          "id": "2606.18610v1",
          "title": "SC3-Eval: Evaluating Robot Foundation Models via Self-Consistent Video Generation",
          "summary": "Evaluating generalist robot manipulation policies in the real world is expensive, slow, and difficult to scale. Action-conditioned video world models offer a scalable alternative by simulating policy rollouts. Autoregressive rollouts accumulate compounding errors, observations across multiple camera views must remain mutually consistent, and the evaluator must generalize to policies whose behaviors lie outside the training distribution.",
          "summaryCn": "SC3-Eval 将预训练视频基础模型适配为策略评估器，通过前向-逆向动力学一致、多视角一致和测试时一致减少累积误差。在多个基准上，其生成的动作一致性视频可复现策略失败模式，提升评估可靠性。",
          "reasonCn": "构建自一致视频生成方法作为策略评估器，核心是动作条件世界模型，用于策略评估。",
          "lane": "WAM",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        },
        {
          "id": "2606.16253v1",
          "title": "Learned Image Compression for Vision-Language-Action Models",
          "summary": "Vision-language-action (VLA) models increasingly rely on high-frequency multi-camera observations, making visual communication a major bottleneck for real-time robotic control in bandwidth-constrained or distributed deployment settings. Existing image and video codecs, however, are designed to preserve generic visual fidelity rather than the control performance of downstream VLA policies. In this work, we introduce SPARC (SPatially Adaptive Rate Control), a learned image compression framework tailored for VLA-driv…",
          "summaryCn": "SPARC 框架为 VLA 机器人设计空间自适应码率的学习图像压缩。轻量时间掩码选择器按任务相关性分配码率，并引入倾斜码率损失保留关键视觉模式。在 RoboCasa365、VLABench 等基准上以更低带宽保持控制性能。",
          "reasonCn": "针对 VLA 策略的视觉通讯瓶颈提出学习压缩方法，直接优化控制性能而非像素保真度。",
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
          "heuristicScore": 74,
          "llmTotalScore": 0
        }
      ]
    },
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
      "generatedAt": "2026-07-06T02:31:03.241536+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.08242v1",
          "title": "Light-WAM: Efficient World Action Models with State-Fusion Action Decoding",
          "summary": "World Action Models (WAMs) extend robot policy learning by incorporating future prediction as an additional training objective, encouraging the policy to encode task-relevant temporal structure in its representations. Current WAMs often rely on large-scale generative architectures that incur high training costs and inference latency, making them difficult to deploy as efficient closed-loop policies. We propose Light-WAM, a lightweight World Action Model for efficient robot manipulation.",
          "summaryCn": "Light-WAM提出一种轻量级世界动作模型，通过潜空间未来视频监督和状态融合动作专家实现高效机器人操作。在LIBERO和RoboTwin 2.0上表现良好，且具有低推理延迟和内存占用。",
          "reasonCn": "明确提出世界动作模型（WAM），用未来视频预测辅助动作预测，针对机器人操作。",
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
          "id": "2606.08288v1",
          "title": "MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model",
          "summary": "Vision-language-action (VLA) models increasingly condition robot policies on history, depth, or 4D features to resolve ambiguity in long-horizon manipulation. However, more spatiotemporal evidence is not necessarily better: when the injected evidence is not motion-consistent, it can introduce geometric drift, fragmented temporal cues, and unstable action generation. This raises a simple question: should a VLA remember past frames, or remember the motion that connects them?",
          "summaryCn": "MotionVLA提出一种运动历史接口，将过去视频帧转换为时空一致的轨迹场令牌，注入VLA模型以改善长程操作。实验表明能产生更平滑、直接的动作执行。",
          "reasonCn": "论文直接改进视觉-语言-行动模型，通过注入几何运动信息提升长程操作性能，符合VLA标准。",
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
        }
      ]
    },
    {
      "dateKey": "20260606",
      "dateLabel": "2026-06-06",
      "generatedAt": "2026-07-06T02:30:24.427711+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.07089v1",
          "title": "Dreaming when Necessary: Advancing World Action Models with Adaptive Multi-Modal Reasoning",
          "summary": "World Action Models (WAMs) offer a promising approach to embodied intelligence, yet existing methods rely heavily on video prediction as action priors and lack adaptive multimodal reasoning, limiting their effectiveness on long-horizon, complex tasks. We observe that WAMs require different multimodal reasoning modes under different execution contexts: textual reasoning is essential during task transitions to guide high-level action prediction, while visual reasoning is critical during fine-grained manipulation for…",
          "summaryCn": "提出自适应世界动作模型AdaWAM，根据执行上下文动态切换文本或视觉推理，在仿真和真实具身任务中提升效率并超越现有策略。",
          "reasonCn": "该论文提出自适应多模态推理的世界动作模型AdaWAM，直接将世界模型用于动作预测与任务执行，符合WAM标准。",
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
          "summaryCn": "探究视频世界模型潜空间动作相关性的来源，发现时序视频预训练比像素重建更关键，揭示自监督编码器在视觉保真度与动作预测间取得更优帕累托权衡。",
          "reasonCn": "该论文研究视频世界模型潜变量的动作相关性，通过逆动力学探针评估动作预测能力，明确关注世界模型在动作相关任务中的作用，符合WAM标准。",
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
        }
      ]
    },
    {
      "dateKey": "20260605",
      "dateLabel": "2026-06-05",
      "generatedAt": "2026-07-06T02:29:54.135420+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05979v1",
          "title": "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis",
          "summary": "We propose world-language-action (WLA) models as a new class of embodied foundation models. WLA takes textual instructions, images, and robot states as inputs to jointly predict textual subtasks, subgoal images, and robot actions, conjoining the \\emph{world modeling interface} to learn from extensive egocentric videos as in the world-action model (WAM) and the \\emph{language reasoning} capacities to solve complex long-horizon tasks as in vision-language-action (VLA) models. At the core of WLA lies an \\emph{autoreg…",
          "summaryCn": "提出世界-语言-动作(WLA)模型，统一世界建模、语言推理与动作合成；采用自回归Transformer预测包含语义意图和物理动态的下一状态，并利用世界专家监督物理动态以辅助动作生成。该模型在仿真和真实环境中验证，可实现40ms快速推理，支持测试时扩展，为具身智能提供统一多模态基础模型。",
          "reasonCn": "该论文提出世界-语言-动作模型，同时涉及视觉输入、语言指令和机器人动作输出，并以世界模型为核心用于动作预测，符合VLA和WAM双重标准。",
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
          "llmTotalScore": 0
        },
        {
          "id": "2606.05645v2",
          "title": "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning",
          "summary": "Autonomous driving requires reasoning about how ego actions shape future world evolution, rather than merely mapping observations to actions. However, most end-to-end methods rely on direct state-to-action imitation, while existing world models often remain weakly aligned with downstream policy generation. We introduce Discrete-WAM, a unified discrete vision-action world-policy framework that represents visual observations, future states, high-level decisions, and ego actions within a shared token space.",
          "summaryCn": "提出离散世界-动作模型(Discrete-WAM)，在统一离散token空间内联合世界建模与策略学习，通过多任务多阶段预训练实现动作条件未来预测直接支持策略生成。在自动驾驶基准上展现强规划性能，并支持可控未来生成、反事实评估等，通过离散表示对齐将世界模型与策略一体化，提高下游规划效率与可解释性。",
          "reasonCn": "论文提出离散世界-动作模型Discrete-WAM，以世界模型为核心，通过统一视觉-动作token空间进行动作条件未来预测并直接支持策略生成，符合WAM标准。",
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
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260604",
      "dateLabel": "2026-06-04",
      "generatedAt": "2026-07-06T02:29:19.155380+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.05254v1",
          "title": "Flash-WAM: Modality-Aware Distillation for World Action Models",
          "summary": "World-action models (WAMs) jointly generate future video and robot actions through iterative diffusion, achieving strong performance on manipulation benchmarks but requiring tens of denoising steps, a cost that precludes real-time control. Step distillation has emerged as the natural remedy, but off-the-shelf methods break down in the joint video-action setting because video and action streams use different SNR-shifted noise schedules and reach training with substantially different marginal noise distributions, an…",
          "summaryCn": "Flash-WAM 是一种模态感知的一致性蒸馏方法，有效解决了视频与动作流在噪声分布上的不对称问题，将世界动作模型推理压缩至单步，实现23倍加速和实时控制。",
          "reasonCn": "提出针对世界动作模型的模态感知蒸馏框架，用于实时控制。",
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
          "summaryCn": "OSCAR 是一个精准的动作条件视频世界模型，通过标准化数据流程和2D骨架渲染实现跨形态泛化，能够有效评估机器人策略并缩减虚拟与现实间的鸿沟。",
          "reasonCn": "构建以动作为条件的视频世界模型，用于跨形态机器人策略评估。",
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
          "id": "2606.04627v2",
          "title": "MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models",
          "summary": "Mobile agents are increasingly expected to operate everyday applications from screenshots and language goals, where reliable control requires reasoning over screen affordances, multi-step navigation, and future state changes. However, many agents externalize this computation as long textual chains of thought, which slows interaction, increases supervision cost, and complicates deployment. We introduce MIRAGE, a framework that learns continuous latent reasoning representations from visible textual reasoning traces.",
          "summaryCn": "MIRAGE 将显式推理压缩为隐空间表示，并引入生成式世界模型目标预测未来 UI 截图，使移动 agent 在隐空间高效推理，显著降低令牌消耗并提升性能。",
          "reasonCn": "使用生成式世界模型预测未来界面，辅助移动agent的动作决策。",
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
          "id": "2606.04907v2",
          "title": "WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation",
          "summary": "Visual navigation requires generating smooth and collision-free trajectories under complex geometric and physical constraints. Existing reactive policies that directly map observations to actions lack anticipatory reasoning, limiting their ability to proactively avoid obstacles. While visual imagination offers predictive foresight, conventional modular approaches separate scene prediction from policy learning, often leading to error accumulation and inefficient inference.",
          "summaryCn": "WAM-Nav 是一种非对称潜在世界-动作模型，通过共享扩散 Transformer 联合预测长程动作和短程视觉预测，并采用双流上下文条件机制，实现了鲁棒且高效的视觉导航。",
          "reasonCn": "提出潜在世界-动作模型，用于视觉导航，同时生成动作和视觉预测。",
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
        }
      ]
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-07-06T02:28:56.161561+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time.",
          "summaryCn": "该论文提出GeoSem-WAM，通过几何和语义监督增强世界动作模型的潜在表示，以提升动作预测精度和场景理解。它联合预测未来RGB、几何和语义，但避免推理时显式生成视频。实验证明该方法在具身场景下提高了鲁棒性和效率。",
          "reasonCn": "该论文以世界动作模型为核心，明确用于动作预测，属于WAM范畴。",
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
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions.",
          "summaryCn": "该论文提出Donk，一个统一的视频-动作联合去噪模型，用于灵巧手操作。它从语言、初始图像和手部状态生成未来视频和动作轨迹，兼具策略和数据生成功能，属于VLA和WAM范畴。",
          "reasonCn": "该论文同时涉及视觉输入、语言指令和机器人动作输出，并以世界模型为核心进行动作预测，符合VLA和WAM标准。",
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
          "llmTotalScore": 0
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-07-06T02:28:28.484709+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch.",
          "summaryCn": "WALL-WM通过事件对齐的预训练和数据构建，解决视觉-语言-动作模型中的粒度不匹配问题。它支持事件模式和统一模式两种推理，实现灵活的动作执行。该框架提升了多样化行为、场景和任务结构下的可扩展学习能力。",
          "reasonCn": "论文提出事件驱动的世界动作模型，同时涉及视觉、语言和动作的预训练与预测，符合VLA和WAM标准。",
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
          "id": "2606.02800v4",
          "title": "Cosmos 3: Omnimodal World Models for Physical AI",
          "summary": "We introduce Cosmos 3, a family of omnimodal world models designed to jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. By supporting highly flexible input-output configurations, Cosmos 3 seamlessly unifies critical modalities for Physical AI -- effectively subsuming vision-language models, video generators, world simulators, and world-action models into a single framework. Our evaluation demonstrates that Cosmos 3 establishes a…",
          "summaryCn": "Cosmos 3是一个全模态世界模型，通过混合变压器架构联合处理语言、图像、视频、音频和动作序列。它在理解和生成任务上达到新水平，为具身智能体提供通用骨干。模型开源，推动物理AI研究。",
          "reasonCn": "Cosmos 3统一处理视觉、语言和动作序列，兼具世界模型功能，符合VLA与WAM标准。",
          "lane": "BOTH",
          "link": "https://arxiv.org/abs/2606.02800v4",
          "pdfLink": "https://arxiv.org/pdf/2606.02800v4",
          "published": "2026-06-01T19:12:30Z",
          "updated": "2026-06-23T17:33:32Z",
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
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-07-06T02:27:58.472336+00:00",
      "sourceMode": "strict",
      "sourceNoteCn": "严格窗口：使用前一天 08:00 到当天 08:00 的 VLA / WAM 论文。",
      "papers": [
        {
          "id": "2606.01095v1",
          "title": "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA",
          "summary": "Vision-language-action (VLA) policies and World-Action Models (WAM) represent two increasingly important paradigms for robotic manipulation. However, it remains unclear whether future prediction in WAMs leads to behaviorally meaningful improvements beyond final task success. In this paper, we ask whether WAMs merely add future prediction, or whether they change robot behavior and internal representations in ways that are actionable for control.",
          "summaryCn": "本文提出了一种模型无关的诊断框架，从行为rollout和表征分析两个维度评估VLA和WAM策略。实验揭示了WAM在物体级行为和预测结构上的优势，为机器人策略选择提供了深入洞察。",
          "reasonCn": "论文提出同时评估VLA和WAM的诊断框架，涉及视觉、语言指令和动作，且关注世界模型的动作预测与控制。",
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
          "id": "2606.01164v1",
          "title": "Towards Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends",
          "summary": "With rapid development of large language models and diffusion-based content generation, world modeling has attracted increasing research attention, benefiting various downstream domains such as game engines, embodied AI, autonomous driving, etc. Through explicitly incorporating user actions into world state transition, recent literature empowers world modeling with interactivity in an action-conditioned video or 3D generation paradigm, further enhancing controllability over world evolutions and facilitating users…",
          "summaryCn": "本文综述了交互式视频世界建模的前沿进展，聚焦动作条件控制、长程交互和实时响应等挑战。它为开放世界探索、游戏、自动驾驶和机器人等多个领域提供了基准和未来方向。",
          "reasonCn": "该论文系统综述交互式世界建模，强调动作条件下的可控性与规划，符合WAM的核心定义。",
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
          "id": "2606.01205v2",
          "title": "ImagineUAV: Aerial Vision-Language Navigation via World-Action Modeling and Kinodynamic Planning",
          "summary": "Vision-language navigation (VLN) for UAVs demands grounding free-form instructions into 6-DoF flight under partial observability. While Vision-Language-Action (VLA) models excel at semantic reasoning, they suffer from brittleness due to geometric inconsistency and dynamics mismatch. To address this, we propose ImagineUAV, an imagination-driven framework leveraging cascaded world-action modeling.",
          "summaryCn": "ImagineUAV通过级联世界-动作建模，使用潜在视频扩散模型想象未来观察并提取6-DoF动作，结合动力学规划实现无人机导航。仅1.3B参数，在基准和现实飞行中超越基线，验证了想象驱动方法的实用性。",
          "reasonCn": "论文提出想象驱动的无人机视觉语言导航框架，兼具视觉-语言-动作模型和世界-动作建模，直接用于动作规划。",
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
        }
      ]
    }
  ]
};

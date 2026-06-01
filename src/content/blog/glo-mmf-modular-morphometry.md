---
title: 'Glo-MMF：模块化多模型框架，自动定量肾小球超微结构'
description: '用分割、分类、检测三个专用模型 + 四个后处理模块，联合定量 GBM 厚度、足突融合程度与电子致密物位置。发表于 Computer Methods and Programs in Biomedicine (2026)。'
pubDate: 'Aug 15 2026'
---

> **论文** · *Glo-MMF: A modular multi-model framework for automated morphometry of glomerular ultrastructural features*
> **Zhentai Zhang**, Danyi Weng, Guibin Zhang, Xiang Chen, Kaixing Long, Jian Geng, Yanmeng Lu, Lei Zhang, Zhitao Zhou, Lei Cao
> *Computer Methods and Programs in Biomedicine*, Vol. 283, 2026, Article 109431 · [DOI: 10.1016/j.cmpb.2026.109431](https://doi.org/10.1016/j.cmpb.2026.109431)

## 背景与目标

对肾小球超微结构做自动形态学分析，能减轻病理医生负担、提升效率与准确率。但不同超微特征的**定量流程高度异质**——单一模型很难同时满足临床对「结构测量 + 状态评估 + 病灶定位」多目标的需求。

为此我们提出 **Glo-MMF**，一个整合分割、分类、检测的**模块化框架**，目标是在肾小球内**联合定量多个关键超微特征**，为肾脏病理研究与诊断辅助提供支撑。

## 方法：把异质任务拆给专用模型

Glo-MMF 把定量任务拆解为三个不同粒度的深度学习模型：

1. **超微结构分割模型** —— 分割肾小球滤过屏障（GFB）；
2. **GFB 区域分类模型** —— 评估区域是否适合测量，并判断足突融合（FPE）状态；
3. **电子致密物（EDD）检测模型** —— 检测各种形状大小的 EDD。

三个模型的输出，再经由一套包含**四个计算机视觉后处理模块**的工作流系统整合，实现多个超微特征的测量。其中关键操作包括 **GFB 区域的自适应裁剪**与**测量位置的筛选**——这显著提升了测量可靠性，突破了传统分级描述的局限，给出更完整、更可解释的定量结果。

## 实验与结果

- 训练：**372** 张肾活检电镜图像；
- 测试：**115** 例，覆盖 **9 种**肾脏病理类型；
- 可同时定量三项特征：**GBM 厚度**、**足突融合（FPE）程度**、**EDD 位置**；
- 三项自动定量结果与病理报告中的描述**高度一致**；
- 在 CPU 环境下，单例完整处理（含 GBM 测厚、FPE 程度量化、EDD 定位）平均仅需 **4.23 ± 0.48 秒**。

> 注：框架内分割任务里，**GCLR 预训练的 U-Net** 取得最高平均 DSC **81.06%**，优于 TransUNet（77.13%）——延续了我们[上一篇 GCLR 工作](/blog/gclr-ssrl-gfb-segmentation/)的方法。

## Highlights

- 模块化框架整合三个专用模型完成超微结构分析；
- 定量 GBM 厚度、足突融合与 EDD 位置；
- 自适应裁剪过滤不适合的区域，使定量更可靠；
- 四个后处理模块，让超微测量结果对齐病理报告。

## 结论

Glo-MMF 的模块化设计带来了一定的灵活可扩展性，支持多个关键肾小球超微特征的联合定量。框架在多种肾脏病理类型上表现稳健、具备临床适用性，展现出在肾小球病理分析中高效辅助的潜力。

---

*本文为论文简介，详细方法与实验请见原文。代码见 GitHub 仓库 [Glo-MMF](https://github.com/zhentai-sn/Glo-MMF)。*

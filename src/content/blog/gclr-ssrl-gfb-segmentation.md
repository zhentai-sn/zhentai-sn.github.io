---
title: 'GCLR：用自监督学习分割肾小球滤过屏障（TEM）'
description: '一种为 GFB 超微结构分割量身设计的混合像素级 pretext task，整合全局聚类与局部修复，仅用极少标注就达到 SOTA。发表于 Artificial Intelligence in Medicine (2023)。'
pubDate: 'Dec 01 2023'
---

> **论文** · *GCLR: A self-supervised representation learning pretext task for glomerular filtration barrier segmentation in TEM images*
> Guoyu Lin, **Zhentai Zhang**, Kaixing Long, Yiwen Zhang, Yanmeng Lu, Jian Geng, Zhitao Zhou, Qianjin Feng, Lijun Lu, Lei Cao
> *Artificial Intelligence in Medicine*, Vol. 146, 2023, Article 102720 · [DOI: 10.1016/j.artmed.2023.102720](https://doi.org/10.1016/j.artmed.2023.102720)

## 这篇在解决什么问题

肾小球滤过屏障（GFB）由三种超微结构组成——肾小球内皮细胞（GECs）、肾小球基底膜（GBM）和足细胞。在透射电镜（TEM）图像里自动分割这三者，对辅助肾脏疾病诊断意义重大。但难点在于：**逐像素标注极其耗时耗力**，能用于全监督训练的标注数据非常有限，而 GFB 本身没有固定形态、与相似灰度的其他结构容易混淆、边界对比度又低。

我们的思路是用**自监督表征学习（SSRL）**：先在海量无标注的肾小球 TEM 图像上预训练，让模型学到有价值的潜在表征，再用少量标注微调下游分割任务，从而缓解标注稀缺。

## 核心方法：GCLR

关键在于"为下游任务选对 pretext task"。GFB 分割需要模型**既能在全局视野里把 GFB 作为整体识别出来，又能在局部精细刻画 GBM/GECs/足细胞的形状、边界与纹理**。

为此我们提出一个混合的**像素级** pretext task —— **GCLR（Global Clustering and Local Restoration）**,整合两个子任务：

- **全局聚类 GC**：通过学习全局上下文表征，把所有像素划分为若干内聚的簇，提升簇内相似度、放大簇间差异 → 捕捉 GFB 整体；
- **局部修复 LR**：通过学习局部细节表征，恢复被扰动局部区域的原始内容 → 精修三种子结构。

由于 GCLR **没有图像级子任务**，天然避免了"粗粒度 pretext 任务与细粒度下游任务对不齐"的问题；又**没有额外的任务专属分支**，避免了计算量增加。

## 实验与结果

- 预训练：**18,928** 张无标注肾小球 TEM 图像
- 微调：**311** 张标注图像
- 三种子结构的 Dice 相似系数分别达到 **86.56 ± 0.16%**、**75.56 ± 0.36%**、**79.41 ± 0.16%**，在同类自监督 pretext task 中取得 SOTA。

更值得一提的是：GCLR 预训练的效果**超过了**基于 MitoEM、COCO、ImageNet 三个大规模公开数据集的全监督预训练方法，且用的训练数据更少、时间更短。

## Highlights

- 首个针对 GFB 超微结构分割的自监督表征学习研究；
- 提出整合两个像素级子任务（全局聚类 + 局部修复）的混合 pretext task GCLR；
- 无图像级子任务，规避任务对齐问题；
- SOTA 性能，且实现简单。

---

*本文为论文简介，详细方法与实验请见原文。代码见 GitHub 仓库 [GCLR](https://github.com/zhentai-sn/GCLR)。*

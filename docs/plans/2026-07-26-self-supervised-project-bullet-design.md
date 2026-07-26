# Self-Supervised Project Bullet Design

## Goal

Expand the self-supervised learning bullet in the renal TEM project to roughly
two printed lines, emphasizing the algorithmic innovations of the two published
methods rather than only stating that pre-training improved performance.

## Approved Chinese Copy

研发面向肾小球电镜图像的自监督预训练算法，提出融合全局聚类与局部恢复的 GCLR，以及基于语义自适应区域划分的 USRegCon，兼顾全局上下文与局部细节表征，提升有限标注条件下的分割性能（论文 2 篇）。

## Method Fidelity

- GCLR is described through its global-clustering and local-restoration
  pixel-level pretext tasks.
- USRegCon is described through semantic-aware adaptive region partitioning and
  region-level contrastive learning.
- The bullet avoids unsupported claims and does not overload the resume with
  dataset sizes or Dice scores.

## English Direction

Keep the English version concise while naming both methods and their respective
innovations. Preserve the limited-annotation problem, global-context and
local-detail representation, and the two-publication outcome.

## Verification

- Build the Astro project successfully.
- Confirm both language versions contain GCLR and USRegCon.
- Render Chinese and English print previews and confirm each remains one A4
  page with no clipping or overlap.

# Resume Summary Compression Design

## Goal

Compress the resume summary to no more than three lines in the Chinese desktop
and print layout while preserving the candidate's engineering scope and product
values. Mobile layouts are not subject to the three-line constraint.

## Approved Chinese Copy

具备计算机视觉算法研发与医疗 AI 智能体应用落地经验，熟悉从业务需求、数据治理、模型训练评估到应用部署的完整流程。坚持以 AI 原生方式持续成长，探索技术与真实需求的交汇点，创造解决实际问题、经得起时间检验的产品。

## English Direction

Keep the English version semantically aligned and concise:

- retain computer-vision and healthcare AI-agent delivery experience;
- retain the end-to-end workflow from requirements through deployment;
- express AI-native growth and the goal of building durable products that solve
  real problems;
- remove the separate statement about imagination, judgment, and values.

## Verification

- Build the Astro project successfully.
- Confirm the Chinese and English summaries appear in the generated resume.
- Check the Chinese summary against the desktop/print content width and keep it
  within three rendered lines.

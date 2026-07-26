# Xingwen Work Experience Refresh Design

## Goal

Expand the Xingwen work experience into four concise resume bullets that show:

- healthcare LLM infrastructure ownership;
- production RAG and knowledge-base engineering;
- Multi-Agent and voice-agent delivery with measurable business impact;
- ongoing growth toward end-to-end AI full-stack delivery.

The copy must remain accurate about the role: the candidate is progressively
taking on frontend, backend, and algorithm delivery rather than claiming to
already be a mature full-stack engineer.

## Company Context

Add “全病程 AI 健康管理” after the company name to establish the business domain.

## Approved Chinese Copy

1. 建设与维护医疗大模型基础设施，打通模型网关（LiteLLM）、模型推理服务（vLLM、Xinference）、LLM 链路观测（Langfuse）以及指标监控与告警（Prometheus、Grafana、Nightingale，Webhook 通知）全链路。
2. 设计并迭代医疗知识库与生产级 RAG 系统，基于 RAGFlow、Milvus、LlamaIndex 与 GraphRAG，实现文档解析、向量检索、RAG 编排及图谱增强检索。
3. 研发 Multi-Agent 与语音 Agent 医疗应用，落地随访管理方案生成、基于患者画像的智能入组与方案匹配；推动智能外呼上线，累计服务 5 万+ 人次。
4. 向 AI 全栈工程方向拓展，逐步承担算法、后端与前端的端到端需求交付，推进功能从需求分析、方案设计到上线迭代的完整闭环。

## Terminology

- Use the official product capitalization: LiteLLM, vLLM, Xinference, Langfuse,
  Prometheus, Grafana, Nightingale, RAGFlow, Milvus, LlamaIndex, and GraphRAG.
- Treat Webhook as the alert-notification mechanism, not as an alerting platform.
- Describe GraphRAG as graph-enhanced retrieval.
- Use “模型网关” for LiteLLM because the deployed component is its proxy/gateway.

## English Direction

Translate the four bullets semantically rather than word-for-word. Preserve the
system layers, product names, delivered healthcare scenarios, 50,000+ service
interactions, and the progressive nature of the full-stack responsibilities.

## Verification

- Build the Astro project successfully.
- Confirm all four Chinese and English bullets appear in the generated resume.
- Confirm the work-experience section remains readable in desktop and print
  layouts without reducing the global type size.

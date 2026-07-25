# Resume Job Targeting Design

Date: 2026-07-25

## Goal

Refine the bilingual resume for a computer-vision and AI-agent algorithm role
while preserving factual accuracy and the user's intentionally chosen section
order.

## Section Order

1. Education
2. Work Experience
3. Projects
4. Selected Publications
5. Technical Skills
6. Summary

Remove the Honors and Awards section.

## Content Changes

- Add the main master's and bachelor's courses from the supplied PDF.
- Remove the phrase "Built with Gradio" from the iFLYTEK experience while
  retaining the annotation-tool, lesion-detection, feedback-analysis, and model
  release work.
- Strengthen the Guangdong Xingwen experience using verified experience with:
  - Production RAG systems.
  - Knowledge bases and knowledge graphs.
  - Multi-Agent and voice-agent healthcare applications.
  - MCP-based agent tool and service integration.
  - FastAPI and Agno.
- Present C++ as familiar rather than expert.
- Do not claim TensorFlow, model lightweighting, inference acceleration,
  Jetson deployment, or agriculture-domain experience.
- Emphasize transferable computer-vision experience: data collection,
  annotation, cleaning, model training, evaluation, segmentation, and
  detection.

## Publications

- Place publications directly after Projects.
- Use compact author lists with abbreviated names and `et al.`.
- Link each paper title to its DOI or authoritative journal page.
- Keep each citation as compact as practical on desktop while allowing natural
  wrapping on narrow screens.

## Verification

- Confirm the requested section order in generated HTML.
- Confirm the Honors and Awards section is absent.
- Confirm every publication has a valid outbound link.
- Build the Astro site.
- Confirm the local preview responds successfully and the existing contact
  reveal behavior remains intact.

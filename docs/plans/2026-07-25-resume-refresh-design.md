# Resume Refresh Design

Date: 2026-07-25

## Goal

Update the existing bilingual Astro resume page with the real information from
`CV-250626.pdf`, expand the current employment entry, add the Glo-MMF
publication, and reduce casual scraping of the resume-only phone number and QQ
email address.

## Scope

- Keep the existing resume page, bilingual language toggle, academic visual
  style, responsive behavior, and print-to-PDF workflow.
- Replace placeholder education, projects, employment, publications, and
  awards with verified information from the supplied PDF and repository
  publication metadata.
- Add a `Work Experience` section containing:
  - Guangdong Xingwen Digital Intelligence Technology Co., Ltd., March 2025 to
    present, AI Algorithm Engineer.
  - iFLYTEK South China Artificial Intelligence Research Institute, November
    2024 to February 2025, Assistant Algorithm Engineer.
- Expand the Guangdong Xingwen entry around:
  - Medical AI application infrastructure, model deployment, and service
    integration.
  - Multi-Agent and voice-agent applications for healthcare scenarios.
  - Design, implementation, and iteration of pre-consultation and intelligent
    follow-up workflows.
- Add the complete Glo-MMF citation using metadata already present in the blog.
- Do not add a login system.

## Contact Privacy

- Apply privacy behavior only to the resume page.
- Keep the public GitHub link visible.
- Do not render the complete QQ email address or phone number in the initial
  resume DOM.
- Render separate reveal buttons for email and phone.
- On an explicit click, reconstruct and display the selected contact value in
  the browser.
- Printing before reveal keeps the values hidden; printing after reveal
  includes the revealed values.
- This is lightweight protection against ordinary static scrapers, not a claim
  of absolute secrecy on a static GitHub Pages site.

## Verification

- Build the Astro site locally.
- Check Chinese and English content.
- Check desktop and narrow/mobile layouts.
- Verify both reveal buttons and their accessible labels.
- Verify the resume print layout and that contact visibility follows reveal
  state.

# Publication Metrics Design

Date: 2026-07-26

## Goal

Add concise journal-quality context to all three publications without bold
emphasis or changing the existing DOI links.

## Metric Convention

- Use the March 2025 upgraded CAS journal partition table for both
  international journals.
- Use the 2025 Journal Impact Factor released in June 2026.
- Display the metric year with the JIF to avoid ambiguity.
- Label the domestic journal only as a Chinese Core Journal.

## Labels

1. Computer Methods and Programs in Biomedicine
   - Chinese: `中科院医学二区，JIF 2025：6.4`
   - English: `CAS Q2 · JIF 2025: 6.4`
2. Artificial Intelligence in Medicine
   - Chinese: `中科院工程技术一区，JIF 2025：7.8`
   - English: `CAS Q1 · JIF 2025: 7.8`
3. Journal of Southern Medical University
   - Chinese: `中文核心`
   - English: `Chinese Core Journal`

## Presentation

- Add each label after the journal citation.
- Use regular font weight and subdued text color.
- Keep natural wrapping on narrow screens.

## Verification

- Confirm all three labels exist in Chinese and English output.
- Confirm DOI links remain unchanged.
- Build the Astro site and restore the local preview.

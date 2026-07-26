# Resume Print Readability Design

## Goal

Make the printed resume easier to read and visually closer to the on-screen
version while preserving the established one-page A4 layout in both languages.

## Typography

Use a balanced increase in print typography:

- Chinese body font size: `10.2pt` to `10.6pt`
- Chinese line height: `1.40` to `1.43`
- English body font size: `9.5pt` to `9.8pt`
- English line height: `1.32` to `1.35`

Keep the candidate name and section heading sizes unchanged. Do not apply
global letter spacing because the resume contains many English technical terms
and publication titles that are sensitive to line wrapping.

## Spacing

Increase section and item spacing only slightly so the additional whitespace
improves scanning without consuming the entire print margin:

- increase section bottom spacing by a small amount;
- increase item bottom spacing by a small amount;
- keep bullet spacing compact;
- preserve the current two-row resume header height.

## Scope

- Apply the changes only in print styles.
- Keep the browser layout unchanged.
- Preserve the current content, section order, contact privacy behavior, and
  publication links.

## Verification

- Build the Astro project successfully.
- Generate Chinese and English A4 print outputs.
- Confirm each language remains one page.
- Inspect the rendered output for clipping, overflow, and unintended wrapping.

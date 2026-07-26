# Resume Header Without GitHub Design

## Goal

Remove the GitHub profile from the resume header and rebalance the remaining
information without increasing the resume height or affecting the one-page A4
layout.

## Header Structure

Keep the approved two-column hierarchy:

- left: candidate name;
- right, first line: target role;
- right, second line: manually revealed QQ email and phone number.

The name remains the visual anchor. The right-side metadata is right-aligned
and vertically centered against the name so the shorter contact row still
feels balanced after removing GitHub.

## Responsive Behavior

- Desktop and print: use a stable two-column grid with the metadata aligned to
  the right edge.
- Mobile: stack the name and metadata, center both lines, and allow the contact
  buttons to wrap when needed.

## Scope

- Remove the GitHub link and its unused import from the resume page only.
- Keep the QQ email and phone number hidden until manually revealed.
- Do not change the resume content, section order, or footer behavior.

## Verification

- Build the Astro project successfully.
- Check desktop and mobile header alignment in both languages.
- Confirm Chinese and English print previews remain one A4 page.

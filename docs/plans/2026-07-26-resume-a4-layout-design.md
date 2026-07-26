# Resume A4 Layout Design

## Goal

Reduce vertical space while improving information hierarchy so both the Chinese
and English resume print views can fit on one A4 page without deleting the
approved work, project, publication, skills, or summary content.

## Header

Use a two-column header on desktop and in print:

- left: the candidate name, left-aligned and vertically centered;
- right: target role followed by contact details, both right-aligned.

On narrow screens, return to a stacked layout so the header remains readable.

## Education

Render each education item in two compact rows:

1. institution, program, and degree on the left; dates on the right;
2. all major courses on one line on the left; GPA on the right.

Remove the “full-time” label and advisor information. Apply the same structure
to the Chinese and English versions.

## Print Strategy

Implement the structural changes first without reducing the global body font.
After rendering both languages, tighten print-only spacing and typography only
if a version still exceeds one A4 page.

## Responsive Behavior

- Desktop and print: two-column header and aligned education metadata.
- Mobile: stack the header content and education metadata to avoid horizontal
  overflow.

## Verification

- Build the Astro project successfully.
- Confirm both languages render the intended header and education structure.
- Generate Chinese and English print previews and verify that each produces one
  A4 page.
- Keep publication links active and do not change the approved section order.

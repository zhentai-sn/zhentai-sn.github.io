# Resume Print Overflow Correction Design

## Goal

Return the personal summary to the first A4 page without losing the readability
improvement from the larger print font.

## Strategy

Keep the approved print font sizes:

- Chinese: `10.6pt`
- English: `9.8pt`

Recover vertical space through modest line-height and spacing reductions:

- Chinese line height: `1.43` to `1.40`
- Chinese section spacing: `0.84em` to `0.78em`
- Chinese item spacing: `0.52em` to `0.48em`
- English line height: `1.35` to `1.33`
- English section spacing: `0.66em` to `0.62em`
- English item spacing: `0.41em` to `0.38em`

Do not shrink the candidate name, section headings, or body font. Do not add a
special-case rule for the personal summary.

## Expected Result

The change should recover enough vertical space for the complete personal
summary section to remain on the first page while retaining the larger and more
readable body text.

## Verification

- Build the Astro project successfully.
- Confirm the Chinese print preview returns to one A4 page.
- Confirm the English print preview remains one A4 page.
- Check that the summary is not clipped or split across pages.

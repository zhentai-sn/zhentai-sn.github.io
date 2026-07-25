# Resume Print Header and Contact Design

Date: 2026-07-25

## Goal

Clarify how to remove browser-generated print headers, hide the site's Gmail
link only on the resume page, and add the target role to the resume heading.

## Print Header

- Keep the existing A4 page margins because zero-margin CSS is unreliable for
  a multi-page resume.
- Add a short note beside the print control telling users to disable
  "Headers and footers" in the browser print dialog.
- Do not claim that page CSS can control the browser-generated date, page
  title, URL, or page number.

## Resume Footer Email

- Add an optional `showEmail` prop to the shared footer component.
- Default the prop to `true` so all existing pages retain their Gmail link.
- Pass `showEmail={false}` from the resume page only.
- Keep the QQ email reveal control in the resume document unchanged.

## Target Role

Add a bilingual line between the name and contact controls:

- Chinese: `求职意向：AI 算法工程师`
- English: `Target Role: AI Algorithm Engineer`

## Verification

- Confirm the resume page footer has no Gmail link.
- Confirm other pages still render the Gmail footer link.
- Confirm the target role and print instruction render in both languages.
- Build the Astro site and restore the local preview.

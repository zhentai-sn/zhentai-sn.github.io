# Resume Header Metadata Grid Design

## Goal

Reduce the empty space between the candidate name and contact information while
adding the preferred work location without increasing the resume header height.

## Desktop and Print Layout

Keep the candidate name on the left and replace the right-side two-line block
with a borderless two-by-two metadata grid:

| Target role | Preferred location |
| --- | --- |
| Email | Phone |

Each cell displays its label and value on the same line, for example
`邮箱：点击查看` and `电话：点击查看`. The metadata grid is left-aligned and
starts closer to the page center so the header feels visually connected.

Do not add a vertical divider, card border, or internal grid lines.

## Content

- Chinese target role: `求职意向：AI 算法工程师`
- Chinese preferred location: `求职地：深圳`
- English target role: `Target Role: AI Algorithm Engineer`
- English preferred location: `Preferred Location: Shenzhen`
- Email and phone retain their current manual reveal behavior.
- After revealing a contact value, its label remains visible.

## Responsive Behavior

- Desktop and print: keep the two-by-two metadata grid.
- Narrow screens: stack the four metadata cells in one centered column to avoid
  wrapping long English values.

## Verification

- Build the Astro project successfully.
- Confirm the resume header contains four metadata cells in both languages.
- Confirm email and phone each reveal independently while retaining their
  labels.
- Confirm the desktop and print header heights do not increase.
- Preserve the established one-page A4 layout.

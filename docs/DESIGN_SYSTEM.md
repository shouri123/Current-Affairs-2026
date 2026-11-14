# Design System — Neo-Brutalist Gazette
**Project:** Current Affairs Gazette  
**Aesthetic:** Editorial Neo-Brutalism (Long-Form Reading & Revision Optimized)  
**Specification Date:** 14 November 2026  

---

## 1. Design Philosophy

Current Affairs Gazette blends the bold visual clarity of Neo-Brutalism with the readability requirements of competitive examination candidates who study dense current affairs for hours.

### Core Tenets:
- **High Information Density**: Clean layout rhythm without decorative clutter or distracting animations.
- **Intentional Contrast**: Solid white surfaces over warm cream backdrops with crisp 1px borders.
- **No AI Slop**: Zero decorative emojis, zero sparkle icons, zero tinted 28px square icon tiles, zero solid black offset shadows.
- **Functional Color Accents**: Color is reserved for meaning — Cyber Yellow `#FFE600` for key statistics and Must-Know items; Sky Blue `#38BDF8` for verified primary sources and brand focal points.

---

## 2. Color Palette & Tokens

```css
:root {
  /* Surfaces */
  --bg-cream: #FFFDF5;         /* Background hue */
  --bg-surface: #FFFFFF;       /* Elevated cards & dialogs */
  --border-ink: rgba(24, 24, 27, 0.16); /* 1px structural borders */

  /* Text & Readability */
  --text-ink: #18181B;         /* Primary high-contrast text */
  --text-muted: #5D5C5C;       /* Secondary details & footnotes */

  /* Functional Accents */
  --brand-sky: #38BDF8;        /* Brand & primary interactive states */
  --accent-yellow: #FFE600;    /* Highlight chips & Must-Know badges */
  --accent-green: #4ADE80;     /* Mastered status & verified claims */
  --accent-orange: #FB923C;    /* Needs review indicator */
  --accent-red: #FF5A5F;       /* Disputed or outdated alerts */
}
```

---

## 3. Typography Scale

1. **Display Headings (`font-display`)**:
   - Font: **Fredoka** (Milena Brandao) via `next/font/google`.
   - Weights: 600, 700.
   - Purpose: Brand logo, section titles, scorecard banners.
2. **Editorial Body (`font-serif`)**:
   - Font: **Source Serif 4** (Adobe / Frank Grießhammer) via `next/font/google`.
   - Weights: 400 (regular body), 600 (semi-bold entry leads), 700 (bold titles).
   - Line Height: 1.6 for prolonged reading comfort.
3. **UI Elements & Data Badges (`font-sans`)**:
   - Font: System UI (`system-ui, -apple-system, sans-serif`).
   - Purpose: Buttons, navigation links, highlight badges, filter tags, statistics pills.

---

## 4. Component Standards

### A. Gazette Card (`.gazette-card`)
- Border: `1px solid rgba(24, 24, 27, 0.16)`
- Background: `#FFFFFF`
- Radius: `12px`
- Shadow: `0 1px 3px 0 rgba(24, 24, 27, 0.05)`
- Hover: Border darkens to `rgba(24, 24, 27, 0.4)` with zero layout jump.

### B. Yellow Highlight Chips (`.highlight-badge`)
- Background: `#FFE600`
- Color: `#18181B`
- Padding: `1px 5px`
- Radius: `3px`
- Font: `system-ui, sans-serif`, `600` weight.
- Purpose: Instantly draws attention to verified monetary figures, percentages, dates, and milestones.

### C. Verification Badges
- **Verified**: Clean green border (`rgba(74, 222, 128, 0.4)`), soft green background (`rgba(74, 222, 128, 0.1)`), checkmark icon, legible text "Verified".
- **Needs Review**: Neutral amber chip with alert icon.
- **Outdated**: Neutral slate chip indicating historical status.

---

## 5. Responsive Breakpoints

- **Desktop Extra Wide (≥ 1536px)**: Full width container capped at `1536px`, 3-column revision deck, secondary topic panel accessible.
- **Standard Laptop (1024px – 1535px)**: 2-column or 3-column card layouts, sticky navbar with horizontal scrollable topic pills.
- **Tablet (768px – 1023px)**: 2-column layout, touch-friendly 44px tap targets.
- **Mobile (< 768px)**: 1-column layout, full-width inputs, drawer-based secondary navigation, sticky bottom or header quick-access controls.

---

## 6. Print Stylesheet (`@media print`)

```css
@media print {
  body {
    background: #FFFFFF !important;
    color: #000000 !important;
    font-size: 11pt !important;
    line-height: 1.4 !important;
  }
  .no-print, nav, footer, button, .dialog, .drawer {
    display: none !important;
  }
  .print-section {
    page-break-inside: avoid;
    margin-bottom: 1.5rem;
  }
}
```


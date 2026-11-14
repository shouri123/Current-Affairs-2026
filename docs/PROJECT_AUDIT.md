# Technical Audit & Repository Reconnaissance
**Project:** Current Affairs Gazette  
**Date of Audit:** 14 November 2026  
**Auditor:** Senior Engineering & Product Review  
**Repository:** https://github.com/shouri123/Current-Affairs-2026  
**Production URL:** https://current-affairs-self.vercel.app/  

---

## 1. Existing Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `14.2.15` | Production React SSR & SSG server, routing, image optimisation |
| **Language** | TypeScript | `5.6.3` | Type definitions and compiler checks |
| **UI Library** | React & React-DOM | `18.3.1` | Declarative UI rendering |
| **Styling** | Tailwind CSS & PostCSS | `3.4.14` | Utility-first CSS with custom design tokens |
| **Primitives** | Radix UI (`@radix-ui/*`) | `^1.1.0` | Accessible dialogs, progress bars, tabs, tooltips, sheets |
| **Animation** | Framer Motion & GSAP | `11.11.11` / `3.12.5` | Orchestrated UI transitions, 3D card flips, scroll animations |
| **Typography** | `next/font/google` | Built-in | Google Fonts: **Fredoka** (Milena Brandao) and **Source Serif 4** (Adobe / Frank Grießhammer) |
| **Icons** | Lucide React | `^0.453.0` | Semantic functional interface icons |
| **Audio Effects** | Tone.js | `14.8.49` | Clean Web Audio API synthesis for interactive cues |
| **Confetti** | Canvas Confetti | `^1.9.3` | Celebration micro-animations on milestone achievements |
| **Deployment** | Vercel | Production | Git-triggered serverless deployment with edge CDN caching |

---

## 2. Folder Structure

```text
E:\New folder (10)\Current Affairs\
├── .gitignore
├── components.json             # shadcn/ui configuration
├── next.config.mjs             # Next.js build and image optimization config
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts          # Color variables, fonts, elevation definitions
├── tsconfig.json
├── vercel.json                 # Vercel deployment caching and headers
├── docs/                       # Project documentation
│   └── AUDIT_CHECKLIST.md      # Prioritized content audit items
├── public/
│   └── images/
│       └── september-2026-gazette.png # Verified high-res product issue cover
├── src/
│   ├── app/
│   │   ├── globals.css         # Base styles, Neo-Brutalist cards, highlight chips, print media
│   │   ├── layout.tsx          # Root layout, Google font bindings, TooltipProvider
│   │   └── page.tsx            # Main client entrypoint, state coordination
│   ├── components/
│   │   ├── interactive/
│   │   │   ├── ArcadeQuizModal.tsx   # Quiz modal with answer options and streaks
│   │   │   ├── FactDetailModal.tsx   # Fact deep-dive modal
│   │   │   ├── FlashcardGrid.tsx     # 3D interactive flip revision deck
│   │   │   └── PinDrawer.tsx         # Slide-out pinned bookmarks drawer
│   │   ├── layout/
│   │   │   ├── Footer.tsx            # Colophon, statistics summary, print controls
│   │   │   ├── Hero.tsx              # Gazette introduction, product image, macro stats
│   │   │   └── Navbar.tsx            # Sticky header with search and category scrolling
│   │   ├── sections/
│   │   │   ├── SectionCard.tsx       # 11 editorial section cards with highlight chips
│   │   │   ├── SectionList.tsx       # GSAP-animated list of section cards
│   │   │   └── SvgDiagram.tsx        # Interactive SVG infographics with hotspot popups
│   │   └── ui/                       # Radix-powered UI primitives
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── progress.tsx
│   │       ├── sheet.tsx
│   │       ├── tabs.tsx
│   │       └── tooltip.tsx
│   ├── data/
│   │   ├── magazineSections.ts       # 11 magazine sections with 149 facts and SVG diagrams
│   │   └── qaList.ts                 # 39 Q&A self-test revision entries
│   ├── hooks/
│   │   ├── useDebounce.ts            # Input debounce hook
│   │   ├── useLocalStorage.ts        # Resilient browser storage sync
│   │   └── useSoundEffects.ts        # Tone.js synthesised sound cues
│   ├── lib/
│   │   └── utils.ts                  # `cn` clsx + tailwind-merge helper
│   └── types/
│       └── index.ts                  # Core TypeScript interface definitions
```

---

## 3. Application Architecture

1. **Client-Side Hydration**:
   - The primary application runs as an interactive SPA within Next.js SSR/SSG.
   - `src/app/page.tsx` coordinates global state: search query, category filtering, mastered item IDs (`ca_mastered_ids`), pinned fact IDs (`ca_pinned_ids`), audio settings (`ca_sound_enabled`), and modal view states.
2. **Component Decomposition**:
   - Clean split between UI primitives (`src/components/ui`), structural layout (`src/components/layout`), content sections (`src/components/sections`), and interactive revision tools (`src/components/interactive`).
3. **Data Flow**:
   - Static datasets (`magazineSections.ts` and `qaList.ts`) are imported and computed in memory with React `useMemo`.
   - Interactions (mastering, pinning, quiz answering) mutate reactive state and persist to `localStorage`.
   - Search uses instantaneous client-side string matching with keyword highlighting.

---

## 4. Existing Features and Their Implementation Status

| Feature | Status | Details |
| :--- | :--- | :--- |
| **149 Current Affairs Entries** | Complete | Distributed across 11 sections. Includes 81 Must-Know items. |
| **11 Subject Categories** | Complete | Banking, MoUs, Days, Appointments, National, International, Defence, Awards, Books, Sports, Travel. |
| **39-Question Revision Deck** | Complete | 3D card flip with individual and "Reveal All" toggles. |
| **Arcade Quiz Modal** | Basic | Generates multiple-choice questions by pairing correct answers with random distractors from other questions. |
| **Random Fact Generator** | Complete | Random selector pulling from all 149 facts with modal display. |
| **Must-Know Filter** | Complete | Quick toggle filtering view to only high-priority exam facts. |
| **Section Completion Controls** | Complete | Allows marking individual items as Mastered, or mastering an entire section. |
| **Pinned Items Drawer** | Complete | Slide-out Sheet displaying bookmarked facts for rapid review. |
| **Interactive SVG Hotspots** | Complete | Clickable SVG infographics triggering explanatory modal dialogs. |
| **Audio Cues** | Complete | Web Audio API (Tone.js) audio feedback with user toggle. |
| **Print Styling** | Basic | `@media print` rules hide navbar and controls, but lacks multi-mode print filtering (e.g. print by subject, print must-knows). |
| **Global Multi-Dimensional Filter** | Incomplete | Only searches text and filters by single category or must-know. Lacks verification status, importance tiers, and content-type filters. |
| **Source Transparency & Verification** | Incomplete | Facts currently lack structured claim-level sources, publication dates, and verification badges. |
| **Progress Dashboard** | Incomplete | Tracks total mastered count, but lacks per-subject progress, quiz history, accuracy metrics, and import/export. |
| **Daily Revision Engine** | Missing | No deterministic daily revision module combining reading with follow-up quiz testing. |

---

## 5. Existing Data Structure

### `FactItem` & `SectionItem`
Currently defined in `src/types/index.ts`:
```typescript
export interface SectionItem {
  text: string;
  hot: boolean;
}

export interface FactItem {
  id: string;
  text: string;
  hot: boolean;
  category: string;
  sectionId: string;
  pages?: string;
}
```

### `QAItem`
```typescript
export interface QAItem {
  id?: string;
  q: string;
  a: string;
}
```

### Limitations of Current Data Structure:
1. No explicit title or short summary field (the whole sentence is in `text`).
2. No claim-level source URLs, authorities, or publication dates.
3. No verification status (`verified`, `needs-review`, `disputed`, `outdated`, `missing-source`).
4. Revision questions in `qaList.ts` lack metadata linking them back to specific fact IDs or source documents.

---

## 6. Design System

- **Visual Style**: Neo-Brutalism refined for long-form editorial reading.
- **Color Tokens**:
  - Background: Cream `#FFFDF5`
  - Text/Foreground: Ink `#18181B`
  - Secondary/Muted: Slate `#5D5C5C`
  - Brand Primary: Sky Blue `#38BDF8`
  - Must-Know & Highlights: Cyber Yellow `#FFE600`
  - Card Border: Clean 1px `rgba(24, 24, 27, 0.16)`
  - Elevated Surfaces: Pure White `#FFFFFF`
- **Typography Tokens**:
  - Headings: `font-display` -> **Fredoka** (Milena Brandao)
  - Body & Entries: `font-serif` -> **Source Serif 4** (Adobe / Frank Grießhammer)
  - UI Labels & Badges: `font-sans` -> System UI (`system-ui, -apple-system, sans-serif`)
- **Elevation**:
  - Subtle borders (`1px solid rgba(24, 24, 27, 0.16)`), subtle soft blur shadows (`box-shadow: 0 1px 3px rgba(24, 24, 27, 0.05)`), zero hard offset brutalist black shadows.

---

## 7. Identified Bugs and Technical Limitations

1. **Known Factual Discrepancies**:
   - **Asian Games Women's Kabaddi Final**: Stated as `37–33` over Iran in both fact item and SVG diagram; verified official score is **`37–34`** (held on 26 September 2026, Pro Kabaddi / Asian Games records).
   - **Ryanair Forecast**: Card presented the forecast reduction to 214 million as caused by Mount Etna eruptions, whereas the regulatory announcement stated the reduction was made to reduce exposure to unhedged winter oil; Etna cancellations were a concurrent August event.
   - **Booker Prize 2026**: Card used future-scheduled wording; M. John Harrison won on 9 November 2026 for *The End of Everything*.
   - **India–New Zealand FTA**: Q7 used future-tense ("scheduled to take effect on 20 October 2026"); FTA entered into force on 20 October 2026.
   - **Sagarmala Finance Blue Bond**: Stated as completed; issue was withdrawn on 28 September 2026 due to higher coupon bids.
2. **Missing Source Traceability**:
   - 149 facts lack clickable primary source citations and verification timestamps.
3. **Quiz Distractor Generation**:
   - `ArcadeQuizModal` creates distractors by randomly picking answers from unrelated questions in `qaList.ts`. While functional, distractor plausibility can be improved with structured question options.
4. **State Persistence**:
   - `localStorage` handles arrays of strings without schema versioning, making migrations fragile if keys change.
5. **Layout Gutters on Tablet**:
   - On viewports between 768px and 1024px, category pills wrap awkwardly if the browser window is narrow. Needs responsive scrollable topic pills with left/right indicators.

---

## 8. Proposed Implementation Architecture

```mermaid
flowchart TD
    subgraph Data Layer ["Data & Content Architecture"]
        M149["149 Standardised Current Affairs\n(with claims, primary sources, verification status)"]
        Q39["39 Enhanced Revision Questions\n(linked to fact IDs & primary sources)"]
        SCH["Content Schema & Validation\n(TypeScript definitions)"]
    end

    subgraph Logic Layer ["State & Learning Engine"]
        SRCH["Global Search & Smart Filter Engine\n(Keywords, Subject, Importance, Verification, Type)"]
        PROG["Versioned Progress Manager\n(Mastered, Pinned, Quiz Scores, Accuracy, Export/Import)"]
        QUIZ["Multi-Mode Quiz Engine\n(Quick, Subject, Must-Know, Full, Incorrect Review)"]
        REV["Revision Deck & Daily Session Engine\n(Seeded Daily Set, 3D Flashcards, Random Fact)"]
    end

    subgraph UI Layer ["Presentation (Neo-Brutalism)"]
        NAV["Sticky Navbar & Topic Navigation Panel"]
        HERO["Hero Header & Macro Scorecard"]
        SEC["Editorial Section Cards with Verification Badges"]
        MODALS["Deep-Dive Modals & Progress Dashboard"]
        PRINT["Print Dossier & Export Engine"]
    end

    Data Layer --> Logic Layer
    Logic Layer --> UI Layer
```

---

## 9. Files That Need Modification or Creation

### Files to Create:
- `docs/PROJECT_AUDIT.md` (This document)
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/ARCHITECTURE.md`
- `docs/CONTENT_SCHEMA.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/CONTENT_QUALITY_REPORT.md`
- `docs/TESTING.md`
- `docs/CHANGELOG.md`
- `src/components/layout/TopicNavigationPanel.tsx` (Secondary navigation & subject overview)
- `src/components/interactive/ProgressDashboardModal.tsx` (Personal analytics, subject breakdown, export/import)
- `src/components/interactive/DailyRevisionModal.tsx` (Deterministic daily review session + quiz)
- `src/components/interactive/VerificationBadge.tsx` (Standardised status indicator with tooltip)
- `src/data/sources.ts` (Registry of primary and secondary verified sources)
- `scripts/validate_content.js` (Automated build-time content validation script)
- `tests/content_and_engine.test.js` (Automated regression suite)

### Files to Modify:
- `src/types/index.ts` (Extend content model with sources, claims, verification, quiz modes, and versioned progress)
- `src/data/magazineSections.ts` (Add source citations, fix 37–34 kabaddi, update Ryanair, Booker, Sagarmala)
- `src/data/qaList.ts` (Update Q7 tense, link to fact IDs and sources, add structured distractors)
- `src/components/layout/Navbar.tsx` (Add secondary navigation triggers, Progress Dashboard, Daily Revision)
- `src/components/sections/SectionCard.tsx` (Display verification badges, source links, expandable explanations)
- `src/components/sections/SvgDiagram.tsx` (Update 37–34 kabaddi score in sports diagram)
- `src/components/interactive/ArcadeQuizModal.tsx` (Support multi-mode quizzes, review of incorrect answers)
- `src/components/interactive/FlashcardGrid.tsx` (Show subject, source reference, shuffle, and progress)
- `src/components/interactive/FactDetailModal.tsx` (Display verified sources, claim statement, and last checked date)
- `src/app/page.tsx` (Integrate global filter state, daily revision, progress dashboard, print views)
- `src/app/globals.css` (Enhanced print styles, topic panel styles, verification chips)

---

## 10. Dependency Evaluation

- **Dependencies to Keep**:
  - `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `postcss`: Core application stack.
  - `@radix-ui/*`: Accessible primitives for dialogs, tabs, progress, tooltips, sheets.
  - `lucide-react`: Lightweight functional iconography.
  - `canvas-confetti`: Micro-interactions on milestone completion.
  - `tone`: Lightweight Web Audio synth for non-intrusive sound cues.
  - `framer-motion`: Smooth spring transitions and dialog modals.
- **Unnecessary Dependencies to Avoid**:
  - Do NOT install Elasticsearch, Algolia, or external search servers (149 items run in sub-millisecond client-side memory).
  - Do NOT install complex database ORMs (Prisma/TypeORM) or external auth providers (Firebase/Auth0/Supabase) since local persistent storage satisfies all requirements cleanly without backend friction.
  - Do NOT add heavy chart libraries (Recharts/Chart.js) when lightweight SVG/CSS progress indicators fit the Neo-Brutalist design language perfectly.


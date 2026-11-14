# ⚡ September 2026 Current Affairs — Funky Neo-Brutalist Edition

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=black)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Black?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF6B9E?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A production-grade, highly interactive **Neo-Brutalist / Cartoon Comic** revision web app designed for competitive exam aspirants (UPSC, Banking, SSC, State PSCs). Converted from a standalone document into a modern **Next.js 14+ (App Router)** application with **Tailwind CSS**, **shadcn/ui**, **GSAP**, **Framer Motion**, and **Tone.js audio synthesis**.

---

## 🎨 Theme & Neo-Brutalist Aesthetics

The application preserves 100% of the signature neo-brutalist visual identity:
- **Dot Matrix Canvas**: `#FFFDF5` warm cream background with a `24px x 24px` radial dot grid.
- **Bold Outlines**: Heavy `2.5px` to `4px` solid `#18181B` borders.
- **Chunky Drop Shadows**: Signature brutalist offsets (`3px 3px`, `5px 5px`, and `8px 8px #18181B`).
- **Playful Pop Palette**:
  - `popYellow`: `#FFE600` (Hero highlights & buttons)
  - `popPink`: `#FF6B9E` (Must-know tags & badges)
  - `popCyan`: `#38BDF8` (Interactive buttons & headers)
  - `popMint`: `#4ADE80` (Success & mastery progress)
  - `popPurple`: `#C084FC` (Summits, awards & special tags)
  - `popOrange`: `#FB923C` (Warning & highlight cards)
  - `popCoral`: `#FF5A5F` (Danger, reset & quiz alerts)
- **Typography**: Google Fonts loaded via `next/font/google` (`Fredoka` for comic headings & `Plus Jakarta Sans` for body copy).

---

## 🚀 Key Features & Interactivity

### 1. 11 Comprehensive Monthly Categories
- **Banking & Financial Awareness** (India Macro Scorecard, GDP 7.8%, RBI SSA, UPI tap-to-pay)
- **MoUs & Strategic Partnerships Signed** (GMR & Airbus, Tata Steel & SMS group, Reliance Defence)
- **Important Days & Themes** (Teacher's Day, Ozone Day, Peace Day, World Tourism Day)
- **Key Appointments & Leadership** (New Cabinet Secretary, Air Chief Marshal, SEBI member)
- **National News & Governance** (Semicon India 2026, BioE3 Policy, PM-JANMAN)
- **International News & Summits** (18th BRICS Summit in New Delhi, UN General Assembly)
- **Defence Exercises & Military Tech** (Tarang Shakti 2026, Varuna 2026, Zorawar light tank)
- **Honours, Awards & Cinema** (70th National Film Awards, Ramon Magsaysay)
- **Books & Authors Corner** (New autobiographies and governance treatises)
- **Sports Spectacular** (Paralympics 2026 tally, US Open 2026, Chess Olympiad)
- **Hotel, Travel & Aviation** (DigiYatra expansion, maiden blue bond, cruise terminal)

### 2. Interactive SVG Data Visualizations
- Interactive SVG charts with clickable hotspots (e.g. GDP, GVA, WPI, CPI bars and Rupee rockets) triggering instant modal spotlights.

### 3. 3D Flippable Exam Flashcards
- **39 high-yield Q&As** presented in a responsive 3D card grid.
- Click to flip 180° with fluid CSS 3D transforms.
- "Flip All" / "Hide All" revision toggles.
- Individual "Mark Memorized" tracking.

### 4. Gamified Neo-Brutalist Arcade Quiz 2.0
- Built with **shadcn/ui Dialog**.
- Dynamic 4-option multiple-choice engine with random distractors.
- Score counter, streak multiplier (`🔥 Streak: 3x, 5x, 10x`), and instant audio feedback.
- Celebratory full-screen confetti bursts (`canvas-confetti`) on milestone streaks.

### 5. Pinned Must-Know Drawer (shadcn/ui Sheet)
- Slide-out pinboard drawer powered by Radix UI.
- Bookmark high-yield facts on the fly.
- One-click **"Copy All as Markdown"** and **"Export .md Study Notes"**.

### 6. Tone.js Web Audio Synthesizer
- Built-in sound effects without external audio files:
  - Retro pops on card interactions
  - Harmonious chimes on marking facts as mastered
  - Pinning ting
  - Fanfares on quiz streaks and section completions
- Persistent mute/unmute toggle in the sticky navbar.

### 7. Persistent Mastery Progress Tracker
- Interactive progress bar with real-time percentage (`0 / 149 Mastered`).
- State stored persistently in `localStorage`.
- "Master Section" one-click shortcut for rapid revision.

### 8. Print & PDF Optimization
- Dedicated `@media print` stylesheet removing headers, navbars, and interactive buttons, producing clean, formatted printable study sheets.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 14+** | App Router, Server Components & Client Hydration |
| **TypeScript** | Strict type definitions for data, props, and states |
| **Tailwind CSS** | Custom brutalist theme, spacing, and animations |
| **shadcn/ui** | Accessible Radix UI primitives (`Dialog`, `Sheet`, `Progress`, `Tooltip`, `Badge`, `Button`, `Tabs`) |
| **GSAP + ScrollTrigger** | Staggered section reveals and floating doodle animations |
| **Framer Motion** | Spring physics, modals, and layout transitions |
| **Tone.js** | Interactive synth sound effects |
| **canvas-confetti** | High-energy confetti celebrations |
| **Lucide React** | Crisp modern SVG icons |

---

## 📂 Project Structure

```
Current Affairs/
├── .gitignore                     # Git ignore rules for Next.js & node
├── vercel.json                    # Vercel deployment & security headers
├── components.json                # shadcn/ui configuration
├── package.json                   # Dependencies & npm scripts
├── tsconfig.json                  # TypeScript compiler settings
├── tailwind.config.ts             # Custom colors, shadows & fonts
├── next.config.mjs                # Next.js runtime configuration
├── postcss.config.mjs             # PostCSS plugins (Tailwind & Autoprefixer)
├── README.md                      # Project documentation
├── public/
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx             # Root layout, Google Fonts, TooltipProvider
    │   ├── page.tsx               # Main magazine landing page
    │   └── globals.css            # Dot matrix pattern & brutalist CSS
    ├── components/
    │   ├── ui/                    # shadcn/ui customized primitives
    │   │   ├── button.tsx
    │   │   ├── badge.tsx
    │   │   ├── dialog.tsx
    │   │   ├── sheet.tsx
    │   │   ├── progress.tsx
    │   │   ├── tooltip.tsx
    │   │   └── tabs.tsx
    │   ├── layout/
    │   │   ├── Navbar.tsx         # Sticky navigation, search, sound & pin triggers
    │   │   ├── Hero.tsx           # Floating doodles & macro scorecard
    │   │   └── Footer.tsx         # Neo-brutalist footer
    │   ├── sections/
    │   │   ├── SectionList.tsx    # GSAP scroll-triggered section list
    │   │   ├── SectionCard.tsx    # Individual section with fact items & diagram
    │   │   └── SvgDiagram.tsx     # Interactive SVG diagram with hotspots
    │   └── interactive/
    │       ├── FlashcardGrid.tsx  # 3D flippable Q&A flashcards
    │       ├── ArcadeQuizModal.tsx# Gamified quiz with streaks & confetti
    │       ├── FactDetailModal.tsx# Fact detail dialog with memory hooks
    │       └── PinDrawer.tsx      # Slide-out bookmarks drawer
    ├── data/
    │   ├── magazineSections.ts    # 11 sections, 149 facts & SVG diagrams
    │   └── qaList.ts              # 39 revision Q&As
    ├── hooks/
    │   ├── useSoundEffects.ts     # Tone.js sound synthesis
    │   ├── useLocalStorage.ts     # LocalStorage state management
    │   └── useDebounce.ts         # Fast debounced search query
    ├── lib/
    │   └── utils.ts               # clsx + twMerge helper
    └── types/
        └── index.ts               # TypeScript interfaces
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.17+ or v20+ (tested on Node v25.6.0)
- **npm** or **pnpm** or **yarn**

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive magazine.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

This repository includes a preconfigured `vercel.json` file.

### Option 1: Deploy with Vercel CLI
```bash
npx vercel
```

### Option 2: Deploy via GitHub
1. Push your repository to GitHub.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect **Next.js** and build the site.

---

## 🔎 Content accuracy & source verification

The September 2026 content is undergoing a claim-by-claim accuracy and source review. The prioritized remediation checklist separates confirmed errors from stale wording, source gaps, and claims awaiting verification:

- [Open the prioritized audit checklist](docs/AUDIT_CHECKLIST.md)

A claim should only be presented as verified when its supporting source is linked and has been reviewed.

---

## 📜 License

Created for educational and competitive examination revision purposes.
All rights reserved © 2026.


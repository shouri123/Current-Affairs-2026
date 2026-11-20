# Changelog — Current Affairs Gazette
All notable changes to the Current Affairs Gazette platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Replaced biased `sort(() => Math.random() - 0.5)` question ordering with Fisher–Yates shuffling.
- Randomised the three distractors and balanced correct-answer positions across A/B/C/D for each quiz session; consecutive questions avoid repeating the same correct-answer position.
- Derived the answer key from the exact answer text so older editions do not depend on hard-coded option A.
- Replaced generic placeholder distractors in the July and August 2026 question banks with topic-relevant alternatives and corrected two corrupted answer strings.
- Updated Daily Revision to use a reproducible daily quiz selection with shuffled questions and answer choices.
- Removed fake fallback options; malformed questions are excluded rather than displayed with invented choices.

### Tests
- Added regression coverage for answer-position balance, consecutive-position repetition, deterministic daily sessions, invalid options, and all 109 July–September questions.
- Added the quiz regression suite to `npm test`.

---

## [2.0.0] - 2026-11-14

### Major Milestone: Interactive, Trustworthy & Personalised Revision Platform

### Added
- **Topic Navigation Panel**: Added secondary syllabus navigation panel showing all 11 subjects, total items, mastered count, Must-Know tallies, and completion percentage progress bars with smooth section jumping.
- **Multi-Mode Quiz Engine**: Added 5 distinct quiz modes (Quick Revision 5Q, Must-Know Test 15Q, Subject Test, Mistakes Revision, and Full 39Q Test) with immediate explanation feedback, accuracy scoring, and missed question review.
- **Deterministic Daily Revision**: Added date-seeded (`YYYY-MM-DD`) daily revision module presenting 7 curated Must-Know facts across 7 subjects followed by a 5-question retention test.
- **Personal Progress Analytics Dashboard**: Added modal displaying syllabus completion KPIs, subject-by-subject progress, quiz accuracy, strongest/weakest subjects, JSON backup export/restore, and reset confirmation.
- **Verification Badges & Source Transparency**: Added `VerificationBadge` component with interactive tooltips showing publisher authority, verification date, and direct click-through links to official documentation.
- **Multi-Dimensional Smart Filters**: Added composable filter toolbar on sticky Navbar supporting Subject, Importance Level (`must-know` / `important`), Content Type (`national` / `international`), and Verification Status.
- **Automated Validation & Test Suites**: Added `scripts/validate_content.js` and `tests/content_and_engine.test.js` to ensure zero factual discrepancies and correct scoring logic.
- **Comprehensive Documentation Suite**: Authored `PROJECT_AUDIT.md`, `IMPLEMENTATION_PLAN.md`, `ARCHITECTURE.md`, `CONTENT_SCHEMA.md`, `DESIGN_SYSTEM.md`, `CONTENT_QUALITY_REPORT.md`, `TESTING.md`, and `CHANGELOG.md`.

### Changed & Corrected
- **Asian Games Kabaddi Final Score**: Corrected published score from `37–33` to `37–34` (India beat Iran on 26 September 2026) in both `src/data/magazineSections.ts` and the interactive sports SVG infographic.
- **Ryanair FY27 Traffic Forecast**: Clarified that the forecast adjustment to 214m was made to reduce exposure to unhedged winter oil price fluctuations, separating it from the independent operational disruption caused by Mount Etna eruptions.
- **Booker Prize 2026**: Updated scheduled wording to record M. John Harrison's win on 9 November 2026 for *The End of Everything*.
- **India–New Zealand FTA**: Revised Q7 from future-scheduled tense to past tense ("entered into force on 20 October 2026").
- **Sagarmala Finance Blue Bond**: Explicitly appended that the maiden ₹600 crore blue bond issue was subsequently withdrawn on 28 September 2026 due to higher coupon bids.
- **High-Fidelity Print Stylesheet**: Enhanced `@media print` rules with clean page breaks, high-contrast borders, hiding navigation and interactive buttons for clean offline revision printing.

---

## [1.1.0] - 2026-11-14
### Style & Layout Refinement
- Removed AI slop, decorative emojis, sparkles, and 28px square icon tiles.
- Configured **Fredoka** (Milena Brandao) for headlines and **Source Serif 4** (Adobe / Frank Grießhammer) for body text.
- Standardised on clean 1px borders, subtle box shadows, and verified Cyber Yellow `#FFE600` highlight chips.
- Added official September 2026 Gazette issue cover photograph in the Hero section.
- Eliminated vacant horizontal margins on large viewports (up to 1536px).

---

## [1.0.0] - 2026-11-14
### Initial Release
- Migrated legacy HTML prototype to Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui.
- Included 149 facts across 11 sections with 81 Must-Know items.
- Added 39-question 3D flip card revision deck.
- Integrated Web Audio API (Tone.js) sound cues with user toggle.
- Deployed on Vercel edge network.


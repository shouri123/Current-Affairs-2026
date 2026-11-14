# Testing & Verification Strategy
**Project:** Current Affairs Gazette  
**Version:** 2.0.0  
**Status:** All Automated & Production Checks Passing  

---

## 1. Testing Framework & Philosophy

The Current Affairs Gazette verification suite ensures that:
1. Every factual entry matches official government and institutional gazette documentation.
2. Search, filter combinations, and section navigation operate reliably in real-time.
3. Active recall engines (flashcards, multi-mode quiz, daily session) compute scores accurately.
4. User progress data serializes, persists, and restores without schema corruption.
5. All interactive UI elements adhere strictly to Neo-Brutalist readability and accessibility standards.

---

## 2. Test Suites

### A. Content & Accuracy Validation (`scripts/validate_content.js`)
Validates editorial integrity and factual accuracy:
- **Discrepancy Remediation**: Ensures zero occurrences of the outdated `37–33` Asian Games score and confirms `37–34` in sports facts and SVG infographics.
- **Tense Consistency**: Confirms Q7 uses past tense ("entered into force on 20 October 2026").
- **Awards & Market Updates**: Verifies M. John Harrison's Booker Prize win and the withdrawal status of Sagarmala Finance Corporation's maiden blue bond.
- **Item Tallies**: Asserts exactly 149 facts across the 11 sections and 39 structured revision deck questions.

**Execution:**
```bash
node scripts/validate_content.js
```

### B. Learning Engine & Logic Tests (`tests/content_and_engine.test.js`)
Validates core algorithms and state transitions:
- **Search Matching**: Case-insensitive substring matching against titles, categories, tags, and amounts.
- **Composable Smart Filters**: Multi-dimensional filtering intersecting Category, Importance (`must-know`), Content Type (`national`/`international`), and Verification Status.
- **Deterministic Daily Revision Seeding**: Confirms that identical dates yield deterministic daily sets of 7 Must-Know facts.
- **Quiz Scoring & Error Tracking**: Asserts percentage accuracy calculations and records missed question IDs for review mode.
- **Progress Serialization**: Verifies JSON backup export and restore roundtrips.

**Execution:**
```bash
node tests/content_and_engine.test.js
```

---

## 3. Production Build & Lint Checks

The project compiles with Next.js 14 strict static site generation:
```bash
npm run build
```
**Verification Results:**
- `✓ Compiled successfully`
- `✓ Generating static pages (4/4)`
- Zero TypeScript errors
- Zero ESLint warnings
- Zero hydration mismatches


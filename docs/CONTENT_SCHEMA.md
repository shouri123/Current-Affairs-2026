# Content Schema & Data Architecture
**Project:** Current Affairs Gazette  
**Version:** 2.0.0  
**Specification Date:** 14 November 2026  

---

## 1. Overview

The Current Affairs Gazette content architecture is designed for competitive examination candidates (IAS, State PSC, RBI Grade B, Banking, Defense) who require verifiable, traceable, and structured current-affairs knowledge.

Every entry distinguishes between:
1. **Event Date**: When the actual incident, announcement, or regulatory decision occurred.
2. **Publication Date**: When the official notification or Gazette release was published.
3. **Verification Date**: When our editorial team last cross-referenced the claim against primary government or institutional sources.

---

## 2. TypeScript Data Model

```typescript
export type ImportanceLevel = "must-know" | "important" | "general";

export type VerificationStatus =
  | "verified"
  | "needs-review"
  | "disputed"
  | "outdated"
  | "missing-source";

export type SourceType = "primary" | "secondary";

export interface SourceReference {
  title: string;
  publisher: string; // e.g., "Press Information Bureau (PIB)", "Reserve Bank of India (RBI)", "NPCI"
  url: string;
  publishedAt?: string; // YYYY-MM-DD
  checkedAt?: string;   // YYYY-MM-DD
  sourceType: SourceType;
}

export interface Claim {
  id: string;
  statement: string;
  sources: SourceReference[];
  status: "verified" | "needs-review" | "disputed";
}

export interface VerificationMeta {
  status: VerificationStatus;
  lastVerifiedAt: string; // YYYY-MM-DD
  verificationNotes?: string;
  discrepancyNote?: string;
}

export interface SectionItem {
  id: string;
  title: string;
  summary: string;
  explanation?: string;
  text: string; // Backward compatibility with existing UI
  hot: boolean; // Backward compatibility with existing UI
  importance: ImportanceLevel;
  contentType: "national" | "international";
  eventDate?: string;
  publishedAt?: string;
  tags: string[];
  claims: Claim[];
  verification: VerificationMeta;
}

export interface MagazineSection {
  id: string;
  title: string;
  emoji?: string;
  pages: string;
  bgHeader: string;
  bgTint: string;
  badgeColor: string;
  cartoonTitle: string;
  cartoonCaption: string;
  svgDiagram: string;
  items: SectionItem[];
}

export interface QuizQuestion {
  id: string;
  affairId?: string;
  subject: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  sourceReferences?: SourceReference[];
}
```

---

## 3. Preferred Primary Source Hierarchy

| Domain | Primary Authority | Example Sources |
| :--- | :--- | :--- |
| **National Governance & Bills** | Press Information Bureau (PIB) / The Gazette of India | `pib.gov.in`, `egazette.gov.in` |
| **Banking & Macroeconomics** | Reserve Bank of India (RBI), Ministry of Finance, NPCI, MoSPI | `rbi.org.in`, `npci.org.in`, `mospi.gov.in` |
| **International Summits** | BRICS Secretariat, Ministry of External Affairs (MEA), UN | `mea.gov.in`, `un.org` |
| **Defense & Space** | Ministry of Defence, ISRO, DRDO | `mod.gov.in`, `isro.gov.in`, `drdo.gov.in` |
| **Sports Records** | Asian Games Organizing Committee, Pro Kabaddi League, BCCI, ICC | `prokabaddi.com`, `bcci.tv` |
| **Literary & Cinema Awards** | The Booker Prize Foundation, DFF / Ministry of I&B, TIFF | `thebookerprizes.com`, `mib.gov.in` |

---

## 4. Verification Status Rules

- **`verified`**: The claim has been directly substantiated by at least one official primary government gazette, press release, or authorized governing body document.
- **`needs-review`**: The claim originates from credible journalistic reporting, but direct primary documentation is still pending publication.
- **`disputed`**: Conflicting data exists between different initial reports or agencies.
- **`outdated`**: A dynamic indicator or forward-looking schedule that was superseded by an event or subsequent regulatory withdrawal.
- **`missing-source`**: No authoritative link could be attached. Flagged for verification.


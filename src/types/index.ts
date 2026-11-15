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
  publisher: string;
  url: string;
  publishedAt?: string;
  checkedAt?: string;
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
  lastVerifiedAt: string;
  verificationNotes?: string;
  discrepancyNote?: string;
}

export interface SectionItem {
  id?: string;
  text: string; // Original full statement for direct rendering
  hot: boolean; // True if Must-Know
  title?: string;
  summary?: string;
  explanation?: string;
  importance?: ImportanceLevel;
  contentType?: "national" | "international";
  eventDate?: string;
  publishedAt?: string;
  tags?: string[];
  claims?: Claim[];
  sources?: SourceReference[];
  verification?: VerificationMeta;
}

export interface FactItem {
  id: string;
  text: string;
  hot: boolean;
  category: string;
  sectionId: string;
  pages?: string;
  title?: string;
  summary?: string;
  explanation?: string;
  importance?: ImportanceLevel;
  contentType?: "national" | "international";
  eventDate?: string;
  publishedAt?: string;
  tags?: string[];
  claims?: Claim[];
  sources?: SourceReference[];
  verification?: VerificationMeta;
}

export interface DiagramHotspot {
  title: string;
  body: string;
  tip: string;
  sourceUrl?: string;
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

export interface QAItem {
  id?: string;
  q: string;
  a: string;
  subject?: string;
  affairId?: string;
  explanation?: string;
  options?: string[];
  correctAnswerIndex?: number;
  source?: SourceReference;
  sources?: SourceReference[];
}

export interface QuizQuestion {
  id: string;
  affairId?: string;
  subject: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
  sourceReferences?: SourceReference[];
}

export type QuizMode =
  | "quick"
  | "subject"
  | "must-know"
  | "full"
  | "incorrect";

export interface FilterState {
  searchQuery: string;
  onlyHot: boolean;
  activeCategory: string | null;
  importance: ImportanceLevel | "all";
  contentType: "all" | "national" | "international";
  verificationStatus: VerificationStatus | "all";
}

export interface QuizAttemptRecord {
  id: string;
  date: string; // ISO string
  mode: QuizMode;
  subject?: string;
  score: number;
  totalQuestions: number;
  accuracy: number; // percentage
  incorrectQuestionIds: string[];
}

export interface UserProgressV1 {
  version: 1;
  masteredFactIds: string[];
  pinnedFactIds: string[];
  completedSectionIds: string[];
  reviewedCardIndices: number[];
  quizAttempts: QuizAttemptRecord[];
  incorrectQuestionIds: string[];
  lastStudiedAt: string;
}

export type MonthId = "july-2026" | "august-2026" | "september-2026";

export interface MacroIndicator {
  label: string;
  value: string;
  subtext: string;
}

export interface MonthlyIssue {
  id: MonthId;
  monthName: string;
  shortMonth: string;
  issueNo: string;
  summary: string;
  macroIndicators: MacroIndicator[];
  sections: MagazineSection[];
  qaList: QAItem[];
}

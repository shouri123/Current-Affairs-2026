/**
 * Spaced Repetition Engine (FSRS-inspired adaptive scheduler)
 * Provides 4-grade active-recall intervals for Current Affairs Gazette.
 */

export type SRSGrade = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy
export type SRSState = "new" | "learning" | "review" | "relearning";

export interface SRSItemRecord {
  factId: string;
  state: SRSState;
  stability: number; // in days
  difficulty: number; // 1 to 10
  reps: number;
  lapses: number;
  lastReviewDate?: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  retentionRate?: number;
}

export interface SRSStats {
  dueToday: number;
  overdue: number;
  learning: number;
  mastered: number;
  totalCards: number;
  retentionRate: number;
  streakDays: number;
}

const STORAGE_KEY = "gazette_srs_records_v1";
const STREAK_KEY = "gazette_study_streak_v1";

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, days: number): Date {
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
}

export function loadSRSRecords(): Record<string, SRSItemRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load SRS records:", err);
    return {};
  }
}

export function saveSRSRecords(records: Record<string, SRSItemRecord>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error("Failed to save SRS records:", err);
  }
}

export function getOrCreateItemRecord(
  records: Record<string, SRSItemRecord>,
  factId: string
): SRSItemRecord {
  if (records[factId]) {
    return records[factId];
  }
  const today = formatDate(new Date());
  return {
    factId,
    state: "new",
    stability: 0,
    difficulty: 5.0,
    reps: 0,
    lapses: 0,
    dueDate: today,
  };
}

export function computeNextSRS(
  current: SRSItemRecord,
  grade: SRSGrade,
  now: Date = new Date()
): SRSItemRecord {
  const todayStr = formatDate(now);
  const next = { ...current };
  next.lastReviewDate = todayStr;
  next.reps += 1;

  if (grade === 1) {
    // Again: Forgot
    next.lapses += 1;
    next.state = "relearning";
    next.stability = 1;
    next.difficulty = Math.min(10, current.difficulty + 0.4);
    next.dueDate = formatDate(addDays(now, 1));
  } else if (grade === 2) {
    // Hard: Recalled with difficulty
    next.state = "learning";
    const nextStability = current.stability === 0 ? 1 : Math.max(1, Math.round(current.stability * 1.25));
    next.stability = nextStability;
    next.difficulty = Math.min(10, current.difficulty + 0.15);
    next.dueDate = formatDate(addDays(now, nextStability));
  } else if (grade === 3) {
    // Good: Successful recall
    next.state = "review";
    const nextStability = current.stability === 0 ? 3 : Math.max(3, Math.round(current.stability * 2.4));
    next.stability = nextStability;
    next.difficulty = Math.max(1, current.difficulty - 0.05);
    next.dueDate = formatDate(addDays(now, nextStability));
  } else if (grade === 4) {
    // Easy: Effortless recall
    next.state = "review";
    const nextStability = current.stability === 0 ? 7 : Math.max(7, Math.round(current.stability * 3.6));
    next.stability = nextStability;
    next.difficulty = Math.max(1, current.difficulty - 0.2);
    next.dueDate = formatDate(addDays(now, nextStability));
  }

  // Update study streak
  updateStudyStreak(todayStr);

  return next;
}

export function recordSRSReview(
  factId: string,
  grade: SRSGrade
): { updatedRecord: SRSItemRecord; allRecords: Record<string, SRSItemRecord> } {
  const records = loadSRSRecords();
  const current = getOrCreateItemRecord(records, factId);
  const updated = computeNextSRS(current, grade);
  records[factId] = updated;
  saveSRSRecords(records);
  return { updatedRecord: updated, allRecords: records };
}

export function getSRSStats(allFactIds: string[]): SRSStats {
  const records = loadSRSRecords();
  const todayStr = formatDate(new Date());

  let dueToday = 0;
  let overdue = 0;
  let learning = 0;
  let mastered = 0;
  let totalReviewed = 0;
  let totalSuccessful = 0;

  for (const id of allFactIds) {
    const rec = records[id];
    if (!rec || rec.state === "new") {
      continue;
    }
    totalReviewed++;
    if (rec.reps > rec.lapses) {
      totalSuccessful++;
    }

    if (rec.state === "learning" || rec.state === "relearning") {
      learning++;
    } else if (rec.state === "review" && rec.stability >= 7) {
      mastered++;
    }

    if (rec.dueDate < todayStr) {
      overdue++;
      dueToday++;
    } else if (rec.dueDate === todayStr) {
      dueToday++;
    }
  }

  const streakDays = getStudyStreak();
  const retentionRate = totalReviewed > 0 ? Math.round((totalSuccessful / totalReviewed) * 100) : 100;

  return {
    dueToday,
    overdue,
    learning,
    mastered,
    totalCards: allFactIds.length,
    retentionRate,
    streakDays,
  };
}

export function getNextIntervalPreview(record: SRSItemRecord | undefined, grade: SRSGrade): string {
  if (!record || record.stability === 0) {
    if (grade === 1) return "< 1 day";
    if (grade === 2) return "1 day";
    if (grade === 3) return "3 days";
    return "7 days";
  }

  if (grade === 1) return "1 day";
  if (grade === 2) return `${Math.max(1, Math.round(record.stability * 1.25))} days`;
  if (grade === 3) return `${Math.max(3, Math.round(record.stability * 2.4))} days`;
  return `${Math.max(7, Math.round(record.stability * 3.6))} days`;
}

function updateStudyStreak(todayStr: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    const data = raw ? JSON.parse(raw) : { lastDate: "", streak: 0 };
    if (data.lastDate === todayStr) return;

    const yesterday = formatDate(addDays(new Date(), -1));
    if (data.lastDate === yesterday) {
      data.streak += 1;
    } else {
      data.streak = 1;
    }
    data.lastDate = todayStr;
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Streak tracking error:", err);
  }
}

export function getStudyStreak(): number {
  if (typeof window === "undefined") return 1;
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return 1;
    const data = JSON.parse(raw);
    return data.streak || 1;
  } catch {
    return 1;
  }
}


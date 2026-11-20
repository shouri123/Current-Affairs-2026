import type { QAItem } from "@/types";

export type QuizSessionQuestion = Omit<QAItem, "options" | "correctAnswerIndex"> & {
  options: string[];
  correctAnswerIndex: number;
};

export type RandomSource = () => number;

export function fisherYatesShuffle<T>(items: readonly T[], random: RandomSource = Math.random): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

/** A small deterministic PRNG for repeatable daily revision sessions. */
export function createSeededRandom(seed: string): RandomSource {
  let state = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    state ^= seed.charCodeAt(index);
    state = Math.imul(state, 16777619);
  }

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function normalizeOption(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function isPlaceholderOption(value: string): boolean {
  return /^(?:alternative option|state directive|union council|apex authority|statutory notification|regulatory framework|cabinet directive|standard assessment)\b/i.test(value.trim())
    || /x{8,}$/i.test(value.trim());
}

/**
 * Produces balanced answer positions for one quiz session. Each correct
 * position appears either floor(n / 4) or ceil(n / 4) times, and repeated
 * positions are avoided next to one another whenever possible.
 */
export function createBalancedAnswerPositions(
  length: number,
  random: RandomSource = Math.random
): number[] {
  if (length <= 0) return [];

  const counts = [0, 1, 2, 3].map(() => Math.floor(length / 4));
  const extras = fisherYatesShuffle([0, 1, 2, 3], random);

  for (let index = 0; index < length % 4; index += 1) {
    counts[extras[index]] += 1;
  }

  const positions: number[] = [];
  let previous = -1;

  while (positions.length < length) {
    let candidates = [0, 1, 2, 3].filter(
      (position) => counts[position] > 0 && position !== previous
    );

    // Balanced counts make this a rare fallback, but keep the function total.
    if (candidates.length === 0) {
      candidates = [0, 1, 2, 3].filter((position) => counts[position] > 0);
    }

    const highestRemainingCount = Math.max(...candidates.map((position) => counts[position]));
    const bestCandidates = candidates.filter(
      (position) => counts[position] === highestRemainingCount
    );
    const selected = bestCandidates[Math.floor(random() * bestCandidates.length)];

    positions.push(selected);
    counts[selected] -= 1;
    previous = selected;
  }

  return positions;
}

function getValidatedQuestion(item: QAItem): QuizSessionQuestion | null {
  const rawOptions = Array.isArray(item.options) ? item.options : [];
  const options = rawOptions
    .filter((option): option is string => typeof option === "string")
    .map((option) => option.trim())
    .filter((option) => option.length > 0 && !isPlaceholderOption(option));

  const uniqueOptions = Array.from(new Map(
    options.map((option) => [normalizeOption(option), option])
  ).values());

  const normalizedAnswer = normalizeOption(item.a || "");
  const answerMatches = uniqueOptions
    .map((option, index) => normalizeOption(option) === normalizedAnswer ? index : -1)
    .filter((index) => index >= 0);

  // Do not invent fallback answers or show a broken question. Fix the source
  // record instead when it does not contain four distinct choices and one key.
  if (uniqueOptions.length !== 4 || answerMatches.length !== 1) return null;

  return {
    ...item,
    options: uniqueOptions,
    correctAnswerIndex: answerMatches[0],
  };
}

/**
 * Creates a quiz session with a Fisher–Yates question shuffle and balanced,
 * independently shuffled answer positions. Invalid source questions are
 * excluded rather than shown with fake "Alternative option" distractors.
 */
export function createQuizSession(
  items: readonly QAItem[],
  random: RandomSource = Math.random,
  limit?: number
): QuizSessionQuestion[] {
  const eligible = items
    .map(getValidatedQuestion)
    .filter((question): question is QuizSessionQuestion => question !== null);

  const shuffledQuestions = fisherYatesShuffle(eligible, random);
  const selectedQuestions = typeof limit === "number"
    ? shuffledQuestions.slice(0, Math.max(0, limit))
    : shuffledQuestions;

  const answerPositions = createBalancedAnswerPositions(selectedQuestions.length, random);

  return selectedQuestions.map((question, index) => {
    const correctOption = question.options[question.correctAnswerIndex];
    const distractors = question.options.filter(
      (_, optionIndex) => optionIndex !== question.correctAnswerIndex
    );
    const shuffledDistractors = fisherYatesShuffle(distractors, random);
    const correctAnswerIndex = answerPositions[index];
    const options = [...shuffledDistractors];
    options.splice(correctAnswerIndex, 0, correctOption);

    return {
      ...question,
      options,
      correctAnswerIndex,
    };
  });
}

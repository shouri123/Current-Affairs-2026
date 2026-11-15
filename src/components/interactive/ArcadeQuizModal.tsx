"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import confetti from "canvas-confetti";
import { qaList as defaultQaList } from "@/data/qaList";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizMode, QuizQuestion, QuizAttemptRecord, QAItem } from "@/types";
import { Award, RotateCcw, CheckCircle2, XCircle, BookOpen, Layers } from "lucide-react";

interface ArcadeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  qaList?: QAItem[];
  onCorrectSound?: () => void;
  onWrongSound?: () => void;
  onFanfareSound?: () => void;
  incorrectQuestionIds?: string[];
  onSaveQuizAttempt?: (attempt: QuizAttemptRecord) => void;
}

export function ArcadeQuizModal({
  isOpen,
  onClose,
  qaList = defaultQaList,
  onCorrectSound,
  onWrongSound,
  onFanfareSound,
  incorrectQuestionIds = [],
  onSaveQuizAttempt,
}: ArcadeQuizModalProps) {
  const [selectedMode, setSelectedMode] = useState<QuizMode>("quick");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [isQuizActive, setIsQuizActive] = useState(false);

  const [questionList, setQuestionList] = useState<QAItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: string; selected: number; correct: number; isCorrect: boolean }[]
  >([]);
  const [isFinished, setIsFinished] = useState(false);

  // Available subjects
  const allSubjects = useMemo(() => {
    const set = new Set<string>();
    qaList.forEach((q) => {
      if (q.subject) set.add(q.subject);
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter questions based on selected mode
  const prepareQuestions = useCallback(() => {
    let pool = [...qaList];

    if (selectedMode === "quick") {
      pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 5);
    } else if (selectedMode === "must-know") {
      // Must-know questions (Q1 to Q20)
      pool = pool.slice(0, 15).sort(() => 0.5 - Math.random());
    } else if (selectedMode === "subject") {
      if (selectedSubject !== "All") {
        pool = pool.filter((q) => q.subject === selectedSubject);
      }
      if (pool.length === 0) pool = qaList.slice(0, 10);
      pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else if (selectedMode === "incorrect") {
      if (incorrectQuestionIds.length > 0) {
        pool = pool.filter((q) => incorrectQuestionIds.includes(q.id || ""));
      }
      if (pool.length === 0) {
        pool = qaList.slice(0, 5);
      }
    } else if (selectedMode === "full") {
      pool = [...pool].sort(() => 0.5 - Math.random());
    }

    setQuestionList(pool);
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setIsFinished(false);
    setIsQuizActive(true);
  }, [selectedMode, selectedSubject, incorrectQuestionIds]);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsQuizActive(false);
      setIsFinished(false);
      setSelectedOption(null);
    }
  }, [isOpen]);

  const currentQuestion = questionList[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(optIdx);
    const correctIdx = currentQuestion.correctAnswerIndex ?? 0;
    const isCorrect = optIdx === correctIdx;

    const newAnswer = {
      questionId: currentQuestion.id || `q-${currentIdx}`,
      selected: optIdx,
      correct: correctIdx,
      isCorrect,
    };
    setUserAnswers((prev) => [...prev, newAnswer]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      if (onCorrectSound) onCorrectSound();
      if ((streak + 1) % 5 === 0) {
        if (onFanfareSound) onFanfareSound();
        try {
          confetti({ particleCount: 40, spread: 50 });
        } catch {}
      }
    } else {
      setStreak(0);
      if (onWrongSound) onWrongSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questionList.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      // Completed quiz
      setIsFinished(true);
      if (onFanfareSound) onFanfareSound();
      try {
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      } catch {}

      // Save record
      if (onSaveQuizAttempt) {
        const finalScore = score + (selectedOption === (currentQuestion.correctAnswerIndex ?? 0) ? 0 : 0);
        const accuracy = Math.round((score / questionList.length) * 100);
        const missed = userAnswers
          .filter((a) => !a.isCorrect)
          .map((a) => a.questionId);

        onSaveQuizAttempt({
          id: `quiz-${Date.now()}`,
          date: new Date().toISOString(),
          mode: selectedMode,
          subject: selectedMode === "subject" ? selectedSubject : undefined,
          score,
          totalQuestions: questionList.length,
          accuracy,
          incorrectQuestionIds: missed,
        });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white border border-ink/20 rounded-xl p-5 sm:p-7 shadow-dropdown max-h-[90vh] overflow-y-auto font-sans">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand" />
              <DialogTitle className="font-display font-bold text-xl sm:text-2xl text-ink">
                Current Affairs Revision Quiz
              </DialogTitle>
            </div>
            {isQuizActive && !isFinished && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-muted border border-ink/15">
                Q {currentIdx + 1} of {questionList.length}
              </span>
            )}
          </div>
          <p className="text-xs text-muted mt-1">
            Test retention against official notifications, economic benchmarks, and appointments.
          </p>
        </DialogHeader>

        {/* MODE SELECTION SCREEN */}
        {!isQuizActive && (
          <div className="my-4 space-y-4">
            <h3 className="font-display font-bold text-sm text-ink uppercase tracking-wider">
              Choose Revision Mode
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => setSelectedMode("quick")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedMode === "quick"
                    ? "border-brand bg-sky-50 text-ink ring-1 ring-brand font-semibold shadow-subtle"
                    : "border-ink/15 bg-white hover:bg-cream text-ink"
                }`}
              >
                <span className="font-bold text-sm block">Quick Revision</span>
                <span className="text-muted block mt-0.5">5 fast questions across random subjects</span>
              </button>

              <button
                onClick={() => setSelectedMode("must-know")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedMode === "must-know"
                    ? "border-brand bg-sky-50 text-ink ring-1 ring-brand font-semibold shadow-subtle"
                    : "border-ink/15 bg-white hover:bg-cream text-ink"
                }`}
              >
                <span className="font-bold text-sm block">Must-Know Test</span>
                <span className="text-muted block mt-0.5">15 critical examination-tested facts</span>
              </button>

              <button
                onClick={() => setSelectedMode("subject")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedMode === "subject"
                    ? "border-brand bg-sky-50 text-ink ring-1 ring-brand font-semibold shadow-subtle"
                    : "border-ink/15 bg-white hover:bg-cream text-ink"
                }`}
              >
                <span className="font-bold text-sm block">Subject-Specific Test</span>
                <span className="text-muted block mt-0.5">Deep-dive into one category</span>
              </button>

              <button
                onClick={() => setSelectedMode("incorrect")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedMode === "incorrect"
                    ? "border-brand bg-sky-50 text-ink ring-1 ring-brand font-semibold shadow-subtle"
                    : "border-ink/15 bg-white hover:bg-cream text-ink"
                }`}
              >
                <span className="font-bold text-sm block">Mistakes Revision</span>
                <span className="text-muted block mt-0.5">
                  Re-test previously missed questions ({incorrectQuestionIds.length} recorded)
                </span>
              </button>

              <button
                onClick={() => setSelectedMode("full")}
                className={`p-3 rounded-lg border text-left sm:col-span-2 transition-all ${
                  selectedMode === "full"
                    ? "border-brand bg-sky-50 text-ink ring-1 ring-brand font-semibold shadow-subtle"
                    : "border-ink/15 bg-white hover:bg-cream text-ink"
                }`}
              >
                <span className="font-bold text-sm block">Full Comprehensive Test</span>
                <span className="text-muted block mt-0.5">All {qaList.length} questions in randomized sequence</span>
              </button>
            </div>

            {selectedMode === "subject" && (
              <div className="pt-2">
                <label className="text-xs font-semibold text-ink block mb-1">
                  Select Subject:
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full bg-cream border border-ink/20 rounded-md p-2 text-xs font-sans text-ink focus:outline-none focus:border-brand"
                >
                  {allSubjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="pt-3 border-t border-ink/15 flex justify-end">
              <Button onClick={prepareQuestions} className="text-xs font-sans px-5">
                Start Quiz
              </Button>
            </div>
          </div>
        )}

        {/* ACTIVE QUESTION SCREEN */}
        {isQuizActive && !isFinished && currentQuestion && (
          <div className="my-4 space-y-4">
            <div className="flex items-center justify-between text-xs text-muted">
              {currentQuestion.subject && (
                <span className="font-semibold text-brand">{currentQuestion.subject}</span>
              )}
              <span>Score: {score} / {currentIdx}</span>
            </div>

            <div className="p-4 bg-cream/50 rounded-xl border border-ink/15">
              <h4 className="font-serif font-bold text-base text-ink mb-3 leading-snug">
                {currentQuestion.q}
              </h4>

              <div className="space-y-2">
                {(currentQuestion.options || [
                  currentQuestion.a,
                  "Alternative option A",
                  "Alternative option B",
                  "Alternative option C",
                ]).map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect =
                    optIdx === (currentQuestion.correctAnswerIndex ?? 0);

                  let btnStyle = "border-ink/20 bg-white hover:bg-cream text-ink";
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold";
                    } else if (isSelected) {
                      btnStyle = "border-rose-500 bg-rose-50 text-rose-900 line-through";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-3 rounded-lg border text-xs font-sans transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="mt-3 p-3 bg-white rounded border border-ink/10 text-xs text-muted font-sans">
                  <p className="font-semibold text-ink mb-0.5">Explanation:</p>
                  <p className="leading-relaxed font-serif text-ink">
                    {currentQuestion.explanation || `The correct answer is: ${currentQuestion.a}`}
                  </p>
                </div>
              )}
            </div>

            {selectedOption !== null && (
              <div className="flex justify-end">
                <Button onClick={handleNextQuestion} size="sm" className="text-xs">
                  {currentIdx + 1 < questionList.length ? "Next Question" : "View Final Score"}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* RESULTS & REVIEW SCREEN */}
        {isQuizActive && isFinished && (
          <div className="my-5 text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              <Award className="h-8 w-8" />
            </div>

            <h3 className="font-display font-bold text-2xl text-ink">
              Quiz Completed!
            </h3>

            <div className="p-3 bg-cream/70 rounded-lg border border-ink/15 max-w-sm mx-auto text-xs font-sans space-y-1">
              <p className="text-muted">
                Final Score: <strong className="text-ink text-base">{score} / {questionList.length}</strong>
              </p>
              <p className="text-muted">
                Accuracy: <strong className="text-ink text-base">{Math.round((score / questionList.length) * 100)}%</strong>
              </p>
            </div>

            {/* Answers Review */}
            <div className="text-left mt-4 border-t border-ink/15 pt-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-ink mb-2">
                Detailed Review ({questionList.length} questions)
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {questionList.map((q, idx) => {
                  const ans = userAnswers[idx];
                  const isCorrect = ans ? ans.isCorrect : false;
                  return (
                    <div
                      key={idx}
                      className="p-2 rounded border border-ink/10 bg-white text-xs font-serif"
                    >
                      <div className="flex items-start gap-1.5">
                        {isCorrect ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-semibold text-ink">{q.q}</p>
                          <p className="text-emerald-700 font-sans text-[11px] mt-0.5">
                            Answer: {q.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsQuizActive(false);
                }}
                className="text-xs"
              >
                Try Another Mode
              </Button>
              <Button size="sm" onClick={onClose} className="text-xs">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

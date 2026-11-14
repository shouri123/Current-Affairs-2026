"use client";

import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FactItem, MagazineSection, QAItem } from "@/types";
import {
  Calendar,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";

interface DailyRevisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  allFacts: FactItem[];
  qaList: QAItem[];
  masteredIds: string[];
  onToggleMastered: (id: string) => void;
  onCorrectSound?: () => void;
  onWrongSound?: () => void;
  onFanfareSound?: () => void;
}

export function DailyRevisionModal({
  isOpen,
  onClose,
  allFacts,
  qaList,
  masteredIds,
  onToggleMastered,
  onCorrectSound,
  onWrongSound,
  onFanfareSound,
}: DailyRevisionModalProps) {
  const [sessionSeedOffset, setSessionSeedOffset] = useState(0);
  const [activeStep, setActiveStep] = useState<"reading" | "quiz" | "summary">("reading");
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Today's date string YYYY-MM-DD
  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // Simple deterministic pseudo-random seed from date + offset
  const dailyMustKnowFacts = useMemo(() => {
    const mustKnows = allFacts.filter((f) => f.hot);
    if (mustKnows.length === 0) return [];

    let seed = 0;
    for (let i = 0; i < todayStr.length; i++) {
      seed = (seed * 31 + todayStr.charCodeAt(i) + sessionSeedOffset) % 100000;
    }

    // Pick 7 distinct facts across subjects
    const picked: FactItem[] = [];
    const usedSubjects = new Set<string>();

    const copy = [...mustKnows];
    // Deterministic pseudo-shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      const j = Math.floor(rnd * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    for (const f of copy) {
      if (picked.length >= 7) break;
      if (!usedSubjects.has(f.category) || picked.length >= 5) {
        picked.push(f);
        usedSubjects.add(f.category);
      }
    }

    return picked.slice(0, 7);
  }, [allFacts, todayStr, sessionSeedOffset]);

  // Pick 5 relevant quiz questions
  const dailyQuestions = useMemo(() => {
    return qaList.slice(0, 5);
  }, [qaList]);

  const handleStartQuiz = () => {
    setActiveStep("quiz");
    setCurrentQuizIdx(0);
    setQuizScore(0);
    setSelectedOption(null);
  };

  const handleSelectQuizOption = (optionIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIdx);

    const currentQ = dailyQuestions[currentQuizIdx];
    const isCorrect = optionIdx === (currentQ.correctAnswerIndex ?? 0);

    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
      if (onCorrectSound) onCorrectSound();
    } else {
      if (onWrongSound) onWrongSound();
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIdx + 1 < dailyQuestions.length) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setActiveStep("summary");
      if (onFanfareSound) onFanfareSound();
      try {
        confetti({ particleCount: 50, spread: 60 });
      } catch {}
    }
  };

  const handleMarkAllStudied = () => {
    dailyMustKnowFacts.forEach((f) => {
      if (!masteredIds.includes(f.id)) {
        onToggleMastered(f.id);
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white border border-ink/20 rounded-xl p-5 sm:p-7 shadow-dropdown max-h-[90vh] overflow-y-auto font-sans">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand" />
              <DialogTitle className="font-display font-bold text-xl sm:text-2xl text-ink">
                Daily Revision Dose
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-zinc-100 text-muted border border-ink/15">
                {todayStr}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSessionSeedOffset((prev) => prev + 1);
                  setActiveStep("reading");
                }}
                className="text-xs h-7 py-0 gap-1"
                title="Shuffle another curated set"
              >
                <RefreshCw className="h-3 w-3" />
                Shuffle
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted mt-1">
            7 high-priority Must-Know examination facts across 7 subjects, followed by a 5-question retention test.
          </p>
        </DialogHeader>

        {/* STEP 1: READING */}
        {activeStep === "reading" && (
          <div className="my-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-ink uppercase tracking-wider">
                Today's 7 Key Facts
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkAllStudied}
                className="text-xs h-7 py-0 gap-1 text-emerald-700"
              >
                <CheckCircle className="h-3.5 w-3.5" />
                Mark All Studied
              </Button>
            </div>

            <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
              {dailyMustKnowFacts.map((fact, index) => {
                const isMastered = masteredIds.includes(fact.id);
                return (
                  <div
                    key={fact.id}
                    className="p-3 rounded-lg border border-ink/15 bg-cream/30 hover:bg-white transition-all text-sm font-serif"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-sans font-bold text-brand uppercase tracking-wider">
                        {index + 1}. {fact.category}
                      </span>
                      <button
                        onClick={() => onToggleMastered(fact.id)}
                        className={`text-xs font-sans px-2 py-0.5 rounded border ${
                          isMastered
                            ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                            : "bg-white text-muted border-ink/20 hover:text-ink"
                        }`}
                      >
                        {isMastered ? "Mastered" : "Mark Mastered"}
                      </button>
                    </div>
                    <p className="text-ink leading-relaxed">{fact.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-ink/15 pt-4 flex justify-end">
              <Button onClick={handleStartQuiz} className="text-xs font-sans gap-1.5">
                Take Follow-Up Quiz (5 Questions)
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: QUIZ */}
        {activeStep === "quiz" && (
          <div className="my-4 space-y-4">
            <div className="flex items-center justify-between text-xs font-medium text-muted">
              <span>Question {currentQuizIdx + 1} of {dailyQuestions.length}</span>
              <span>Score: {quizScore} / {currentQuizIdx}</span>
            </div>

            <div className="p-4 bg-cream/50 rounded-xl border border-ink/15">
              <h4 className="font-serif font-bold text-base text-ink mb-3">
                {dailyQuestions[currentQuizIdx].q}
              </h4>

              <div className="space-y-2">
                {(dailyQuestions[currentQuizIdx].options || [
                  dailyQuestions[currentQuizIdx].a,
                  "Alternative option A",
                  "Alternative option B",
                  "Alternative option C",
                ]).map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect =
                    optIdx === (dailyQuestions[currentQuizIdx].correctAnswerIndex ?? 0);

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
                      onClick={() => handleSelectQuizOption(optIdx)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs font-sans transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="mt-3 p-2.5 bg-white rounded border border-ink/10 text-xs text-muted font-sans">
                  <strong>Explanation: </strong>
                  {dailyQuestions[currentQuizIdx].explanation ||
                    `Correct answer is: ${dailyQuestions[currentQuizIdx].a}`}
                </div>
              )}
            </div>

            {selectedOption !== null && (
              <div className="flex justify-end">
                <Button onClick={handleNextQuizQuestion} size="sm" className="text-xs">
                  {currentQuizIdx + 1 < dailyQuestions.length ? "Next Question" : "Complete Session"}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: SUMMARY */}
        {activeStep === "summary" && (
          <div className="my-6 text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              <Award className="h-8 w-8" />
            </div>

            <h3 className="font-display font-bold text-2xl text-ink">
              Daily Revision Complete!
            </h3>

            <p className="text-sm text-muted max-w-md mx-auto font-serif">
              You reviewed today's 7 key exam topics and scored{" "}
              <strong className="text-ink font-bold">
                {quizScore} out of {dailyQuestions.length}
              </strong>{" "}
              ({Math.round((quizScore / dailyQuestions.length) * 100)}% accuracy).
            </p>

            <div className="flex items-center justify-center gap-3 pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveStep("reading");
                }}
                className="text-xs"
              >
                Review Facts Again
              </Button>
              <Button size="sm" onClick={onClose} className="text-xs">
                Back to Gazette
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}


"use client";

import React, { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { qaList } from "@/data/qaList";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ArcadeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCorrectSound?: () => void;
  onWrongSound?: () => void;
  onFanfareSound?: () => void;
}

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export function ArcadeQuizModal({
  isOpen,
  onClose,
  onCorrectSound,
  onWrongSound,
  onFanfareSound,
}: ArcadeQuizModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);
  const [streak, setStreak] = useState(0);
  const [options, setOptions] = useState<QuizOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("Select the correct answer");

  const loadQuestion = useCallback((idx: number) => {
    setSelectedOption(null);
    setFeedback("Select the correct answer");

    const currentQA = qaList[idx % qaList.length];
    const correctAnswer = currentQA.a;

    const otherAnswers = qaList
      .filter((_, i) => i !== (idx % qaList.length))
      .map((item) => item.a);

    const shuffledOthers = [...otherAnswers].sort(() => 0.5 - Math.random()).slice(0, 3);
    const combined = [
      { text: correctAnswer, isCorrect: true },
      ...shuffledOthers.map((text) => ({ text, isCorrect: false })),
    ].sort(() => 0.5 - Math.random());

    setOptions(combined);
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadQuestion(currentIdx);
    }
  }, [isOpen, currentIdx, loadQuestion]);

  const handleSelect = (optionIdx: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIdx);
    setTotalAttempted((prev) => prev + 1);

    const isCorrect = options[optionIdx].isCorrect;

    if (isCorrect) {
      const nextScore = score + 1;
      const nextStreak = streak + 1;
      setScore(nextScore);
      setStreak(nextStreak);
      setFeedback(`Correct. Consecutive correct: ${nextStreak}`);

      if (onCorrectSound) onCorrectSound();

      if (nextStreak > 0 && nextStreak % 5 === 0) {
        if (onFanfareSound) onFanfareSound();
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {}
      }
    } else {
      setStreak(0);
      setFeedback("Incorrect.");
      if (onWrongSound) onWrongSound();
    }
  };

  const handleNext = () => {
    const next = (currentIdx + 1) % qaList.length;
    setCurrentIdx(next);
    loadQuestion(next);
  };

  const handleReset = () => {
    setScore(0);
    setTotalAttempted(0);
    setStreak(0);
    setCurrentIdx(0);
    loadQuestion(0);
  };

  const currentQA = qaList[currentIdx % qaList.length];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-cream border border-ink/20 p-6 rounded-xl shadow-dropdown">
        <DialogHeader className="border-b border-ink/15 pb-3 mb-2">
          <div className="flex items-center justify-between gap-3 font-sans">
            <DialogTitle className="text-lg font-bold font-display">
              Examination Self-Test Quiz
            </DialogTitle>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>Score: {score}/{totalAttempted}</span>
              <span>•</span>
              <span>Streak: {streak}</span>
            </div>
          </div>
        </DialogHeader>

        {/* Question Box */}
        <div className="bg-white border border-ink/15 rounded-lg p-4 my-2">
          <div className="text-xs font-sans text-muted mb-1">
            Question {((currentIdx % qaList.length) + 1)} of {qaList.length}
          </div>
          <p className="font-display font-medium text-base text-ink leading-snug">
            {currentQA?.q}
          </p>
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 gap-2 my-2 font-sans">
          {options.map((opt, optIdx) => {
            let buttonStyle = "bg-white hover:bg-zinc-50 border-ink/20 text-ink";

            if (selectedOption !== null) {
              if (opt.isCorrect) {
                buttonStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
              } else if (selectedOption === optIdx) {
                buttonStyle = "bg-rose-50 border-rose-400 text-rose-950";
              } else {
                buttonStyle = "bg-zinc-50 text-muted border-ink/10";
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelect(optIdx)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-3 rounded-lg border text-sm transition-colors select-none ${buttonStyle}`}
              >
                {opt.text}
              </button>
            );
          })}
        </div>

        {/* Feedback & Navigation Footer */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-ink/15 mt-2 font-sans text-xs">
          <div className="text-muted font-medium">
            {feedback}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs"
            >
              Reset
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={handleNext}
              disabled={selectedOption === null}
              className="text-xs"
            >
              Next Question
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

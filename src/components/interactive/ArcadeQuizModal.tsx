"use client";

import React, { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { qaList } from "@/data/qaList";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Flame, Trophy, ArrowRight, RotateCcw } from "lucide-react";

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
  const [feedback, setFeedback] = useState<string>("Pick the right answer!");

  const loadQuestion = useCallback((idx: number) => {
    setSelectedOption(null);
    setFeedback("Pick the right answer!");

    const currentQA = qaList[idx % qaList.length];
    const correctAnswer = currentQA.a;

    // Pick 3 random distractor answers from other Q&As
    const otherAnswers = qaList
      .filter((_, i) => i !== (idx % qaList.length))
      .map((item) => item.a);

    // Shuffle and pick 3
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
    if (selectedOption !== null) return; // Already answered

    setSelectedOption(optionIdx);
    setTotalAttempted((prev) => prev + 1);

    const isCorrect = options[optionIdx].isCorrect;

    if (isCorrect) {
      const nextScore = score + 1;
      const nextStreak = streak + 1;
      setScore(nextScore);
      setStreak(nextStreak);
      setFeedback(`🎉 Superb! Correct answer! Streak: ${nextStreak}🔥`);

      if (onCorrectSound) onCorrectSound();

      // Trigger confetti on streaks
      if (nextStreak > 0 && nextStreak % 3 === 0) {
        if (onFanfareSound) onFanfareSound();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}
      }
    } else {
      setStreak(0);
      setFeedback("❌ Ouch! Incorrect, but keep going!");
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
      <DialogContent className="sm:max-w-xl bg-cream border-4 border-ink p-6 rounded-3xl">
        <DialogHeader className="border-b-2 border-ink pb-3 mb-2">
          <div className="flex items-center justify-between gap-3">
            <DialogTitle className="flex items-center gap-2 text-xl font-black">
              <span>🎮</span> Neo-Brutalist Arcade Quiz
            </DialogTitle>
            <div className="flex items-center gap-2">
              <span className="bg-popMint text-ink font-display font-bold text-xs px-2.5 py-1 rounded-full border-2 border-ink shadow-brutal-sm flex items-center gap-1">
                <Trophy className="h-3 w-3" /> {score} / {totalAttempted}
              </span>
              <span className="bg-popOrange text-ink font-display font-bold text-xs px-2.5 py-1 rounded-full border-2 border-ink shadow-brutal-sm flex items-center gap-1">
                <Flame className="h-3 w-3 fill-ink" /> {streak}🔥
              </span>
            </div>
          </div>
        </DialogHeader>

        {/* Question Box */}
        <div className="bg-white border-3 border-ink rounded-2xl p-4 shadow-brutal-sm my-2">
          <div className="text-[10px] font-black uppercase text-popPink mb-1">
            Question #{((currentIdx % qaList.length) + 1)} of {qaList.length}
          </div>
          <p className="font-display font-bold text-base sm:text-lg text-ink leading-snug">
            {currentQA?.q}
          </p>
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 gap-2.5 my-2">
          {options.map((opt, optIdx) => {
            let buttonStyle = "bg-white hover:bg-cream border-2 border-ink text-ink";

            if (selectedOption !== null) {
              if (opt.isCorrect) {
                buttonStyle = "bg-popMint border-3 border-ink text-ink font-black shadow-brutal-sm scale-[1.01]";
              } else if (selectedOption === optIdx) {
                buttonStyle = "bg-popCoral border-3 border-ink text-white font-black";
              } else {
                buttonStyle = "bg-zinc-100 text-ink/40 border-2 border-ink/40";
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelect(optIdx)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-3.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-150 shadow-brutal-sm flex items-center justify-between select-none ${buttonStyle}`}
              >
                <span>{opt.text}</span>
                {selectedOption !== null && opt.isCorrect && (
                  <span className="text-base">✅</span>
                )}
                {selectedOption === optIdx && !opt.isCorrect && (
                  <span className="text-base">❌</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-ink mt-2">
          <div className="font-display font-bold text-xs sm:text-sm text-ink">
            {feedback}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              title="Reset Quiz Score"
              className="gap-1 text-xs"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>

            <Button
              variant="pink"
              size="sm"
              onClick={handleNext}
              disabled={selectedOption === null}
              className="gap-1.5"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


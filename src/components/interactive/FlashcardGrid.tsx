"use client";

import React, { useState } from "react";
import { qaList } from "@/data/qaList";
import { Button } from "@/components/ui/button";

interface FlashcardGridProps {
  searchQuery: string;
  onFlipSound?: () => void;
  onChimeSound?: () => void;
}

export function FlashcardGrid({ searchQuery, onFlipSound, onChimeSound }: FlashcardGridProps) {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [memorizedCards, setMemorizedCards] = useState<Record<number, boolean>>({});
  const [allFlipped, setAllFlipped] = useState(false);

  const toggleFlip = (index: number) => {
    if (onFlipSound) onFlipSound();
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    if (onFlipSound) onFlipSound();
    const nextState = !allFlipped;
    setAllFlipped(nextState);
    const updated: Record<number, boolean> = {};
    qaList.forEach((_, i) => {
      updated[i] = nextState;
    });
    setFlippedCards(updated);
  };

  const toggleMemorized = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onChimeSound) onChimeSound();
    setMemorizedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredQA = qaList
    .map((item, idx) => ({ ...item, originalIdx: idx }))
    .filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    });

  const memorizedCount = Object.values(memorizedCards).filter(Boolean).length;

  return (
    <section id="section-quiz" className="print-section scroll-mt-28 mb-8">
      <div className="gazette-card p-5 sm:p-6 border border-ink/15 rounded-xl bg-white shadow-subtle">
        {/* Header - Clean typography without emoji */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-5 border-b border-ink/15 font-sans">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
                Revision Q&A Deck
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-muted border border-ink/15">
                {filteredQA.length} Questions
              </span>
            </div>
            <p className="text-xs text-muted mt-1">
              Self-assessment cards derived directly from the September 2026 notifications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-medium">
              {memorizedCount} of {qaList.length} reviewed
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAll}
              className="text-xs"
            >
              {allFlipped ? "Show Questions" : "Reveal Answers"}
            </Button>
          </div>
        </div>

        {/* 3D Flashcard Grid - 1px borders, zero offset shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-serif">
          {filteredQA.map((item) => {
            const isFlipped = flippedCards[item.originalIdx] || false;
            const isMemorized = memorizedCards[item.originalIdx] || false;

            return (
              <div
                key={item.originalIdx}
                className="perspective-1000 min-h-[160px] cursor-pointer"
                onClick={() => toggleFlip(item.originalIdx)}
              >
                <div
                  className={`w-full h-full relative transition-transform duration-300 transform-style-preserve-3d rounded-lg ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front: Question */}
                  <div className="absolute inset-0 backface-hidden bg-white border border-ink/15 rounded-lg p-4 flex flex-col justify-between hover:border-ink/40">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-sans">
                        <span className="text-xs font-semibold text-muted">
                          Item {item.originalIdx + 1}
                        </span>
                        <button
                          onClick={(e) => toggleMemorized(item.originalIdx, e)}
                          title={isMemorized ? "Reviewed" : "Mark reviewed"}
                          className={`text-xs px-2 py-0.5 rounded border ${
                            isMemorized
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : "bg-zinc-50 text-muted border-ink/15 hover:bg-zinc-100"
                          }`}
                        >
                          {isMemorized ? "Reviewed" : "Mark"}
                        </button>
                      </div>
                      <p className="font-display font-medium text-sm sm:text-base text-ink leading-snug">
                        {item.q}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-ink/10 text-xs text-muted font-sans flex items-center justify-between">
                      <span>Click card to reveal answer</span>
                    </div>
                  </div>

                  {/* Back: Verified Answer */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-cream border border-ink/20 rounded-lg p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-sans">
                        <span className="text-xs font-semibold text-brand">
                          Official Answer
                        </span>
                        <button
                          onClick={(e) => toggleMemorized(item.originalIdx, e)}
                          className={`text-xs px-2 py-0.5 rounded border ${
                            isMemorized
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : "bg-white text-muted border-ink/15"
                          }`}
                        >
                          {isMemorized ? "Reviewed" : "Mark"}
                        </button>
                      </div>
                      <p className="font-serif font-semibold text-sm sm:text-base text-ink leading-snug">
                        {item.a}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-ink/10 text-xs text-muted font-sans flex items-center justify-between">
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

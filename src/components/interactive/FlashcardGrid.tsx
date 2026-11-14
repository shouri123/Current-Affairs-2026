"use client";

import React, { useState } from "react";
import { qaList } from "@/data/qaList";
import { Eye, EyeOff, Check, RotateCw } from "lucide-react";
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
    <section id="section-quiz" className="print-section scroll-mt-28 mt-8 mb-8 sm:mt-10 sm:mb-10">
      <div className="comic-card bg-popPink/10 rounded-3xl border-3 sm:border-4 border-ink p-5 sm:p-7 shadow-brutal-lg">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-5 border-b-3 border-ink">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 bg-white rounded-2xl border-2 border-ink shadow-brutal-sm">
              🎯
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-black text-xl sm:text-2xl text-ink">
                  High-Yield Q&A Flashcard Deck
                </h2>
                <span className="bg-popPink text-white font-extrabold text-[11px] px-2.5 py-0.5 rounded-full border border-ink shadow-brutal-sm">
                  {filteredQA.length} Cards
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-ink/70 mt-0.5">
                Click any card to flip 3D and test your memory!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black font-display bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm">
              {memorizedCount} / {qaList.length} Memorized
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAll}
              className="gap-1.5 bg-white"
            >
              {allFlipped ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span>Hide All</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span>Flip All</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* 3D Flashcard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredQA.map((item) => {
            const isFlipped = flippedCards[item.originalIdx] || false;
            const isMemorized = memorizedCards[item.originalIdx] || false;

            return (
              <div
                key={item.originalIdx}
                className="perspective-1000 min-h-[170px] cursor-pointer"
                onClick={() => toggleFlip(item.originalIdx)}
              >
                <div
                  className={`w-full h-full relative transition-transform duration-500 transform-style-preserve-3d rounded-2xl ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side: Question */}
                  <div className="absolute inset-0 backface-hidden bg-white border-2 sm:border-3 border-ink rounded-2xl p-4 shadow-brutal flex flex-col justify-between hover:bg-cream">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="bg-popYellow text-ink text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-ink shadow-brutal-sm">
                          Card #{item.originalIdx + 1}
                        </span>
                        <button
                          onClick={(e) => toggleMemorized(item.originalIdx, e)}
                          title={isMemorized ? "Memorized" : "Mark memorized"}
                          className={`h-6 w-6 rounded-md border border-ink flex items-center justify-center transition-all ${
                            isMemorized ? "bg-popMint text-ink" : "bg-zinc-100 text-ink/30 hover:bg-popMint"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </button>
                      </div>
                      <p className="font-display font-bold text-sm sm:text-base text-ink leading-snug">
                        {item.q}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-ink/10 flex items-center justify-between text-[11px] font-bold text-ink/50">
                      <span className="flex items-center gap-1">
                        <RotateCw className="h-3 w-3" /> Click to reveal answer
                      </span>
                      <span>💡 Test yourself</span>
                    </div>
                  </div>

                  {/* Back Side: Answer */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-popMint/40 to-yellow-100 border-2 sm:border-3 border-ink rounded-2xl p-4 shadow-brutal flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="bg-popMint text-ink text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-ink shadow-brutal-sm">
                          Verified Answer
                        </span>
                        <button
                          onClick={(e) => toggleMemorized(item.originalIdx, e)}
                          title={isMemorized ? "Memorized" : "Mark memorized"}
                          className={`h-6 w-6 rounded-md border border-ink flex items-center justify-center transition-all ${
                            isMemorized ? "bg-popMint text-ink" : "bg-white text-ink/30 hover:bg-popMint"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </button>
                      </div>
                      <p className="font-sans font-extrabold text-sm sm:text-base text-ink leading-snug">
                        {item.a}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-ink/20 flex items-center justify-between text-[11px] font-bold text-ink/70">
                      <span className="flex items-center gap-1">
                        <RotateCw className="h-3 w-3" /> Click to flip back
                      </span>
                      <span>✨ Exam Verified</span>
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

"use client";

import React, { useState, useMemo, useEffect } from "react";
import { qaList as defaultQaList } from "@/data/qaList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QAItem } from "@/types";
import {
  RotateCcw,
  Shuffle,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FlashcardGridProps {
  qaList?: QAItem[];
  monthName?: string;
  searchQuery: string;
  onFlipSound?: () => void;
  onChimeSound?: () => void;
}

export function FlashcardGrid({
  qaList = defaultQaList,
  monthName,
  searchQuery,
  onFlipSound,
  onChimeSound,
}: FlashcardGridProps) {
  const [deck, setDeck] = useState<QAItem[]>(qaList);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [reviewedCards, setReviewedCards] = useState<Record<number, boolean>>({});
  const [allFlipped, setAllFlipped] = useState(false);

  useEffect(() => {
    setDeck(qaList);
    setFlippedCards({});
    setReviewedCards({});
    setAllFlipped(false);
  }, [qaList]);

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
    deck.forEach((_, i) => {
      updated[i] = nextState;
    });
    setFlippedCards(updated);
  };

  const toggleReviewed = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onChimeSound) onChimeSound();
    setReviewedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShuffle = () => {
    if (onFlipSound) onFlipSound();
    setDeck((prev) => [...prev].sort(() => 0.5 - Math.random()));
    setFlippedCards({});
    setAllFlipped(false);
  };

  const filteredQA = useMemo(() => {
    return deck
      .map((item, idx) => ({ ...item, originalIdx: idx }))
      .filter((item) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q) ||
          (item.subject && item.subject.toLowerCase().includes(q))
        );
      });
  }, [deck, searchQuery]);

  const reviewedCount = Object.values(reviewedCards).filter(Boolean).length;
  const progressPercent =
    deck.length > 0 ? Math.round((reviewedCount / deck.length) * 100) : 0;

  return (
    <section id="section-quiz" className="print-section scroll-mt-28 mb-8">
      <div className="gazette-card p-5 sm:p-6 border border-ink/15 rounded-xl bg-white shadow-subtle">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-5 border-b border-ink/15 font-sans">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
                {deck.length}-Question Interactive Revision Deck
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-muted border border-ink/15">
                {filteredQA.length} Cards
              </span>
            </div>
            <p className="text-xs text-muted mt-1">
              Active-recall cards derived directly from official {monthName ? `${monthName} ` : ""}notifications. Tap card to flip.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted font-medium mr-2">
              Reviewed: <strong className="text-ink">{reviewedCount}/{deck.length}</strong> ({progressPercent}%)
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShuffle}
              className="text-xs gap-1"
            >
              <Shuffle className="h-3 w-3" />
              Shuffle Deck
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAll}
              className="text-xs"
            >
              {allFlipped ? "Show Questions" : "Reveal All Answers"}
            </Button>
          </div>
        </div>

        {/* 3D Flashcard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-serif">
          {filteredQA.map((item) => {
            const isFlipped = flippedCards[item.originalIdx] || false;
            const isReviewed = reviewedCards[item.originalIdx] || false;

            return (
              <div
                key={item.originalIdx}
                className="perspective-1000 min-h-[190px] cursor-pointer"
                onClick={() => toggleFlip(item.originalIdx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFlip(item.originalIdx);
                  }
                }}
                aria-label={`Flashcard: ${item.q}`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-300 transform-style-preserve-3d rounded-xl border ${
                    isReviewed ? "border-emerald-500/40" : "border-ink/15"
                  } shadow-subtle ${isFlipped ? "rotate-y-180" : ""}`}
                >
                  {/* FRONT: QUESTION */}
                  <div
                    className={`absolute inset-0 backface-hidden p-4 rounded-xl flex flex-col justify-between ${
                      isReviewed ? "bg-emerald-50/20" : "bg-cream/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2 font-sans">
                        <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
                          {item.subject || "Current Affairs 2026"}
                        </span>
                        <button
                          onClick={(e) => toggleReviewed(item.originalIdx, e)}
                          title={isReviewed ? "Mark as unreviewed" : "Mark as mastered"}
                          className={`p-1 rounded text-xs transition-colors ${
                            isReviewed
                              ? "text-emerald-700 bg-emerald-100"
                              : "text-zinc-400 hover:text-ink"
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-bold text-ink text-sm sm:text-base leading-snug">
                        {item.q}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-sans text-[11px] text-muted pt-2 border-t border-ink/10">
                      <span>Click to flip</span>
                      <span className="text-zinc-400">Card #{item.originalIdx + 1}</span>
                    </div>
                  </div>

                  {/* BACK: ANSWER & EXPLANATION */}
                  <div
                    className="absolute inset-0 backface-hidden rotate-y-180 p-4 rounded-xl bg-white border border-brand/30 flex flex-col justify-between shadow-subtle"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1 font-sans">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                          Verified Answer
                        </span>
                        {(item.source || item.sources?.[0]) && (
                          <a
                            href={(item.source || item.sources?.[0])?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] text-brand hover:underline flex items-center gap-0.5"
                          >
                            <span>Official Source</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        )}
                      </div>

                      <p className="font-bold text-ink text-sm sm:text-base leading-snug">
                        {item.a}
                      </p>

                      {item.explanation && (
                        <p className="text-xs text-muted mt-2 leading-relaxed font-sans">
                          {item.explanation}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between font-sans text-[11px] text-muted pt-2 border-t border-ink/10">
                      <span>Click to see question</span>
                      <button
                        onClick={(e) => toggleReviewed(item.originalIdx, e)}
                        className={`text-xs font-semibold ${
                          isReviewed ? "text-emerald-700" : "text-brand hover:underline"
                        }`}
                      >
                        {isReviewed ? "Mastered" : "Mark Mastered"}
                      </button>
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

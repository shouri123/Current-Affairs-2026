"use client";

import React, { useState, useMemo, useEffect } from "react";
import { qaList as defaultQaList } from "@/data/qaList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QAItem } from "@/types";
import {
  recordSRSReview,
  loadSRSRecords,
  SRSItemRecord,
  SRSGrade,
} from "@/lib/spacedRepetition";
import {
  RotateCcw,
  Shuffle,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Brain,
  Sparkles,
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
  const [srsRecords, setSrsRecords] = useState<Record<string, SRSItemRecord>>({});
  const [showOnlyDue, setShowOnlyDue] = useState(false);

  useEffect(() => {
    setDeck(qaList);
    setFlippedCards({});
    setReviewedCards({});
    setAllFlipped(false);
    setSrsRecords(loadSRSRecords());
  }, [qaList]);

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

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

  const handleGradeCard = (cardIdx: number, grade: SRSGrade, e: React.MouseEvent) => {
    e.stopPropagation();
    const item = deck[cardIdx];
    const cardId = item.id || `card-${monthName || "cur"}-${cardIdx}`;
    const { updatedRecord, allRecords } = recordSRSReview(cardId, grade);
    setSrsRecords({ ...allRecords });

    // Mark as reviewed in local session
    setReviewedCards((prev) => ({
      ...prev,
      [cardIdx]: true,
    }));

    if (grade >= 3 && onChimeSound) {
      onChimeSound();
    } else if (onFlipSound) {
      onFlipSound();
    }
  };

  const handleShuffle = () => {
    if (onFlipSound) onFlipSound();
    setDeck((prev) => [...prev].sort(() => 0.5 - Math.random()));
    setFlippedCards({});
    setAllFlipped(false);
  };

  const dueCount = useMemo(() => {
    return deck.filter((item, idx) => {
      const cardId = item.id || `card-${monthName || "cur"}-${idx}`;
      const rec = srsRecords[cardId];
      return !rec || rec.dueDate <= todayStr;
    }).length;
  }, [deck, srsRecords, monthName, todayStr]);

  const filteredQA = useMemo(() => {
    return deck
      .map((item, idx) => ({
        ...item,
        originalIdx: idx,
        cardId: item.id || `card-${monthName || "cur"}-${idx}`,
      }))
      .filter((item) => {
        if (showOnlyDue) {
          const rec = srsRecords[item.cardId];
          if (rec && rec.dueDate > todayStr) return false;
        }
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q) ||
          (item.subject && item.subject.toLowerCase().includes(q))
        );
      });
  }, [deck, searchQuery, showOnlyDue, srsRecords, monthName, todayStr]);

  const reviewedCount = Object.values(reviewedCards).filter(Boolean).length;
  const progressPercent =
    deck.length > 0 ? Math.round((reviewedCount / deck.length) * 100) : 0;

  return (
    <section id="section-quiz" className="print-section scroll-mt-28 mb-8">
      <div className="gazette-card p-5 sm:p-6 border-2 border-ink rounded-2xl bg-white shadow-brutal-sm font-sans">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-5 border-b-2 border-ink/15 font-sans">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand" />
              <h2 className="font-display font-black text-xl sm:text-2xl text-ink">
                {deck.length}-Question FSRS Revision Deck
              </h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-popYellow/40 text-ink border border-ink">
                {filteredQA.length} Cards
              </span>
            </div>
            <p className="text-xs text-muted mt-1 font-serif">
              Adaptive spaced-repetition cards derived directly from official {monthName ? `${monthName} ` : ""}notifications. Tap card to flip.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Due Filter Toggle */}
            <Button
              variant={showOnlyDue ? "default" : "outline"}
              size="sm"
              onClick={() => setShowOnlyDue((prev) => !prev)}
              className="text-xs font-bold border-2 border-ink shadow-xs gap-1.5"
            >
              <Brain className="h-3.5 w-3.5" />
              Due Today ({dueCount})
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShuffle}
              className="text-xs font-bold border-2 border-ink bg-cream hover:bg-white shadow-xs gap-1"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Shuffle
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAll}
              className="text-xs font-bold border-2 border-ink bg-cream hover:bg-white shadow-xs"
            >
              {allFlipped ? "Show Questions" : "Reveal All"}
            </Button>
          </div>
        </div>

        {/* Flashcards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredQA.map((item) => {
            const isFlipped = !!flippedCards[item.originalIdx];
            const isReviewed = !!reviewedCards[item.originalIdx];
            const srsRec = srsRecords[item.cardId];

            return (
              <div
                key={item.originalIdx}
                className="perspective-1000 min-h-[220px] cursor-pointer"
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
                  className={`relative w-full h-full transition-transform duration-300 transform-style-preserve-3d rounded-xl border-2 border-ink shadow-brutal-sm ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT: QUESTION */}
                  <div
                    className={`absolute inset-0 backface-hidden p-4 rounded-xl flex flex-col justify-between ${
                      isReviewed ? "bg-emerald-50/40" : "bg-cream/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2 font-sans">
                        <span className="text-[10px] font-black text-brand uppercase tracking-wider">
                          {item.subject || "Current Affairs 2026"}
                        </span>
                        {srsRec ? (
                          <span className="text-[10px] font-bold text-ink/70 px-1.5 py-0.5 rounded bg-zinc-100 border border-ink/20">
                            Due: {srsRec.dueDate}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-amber-700 px-1.5 py-0.5 rounded bg-amber-100 border border-amber-300">
                            New Card
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-ink text-sm sm:text-base leading-snug">
                        {item.q}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-sans text-[11px] text-muted pt-2 border-t border-ink/10">
                      <span>Click to flip answer</span>
                      <span className="text-zinc-400 font-bold">#{item.originalIdx + 1}</span>
                    </div>
                  </div>

                  {/* BACK: ANSWER, EXPLANATION & 4-GRADE SPACING */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 p-3.5 rounded-xl bg-white border-2 border-brand/40 flex flex-col justify-between shadow-brutal-sm">
                    <div className="overflow-y-auto max-h-[120px] pr-1">
                      <div className="flex items-center justify-between gap-1 mb-1 font-sans">
                        <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider">
                          Verified Answer
                        </span>
                        {(item.source || item.sources?.[0]) && (
                          <a
                            href={(item.source || item.sources?.[0])?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] text-brand hover:underline inline-flex items-center gap-0.5 font-bold"
                          >
                            <span>Source</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        )}
                      </div>

                      <p className="font-bold text-ink text-xs sm:text-sm leading-snug">
                        {item.a}
                      </p>

                      {item.explanation && (
                        <p className="text-[11px] text-muted mt-1 leading-relaxed font-serif">
                          {item.explanation}
                        </p>
                      )}
                    </div>

                    {/* FSRS 4-Grade Spaced Repetition Response Bar */}
                    <div
                      className="pt-2 border-t border-ink/10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="text-[9px] font-bold text-muted uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>Rate Recall:</span>
                        {srsRec && (
                          <span className="text-emerald-700 font-bold">
                            Interval: {srsRec.stability}d
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        <button
                          onClick={(e) => handleGradeCard(item.originalIdx, 1, e)}
                          className="px-1 py-1 rounded border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-black text-[9px] text-center transition-colors"
                          title="Again (< 1 day)"
                        >
                          Again <span className="block text-[8px] opacity-75">&lt;1d</span>
                        </button>
                        <button
                          onClick={(e) => handleGradeCard(item.originalIdx, 2, e)}
                          className="px-1 py-1 rounded border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-800 font-black text-[9px] text-center transition-colors"
                          title="Hard (1 day)"
                        >
                          Hard <span className="block text-[8px] opacity-75">1d</span>
                        </button>
                        <button
                          onClick={(e) => handleGradeCard(item.originalIdx, 3, e)}
                          className="px-1 py-1 rounded border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-black text-[9px] text-center transition-colors"
                          title="Good (3 days)"
                        >
                          Good <span className="block text-[8px] opacity-75">3d</span>
                        </button>
                        <button
                          onClick={(e) => handleGradeCard(item.originalIdx, 4, e)}
                          className="px-1 py-1 rounded border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 font-black text-[9px] text-center transition-colors"
                          title="Easy (7 days)"
                        >
                          Easy <span className="block text-[8px] opacity-75">7d</span>
                        </button>
                      </div>
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

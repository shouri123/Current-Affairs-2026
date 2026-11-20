"use client";

import React, { useState } from "react";
import {
  DAILY_NEWSROOM_ARTICLES,
  NewsroomArticle,
} from "@/data/dailyNewsroomData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Newspaper,
  Calendar,
  Sparkles,
  Target,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DailyNewsroom() {
  const [selectedDate, setSelectedDate] = useState<string>("all");
  const [expandedArticleId, setExpandedArticleId] = useState<string>(
    DAILY_NEWSROOM_ARTICLES[0].id
  );
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const availableDates = Array.from(
    new Set(DAILY_NEWSROOM_ARTICLES.map((a) => a.date))
  );

  const filteredArticles = DAILY_NEWSROOM_ARTICLES.filter((a) => {
    if (selectedDate !== "all" && a.date !== selectedDate) return false;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? "" : id));
  };

  const handleSelectAnswer = (articleId: string, optionIdx: number) => {
    if (selectedAnswers[articleId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [articleId]: optionIdx }));
  };

  return (
    <section className="gazette-card bg-white border-2 border-ink rounded-2xl p-5 sm:p-7 mb-9 shadow-brutal-md font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-ink/15">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-popYellow border-2 border-ink shadow-brutal-sm">
            <Newspaper className="h-6 w-6 text-ink" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-xl sm:text-2xl text-ink">
                Daily Gazette Newsroom
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-popPink/30 border border-ink text-[10px] font-black uppercase">
                Continuous Ingestion
              </span>
            </div>
            <p className="text-xs text-muted font-serif">
              Structured daily dispatches: The News → Why It Matters → Background → Exam Relevance → Practice MCQ.
            </p>
          </div>
        </div>

        {/* Date Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setSelectedDate("all")}
            className={`px-3 py-1 rounded-xl text-xs font-display font-extrabold border-2 border-ink transition-all ${
              selectedDate === "all"
                ? "bg-popYellow text-ink shadow-brutal-sm ring-1 ring-ink"
                : "bg-cream text-ink/70 hover:bg-white shadow-xs"
            }`}
          >
            All Updates
          </button>
          {availableDates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-3 py-1 rounded-xl text-xs font-display font-extrabold border-2 border-ink transition-all flex items-center gap-1.5 ${
                selectedDate === date
                  ? "bg-popYellow text-ink shadow-brutal-sm ring-1 ring-ink"
                  : "bg-cream text-ink/70 hover:bg-white shadow-xs"
              }`}
            >
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Articles Feed */}
      <div className="space-y-5 pt-6">
        {filteredArticles.map((art) => {
          const isExpanded = expandedArticleId === art.id;
          const chosenAnswer = selectedAnswers[art.id];

          return (
            <article
              key={art.id}
              className="p-5 rounded-2xl border-2 border-ink bg-white shadow-brutal-sm hover:shadow-brutal-md transition-shadow"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-popYellow/40 border border-ink text-[10px] font-display font-black text-ink">
                    {art.priority}
                  </span>
                  <span className="text-xs font-sans font-bold text-muted">
                    {art.category}
                  </span>
                </div>
                <span className="text-xs font-display font-bold text-ink/70">
                  {art.date}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => toggleExpand(art.id)}
                className="font-display font-black text-lg sm:text-xl text-ink leading-snug cursor-pointer hover:text-brand transition-colors mb-3"
              >
                {art.title}
              </h3>

              {/* The News brief */}
              <p className="text-sm font-serif text-ink/90 leading-relaxed mb-4">
                {art.theNews}
              </p>

              {/* Expanded Deep Dive Blueprint */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden space-y-4 pt-3 border-t-2 border-ink/10"
                  >
                    {/* Why It Matters */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border-2 border-amber-300 text-xs font-sans">
                      <strong className="block text-amber-950 font-black mb-1">
                        💡 Strategic Significance (Why It Matters)
                      </strong>
                      <p className="text-amber-900 font-serif leading-relaxed">
                        {art.whyItMatters}
                      </p>
                    </div>

                    {/* Background & Key Facts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-cream/50 border border-ink/20 text-xs font-serif">
                        <strong className="block font-sans font-black text-ink mb-1">
                          Institutional Background
                        </strong>
                        <p className="text-muted leading-relaxed">
                          {art.background}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-cream/50 border border-ink/20 text-xs font-sans">
                        <strong className="block font-black text-ink mb-1.5">
                          Key Sourced Data Points
                        </strong>
                        <ul className="list-disc pl-4 space-y-1 text-ink/85 font-medium">
                          {art.keyFacts.map((kf, i) => (
                            <li key={i}>{kf}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Exam Relevance */}
                    <div className="p-3.5 rounded-xl bg-sky-50/80 border-2 border-sky-300 text-xs font-sans">
                      <div className="flex items-center gap-1.5 font-black text-sky-950 mb-1">
                        <Target className="h-4 w-4 text-sky-700" />
                        Target Examination Blueprint
                      </div>
                      <p className="text-sky-900 font-bold mb-1">
                        {art.examRelevance.paper}
                      </p>
                      <p className="text-sky-800 text-[11px] mb-2 font-medium">
                        Focus: {art.examRelevance.focus}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {art.examRelevance.staticConcepts.map((sc) => (
                          <span
                            key={sc}
                            className="px-2 py-0.5 rounded bg-white border border-sky-300 text-[10px] font-bold text-sky-900"
                          >
                            Static Hook: {sc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Practice MCQ */}
                    <div className="p-4 rounded-xl bg-purple-50/70 border-2 border-purple-300 text-xs font-sans">
                      <div className="flex items-center gap-1.5 font-black text-purple-950 mb-2">
                        <HelpCircle className="h-4 w-4 text-purple-700" />
                        Active-Recall Practice Question
                      </div>
                      <p className="font-bold text-ink text-sm mb-3 font-serif">
                        {art.practiceQuestion.q}
                      </p>

                      <div className="space-y-1.5 mb-3">
                        {art.practiceQuestion.options.map((opt, optIdx) => {
                          const isChosen = chosenAnswer === optIdx;
                          const isCorrect =
                            optIdx === art.practiceQuestion.correctIndex;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(art.id, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                                chosenAnswer !== undefined
                                  ? isCorrect
                                    ? "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold"
                                    : isChosen
                                    ? "bg-rose-100 border-rose-400 text-rose-950"
                                    : "bg-white/60 border-ink/10 opacity-60"
                                  : "bg-white border-ink/20 hover:bg-cream"
                              }`}
                            >
                              <span className="font-bold mr-1.5">
                                ({String.fromCharCode(65 + optIdx)})
                              </span>{" "}
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {chosenAnswer !== undefined && (
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-500/40 text-[11px] font-serif text-emerald-950 leading-relaxed">
                          <strong>Explanation:</strong>{" "}
                          {art.practiceQuestion.explanation}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle expand button */}
              <div className="pt-3 border-t border-ink/10 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleExpand(art.id)}
                  className="gap-1.5 text-xs font-bold border-2 border-ink bg-cream hover:bg-white shadow-xs"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-3.5 w-3.5" /> Collapse Analysis
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3.5 w-3.5" /> Expand Why It Matters & Practice Question
                    </>
                  )}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


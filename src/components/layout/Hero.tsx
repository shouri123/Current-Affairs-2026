"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MonthId, MonthlyIssue } from "@/types";
import { availableMonths } from "@/data/monthlyIssues";
import {
  Calendar,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  BookOpenCheck,
  ArrowUpRight,
  Dices,
  Printer,
  Newspaper,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  currentMonth: MonthlyIssue;
  selectedMonth: MonthId;
  onSelectMonth: (m: MonthId) => void;
  onOpenArcade: () => void;
  onOpenRandomFact: () => void;
  totalFacts: number;
  mustKnowCount: number;
}

export function Hero({
  currentMonth,
  selectedMonth,
  onSelectMonth,
  onOpenArcade,
  onOpenRandomFact,
  totalFacts,
  mustKnowCount,
}: HeroProps) {
  const handlePrint = () => {
    window.print();
  };

  const accentFills = ["bg-popYellow/35", "bg-popCyan/25", "bg-popPink/25", "bg-popMint/35"];

  return (
    <header className="gazette-card gazette-hero bg-white p-5 sm:p-8 lg:p-9 mb-9 border-2 border-ink rounded-2xl shadow-brutal-sm">
      {/* Month Switcher Tabs Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-ink/15">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-brand" />
          <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wider text-ink">
            Select Magazine Edition:
          </span>
        </div>

        {/* 3 Monthly Issue Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {availableMonths.map((m) => {
            const isActive = selectedMonth === m.id;
            return (
              <motion.button
                key={m.id}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelectMonth(m.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-display font-black border-2 border-ink transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-popYellow text-ink shadow-brutal-sm ring-1 ring-ink"
                    : "bg-cream text-ink/70 hover:text-ink hover:bg-white shadow-xs"
                }`}
              >
                <span>{m.id === "july-2026" ? "🌊" : m.id === "august-2026" ? "🇮🇳" : "⚡"}</span>
                <span>{m.name}</span>
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Publication Details & Sourced Benchmarks */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-extrabold tracking-[0.16em] text-ink uppercase mb-4 px-3 py-1.5 border-2 border-ink bg-popYellow shadow-brutal-sm rounded-md">
            <Newspaper className="h-3.5 w-3.5" />
            IAS Academia of Success <span className="opacity-50">/</span> {currentMonth.issueNo} <span className="opacity-50">/</span> {totalFacts} Facts
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.06] tracking-tight mb-4 max-w-3xl">
            {currentMonth.monthName} <span className="relative z-0 inline-block">Current Affairs<span className="absolute left-0 -bottom-1 h-2 w-full bg-popPink/70 -z-10" /></span> Gazette
          </h1>

          <p className="text-sm sm:text-base text-ink/80 font-serif leading-relaxed mb-6 max-w-xl">
            {currentMonth.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 text-[11px] font-sans font-bold">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popMint/70">
              <Sparkles className="h-3.5 w-3.5" /> Exam-focused intelligence
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popCyan/60">
              <TrendingUp className="h-3.5 w-3.5" /> {totalFacts} curated entries
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popPurple/30">
              <ShieldCheck className="h-3.5 w-3.5" /> {mustKnowCount} priority facts
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6 font-sans">
            <Button
              variant="default"
              size="default"
              onClick={onOpenArcade}
              className="gap-2 font-bold border-2 border-ink shadow-brutal-md hover:-translate-y-0.5 transition-transform"
            >
              <BookOpenCheck className="h-4 w-4" /> Examine via Quiz <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={onOpenRandomFact}
              className="gap-2 font-bold border-2 border-ink shadow-brutal-sm bg-popPink/20 hover:bg-popPink/35"
            >
              <Dices className="h-4 w-4" /> Explore a Fact
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={handlePrint}
              className="gap-2 font-bold border-2 border-ink shadow-brutal-sm hover:bg-cream hidden sm:inline-flex"
            >
              <Printer className="h-4 w-4" /> Print Summary
            </Button>
          </div>

          {/* Sourced Macroeconomic Indicators */}
          <div className="pt-4 border-t-2 border-ink/10">
            <div className="text-xs font-sans font-extrabold text-muted uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Verified Key Economic Indicators ({currentMonth.monthName})</span>
              <span className="text-[11px] text-amber-800 font-black">{mustKnowCount} Must-Know Events</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
              {currentMonth.macroIndicators.map((ind, i) => (
                <div
                  key={i}
                  className={`metric-tile p-2.5 rounded-lg border border-ink/10 ${accentFills[i % accentFills.length]}`}
                >
                  <div className="text-xs text-muted font-medium truncate">{ind.label}</div>
                  <div className="font-bold text-base sm:text-lg text-ink my-0.5">{ind.value}</div>
                  <div className="text-[10px] text-muted truncate">{ind.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Publication Photograph or Visual Dossier Cover Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          {selectedMonth === "september-2026" ? (
            <div className="relative w-full max-w-md rounded-xl overflow-hidden border-2 border-ink shadow-brutal-lg bg-popPurple/20 transition-transform duration-300 hover:-rotate-1 hover:translate-x-1 hover:-translate-y-1">
              <Image
                src="/images/september-2026-gazette.png"
                alt="September 2026 Current Affairs Gazette publication cover and editorial dossier"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="p-3 border-t border-ink/15 bg-white text-xs font-sans text-muted flex items-center justify-between font-bold">
                <span>Print Edition: 30 Pages, 11 Subject Areas</span>
                <span className="text-ink">Circulation: All-India</span>
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-md rounded-2xl border-3 border-ink shadow-brutal-md bg-gradient-to-br from-cream via-amber-50/50 to-sky-50/60 p-6 flex flex-col justify-between min-h-[320px]">
              {/* Decorative Corner Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-popYellow border-2 border-ink text-xs font-display font-black shadow-brutal-sm">
                  {currentMonth.shortMonth} EDITION
                </span>
                <span className="text-xs font-sans font-black text-ink/70">
                  {currentMonth.issueNo}
                </span>
              </div>

              {/* Dossier Centerpiece Emblem */}
              <div className="my-6 text-center">
                <div className="inline-flex p-3 rounded-2xl bg-white border-2 border-ink shadow-brutal-sm mb-3 text-3xl">
                  {selectedMonth === "july-2026" ? "🌊" : "🇮🇳"}
                </div>
                <h3 className="font-display font-extrabold text-2xl text-ink">
                  {currentMonth.monthName}
                </h3>
                <p className="text-xs font-sans font-bold text-muted mt-1">
                  Department of General Studies • UEM Kolkata
                </p>
                <div className="inline-block mt-3 px-3 py-1 rounded-lg bg-white border border-ink text-xs font-serif text-ink/80 shadow-xs">
                  Official One-Liner Dossier & Revision Deck
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t-2 border-ink/15 flex items-center justify-between text-xs font-sans font-bold text-muted">
                <span>11 Core Syllabus Areas</span>
                <span className="text-ink font-black">{totalFacts} Verified Facts</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

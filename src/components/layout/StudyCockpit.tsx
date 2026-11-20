"use client";

import React from "react";
import { ExamProfileId, EXAM_PROFILES } from "@/types/examProfiles";
import { SRSStats } from "@/lib/spacedRepetition";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Flame,
  Brain,
  Radar,
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

interface StudyCockpitProps {
  selectedExam: ExamProfileId;
  onSelectExam: (exam: ExamProfileId) => void;
  srsStats: SRSStats;
  onOpenDueCards: () => void;
  onOpenPYQRadar: () => void;
  onOpenDaily: () => void;
  totalFactsCount: number;
  masteredCount: number;
}

export function StudyCockpit({
  selectedExam,
  onSelectExam,
  srsStats,
  onOpenDueCards,
  onOpenPYQRadar,
  onOpenDaily,
  totalFactsCount,
  masteredCount,
}: StudyCockpitProps) {
  const currentProfile = EXAM_PROFILES[selectedExam];
  const syllabusProgress = Math.round((masteredCount / Math.max(1, totalFactsCount)) * 100);

  return (
    <section className="gazette-card bg-white border-2 border-ink rounded-2xl p-4 sm:p-6 mb-8 shadow-brutal-sm font-sans">
      {/* Top Header: Cockpit Title & Exam Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-ink/15">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-popYellow border-2 border-ink shadow-brutal-sm">
            <Compass className="h-5 w-5 text-ink" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-base sm:text-lg text-ink">
                Personalized Study Cockpit
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                Active FSRS Engine
              </span>
            </div>
            <p className="text-xs text-muted font-serif">
              Adaptive spaced-repetition schedules, target examination alignment & PYQ radar.
            </p>
          </div>
        </div>

        {/* Exam Profile Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-display font-black text-ink uppercase tracking-wider mr-1 hidden sm:inline">
            Target Exam:
          </span>
          {(Object.keys(EXAM_PROFILES) as ExamProfileId[]).map((id) => {
            const profile = EXAM_PROFILES[id];
            const isSelected = selectedExam === id;
            return (
              <motion.button
                key={id}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelectExam(id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-black border-2 border-ink transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-popYellow text-ink shadow-brutal-sm ring-1 ring-ink"
                    : "bg-cream text-ink/70 hover:text-ink hover:bg-white shadow-xs"
                }`}
              >
                <span>{profile.badge}</span>
                <span className="hidden md:inline">{profile.shortName}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Cockpit Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4">
        {/* Metric 1: Due Today for Spaced Repetition */}
        <div
          onClick={onOpenDueCards}
          className="p-3.5 rounded-xl border-2 border-ink bg-amber-50/70 hover:bg-amber-100/80 transition-colors cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between text-muted text-xs font-bold mb-1">
            <span className="flex items-center gap-1.5 text-amber-900">
              <Brain className="h-4 w-4 text-amber-700" />
              SRS Due Today
            </span>
            <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <div className="font-display font-black text-2xl text-ink">
            {srsStats.dueToday}{" "}
            <span className="text-xs font-sans font-bold text-muted">cards</span>
          </div>
          <div className="text-[11px] text-amber-800 font-semibold mt-1">
            {srsStats.overdue > 0 ? (
              <span className="text-rose-700 font-black">
                {srsStats.overdue} overdue reviews
              </span>
            ) : (
              "Memory schedule on track"
            )}
          </div>
        </div>

        {/* Metric 2: Study Consistency Streak */}
        <div className="p-3.5 rounded-xl border-2 border-ink bg-rose-50/70 shadow-xs">
          <div className="flex items-center justify-between text-muted text-xs font-bold mb-1">
            <span className="flex items-center gap-1.5 text-rose-900">
              <Flame className="h-4 w-4 text-rose-600" />
              Study Streak
            </span>
            <span className="text-[10px] bg-rose-200/70 text-rose-800 px-1.5 py-0.5 rounded font-black">
              DAILY
            </span>
          </div>
          <div className="font-display font-black text-2xl text-ink">
            {srsStats.streakDays}{" "}
            <span className="text-xs font-sans font-bold text-muted">Days</span>
          </div>
          <div className="text-[11px] text-rose-800 font-semibold mt-1">
            Retention Rate: <span className="font-black">{srsStats.retentionRate}%</span>
          </div>
        </div>

        {/* Metric 3: Target Exam Syllabus Mastery */}
        <div className="p-3.5 rounded-xl border-2 border-ink bg-sky-50/70 shadow-xs">
          <div className="flex items-center justify-between text-muted text-xs font-bold mb-1">
            <span className="flex items-center gap-1.5 text-sky-900">
              <Target className="h-4 w-4 text-sky-700" />
              Syllabus Coverage
            </span>
            <span className="text-[10px] text-sky-800 font-extrabold">
              {syllabusProgress}%
            </span>
          </div>
          <div className="font-display font-black text-2xl text-ink">
            {masteredCount} / {totalFactsCount}
          </div>
          <div className="w-full h-1.5 bg-sky-200 rounded-full mt-2 overflow-hidden border border-sky-400">
            <div
              className="h-full bg-sky-600 rounded-full transition-all duration-300"
              style={{ width: `${syllabusProgress}%` }}
            />
          </div>
        </div>

        {/* Metric 4: PYQ Radar Launcher */}
        <div
          onClick={onOpenPYQRadar}
          className="p-3.5 rounded-xl border-2 border-ink bg-purple-50/70 hover:bg-purple-100/80 transition-colors cursor-pointer shadow-xs group"
        >
          <div className="flex items-center justify-between text-muted text-xs font-bold mb-1">
            <span className="flex items-center gap-1.5 text-purple-900">
              <Radar className="h-4 w-4 text-purple-700" />
              PYQ Radar
            </span>
            <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <div className="font-display font-black text-sm text-purple-950 truncate">
            {currentProfile.shortName} Focus
          </div>
          <div className="text-[11px] text-purple-800 font-semibold mt-1 truncate">
            UPSC, Banking & SSC past papers
          </div>
        </div>
      </div>

      {/* Exam Mode Profile Banner */}
      <div className="mt-3.5 pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-ink/80">
          <span className="font-display font-extrabold text-ink">
            {currentProfile.badge} Mode Active:
          </span>
          <span className="text-muted hidden sm:inline">
            {currentProfile.description}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenPYQRadar}
            className="h-7 text-xs font-bold border-2 border-ink bg-cream hover:bg-white shadow-xs"
          >
            <Radar className="h-3.5 w-3.5 mr-1" />
            Explore PYQs
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onOpenDaily}
            className="h-7 text-xs font-bold border-2 border-ink shadow-brutal-sm"
          >
            <Calendar className="h-3.5 w-3.5 mr-1" />
            Daily 7 Facts
          </Button>
        </div>
      </div>
    </section>
  );
}


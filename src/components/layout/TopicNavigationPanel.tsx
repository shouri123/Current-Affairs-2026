"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle2, Bookmark, BarChart2, Layers } from "lucide-react";
import { MagazineSection } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface TopicNavigationPanelProps {
  sections: MagazineSection[];
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  masteredIds: string[];
  onScrollToSection?: (sectionId: string) => void;
}

export function TopicNavigationPanel({
  sections,
  activeCategory,
  onSelectCategory,
  masteredIds,
  onScrollToSection,
}: TopicNavigationPanelProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const getSectionStats = (sec: MagazineSection) => {
    const total = sec.items.length;
    const mastered = sec.items.filter((_, idx) =>
      masteredIds.includes(`${sec.id}-${idx}`)
    ).length;
    const mustKnow = sec.items.filter((i) => i.hot).length;
    const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return { total, mastered, mustKnow, pct };
  };

  const handleTopicClick = (sectionId: string) => {
    onSelectCategory(sectionId === activeCategory ? null : sectionId);
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    }
    setIsOpenMobile(false);
  };

  const totalAllFacts = sections.reduce((acc, s) => acc + s.items.length, 0);
  const totalMasteredAll = masteredIds.length;
  const overallMastery =
    totalAllFacts > 0 ? Math.round((totalMasteredAll / totalAllFacts) * 100) : 0;

  return (
    <aside className="w-full bg-white border border-ink/15 rounded-xl p-4 mb-6 shadow-subtle no-print">
      {/* Header with toggle for mobile */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-brand" />
          <h2 className="font-display font-bold text-base sm:text-lg text-ink">
            Subject Navigation & Syllabus Coverage
          </h2>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-muted border border-ink/15">
            {sections.length} Subjects
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-sans text-muted hidden sm:inline">
            Overall: <strong className="text-ink">{overallMastery}%</strong> ({totalMasteredAll}/{totalAllFacts})
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpenMobile((prev) => !prev)}
            className="sm:hidden text-xs py-1 h-7"
          >
            {isOpenMobile ? "Hide Topics" : "Show All Topics"}
          </Button>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mt-2.5 mb-3.5">
        <Progress value={overallMastery} className="h-2 bg-cream border border-ink/15" />
      </div>

      {/* Topics Grid - Responsive */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 ${
          isOpenMobile ? "block" : "hidden sm:grid"
        }`}
      >
        <button
          onClick={() => {
            onSelectCategory(null);
            setIsOpenMobile(false);
          }}
          className={`text-left p-2.5 rounded-lg border transition-all text-xs font-sans ${
            activeCategory === null
              ? "border-brand bg-sky-50 text-brand font-semibold shadow-subtle"
              : "border-ink/15 hover:border-ink/30 bg-cream/50 text-ink"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">All 11 Subjects</span>
            <span className="text-muted">{totalAllFacts} facts</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted mt-1">
            <span>{totalMasteredAll} mastered</span>
            <span>{overallMastery}%</span>
          </div>
        </button>

        {sections.map((sec) => {
          const { total, mastered, mustKnow, pct } = getSectionStats(sec);
          const isSelected = activeCategory === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => handleTopicClick(sec.id)}
              className={`text-left p-2.5 rounded-lg border transition-all text-xs font-sans ${
                isSelected
                  ? "border-brand bg-sky-50 text-ink font-semibold shadow-subtle ring-1 ring-brand"
                  : "border-ink/15 hover:border-ink/30 bg-white text-ink"
              }`}
            >
              <div className="flex items-start justify-between gap-1">
                <span className="font-semibold truncate max-w-[170px]" title={sec.title}>
                  {sec.title}
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-1 py-0.2 rounded font-bold shrink-0">
                  {mustKnow} MK
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted mt-1.5">
                <span>
                  {mastered}/{total} studied
                </span>
                <span className="font-medium text-ink">{pct}%</span>
              </div>

              <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-brand h-full rounded-full transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}


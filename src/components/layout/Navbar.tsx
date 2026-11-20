"use client";

import React, { useRef, useState } from "react";
import {
  Search,
  Volume2,
  VolumeX,
  Bookmark,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Calendar,
  Gamepad2,
  Star,
  Printer,
  SlidersHorizontal,
  Newspaper,
  BookOpenCheck,
  Radar,
  Bot,
  FileText,
  Network,
} from "lucide-react";
import { magazineSections } from "@/data/magazineSections";
import { ImportanceLevel, VerificationStatus, MonthId, MagazineSection } from "@/types";
import { availableMonths } from "@/data/monthlyIssues";
import { motion, AnimatePresence } from "framer-motion";
import { sectionIconMap, defaultSectionIcon } from "@/lib/sectionIcons";

interface NavbarProps {
  selectedMonth: MonthId;
  onSelectMonth: (id: MonthId) => void;
  sections?: MagazineSection[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onlyHot: boolean;
  onToggleOnlyHot: () => void;
  importanceFilter: ImportanceLevel | "all";
  onImportanceFilterChange: (lvl: ImportanceLevel | "all") => void;
  contentTypeFilter: "all" | "national" | "international";
  onContentTypeFilterChange: (type: "all" | "national" | "international") => void;
  verificationFilter: VerificationStatus | "all";
  onVerificationFilterChange: (status: VerificationStatus | "all") => void;
  onResetAllFilters: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  pinCount: number;
  onOpenPinDrawer: () => void;
  onOpenArcade: () => void;
  onOpenDailyRevision: () => void;
  onOpenPYQRadar?: () => void;
  onOpenMainsLab?: () => void;
  onOpenAskGazette?: () => void;
  onOpenKnowledgeAtlas?: () => void;
  onOpenProgressDashboard: () => void;
  masteredCount: number;
  totalFactsCount: number;
  matchingFactsCount: number;
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const sectionShortTitleMap: Record<string, string> = {
  banking: "Banking",
  mous: "MoUs",
  days: "Important Days",
  appointments: "Key Appointments",
  national: "National News",
  international: "International News",
  defence: "Defence Exercises",
  awards: "Honours, Awards",
  books: "Books",
  sports: "Sports",
  travel: "Aviation & Travel",
};

export function Navbar({
  selectedMonth,
  onSelectMonth,
  sections = magazineSections,
  searchQuery,
  onSearchChange,
  onlyHot,
  onToggleOnlyHot,
  importanceFilter,
  onImportanceFilterChange,
  contentTypeFilter,
  onContentTypeFilterChange,
  verificationFilter,
  onVerificationFilterChange,
  onResetAllFilters,
  soundEnabled,
  onToggleSound,
  pinCount,
  onOpenPinDrawer,
  onOpenArcade,
  onOpenDailyRevision,
  onOpenPYQRadar,
  onOpenMainsLab,
  onOpenAskGazette,
  onOpenKnowledgeAtlas,
  onOpenProgressDashboard,
  masteredCount,
  totalFactsCount,
  matchingFactsCount,
  activeCategory,
  onSelectCategory,
}: NavbarProps) {
  const [showFiltersMenu, setShowFiltersMenu] = useState(false);
  const masteryPercentage =
    totalFactsCount > 0 ? Math.round((masteredCount / totalFactsCount) * 100) : 0;
  const pillsScrollRef = useRef<HTMLDivElement>(null);

  const scrollPills = (direction: "left" | "right") => {
    if (pillsScrollRef.current) {
      const offset = direction === "left" ? -260 : 260;
      pillsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const currentMonthInfo =
    availableMonths.find((m) => m.id === selectedMonth) || availableMonths[2];

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    onlyHot ||
    importanceFilter !== "all" ||
    contentTypeFilter !== "all" ||
    verificationFilter !== "all" ||
    activeCategory !== null;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 sm:border-b-4 border-ink px-3 sm:px-6 py-2 sm:py-3 no-print shadow-sm">
      <div className="max-w-[1536px] w-full mx-auto space-y-2">
        {/* ROW 1: Brand Logo, Month Tabs, Global Search & Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          {/* Brand Logo & Quick Month Switcher Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group cursor-pointer no-underline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="icon-stamp h-10 w-10 rounded-xl bg-popYellow text-ink group-hover:-rotate-6 transition-transform">
                <Newspaper className="h-5 w-5 stroke-[2.4]" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl text-ink tracking-tight">
                  Current Affairs
                </span>
                <span className="bg-popPink text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md border-2 border-ink shadow-brutal-sm">
                  {currentMonthInfo.badge}
                </span>
              </div>
            </motion.a>

            {/* Quick Month Switcher Tabs */}
            <div className="flex items-center gap-1 bg-cream border-2 border-ink rounded-xl p-0.5 shadow-brutal-sm">
              {availableMonths.map((m) => {
                const isActive = selectedMonth === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMonth(m.id)}
                    title={`Switch to ${m.name}`}
                    className={`px-2 py-0.5 rounded-lg text-xs font-display font-black transition-all ${
                      isActive
                        ? "bg-popYellow text-ink border-2 border-ink shadow-brutal-sm"
                        : "text-ink/70 hover:text-ink hover:bg-white"
                    }`}
                  >
                    {m.short}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search GDP, BRICS, ISRO, Appointments..."
              className="w-full bg-cream border-2 border-ink rounded-xl pl-9 pr-8 py-1.5 text-xs sm:text-sm font-bold text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-popCyan shadow-brutal-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md bg-popCoral text-white border border-ink hover:scale-110 transition-transform"
                title="Clear Search"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Action Buttons: Sound, Must-Know, Quiz, Pinned, Daily, Progress */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap font-sans">
            {/* SFX Toggle */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleSound}
              title={soundEnabled ? "Mute audio cues" : "Enable audio cues"}
              className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-cream font-display font-bold text-xs flex items-center gap-1 shadow-brutal-sm hover:bg-zinc-100 transition-colors"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-ink" />
                  <span className="hidden sm:inline">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5 text-ink/50" />
                  <span className="hidden sm:inline text-ink/50">SFX OFF</span>
                </>
              )}
            </motion.button>

            {/* Must-Know Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleOnlyHot}
              title="Filter Must-Know Events"
              className={`px-3 py-1.5 rounded-xl border-2 border-ink font-display font-extrabold text-xs flex items-center gap-1 shadow-brutal-sm transition-colors ${
                onlyHot
                  ? "bg-popYellow text-ink ring-2 ring-ink"
                  : "bg-white text-ink hover:bg-yellow-50"
              }`}
            >
              <Star
                className={`h-3.5 w-3.5 ${
                  onlyHot ? "fill-ink text-ink" : "text-amber-500"
                }`}
              />
              <span>Must-Know</span>
            </motion.button>

            {/* Quiz Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenArcade}
              title="Launch Revision Quiz"
              className="px-3 py-1.5 rounded-xl border-2 border-ink bg-popPink text-white hover:bg-pink-400 font-display font-extrabold text-xs flex items-center gap-1 shadow-brutal-sm transition-colors"
            >
              <Gamepad2 className="h-3.5 w-3.5" />
              <span>Quiz</span>
            </motion.button>

            {/* Pinned Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenPinDrawer}
              title="View Pinned Facts"
              className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-popCyan text-ink hover:bg-sky-300 font-display font-extrabold text-xs flex items-center gap-1.5 shadow-brutal-sm transition-colors"
            >
              <Bookmark className="h-3.5 w-3.5 fill-ink" />
              <span className="hidden sm:inline">Pinned</span>
              <span className="h-4 min-w-[16px] px-1 rounded-full bg-popYellow border border-ink text-[10px] font-black flex items-center justify-center">
                {pinCount}
              </span>
            </motion.button>

            {/* PYQ Radar Button */}
            {onOpenPYQRadar && (
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenPYQRadar}
                title="PYQ Radar: Past Examination Questions"
                className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-purple-100 text-purple-950 hover:bg-purple-200 font-display font-extrabold text-xs hidden sm:flex items-center gap-1 shadow-brutal-sm transition-colors"
              >
                <Radar className="h-3.5 w-3.5 text-purple-700" />
                <span>PYQ</span>
              </motion.button>
            )}

            {/* Daily Revision Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDailyRevision}
              title="Daily Revision (7 Facts + 5 Qs)"
              className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-sky-50 text-ink hover:bg-sky-100 font-display font-bold text-xs hidden md:flex items-center gap-1 shadow-brutal-sm transition-colors"
            >
              <Calendar className="h-3.5 w-3.5 text-brand" />
              <span>Daily</span>
            </motion.button>

            {/* Mains Answer Lab Button */}
            {onOpenMainsLab && (
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenMainsLab}
                title="Mains Answer Lab: Descriptive Evaluation"
                className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-pink-100 text-pink-950 hover:bg-pink-200 font-display font-extrabold text-xs hidden lg:flex items-center gap-1 shadow-brutal-sm transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-pink-700" />
                <span>Mains</span>
              </motion.button>
            )}

            {/* Ask Gazette AI Assistant Button */}
            {onOpenAskGazette && (
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenAskGazette}
                title="Ask Gazette: AI Study Assistant"
                className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-emerald-100 text-emerald-950 hover:bg-emerald-200 font-display font-extrabold text-xs hidden lg:flex items-center gap-1 shadow-brutal-sm transition-colors"
              >
                <Bot className="h-3.5 w-3.5 text-emerald-700" />
                <span>Ask AI</span>
              </motion.button>
            )}

            {/* Progress Dashboard Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenProgressDashboard}
              title="Personal Study Progress & Analytics"
              className="px-2.5 py-1.5 rounded-xl border-2 border-ink bg-emerald-50 text-ink hover:bg-emerald-100 font-display font-bold text-xs hidden lg:flex items-center gap-1 shadow-brutal-sm transition-colors"
            >
              <Award className="h-3.5 w-3.5 text-emerald-600" />
              <span>{masteryPercentage}%</span>
            </motion.button>

            {/* Print Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.print()}
              title="Print Clean Summary (PDF)"
              className="p-1.5 rounded-xl border-2 border-ink bg-white text-ink hover:bg-zinc-100 font-display font-bold text-xs hidden xl:flex items-center shadow-brutal-sm transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
            </motion.button>

            {/* Filter Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFiltersMenu((prev) => !prev)}
              title="Toggle Advanced Smart Filters"
              className={`p-1.5 rounded-xl border-2 border-ink font-display font-bold text-xs flex items-center shadow-brutal-sm transition-colors ${
                showFiltersMenu || (hasActiveFilters && !onlyHot)
                  ? "bg-popYellow text-ink"
                  : "bg-white text-ink hover:bg-zinc-100"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>

        {/* ROW 2: Live Study Mastery Progress Bar */}
        <div className="max-w-[1536px] w-full mx-auto flex items-center gap-3">
          <div className="flex-1 h-3 bg-cream border-2 border-ink rounded-full overflow-hidden shadow-brutal-sm">
            <div
              className="h-full bg-gradient-to-r from-popMint via-popYellow to-popPink transition-all duration-300"
              style={{ width: `${masteryPercentage}%` }}
            />
          </div>
          <span className="text-[11px] font-extrabold text-ink shrink-0 font-display">
            {masteredCount} / {totalFactsCount} Mastered ({masteryPercentage}%)
          </span>
        </div>

        {/* ROW 3: Category Jump Pills Navigation */}
        <div className="max-w-[1536px] w-full mx-auto relative flex items-center font-sans pt-0.5">
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollPills("left")}
            className="hidden sm:flex shrink-0 h-7 w-7 rounded-lg bg-white border-2 border-ink items-center justify-center mr-1.5 shadow-brutal-sm hover:bg-popYellow transition-colors z-10"
            title="Scroll Left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Horizontal Scrollable Pills */}
          <div
            ref={pillsScrollRef}
            className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth"
          >
            {/* All Sections Pill */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(null)}
              className={`shrink-0 px-3 py-1 rounded-xl text-xs font-display font-extrabold border-2 border-ink transition-all flex items-center gap-1.5 shadow-brutal-sm ${
                activeCategory === null
                  ? "bg-white text-ink border-2 border-ink ring-1 ring-ink"
                  : "bg-white/80 text-ink hover:bg-cream"
              }`}
            >
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
              <span>All Sections</span>
            </motion.button>

            {/* Section Category Pills */}
            {sections.map((sec) => {
              const SectionIcon = sectionIconMap[sec.id] || defaultSectionIcon;
              const shortTitle =
                sectionShortTitleMap[sec.id] || sec.title.split("&")[0].trim();
              const isActive = activeCategory === sec.id;

              return (
                <motion.button
                  key={sec.id}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onSelectCategory(sec.id);
                    const el = document.getElementById(`section-${sec.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`shrink-0 px-3 py-1 rounded-xl text-xs font-display font-extrabold border-2 border-ink transition-all flex items-center gap-1.5 shadow-brutal-sm ${
                    isActive
                      ? "bg-popYellow text-ink ring-1 ring-ink"
                      : "bg-white text-ink hover:bg-cream"
                  }`}
                >
                  <SectionIcon className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden="true" />
                  <span>{shortTitle}</span>
                </motion.button>
              );
            })}

            {/* Revision Deck Pill */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById("section-quiz");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="shrink-0 px-3 py-1 rounded-xl text-xs font-display font-extrabold border-2 border-ink bg-popPink text-white hover:bg-pink-400 transition-all flex items-center gap-1.5 shadow-brutal-sm"
            >
              <BookOpenCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>39 Q&amp;A Quiz</span>
            </motion.button>
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollPills("right")}
            className="hidden sm:flex shrink-0 h-7 w-7 rounded-lg bg-white border-2 border-ink items-center justify-center ml-1.5 shadow-brutal-sm hover:bg-popYellow transition-colors z-10"
            title="Scroll Right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Optional Collapsible Smart Filter Strip */}
        <AnimatePresence>
          {showFiltersMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pt-1 border-t border-ink/15"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans py-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-ink/70">Filters:</span>

                  {/* Importance filter */}
                  <select
                    value={importanceFilter}
                    onChange={(e) =>
                      onImportanceFilterChange(e.target.value as any)
                    }
                    className="bg-cream border-2 border-ink rounded-lg px-2 py-0.5 text-xs font-semibold text-ink shadow-brutal-sm focus:outline-none"
                  >
                    <option value="all">Importance: All</option>
                    <option value="must-know">Must-Know (High Yield)</option>
                    <option value="important">Important</option>
                  </select>

                  {/* Region filter */}
                  <select
                    value={contentTypeFilter}
                    onChange={(e) =>
                      onContentTypeFilterChange(e.target.value as any)
                    }
                    className="bg-cream border-2 border-ink rounded-lg px-2 py-0.5 text-xs font-semibold text-ink shadow-brutal-sm focus:outline-none"
                  >
                    <option value="all">Region: All</option>
                    <option value="national">National</option>
                    <option value="international">International</option>
                  </select>

                  {/* Verification filter */}
                  <select
                    value={verificationFilter}
                    onChange={(e) =>
                      onVerificationFilterChange(e.target.value as any)
                    }
                    className="bg-cream border-2 border-ink rounded-lg px-2 py-0.5 text-xs font-semibold text-ink shadow-brutal-sm focus:outline-none"
                  >
                    <option value="all">Status: All</option>
                    <option value="verified">Verified Official</option>
                    <option value="needs-review">Needs Review</option>
                  </select>

                  {hasActiveFilters && (
                    <button
                      onClick={onResetAllFilters}
                      className="px-2 py-0.5 rounded-lg border border-ink/30 text-ink/70 hover:text-ink hover:bg-zinc-100 flex items-center gap-1 font-semibold text-[11px]"
                    >
                      <X className="h-3 w-3" />
                      Clear Filters
                    </button>
                  )}
                </div>

                <div className="text-muted text-[11px] font-bold">
                  Showing <span className="text-ink">{matchingFactsCount}</span> of {totalFactsCount} facts
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

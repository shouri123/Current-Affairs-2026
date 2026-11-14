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
  Filter,
  Layers,
  Award,
  Calendar,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { magazineSections } from "@/data/magazineSections";
import { ImportanceLevel, VerificationStatus } from "@/types";

interface NavbarProps {
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
  onOpenProgressDashboard: () => void;
  masteredCount: number;
  totalFactsCount: number;
  matchingFactsCount: number;
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function Navbar({
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
      const offset = direction === "left" ? -240 : 240;
      pillsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    onlyHot ||
    importanceFilter !== "all" ||
    contentTypeFilter !== "all" ||
    verificationFilter !== "all" ||
    activeCategory !== null;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ink/15 px-3 sm:px-6 py-2.5 no-print">
      <div className="max-w-[1536px] w-full mx-auto space-y-2">
        {/* Row 1: Brand Logo, Global Search & Primary Action Modules */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Brand - Crisp typography */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-baseline gap-2 cursor-pointer no-underline"
            >
              <span className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight">
                Current Affairs Gazette
              </span>
              <span className="text-xs font-sans font-semibold text-muted">
                September 2026
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search GDP, BRICS, UPI, appointments, dates..."
              className="w-full bg-cream border border-ink/20 rounded-md pl-8 pr-7 py-1.5 text-xs sm:text-sm font-sans text-ink placeholder:text-muted focus:outline-none focus:border-brand"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-muted hover:text-ink"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Action Modules */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-sans flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenDailyRevision}
              className="text-xs gap-1.5 border-brand/40 bg-sky-50/50 hover:bg-sky-100/50 text-ink"
            >
              <Calendar className="h-3.5 w-3.5 text-brand" />
              <span className="hidden sm:inline">Daily Revision</span>
              <span className="sm:hidden">Daily</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onOpenArcade}
              className="text-xs gap-1.5 border-popPink/40 bg-pink-50/50 hover:bg-pink-100/50 text-ink"
            >
              <BookOpen className="h-3.5 w-3.5 text-popPink" />
              <span>Quiz</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onOpenProgressDashboard}
              className="text-xs gap-1.5"
            >
              <Award className="h-3.5 w-3.5 text-emerald-600" />
              <span className="hidden md:inline">Progress ({masteryPercentage}%)</span>
              <span className="md:hidden">{masteryPercentage}%</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onOpenPinDrawer}
              className="text-xs gap-1.5"
            >
              <Bookmark className="h-3.5 w-3.5 fill-brand text-brand" />
              <span className="font-semibold">{pinCount}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onToggleSound}
              title={soundEnabled ? "Mute audio cues" : "Enable audio cues"}
              className="text-xs px-2"
            >
              {soundEnabled ? (
                <Volume2 className="h-3.5 w-3.5 text-muted" />
              ) : (
                <VolumeX className="h-3.5 w-3.5 text-zinc-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Row 2: Smart Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-ink/10 text-xs font-sans">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Button
              variant={onlyHot ? "yellow" : "outline"}
              size="sm"
              onClick={onToggleOnlyHot}
              className="text-xs py-1 h-7"
            >
              Must-Know Only
            </Button>

            {/* Importance filter */}
            <select
              value={importanceFilter}
              onChange={(e) => onImportanceFilterChange(e.target.value as any)}
              className="bg-cream border border-ink/20 rounded px-2 py-1 text-xs text-ink focus:outline-none focus:border-brand"
            >
              <option value="all">Importance: All</option>
              <option value="must-know">Must-Know (High)</option>
              <option value="important">Important</option>
            </select>

            {/* Content Type filter */}
            <select
              value={contentTypeFilter}
              onChange={(e) => onContentTypeFilterChange(e.target.value as any)}
              className="bg-cream border border-ink/20 rounded px-2 py-1 text-xs text-ink focus:outline-none focus:border-brand"
            >
              <option value="all">Region: All</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>

            {/* Verification Status filter */}
            <select
              value={verificationFilter}
              onChange={(e) => onVerificationFilterChange(e.target.value as any)}
              className="bg-cream border border-ink/20 rounded px-2 py-1 text-xs text-ink focus:outline-none focus:border-brand"
            >
              <option value="all">Status: All</option>
              <option value="verified">Verified Official</option>
              <option value="needs-review">Needs Review</option>
            </select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onResetAllFilters}
                className="text-xs h-7 py-0 text-muted hover:text-ink gap-1"
              >
                <X className="h-3 w-3" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="text-muted text-[11px] font-medium">
            Showing <strong className="text-ink">{matchingFactsCount}</strong> of {totalFactsCount} facts
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import React, { useRef } from "react";
import { Search, Volume2, VolumeX, Bookmark, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { magazineSections } from "@/data/magazineSections";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onlyHot: boolean;
  onToggleOnlyHot: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  pinCount: number;
  onOpenPinDrawer: () => void;
  onOpenArcade: () => void;
  masteredCount: number;
  totalFactsCount: number;
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function Navbar({
  searchQuery,
  onSearchChange,
  onlyHot,
  onToggleOnlyHot,
  soundEnabled,
  onToggleSound,
  pinCount,
  onOpenPinDrawer,
  onOpenArcade,
  masteredCount,
  totalFactsCount,
  activeCategory,
  onSelectCategory,
}: NavbarProps) {
  const masteryPercentage =
    totalFactsCount > 0 ? Math.round((masteredCount / totalFactsCount) * 100) : 0;
  const pillsScrollRef = useRef<HTMLDivElement>(null);

  const scrollPills = (direction: "left" | "right") => {
    if (pillsScrollRef.current) {
      const offset = direction === "left" ? -240 : 240;
      pillsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ink/15 px-4 sm:px-6 py-2.5 no-print">
      <div className="max-w-[1536px] w-full mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand - No emoji */}
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
            placeholder="Search GDP, BRICS, UPI, appointments..."
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

        {/* Action Controls - Plain buttons without tiles */}
        <div className="flex items-center gap-2 font-sans">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleSound}
            title={soundEnabled ? "Mute audio cues" : "Enable audio cues"}
            className="gap-1 text-xs"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Audio</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5 text-muted" />
                <span className="hidden sm:inline text-muted">Muted</span>
              </>
            )}
          </Button>

          <Button
            variant={onlyHot ? "yellow" : "outline"}
            size="sm"
            onClick={onToggleOnlyHot}
            className="text-xs"
          >
            <span>Must-Know</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onOpenArcade}
            className="text-xs"
          >
            <span>Quiz</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onOpenPinDrawer}
            className="gap-1.5 text-xs"
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>Pinned</span>
            <Badge variant="default" className="h-4 px-1 text-[10px]">
              {pinCount}
            </Badge>
          </Button>
        </div>
      </div>

      {/* Mastery Progress Bar */}
      <div className="max-w-[1536px] w-full mx-auto mt-2 flex items-center gap-3 font-sans">
        <Progress value={masteryPercentage} className="h-1.5 flex-1" />
        <span className="text-[11px] font-medium text-muted shrink-0">
          {masteredCount} of {totalFactsCount} recorded ({masteryPercentage}%)
        </span>
      </div>

      {/* Category Navigation - No emoji */}
      <div className="max-w-[1536px] w-full mx-auto mt-2 relative flex items-center font-sans">
        <button
          onClick={() => scrollPills("left")}
          className="hidden sm:flex shrink-0 h-6 w-6 rounded border border-ink/20 bg-white items-center justify-center mr-1 text-muted hover:text-ink hover:bg-zinc-50"
          title="Scroll Left"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        <div
          ref={pillsScrollRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth"
        >
          <button
            onClick={() => onSelectCategory(null)}
            className={`shrink-0 px-2.5 py-1 rounded text-xs font-semibold border transition-colors ${
              activeCategory === null
                ? "bg-ink text-white border-ink"
                : "bg-white text-ink border-ink/20 hover:bg-zinc-50"
            }`}
          >
            All Sections
          </button>

          {magazineSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                onSelectCategory(sec.id);
                const el = document.getElementById(`section-${sec.id}`);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`shrink-0 px-2.5 py-1 rounded text-xs font-semibold border transition-colors ${
                activeCategory === sec.id
                  ? "bg-brand text-ink border-ink/40 font-bold"
                  : "bg-white text-ink border-ink/20 hover:bg-zinc-50"
              }`}
            >
              {sec.title}
            </button>
          ))}

          <button
            onClick={() => {
              const el = document.getElementById("section-quiz");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-2.5 py-1 rounded text-xs font-semibold border border-ink/20 bg-zinc-100 text-ink hover:bg-zinc-200 transition-colors"
          >
            Revision Q&A Deck
          </button>
        </div>

        <button
          onClick={() => scrollPills("right")}
          className="hidden sm:flex shrink-0 h-6 w-6 rounded border border-ink/20 bg-white items-center justify-center ml-1 text-muted hover:text-ink hover:bg-zinc-50"
          title="Scroll Right"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </nav>
  );
}

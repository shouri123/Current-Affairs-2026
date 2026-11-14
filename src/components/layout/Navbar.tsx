"use client";

import React from "react";
import { Search, Volume2, VolumeX, Star, Bookmark, Gamepad2, X } from "lucide-react";
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
  const masteryPercentage = totalFactsCount > 0 ? Math.round((masteredCount / totalFactsCount) * 100) : 0;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-ink px-4 py-2.5 no-print">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform">⚡</span>
            <div>
              <span className="font-display font-black text-lg sm:text-xl text-ink tracking-tight flex items-center gap-1.5">
                Current Affairs <span className="bg-popPink text-white text-[10px] px-1.5 py-0.5 rounded-md border border-ink uppercase">Sept 2026</span>
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md min-w-[220px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search GDP, BRICS, ISRO, Appointments..."
            className="w-full bg-cream border-2 border-ink rounded-xl pl-9 pr-8 py-1.5 text-xs sm:text-sm font-bold text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-popCyan shadow-brutal-sm"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md bg-popCoral text-white border border-ink hover:scale-110 transition-transform"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleSound}
            title={soundEnabled ? "Mute Sound" : "Enable Sound"}
            className="gap-1 bg-cream"
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
          </Button>

          {/* Must-Know Filter */}
          <Button
            variant={onlyHot ? "default" : "outline"}
            size="sm"
            onClick={onToggleOnlyHot}
            className={`gap-1 ${onlyHot ? "bg-popYellow" : "bg-white"}`}
          >
            <Star className={`h-3.5 w-3.5 ${onlyHot ? "fill-ink" : ""}`} />
            <span className="hidden sm:inline">Must-Know</span>
          </Button>

          {/* Arcade Quiz Button */}
          <Button
            variant="pink"
            size="sm"
            onClick={onOpenArcade}
            className="gap-1"
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Quiz</span>
          </Button>

          {/* Pinboard Drawer Trigger */}
          <Button
            variant="cyan"
            size="sm"
            onClick={onOpenPinDrawer}
            className="gap-1.5 relative"
          >
            <Bookmark className="h-3.5 w-3.5 fill-ink" />
            <span className="hidden sm:inline">Pinned</span>
            <Badge variant="default" className="h-5 w-5 p-0 justify-center text-[10px] bg-popYellow">
              {pinCount}
            </Badge>
          </Button>
        </div>
      </div>

      {/* Mastery Progress Bar */}
      <div className="max-w-7xl mx-auto mt-2 flex items-center gap-3">
        <Progress value={masteryPercentage} className="h-3 flex-1" />
        <span className="text-[11px] font-extrabold text-ink shrink-0 font-display">
          {masteredCount} / {totalFactsCount} Mastered ({masteryPercentage}%)
        </span>
      </div>

      {/* Category Pills Navigation */}
      <div className="max-w-7xl mx-auto mt-2 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => onSelectCategory(null)}
          className={`shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-bold border-2 border-ink transition-all ${
            activeCategory === null
              ? "bg-ink text-white shadow-brutal-sm"
              : "bg-white text-ink hover:bg-cream"
          }`}
        >
          🌟 All Sections
        </button>
        {magazineSections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              onSelectCategory(sec.id);
              const el = document.getElementById(`section-${sec.id}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-bold border-2 border-ink transition-all flex items-center gap-1 ${
              activeCategory === sec.id
                ? `${sec.bgHeader} shadow-brutal-sm`
                : "bg-white text-ink hover:bg-cream"
            }`}
          >
            <span>{sec.emoji}</span>
            <span>{sec.title.split("&")[0].trim()}</span>
          </button>
        ))}
        <button
          onClick={() => {
            const el = document.getElementById("section-quiz");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-bold border-2 border-ink bg-popPink text-white hover:bg-pink-400 transition-all flex items-center gap-1"
        >
          <span>🔥</span>
          <span>Exam Q&A Deck</span>
        </button>
      </div>
    </nav>
  );
}


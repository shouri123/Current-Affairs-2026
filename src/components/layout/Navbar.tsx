"use client";

import React, { useRef } from "react";
import { Search, Volume2, VolumeX, Star, Bookmark, Gamepad2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { magazineSections } from "@/data/magazineSections";
import { motion } from "framer-motion";

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
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-ink px-3 sm:px-6 py-2.5 no-print shadow-sm">
      <div className="max-w-[1536px] w-full mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform">
              ⚡
            </span>
            <div>
              <span className="font-display font-black text-lg sm:text-xl text-ink tracking-tight flex items-center gap-1.5">
                Current Affairs{" "}
                <span className="bg-popPink text-white text-[10px] px-1.5 py-0.5 rounded-md border border-ink uppercase shadow-brutal-sm">
                  Sept 2026
                </span>
              </span>
            </div>
          </motion.a>
        </div>

        {/* Search Bar - Flexibly expands to fill vacant space */}
        <div className="flex-1 max-w-xl min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="🔍 Search GDP, BRICS, UPI, ISRO, Appointments..."
            className="w-full bg-cream border-2 border-ink rounded-xl pl-9 pr-8 py-1.5 text-xs sm:text-sm font-bold text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-popCyan shadow-brutal-sm transition-all"
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

        {/* Action Controls with Framer Motion Bounce */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleSound}
              title={soundEnabled ? "Mute Sound" : "Enable Sound"}
              className="gap-1 bg-cream"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-ink animate-bounce" />
                  <span className="hidden sm:inline">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5 text-ink/50" />
                  <span className="hidden sm:inline text-ink/50">SFX OFF</span>
                </>
              )}
            </Button>
          </motion.div>

          {/* Must-Know Filter Button - Vivid Yellow Theme */}
          <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={onlyHot ? "default" : "outline"}
              size="sm"
              onClick={onToggleOnlyHot}
              className={`gap-1 font-black ${
                onlyHot
                  ? "bg-popYellow text-ink ring-2 ring-ink shadow-brutal-sm"
                  : "bg-yellow-100 hover:bg-popYellow text-ink border-2 border-ink"
              }`}
            >
              <Star
                className={`h-3.5 w-3.5 fill-current text-ink ${
                  onlyHot ? "animate-spin" : ""
                }`}
              />
              <span>Must-Know</span>
            </Button>
          </motion.div>

          {/* Arcade Quiz Button */}
          <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="pink"
              size="sm"
              onClick={onOpenArcade}
              className="gap-1 font-black"
            >
              <Gamepad2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Quiz</span>
            </Button>
          </motion.div>

          {/* Pinboard Drawer Trigger */}
          <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="cyan"
              size="sm"
              onClick={onOpenPinDrawer}
              className="gap-1.5 relative font-black"
            >
              <Bookmark className="h-3.5 w-3.5 fill-ink" />
              <span className="hidden sm:inline">Pinned</span>
              <Badge
                variant="default"
                className="h-5 w-5 p-0 justify-center text-[10px] bg-popYellow font-black"
              >
                {pinCount}
              </Badge>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mastery Progress Bar */}
      <div className="max-w-[1536px] w-full mx-auto mt-2 flex items-center gap-3">
        <Progress value={masteryPercentage} className="h-3 flex-1" />
        <span className="text-[11px] font-extrabold text-ink shrink-0 font-display">
          {masteredCount} / {totalFactsCount} Mastered ({masteryPercentage}%)
        </span>
      </div>

      {/* Category Pills Navigation - Cleanly fills vacant space */}
      <div className="max-w-[1536px] w-full mx-auto mt-2 relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollPills("left")}
          className="hidden sm:flex shrink-0 h-6 w-6 rounded-md bg-white border border-ink items-center justify-center mr-1 shadow-brutal-sm hover:bg-popYellow transition-colors z-10"
          title="Scroll Left"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {/* Scrollable / Wrapping Pills Container */}
        <div
          ref={pillsScrollRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth"
        >
          <motion.button
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(null)}
            className={`shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-black border-2 border-ink transition-all ${
              activeCategory === null
                ? "bg-ink text-white shadow-brutal-sm"
                : "bg-white text-ink hover:bg-cream"
            }`}
          >
            🌟 All Sections
          </motion.button>

          {magazineSections.map((sec) => (
            <motion.button
              key={sec.id}
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSelectCategory(sec.id);
                const el = document.getElementById(`section-${sec.id}`);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-black border-2 border-ink transition-all flex items-center gap-1 ${
                activeCategory === sec.id
                  ? `${sec.bgHeader} shadow-brutal-sm ring-1 ring-ink`
                  : "bg-white text-ink hover:bg-cream"
              }`}
            >
              <span>{sec.emoji}</span>
              <span>{sec.title.split("&")[0].trim()}</span>
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("section-quiz");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-2.5 py-1 rounded-xl text-xs font-display font-black border-2 border-ink bg-popPink text-white hover:bg-pink-400 transition-all flex items-center gap-1 shadow-brutal-sm"
          >
            <span>🔥</span>
            <span>Exam Q&A Deck</span>
          </motion.button>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollPills("right")}
          className="hidden sm:flex shrink-0 h-6 w-6 rounded-md bg-white border border-ink items-center justify-center ml-1 shadow-brutal-sm hover:bg-popYellow transition-colors z-10"
          title="Scroll Right"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </nav>
  );
}

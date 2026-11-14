"use client";

import React from "react";
import { Check, Star, Bookmark, CheckCheck, Lightbulb, Sparkles } from "lucide-react";
import { MagazineSection, FactItem } from "@/types";
import { SvgDiagram } from "./SvgDiagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SectionCardProps {
  section: MagazineSection;
  searchQuery: string;
  onlyHot: boolean;
  masteredIds: string[];
  pinnedIds: string[];
  onToggleMastered: (id: string) => void;
  onTogglePin: (id: string) => void;
  onMasterSection: (sectionId: string) => void;
  onFactClick: (fact: FactItem) => void;
  onDiagramClick: (title: string, body: string, tip: string) => void;
}

export function SectionCard({
  section,
  searchQuery,
  onlyHot,
  masteredIds,
  pinnedIds,
  onToggleMastered,
  onTogglePin,
  onMasterSection,
  onFactClick,
  onDiagramClick,
}: SectionCardProps) {
  // All section items mapped with id
  const allSectionItems = section.items.map((item, idx) => ({
    ...item,
    id: `${section.id}-${idx}`,
    category: section.title,
    sectionId: section.id,
    pages: section.pages,
  }));

  // Filter items based on searchQuery and onlyHot
  const filteredItems = allSectionItems.filter((item) => {
    if (onlyHot && !item.hot) return false;
    if (searchQuery.trim()) {
      return item.text.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  if (filteredItems.length === 0) {
    return null;
  }

  const sectionMasteredCount = allSectionItems.filter((i) =>
    masteredIds.includes(i.id)
  ).length;

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(
      new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    );
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={i}
          className="bg-popYellow text-ink px-1 rounded font-extrabold border-b-2 border-ink"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section id={`section-${section.id}`} className="print-section scroll-mt-28 mb-8">
      {/* Neo-brutalist Section Box */}
      <div
        className={`comic-card ${
          section.bgTint || "bg-yellow-50/90"
        } rounded-3xl border-3 sm:border-4 border-ink p-5 sm:p-6 shadow-brutal-lg`}
      >
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-5 border-b-3 border-ink">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 bg-white rounded-2xl border-2 border-ink shadow-brutal-sm">
              {section.emoji}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display font-black text-lg sm:text-xl md:text-2xl text-ink">
                  {section.title}
                </h2>
                <Badge variant="cyan" className="text-[10px] uppercase font-bold">
                  {section.pages}
                </Badge>
              </div>
              <p className="text-xs font-bold text-ink/70 mt-0.5">
                {section.cartoonCaption.replace(/[👆👉]/g, "").trim()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black font-display bg-white border-2 border-ink px-2.5 py-1 rounded-xl shadow-brutal-sm hidden sm:inline-block">
              {sectionMasteredCount} / {section.items.length} Mastered
            </span>
            <Button
              variant="mint"
              size="sm"
              onClick={() => onMasterSection(section.id)}
              className="gap-1.5"
              title="Mark all facts in this section as Mastered"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              <span>Master All</span>
            </Button>
          </div>
        </div>

        {/* Content Layout: Sticky Left Diagram/Summary + Right Fact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Interactive SVG Diagram & Companion Column */}
          {section.svgDiagram && (
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-3">
              {/* Diagram Card */}
              <div className="bg-white border-2 border-ink rounded-2xl p-3 shadow-brutal-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-xs uppercase text-ink flex items-center gap-1">
                    <span>🎨</span> {section.cartoonTitle}
                  </span>
                  <span className="text-[10px] font-black bg-popYellow px-2 py-0.5 rounded-full border border-ink shadow-brutal-sm">
                    Interactive Hotspots
                  </span>
                </div>
                <SvgDiagram
                  svgContent={section.svgDiagram}
                  onHotspotClick={(hotspot) =>
                    onDiagramClick(hotspot.title, hotspot.body, hotspot.tip)
                  }
                />
              </div>

              {/* Companion Section Progress & Revision Card */}
              <div className="bg-white/90 border-2 border-ink rounded-2xl p-3.5 shadow-brutal-sm hidden lg:block">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black font-display text-ink flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-popOrange" /> Section Overview
                  </span>
                  <span className="text-[10px] font-black bg-popMint px-2 py-0.5 rounded-md border border-ink">
                    {Math.round((sectionMasteredCount / section.items.length) * 100)}% Done
                  </span>
                </div>
                <p className="text-xs font-medium text-ink/75 leading-relaxed mb-3">
                  Click any hotspot on the diagram above or review the {filteredItems.length} curated points below.
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onMasterSection(section.id)}
                    className="w-full text-xs gap-1 bg-cream"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span>Mark {section.items.length} Points Done</span>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Fact Items Cards Column */}
          <div className={section.svgDiagram ? "lg:col-span-7" : "lg:col-span-12"}>
            <div className="space-y-2.5">
              {filteredItems.map((item) => {
                const isMastered = masteredIds.includes(item.id);
                const isPinned = pinnedIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => onFactClick(item)}
                    className={`group relative rounded-2xl border-2 border-ink p-3 sm:p-3.5 transition-all duration-150 cursor-pointer select-none ${
                      isMastered
                        ? "bg-popMint/25 border-emerald-800 shadow-brutal-sm opacity-85"
                        : "bg-white hover:bg-cream shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      {/* Left: Text & Tags */}
                      <div className="flex-1 pr-1">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          {item.hot && (
                            <span className="bg-popPink text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-md border border-ink shadow-brutal-sm inline-flex items-center gap-1">
                              <Star className="h-2.5 w-2.5 fill-white" /> Must-Know
                            </span>
                          )}
                          {isMastered && (
                            <span className="bg-emerald-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-ink inline-flex items-center gap-1">
                              <Check className="h-2.5 w-2.5" /> Mastered
                            </span>
                          )}
                          {isPinned && (
                            <span className="bg-popYellow text-ink text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-ink inline-flex items-center gap-1">
                              <Bookmark className="h-2.5 w-2.5 fill-ink" /> Pinned
                            </span>
                          )}
                        </div>

                        <p
                          className={`text-xs sm:text-sm font-semibold leading-relaxed text-ink ${
                            isMastered ? "line-through text-ink/75" : ""
                          }`}
                        >
                          {highlightText(item.text, searchQuery)}
                        </p>
                      </div>

                      {/* Right: Quick Action Buttons */}
                      <div
                        className="flex flex-col gap-1.5 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Mastered Button */}
                        <button
                          onClick={() => onToggleMastered(item.id)}
                          title={isMastered ? "Mark as unread" : "Mark as mastered"}
                          className={`h-7 w-7 rounded-lg border-2 border-ink flex items-center justify-center transition-all ${
                            isMastered
                              ? "bg-popMint text-ink shadow-brutal-sm"
                              : "bg-white text-ink/40 hover:bg-popMint hover:text-ink shadow-brutal-sm"
                          }`}
                        >
                          <Check className={`h-4 w-4 ${isMastered ? "stroke-[3]" : ""}`} />
                        </button>

                        {/* Pin Button */}
                        <button
                          onClick={() => onTogglePin(item.id)}
                          title={isPinned ? "Remove pin" : "Pin to study drawer"}
                          className={`h-7 w-7 rounded-lg border-2 border-ink flex items-center justify-center transition-all ${
                            isPinned
                              ? "bg-popYellow text-ink shadow-brutal-sm"
                              : "bg-white text-ink/40 hover:bg-popYellow hover:text-ink shadow-brutal-sm"
                          }`}
                        >
                          <Bookmark className={`h-4 w-4 ${isPinned ? "fill-ink text-ink" : ""}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

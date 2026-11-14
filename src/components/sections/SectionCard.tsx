"use client";

import React from "react";
import { Check, Star, Bookmark, CheckCheck, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import { MagazineSection, FactItem } from "@/types";
import { SvgDiagram } from "./SvgDiagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  // Map all section items with unique ID
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

  const sectionMustKnowCount = allSectionItems.filter((i) => i.hot).length;

  /**
   * Recreates the exact yellow highlight badge & keyword pill formatting from the original HTML:
   * 1. Currency & percentages: highlighted in bright yellow gradient with black bottom border
   * 2. Key organizations & summits: highlighted as underlined keyword pills
   * 3. Search query: highlighted in bright yellow
   */
  const formatTextWithHighlights = (text: string, query: string) => {
    // Regular expression matching numbers, percentages, currency, and key statutory metrics
    const statRegex =
      /(₹[\d,.]+\s?(?:trillion|crore|lakh|thousand)?|\$[\d,.]+\s?(?:billion|million)?|€[\d,.]+\s?million|C\$[\d,.]+|\d+(?:\.\d+)?%)/g;

    // Regular expression matching high-yield entities and exam terms
    const entityRegex =
      /\b(18th BRICS Summit|New Delhi Declaration 2026|Kavach 4\.0|Veer Guardian 2026|Nomadic Elephant|SLINEX-26|Yudh Abhyas 2026|VARUNA 2026|Samudra Laksamana|Zorawar|INS Nipun|Sanjukta Parashar|Ramon Magsaysay Award 2026|Oliy Darajali Do'stlik Order|Ig Nobel Prize|inStem|The Pitt|Widow's Bay|Angh|Shantanu Moitra|Anant Nag|Dadasaheb Phalke Award 2024|Gondhal|Honohon|Manu Bhaker|Pawan Sehrawat|Mirabai Chanu|Sawan Barwal|Elena Rybakina|Smriti Mandhana|Abhishek Sharma|Ishan Kishan|Vaibhav Sooryavanshi|Lionel Messi|Kimi Antonelli|Modified UDAN|DURGA Scheme|Bharat Taxi|Anak Krakatau|ISRO|DRDO|RBI|UPI|EPFO|BRICS|Uzbekistan)\b/g;

    let html = text
      .replace(
        statRegex,
        `<span class="highlight-badge">$1</span>`
      )
      .replace(
        entityRegex,
        `<strong class="keyword-pill font-extrabold text-ink underline decoration-popPink decoration-2 underline-offset-2">$1</strong>`
      );

    if (query.trim()) {
      const qEscaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(
        new RegExp(`(${qEscaped})`, "gi"),
        `<mark class="bg-popYellow text-ink px-1 rounded font-black border-b-2 border-ink shadow-xs">$1</mark>`
      );
    }

    return html;
  };

  return (
    <section id={`section-${section.id}`} className="print-section scroll-mt-28 mb-8">
      {/* Neo-brutalist Section Box */}
      <div
        className={`comic-card ${
          section.bgTint || "bg-yellow-50/90"
        } rounded-3xl border-3 sm:border-4 border-ink p-4 sm:p-6 shadow-brutal-lg`}
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
                {sectionMustKnowCount > 0 && (
                  <Badge variant="default" className="text-[10px] bg-popYellow font-black border-ink shadow-brutal-sm">
                    ⭐ {sectionMustKnowCount} Must-Know
                  </Badge>
                )}
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

        {/* Content Layout: Sticky Left Diagram + Companion Box + Right Fact Grid */}
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

              {/* Companion Section Progress & Revision Card - Completely eliminates vacant space */}
              <div className="bg-white border-2 border-ink rounded-2xl p-4 shadow-brutal-sm hidden lg:block">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black font-display text-ink flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-popOrange" /> Revision Hub
                  </span>
                  <span className="text-[10px] font-black bg-popMint px-2 py-0.5 rounded-md border border-ink">
                    {Math.round((sectionMasteredCount / section.items.length) * 100)}% Mastered
                  </span>
                </div>

                <div className="w-full bg-zinc-100 rounded-full h-2.5 border border-ink mb-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-popMint via-popYellow to-popPink h-full transition-all duration-300"
                    style={{
                      width: `${Math.round(
                        (sectionMasteredCount / section.items.length) * 100
                      )}%`,
                    }}
                  />
                </div>

                <p className="text-xs font-medium text-ink/75 leading-relaxed mb-3">
                  Click any hotspot on the diagram above or read through the {filteredItems.length} curated points.
                  Yellow badges indicate high-yield figures!
                </p>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onMasterSection(section.id)}
                    className="w-full text-xs gap-1.5 bg-cream hover:bg-popMint font-black"
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
              {filteredItems.map((item, idx) => {
                const isMastered = masteredIds.includes(item.id);
                const isPinned = pinnedIds.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.012, x: 2, y: -1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => onFactClick(item)}
                    className={`group relative rounded-2xl border-2 border-ink p-3.5 sm:p-4 transition-all duration-150 cursor-pointer select-none ${
                      isMastered
                        ? "bg-popMint/25 border-emerald-800 shadow-brutal-sm opacity-85"
                        : item.hot
                        ? "bg-gradient-to-r from-amber-50/95 via-yellow-50 to-white border-ink ring-2 ring-popYellow/80 shadow-brutal"
                        : "bg-white hover:bg-cream shadow-brutal"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Left Number / Star Bullet Button in Signature Yellow for Must-Knows */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMastered(item.id);
                        }}
                        title={
                          isMastered
                            ? "Mark as unread"
                            : item.hot
                            ? "Must-Know Event! Click to master"
                            : "Click to master"
                        }
                        className={`shrink-0 w-7 h-7 rounded-xl border-2 border-ink flex items-center justify-center font-display font-black text-xs mt-0.5 hover:scale-110 active:scale-90 transition-transform shadow-brutal-sm ${
                          isMastered
                            ? "bg-popMint text-ink"
                            : item.hot
                            ? "bg-popYellow text-ink animate-pulse-yellow"
                            : "bg-zinc-100 text-ink"
                        }`}
                      >
                        {isMastered ? (
                          <Check className="h-4 w-4 stroke-[3]" />
                        ) : item.hot ? (
                          <Star className="h-3.5 w-3.5 fill-ink" />
                        ) : (
                          idx + 1
                        )}
                      </button>

                      {/* Middle: Content with Yellow Highlights */}
                      <div className="flex-1 pr-1">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          {/* Must-Know Badge in Signature Yellow */}
                          {item.hot && (
                            <span className="bg-popYellow text-ink text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-ink shadow-brutal-sm inline-flex items-center gap-1">
                              <Star className="h-2.5 w-2.5 fill-ink" /> Must-Know Event
                            </span>
                          )}
                          {isMastered && (
                            <span className="bg-emerald-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-ink inline-flex items-center gap-1">
                              <Check className="h-2.5 w-2.5" /> Mastered
                            </span>
                          )}
                          {isPinned && (
                            <span className="bg-popCyan text-ink text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-ink inline-flex items-center gap-1">
                              <Bookmark className="h-2.5 w-2.5 fill-ink" /> Pinned
                            </span>
                          )}
                        </div>

                        {/* Text Rendered with Signature Yellow Highlight Badges */}
                        <div
                          className={`text-xs sm:text-sm font-semibold leading-relaxed text-ink ${
                            isMastered ? "line-through text-ink/75" : ""
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: formatTextWithHighlights(
                              item.text,
                              searchQuery
                            ),
                          }}
                        />
                      </div>

                      {/* Right: Quick Pin Action Button */}
                      <div
                        className="flex items-center shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onTogglePin(item.id)}
                          title={isPinned ? "Remove pin" : "Pin to study drawer"}
                          className={`h-7 w-7 rounded-lg border-2 border-ink flex items-center justify-center transition-all ${
                            isPinned
                              ? "bg-popCyan text-ink shadow-brutal-sm"
                              : "bg-white text-ink/40 hover:bg-popYellow hover:text-ink shadow-brutal-sm"
                          }`}
                        >
                          <Bookmark
                            className={`h-4 w-4 ${isPinned ? "fill-ink text-ink" : ""}`}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

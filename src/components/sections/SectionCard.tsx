"use client";

import React from "react";
import { Bookmark, Check } from "lucide-react";
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
  const allSectionItems = section.items.map((item, idx) => ({
    ...item,
    id: `${section.id}-${idx}`,
    category: section.title,
    sectionId: section.id,
    pages: section.pages,
  }));

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
   * Formats text with verified yellow highlight chips on key metrics & statistics.
   */
  const formatTextWithHighlights = (text: string, query: string) => {
    const statRegex =
      /(₹[\d,.]+\s?(?:trillion|crore|lakh|thousand)?|\$[\d,.]+\s?(?:billion|million)?|€[\d,.]+\s?million|C\$[\d,.]+|\d+(?:\.\d+)?%)/g;

    const entityRegex =
      /\b(18th BRICS Summit|New Delhi Declaration 2026|Kavach 4\.0|Veer Guardian 2026|Nomadic Elephant|SLINEX-26|Yudh Abhyas 2026|VARUNA 2026|Samudra Laksamana|Zorawar|INS Nipun|Sanjukta Parashar|Ramon Magsaysay Award 2026|Oliy Darajali Do'stlik Order|Ig Nobel Prize|inStem|The Pitt|Widow's Bay|Angh|Shantanu Moitra|Anant Nag|Dadasaheb Phalke Award 2024|Gondhal|Honohon|Manu Bhaker|Pawan Sehrawat|Mirabai Chanu|Sawan Barwal|Elena Rybakina|Smriti Mandhana|Abhishek Sharma|Ishan Kishan|Vaibhav Sooryavanshi|Lionel Messi|Kimi Antonelli|Modified UDAN|DURGA Scheme|Bharat Taxi|Anak Krakatau|ISRO|DRDO|RBI|UPI|EPFO|BRICS|Uzbekistan)\b/g;

    let html = text
      .replace(
        statRegex,
        `<span class="highlight-badge">$1</span>`
      )
      .replace(
        entityRegex,
        `<strong class="keyword-pill">$1</strong>`
      );

    if (query.trim()) {
      const qEscaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(
        new RegExp(`(${qEscaped})`, "gi"),
        `<mark class="bg-popYellow text-ink px-1 rounded font-semibold">$1</mark>`
      );
    }

    return html;
  };

  return (
    <section id={`section-${section.id}`} className="print-section scroll-mt-28 mb-8">
      {/* Editorial Section Card - Clean 1px border, zero offset shadows */}
      <div className="gazette-card p-5 sm:p-6 border border-ink/15 rounded-xl bg-white shadow-subtle">
        {/* Section Header - Clean typography without emoji */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-5 border-b border-ink/15">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
                {section.title}
              </h2>
              {sectionMustKnowCount > 0 && (
                <Badge variant="mustKnow" className="text-xs">
                  {sectionMustKnowCount} Must-Know
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 font-sans">
            <span className="text-xs text-muted font-medium hidden sm:inline-block">
              {sectionMasteredCount} of {section.items.length} recorded
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onMasterSection(section.id)}
              className="text-xs"
            >
              Mark Section Complete
            </Button>
          </div>
        </div>

        {/* Content Layout: Sticky Left Diagram/Doodle + Right Fact List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Custom Doodle Hotspot Column (Kept as instructed: tailored visual idea of its own) */}
          {section.svgDiagram && (
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-3">
              <div className="border border-ink/15 rounded-lg p-3 bg-cream/50">
                <div className="text-xs font-sans font-semibold text-muted uppercase tracking-wider mb-2">
                  {section.cartoonTitle}
                </div>
                <SvgDiagram
                  svgContent={section.svgDiagram}
                  onHotspotClick={(hotspot) =>
                    onDiagramClick(hotspot.title, hotspot.body, hotspot.tip)
                  }
                />
              </div>
            </div>
          )}

          {/* Fact Items Column */}
          <div className={section.svgDiagram ? "lg:col-span-7" : "lg:col-span-12"}>
            <div className="space-y-3 font-serif">
              {filteredItems.map((item, idx) => {
                const isMastered = masteredIds.includes(item.id);
                const isPinned = pinnedIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => onFactClick(item)}
                    className={`rounded-lg border p-3.5 transition-colors cursor-pointer select-none ${
                      isMastered
                        ? "bg-zinc-50 border-ink/10 opacity-75"
                        : item.hot
                        ? "bg-yellow-50/50 border-yellow-300/80 hover:bg-yellow-50"
                        : "bg-white border-ink/15 hover:bg-cream/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Plain numeral without tinted 28px square tile */}
                      <span className="text-xs font-sans font-semibold text-muted mt-0.5 shrink-0 w-5">
                        {idx + 1}.
                      </span>

                      {/* Fact Content */}
                      <div className="flex-1 pr-1">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1 font-sans">
                          {item.hot && (
                            <Badge variant="mustKnow" className="text-[10px]">
                              Must-Know
                            </Badge>
                          )}
                          {isMastered && (
                            <Badge variant="mastered" className="text-[10px]">
                              Recorded
                            </Badge>
                          )}
                          {isPinned && (
                            <Badge variant="pinned" className="text-[10px]">
                              Pinned
                            </Badge>
                          )}
                        </div>

                        <div
                          className={`text-sm sm:text-base leading-relaxed text-ink ${
                            isMastered ? "line-through text-muted" : ""
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: formatTextWithHighlights(
                              item.text,
                              searchQuery
                            ),
                          }}
                        />
                      </div>

                      {/* Plain Action Controls */}
                      <div
                        className="flex items-center gap-1 shrink-0 no-print"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => onToggleMastered(item.id)}
                          title={isMastered ? "Mark unread" : "Mark completed"}
                          className={`h-7 w-7 rounded border flex items-center justify-center text-xs transition-colors ${
                            isMastered
                              ? "bg-emerald-100 border-emerald-400 text-emerald-900"
                              : "border-ink/20 text-muted hover:text-ink hover:bg-zinc-100"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </button>

                        <button
                          onClick={() => onTogglePin(item.id)}
                          title={isPinned ? "Unpin fact" : "Pin for revision"}
                          className={`h-7 w-7 rounded border flex items-center justify-center text-xs transition-colors ${
                            isPinned
                              ? "bg-sky-100 border-sky-400 text-sky-900"
                              : "border-ink/20 text-muted hover:text-ink hover:bg-zinc-100"
                          }`}
                        >
                          <Bookmark className={`h-3.5 w-3.5 ${isPinned ? "fill-current" : ""}`} />
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

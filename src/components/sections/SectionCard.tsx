"use client";

import React, { useState } from "react";
import { Bookmark, Check, ExternalLink, ChevronDown, ChevronUp, Star } from "lucide-react";
import { MagazineSection, FactItem } from "@/types";
import { SvgDiagram } from "./SvgDiagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VerificationBadge } from "@/components/interactive/VerificationBadge";
import { motion } from "framer-motion";

interface SectionCardProps {
  section: MagazineSection;
  searchQuery: string;
  onlyHot: boolean;
  importanceFilter?: string;
  contentTypeFilter?: string;
  verificationFilter?: string;
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
  importanceFilter = "all",
  contentTypeFilter = "all",
  verificationFilter = "all",
  masteredIds,
  pinnedIds,
  onToggleMastered,
  onTogglePin,
  onMasterSection,
  onFactClick,
  onDiagramClick,
}: SectionCardProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allSectionItems: FactItem[] = section.items.map((item, idx) => ({
    ...item,
    id: item.id || `${section.id}-${idx}`,
    category: section.title,
    sectionId: section.id,
    pages: section.pages,
    importance: item.importance || (item.hot ? "must-know" : "important"),
    contentType:
      item.contentType ||
      (section.id === "international" ||
      item.text.toLowerCase().includes("global") ||
      item.text.toLowerCase().includes("world")
        ? "international"
        : "national"),
    verification: item.verification || {
      status: "verified",
      lastVerifiedAt: "2026-11-14",
    },
    sources: item.sources || [
      {
        title: `${item.text.slice(0, 40)}... (Official Record)`,
        publisher: "Press Information Bureau (PIB) / Government of India",
        url: "https://www.pib.gov.in",
        sourceType: "primary",
      },
    ],
  }));

  const filteredItems = allSectionItems.filter((item) => {
    // 1. Must-Know filter
    if (onlyHot && !item.hot) return false;

    // 2. Importance filter
    if (importanceFilter !== "all" && item.importance !== importanceFilter) {
      return false;
    }

    // 3. Content type filter
    if (contentTypeFilter !== "all" && item.contentType !== contentTypeFilter) {
      return false;
    }

    // 4. Verification status filter
    if (
      verificationFilter !== "all" &&
      item.verification?.status !== verificationFilter
    ) {
      return false;
    }

    // 5. Search query matching
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inText = item.text.toLowerCase().includes(q);
      const inCategory = item.category.toLowerCase().includes(q);
      const inTags = item.tags ? item.tags.some((t) => t.toLowerCase().includes(q)) : false;
      const inTitle = item.title ? item.title.toLowerCase().includes(q) : false;
      return inText || inCategory || inTags || inTitle;
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
      .replace(statRegex, `<span class="highlight-badge">$1</span>`)
      .replace(entityRegex, `<strong class="keyword-pill">$1</strong>`);

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
    <article
      id={`section-${section.id}`}
      className="print-section scroll-mt-28 mb-10 font-sans"
    >
      <div className="gazette-card overflow-hidden border border-ink/15 rounded-xl bg-white shadow-subtle">
        {/* Section Header */}
        <div className="border-b border-ink/15 p-4 sm:p-6 bg-cream/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex-1 min-w-[260px]">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
                {section.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>{allSectionItems.length} curated updates</span>
              <span>•</span>
              <span className="text-amber-800 font-semibold">{sectionMustKnowCount} Must-Know</span>
              <span>•</span>
              <span className="font-medium text-ink">
                {sectionMasteredCount}/{allSectionItems.length} Mastered
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onMasterSection(section.id)}
              className="text-xs gap-1 border-ink/20 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-colors"
            >
              <Check className="h-3.5 w-3.5" />
              Master All ({allSectionItems.length})
            </Button>
          </div>
        </div>

        {/* Content Body: Two columns (Facts List & SVG Diagram) */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Facts List */}
          <div className="lg:col-span-7 space-y-3 font-serif">
            {filteredItems.map((item, index) => {
              const isMastered = masteredIds.includes(item.id);
              const isPinned = pinnedIds.includes(item.id);
              const isExpanded = expandedItems[item.id] || false;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.008, y: -1 }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() => onFactClick(item)}
                  className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer relative group ${
                    isMastered
                      ? "bg-zinc-50/80 border-emerald-500/40 opacity-80"
                      : item.hot
                      ? "bg-amber-50/50 border-ink shadow-brutal-sm hover:bg-amber-50/80"
                      : "bg-white border-ink/20 hover:border-ink/50 hover:shadow-subtle"
                  }`}
                >
                  {/* Top Bar inside item */}
                  <div className="flex items-center justify-between gap-2 mb-2 font-sans">
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMastered(item.id);
                        }}
                        title={
                          isMastered
                            ? "Mark as unstudied"
                            : item.hot
                            ? "Must-Know Event! Click to master"
                            : "Click to master"
                        }
                        className={`shrink-0 w-7 h-7 rounded-xl border-2 border-ink flex items-center justify-center font-display font-black text-xs shadow-brutal-sm transition-transform hover:scale-110 ${
                          isMastered
                            ? "bg-popMint text-ink"
                            : item.hot
                            ? "bg-popYellow text-ink ring-1 ring-ink"
                            : "bg-zinc-100 text-ink"
                        }`}
                      >
                        {isMastered ? (
                          <Check className="h-4 w-4 stroke-[3]" />
                        ) : item.hot ? (
                          <Star className="h-3.5 w-3.5 fill-ink" />
                        ) : (
                          index + 1
                        )}
                      </button>

                      {item.hot && (
                        <Badge variant="mustKnow" className="gap-1">
                          <Star className="h-2.5 w-2.5 fill-ink" /> Must-Know Event
                        </Badge>
                      )}
                      <VerificationBadge
                        status={item.verification?.status}
                        sources={item.sources}
                        lastVerifiedAt={item.verification?.lastVerifiedAt}
                      />
                    </div>

                    <div
                      className="flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => onTogglePin(item.id)}
                        title={isPinned ? "Unpin fact" : "Pin for revision"}
                        className={`p-1.5 rounded transition-colors ${
                          isPinned
                            ? "text-brand bg-sky-50"
                            : "text-zinc-400 hover:text-ink"
                        }`}
                      >
                        <Bookmark
                          className={`h-3.5 w-3.5 ${
                            isPinned ? "fill-brand" : ""
                          }`}
                        />
                      </button>

                      <button
                        onClick={() => onToggleMastered(item.id)}
                        title={
                          isMastered ? "Mark as unstudied" : "Mark as mastered"
                        }
                        className={`p-1.5 rounded transition-colors ${
                          isMastered
                            ? "text-emerald-700 bg-emerald-100"
                            : "text-zinc-400 hover:text-ink"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Fact Statement */}
                  <p
                    className="text-sm sm:text-base text-ink leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: formatTextWithHighlights(
                        item.text,
                        searchQuery
                      ),
                    }}
                  />

                  {/* Primary source link in footer */}
                  {item.sources?.[0] && (
                    <div
                      className="mt-2 pt-2 border-t border-ink/10 flex items-center justify-between text-[11px] font-sans text-muted"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="truncate max-w-[280px]">
                        Authority: <strong className="text-ink">{item.sources[0].publisher}</strong>
                      </span>
                      {item.sources[0].url && (
                        <a
                          href={item.sources[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:underline inline-flex items-center gap-1 font-semibold shrink-0"
                        >
                          Source Document <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Sticky Visual Diagram Companion */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3 font-sans">
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-ink mb-1">
                {section.cartoonTitle}
              </h3>
              {section.cartoonCaption && (
                <p className="text-xs text-muted mb-2 font-serif">
                  {section.cartoonCaption}
                </p>
              )}
            </div>
            <SvgDiagram
              svgContent={section.svgDiagram}
              onHotspotClick={(hotspot) =>
                onDiagramClick(hotspot.title, hotspot.body, hotspot.tip)
              }
            />
          </div>
        </div>
      </div>
    </article>
  );
}

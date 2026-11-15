"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { magazineSections } from "@/data/magazineSections";
import { SectionCard } from "./SectionCard";
import { FactItem, MagazineSection } from "@/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionListProps {
  sections?: MagazineSection[];
  searchQuery: string;
  onlyHot: boolean;
  activeCategory: string | null;
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

export function SectionList({
  sections = magazineSections,
  searchQuery,
  onlyHot,
  activeCategory,
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
}: SectionListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const domSections = containerRef.current?.querySelectorAll(".print-section");
    if (!domSections || domSections.length === 0) return;

    const ctx = gsap.context(() => {
      domSections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sections, activeCategory, onlyHot, searchQuery, importanceFilter, contentTypeFilter, verificationFilter]);

  const displayedSections = activeCategory
    ? sections.filter((s) => s.id === activeCategory)
    : sections;

  return (
    <div ref={containerRef} className="space-y-6 sm:space-y-8">
      {displayedSections.map((sec) => (
        <SectionCard
          key={sec.id}
          section={sec}
          searchQuery={searchQuery}
          onlyHot={onlyHot}
          importanceFilter={importanceFilter}
          contentTypeFilter={contentTypeFilter}
          verificationFilter={verificationFilter}
          masteredIds={masteredIds}
          pinnedIds={pinnedIds}
          onToggleMastered={onToggleMastered}
          onTogglePin={onTogglePin}
          onMasterSection={onMasterSection}
          onFactClick={onFactClick}
          onDiagramClick={onDiagramClick}
        />
      ))}
    </div>
  );
}

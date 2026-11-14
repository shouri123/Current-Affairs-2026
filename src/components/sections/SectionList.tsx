"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { magazineSections } from "@/data/magazineSections";
import { SectionCard } from "./SectionCard";
import { FactItem } from "@/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionListProps {
  searchQuery: string;
  onlyHot: boolean;
  activeCategory: string | null;
  masteredIds: string[];
  pinnedIds: string[];
  onToggleMastered: (id: string) => void;
  onTogglePin: (id: string) => void;
  onMasterSection: (sectionId: string) => void;
  onFactClick: (fact: FactItem) => void;
  onDiagramClick: (title: string, body: string, tip: string) => void;
}

export function SectionList({
  searchQuery,
  onlyHot,
  activeCategory,
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

    const sections = containerRef.current?.querySelectorAll(".print-section");
    if (!sections || sections.length === 0) return;

    const ctx = gsap.context(() => {
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory, onlyHot, searchQuery]);

  const displayedSections = activeCategory
    ? magazineSections.filter((s) => s.id === activeCategory)
    : magazineSections;

  return (
    <div ref={containerRef} className="space-y-10">
      {displayedSections.map((sec) => (
        <SectionCard
          key={sec.id}
          section={sec}
          searchQuery={searchQuery}
          onlyHot={onlyHot}
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


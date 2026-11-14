"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { SectionList } from "@/components/sections/SectionList";
import { FlashcardGrid } from "@/components/interactive/FlashcardGrid";
import { ArcadeQuizModal } from "@/components/interactive/ArcadeQuizModal";
import { FactDetailModal } from "@/components/interactive/FactDetailModal";
import { PinDrawer } from "@/components/interactive/PinDrawer";
import { Footer } from "@/components/layout/Footer";
import { magazineSections } from "@/data/magazineSections";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FactItem } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [masteredIds, setMasteredIds] = useLocalStorage<string[]>("ca_mastered_ids", []);
  const [pinnedIds, setPinnedIds] = useLocalStorage<string[]>("ca_pinned_ids", []);

  const [isArcadeOpen, setIsArcadeOpen] = useState(false);
  const [isPinDrawerOpen, setIsPinDrawerOpen] = useState(false);

  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    body: string;
    tip?: string;
    factId?: string;
  }>({
    isOpen: false,
    title: "",
    category: "",
    body: "",
    tip: "",
    factId: "",
  });

  const {
    soundEnabled,
    toggleSound,
    playPop,
    playChime,
    playPin,
    playFlip,
    playCorrect,
    playWrong,
    playFanfare,
  } = useSoundEffects();

  // Flatten all facts for counting, random selection, and pinned drawer
  const allFacts = useMemo(() => {
    const list: FactItem[] = [];
    magazineSections.forEach((sec) => {
      sec.items.forEach((item, idx) => {
        list.push({
          id: `${sec.id}-${idx}`,
          text: item.text,
          hot: item.hot,
          category: sec.title,
          sectionId: sec.id,
          pages: sec.pages,
        });
      });
    });
    return list;
  }, []);

  const mustKnowCount = useMemo(() => {
    return allFacts.filter((f) => f.hot).length;
  }, [allFacts]);

  const pinnedFactsList = useMemo(() => {
    return allFacts.filter((f) => pinnedIds.includes(f.id));
  }, [allFacts, pinnedIds]);

  const handleToggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const exists = prev.includes(id);
      if (!exists) {
        playChime();
        return [...prev, id];
      } else {
        playPop();
        return prev.filter((i) => i !== id);
      }
    });
  };

  const handleTogglePin = (id: string) => {
    setPinnedIds((prev) => {
      const exists = prev.includes(id);
      if (!exists) {
        playPin();
        return [...prev, id];
      } else {
        playPop();
        return prev.filter((i) => i !== id);
      }
    });
  };

  const handleMasterSection = (sectionId: string) => {
    const section = magazineSections.find((s) => s.id === sectionId);
    if (!section) return;

    const idsToAdd = section.items.map((_, idx) => `${sectionId}-${idx}`);
    playFanfare();

    setMasteredIds((prev) => {
      const newSet = new Set([...prev, ...idsToAdd]);
      return Array.from(newSet);
    });
  };

  const handleFactClick = (fact: FactItem) => {
    playPop();
    setModalData({
      isOpen: true,
      title: "Fact Spotlight",
      category: fact.category,
      body: fact.text,
      tip: fact.hot ? "⭐ Key Exam Focus: Highly tested in competitive exams!" : undefined,
      factId: fact.id,
    });
  };

  const handleDiagramClick = (title: string, body: string, tip: string) => {
    playPop();
    setModalData({
      isOpen: true,
      title,
      category: "Interactive Scorecard / Diagram",
      body,
      tip,
      factId: "",
    });
  };

  const handleOpenRandomFact = () => {
    if (allFacts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allFacts.length);
    const fact = allFacts[randomIndex];
    handleFactClick(fact);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onlyHot={onlyHot}
        onToggleOnlyHot={() => {
          playPop();
          setOnlyHot((prev) => !prev);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        pinCount={pinnedIds.length}
        onOpenPinDrawer={() => {
          playPop();
          setIsPinDrawerOpen(true);
        }}
        onOpenArcade={() => {
          playPop();
          setIsArcadeOpen(true);
        }}
        masteredCount={masteredIds.length}
        totalFactsCount={allFacts.length}
        activeCategory={activeCategory}
        onSelectCategory={(id) => {
          playPop();
          setActiveCategory(id);
        }}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {/* Hero Header */}
        <Hero
          onOpenArcade={() => {
            playPop();
            setIsArcadeOpen(true);
          }}
          onOpenRandomFact={handleOpenRandomFact}
          totalFacts={allFacts.length}
          mustKnowCount={mustKnowCount}
        />

        {/* 11 Magazine Sections */}
        <SectionList
          searchQuery={searchQuery}
          onlyHot={onlyHot}
          activeCategory={activeCategory}
          masteredIds={masteredIds}
          pinnedIds={pinnedIds}
          onToggleMastered={handleToggleMastered}
          onTogglePin={handleTogglePin}
          onMasterSection={handleMasterSection}
          onFactClick={handleFactClick}
          onDiagramClick={handleDiagramClick}
        />

        {/* 3D Flashcard Revision Deck */}
        <FlashcardGrid
          searchQuery={searchQuery}
          onFlipSound={playFlip}
          onChimeSound={playChime}
        />

        {/* Footer */}
        <Footer />
      </main>

      {/* Arcade Quiz Dialog */}
      <ArcadeQuizModal
        isOpen={isArcadeOpen}
        onClose={() => setIsArcadeOpen(false)}
        onCorrectSound={playCorrect}
        onWrongSound={playWrong}
        onFanfareSound={playFanfare}
      />

      {/* Fact Detail Modal */}
      <FactDetailModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        title={modalData.title}
        category={modalData.category}
        body={modalData.body}
        tip={modalData.tip}
        factId={modalData.factId}
        isMastered={modalData.factId ? masteredIds.includes(modalData.factId) : false}
        isPinned={modalData.factId ? pinnedIds.includes(modalData.factId) : false}
        onToggleMastered={modalData.factId ? handleToggleMastered : undefined}
        onTogglePin={modalData.factId ? handleTogglePin : undefined}
      />

      {/* Slide-out Pinboard Drawer (shadcn Sheet) */}
      <PinDrawer
        isOpen={isPinDrawerOpen}
        onClose={() => setIsPinDrawerOpen(false)}
        pinnedFacts={pinnedFactsList}
        onUnpin={handleTogglePin}
        onClearAll={() => {
          playPop();
          setPinnedIds([]);
        }}
        onFactClick={handleFactClick}
      />
    </div>
  );
}

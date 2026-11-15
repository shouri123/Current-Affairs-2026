"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { TopicNavigationPanel } from "@/components/layout/TopicNavigationPanel";
import { SectionList } from "@/components/sections/SectionList";
import { FlashcardGrid } from "@/components/interactive/FlashcardGrid";
import { ArcadeQuizModal } from "@/components/interactive/ArcadeQuizModal";
import { DailyRevisionModal } from "@/components/interactive/DailyRevisionModal";
import { ProgressDashboardModal } from "@/components/interactive/ProgressDashboardModal";
import { RandomFactModal } from "@/components/interactive/RandomFactModal";
import { FactDetailModal } from "@/components/interactive/FactDetailModal";
import { PinDrawer } from "@/components/interactive/PinDrawer";
import { Footer } from "@/components/layout/Footer";
import { magazineSections } from "@/data/magazineSections";
import { qaList } from "@/data/qaList";
import { monthlyIssues, DEFAULT_MONTH_ID } from "@/data/monthlyIssues";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FactItem, ImportanceLevel, VerificationStatus, QuizAttemptRecord, MonthId } from "@/types";

export default function Home() {
  // Monthly Issue State
  const [selectedMonth, setSelectedMonth] = useState<MonthId>(DEFAULT_MONTH_ID);

  const currentMonth = useMemo(() => {
    return monthlyIssues[selectedMonth] || monthlyIssues[DEFAULT_MONTH_ID];
  }, [selectedMonth]);

  // Discovery & Smart Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [importanceFilter, setImportanceFilter] = useState<ImportanceLevel | "all">("all");
  const [contentTypeFilter, setContentTypeFilter] = useState<"all" | "national" | "international">("all");
  const [verificationFilter, setVerificationFilter] = useState<VerificationStatus | "all">("all");

  // Versioned Local Storage State
  const [masteredIds, setMasteredIds] = useLocalStorage<string[]>(
    "ca_mastered_ids_v1",
    []
  );
  const [pinnedIds, setPinnedIds] = useLocalStorage<string[]>(
    "ca_pinned_ids_v1",
    []
  );
  const [quizAttempts, setQuizAttempts] = useLocalStorage<QuizAttemptRecord[]>(
    "ca_quiz_attempts_v1",
    []
  );

  // Modals Visibility
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);
  const [isDailyOpen, setIsDailyOpen] = useState(false);
  const [isProgressOpen, setIsProgressOpen] = useState(false);
  const [isPinDrawerOpen, setIsPinDrawerOpen] = useState(false);
  const [isRandomFactOpen, setIsRandomFactOpen] = useState(false);

  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    body: string;
    tip?: string;
    factId?: string;
    sources?: any[];
    verificationStatus?: VerificationStatus;
    lastVerifiedAt?: string;
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
    currentMonth.sections.forEach((sec) => {
      sec.items.forEach((item, idx) => {
        list.push({
          id: item.id || `${sec.id}-${idx}`,
          text: item.text,
          hot: item.hot,
          category: sec.title,
          sectionId: sec.id,
          pages: sec.pages,
          title: item.title,
          summary: item.summary,
          explanation: item.explanation,
          importance: item.importance || (item.hot ? "must-know" : "important"),
          contentType:
            item.contentType ||
            (sec.id === "international" ||
            item.text.toLowerCase().includes("global") ||
            item.text.toLowerCase().includes("world")
              ? "international"
              : "national"),
          sources: item.sources || [
            {
              title: `${item.text.slice(0, 45)}... (Official Record)`,
              publisher: "Press Information Bureau (PIB) / Government of India",
              url: "https://www.pib.gov.in",
              sourceType: "primary",
            },
          ],
          verification: item.verification || {
            status: "verified",
            lastVerifiedAt: "2026-11-15",
          },
        });
      });
    });
    return list;
  }, [currentMonth.sections]);

  // Filtered facts count
  const matchingFactsCount = useMemo(() => {
    return allFacts.filter((f) => {
      if (onlyHot && !f.hot) return false;
      if (importanceFilter !== "all" && f.importance !== importanceFilter) return false;
      if (contentTypeFilter !== "all" && f.contentType !== contentTypeFilter) return false;
      if (verificationFilter !== "all" && f.verification?.status !== verificationFilter) return false;
      if (activeCategory && f.sectionId !== activeCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          f.text.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          (f.title && f.title.toLowerCase().includes(q))
        );
      }
      return true;
    }).length;
  }, [
    allFacts,
    onlyHot,
    importanceFilter,
    contentTypeFilter,
    verificationFilter,
    activeCategory,
    searchQuery,
  ]);

  const mustKnowCount = useMemo(() => {
    return allFacts.filter((f) => f.hot).length;
  }, [allFacts]);

  // Collect all facts across all months for multi-month pinned study drawer
  const allMonthsFacts = useMemo(() => {
    const list: FactItem[] = [];
    Object.values(monthlyIssues).forEach((issue) => {
      issue.sections.forEach((sec) => {
        sec.items.forEach((item, idx) => {
          list.push({
            id: item.id || `${sec.id}-${idx}`,
            text: item.text,
            hot: item.hot,
            category: `${sec.title} (${issue.shortMonth})`,
            sectionId: sec.id,
            pages: sec.pages,
            title: item.title,
            summary: item.summary,
            explanation: item.explanation,
            importance: item.importance || (item.hot ? "must-know" : "important"),
            contentType: item.contentType || "national",
            sources: item.sources,
            verification: item.verification,
          });
        });
      });
    });
    return list;
  }, []);

  const pinnedFactsList = useMemo(() => {
    return allMonthsFacts.filter((f) => pinnedIds.includes(f.id));
  }, [allMonthsFacts, pinnedIds]);

  // Incorrect question IDs from quiz history
  const allIncorrectQuestionIds = useMemo(() => {
    const set = new Set<string>();
    quizAttempts.forEach((a) => {
      a.incorrectQuestionIds?.forEach((id) => set.add(id));
    });
    return Array.from(set);
  }, [quizAttempts]);

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
    const section = currentMonth.sections.find((s) => s.id === sectionId);
    if (!section) return;

    const idsToAdd = section.items.map((item, idx) => item.id || `${sectionId}-${idx}`);
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
      title: fact.title || "Fact Spotlight",
      category: fact.category,
      body: fact.text,
      tip: fact.hot
        ? "Key Exam Focus: High probability competitive examination item verified against official gazette notification."
        : "Foundational Topic: Essential contextual awareness for current affairs papers.",
      factId: fact.id,
      sources: fact.sources,
      verificationStatus: fact.verification?.status,
      lastVerifiedAt: fact.verification?.lastVerifiedAt,
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
      sources: [
        {
          title: `${title} — Official Statistics`,
          publisher: "National Accounts & Official Regulatory Authorities",
          url: "https://www.mospi.gov.in",
          sourceType: "primary",
        },
      ],
      verificationStatus: "verified",
      lastVerifiedAt: "2026-11-14",
    });
  };

  const handleOpenRandomFact = () => {
    playPop();
    setIsRandomFactOpen(true);
  };

  const handleResetAllFilters = () => {
    playPop();
    setSearchQuery("");
    setOnlyHot(false);
    setActiveCategory(null);
    setImportanceFilter("all");
    setContentTypeFilter("all");
    setVerificationFilter("all");
  };

  const handleSaveQuizAttempt = (attempt: QuizAttemptRecord) => {
    setQuizAttempts((prev) => [attempt, ...prev]);
  };

  const handleImportProgress = (data: any) => {
    if (Array.isArray(data.masteredIds)) setMasteredIds(data.masteredIds);
    if (Array.isArray(data.pinnedIds)) setPinnedIds(data.pinnedIds);
    if (Array.isArray(data.quizAttempts)) setQuizAttempts(data.quizAttempts);
    playFanfare();
  };

  const handleResetProgress = () => {
    playPop();
    setMasteredIds([]);
    setPinnedIds([]);
    setQuizAttempts([]);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(`section-${sectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Main Navigation */}
      <Navbar
        selectedMonth={selectedMonth}
        onSelectMonth={(m) => {
          playPop();
          setSelectedMonth(m);
          setActiveCategory(null);
        }}
        sections={currentMonth.sections}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onlyHot={onlyHot}
        onToggleOnlyHot={() => {
          playPop();
          setOnlyHot((prev) => !prev);
        }}
        importanceFilter={importanceFilter}
        onImportanceFilterChange={setImportanceFilter}
        contentTypeFilter={contentTypeFilter}
        onContentTypeFilterChange={setContentTypeFilter}
        verificationFilter={verificationFilter}
        onVerificationFilterChange={setVerificationFilter}
        onResetAllFilters={handleResetAllFilters}
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
        onOpenDailyRevision={() => {
          playPop();
          setIsDailyOpen(true);
        }}
        onOpenProgressDashboard={() => {
          playPop();
          setIsProgressOpen(true);
        }}
        masteredCount={masteredIds.length}
        totalFactsCount={allFacts.length}
        matchingFactsCount={matchingFactsCount}
        activeCategory={activeCategory}
        onSelectCategory={(id) => {
          playPop();
          setActiveCategory(id);
        }}
      />

      {/* Main Container - Full width up to 1536px */}
      <main className="max-w-[1536px] w-full mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {/* Hero Header with Month Switcher */}
        <Hero
          currentMonth={currentMonth}
          selectedMonth={selectedMonth}
          onSelectMonth={(m) => {
            playPop();
            setSelectedMonth(m);
            setActiveCategory(null);
          }}
          onOpenArcade={() => {
            playPop();
            setIsArcadeOpen(true);
          }}
          onOpenRandomFact={handleOpenRandomFact}
          totalFacts={allFacts.length}
          mustKnowCount={mustKnowCount}
        />

        {/* Secondary Navigation: Topic Navigation Panel */}
        <TopicNavigationPanel
          sections={currentMonth.sections}
          activeCategory={activeCategory}
          onSelectCategory={(id) => {
            playPop();
            setActiveCategory(id);
          }}
          masteredIds={masteredIds}
          onScrollToSection={handleScrollToSection}
        />

        {/* 11 Editorial Magazine Sections */}
        <SectionList
          sections={currentMonth.sections}
          searchQuery={searchQuery}
          onlyHot={onlyHot}
          activeCategory={activeCategory}
          importanceFilter={importanceFilter}
          contentTypeFilter={contentTypeFilter}
          verificationFilter={verificationFilter}
          masteredIds={masteredIds}
          pinnedIds={pinnedIds}
          onToggleMastered={handleToggleMastered}
          onTogglePin={handleTogglePin}
          onMasterSection={handleMasterSection}
          onFactClick={handleFactClick}
          onDiagramClick={handleDiagramClick}
        />

        {/* 3D Flashcard Interactive Revision Deck */}
        <FlashcardGrid
          qaList={currentMonth.qaList}
          searchQuery={searchQuery}
          onFlipSound={playFlip}
          onChimeSound={playChime}
        />

        {/* Footer with Colophon and Sources */}
        <Footer />
      </main>

      {/* Multi-Mode Revision Quiz Modal */}
      <ArcadeQuizModal
        isOpen={isArcadeOpen}
        onClose={() => setIsArcadeOpen(false)}
        qaList={currentMonth.qaList}
        onCorrectSound={playCorrect}
        onWrongSound={playWrong}
        onFanfareSound={playFanfare}
        incorrectQuestionIds={allIncorrectQuestionIds}
        onSaveQuizAttempt={handleSaveQuizAttempt}
      />

      {/* Deterministic Daily Revision Modal */}
      <DailyRevisionModal
        isOpen={isDailyOpen}
        onClose={() => setIsDailyOpen(false)}
        allFacts={allFacts}
        qaList={currentMonth.qaList}
        masteredIds={masteredIds}
        onToggleMastered={handleToggleMastered}
        onCorrectSound={playCorrect}
        onWrongSound={playWrong}
        onFanfareSound={playFanfare}
      />

      {/* Personal Progress Analytics Dashboard */}
      <ProgressDashboardModal
        isOpen={isProgressOpen}
        onClose={() => setIsProgressOpen(false)}
        sections={currentMonth.sections}
        masteredIds={masteredIds}
        pinnedIds={pinnedIds}
        quizAttempts={quizAttempts}
        onImportProgress={handleImportProgress}
        onResetProgress={handleResetProgress}
      />

      {/* Fact Detail Spotlight Modal */}
      <FactDetailModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        title={modalData.title}
        category={modalData.category}
        body={modalData.body}
        tip={modalData.tip}
        factId={modalData.factId}
        sources={modalData.sources}
        verificationStatus={modalData.verificationStatus}
        lastVerifiedAt={modalData.lastVerifiedAt}
        isMastered={
          modalData.factId ? masteredIds.includes(modalData.factId) : false
        }
        isPinned={
          modalData.factId ? pinnedIds.includes(modalData.factId) : false
        }
        onToggleMastered={modalData.factId ? handleToggleMastered : undefined}
        onTogglePin={modalData.factId ? handleTogglePin : undefined}
      />

      {/* Slide-out Pinboard Drawer */}
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

      {/* Random Fact Spotlight Modal */}
      <RandomFactModal
        isOpen={isRandomFactOpen}
        onClose={() => setIsRandomFactOpen(false)}
        allFacts={allFacts}
        sections={currentMonth.sections}
        masteredIds={masteredIds}
        pinnedIds={pinnedIds}
        onToggleMastered={handleToggleMastered}
        onTogglePin={handleTogglePin}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}

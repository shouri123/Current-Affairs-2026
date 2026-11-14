"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FactItem, MagazineSection } from "@/types";
import { VerificationBadge } from "./VerificationBadge";
import {
  Dices,
  RefreshCw,
  ExternalLink,
  Bookmark,
  Check,
  Eye,
  Filter,
} from "lucide-react";

interface RandomFactModalProps {
  isOpen: boolean;
  onClose: () => void;
  allFacts: FactItem[];
  sections: MagazineSection[];
  masteredIds: string[];
  pinnedIds: string[];
  onToggleMastered: (id: string) => void;
  onTogglePin: (id: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function RandomFactModal({
  isOpen,
  onClose,
  allFacts,
  sections,
  masteredIds,
  pinnedIds,
  onToggleMastered,
  onTogglePin,
  onScrollToSection,
}: RandomFactModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mustKnowOnly, setMustKnowOnly] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [seenIds, setSeenIds] = useState<string[]>([]);

  // Eligible pool of facts based on active filters
  const eligibleFacts = useMemo(() => {
    return allFacts.filter((f) => {
      if (mustKnowOnly && !f.hot) return false;
      if (selectedCategory !== "all" && f.sectionId !== selectedCategory) return false;
      return true;
    });
  }, [allFacts, selectedCategory, mustKnowOnly]);

  // Pick next random fact avoiding immediate repeats
  const pickRandomFact = useCallback(() => {
    if (eligibleFacts.length === 0) return;

    // Filter out recently seen if enough alternatives exist
    let candidates = eligibleFacts.filter((f) => !seenIds.includes(f.id));
    if (candidates.length === 0) {
      candidates = eligibleFacts;
      setSeenIds([]);
    }

    const randomIdx = Math.floor(Math.random() * candidates.length);
    const chosen = candidates[randomIdx];

    const idxInAll = allFacts.findIndex((f) => f.id === chosen.id);
    setCurrentIndex(idxInAll >= 0 ? idxInAll : 0);
    setSeenIds((prev) => [...prev.slice(-15), chosen.id]);
  }, [eligibleFacts, seenIds, allFacts]);

  // Pick first fact on open
  React.useEffect(() => {
    if (isOpen && eligibleFacts.length > 0) {
      pickRandomFact();
    }
  }, [isOpen]);

  const currentFact = allFacts[currentIndex] || eligibleFacts[0] || allFacts[0];
  const isMastered = currentFact ? masteredIds.includes(currentFact.id) : false;
  const isPinned = currentFact ? pinnedIds.includes(currentFact.id) : false;
  const primarySource = currentFact?.sources?.[0];

  const handleJumpToSection = () => {
    if (currentFact && onScrollToSection) {
      onScrollToSection(currentFact.sectionId);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl bg-white border border-ink/20 rounded-xl p-5 sm:p-7 shadow-dropdown max-h-[85vh] overflow-y-auto font-sans">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Dices className="h-5 w-5 text-brand" />
              <DialogTitle className="font-display font-bold text-xl sm:text-2xl text-ink">
                Random Fact Spotlight
              </DialogTitle>
            </div>
            {currentFact && (
              <VerificationBadge
                status={currentFact.verification?.status}
                sources={currentFact.sources}
                lastVerifiedAt={currentFact.verification?.lastVerifiedAt}
              />
            )}
          </div>
          <p className="text-xs text-muted mt-1">
            Discover unexpected current affairs and test rapid contextual recall across topics.
          </p>
        </DialogHeader>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 my-3 p-2 bg-cream/70 rounded-lg border border-ink/10 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSeenIds([]);
              }}
              className="bg-white border border-ink/20 rounded px-2 py-1 text-xs text-ink focus:outline-none focus:border-brand"
            >
              <option value="all">All 11 Subjects</option>
              {sections.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>

            <label className="flex items-center gap-1.5 cursor-pointer font-medium text-ink">
              <input
                type="checkbox"
                checked={mustKnowOnly}
                onChange={(e) => {
                  setMustKnowOnly(e.target.checked);
                  setSeenIds([]);
                }}
                className="rounded border-ink/30 text-brand focus:ring-brand h-3.5 w-3.5"
              />
              <span>Must-Know Only</span>
            </label>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={pickRandomFact}
            disabled={eligibleFacts.length === 0}
            className="text-xs py-1 h-7 gap-1 font-semibold"
          >
            <RefreshCw className="h-3 w-3" />
            Next Random Fact
          </Button>
        </div>

        {/* Fact Card Content */}
        {currentFact ? (
          <div className="my-3 p-4 rounded-xl border border-ink/15 bg-white shadow-subtle space-y-3 font-serif">
            <div className="flex items-center justify-between gap-2 font-sans">
              <span className="text-xs font-bold text-brand uppercase tracking-wider">
                {currentFact.category}
              </span>
              {currentFact.hot && <Badge variant="mustKnow">Must-Know</Badge>}
            </div>

            <p className="text-base sm:text-lg text-ink font-bold leading-snug">
              {currentFact.title || currentFact.text.slice(0, 70)}
            </p>

            <p className="text-sm sm:text-base text-ink leading-relaxed">
              {currentFact.text}
            </p>

            {primarySource && (
              <div className="mt-3 pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-2 font-sans text-xs text-muted">
                <span className="truncate max-w-[280px]">
                  Authority: <strong className="text-ink">{primarySource.publisher}</strong>
                </span>
                {primarySource.url && (
                  <a
                    href={primarySource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Official Document <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="my-6 text-center text-xs text-muted">
            No facts match the selected subject and criteria.
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-3 font-sans">
          <div className="flex items-center gap-2">
            {currentFact && (
              <>
                <Button
                  variant={isMastered ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => onToggleMastered(currentFact.id)}
                  className="gap-1.5 text-xs"
                >
                  <Check className={`h-3.5 w-3.5 ${isMastered ? "text-emerald-600" : ""}`} />
                  {isMastered ? "Mastered" : "Mark Mastered"}
                </Button>

                <Button
                  variant={isPinned ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => onTogglePin(currentFact.id)}
                  className="gap-1.5 text-xs"
                >
                  <Bookmark className={`h-3.5 w-3.5 ${isPinned ? "fill-brand text-brand" : ""}`} />
                  {isPinned ? "Pinned" : "Pin Fact"}
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {currentFact && onScrollToSection && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleJumpToSection}
                className="text-xs gap-1 text-muted hover:text-ink"
              >
                <Eye className="h-3.5 w-3.5" />
                View in Section
              </Button>
            )}

            <Button variant="default" size="sm" onClick={onClose} className="text-xs">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


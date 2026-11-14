"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VerificationBadge } from "./VerificationBadge";
import { Bookmark, Check, ExternalLink, Lightbulb, Share2 } from "lucide-react";
import { SourceReference, VerificationStatus } from "@/types";

interface FactDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  body: string;
  tip?: string;
  factId?: string;
  isMastered?: boolean;
  isPinned?: boolean;
  sources?: SourceReference[];
  verificationStatus?: VerificationStatus;
  lastVerifiedAt?: string;
  onToggleMastered?: (id: string) => void;
  onTogglePin?: (id: string) => void;
}

export function FactDetailModal({
  isOpen,
  onClose,
  title,
  category,
  body,
  tip,
  factId,
  isMastered,
  isPinned,
  sources = [],
  verificationStatus = "verified",
  lastVerifiedAt = "2026-11-14",
  onToggleMastered,
  onTogglePin,
}: FactDetailModalProps) {
  const primarySource = sources[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Page link copied to clipboard!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl bg-white border border-ink/20 rounded-xl p-5 sm:p-7 shadow-dropdown max-h-[85vh] overflow-y-auto">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-sans font-bold text-brand uppercase tracking-wider">
              {category}
            </span>
            <VerificationBadge
              status={verificationStatus}
              sources={sources}
              lastVerifiedAt={lastVerifiedAt}
            />
          </div>
          <DialogTitle className="font-display font-bold text-xl sm:text-2xl text-ink mt-1">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="my-4 font-serif space-y-4">
          <p className="text-ink text-base sm:text-lg leading-relaxed">{body}</p>

          {tip && (
            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs font-sans text-amber-950 flex items-start gap-2.5">
              <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-900 mb-0.5">
                  Examination Preparation Context
                </strong>
                <span>{tip}</span>
              </div>
            </div>
          )}

          {/* Sourced documentation box */}
          {primarySource && (
            <div className="p-3 bg-zinc-50 border border-ink/15 rounded-lg text-xs font-sans">
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">
                Primary Documentation Citation
              </span>
              <p className="font-semibold text-ink">{primarySource.title}</p>
              <div className="flex items-center justify-between text-muted mt-1 text-[11px]">
                <span>Authority: {primarySource.publisher}</span>
                {primarySource.url && (
                  <a
                    href={primarySource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    View Official Document <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-4 font-sans">
          <div className="flex items-center gap-2">
            {factId && onToggleMastered && (
              <Button
                variant={isMastered ? "secondary" : "outline"}
                size="sm"
                onClick={() => onToggleMastered(factId)}
                className="gap-1.5 text-xs"
              >
                <Check className={`h-3.5 w-3.5 ${isMastered ? "text-emerald-600" : ""}`} />
                {isMastered ? "Mastered" : "Mark as Mastered"}
              </Button>
            )}

            {factId && onTogglePin && (
              <Button
                variant={isPinned ? "secondary" : "outline"}
                size="sm"
                onClick={() => onTogglePin(factId)}
                className="gap-1.5 text-xs"
              >
                <Bookmark className={`h-3.5 w-3.5 ${isPinned ? "fill-brand text-brand" : ""}`} />
                {isPinned ? "Pinned" : "Pin Fact"}
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyLink}
              className="text-xs gap-1 text-muted hover:text-ink"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </Button>
            <Button variant="default" size="sm" onClick={onClose} className="text-xs">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Bookmark, Copy, CheckCheck, Lightbulb } from "lucide-react";

interface FactDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  body: string;
  tip?: string;
  factId?: string;
  isMastered: boolean;
  isPinned: boolean;
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
  onToggleMastered,
  onTogglePin,
}: FactDetailModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${title}\n${category}\n\n${body}${tip ? `\n\nMemory Hook: ${tip}` : ""}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-cream border-4 border-ink p-6 rounded-3xl">
        <DialogHeader className="border-b-2 border-ink pb-3">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="default" className="text-[10px] uppercase">
              Fact Spotlight
            </Badge>
            {category && (
              <span className="text-xs font-bold text-ink/70">
                {category}
              </span>
            )}
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-black text-ink">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Fact Body */}
        <div className="bg-white border-2 border-ink rounded-2xl p-4 text-sm sm:text-base font-semibold leading-relaxed text-ink shadow-brutal-sm my-2">
          {body}
        </div>

        {/* Memory Hook Tip */}
        {tip && (
          <div className="bg-popMint/30 border-2 border-ink rounded-xl p-3 text-xs sm:text-sm font-bold text-ink flex items-start gap-2 shadow-brutal-sm">
            <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold uppercase text-[10px] text-emerald-800 block">
                Exam Memory Hook:
              </span>
              <span>{tip}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t-2 border-ink mt-2">
          <div className="flex items-center gap-2">
            {factId && onToggleMastered && (
              <Button
                variant={isMastered ? "mint" : "outline"}
                size="sm"
                onClick={() => onToggleMastered(factId)}
                className="gap-1.5"
              >
                <Check className={`h-4 w-4 ${isMastered ? "stroke-[3]" : ""}`} />
                <span>{isMastered ? "Mastered" : "Mark Mastered"}</span>
              </Button>
            )}

            {factId && onTogglePin && (
              <Button
                variant={isPinned ? "default" : "outline"}
                size="sm"
                onClick={() => onTogglePin(factId)}
                className="gap-1.5"
              >
                <Bookmark className={`h-4 w-4 ${isPinned ? "fill-ink" : ""}`} />
                <span>{isPinned ? "Pinned" : "Pin Fact"}</span>
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-1.5 bg-white"
          >
            {copied ? (
              <>
                <CheckCheck className="h-4 w-4 text-emerald-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    const textToCopy = `${title}\n${category}\n\n${body}${tip ? `\n\nReference: ${tip}` : ""}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-cream border border-ink/20 p-6 rounded-xl shadow-dropdown">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="default" className="text-[10px]">
              {category || "Current Affairs"}
            </Badge>
          </div>
          <DialogTitle className="text-xl font-bold font-display text-ink">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Fact Body */}
        <div className="bg-white border border-ink/15 rounded-lg p-4 text-sm sm:text-base font-serif leading-relaxed text-ink my-2">
          {body}
        </div>

        {/* Reference / Memory Hook Tip */}
        {tip && (
          <div className="bg-zinc-50 border border-ink/15 rounded-lg p-3 text-xs sm:text-sm font-sans text-muted">
            <div className="font-semibold text-ink text-xs uppercase tracking-wider mb-1">
              Examination Relevance:
            </div>
            <div>{tip}</div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-ink/15 mt-2 font-sans">
          <div className="flex items-center gap-2">
            {factId && onToggleMastered && (
              <Button
                variant={isMastered ? "default" : "outline"}
                size="sm"
                onClick={() => onToggleMastered(factId)}
                className="text-xs"
              >
                {isMastered ? "Completed" : "Mark Complete"}
              </Button>
            )}

            {factId && onTogglePin && (
              <Button
                variant={isPinned ? "brand" : "outline"}
                size="sm"
                onClick={() => onTogglePin(factId)}
                className="text-xs"
              >
                {isPinned ? "Pinned" : "Pin Item"}
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="text-xs"
          >
            {copied ? "Copied" : "Copy Text"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Bookmark, Copy, Trash2, Download, CheckCheck, X } from "lucide-react";
import { FactItem } from "@/types";

interface PinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pinnedFacts: FactItem[];
  onUnpin: (id: string) => void;
  onClearAll: () => void;
  onFactClick: (fact: FactItem) => void;
}

export function PinDrawer({
  isOpen,
  onClose,
  pinnedFacts,
  onUnpin,
  onClearAll,
  onFactClick,
}: PinDrawerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    if (pinnedFacts.length === 0) return;
    const text = pinnedFacts
      .map((f, i) => `${i + 1}. [${f.category}] ${f.text}`)
      .join("\n\n");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (pinnedFacts.length === 0) return;
    const md = `# September 2026 Current Affairs - Pinned High-Yield Facts\nGenerated from Neo-Brutalist Revision Magazine\n\n` +
      pinnedFacts.map((f, i) => `### ${i + 1}. ${f.category}\n${f.text}\n`).join("\n");

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "September-2026-Pinned-Current-Affairs.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div>
          <SheetHeader>
            <div className="flex items-center gap-2">
              <SheetTitle>
                <Bookmark className="h-5 w-5 fill-ink" />
                <span>Pinned Must-Knows</span>
              </SheetTitle>
              <span className="bg-popYellow text-ink text-xs font-black px-2 py-0.5 rounded-full border border-ink shadow-brutal-sm">
                {pinnedFacts.length}
              </span>
            </div>
            <SheetDescription>
              Your personal study cheat sheet. Review, copy, or export anytime!
            </SheetDescription>
          </SheetHeader>

          {/* Quick Actions Bar */}
          {pinnedFacts.length > 0 && (
            <div className="flex items-center gap-2 py-3 border-b-2 border-ink">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyAll}
                className="gap-1 flex-1 bg-white text-xs"
              >
                {copied ? <CheckCheck className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied!" : "Copy All"}</span>
              </Button>

              <Button
                variant="mint"
                size="sm"
                onClick={handleDownload}
                className="gap-1 flex-1 text-xs"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export .md</span>
              </Button>

              <Button
                variant="coral"
                size="sm"
                onClick={onClearAll}
                title="Clear all pinned facts"
                className="px-2.5 text-xs"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          )}
        </div>

        {/* Scrollable Pinned Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 no-scrollbar">
          {pinnedFacts.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="text-4xl mb-3">📌</div>
              <h4 className="font-display font-black text-lg text-ink mb-1">
                No facts pinned yet!
              </h4>
              <p className="text-xs font-medium text-ink/60 max-w-xs mx-auto">
                Click the bookmark icon on any card to save it here for rapid revision.
              </p>
            </div>
          ) : (
            pinnedFacts.map((fact) => (
              <div
                key={fact.id}
                onClick={() => onFactClick(fact)}
                className="bg-white border-2 border-ink rounded-xl p-3 shadow-brutal-sm hover:bg-cream transition-colors cursor-pointer relative group"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="bg-popCyan text-ink text-[9px] font-black uppercase px-2 py-0.5 rounded border border-ink">
                    {fact.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUnpin(fact.id);
                    }}
                    title="Remove from pinned"
                    className="h-5 w-5 rounded bg-zinc-100 hover:bg-popCoral hover:text-white border border-ink flex items-center justify-center transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-xs font-bold leading-relaxed text-ink line-clamp-3">
                  {fact.text}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t-2 border-ink text-center text-[11px] font-bold text-ink/60">
          Saved automatically to your local browser storage 💾
        </div>
      </SheetContent>
    </Sheet>
  );
}


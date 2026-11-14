"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
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
    const md = `# September 2026 Current Affairs — Pinned Reference Items\nSource: IAS Academia of Success, Kolkata\n\n` +
      pinnedFacts.map((f, i) => `### ${i + 1}. ${f.category}\n${f.text}\n`).join("\n");

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "September-2026-Current-Affairs-Pinned.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col justify-between overflow-hidden font-sans">
        {/* Header */}
        <div>
          <SheetHeader>
            <div className="flex items-center gap-2">
              <SheetTitle>
                Pinned Items
              </SheetTitle>
              <span className="bg-zinc-100 text-ink text-xs font-semibold px-2 py-0.5 rounded border border-ink/15">
                {pinnedFacts.length}
              </span>
            </div>
            <SheetDescription>
              Bookmarked regulatory notifications and macroeconomic data points.
            </SheetDescription>
          </SheetHeader>

          {/* Quick Actions Bar */}
          {pinnedFacts.length > 0 && (
            <div className="flex items-center gap-2 py-3 border-b border-ink/15">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyAll}
                className="flex-1 text-xs"
              >
                {copied ? "Copied" : "Copy All"}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="flex-1 text-xs"
              >
                Export Markdown
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onClearAll}
                title="Clear all pinned items"
                className="px-2.5 text-xs text-rose-700"
              >
                Clear
              </Button>
            </div>
          )}
        </div>

        {/* Scrollable Pinned Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 no-scrollbar font-serif">
          {pinnedFacts.length === 0 ? (
            <div className="text-center py-16 px-4">
              <h4 className="font-display font-semibold text-base text-ink mb-1">
                No pinned items
              </h4>
              <p className="text-xs text-muted max-w-xs mx-auto font-sans">
                Select the pin icon on any notification to keep it in this revision list.
              </p>
            </div>
          ) : (
            pinnedFacts.map((fact) => (
              <div
                key={fact.id}
                onClick={() => onFactClick(fact)}
                className="bg-white border border-ink/15 rounded-lg p-3 hover:border-ink/40 transition-colors cursor-pointer relative"
              >
                <div className="flex items-start justify-between gap-2 mb-1 font-sans">
                  <span className="text-[10px] font-semibold text-muted uppercase">
                    {fact.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUnpin(fact.id);
                    }}
                    title="Remove from pinned"
                    className="h-4 w-4 rounded hover:bg-zinc-100 text-muted hover:text-ink flex items-center justify-center"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-ink line-clamp-3">
                  {fact.text}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-ink/15 text-center text-xs text-muted font-sans">
          Stored locally in your browser session.
        </div>
      </SheetContent>
    </Sheet>
  );
}

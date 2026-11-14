"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-8 mb-8 text-center no-print">
      <div className="gazette-card bg-white p-6 border border-ink/15 rounded-xl max-w-4xl mx-auto shadow-subtle text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-ink/15">
          <div>
            <div className="font-display font-bold text-lg text-ink">
              Current Affairs Gazette • September 2026
            </div>
            <div className="text-xs text-muted font-sans mt-0.5">
              IAS Academia of Success, Kolkata • Volume IX, Issue 9
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-1.5 text-xs font-sans"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span>Top</span>
          </Button>
        </div>

        <div className="pt-4 text-xs text-muted font-serif leading-relaxed">
          <p className="mb-2">
            Data sources: Press Information Bureau (PIB), Ministry of Statistics and Programme Implementation (MoSPI National Accounts), Reserve Bank of India (RBI Directions), Ministry of External Affairs (MEA), and Union Cabinet communiqués.
          </p>
          <p>
            Compiled strictly for Civil Services, Banking, and State Examination preparation.
          </p>
        </div>
      </div>
    </footer>
  );
}

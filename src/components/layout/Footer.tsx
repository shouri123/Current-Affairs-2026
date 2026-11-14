"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-8 mb-6 text-center no-print">
      <div className="comic-card bg-white rounded-3xl border-3 sm:border-4 border-ink p-6 sm:p-7 shadow-brutal-lg max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl sm:text-3xl">🚀</span>
          <h3 className="font-display font-black text-xl sm:text-2xl text-ink">
            Current Affairs 2026 Funky Edition
          </h3>
          <span className="text-2xl sm:text-3xl">✨</span>
        </div>

        <p className="text-xs sm:text-sm font-bold text-ink/70 max-w-lg mx-auto leading-relaxed mb-5">
          Hand-crafted neo-brutalist interactive magazine covering all high-yield national, international, banking, sports, and defence updates from September 2026.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-5 text-xs font-black">
          <span className="bg-popYellow px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            ⚡ Next.js 14+
          </span>
          <span className="bg-popCyan px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            🎨 Tailwind CSS
          </span>
          <span className="bg-popPink text-white px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            🧩 shadcn/ui
          </span>
          <span className="bg-popMint px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            🎬 GSAP + ScrollTrigger
          </span>
          <span className="bg-popPurple text-ink px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            💫 Framer Motion
          </span>
          <span className="bg-popOrange px-2.5 py-1 rounded-xl border border-ink shadow-brutal-sm">
            🎵 Tone.js Synth
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            variant="default"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </Button>
        </div>

        <div className="mt-5 pt-3.5 border-t-2 border-ink text-[11px] font-bold text-ink/50 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="h-3.5 w-3.5 text-popCoral fill-popCoral" />
          <span>for UPSC, SSC, Banking & Competitive Exam Aspirants</span>
        </div>
      </div>
    </footer>
  );
}

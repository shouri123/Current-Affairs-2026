"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, Printer, Shuffle, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenArcade: () => void;
  onOpenRandomFact: () => void;
}

export function Hero({ onOpenArcade, onOpenRandomFact }: HeroProps) {
  const doodleRef1 = useRef<HTMLDivElement>(null);
  const doodleRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (doodleRef1.current) {
        gsap.to(doodleRef1.current, {
          y: -10,
          rotation: 3,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
      if (doodleRef2.current) {
        gsap.to(doodleRef2.current, {
          y: -8,
          rotation: -4,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="comic-card bg-gradient-to-br from-popYellow via-amber-200 to-popOrange rounded-3xl p-6 sm:p-10 mb-10 relative overflow-hidden">
      {/* Floating Decorative Badges */}
      <div
        ref={doodleRef1}
        className="absolute -top-3 right-6 sm:right-16 bg-popPink text-white font-display font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full border-3 border-ink shadow-brutal rotate-3 hidden sm:flex items-center gap-1.5 z-10"
      >
        <Flame className="h-4 w-4" /> 100% Exam Revision Ready!
      </div>
      <div
        ref={doodleRef2}
        className="absolute bottom-4 right-4 sm:right-10 bg-popMint text-ink font-display font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-2xl border-3 border-ink shadow-brutal -rotate-3 hidden md:flex items-center gap-1 z-10"
      >
        <Sparkles className="h-4 w-4" /> 11 Funky Categories
      </div>

      <div className="max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-ink px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
          <span>🗞️</span>
          <span>Monthly Digest • Issue 09/2026</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] mb-4 tracking-tight">
          September 2026 <br />
          <span className="text-white drop-shadow-[3px_3px_0px_#18181B] bg-ink px-2.5 py-0.5 rounded-xl inline-block mt-1">
            Current Affairs
          </span>{" "}
          Magazine
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-bold text-ink/90 leading-relaxed mb-6 max-w-2xl">
          The ultimate neo-brutalist interactive revision digest for Banking, SSC, UPSC, and State PSCs.
          Packed with high-yield facts, animated macro charts, 3D exam flashcards, and audio effects!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Button
            variant="pink"
            size="lg"
            onClick={onOpenArcade}
            className="gap-2"
          >
            <Flame className="h-5 w-5" /> Start Daily Quiz
          </Button>

          <Button
            variant="cyan"
            size="lg"
            onClick={onOpenRandomFact}
            className="gap-2"
          >
            <Shuffle className="h-5 w-5" /> Surprise Me!
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handlePrint}
            className="gap-2"
          >
            <Printer className="h-5 w-5" /> Print / Save PDF
          </Button>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="bg-white/90 border-2 border-ink rounded-2xl p-3 shadow-brutal-sm">
            <div className="text-[11px] font-bold text-ink/70 uppercase">Q1 GDP Growth</div>
            <div className="font-display font-black text-xl sm:text-2xl text-ink">7.8%</div>
            <div className="text-[10px] font-bold text-emerald-600">Fastest major econ</div>
          </div>
          <div className="bg-white/90 border-2 border-ink rounded-2xl p-3 shadow-brutal-sm">
            <div className="text-[11px] font-bold text-ink/70 uppercase">Q1 Real GVA</div>
            <div className="font-display font-black text-xl sm:text-2xl text-ink">8.2%</div>
            <div className="text-[10px] font-bold text-sky-600">+0.4% over GDP</div>
          </div>
          <div className="bg-white/90 border-2 border-ink rounded-2xl p-3 shadow-brutal-sm">
            <div className="text-[11px] font-bold text-ink/70 uppercase">August Retail CPI</div>
            <div className="font-display font-black text-xl sm:text-2xl text-ink">4.82%</div>
            <div className="text-[10px] font-bold text-purple-600">Inside RBI 2-6% band</div>
          </div>
          <div className="bg-white/90 border-2 border-ink rounded-2xl p-3 shadow-brutal-sm">
            <div className="text-[11px] font-bold text-ink/70 uppercase">August UPI Record</div>
            <div className="font-display font-black text-xl sm:text-2xl text-ink">24.51 B</div>
            <div className="text-[10px] font-bold text-orange-600">₹29.82 Trillion</div>
          </div>
        </div>
      </div>
    </header>
  );
}


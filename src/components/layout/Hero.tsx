"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpenCheck, Dices, Newspaper, Printer, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

interface HeroProps {
  onOpenArcade: () => void;
  onOpenRandomFact: () => void;
  totalFacts: number;
  mustKnowCount: number;
}

export function Hero({
  onOpenArcade,
  onOpenRandomFact,
  totalFacts,
  mustKnowCount,
}: HeroProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="gazette-card gazette-hero bg-white p-6 sm:p-8 lg:p-9 mb-9 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Publication Details & Sourced Benchmarks */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-extrabold tracking-[0.16em] text-ink uppercase mb-4 px-3 py-1.5 border-2 border-ink bg-popYellow shadow-brutal-sm rounded-md">
            <Newspaper className="h-3.5 w-3.5" />
            IAS Academia of Success <span className="opacity-50">/</span> Monthly Gazette <span className="opacity-50">/</span> Issue 09
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ink leading-[1.06] tracking-tight mb-4 max-w-3xl">
            September 2026 <span className="relative z-0 inline-block">Current Affairs<span className="absolute left-0 -bottom-1 h-2 w-full bg-popPink/70 -z-10" /></span> Gazette
          </h1>

          <p className="text-sm sm:text-base text-ink/80 font-serif leading-relaxed mb-6 max-w-xl">
            A sharp, source-led briefing on policy decisions, macroeconomic signals, bilateral agreements and the developments shaping September 2026.
          </p>
          <div className="flex flex-wrap gap-2 mb-6 text-[11px] font-sans font-bold">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popMint/70"><Sparkles className="h-3.5 w-3.5" /> Exam-focused intelligence</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popCyan/60"><TrendingUp className="h-3.5 w-3.5" /> {totalFacts} curated entries</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border-2 border-ink rounded-md bg-popPurple/30"><ShieldCheck className="h-3.5 w-3.5" /> {mustKnowCount} priority facts</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6 font-sans">
            <Button
              variant="default"
              size="default"
              onClick={onOpenArcade}
              className="gap-2 shadow-brutal-md hover:-translate-y-0.5 transition-transform"
            >
              <BookOpenCheck className="h-4 w-4" /> Examine via Quiz <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={onOpenRandomFact}
              className="gap-2 bg-popPink/20 hover:bg-popPink/35"
            >
              <Dices className="h-4 w-4" /> Explore a Fact
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={handlePrint}
              className="gap-2"
            >
              <Printer className="h-4 w-4" /> Print Summary
            </Button>
          </div>

          {/* Sourced Macroeconomic Indicators - With units, dates and official sources */}
          <div className="pt-4 border-t border-ink/10">
            <div className="text-xs font-sans font-semibold text-muted uppercase tracking-wider mb-2.5">
              Verified Key Economic Indicators (August–September 2026)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
              <div className="metric-tile p-2.5 rounded-lg border border-ink/10 bg-popYellow/35">
                <div className="text-xs text-muted">Real GDP Growth</div>
                <div className="font-bold text-lg text-ink">7.8% YoY</div>
                <div className="text-[11px] text-muted">Q1 FY27 (MoSPI)</div>
              </div>
              <div className="metric-tile p-2.5 rounded-lg border border-ink/10 bg-popCyan/25">
                <div className="text-xs text-muted">Real GVA Growth</div>
                <div className="font-bold text-lg text-ink">8.2% YoY</div>
                <div className="text-[11px] text-muted">Q1 FY27 (MoSPI)</div>
              </div>
              <div className="metric-tile p-2.5 rounded-lg border border-ink/10 bg-popPink/25">
                <div className="text-xs text-muted">Retail CPI Inflation</div>
                <div className="font-bold text-lg text-ink">4.82% YoY</div>
                <div className="text-[11px] text-muted">August 2026 (MoSPI)</div>
              </div>
              <div className="metric-tile p-2.5 rounded-lg border border-ink/10 bg-popMint/35">
                <div className="text-xs text-muted">UPI Volume</div>
                <div className="font-bold text-lg text-ink">24.51 Billion</div>
                <div className="text-[11px] text-muted">₹29.82T (NPCI)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real Product Photograph of the Published Magazine */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md rounded-xl overflow-hidden border-2 border-ink shadow-brutal-lg bg-popPurple/20 transition-transform duration-300 hover:-rotate-1 hover:translate-x-1 hover:-translate-y-1">
            <Image
              src="/images/september-2026-gazette.png"
              alt="September 2026 Current Affairs Gazette publication cover and editorial dossier"
              width={600}
              height={400}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="p-3 border-t border-ink/15 bg-white text-xs font-sans text-muted flex items-center justify-between">
              <span>Print Edition: 30 Pages, 11 Subject Areas</span>
              <span className="font-semibold text-ink">Circulation: All-India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

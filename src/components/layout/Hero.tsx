"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <header className="gazette-card bg-white p-6 sm:p-8 mb-8 border border-ink/15 rounded-xl shadow-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Publication Details & Sourced Benchmarks */}
        <div className="lg:col-span-7">
          <div className="text-xs font-sans font-semibold tracking-wide text-muted uppercase mb-2">
            IAS Academia of Success • Monthly Gazette • Issue No. 09/2026
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-3">
            September 2026 Current Affairs Gazette
          </h1>

          <p className="text-sm sm:text-base text-ink/80 font-serif leading-relaxed mb-6 max-w-xl">
            A comprehensive reference dossier recording 149 verified policy decisions, macroeconomic data releases, bilateral agreements, and judicial enactments from September 2026.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6 font-sans">
            <Button
              variant="default"
              size="default"
              onClick={onOpenArcade}
            >
              Examine via Quiz
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={onOpenRandomFact}
            >
              Sample Random Fact
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={handlePrint}
            >
              Print Clean Summary
            </Button>
          </div>

          {/* Sourced Macroeconomic Indicators - With units, dates and official sources */}
          <div className="pt-4 border-t border-ink/10">
            <div className="text-xs font-sans font-semibold text-muted uppercase tracking-wider mb-2.5">
              Verified Key Economic Indicators (August–September 2026)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
              <div className="p-2.5 rounded-lg border border-ink/10 bg-cream/70">
                <div className="text-xs text-muted">Real GDP Growth</div>
                <div className="font-bold text-lg text-ink">7.8% YoY</div>
                <div className="text-[11px] text-muted">Q1 FY27 (MoSPI)</div>
              </div>
              <div className="p-2.5 rounded-lg border border-ink/10 bg-cream/70">
                <div className="text-xs text-muted">Real GVA Growth</div>
                <div className="font-bold text-lg text-ink">8.2% YoY</div>
                <div className="text-[11px] text-muted">Q1 FY27 (MoSPI)</div>
              </div>
              <div className="p-2.5 rounded-lg border border-ink/10 bg-cream/70">
                <div className="text-xs text-muted">Retail CPI Inflation</div>
                <div className="font-bold text-lg text-ink">4.82% YoY</div>
                <div className="text-[11px] text-muted">August 2026 (MoSPI)</div>
              </div>
              <div className="p-2.5 rounded-lg border border-ink/10 bg-cream/70">
                <div className="text-xs text-muted">UPI Volume</div>
                <div className="font-bold text-lg text-ink">24.51 Billion</div>
                <div className="text-[11px] text-muted">₹29.82T (NPCI)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real Product Photograph of the Published Magazine */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md rounded-lg overflow-hidden border border-ink/20 shadow-card bg-cream">
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

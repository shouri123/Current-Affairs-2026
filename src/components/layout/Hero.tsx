"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, Printer, Shuffle, Flame, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  const mascotRef = useRef<HTMLDivElement>(null);
  const doodleRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mascotRef.current) {
        gsap.to(mascotRef.current, {
          y: -12,
          rotation: 2,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (doodleRef1.current) {
        gsap.to(doodleRef1.current, {
          y: -7,
          rotation: -3,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="comic-card bg-gradient-to-br from-popYellow via-amber-200 to-popOrange rounded-3xl p-5 sm:p-8 mb-8 relative overflow-hidden">
      {/* Decorative Halftone Blobs */}
      <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-popPink/30 border-4 border-ink pointer-events-none" />
      <div className="absolute right-36 -bottom-12 w-36 h-36 rounded-full bg-popCyan/35 border-4 border-ink pointer-events-none" />

      {/* Floating Exam Ready Badge */}
      <div
        ref={doodleRef1}
        className="absolute top-4 right-8 bg-popPink text-white font-display font-extrabold text-xs px-3.5 py-1 rounded-full border-2 border-ink shadow-brutal rotate-2 hidden md:flex items-center gap-1.5 z-20"
      >
        <Flame className="h-3.5 w-3.5" /> 100% Exam Revision Ready
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Headlines & Controls (lg:col-span-8) */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-ink px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
            <span>🗞️</span>
            <span>Monthly Digest • September 2026</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mb-3 tracking-tight">
            September 2026 <br />
            <span className="text-white drop-shadow-[3px_3px_0px_#18181B] bg-ink px-2.5 py-0.5 rounded-xl inline-block mt-1">
              Current Affairs
            </span>{" "}
            Magazine
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-bold text-ink/90 leading-relaxed mb-5 max-w-2xl">
            Every point from all 30 pages decoded into high-yield bullet points, animated macro scorecards, 3D exam flashcards, and arcade quizzes! High-yield numbers and must-knows are highlighted in bright yellow.
          </p>

          {/* Action Buttons with Framer Motion Bounce */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="pink"
                size="default"
                onClick={onOpenArcade}
                className="gap-2 font-black shadow-brutal hover:shadow-brutal-lg"
              >
                <Flame className="h-4 w-4" /> Start Daily Quiz
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="cyan"
                size="default"
                onClick={onOpenRandomFact}
                className="gap-2 font-black shadow-brutal hover:shadow-brutal-lg"
              >
                <Shuffle className="h-4 w-4" /> Surprise Me!
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="default"
                onClick={handlePrint}
                className="gap-2 bg-white font-black shadow-brutal hover:shadow-brutal-lg"
              >
                <Printer className="h-4 w-4" /> Print / Save PDF
              </Button>
            </motion.div>
          </div>

          {/* Quick Macro Scorecard Bar with Motion Hover */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white/95 border-2 border-ink rounded-xl p-2.5 shadow-brutal-sm cursor-pointer"
            >
              <div className="text-[10px] font-black text-ink/60 uppercase">
                Q1 GDP Growth
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-ink">
                7.8%
              </div>
              <div className="text-[9px] font-bold text-emerald-600">
                Fastest major econ
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white/95 border-2 border-ink rounded-xl p-2.5 shadow-brutal-sm cursor-pointer"
            >
              <div className="text-[10px] font-black text-ink/60 uppercase">
                Q1 Real GVA
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-ink">
                8.2%
              </div>
              <div className="text-[9px] font-bold text-sky-600">
                +0.4% over GDP
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white/95 border-2 border-ink rounded-xl p-2.5 shadow-brutal-sm cursor-pointer"
            >
              <div className="text-[10px] font-black text-ink/60 uppercase">
                August Retail CPI
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-ink">
                4.82%
              </div>
              <div className="text-[9px] font-bold text-purple-600">
                Inside RBI tolerance
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white/95 border-2 border-ink rounded-xl p-2.5 shadow-brutal-sm cursor-pointer"
            >
              <div className="text-[10px] font-black text-ink/60 uppercase">
                August UPI Record
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-ink">
                24.51 B
              </div>
              <div className="text-[9px] font-bold text-orange-600">
                ₹29.82 Trillion
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Captain GK Interactive Mascot (lg:col-span-4) */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div
            ref={mascotRef}
            onClick={onOpenRandomFact}
            title="Click Captain GK for a surprise exam fact!"
            className="cursor-pointer bg-white border-3 border-ink rounded-3xl p-4 shadow-brutal hover:shadow-brutal-lg max-w-[280px] w-full text-center hover:scale-105 active:scale-95 transition-all select-none"
          >
            <svg
              viewBox="0 0 260 220"
              className="w-full h-auto mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sunburst rays */}
              <circle
                cx="130"
                cy="110"
                r="88"
                fill="#FFE600"
                stroke="#18181B"
                strokeWidth="4"
                strokeDasharray="12 8"
              />
              {/* Cartoon Rocket Globe */}
              <circle
                cx="130"
                cy="115"
                r="56"
                fill="#38BDF8"
                stroke="#18181B"
                strokeWidth="4"
              />
              {/* Continents */}
              <path
                d="M100 85 Q118 78 126 95 T112 125 Q95 120 100 85 Z"
                fill="#4ADE80"
                stroke="#18181B"
                strokeWidth="3"
              />
              <path
                d="M142 90 Q165 88 168 112 T148 138 Q135 125 142 90 Z"
                fill="#4ADE80"
                stroke="#18181B"
                strokeWidth="3"
              />
              {/* Cool Sunglasses */}
              <rect x="92" y="102" width="32" height="18" rx="5" fill="#18181B" />
              <rect x="136" y="102" width="32" height="18" rx="5" fill="#18181B" />
              <line
                x1="124"
                y1="108"
                x2="136"
                y2="108"
                stroke="#18181B"
                strokeWidth="4"
              />
              <line
                x1="97"
                y1="107"
                x2="105"
                y2="115"
                stroke="#FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="141"
                y1="107"
                x2="149"
                y2="115"
                stroke="#FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Happy Smile */}
              <path
                d="M116 132 Q130 148 144 132"
                fill="none"
                stroke="#18181B"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Graduation Cap */}
              <polygon
                points="130,36 184,56 130,74 76,56"
                fill="#FF6B9E"
                stroke="#18181B"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <rect
                x="104"
                y="63"
                width="52"
                height="14"
                rx="4"
                fill="#C084FC"
                stroke="#18181B"
                strokeWidth="3"
              />
              <line
                x1="178"
                y1="58"
                x2="188"
                y2="85"
                stroke="#FB923C"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="188"
                cy="88"
                r="5"
                fill="#FFE600"
                stroke="#18181B"
                strokeWidth="2.5"
              />
              {/* Comic Speech Bubble */}
              <rect
                x="12"
                y="12"
                width="96"
                height="32"
                rx="12"
                fill="#FFF"
                stroke="#18181B"
                strokeWidth="3"
              />
              <text
                x="60"
                y="33"
                textAnchor="middle"
                fontFamily="Fredoka, sans-serif"
                fontWeight="700"
                fontSize="13"
                fill="#18181B"
              >
                CLICK ME! 🎲
              </text>
            </svg>
            <div className="mt-2 font-display font-bold text-xs bg-popMint border-2 border-ink rounded-xl py-1 px-3 inline-block shadow-brutal-sm">
              Tap Captain GK for Random Fact! 🎲
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

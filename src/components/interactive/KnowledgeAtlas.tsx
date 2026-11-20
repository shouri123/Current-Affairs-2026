"use client";

import React, { useState } from "react";
import { KNOWLEDGE_ATLAS_NODES, ConceptNode } from "@/data/knowledgeAtlasData";
import { pyqDatabase } from "@/data/pyqDatabase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Milestone,
  ArrowRight,
  BookOpen,
  Sparkles,
  ExternalLink,
  Radar,
  Calendar,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface KnowledgeAtlasProps {
  onOpenPYQModal?: () => void;
  onSelectCategory?: (category: string) => void;
}

export function KnowledgeAtlas({
  onOpenPYQModal,
  onSelectCategory,
}: KnowledgeAtlasProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("economy");
  const [activeTab, setActiveTab] = useState<"network" | "timeline">("network");

  const currentNode =
    KNOWLEDGE_ATLAS_NODES.find((n) => n.id === selectedNodeId) ||
    KNOWLEDGE_ATLAS_NODES[0];

  const connectedPYQs = (currentNode.pyqIds || []).map((id) =>
    pyqDatabase.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <section className="gazette-card bg-white border-2 border-ink rounded-2xl p-5 sm:p-7 mb-9 shadow-brutal-md font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-ink/15">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-popCyan/40 border-2 border-ink shadow-brutal-sm">
            <Network className="h-6 w-6 text-ink" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-xl sm:text-2xl text-ink">
                Interactive Knowledge Atlas
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-popYellow border border-ink text-[10px] font-black uppercase">
                Visual Concept Graph
              </span>
            </div>
            <p className="text-xs text-muted font-serif">
              Navigate the structural topology connecting static syllabus fundamentals, dynamic events, and past examination questions.
            </p>
          </div>
        </div>

        {/* Tab Switcher: Concept Graph vs Event Timeline */}
        <div className="flex items-center gap-1.5 p-1 bg-cream border-2 border-ink rounded-xl shadow-xs">
          <button
            onClick={() => setActiveTab("network")}
            className={`px-3 py-1.5 rounded-lg text-xs font-display font-black transition-all flex items-center gap-1.5 ${
              activeTab === "network"
                ? "bg-popYellow text-ink shadow-brutal-sm border-2 border-ink"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Concept Graph
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-3 py-1.5 rounded-lg text-xs font-display font-black transition-all flex items-center gap-1.5 ${
              activeTab === "timeline"
                ? "bg-popYellow text-ink shadow-brutal-sm border-2 border-ink"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            <Milestone className="h-3.5 w-3.5" />
            Event Timelines
          </button>
        </div>
      </div>

      {activeTab === "network" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          {/* Left Column: Concept Nodes Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-display font-black text-ink uppercase tracking-wider block mb-2">
              Core Syllabus God Nodes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {KNOWLEDGE_ATLAS_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <motion.button
                    key={node.id}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 border-ink transition-all flex items-start justify-between ${
                      isSelected
                        ? "bg-popYellow shadow-brutal-sm ring-1 ring-ink"
                        : "bg-cream/40 hover:bg-white text-ink shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          {node.category}
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-white/80 border border-ink/20 text-[9px] font-black">
                          {node.connectedFactsCount} Facts
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                        {node.name}
                      </h4>
                      <p className="text-xs text-ink/75 font-serif line-clamp-1 mt-0.5">
                        {node.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 mt-2 transition-transform ${
                        isSelected ? "translate-x-1 text-ink" : "text-muted"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Details, Exam Linkage & Connected PYQs */}
          <div className="lg:col-span-7 bg-cream/30 border-2 border-ink rounded-xl p-5 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-ink/15">
              <div>
                <span className="text-[10px] font-display font-extrabold text-brand uppercase tracking-wider">
                  Active Knowledge Node
                </span>
                <h3 className="font-display font-extrabold text-xl text-ink">
                  {currentNode.name}
                </h3>
              </div>
              <Badge className="bg-popMint/70 text-ink border border-ink text-xs font-bold">
                {currentNode.connectedFactsCount} Curated Developments
              </Badge>
            </div>

            <p className="text-sm font-serif text-ink/90 leading-relaxed mb-4">
              {currentNode.description}
            </p>

            {/* Exam Relevance Callout */}
            <div className="p-3.5 rounded-xl bg-sky-50 border-2 border-sky-300 mb-4 text-xs font-sans">
              <strong className="block text-sky-950 font-bold mb-0.5">
                Target Examination Alignment
              </strong>
              <span className="text-sky-900 font-medium">
                {currentNode.examRelevance}
              </span>
            </div>

            {/* Sub-concepts */}
            {currentNode.subConcepts && (
              <div className="mb-4">
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                  Connected Conceptual Strands:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentNode.subConcepts.map((sc) => (
                    <span
                      key={sc}
                      className="px-2.5 py-1 rounded-lg bg-white border border-ink text-xs font-display font-extrabold text-ink shadow-xs"
                    >
                      #{sc.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Connected Previous Year Questions */}
            {connectedPYQs.length > 0 && (
              <div className="pt-3 border-t border-ink/15">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                    <Radar className="h-3.5 w-3.5 text-purple-700" />
                    Tested Previous Year Questions:
                  </span>
                  {onOpenPYQModal && (
                    <button
                      onClick={onOpenPYQModal}
                      className="text-xs text-brand font-bold hover:underline"
                    >
                      View All PYQs →
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  {connectedPYQs.map((pyq) => (
                    <div
                      key={pyq!.id}
                      className="p-3 rounded-lg bg-white border border-purple-200 text-xs font-serif"
                    >
                      <div className="flex items-center justify-between text-[10px] font-sans font-bold text-purple-950 mb-1">
                        <span>{pyq!.exam} ({pyq!.year})</span>
                        <span className="text-emerald-700 font-extrabold">Ans: {pyq!.correctAnswer}</span>
                      </div>
                      <p className="line-clamp-2 text-ink/80">{pyq!.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Event Timeline View */
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-lg text-ink">
                Chronological Policy & Technological Milestones
              </h3>
              <p className="text-xs text-muted font-serif">
                Trace the historical trajectory of key national initiatives from inception to contemporary 2026 mandates.
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {KNOWLEDGE_ATLAS_NODES.filter((n) => n.timelineEvents).map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                    selectedNodeId === n.id
                      ? "bg-popYellow border-ink text-ink"
                      : "bg-white border-ink/20 text-muted hover:text-ink"
                  }`}
                >
                  {n.name.split("&")[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="relative border-l-2 border-ink/20 ml-4 pl-6 space-y-6 py-2">
            {(currentNode.timelineEvents || []).map((ev, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-popYellow border-2 border-ink shadow-xs" />
                <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-brutal-sm hover:shadow-brutal-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 border border-ink/15 text-xs font-display font-black text-ink">
                      {ev.year}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                      {ev.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-serif text-muted">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}


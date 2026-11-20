"use client";

import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pyqDatabase, PYQItem } from "@/data/pyqDatabase";
import {
  Radar,
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
} from "lucide-react";

interface PYQRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicFilter?: string;
}

export function PYQRadarModal({
  isOpen,
  onClose,
  initialTopicFilter = "",
}: PYQRadarModalProps) {
  const [search, setSearch] = useState(initialTopicFilter);
  const [selectedExam, setSelectedExam] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const exams = useMemo(() => {
    return Array.from(new Set(pyqDatabase.map((p) => p.exam)));
  }, []);

  const subjects = useMemo(() => {
    return Array.from(new Set(pyqDatabase.map((p) => p.subject)));
  }, []);

  const filteredPYQs = useMemo(() => {
    return pyqDatabase.filter((item) => {
      if (selectedExam !== "all" && item.exam !== selectedExam) return false;
      if (selectedSubject !== "all" && item.subject !== selectedSubject) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          item.question.toLowerCase().includes(q) ||
          item.concept.toLowerCase().includes(q) ||
          item.subject.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q))
        );
      }
      return true;
    });
  }, [search, selectedExam, selectedSubject]);

  const toggleReveal = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white border-2 border-ink rounded-2xl p-5 sm:p-7 shadow-brutal-lg max-h-[85vh] flex flex-col font-sans">
        <DialogHeader className="border-b-2 border-ink/15 pb-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-popCyan/40 border-2 border-ink shadow-brutal-sm">
                <Radar className="h-5 w-5 text-ink animate-pulse" />
              </div>
              <div>
                <DialogTitle className="font-display font-black text-xl sm:text-2xl text-ink">
                  PYQ Radar & Syllabus Bridge
                </DialogTitle>
                <p className="text-xs text-muted font-serif">
                  Connecting live current affairs developments directly to authentic UPSC, Banking & SSC past examination questions.
                </p>
              </div>
            </div>
            <Badge className="bg-popYellow text-ink border border-ink text-xs font-display font-bold">
              {filteredPYQs.length} Questions
            </Badge>
          </div>

          {/* Filter and Search Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
            <div className="relative sm:col-span-1">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted" />
              <input
                type="text"
                placeholder="Search MPC, Blue Bonds, UPI..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-cream/70 border-2 border-ink rounded-lg focus:outline-none focus:ring-1 focus:ring-brand font-medium"
              />
            </div>

            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="text-xs py-1.5 px-2 bg-cream/70 border-2 border-ink rounded-lg focus:outline-none font-medium"
            >
              <option value="all">All Examinations</option>
              {exams.map((ex) => (
                <option key={ex} value={ex}>
                  {ex}
                </option>
              ))}
            </select>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-xs py-1.5 px-2 bg-cream/70 border-2 border-ink rounded-lg focus:outline-none font-medium"
            >
              <option value="all">All Subjects</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </DialogHeader>

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-4 pr-1">
          {filteredPYQs.length === 0 ? (
            <div className="text-center py-12 text-muted text-xs">
              No matching previous year questions found. Try refining search keywords.
            </div>
          ) : (
            filteredPYQs.map((item) => {
              const isRevealed = revealedAnswers[item.id];
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border-2 border-ink bg-white shadow-brutal-sm hover:shadow-brutal-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-popYellow/40 border border-ink text-[10px] font-display font-extrabold text-ink">
                        {item.exam} ({item.year})
                      </span>
                      <span className="px-2 py-0.5 rounded bg-popMint/40 border border-ink text-[10px] font-sans font-bold text-ink">
                        {item.subject}
                      </span>
                    </div>
                    <span className="text-[11px] font-display font-black text-brand">
                      Concept: {item.concept}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-serif font-medium text-ink leading-relaxed whitespace-pre-line mb-3">
                    {item.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-1.5 mb-3 font-sans text-xs">
                    {item.options.map((opt, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded-lg border text-xs font-medium ${
                          isRevealed && opt === item.correctAnswer
                            ? "bg-emerald-50 border-emerald-500 font-bold text-emerald-900"
                            : "bg-cream/40 border-ink/15 text-ink/80"
                        }`}
                      >
                        <span className="font-bold mr-1.5">({String.fromCharCode(65 + i)})</span> {opt}
                      </div>
                    ))}
                  </div>

                  {/* Answer & Explanation Toggle */}
                  <div className="pt-2 border-t border-ink/10 flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleReveal(item.id)}
                      className="gap-1.5 text-xs font-bold border-2 border-ink bg-cream hover:bg-popYellow/50 shadow-xs"
                    >
                      {isRevealed ? (
                        <>
                          <ChevronUp className="h-3.5 w-3.5" /> Hide Solution
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3.5 w-3.5" /> View Solution & Exam Concept
                        </>
                      )}
                    </Button>
                  </div>

                  {isRevealed && (
                    <div className="mt-3 p-3 rounded-lg bg-emerald-50/70 border border-emerald-500/40 text-xs text-ink/90 font-serif leading-relaxed">
                      <div className="font-sans font-bold text-emerald-800 text-[11px] mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Correct Answer: {item.correctAnswer}
                      </div>
                      <p>{item.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


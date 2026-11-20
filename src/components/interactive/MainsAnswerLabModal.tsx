"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MAINS_QUESTIONS_DATABASE,
  MainsQuestion,
} from "@/data/mainsQuestions";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface MainsAnswerLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EvaluationResult {
  score: number;
  maxScore: number;
  wordCount: number;
  introFeedback: string;
  contentFeedback: string;
  analysisFeedback: string;
  dimensionsFound: string[];
  missingDimensions: string[];
  recommendation: string;
}

export function MainsAnswerLabModal({
  isOpen,
  onClose,
}: MainsAnswerLabModalProps) {
  const [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [activeTab, setActiveTab] = useState<"write" | "evaluation" | "model">("write");
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);

  const currentQ = MAINS_QUESTIONS_DATABASE[selectedQuestionIdx];
  const wordCount = userAnswer.trim() ? userAnswer.trim().split(/\s+/).length : 0;

  const handleEvaluate = () => {
    if (wordCount < 20) {
      alert("Please write at least 20 words before evaluating.");
      return;
    }

    const lowerAns = userAnswer.toLowerCase();
    const dimensionsFound: string[] = [];
    const missingDimensions: string[] = [];

    currentQ.keyDimensions.forEach((dim) => {
      const keywords = dim.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
      const isPresent = keywords.some((k) => lowerAns.includes(k));
      if (isPresent) {
        dimensionsFound.push(dim);
      } else {
        missingDimensions.push(dim);
      }
    });

    // Score calculation
    let baseScore = Math.min(currentQ.marks, Math.round((currentQ.marks * 0.4)));
    if (wordCount >= currentQ.wordLimit * 0.6 && wordCount <= currentQ.wordLimit * 1.25) {
      baseScore += 2;
    }
    const dimensionRatio = dimensionsFound.length / Math.max(1, currentQ.keyDimensions.length);
    baseScore += Math.round(dimensionRatio * (currentQ.marks * 0.4));
    const finalScore = Math.min(currentQ.marks, baseScore);

    setEvaluation({
      score: finalScore,
      maxScore: currentQ.marks,
      wordCount,
      introFeedback:
        lowerAns.includes("infrastructure") || lowerAns.includes("rbi") || lowerAns.includes("financial")
          ? "Strong opening: effectively defined the contextual scope."
          : "Introductory definition could be crisper. Define the key concept in the opening sentence.",
      contentFeedback: `Incorporated ${dimensionsFound.length} of ${currentQ.keyDimensions.length} expected analytical dimensions.`,
      analysisFeedback:
        lowerAns.includes("challenge") || lowerAns.includes("divide") || lowerAns.includes("risk")
          ? "Balanced critique: covers both positive catalysts and institutional bottlenecks."
          : "Needs deeper critical analysis: strengthen the examination of ground hurdles.",
      dimensionsFound,
      missingDimensions,
      recommendation:
        finalScore >= currentQ.marks * 0.7
          ? "Commendable answer. Retain structural clarity and enrich with current statistical citations."
          : "Good attempt. Incorporate the missing institutional dimensions and add a clear way-forward subhead.",
    });

    setActiveTab("evaluation");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white border-2 border-ink rounded-2xl p-5 sm:p-7 shadow-brutal-lg max-h-[90vh] flex flex-col font-sans">
        <DialogHeader className="border-b-2 border-ink/15 pb-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-popPink/40 border-2 border-ink shadow-brutal-sm">
                <FileText className="h-5 w-5 text-ink" />
              </div>
              <div>
                <DialogTitle className="font-display font-black text-xl sm:text-2xl text-ink">
                  Mains Answer Lab
                </DialogTitle>
                <p className="text-xs text-muted font-serif">
                  Write descriptive answers and evaluate them against structured examination rubrics and model frameworks.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge className="bg-popYellow text-ink border border-ink text-xs font-bold">
                {currentQ.paper}
              </Badge>
              <Badge className="bg-popMint/60 text-ink border border-ink text-xs font-bold">
                {currentQ.marks} Marks ({currentQ.wordLimit} Words)
              </Badge>
            </div>
          </div>

          {/* Question Selector Tabs */}
          <div className="flex items-center gap-2 mt-3 pt-2 overflow-x-auto no-scrollbar">
            {MAINS_QUESTIONS_DATABASE.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setSelectedQuestionIdx(idx);
                  setEvaluation(null);
                  setActiveTab("write");
                }}
                className={`px-3 py-1 rounded-lg text-xs font-display font-bold border-2 border-ink transition-all shrink-0 ${
                  selectedQuestionIdx === idx
                    ? "bg-popYellow text-ink shadow-brutal-sm"
                    : "bg-cream text-ink/70 hover:bg-white"
                }`}
              >
                Q{idx + 1}: {q.subject}
              </button>
            ))}
          </div>
        </DialogHeader>

        {/* Question Statement Box */}
        <div className="p-4 rounded-xl bg-amber-50/60 border-2 border-ink mt-3 shrink-0">
          <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">
            Official Question Statement:
          </span>
          <p className="font-display font-black text-sm sm:text-base text-ink leading-snug">
            "{currentQ.question}"
          </p>
        </div>

        {/* Workspace Tab Bar */}
        <div className="flex items-center gap-2 border-b border-ink/15 pt-3 pb-1 shrink-0 font-sans">
          <button
            onClick={() => setActiveTab("write")}
            className={`pb-1 text-xs font-display font-black border-b-2 transition-all ${
              activeTab === "write"
                ? "border-brand text-brand"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            Answer Workspace
          </button>
          <button
            onClick={() => setActiveTab("evaluation")}
            disabled={!evaluation}
            className={`pb-1 text-xs font-display font-black border-b-2 transition-all ${
              activeTab === "evaluation"
                ? "border-brand text-brand"
                : evaluation
                ? "border-transparent text-muted hover:text-ink"
                : "border-transparent text-zinc-300 cursor-not-allowed"
            }`}
          >
            Rubric Evaluation {evaluation && `(${evaluation.score}/${evaluation.maxScore})`}
          </button>
          <button
            onClick={() => setActiveTab("model")}
            className={`pb-1 text-xs font-display font-black border-b-2 transition-all ${
              activeTab === "model"
                ? "border-brand text-brand"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            Model Answer Framework
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto py-3">
          {activeTab === "write" && (
            <div className="space-y-3 flex flex-col h-full">
              <div className="flex items-center justify-between text-xs font-sans text-muted">
                <span>Write in clear paragraphs or point format:</span>
                <span className={`font-bold ${wordCount > currentQ.wordLimit ? "text-rose-600 font-black" : "text-ink"}`}>
                  {wordCount} / {currentQ.wordLimit} Words
                </span>
              </div>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Begin with a concise definition or recent context, followed by numbered analytical arguments and an actionable conclusion..."
                className="w-full flex-1 min-h-[220px] p-4 text-xs sm:text-sm font-serif bg-cream/30 border-2 border-ink rounded-xl focus:outline-none focus:ring-1 focus:ring-brand leading-relaxed"
              />
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setUserAnswer(currentQ.modelAnswer.slice(0, 300) + "...")}
                  className="text-xs font-bold border-2 border-ink bg-cream hover:bg-white"
                >
                  Load Starter Draft
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleEvaluate}
                  className="gap-1.5 text-xs font-bold border-2 border-ink shadow-brutal-sm"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Evaluate Answer Rubric
                </Button>
              </div>
            </div>
          )}

          {activeTab === "evaluation" && evaluation && (
            <div className="space-y-4">
              {/* Score Tile */}
              <div className="p-4 rounded-xl border-2 border-ink bg-emerald-50/80 flex items-center justify-between shadow-brutal-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wider">
                    Rubric Assessment Score
                  </span>
                  <div className="font-display font-black text-3xl text-ink">
                    {evaluation.score} <span className="text-sm font-sans text-muted">/ {evaluation.maxScore} Marks</span>
                  </div>
                </div>
                <div className="text-right text-xs font-sans">
                  <div className="font-bold text-ink">Word Count: {evaluation.wordCount}</div>
                  <div className="text-emerald-700 font-extrabold">{evaluation.recommendation}</div>
                </div>
              </div>

              {/* Rubric Feedback Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-3.5 rounded-xl border border-ink/20 bg-white">
                  <strong className="block font-bold text-ink mb-1">
                    Introduction & Scope Definition:
                  </strong>
                  <p className="text-muted font-serif">{evaluation.introFeedback}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-ink/20 bg-white">
                  <strong className="block font-bold text-ink mb-1">
                    Critical Analysis & Depth:
                  </strong>
                  <p className="text-muted font-serif">{evaluation.analysisFeedback}</p>
                </div>
              </div>

              {/* Covered vs Missing Dimensions */}
              <div className="p-4 rounded-xl border-2 border-ink bg-white space-y-3">
                <h4 className="font-display font-bold text-sm text-ink">
                  Syllabus Dimensions Checklist:
                </h4>
                <div className="space-y-1.5 text-xs">
                  {currentQ.keyDimensions.map((dim, i) => {
                    const isCovered = evaluation.dimensionsFound.includes(dim);
                    return (
                      <div
                        key={i}
                        className={`p-2 rounded-lg border flex items-center gap-2 ${
                          isCovered
                            ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold"
                            : "bg-rose-50 border-rose-300 text-rose-950"
                        }`}
                      >
                        {isCovered ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                        )}
                        <span>{dim}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === "model" && (
            <div className="p-5 rounded-xl border-2 border-ink bg-cream/20 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-ink/15">
                <span className="font-display font-black text-sm text-ink">
                  Standard Model Answer Framework
                </span>
                <span className="text-xs text-muted font-bold font-sans">
                  Target: {currentQ.wordLimit} Words
                </span>
              </div>
              <p className="text-xs sm:text-sm font-serif text-ink leading-relaxed whitespace-pre-line">
                {currentQ.modelAnswer}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


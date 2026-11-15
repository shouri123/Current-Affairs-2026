"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MagazineSection, QuizAttemptRecord } from "@/types";
import {
  Download,
  Upload,
  RotateCcw,
  CheckCircle,
  Award,
  BookOpen,
  Bookmark,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

interface ProgressDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  sections: MagazineSection[];
  masteredIds: string[];
  pinnedIds: string[];
  quizAttempts: QuizAttemptRecord[];
  onImportProgress: (data: any) => void;
  onResetProgress: () => void;
}

export function ProgressDashboardModal({
  isOpen,
  onClose,
  sections,
  masteredIds,
  pinnedIds,
  quizAttempts,
  onImportProgress,
  onResetProgress,
}: ProgressDashboardModalProps) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  // Compute metrics
  const totalEntries = sections.reduce((acc, s) => acc + s.items.length, 0);
  const totalMastered = sections.reduce(
    (acc, s) =>
      acc +
      s.items.filter((item, idx) =>
        masteredIds.includes(item.id || `${s.id}-${idx}`)
      ).length,
    0
  );
  const entriesRemaining = Math.max(0, totalEntries - totalMastered);
  const completionPercentage =
    totalEntries > 0 ? Math.round((totalMastered / totalEntries) * 100) : 0;

  // Quiz calculations
  const totalQuizAttempts = quizAttempts.length;
  const averageAccuracy =
    totalQuizAttempts > 0
      ? Math.round(
          quizAttempts.reduce((acc, a) => acc + a.accuracy, 0) / totalQuizAttempts
        )
      : 0;

  // Subject breakdowns
  const subjectBreakdown = sections.map((sec) => {
    const total = sec.items.length;
    const mastered = sec.items.filter((item, idx) =>
      masteredIds.includes(item.id || `${sec.id}-${idx}`)
    ).length;
    const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return { id: sec.id, title: sec.title, total, mastered, pct };
  });

  const strongestSubject = [...subjectBreakdown].sort((a, b) => b.pct - a.pct)[0];
  const weakestSubject = [...subjectBreakdown].sort((a, b) => a.pct - b.pct)[0];

  // Export progress as JSON
  const handleExport = () => {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      masteredIds,
      pinnedIds,
      quizAttempts,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `current-affairs-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import progress from JSON
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && Array.isArray(parsed.masteredIds)) {
          onImportProgress(parsed);
          setImportError(null);
          alert("Progress successfully restored!");
        } else {
          setImportError("Invalid progress backup file structure.");
        }
      } catch (err) {
        setImportError("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white border border-ink/20 rounded-xl p-5 sm:p-7 shadow-dropdown max-h-[90vh] overflow-y-auto font-sans">
        <DialogHeader className="border-b border-ink/15 pb-3">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-brand" />
            <DialogTitle className="font-display font-bold text-xl sm:text-2xl text-ink">
              Personal Study Analytics & Progress
            </DialogTitle>
          </div>
          <p className="text-xs text-muted mt-1">
            Track syllabus completion, revision accuracy, and competitive exam readiness.
          </p>
        </DialogHeader>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          <div className="p-3 bg-cream/70 rounded-lg border border-ink/15">
            <span className="text-[11px] font-semibold text-muted block">Syllabus Studied</span>
            <span className="font-display font-bold text-2xl text-ink">
              {completionPercentage}%
            </span>
            <span className="text-[10px] text-muted block mt-0.5">
              {totalMastered} / {totalEntries} entries
            </span>
          </div>

          <div className="p-3 bg-cream/70 rounded-lg border border-ink/15">
            <span className="text-[11px] font-semibold text-muted block">Remaining</span>
            <span className="font-display font-bold text-2xl text-ink">
              {entriesRemaining}
            </span>
            <span className="text-[10px] text-muted block mt-0.5">Pending mastery</span>
          </div>

          <div className="p-3 bg-cream/70 rounded-lg border border-ink/15">
            <span className="text-[11px] font-semibold text-muted block">Quiz Accuracy</span>
            <span className="font-display font-bold text-2xl text-ink">
              {averageAccuracy}%
            </span>
            <span className="text-[10px] text-muted block mt-0.5">
              Across {totalQuizAttempts} attempts
            </span>
          </div>

          <div className="p-3 bg-cream/70 rounded-lg border border-ink/15">
            <span className="text-[11px] font-semibold text-muted block">Pinned Items</span>
            <span className="font-display font-bold text-2xl text-ink">
              {pinnedIds.length}
            </span>
            <span className="text-[10px] text-muted block mt-0.5">Bookmarked facts</span>
          </div>
        </div>

        {/* Subject Breakdown List */}
        <div className="my-3">
          <h3 className="font-display font-bold text-sm text-ink mb-2 flex items-center justify-between">
            <span>Subject-Wise Completion</span>
            <span className="text-xs font-normal text-muted">
              Strongest: <strong>{strongestSubject?.title?.split(" ")[0]}</strong> ({strongestSubject?.pct}%)
            </span>
          </h3>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {subjectBreakdown.map((sec) => (
              <div
                key={sec.id}
                className="p-2 rounded border border-ink/10 bg-white hover:bg-cream/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-ink truncate max-w-[280px]">
                    {sec.title}
                  </span>
                  <span className="text-muted font-medium">
                    {sec.mastered}/{sec.total} ({sec.pct}%)
                  </span>
                </div>
                <Progress value={sec.pct} className="h-1.5 bg-zinc-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Data Management Actions */}
        <div className="border-t border-ink/15 pt-4 mt-4">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2.5">
            Data Backup & Portability
          </h4>

          {importError && (
            <p className="text-xs text-rose-600 mb-2 font-medium">{importError}</p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                className="text-xs gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Export Backup (JSON)
              </Button>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-ink/20 rounded-md hover:bg-zinc-100 transition-colors">
                  <Upload className="h-3.5 w-3.5" />
                  Restore Backup
                </span>
              </label>
            </div>

            <div>
              {!showResetConfirm ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowResetConfirm(true)}
                  className="text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
                >
                  <RotateCcw className="h-3.5 w-3.5 mr-1" />
                  Reset Progress
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-rose-700 font-semibold">Confirm Reset?</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      onResetProgress();
                      setShowResetConfirm(false);
                    }}
                    className="text-xs py-1 h-7"
                  >
                    Yes, Clear All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowResetConfirm(false)}
                    className="text-xs py-1 h-7"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


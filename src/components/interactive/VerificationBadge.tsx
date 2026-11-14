"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Clock, ExternalLink, HelpCircle } from "lucide-react";
import { SourceReference, VerificationStatus } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  status?: VerificationStatus;
  sources?: SourceReference[];
  lastVerifiedAt?: string;
  className?: string;
}

export function VerificationBadge({
  status = "verified",
  sources = [],
  lastVerifiedAt,
  className = "",
}: VerificationBadgeProps) {
  const primarySource = sources[0];

  const getStatusConfig = () => {
    switch (status) {
      case "verified":
        return {
          label: "Verified Official Source",
          icon: CheckCircle2,
          border: "border-emerald-600/30",
          bg: "bg-emerald-50 text-emerald-800",
          dot: "bg-emerald-600",
        };
      case "needs-review":
        return {
          label: "Needs Review",
          icon: Clock,
          border: "border-amber-500/30",
          bg: "bg-amber-50 text-amber-800",
          dot: "bg-amber-500",
        };
      case "disputed":
        return {
          label: "Disputed Claims",
          icon: AlertCircle,
          border: "border-rose-500/30",
          bg: "bg-rose-50 text-rose-800",
          dot: "bg-rose-500",
        };
      case "outdated":
        return {
          label: "Context Updated",
          icon: Clock,
          border: "border-slate-500/30",
          bg: "bg-slate-50 text-slate-800",
          dot: "bg-slate-500",
        };
      case "missing-source":
      default:
        return {
          label: "Source Review",
          icon: HelpCircle,
          border: "border-zinc-300",
          bg: "bg-zinc-100 text-zinc-700",
          dot: "bg-zinc-400",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  const badgeContent = (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-sans font-semibold rounded border ${config.border} ${config.bg} ${className}`}
    >
      <Icon className="h-3 w-3 shrink-0" />
      <span>{config.label}</span>
      {primarySource && (
        <ExternalLink className="h-2.5 w-2.5 opacity-60 ml-0.5" />
      )}
    </span>
  );

  if (!primarySource && !lastVerifiedAt) {
    return badgeContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {primarySource?.url ? (
          <a
            href={primarySource.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand rounded"
          >
            {badgeContent}
          </a>
        ) : (
          <span className="cursor-help">{badgeContent}</span>
        )}
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs p-2.5 text-xs font-sans">
        <p className="font-semibold text-ink">
          {primarySource?.title || "Editorial Verification"}
        </p>
        {primarySource?.publisher && (
          <p className="text-muted mt-0.5">
            Authority: <span className="text-ink font-medium">{primarySource.publisher}</span>
          </p>
        )}
        {lastVerifiedAt && (
          <p className="text-[10px] text-muted mt-1">
            Checked: {lastVerifiedAt}
          </p>
        )}
        {primarySource?.url && (
          <p className="text-[10px] text-brand underline mt-1 flex items-center gap-1">
            Open official document <ExternalLink className="h-2.5 w-2.5" />
          </p>
        )}
      </TooltipContent>
    </Tooltip>
  );
}


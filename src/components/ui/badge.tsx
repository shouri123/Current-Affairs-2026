"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold select-none font-sans border",
  {
    variants: {
      variant: {
        default: "bg-zinc-100 text-ink border-ink/15",
        mustKnow: "bg-popYellow text-ink border-2 border-ink shadow-brutal-sm font-black tracking-wide",
        mastered: "bg-popMint/40 text-emerald-950 border-emerald-800/30",
        pinned: "bg-popCyan/30 text-sky-950 border-sky-800/30",
        outline: "bg-transparent text-ink border-ink/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-bold transition-transform font-display select-none",
  {
    variants: {
      variant: {
        default: "bg-popYellow text-ink shadow-brutal-sm",
        cyan: "bg-popCyan text-ink shadow-brutal-sm",
        pink: "bg-popPink text-ink shadow-brutal-sm",
        mint: "bg-popMint text-ink shadow-brutal-sm",
        purple: "bg-popPurple text-ink shadow-brutal-sm",
        orange: "bg-popOrange text-ink shadow-brutal-sm",
        coral: "bg-popCoral text-white shadow-brutal-sm",
        outline: "bg-white text-ink shadow-brutal-sm",
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


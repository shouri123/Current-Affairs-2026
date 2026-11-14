"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer border font-sans",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-white border-ink hover:bg-zinc-800",
        brand:
          "bg-brand text-ink border-ink/30 hover:bg-sky-400 font-bold",
        yellow:
          "bg-popYellow text-ink border-ink/40 hover:bg-amber-300 font-bold",
        outline:
          "bg-white text-ink border-ink/20 hover:bg-zinc-50 hover:border-ink/50",
        ghost:
          "border-transparent bg-transparent hover:bg-ink/5 text-ink",
      },
      size: {
        default: "h-9 px-3.5 py-1.5",
        sm: "h-8 px-2.5 text-xs rounded-md",
        lg: "h-10 px-5 text-base rounded-lg",
        icon: "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

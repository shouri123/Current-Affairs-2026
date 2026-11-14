"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-display font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer border-[2.5px] border-ink active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-popYellow text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-yellow-300",
        cyan:
          "bg-popCyan text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-sky-400",
        pink:
          "bg-popPink text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-pink-400",
        mint:
          "bg-popMint text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-emerald-400",
        purple:
          "bg-popPurple text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-purple-400",
        orange:
          "bg-popOrange text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-orange-400",
        coral:
          "bg-popCoral text-white shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-red-500",
        outline:
          "bg-white text-ink shadow-brutal hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-lg hover:bg-zinc-50",
        ghost:
          "border-transparent bg-transparent shadow-none hover:bg-ink/10 hover:border-ink hover:shadow-brutal-sm",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs rounded-lg border-2 shadow-brutal-sm",
        lg: "h-12 px-6 text-base rounded-2xl shadow-brutal",
        icon: "h-9 w-9 p-0",
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


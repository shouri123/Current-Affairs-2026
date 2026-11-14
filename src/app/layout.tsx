import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "September 2026 Current Affairs — Funky Edition",
  description:
    "Interactive Neo-Brutalist Current Affairs Magazine for Banking, SSC, UPSC, and competitive exams. Features high-yield facts, animated macro charts, 3D flashcards, and arcade quizzes.",
  keywords: [
    "Current Affairs",
    "September 2026",
    "UPSC",
    "Banking Awareness",
    "SSC CGL",
    "Neo-Brutalist",
    "Flashcards",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${jakarta.variable}`}>
      <body className="antialiased min-h-screen">
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Fredoka, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "September 2026 Current Affairs Gazette — IAS Academia of Success",
  description:
    "Official monthly documentation of September 2026 national accounts, regulatory mandates, foreign policy, and defence updates for competitive examination candidates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${sourceSerif.variable}`}>
      <body className="antialiased min-h-screen bg-cream text-ink font-serif selection:bg-popYellow selection:text-ink">
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}

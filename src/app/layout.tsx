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
  title: "Current Affairs Gazette (July – September 2026) — IAS Academia of Success",
  description:
    "Official monthly documentation of July, August, and September 2026 national accounts, regulatory mandates, foreign policy, and defence updates for competitive examination candidates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${sourceSerif.variable}`}>
      <body className={`${sourceSerif.className} antialiased min-h-screen bg-cream text-ink selection:bg-popYellow selection:text-ink`}>
        <TooltipProvider delayDuration={200}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}

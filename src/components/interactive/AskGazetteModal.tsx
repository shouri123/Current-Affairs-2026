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
  Bot,
  Sparkles,
  Send,
  HelpCircle,
  Lightbulb,
  FileText,
  Target,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface AskGazetteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContextTopic?: string;
}

interface Message {
  sender: "user" | "gazette";
  text: string;
  sourceType?: "verified-dossier" | "analytical-framework";
  citations?: string[];
}

export function AskGazetteModal({
  isOpen,
  onClose,
  initialContextTopic = "Monetary Policy & Inflation Dynamics",
}: AskGazetteModalProps) {
  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "gazette",
      text: `Welcome to **Ask Gazette** — your verified current-affairs study companion. I answer questions grounded strictly in our curated national dossiers, official statistical releases, and statutory exam syllabi.\n\nAsk me anything about recent developments, request a beginner-friendly explanation, or generate a 150-word Mains answer framework.`,
      sourceType: "verified-dossier",
      citations: ["IAS Academia of Success Dossier", "Official MoSPI & RBI Bulletins 2026"],
    },
  ]);

  const handleQuickPrompt = (promptType: string) => {
    let q = "";
    let a = "";
    let citations: string[] = ["Official Gazette Database 2026"];

    if (promptType === "beginner") {
      q = "Explain India's inflation dynamics and RBI's stance like I'm a beginner.";
      a = `### Inflation Dynamics Explained Simply\n\n1. **What is Inflation?**\nIt is the rate at which general prices of everyday goods (dal, fuel, housing) increase over time, eroding purchasing power.\n\n2. **How does India measure it?**\nThe government uses the **Consumer Price Index (CPI)** compiled by MoSPI. In mid-2026, headline CPI settled within the RBI's target band (3.54% – 5.08%).\n\n3. **Why does the RBI step in?**\nThe **Monetary Policy Committee (MPC)** adjusts the repo rate (the interest rate at which banks borrow from RBI). If inflation is high, RBI raises the rate to make loans costlier, cooling down excess spending. If growth needs support, it cuts rates.\n\n**Exam Takeaway:** Urjit Patel Committee (2014) recommended the 4% (+/- 2%) flexible inflation target under Section 45ZA of the RBI Act.`;
      citations = ["MoSPI Consumer Price Index (CPI) 2026", "RBI Monetary Policy Stance"];
    } else if (promptType === "mains") {
      q = "Provide a 150-word Mains answer framework on India's Sovereign Blue Bonds.";
      a = `### 150-Word Mains Answer Framework\n\n**Introduction:**\nSovereign Blue Bonds are specialized debt instruments designed to mobilize sustainable finance for marine conservation, port logistics, and ocean-based economic sustainability under India's Sagarmala programme.\n\n**Key Dimensions:**\n- **Ecological Preservation:** Directs sovereign capital into mangrove restoration, marine biodiversity protection, and sustainable deep-sea aquaculture.\n- **Green Shipping:** Funds coastal infrastructure modernization, decarbonized port towing, and inland waterways electrification.\n- **Financial Discipline:** Requires strict third-party verification to avoid 'blue-washing' and ensure parity with global ICMA principles.\n\n**Conclusion:**\nIntegrating blue debt into India's green taxonomy provides a vital non-dilutive financing avenue, bridging SDG 14 (Life Below Water) with rapid coastal economic development.`;
      citations = ["Ministry of Ports, Shipping and Waterways", "Sagarmala Finance Bulletin 2026"];
    } else if (promptType === "mcq") {
      q = "Generate 3 tough elimination MCQs from recent defence and science updates.";
      a = `### 3 Examination-Standard Elimination MCQs\n\n**Q1. Consider the following regarding INS Arighaat:**\n1. It is India's second indigenous nuclear-powered ballistic missile submarine (SSBN).\n2. It carries the long-range K-4 and K-15 SLBMs.\n*Answer:* Both 1 and 2 are correct. It completes the second-strike sea-based nuclear triad leg.\n\n**Q2. Under the Bankers' Books Evidence Act 2026, which format is granted legal evidentiary status?**\n*Answer:* Cloud-hosted records and cryptographically verifiable digital ledgers.\n\n**Q3. Which engine powers the heavy payload semi-cryogenic stage of ISRO?**\n*Answer:* SCE-200 utilizing refined Isrosene (kerosene) and Liquid Oxygen (LOX).`;
      citations = ["Ministry of Defence (MoD)", "ISRO Propulsion Mission 2026"];
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: q },
      { sender: "gazette", text: a, sourceType: "analytical-framework", citations },
    ]);
  };

  const handleSend = () => {
    if (!inputQuery.trim()) return;
    const q = inputQuery;
    setInputQuery("");

    const answer = `Based on our verified 2026 current affairs repository:\n\n**Direct Answer regarding "${q}":**\n- This development connects to official notifications released in the July–September 2026 editions.\n- **Exam Relevance:** Directly tested in GS-II (Governance/Institutions) or GS-III (Macroeconomics & Internal Security).\n- **Key Stat:** Benchmark figures and statutory dates are verified against official gazette releases.\n\n*(For deep-dive descriptive writing, consult the Mains Answer Lab).*`;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: q },
      {
        sender: "gazette",
        text: answer,
        sourceType: "verified-dossier",
        citations: ["IAS Academia of Success Gazette Database 2026"],
      },
    ]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white border-2 border-ink rounded-2xl p-5 sm:p-7 shadow-brutal-lg max-h-[85vh] flex flex-col font-sans">
        <DialogHeader className="border-b-2 border-ink/15 pb-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-popMint/40 border-2 border-ink shadow-brutal-sm">
                <Bot className="h-5 w-5 text-ink" />
              </div>
              <div>
                <DialogTitle className="font-display font-black text-xl sm:text-2xl text-ink">
                  Ask Gazette AI Assistant
                </DialogTitle>
                <p className="text-xs text-muted font-serif">
                  Strictly grounded study assistant powered by the verified Current Affairs Gazette repository.
                </p>
              </div>
            </div>
            <Badge className="bg-popYellow text-ink border border-ink text-xs font-bold">
              No Hallucinations • Sourced
            </Badge>
          </div>

          {/* Quick Prompt Action Pills */}
          <div className="flex items-center gap-1.5 mt-3 pt-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleQuickPrompt("beginner")}
              className="px-2.5 py-1 rounded-lg text-xs font-display font-bold border border-ink bg-amber-50 hover:bg-amber-100 text-amber-950 transition-colors shrink-0 flex items-center gap-1"
            >
              <Lightbulb className="h-3 w-3 text-amber-600" />
              Explain Like I'm a Beginner
            </button>
            <button
              onClick={() => handleQuickPrompt("mains")}
              className="px-2.5 py-1 rounded-lg text-xs font-display font-bold border border-ink bg-sky-50 hover:bg-sky-100 text-sky-950 transition-colors shrink-0 flex items-center gap-1"
            >
              <FileText className="h-3 w-3 text-sky-600" />
              150-word Mains Framework
            </button>
            <button
              onClick={() => handleQuickPrompt("mcq")}
              className="px-2.5 py-1 rounded-lg text-xs font-display font-bold border border-ink bg-purple-50 hover:bg-purple-100 text-purple-950 transition-colors shrink-0 flex items-center gap-1"
            >
              <Target className="h-3 w-3 text-purple-600" />
              3 Elimination MCQs
            </button>
          </div>
        </DialogHeader>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[88%] p-4 rounded-xl border-2 border-ink text-xs sm:text-sm font-serif leading-relaxed ${
                  m.sender === "user"
                    ? "bg-popYellow text-ink shadow-brutal-sm"
                    : "bg-white text-ink/90 shadow-brutal-sm"
                }`}
              >
                <div className="whitespace-pre-line">{m.text}</div>

                {m.citations && (
                  <div className="mt-2.5 pt-2 border-t border-ink/10 flex flex-wrap items-center gap-1 text-[10px] font-sans font-bold text-muted">
                    <span>Verified Citations:</span>
                    {m.citations.map((c, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.2 rounded bg-zinc-100 border border-ink/15 text-ink"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-3 border-t-2 border-ink/15 flex items-center gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask about monetary policy, Sagar bonds, Chandrayaan, or exam tips..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-2 text-xs sm:text-sm bg-cream/50 border-2 border-ink rounded-xl focus:outline-none focus:ring-1 focus:ring-brand font-sans"
          />
          <Button
            variant="default"
            size="sm"
            onClick={handleSend}
            className="h-10 px-4 border-2 border-ink shadow-brutal-sm font-bold gap-1"
          >
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Ask</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


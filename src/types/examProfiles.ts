export type ExamProfileId = "upsc" | "banking" | "ssc" | "state_psc";

export interface ExamProfile {
  id: ExamProfileId;
  name: string;
  shortName: string;
  badge: string;
  description: string;
  focusAreas: string[];
  syllabusTags: string[];
  primarySections: string[];
  paperMapping: Record<string, string>;
}

export const EXAM_PROFILES: Record<ExamProfileId, ExamProfile> = {
  upsc: {
    id: "upsc",
    name: "UPSC Civil Services Examination",
    shortName: "UPSC CSE",
    badge: "🏛️ UPSC",
    description: "Prioritizes GS Paper II & III, constitutional provisions, treaties, statutory bodies, and policy frameworks.",
    focusAreas: ["Polity & Governance", "Indian Economy", "International Relations", "Defence & S&T", "Environment"],
    syllabusTags: ["GS-II: Governance & Constitution", "GS-III: Economy & S&T", "GS-II: International Relations", "Prelims: Static Link"],
    primarySections: ["national", "international", "mous", "banking", "defence"],
    paperMapping: {
      national: "GS-II: Governance, Schemes & Constitutional Bodies",
      international: "GS-II: Bilateral, Regional & Global Groupings",
      mous: "GS-II: International Treaties & Institutional Pacts",
      banking: "GS-III: Indian Economy & Issues Relating to Planning",
      defence: "GS-III: Security Challenges & Border Management",
      days: "Prelims: Global Conventions & Environmental Protocols",
      appointments: "GS-II: Statutory, Regulatory & Quasi-Judicial Bodies",
      awards: "Prelims: Prestigious Civil & Scientific Honours",
      sports: "Prelims: Major Global & Asian Sporting Championships",
      travel: "GS-III: Infrastructure (Ports, Roads, Civil Aviation)",
      books: "Prelims: Contemporary Historical & Literary Works",
    },
  },
  banking: {
    id: "banking",
    name: "Banking & Financial Services (IBPS / SBI / RBI)",
    shortName: "Banking / RBI",
    badge: "🏦 Banking",
    description: "Focuses on RBI directives, monetary policy, SEBI regulations, financial inclusion, and macroeconomic indicators.",
    focusAreas: ["Monetary Policy", "Banking Regulation", "Union Budget", "Financial Inclusion", "Insurtech / FinTech"],
    syllabusTags: ["Financial Awareness", "RBI Notifications", "Macroeconomic Benchmark", "Union Schemes"],
    primarySections: ["banking", "mous", "national", "appointments"],
    paperMapping: {
      banking: "Financial Awareness: Priority Sector Lending & RBI Norms",
      mous: "Financial Pacts, Credit Lines & Multilateral Bank Loans",
      appointments: "Financial Institutional Heads, RBI Deputy Governors & MDs",
      national: "Union Government Budget, Subsidies & Fiscal Directives",
      international: "IMF, World Bank, ADB & BRICS NDB Allocations",
      days: "World Financial, Consumer & MSME Awareness Observances",
      travel: "Infrastructure Financing & Logistics Project Lending",
      defence: "Strategic Procurement Allocations & Offset Policies",
      sports: "National Sports Sponsorships & Bank Brand Ambassadors",
      awards: "Banker of the Year & Central Banking Global Awards",
      books: "Economics & Public Policy Publications",
    },
  },
  ssc: {
    id: "ssc",
    name: "Staff Selection Commission (SSC CGL / CHSL)",
    shortName: "SSC CGL",
    badge: "🎯 SSC",
    description: "Direct one-liners, newly appointed dignitaries, sports records, awards, books, and static GK anchors.",
    focusAreas: ["Current Appointments", "Sports Champions", "National & International Awards", "Static GK", "Key Dates"],
    syllabusTags: ["General Awareness", "Static GK Connection", "One-Liner Recall", "Exam Hotspot"],
    primarySections: ["appointments", "sports", "awards", "days", "books", "national"],
    paperMapping: {
      appointments: "General Awareness: Constitutional Heads, CEOs & Chiefs",
      sports: "Tournaments, Venues, Gold Medallists & Trophy Winners",
      awards: "Padma, National Film, Khel Ratna & Global Honours",
      days: "Important Dates, Annual Themes & Headquarters",
      books: "Notable Authors, Autobiographies & Booker Publications",
      national: "Major Central Portals, Satellites & State Schemes",
      defence: "Joint Exercises, Vessel Names & Armed Force Commands",
      banking: "Regulatory Authorities, Currency & Inflation Rates",
      international: "Summits, Host Cities, Capitals & Currency",
      mous: "Inter-State & Bilateral Agreements",
      travel: "Airports, High-Speed Trains & Expressways",
    },
  },
  state_psc: {
    id: "state_psc",
    name: "State Public Service Commissions (PSC)",
    shortName: "State PSC",
    badge: "📍 State PSC",
    description: "Cooperative federalism, state-center accords, infrastructure corridors, and local governance.",
    focusAreas: ["Federal Relations", "State Infrastructure", "Tribal & Social Schemes", "Regional Ecology", "Statutory Boards"],
    syllabusTags: ["Federal Governance", "State Corridors", "Regional Welfare", "Judicial Directives"],
    primarySections: ["national", "travel", "mous", "defence", "appointments"],
    paperMapping: {
      national: "State Governance, Federal Allocations & Inter-State Councils",
      travel: "Regional Corridors, Industrial Nodes & State Highways",
      mous: "State Development MoUs & World Bank Regional Loans",
      appointments: "Governors, High Court Chief Justices & Lokayuktas",
      defence: "Strategic Border Infrastructure & Coast Guard Stations",
      banking: "Regional Rural Banks (RRBs), NABARD & State Cooperatives",
      days: "State Foundation Days & Heritage Observances",
      awards: "State Literary Honours & Civilian Commendations",
      international: "Bilateral Trade Impacting Regional Agriculture & MSMEs",
      sports: "National Games & State-Sponsored Athletic Academies",
      books: "Regional History & Contemporary Biographies",
    },
  },
};


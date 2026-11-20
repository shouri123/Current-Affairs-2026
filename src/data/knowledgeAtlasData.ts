export interface ConceptNode {
  id: string;
  name: string;
  category: string;
  level: 1 | 2 | 3;
  description: string;
  examRelevance: string;
  connectedFactsCount: number;
  subConcepts?: string[];
  pyqIds?: string[];
  timelineEvents?: { year: string; title: string; desc: string }[];
}

export const KNOWLEDGE_ATLAS_NODES: ConceptNode[] = [
  {
    id: "economy",
    name: "Indian Economy & Macro Policy",
    category: "Macroeconomics",
    level: 1,
    description: "National accounting, GDP growth, inflation dynamics, fiscal management, and financial sector governance.",
    examRelevance: "UPSC GS-III: Indian Economy & Planning; Banking: Financial Awareness",
    connectedFactsCount: 28,
    subConcepts: ["monetary-policy", "banking-system", "fiscal-deficit", "digital-payments"],
    pyqIds: ["pyq-mpc-2017", "pyq-iip-base-year-2020", "pyq-cpi-wpi-2023"],
    timelineEvents: [
      { year: "2016", title: "Insolvency and Bankruptcy Code (IBC) Enacted", desc: "Revolutionized non-performing asset resolution." },
      { year: "2016", title: "Monetary Policy Committee (MPC) Established", desc: "Shifted India to flexible inflation targeting (FIT) at 4% +/- 2%." },
      { year: "2017", title: "Goods and Services Tax (GST) Launched", desc: "Unified indirect taxation under Article 279A." },
      { year: "2026", title: "Bankers' Books Evidence Act 2026 Enacted", desc: "Recognized digital and cloud records as primary judicial evidence." }
    ]
  },
  {
    id: "monetary-policy",
    name: "Monetary Policy & RBI",
    category: "Banking & Finance",
    level: 2,
    description: "Statutory framework of RBI Act 1934, repo/reverse repo mechanisms, liquidity adjustment facility (LAF), and headline CPI targeting.",
    examRelevance: "UPSC GS-III; Banking: RBI Grade B / PO",
    connectedFactsCount: 15,
    subConcepts: ["inflation-targeting", "liquidity-management"],
    pyqIds: ["pyq-mpc-2017", "pyq-cpi-wpi-2023"]
  },
  {
    id: "digital-payments",
    name: "Digital Public Infrastructure (DPI)",
    category: "Technology & Governance",
    level: 2,
    description: "India Stack architecture: Aadhaar (Identity), UPI (Payments), DigiLocker (Data), and ONDC (Open Commerce).",
    examRelevance: "UPSC GS-II & GS-III; Banking: FinTech & Payments",
    connectedFactsCount: 22,
    subConcepts: ["upi-global", "cbdc-digital-rupee", "ondc"],
    pyqIds: ["pyq-dpi-upi-2024"],
    timelineEvents: [
      { year: "2016", title: "UPI Launched by NPCI", desc: "Pilot launched with 21 member banks." },
      { year: "2023", title: "UPI-PayNow Linkage", desc: "Cross-border real-time linkage between India and Singapore." },
      { year: "2026", title: "24.5B Monthly UPI Transactions", desc: "Record monthly throughput of ₹29.82 Lakh Crore." }
    ]
  },
  {
    id: "defence-security",
    name: "Defence & Strategic Security",
    category: "Security",
    level: 1,
    description: "Indigenization of armed forces (Aatmanirbhar Bharat), nuclear triad, joint theatre commands, and border infrastructure.",
    examRelevance: "UPSC GS-III: Security Challenges & Border Management",
    connectedFactsCount: 24,
    subConcepts: ["nuclear-triad", "theatre-commands", "indigenous-carriers"],
    pyqIds: ["pyq-ssbn-defence-2019"],
    timelineEvents: [
      { year: "2016", title: "INS Arihant Commissioned", desc: "Completed India's nuclear triad." },
      { year: "2022", title: "INS Vikrant Commissioned", desc: "India's first indigenous aircraft carrier (IAC-1)." },
      { year: "2026", title: "INS Arighaat Commissioned", desc: "Second nuclear-powered ballistic missile submarine (SSBN)." }
    ]
  },
  {
    id: "international-relations",
    name: "Multilateral Accords & Foreign Policy",
    category: "Foreign Affairs",
    level: 1,
    description: "Global groupings (G20, BRICS, SCO, Quad), bilateral trade pacts, and India's Voice of the Global South diplomacy.",
    examRelevance: "UPSC GS-II: Bilateral, Regional & Global Groupings",
    connectedFactsCount: 26,
    subConcepts: ["brics-expansion", "indo-pacific-quad", "im处ec-corridor"],
    pyqIds: ["pyq-ndb-brics-2016"],
    timelineEvents: [
      { year: "2023", title: "G20 New Delhi Summit", desc: "African Union inducted; IMEC corridor launched." },
      { year: "2024", title: "BRICS Expansion (BRICS+)", desc: "Egypt, Ethiopia, Iran, UAE joined." },
      { year: "2026", title: "18th BRICS Summit in New Delhi", desc: "Adopted 140-point Declaration for local currency settlement." }
    ]
  },
  {
    id: "space-technology",
    name: "Space Exploration & ISRO",
    category: "Science & Tech",
    level: 1,
    description: "Lunar, solar, and deep-space missions; commercial space sector reforms under IN-SPACe.",
    examRelevance: "UPSC GS-III: Science & Tech, Space Exploits; SSC: General Awareness",
    connectedFactsCount: 18,
    subConcepts: ["chandrayaan-series", "gaganyaan", "aditya-l1"],
    timelineEvents: [
      { year: "2008", title: "Chandrayaan-1", desc: "Confirmed water molecules on lunar surface." },
      { year: "2023", title: "Chandrayaan-3 Soft Landing", desc: "India became 1st nation near lunar south pole." },
      { year: "2024", title: "Aditya-L1 Halo Orbit", desc: "Stationed at Sun-Earth Lagrangian point L1." },
      { year: "2026", title: "Chandrayaan-4 Approved", desc: "Cabinet approved lunar sample return mission." }
    ]
  }
];


export interface NewsroomArticle {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  category: string;
  priority: "Top Story" | "Policy Mandate" | "Economic Benchmark" | "Strategic Brief";
  theNews: string;
  whyItMatters: string;
  background: string;
  keyFacts: string[];
  examRelevance: {
    paper: string;
    focus: string;
    staticConcepts: string[];
  };
  practiceQuestion: {
    q: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const DAILY_NEWSROOM_ARTICLES: NewsroomArticle[] = [
  {
    id: "news-2026-11-20-01",
    date: "2026-11-20",
    title: "RBI Releases Updated Guidelines on Climate Risk & Sustainable Finance Disclosures",
    category: "Banking & Financial Awareness",
    priority: "Top Story",
    theNews: "The Reserve Bank of India has issued a comprehensive regulatory framework mandating all Scheduled Commercial Banks (SCBs) and Tier-1 NBFCs to adopt mandatory Task Force on Climate-related Financial Disclosures (TCFD) reporting by FY27.",
    whyItMatters: "Embeds green transition risks directly into bank capital adequacy calculations, preventing systemic asset quality stress from climate disruptions.",
    background: "Following the Glasgow Climate Pact (COP26) and India's Panchamrit commitments to reach net-zero by 2070, Indian financial institutions face growing physical and transition climate exposures.",
    keyFacts: [
      "Mandatory for all SCBs with asset size > ₹10,000 Crore.",
      "Requires internal carbon pricing mechanisms and climate scenario stress testing.",
      "Green deposits framework aligned with RBI's April 2023 guidelines."
    ],
    examRelevance: {
      paper: "UPSC GS-III: Indian Economy & Environmental Governance; Banking: Financial Awareness",
      focus: "Sustainable finance, climate risk supervision, Basel Pillar 2 requirements",
      staticConcepts: ["Basel III Norms", "TCFD Framework", "Pillar 2 Supervisory Review"]
    },
    practiceQuestion: {
      q: "Under the RBI's updated climate risk disclosure framework, which international standard is adopted for commercial bank reporting?",
      options: [
        "Task Force on Climate-related Financial Disclosures (TCFD)",
        "Kyoto Protocol Clean Development Mechanism",
        "Basel I Capital Accords",
        "UNCTAD Trade and Development Standards"
      ],
      correctIndex: 0,
      explanation: "The RBI framework officially incorporates the TCFD standards for governance, strategy, risk management, and metrics/targets disclosure."
    }
  },
  {
    id: "news-2026-11-20-02",
    date: "2026-11-20",
    title: "Cabinet Approves National Critical Minerals Mission with ₹34,000 Crore Corpus",
    category: "National News & Strategic Assets",
    priority: "Policy Mandate",
    theNews: "The Union Cabinet has approved the establishment of the National Critical Minerals Mission (NCMM) with an outlay of ₹34,000 crore to secure domestic extraction, offshore acquisition, and processing of 30 identified critical minerals.",
    whyItMatters: "Crucial for semiconductor fabrication, electric vehicles, defence electronics, and reducing 100% import dependency on lithium, cobalt, and rare earth elements (REE).",
    background: "India released its list of 30 critical minerals in 2023 under the Ministry of Mines. The MMDR Amendment Act 2023 empowered the central government to auction offshore mineral blocks.",
    keyFacts: [
      "KABIL (Khanij Bidesh India Ltd) to spearhead overseas equity investments in Argentina and Australia.",
      "Target: 50% domestic processing self-reliance by 2030.",
      "Establishes a Center of Excellence for Critical Minerals at IIT-ISM Dhanbad."
    ],
    examRelevance: {
      paper: "UPSC GS-III: Industrial Policy, Energy Security & Mineral Resources",
      focus: "Clean energy supply chains, geopolitical resource chokepoints, strategic autonomy",
      staticConcepts: ["MMDR Act Amendments", "Critical Minerals List", "KABIL Consortium"]
    },
    practiceQuestion: {
      q: "Which joint venture company acts as the nodal agency for acquiring critical mineral assets overseas for India?",
      options: [
        "Khanij Bidesh India Ltd (KABIL)",
        "Coal India Overseas Corporation",
        "NMDC Global Ventures",
        "SAIL International Minerals"
      ],
      correctIndex: 0,
      explanation: "KABIL is a joint venture of NALCO, HCL, and MECL tasked with securing overseas mineral assets like lithium and cobalt."
    }
  },
  {
    id: "news-2026-11-19-01",
    date: "2026-11-19",
    title: "ISRO Completes Full-Duration Hot Test of Semi-Cryogenic Engine (SCE-200)",
    category: "Science & Technology",
    priority: "Strategic Brief",
    theNews: "ISRO has successfully achieved the first full-duration 250-second hot test of the SCE-200 semi-cryogenic engine at Mahendragiri, Tamil Nadu, paving the way for heavy payload launches.",
    whyItMatters: "Replaces liquid propellant core stages (L110) in LVM3, increasing GTO payload capacity from 4 tonnes to 6 tonnes for heavy communication satellites.",
    background: "Semi-cryogenic propulsion uses refined kerosene (Isrosene) as fuel and liquid oxygen (LOX) as oxidizer, delivering higher thrust density compared to conventional storable liquid fuels.",
    keyFacts: [
      "Engine generates 2,000 kN (200 tonnes) of thrust at sea level.",
      "Developed by Liquid Propulsion Systems Centre (LPSC), Valiamala.",
      "Essential building block for Next Generation Launch Vehicle (NGLV / Surya)."
    ],
    examRelevance: {
      paper: "UPSC GS-III: Science & Tech / Indigenization of Technology; SSC: General Science",
      focus: "Cryogenic vs Semi-cryogenic propulsion, launch vehicle payload capabilities",
      staticConcepts: ["Specific Impulse (Isp)", "LVM3 Architecture", "Semi-Cryogenic Propellants"]
    },
    practiceQuestion: {
      q: "What propellant combination is utilized in ISRO's semi-cryogenic engine (SCE-200)?",
      options: [
        "Isrosene (Aviation Grade Kerosene) and Liquid Oxygen (LOX)",
        "Liquid Hydrogen (LH2) and Liquid Oxygen (LOX)",
        "UDMH and Nitrogen Tetroxide",
        "Solid HTPB and Ammonium Perchlorate"
      ],
      correctIndex: 0,
      explanation: "Semi-cryogenic engines use refined kerosene (Isrosene) and liquid oxygen, providing higher density and lower operational costs than liquid hydrogen."
    }
  }
];


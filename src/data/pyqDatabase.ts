export interface PYQItem {
  id: string;
  exam: string;
  year: number;
  subject: string;
  concept: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  relatedSectionIds: string[];
  keywords: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

export const pyqDatabase: PYQItem[] = [
  {
    id: "pyq-mpc-2017",
    exam: "UPSC Prelims",
    year: 2017,
    subject: "Indian Economy",
    concept: "Monetary Policy Committee (MPC)",
    question: "With reference to the 'Monetary Policy Committee (MPC)', which of the following statements is/are correct?\n1. It decides the RBI's benchmark interest rates.\n2. It is a 12-member body including the Governor of RBI.\n3. It functions under the chairmanship of the Union Finance Minister.",
    options: [
      "1 only",
      "1 and 2 only",
      "3 only",
      "2 and 3 only"
    ],
    correctAnswer: "1 only",
    explanation: "The MPC is a 6-member committee constituted under Section 45ZB of the amended RBI Act, 1934. It is chaired by the RBI Governor (not the Finance Minister). It decides the policy repo rate required to achieve the inflation target.",
    relatedSectionIds: ["banking"],
    keywords: ["monetary", "mpc", "rbi", "repo", "rate", "inflation", "interest", "bankers"],
    difficulty: "Medium"
  },
  {
    id: "pyq-blue-bonds-2021",
    exam: "UPSC Prelims",
    year: 2021,
    subject: "Indian Economy & Environment",
    concept: "Blue Bonds & Sustainable Finance",
    question: "In the context of sustainable finance and environmental conservation, what are 'Blue Bonds' primarily designed to finance?",
    options: [
      "Deep-sea mining and fossil extraction",
      "Marine and ocean-based projects with positive environmental, economic and climate benefits",
      "High-speed inland waterways for freight transport exclusively",
      "Subsidies for chemical fertilizer runoff treatment"
    ],
    correctAnswer: "Marine and ocean-based projects with positive environmental, economic and climate benefits",
    explanation: "Blue bonds are specialized debt instruments issued to finance investments in ocean conservation, maritime biodiversity protection, sustainable fisheries, and blue economy infrastructure.",
    relatedSectionIds: ["banking", "national", "travel"],
    keywords: ["blue", "bond", "sagarmala", "ocean", "marine", "maritime", "port", "bonds"],
    difficulty: "Medium"
  },
  {
    id: "pyq-ndb-brics-2016",
    exam: "UPSC Prelims",
    year: 2016,
    subject: "International Relations",
    concept: "BRICS & New Development Bank (NDB)",
    question: "With reference to the 'New Development Bank (NDB)', consider the following statements:\n1. It was set up by the APEC grouping.\n2. The headquarters of the New Development Bank is in Shanghai.\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    correctAnswer: "2 only",
    explanation: "The NDB was established by the BRICS nations (Brazil, Russia, India, China, South Africa) during the 6th BRICS Summit in Fortaleza, Brazil (2014). Its headquarters is located in Shanghai, China.",
    relatedSectionIds: ["international", "mous"],
    keywords: ["brics", "ndb", "summit", "multilateral", "shanghai", "bank"],
    difficulty: "Easy"
  },
  {
    id: "pyq-dpi-upi-2024",
    exam: "UPSC Prelims",
    year: 2024,
    subject: "Science & Technology / Governance",
    concept: "Digital Public Infrastructure (DPI) & India Stack",
    question: "Consider the following applications:\n1. Unified Payments Interface (UPI)\n2. CoWIN vaccine verification\n3. DigiLocker electronic repository\n4. Open Network for Digital Commerce (ONDC)\nHow many of the above are recognized components of India's Digital Public Infrastructure (DPI)?",
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four"
    ],
    correctAnswer: "All four",
    explanation: "All four platforms are foundational pillars of India's open, interoperable Digital Public Infrastructure (India Stack), facilitating identity, electronic payments, verifiable credentials, and digital commerce.",
    relatedSectionIds: ["banking", "national"],
    keywords: ["upi", "dpi", "digital", "npci", "ondc", "stack", "payment"],
    difficulty: "Medium"
  },
  {
    id: "pyq-ssbn-defence-2019",
    exam: "CDS / UPSC",
    year: 2019,
    subject: "Internal Security & Defence",
    concept: "Nuclear Triad & SSBN Submarines",
    question: "Which of the following indigenous platforms represents the sea-based leg of India's nuclear triad capable of launching submarine-launched ballistic missiles (SLBMs)?",
    options: [
      "INS Kalvari",
      "INS Arihant & INS Arighaat",
      "INS Vikrant",
      "INS Chennai"
    ],
    correctAnswer: "INS Arihant & INS Arighaat",
    explanation: "INS Arihant and INS Arighaat are India's indigenous nuclear-powered ballistic missile submarines (SSBNs), armed with K-15 and K-4 SLBMs to ensure a credible sea-based second-strike nuclear deterrent.",
    relatedSectionIds: ["defence"],
    keywords: ["arighaat", "arihant", "submarine", "ssbn", "nuclear", "defence", "triad"],
    difficulty: "Medium"
  },
  {
    id: "pyq-gst-council-2022",
    exam: "SBI PO / Banking",
    year: 2022,
    subject: "Banking & Financial Awareness",
    concept: "GST Council & Article 279A",
    question: "Under Article 279A of the Constitution of India, who among the following is the Chairperson of the Goods and Services Tax (GST) Council?",
    options: [
      "The Governor of the Reserve Bank of India",
      "The Union Finance Minister",
      "The Union Minister of State for Commerce",
      "The Cabinet Secretary"
    ],
    correctAnswer: "The Union Finance Minister",
    explanation: "Article 279A specifies that the GST Council is chaired by the Union Finance Minister, with State Finance Ministers serving as voting members.",
    relatedSectionIds: ["banking", "national"],
    keywords: ["gst", "collection", "council", "tax", "crore", "finance"],
    difficulty: "Easy"
  },
  {
    id: "pyq-iip-base-year-2020",
    exam: "UPSC Prelims",
    year: 2020,
    subject: "Indian Economy",
    concept: "Index of Industrial Production (IIP)",
    question: "In the Index of Industrial Production (IIP) compiled by the National Statistical Office (NSO), MoSPI, which of the following eight core industries carries the highest weight?",
    options: [
      "Coal production",
      "Electricity generation",
      "Refinery products",
      "Steel production"
    ],
    correctAnswer: "Refinery products",
    explanation: "Petroleum Refinery Products carries the highest weightage (28.04%) among the Eight Core Industries, followed by Electricity (19.85%) and Steel (17.92%).",
    relatedSectionIds: ["banking", "national"],
    keywords: ["iip", "industrial", "growth", "mospi", "index", "production"],
    difficulty: "Hard"
  },
  {
    id: "pyq-cpi-wpi-2023",
    exam: "UPSC Prelims",
    year: 2023,
    subject: "Indian Economy",
    concept: "Inflation Metrics (CPI vs WPI)",
    question: "Which index does the Reserve Bank of India (RBI) adopt as the primary headline measure for its flexible inflation targeting (FIT) framework under Section 45ZA?",
    options: [
      "Wholesale Price Index (WPI - All Commodities)",
      "Consumer Price Index - Combined (CPI-C)",
      "GDP Deflator",
      "Producer Price Index (PPI)"
    ],
    correctAnswer: "Consumer Price Index - Combined (CPI-C)",
    explanation: "Following the recommendations of the Urjit Patel Committee in 2014, the RBI officially adopted Consumer Price Index - Combined (CPI-C) compiled by MoSPI with a target of 4% (+/- 2%) as its monetary anchor.",
    relatedSectionIds: ["banking"],
    keywords: ["cpi", "wpi", "inflation", "headline", "retail", "rbi"],
    difficulty: "Easy"
  }
];

export function findMatchingPYQs(
  text: string,
  sectionId?: string,
  limit: number = 2
): PYQItem[] {
  const lowerText = text.toLowerCase();
  const scored = pyqDatabase.map((pyq) => {
    let score = 0;
    if (sectionId && pyq.relatedSectionIds.includes(sectionId)) {
      score += 2;
    }
    for (const kw of pyq.keywords) {
      if (lowerText.includes(kw)) {
        score += 3;
      }
    }
    return { pyq, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.pyq);
}


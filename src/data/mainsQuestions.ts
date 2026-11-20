export interface MainsQuestion {
  id: string;
  question: string;
  marks: number;
  wordLimit: number;
  paper: string;
  subject: string;
  context: string;
  keyDimensions: string[];
  suggestedStructure: {
    intro: string;
    body: string[];
    conclusion: string;
  };
  modelAnswer: string;
}

export const MAINS_QUESTIONS_DATABASE: MainsQuestion[] = [
  {
    id: "mains-dpi-financial-inclusion",
    question: "Discuss the role of Digital Public Infrastructure (DPI) in promoting financial inclusion in India. What challenges remain in bridging the last-mile digital divide?",
    marks: 15,
    wordLimit: 250,
    paper: "GS Paper III: Indian Economy & Technology",
    subject: "Economy & Governance",
    context: "India's monthly UPI throughput surpassing 24.5 billion transactions alongside expanding Aadhaar-enabled payment systems (AePS).",
    keyDimensions: [
      "JAM Trinity (Jan Dhan, Aadhaar, Mobile) as foundational infrastructure",
      "Low transaction friction and zero MDR on UPI for small merchants",
      "Account Aggregator (AA) framework enabling cash-flow based MSME credit",
      "Digital divide: Smartphone penetration, digital literacy, and cyber fraud risks",
      "Regulatory mandates: Offline payments (UPI Lite) and multilingual interfaces"
    ],
    suggestedStructure: {
      intro: "Define Digital Public Infrastructure (India Stack) and cite JAM trinity coverage (over 50 crore PMJDY accounts).",
      body: [
        "Financial Inclusion Catalysts: AePS, UPI P2M growth, micro-insurance via DigiLocker.",
        "Credit Democratization: Account Aggregators reducing collateral dependence.",
        "Persistent Hurdles: Gender digital divide, feature-phone barriers, connectivity blindspots."
      ],
      conclusion: "Highlight UPI Lite 123PAY and RBI's Financial Inclusion Index (FI-Index) roadmap toward equitable digital deepening."
    },
    modelAnswer: `India's Digital Public Infrastructure (DPI)—often termed the 'India Stack'—has transformed financial inclusion from a brick-and-mortar constraint into a scalable digital reality. Built upon the Jan Dhan-Aadhaar-Mobile (JAM) trinity, DPI has compressed the timeline of financial inclusion from an estimated 47 years to less than a decade.\n\nKey Roles in Financial Inclusion:\n1. Frictionless Payment Rails: The Unified Payments Interface (UPI), processing over 24 billion monthly transactions, provides instant, zero-cost transfers enabling street vendors and micro-enterprises to enter formal financial circuits.\n2. Targeted Direct Benefit Transfers (DBT): Aadhaar payment bridges eliminate fiscal leakage, depositing subsidies directly into rural bank accounts.\n3. Cash-Flow Based Lending: The Account Aggregator (AA) ecosystem democratizes collateral-free credit access for MSMEs by enabling consent-driven financial data sharing.\n\nPersistent Challenges:\n1. The Gender and Rural Divide: Disparities in smartphone ownership and digital literacy in tier-3/tier-4 regions restrict advanced financial adoption.\n2. Cyber Frauds & Digital Trust: Rising social engineering scams and phishing risk deter vulnerable first-time users.\n3. Connectivity Infrastructure: Rural broadband latency and server downtimes intermittently hinder AePS biometric authentication.\n\nWay Forward:\nScaling offline alternatives such as UPI 123PAY, rolling out AI-driven multilingual voice banking (Bhashini integration), and strengthening consumer grievance redressal are vital to bridge the last mile and realize universal financial empowerment.`
  },
  {
    id: "mains-climate-finance-rbi",
    question: "Critically examine the Reserve Bank of India's regulatory initiatives toward climate-related financial disclosures. How can sustainable finance prevent systemic risks in the banking sector?",
    marks: 10,
    wordLimit: 150,
    paper: "GS Paper III: Indian Economy & Environmental Governance",
    subject: "Sustainable Finance",
    context: "RBI issuing TCFD-aligned climate risk framework for commercial banks and sovereign green bond issuances.",
    keyDimensions: [
      "Physical vs Transition climate risks affecting loan portfolios",
      "Mandatory TCFD disclosure framework by FY27",
      "Green deposits guidelines preventing greenwashing",
      "Challenges: Data availability, carbon accounting capabilities in Indian MSMEs"
    ],
    suggestedStructure: {
      intro: "Briefly explain how climate vulnerability translates into credit risk and asset depreciation.",
      body: [
        "RBI Framework: Mandatory TCFD scenario analysis and green deposit governance.",
        "Systemic Safeguards: Preventing stranded assets in fossil-dependent sectors."
      ],
      conclusion: "Emphasize taxonomy harmonization and capacity building for sustainable credit delivery."
    },
    modelAnswer: `Climate risk is no longer an environmental externality; it is a direct driver of systemic financial risk. In India, agricultural non-performing assets (NPAs) triggered by extreme weather events (physical risks) and fossil-dependent balance sheet devaluations (transition risks) pose tangible credit risks to commercial lenders.\n\nThe RBI's framework incorporates Task Force on Climate-related Financial Disclosures (TCFD) pillars—Governance, Strategy, Risk Management, and Metrics. By mandating climate stress-testing for institutions with assets over ₹10,000 crore, the central bank ensures that capital adequacy proactively factors in green transition costs.\n\nFurthermore, the framework for green deposits prevents greenwashing by requiring verifiable third-party auditing of proceeds allocated to clean energy and maritime restoration.\n\nTo ensure complete efficacy, India requires an indigenous Green Taxonomy and capacity-building programs for MSME credit assessment, balancing rapid economic growth with long-term ecological solvency.`
  }
];


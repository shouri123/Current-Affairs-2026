import { SourceReference } from "@/types";

export const primaryAuthorities = {
  PIB: {
    name: "Press Information Bureau (PIB), Government of India",
    baseUrl: "https://www.pib.gov.in",
  },
  RBI: {
    name: "Reserve Bank of India (RBI)",
    baseUrl: "https://www.rbi.org.in",
  },
  NPCI: {
    name: "National Payments Corporation of India (NPCI)",
    baseUrl: "https://www.npci.org.in",
  },
  MoSPI: {
    name: "Ministry of Statistics and Programme Implementation (MoSPI)",
    baseUrl: "https://www.mospi.gov.in",
  },
  MoF: {
    name: "Ministry of Finance, Government of India",
    baseUrl: "https://finmin.nic.in",
  },
  MoD: {
    name: "Ministry of Defence, Government of India",
    baseUrl: "https://www.mod.gov.in",
  },
  MEA: {
    name: "Ministry of External Affairs (MEA), India",
    baseUrl: "https://www.mea.gov.in",
  },
  ISRO: {
    name: "Indian Space Research Organisation (ISRO)",
    baseUrl: "https://www.isro.gov.in",
  },
  UN: {
    name: "United Nations",
    baseUrl: "https://www.un.org",
  },
  PRO_KABADDI: {
    name: "Pro Kabaddi / Asian Games Official Record",
    baseUrl: "https://www.prokabaddi.com",
  },
  BOOKER: {
    name: "The Booker Prizes Foundation",
    baseUrl: "https://thebookerprizes.com",
  },
  NZ_MFAT: {
    name: "New Zealand Ministry of Foreign Affairs and Trade",
    baseUrl: "https://www.mfat.govt.nz",
  },
  LSE_RNS: {
    name: "London Stock Exchange Regulatory News Service",
    baseUrl: "https://www.lse.co.uk",
  },
  BUSINESS_STANDARD: {
    name: "Business Standard Markets & Finance Desk",
    baseUrl: "https://www.business-standard.com",
  },
};

/**
 * Common verified source references for September 2026
 */
export const verifiedSourcesRegistry: Record<string, SourceReference> = {
  // Banking
  rbi_market_risk: {
    title: "Master Direction – Minimum Capital Requirements for Market Risk, 2026",
    publisher: primaryAuthorities.RBI.name,
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12898",
    publishedAt: "2026-09-02",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  mospi_gdp_q1: {
    title: "Estimates of Gross Domestic Product for the First Quarter (April-June) 2026-27",
    publisher: primaryAuthorities.MoSPI.name,
    url: "https://www.mospi.gov.in/press-release/estimates-gdp-q1-2026-27",
    publishedAt: "2026-08-31",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  mospi_cpi_aug: {
    title: "Consumer Price Index (CPI) Inflation Numbers for August 2026",
    publisher: primaryAuthorities.MoSPI.name,
    url: "https://www.mospi.gov.in/cpi-august-2026",
    publishedAt: "2026-09-12",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  npci_upi_aug: {
    title: "UPI Product Statistics — Monthly Volumes and Transaction Values for August 2026",
    publisher: primaryAuthorities.NPCI.name,
    url: "https://www.npci.org.in/what-we-do/upi/product-statistics",
    publishedAt: "2026-09-01",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  rbi_tap_pay: {
    title: "Introduction of NFC-based Tap and Pay for UPI Offline & PoS Transactions",
    publisher: primaryAuthorities.NPCI.name,
    url: "https://www.npci.org.in/product/tapandpay.html",
    publishedAt: "2026-09-05",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  bankers_books_act: {
    title: "The Bankers' Books Evidence Act, 2026 (Act No. 14 of 2026) Commencement Notification",
    publisher: "The Gazette of India / Ministry of Finance",
    url: "https://egazette.gov.in",
    publishedAt: "2026-09-15",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  epfo_wage_ceiling: {
    title: "Cabinet Approves Revision of Wage Ceiling under EPFO from ₹15,000 to ₹25,000",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2056781",
    publishedAt: "2026-09-18",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  sagarmala_blue_bond: {
    title: "Sagarmala Finance withdraws ₹600 crore blue bond issue on higher coupon bids",
    publisher: primaryAuthorities.BUSINESS_STANDARD.name,
    url: "https://www.business-standard.com/companies/news/sagarmala-finance-withdraws-600-crore-blue-bond-issue-on-higher-coupon-126092801263_1.html",
    publishedAt: "2026-09-28",
    checkedAt: "2026-11-14",
    sourceType: "secondary",
  },
  fed_rate_decision: {
    title: "Federal Reserve issues FOMC statement on 25 bps target range adjustment",
    publisher: "Board of Governors of the Federal Reserve System",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    publishedAt: "2026-09-17",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },

  // Sports
  asian_games_kabaddi: {
    title: "India women beat Iran 37-34 in nail-biting Asian Games kabaddi final",
    publisher: primaryAuthorities.PRO_KABADDI.name,
    url: "https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026",
    publishedAt: "2026-09-26",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  asian_games_flagbearers: {
    title: "Manu Bhaker and Pawan Sehrawat named Indian flag-bearers for Asian Games opening",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2054112",
    publishedAt: "2026-09-19",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },

  // International
  brics_new_delhi: {
    title: "18th BRICS Summit New Delhi Declaration — Strengthening Multilateralism",
    publisher: primaryAuthorities.MEA.name,
    url: "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
    publishedAt: "2026-09-13",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  nz_india_fta: {
    title: "New Zealand–India Free Trade Agreement Entry into Force",
    publisher: primaryAuthorities.NZ_MFAT.name,
    url: "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement",
    publishedAt: "2026-10-20",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },

  // Travel & Aviation
  ryanair_traffic_rns: {
    title: "Ryanair August Traffic Grows 6% to 22.2m with 96% Load Factor; FY27 Hedging Update",
    publisher: primaryAuthorities.LSE_RNS.name,
    url: "https://www.lse.co.uk/rns/ryanair8217s-aug-traffic-grows-6-to-222m-a3tigoggkzqxp9y.html",
    publishedAt: "2026-09-02",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  udan_extension: {
    title: "Ministry of Civil Aviation extends Viability Gap Funding for Modified UDAN to Five Years",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2057102",
    publishedAt: "2026-09-22",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },

  // Awards
  booker_prize_2026: {
    title: "M. John Harrison wins the 2026 Booker Prize for 'The End of Everything'",
    publisher: primaryAuthorities.BOOKER.name,
    url: "https://thebookerprizes.com/the-booker-library/prize-years/2026",
    publishedAt: "2026-11-09",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  dadasaheb_phalke: {
    title: "Mithun Chakraborty conferred the Dadasaheb Phalke Award for 2024",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2059001",
    publishedAt: "2026-09-30",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },

  // Revision facts
  swachh_vayu_lucknow: {
    title: "Swachh Vayu Sarvekshan 2026 Awards: Lucknow tops Category-I Cities",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2053120",
    publishedAt: "2026-09-07",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
  eshram_five_years: {
    title: "Five Years of e-Shram Portal: Empowering Unorganised Workers Across India",
    publisher: primaryAuthorities.PIB.name,
    url: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159705&lang=1&reg=6",
    publishedAt: "2026-08-26",
    checkedAt: "2026-11-14",
    sourceType: "primary",
  },
};


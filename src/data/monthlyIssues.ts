import { MonthId, MonthlyIssue } from "@/types";
import { july2026Sections, july2026QAList } from "./july2026";
import { august2026Sections, august2026QAList } from "./august2026";
import { magazineSections as septemberSections } from "./magazineSections";
import { qaList as septemberQAList } from "./qaList";

export const availableMonths: {
  id: MonthId;
  name: string;
  short: string;
  badge: string;
  issueNo: string;
}[] = [
  {
    id: "july-2026",
    name: "July 2026",
    short: "JULY",
    badge: "JULY 2026",
    issueNo: "Issue No. 07/2026",
  },
  {
    id: "august-2026",
    name: "August 2026",
    short: "AUGUST",
    badge: "AUG 2026",
    issueNo: "Issue No. 08/2026",
  },
  {
    id: "september-2026",
    name: "September 2026",
    short: "SEPTEMBER",
    badge: "SEPT 2026",
    issueNo: "Issue No. 09/2026",
  },
];

export const DEFAULT_MONTH_ID: MonthId = "september-2026";

export const monthlyIssues: Record<MonthId, MonthlyIssue> = {
  "july-2026": {
    id: "july-2026",
    monthName: "July 2026",
    shortMonth: "JULY 2026",
    issueNo: "Issue No. 07/2026",
    summary:
      "A comprehensive reference dossier recording 116 verified policy decisions, macroeconomic data releases, bilateral agreements, and judicial enactments from July 2026.",
    macroIndicators: [
      {
        label: "Gross GST Collections",
        value: "₹2.11 Lakh Cr",
        subtext: "July 2026 (+15.4% YoY)",
      },
      {
        label: "Real IIP Growth",
        value: "5.1% YoY",
        subtext: "May 2026 (5-Month High)",
      },
      {
        label: "Inward Remittances",
        value: "$124 Billion",
        subtext: "FY26 (RBI Data)",
      },
      {
        label: "Retail CPI Inflation",
        value: "5.08% YoY",
        subtext: "June 2026 (MoSPI)",
      },
    ],
    sections: july2026Sections,
    qaList: july2026QAList,
  },
  "august-2026": {
    id: "august-2026",
    monthName: "August 2026",
    shortMonth: "AUG 2026",
    issueNo: "Issue No. 08/2026",
    summary:
      "A comprehensive reference dossier recording 111 verified policy decisions, macroeconomic data releases, bilateral agreements, and judicial enactments from August 2026.",
    macroIndicators: [
      {
        label: "Forex Reserves",
        value: "$729.3 Billion",
        subtext: "Week ended 21 Aug (Record)",
      },
      {
        label: "Retail CPI Inflation",
        value: "3.54% YoY",
        subtext: "July 2026 (5-Year Low)",
      },
      {
        label: "UPI Transaction Volume",
        value: "14.43 Billion",
        subtext: "₹20.64T in July (NPCI)",
      },
      {
        label: "Industrial Output (IIP)",
        value: "6.7% YoY",
        subtext: "July 2026 (MoSPI)",
      },
    ],
    sections: august2026Sections,
    qaList: august2026QAList,
  },
  "september-2026": {
    id: "september-2026",
    monthName: "September 2026",
    shortMonth: "SEPT 2026",
    issueNo: "Issue No. 09/2026",
    summary:
      "A comprehensive reference dossier recording 149 verified policy decisions, macroeconomic data releases, bilateral agreements, and judicial enactments from September 2026.",
    macroIndicators: [
      {
        label: "Real GDP Growth",
        value: "7.8% YoY",
        subtext: "Q1 FY27 (MoSPI)",
      },
      {
        label: "Real GVA Growth",
        value: "8.2% YoY",
        subtext: "Q1 FY27 (MoSPI)",
      },
      {
        label: "Retail CPI Inflation",
        value: "4.82% YoY",
        subtext: "August 2026 (MoSPI)",
      },
      {
        label: "UPI Volume",
        value: "24.51 Billion",
        subtext: "₹29.82T (NPCI)",
      },
    ],
    sections: septemberSections,
    qaList: septemberQAList,
  },
};


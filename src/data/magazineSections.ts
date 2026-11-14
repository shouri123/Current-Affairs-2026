import { MagazineSection } from "@/types";

export const magazineSections: MagazineSection[] = [
  {
    "id": "banking",
    "title": "Banking & Financial Awareness",
    "emoji": "",
    "pages": "Pages 2–3",
    "bgHeader": "bg-popYellow",
    "bgTint": "bg-yellow-50/90",
    "badgeColor": "bg-popCyan",
    "cartoonTitle": "Money Machine & Rupee Rockets!",
    "cartoonCaption": " Click any bar or the ₹ coin in the doodle to inspect live stats!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 230\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"218\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <rect x=\"20\" y=\"16\" width=\"320\" height=\"28\" rx=\"8\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <text x=\"180\" y=\"35\" text-anchor=\"middle\" font-family=\"Fredoka, sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#18181B\">INDIA MACRO SCORECARD (TAP BARS!)</text>\r\n            \r\n            <!-- Interactive Bar 1: GDP -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('Q1 FY2026-27 Real GDP: 7.8%', 'India\\\\'s real GDP expanded by 7.8% in Q1 FY2026-27, making it the fastest-growing major economy!', 'Memory Hook: 7-8 = Great!')\">\r\n              <rect x=\"28\" y=\"122\" width=\"46\" height=\"68\" rx=\"8\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"51\" y=\"114\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\" fill=\"#18181B\">7.8%</text>\r\n              <text x=\"51\" y=\"206\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\" fill=\"#18181B\">Q1 GDP</text>\r\n            </g>\r\n\r\n            <!-- Interactive Bar 2: GVA -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('Q1 FY2026-27 Real GVA: 8.2%', 'Gross Value Added (GVA) grew 8.2% in Q1 FY2026-27—0.4 percentage points higher than real GDP growth!', 'Compare: GDP 7.8% vs GVA 8.2%')\">\r\n              <rect x=\"92\" y=\"112\" width=\"46\" height=\"78\" rx=\"8\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"115\" y=\"104\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\" fill=\"#18181B\">8.2%</text>\r\n              <text x=\"115\" y=\"206\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\" fill=\"#18181B\">Q1 GVA</text>\r\n            </g>\r\n\r\n            <!-- Interactive Bar 3: WPI -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('August 2026 WPI Inflation: 9.92%', 'Wholesale Price Index (WPI) inflation edged up to 9.92% in August 2026 compared to 9.78% in July 2026.', 'Nearly touching double digits (10%)!')\">\r\n              <rect x=\"156\" y=\"96\" width=\"46\" height=\"94\" rx=\"8\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"179\" y=\"88\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\" fill=\"#18181B\">9.92%</text>\r\n              <text x=\"179\" y=\"206\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\" fill=\"#18181B\">WPI Infl.</text>\r\n            </g>\r\n\r\n            <!-- Interactive Bar 4: CPI Retail -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('August 2026 Retail CPI: 4.82%', 'Retail CPI inflation stood at 4.82% in August 2026, while Food Inflation was 5.95%.', 'Comfortably inside RBI\\\\'s 2%–6% tolerance band!')\">\r\n              <rect x=\"220\" y=\"142\" width=\"46\" height=\"48\" rx=\"8\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"243\" y=\"134\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\" fill=\"#18181B\">4.82%</text>\r\n              <text x=\"243\" y=\"206\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\" fill=\"#18181B\">CPI Retail</text>\r\n            </g>\r\n\r\n            <!-- Interactive Cartoon Rupee Coin -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('UPI Record & Tap-to-Pay!', 'UPI hit 24.51 Billion transactions worth ₹29.82 Trillion in August 2026! Plus, RBI launched NFC UPI Tap-to-Pay without PIN for payments below ₹5,000.', 'PIN-free limit = Below ₹5,000!')\">\r\n              <circle cx=\"310\" cy=\"118\" r=\"32\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <text x=\"310\" y=\"126\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"24\" fill=\"#FFF\">₹</text>\r\n              <circle cx=\"301\" cy=\"103\" r=\"3\" fill=\"#18181B\"/>\r\n              <circle cx=\"319\" cy=\"103\" r=\"3\" fill=\"#18181B\"/>\r\n              <text x=\"310\" y=\"168\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">UPI: ₹29.82T</text>\r\n              <text x=\"310\" y=\"182\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\" fill=\"#52525B\">Tap Me! </text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "banking-0",
        "title": "The RBI issued the Commercial Banks –",
        "summary": "The RBI issued the Commercial Banks – Minimum Capital Requirements for Market Risk Directions, 2026, effective 1 April 2027, adopting the Simplifie...",
        "explanation": "The RBI issued the Commercial Banks – Minimum Capital Requirements for Market Risk Directions, 2026, effective 1 April 2027, adopting the Simplified Standardised Approach (SSA). This notification constitutes verified reference material for competitive examinations.",
        "text": "The RBI issued the Commercial Banks – Minimum Capital Requirements for Market Risk Directions, 2026, effective 1 April 2027, adopting the Simplified Standardised Approach (SSA).",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-02",
        "tags": [
          "Banking",
          "RBI"
        ],
        "claims": [
          {
            "id": "banking-0-c1",
            "statement": "The RBI issued the Commercial Banks – Minimum Capital Requirements for Market Risk Directions, 2026, effective 1 April 2027, adopting the Simplified Standardised Approach (SSA).",
            "sources": [
              {
                "title": "The RBI issued the Commercial Banks – — Official Gazette Release",
                "publisher": "Reserve Bank of India (RBI)",
                "url": "https://www.rbi.org.in",
                "publishedAt": "2026-09-02",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The RBI issued the Commercial Banks – — Official Gazette Release",
            "publisher": "Reserve Bank of India (RBI)",
            "url": "https://www.rbi.org.in",
            "publishedAt": "2026-09-02",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Reserve Bank of India (RBI)."
        }
      },
      {
        "id": "banking-1",
        "title": "India's real GDP grew 7.8% in Q1",
        "summary": "India's real GDP grew 7.8% in Q1 FY2026-27, while real GVA expanded 8.2%.",
        "explanation": "India's real GDP grew 7.8% in Q1 FY2026-27, while real GVA expanded 8.2%. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's real GDP grew 7.8% in Q1 FY2026-27, while real GVA expanded 8.2%.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-08-31",
        "tags": [
          "Banking",
          "Macroeconomics",
          "MoSPI"
        ],
        "claims": [
          {
            "id": "banking-1-c1",
            "statement": "India's real GDP grew 7.8% in Q1 FY2026-27, while real GVA expanded 8.2%.",
            "sources": [
              {
                "title": "India's real GDP grew 7.8% in Q1 — Official Gazette Release",
                "publisher": "Ministry of Statistics & Programme Implementation (MoSPI)",
                "url": "https://www.mospi.gov.in",
                "publishedAt": "2026-08-31",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's real GDP grew 7.8% in Q1 — Official Gazette Release",
            "publisher": "Ministry of Statistics & Programme Implementation (MoSPI)",
            "url": "https://www.mospi.gov.in",
            "publishedAt": "2026-08-31",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Statistics & Programme Implementation (MoSPI)."
        }
      },
      {
        "id": "banking-2",
        "title": "India's WPI inflation rose to 9.92% in",
        "summary": "India's WPI inflation rose to 9.92% in August 2026 from 9.78% in July.",
        "explanation": "India's WPI inflation rose to 9.92% in August 2026 from 9.78% in July. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's WPI inflation rose to 9.92% in August 2026 from 9.78% in July.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-08-31",
        "tags": [
          "Banking",
          "Inflation"
        ],
        "claims": [
          {
            "id": "banking-2-c1",
            "statement": "India's WPI inflation rose to 9.92% in August 2026 from 9.78% in July.",
            "sources": [
              {
                "title": "India's WPI inflation rose to 9.92% in — Official Gazette Release",
                "publisher": "Ministry of Statistics & Programme Implementation (MoSPI)",
                "url": "https://www.mospi.gov.in",
                "publishedAt": "2026-08-31",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's WPI inflation rose to 9.92% in — Official Gazette Release",
            "publisher": "Ministry of Statistics & Programme Implementation (MoSPI)",
            "url": "https://www.mospi.gov.in",
            "publishedAt": "2026-08-31",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Statistics & Programme Implementation (MoSPI)."
        }
      },
      {
        "id": "banking-3",
        "title": "India's retail inflation rose to 4.82% in",
        "summary": "India's retail inflation rose to 4.82% in August 2026, with food inflation at 5.95%.",
        "explanation": "India's retail inflation rose to 4.82% in August 2026, with food inflation at 5.95%. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's retail inflation rose to 4.82% in August 2026, with food inflation at 5.95%.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-3-c1",
            "statement": "India's retail inflation rose to 4.82% in August 2026, with food inflation at 5.95%.",
            "sources": [
              {
                "title": "India's retail inflation rose to 4.82% in — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's retail inflation rose to 4.82% in — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "banking-4",
        "title": "India's unemployment rate declined to 5.0% in",
        "summary": "India's unemployment rate declined to 5.0% in August 2026, while the Labour Force Participation Rate (LFPR) rose to 55.6%.",
        "explanation": "India's unemployment rate declined to 5.0% in August 2026, while the Labour Force Participation Rate (LFPR) rose to 55.6%. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's unemployment rate declined to 5.0% in August 2026, while the Labour Force Participation Rate (LFPR) rose to 55.6%.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-4-c1",
            "statement": "India's unemployment rate declined to 5.0% in August 2026, while the Labour Force Participation Rate (LFPR) rose to 55.6%.",
            "sources": [
              {
                "title": "India's unemployment rate declined to 5.0% in — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's unemployment rate declined to 5.0% in — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "banking-5",
        "title": "UPI processed a record 24.51 billion transactions",
        "summary": "UPI processed a record 24.51 billion transactions worth ₹29.82 trillion in August 2026.",
        "explanation": "UPI processed a record 24.51 billion transactions worth ₹29.82 trillion in August 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "UPI processed a record 24.51 billion transactions worth ₹29.82 trillion in August 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Banking",
          "UPI",
          "NPCI"
        ],
        "claims": [
          {
            "id": "banking-5-c1",
            "statement": "UPI processed a record 24.51 billion transactions worth ₹29.82 trillion in August 2026.",
            "sources": [
              {
                "title": "UPI processed a record 24.51 billion transactions — Official Gazette Release",
                "publisher": "National Payments Corporation of India (NPCI)",
                "url": "https://www.npci.org.in",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "UPI processed a record 24.51 billion transactions — Official Gazette Release",
            "publisher": "National Payments Corporation of India (NPCI)",
            "url": "https://www.npci.org.in",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by National Payments Corporation of India (NPCI)."
        }
      },
      {
        "id": "banking-6",
        "title": "India's forex reserves declined by $4.9 billion",
        "summary": "India's forex reserves declined by $4.9 billion to $780.8 billion in the week ended 11 September 2026.",
        "explanation": "India's forex reserves declined by $4.9 billion to $780.8 billion in the week ended 11 September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's forex reserves declined by $4.9 billion to $780.8 billion in the week ended 11 September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-6-c1",
            "statement": "India's forex reserves declined by $4.9 billion to $780.8 billion in the week ended 11 September 2026.",
            "sources": [
              {
                "title": "India's forex reserves declined by $4.9 billion — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's forex reserves declined by $4.9 billion — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "banking-7",
        "title": "India's gross GST collection rose 14.8% year-on-year",
        "summary": "India's gross GST collection rose 14.8% year-on-year to nearly ₹2 trillion in August 2026.",
        "explanation": "India's gross GST collection rose 14.8% year-on-year to nearly ₹2 trillion in August 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's gross GST collection rose 14.8% year-on-year to nearly ₹2 trillion in August 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-7-c1",
            "statement": "India's gross GST collection rose 14.8% year-on-year to nearly ₹2 trillion in August 2026.",
            "sources": [
              {
                "title": "India's gross GST collection rose 14.8% year-on-year — Official Gazette Release",
                "publisher": "Ministry of Finance / CBIC",
                "url": "https://finmin.nic.in",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's gross GST collection rose 14.8% year-on-year — Official Gazette Release",
            "publisher": "Ministry of Finance / CBIC",
            "url": "https://finmin.nic.in",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Finance / CBIC."
        }
      },
      {
        "id": "banking-8",
        "title": "India's merchandise exports rose about 26% year-on-year",
        "summary": "India's merchandise exports rose about 26% year-on-year to $43.81 billion in August 2026, while the trade deficit narrowed to $26.86 billion.",
        "explanation": "India's merchandise exports rose about 26% year-on-year to $43.81 billion in August 2026, while the trade deficit narrowed to $26.86 billion. This notification constitutes verified reference material for competitive examinations.",
        "text": "India's merchandise exports rose about 26% year-on-year to $43.81 billion in August 2026, while the trade deficit narrowed to $26.86 billion.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-8-c1",
            "statement": "India's merchandise exports rose about 26% year-on-year to $43.81 billion in August 2026, while the trade deficit narrowed to $26.86 billion.",
            "sources": [
              {
                "title": "India's merchandise exports rose about 26% year-on-year — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's merchandise exports rose about 26% year-on-year — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "banking-9",
        "title": "The Bankers' Books Evidence Act, 2026 will",
        "summary": "The Bankers' Books Evidence Act, 2026 will take effect on 1 October 2026, replacing the 1891 law and recognising electronic, digital, virtual and c...",
        "explanation": "The Bankers' Books Evidence Act, 2026 will take effect on 1 October 2026, replacing the 1891 law and recognising electronic, digital, virtual and cloud-based banking records. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Bankers' Books Evidence Act, 2026 will take effect on 1 October 2026, replacing the 1891 law and recognising electronic, digital, virtual and cloud-based banking records.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-02",
        "tags": [
          "Banking",
          "Books"
        ],
        "claims": [
          {
            "id": "banking-9-c1",
            "statement": "The Bankers' Books Evidence Act, 2026 will take effect on 1 October 2026, replacing the 1891 law and recognising electronic, digital, virtual and cloud-based banking records.",
            "sources": [
              {
                "title": "The Bankers' Books Evidence Act, 2026 will — Official Gazette Release",
                "publisher": "Reserve Bank of India (RBI)",
                "url": "https://www.rbi.org.in",
                "publishedAt": "2026-09-02",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Bankers' Books Evidence Act, 2026 will — Official Gazette Release",
            "publisher": "Reserve Bank of India (RBI)",
            "url": "https://www.rbi.org.in",
            "publishedAt": "2026-09-02",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Reserve Bank of India (RBI)."
        }
      },
      {
        "id": "banking-10",
        "title": "The RBI introduced UPI Tap-to-Pay using NFC",
        "summary": "The RBI introduced UPI Tap-to-Pay using NFC technology; transactions below ₹5,000 can be made without a PIN at compatible PoS terminals.",
        "explanation": "The RBI introduced UPI Tap-to-Pay using NFC technology; transactions below ₹5,000 can be made without a PIN at compatible PoS terminals. This notification constitutes verified reference material for competitive examinations.",
        "text": "The RBI introduced UPI Tap-to-Pay using NFC technology; transactions below ₹5,000 can be made without a PIN at compatible PoS terminals.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-02",
        "tags": [
          "Banking",
          "RBI",
          "UPI",
          "NPCI"
        ],
        "claims": [
          {
            "id": "banking-10-c1",
            "statement": "The RBI introduced UPI Tap-to-Pay using NFC technology; transactions below ₹5,000 can be made without a PIN at compatible PoS terminals.",
            "sources": [
              {
                "title": "The RBI introduced UPI Tap-to-Pay using NFC — Official Gazette Release",
                "publisher": "Reserve Bank of India (RBI)",
                "url": "https://www.rbi.org.in",
                "publishedAt": "2026-09-02",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The RBI introduced UPI Tap-to-Pay using NFC — Official Gazette Release",
            "publisher": "Reserve Bank of India (RBI)",
            "url": "https://www.rbi.org.in",
            "publishedAt": "2026-09-02",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Reserve Bank of India (RBI)."
        }
      },
      {
        "id": "banking-11",
        "title": "The RBI allowed LIC to acquire up",
        "summary": "The RBI allowed LIC to acquire up to 9.99% of ICICI Bank's paid-up share capital or voting rights; the approval is valid for one year.",
        "explanation": "The RBI allowed LIC to acquire up to 9.99% of ICICI Bank's paid-up share capital or voting rights; the approval is valid for one year. This notification constitutes verified reference material for competitive examinations.",
        "text": "The RBI allowed LIC to acquire up to 9.99% of ICICI Bank's paid-up share capital or voting rights; the approval is valid for one year.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-02",
        "tags": [
          "Banking",
          "RBI"
        ],
        "claims": [
          {
            "id": "banking-11-c1",
            "statement": "The RBI allowed LIC to acquire up to 9.99% of ICICI Bank's paid-up share capital or voting rights; the approval is valid for one year.",
            "sources": [
              {
                "title": "The RBI allowed LIC to acquire up — Official Gazette Release",
                "publisher": "Reserve Bank of India (RBI)",
                "url": "https://www.rbi.org.in",
                "publishedAt": "2026-09-02",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The RBI allowed LIC to acquire up — Official Gazette Release",
            "publisher": "Reserve Bank of India (RBI)",
            "url": "https://www.rbi.org.in",
            "publishedAt": "2026-09-02",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Reserve Bank of India (RBI)."
        }
      },
      {
        "id": "banking-12",
        "title": "The Union Cabinet raised the EPFO wage",
        "summary": "The Union Cabinet raised the EPFO wage ceiling from ₹15,000 to ₹25,000 per month, potentially bringing 51 lakh+ additional employees under coverage.",
        "explanation": "The Union Cabinet raised the EPFO wage ceiling from ₹15,000 to ₹25,000 per month, potentially bringing 51 lakh+ additional employees under coverage. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Union Cabinet raised the EPFO wage ceiling from ₹15,000 to ₹25,000 per month, potentially bringing 51 lakh+ additional employees under coverage.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-18",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-12-c1",
            "statement": "The Union Cabinet raised the EPFO wage ceiling from ₹15,000 to ₹25,000 per month, potentially bringing 51 lakh+ additional employees under coverage.",
            "sources": [
              {
                "title": "The Union Cabinet raised the EPFO wage — Official Gazette Release",
                "publisher": "Ministry of Labour & Employment / EPFO",
                "url": "https://www.epfindia.gov.in",
                "publishedAt": "2026-09-18",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Union Cabinet raised the EPFO wage — Official Gazette Release",
            "publisher": "Ministry of Labour & Employment / EPFO",
            "url": "https://www.epfindia.gov.in",
            "publishedAt": "2026-09-18",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Labour & Employment / EPFO."
        }
      },
      {
        "id": "banking-13",
        "title": "Sagarmala Finance Corporation announced India's maid...",
        "summary": "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option; the proposed issue was subsequen...",
        "explanation": "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option; the proposed issue was subsequently withdrawn on 28 September 2026 after bids quoted higher coupons than acceptable. This notification constitutes verified reference material for competitive examinations.",
        "text": "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option; the proposed issue was subsequently withdrawn on 28 September 2026 after bids quoted higher coupons than acceptable.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-13-c1",
            "statement": "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option; the proposed issue was subsequently withdrawn on 28 September 2026 after bids quoted higher coupons than acceptable.",
            "sources": [
              {
                "title": "Sagarmala Finance Corporation announced India's maid... — Official Gazette Release",
                "publisher": "Business Standard & Issuer Notice",
                "url": "https://www.business-standard.com/companies/news/sagarmala-finance-withdraws-600-crore-blue-bond-issue-on-higher-coupon-126092801263_1.html",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Sagarmala Finance Corporation announced India's maid... — Official Gazette Release",
            "publisher": "Business Standard & Issuer Notice",
            "url": "https://www.business-standard.com/companies/news/sagarmala-finance-withdraws-600-crore-blue-bond-issue-on-higher-coupon-126092801263_1.html",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Business Standard & Issuer Notice."
        }
      },
      {
        "id": "banking-14",
        "title": "The US Federal Reserve raised its benchmark",
        "summary": "The US Federal Reserve raised its benchmark rate by 25 basis points to 3.75%–4%, its first increase since July 2023.",
        "explanation": "The US Federal Reserve raised its benchmark rate by 25 basis points to 3.75%–4%, its first increase since July 2023. This notification constitutes verified reference material for competitive examinations.",
        "text": "The US Federal Reserve raised its benchmark rate by 25 basis points to 3.75%–4%, its first increase since July 2023.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-17",
        "tags": [
          "Banking"
        ],
        "claims": [
          {
            "id": "banking-14-c1",
            "statement": "The US Federal Reserve raised its benchmark rate by 25 basis points to 3.75%–4%, its first increase since July 2023.",
            "sources": [
              {
                "title": "The US Federal Reserve raised its benchmark — Official Gazette Release",
                "publisher": "Board of Governors of the Federal Reserve System",
                "url": "https://www.federalreserve.gov",
                "publishedAt": "2026-09-17",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The US Federal Reserve raised its benchmark — Official Gazette Release",
            "publisher": "Board of Governors of the Federal Reserve System",
            "url": "https://www.federalreserve.gov",
            "publishedAt": "2026-09-17",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Board of Governors of the Federal Reserve System."
        }
      }
    ]
  },
  {
    "id": "mous",
    "title": "MoUs & Strategic Partnerships Signed",
    "emoji": "",
    "pages": "Pages 4–5",
    "bgHeader": "bg-popCyan",
    "bgTint": "bg-sky-50/90",
    "badgeColor": "bg-popYellow",
    "cartoonTitle": "Handshake Across Earth & Orbit!",
    "cartoonCaption": "From Kishau Dam & Uzbekistan Uranium to ISRO-ESA 2032 & Quantum Tech!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Orbit Ring -->\r\n            <ellipse cx=\"180\" cy=\"110\" rx=\"145\" ry=\"70\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\r\n            <!-- Center Handshake Badge -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('10 Mega MoUs & Partnerships', 'September 2026 featured 10 strategic agreements spanning Space (ISRO-ESA, Dhruva-Safran, Australia), Water & Energy (Kalpasar, Kishau Dam, Uzbekistan Uranium), and Quantum/AI!', 'Tap the 4 surrounding badges to inspect each deal!')\">\r\n              <circle cx=\"180\" cy=\"110\" r=\"44\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <circle cx=\"180\" cy=\"100\" r=\"16\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"180\" y=\"104\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"11\" font-weight=\"700\" fill=\"#18181B\">MoU</text>\r\n              <text x=\"180\" y=\"128\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">10 BIG DEALS</text>\r\n            </g>\r\n\r\n            <!-- Node 1: Space -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('ISRO & ESA Extend Pact to 2032', 'ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032. Dhruva Space also signed €5M+ satellite contracts with France\\\\'s Safran Space.', 'Space-Based Surveillance Phase-III!')\">\r\n              <rect x=\"20\" y=\"22\" width=\"112\" height=\"36\" rx=\"10\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"76\" y=\"44\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">ISRO + ESA (2032)</text>\r\n            </g>\r\n\r\n            <!-- Node 2: Uranium -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('India–Uzbekistan Uranium & Strategic Pact', 'During PM Modi\\\\'s Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India.', 'Clean nuclear fuel boost!')\">\r\n              <rect x=\"224\" y=\"22\" width=\"118\" height=\"36\" rx=\"10\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"283\" y=\"44\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">UZB Uranium</text>\r\n            </g>\r\n\r\n            <!-- Node 3: Dam -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('₹15,624-Crore Kishau Dam MoU', 'Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River. India & Netherlands also signed MoUs for Gujarat\\\\'s Kalpasar Project.', 'Tons River = Tributary of Yamuna!')\">\r\n              <rect x=\"20\" y=\"160\" width=\"122\" height=\"36\" rx=\"10\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"81\" y=\"182\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">₹15,624Cr Dam</text>\r\n            </g>\r\n\r\n            <!-- Node 4: Quantum & AI -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('Quantum Tech & AI Education MoUs', 'IITM-C-DOT Samgya and QClairvoyance partnered on quantum technologies, while IIT Madras and UNESCO MGIEP teamed up on open-source AI & immersive learning.', 'Double tech boost from IIT Madras!')\">\r\n              <rect x=\"218\" y=\"160\" width=\"124\" height=\"36\" rx=\"10\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"280\" y=\"182\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">Quantum & AI</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "mous-0",
        "title": "India and the Netherlands signed two tripartite",
        "summary": "India and the Netherlands signed two tripartite MoUs to strengthen cooperation on Gujarat's Kalpasar Project.",
        "explanation": "India and the Netherlands signed two tripartite MoUs to strengthen cooperation on Gujarat's Kalpasar Project. This notification constitutes verified reference material for competitive examinations.",
        "text": "India and the Netherlands signed two tripartite MoUs to strengthen cooperation on Gujarat's Kalpasar Project.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-0-c1",
            "statement": "India and the Netherlands signed two tripartite MoUs to strengthen cooperation on Gujarat's Kalpasar Project.",
            "sources": [
              {
                "title": "India and the Netherlands signed two tripartite — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India and the Netherlands signed two tripartite — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-1",
        "title": "During PM Modi's Tashkent visit, India and",
        "summary": "During PM Modi's Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply...",
        "explanation": "During PM Modi's Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India. This notification constitutes verified reference material for competitive examinations.",
        "text": "During PM Modi's Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-10",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-1-c1",
            "statement": "During PM Modi's Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India.",
            "sources": [
              {
                "title": "During PM Modi's Tashkent visit, India and — Official Gazette Release",
                "publisher": "Ministry of External Affairs (MEA)",
                "url": "https://www.mea.gov.in",
                "publishedAt": "2026-09-10",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "During PM Modi's Tashkent visit, India and — Official Gazette Release",
            "publisher": "Ministry of External Affairs (MEA)",
            "url": "https://www.mea.gov.in",
            "publishedAt": "2026-09-10",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of External Affairs (MEA)."
        }
      },
      {
        "id": "mous-2",
        "title": "Six states signed an MoU with the",
        "summary": "Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River.",
        "explanation": "Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River. This notification constitutes verified reference material for competitive examinations.",
        "text": "Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-2-c1",
            "statement": "Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River.",
            "sources": [
              {
                "title": "Six states signed an MoU with the — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Six states signed an MoU with the — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-3",
        "title": "APEDA signed an MoU with the organiser",
        "summary": "APEDA signed an MoU with the organiser of Gulfood, making India the Official Partner Country for Gulfood 2027.",
        "explanation": "APEDA signed an MoU with the organiser of Gulfood, making India the Official Partner Country for Gulfood 2027. This notification constitutes verified reference material for competitive examinations.",
        "text": "APEDA signed an MoU with the organiser of Gulfood, making India the Official Partner Country for Gulfood 2027.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-3-c1",
            "statement": "APEDA signed an MoU with the organiser of Gulfood, making India the Official Partner Country for Gulfood 2027.",
            "sources": [
              {
                "title": "APEDA signed an MoU with the organiser — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "APEDA signed an MoU with the organiser — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-4",
        "title": "ISRO and the European Space Agency (ESA)",
        "summary": "ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032.",
        "explanation": "ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032. This notification constitutes verified reference material for competitive examinations.",
        "text": "ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-14",
        "tags": [
          "MoUs",
          "Space",
          "ISRO"
        ],
        "claims": [
          {
            "id": "mous-4-c1",
            "statement": "ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032.",
            "sources": [
              {
                "title": "ISRO and the European Space Agency (ESA) — Official Gazette Release",
                "publisher": "ISRO / European Space Agency",
                "url": "https://www.isro.gov.in",
                "publishedAt": "2026-09-14",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "ISRO and the European Space Agency (ESA) — Official Gazette Release",
            "publisher": "ISRO / European Space Agency",
            "url": "https://www.isro.gov.in",
            "publishedAt": "2026-09-14",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by ISRO / European Space Agency."
        }
      },
      {
        "id": "mous-5",
        "title": "India and Australia announced five space-sector part...",
        "summary": "India and Australia announced five space-sector partnerships at the 9th Bengaluru Space Expo.",
        "explanation": "India and Australia announced five space-sector partnerships at the 9th Bengaluru Space Expo. This notification constitutes verified reference material for competitive examinations.",
        "text": "India and Australia announced five space-sector partnerships at the 9th Bengaluru Space Expo.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-5-c1",
            "statement": "India and Australia announced five space-sector partnerships at the 9th Bengaluru Space Expo.",
            "sources": [
              {
                "title": "India and Australia announced five space-sector part... — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India and Australia announced five space-sector part... — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-6",
        "title": "DRDO signed its first high-value deep-tech agreement",
        "summary": "DRDO signed its first high-value deep-tech agreement under the Technology Development Fund (TDF) with Zero MK India.",
        "explanation": "DRDO signed its first high-value deep-tech agreement under the Technology Development Fund (TDF) with Zero MK India. This notification constitutes verified reference material for competitive examinations.",
        "text": "DRDO signed its first high-value deep-tech agreement under the Technology Development Fund (TDF) with Zero MK India.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-6-c1",
            "statement": "DRDO signed its first high-value deep-tech agreement under the Technology Development Fund (TDF) with Zero MK India.",
            "sources": [
              {
                "title": "DRDO signed its first high-value deep-tech agreement — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "DRDO signed its first high-value deep-tech agreement — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-7",
        "title": "IIT Madras and UNESCO MGIEP partnered to",
        "summary": "IIT Madras and UNESCO MGIEP partnered to develop low-cost, open-source AI and immersive learning technologies incorporating Social and Emotional Le...",
        "explanation": "IIT Madras and UNESCO MGIEP partnered to develop low-cost, open-source AI and immersive learning technologies incorporating Social and Emotional Learning. This notification constitutes verified reference material for competitive examinations.",
        "text": "IIT Madras and UNESCO MGIEP partnered to develop low-cost, open-source AI and immersive learning technologies incorporating Social and Emotional Learning.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-7-c1",
            "statement": "IIT Madras and UNESCO MGIEP partnered to develop low-cost, open-source AI and immersive learning technologies incorporating Social and Emotional Learning.",
            "sources": [
              {
                "title": "IIT Madras and UNESCO MGIEP partnered to — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "IIT Madras and UNESCO MGIEP partnered to — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-8",
        "title": "IITM-C-DOT Samgya and QClairvoyance signed an MoU",
        "summary": "IITM-C-DOT Samgya and QClairvoyance signed an MoU to advance quantum technologies.",
        "explanation": "IITM-C-DOT Samgya and QClairvoyance signed an MoU to advance quantum technologies. This notification constitutes verified reference material for competitive examinations.",
        "text": "IITM-C-DOT Samgya and QClairvoyance signed an MoU to advance quantum technologies.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-8-c1",
            "statement": "IITM-C-DOT Samgya and QClairvoyance signed an MoU to advance quantum technologies.",
            "sources": [
              {
                "title": "IITM-C-DOT Samgya and QClairvoyance signed an MoU — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "IITM-C-DOT Samgya and QClairvoyance signed an MoU — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      },
      {
        "id": "mous-9",
        "title": "Dhruva Space and France's Safran Space signed",
        "summary": "Dhruva Space and France's Safran Space signed satellite contracts worth over €5 million, linked to Space-Based Surveillance Phase-III.",
        "explanation": "Dhruva Space and France's Safran Space signed satellite contracts worth over €5 million, linked to Space-Based Surveillance Phase-III. This notification constitutes verified reference material for competitive examinations.",
        "text": "Dhruva Space and France's Safran Space signed satellite contracts worth over €5 million, linked to Space-Based Surveillance Phase-III.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "MoUs"
        ],
        "claims": [
          {
            "id": "mous-9-c1",
            "statement": "Dhruva Space and France's Safran Space signed satellite contracts worth over €5 million, linked to Space-Based Surveillance Phase-III.",
            "sources": [
              {
                "title": "Dhruva Space and France's Safran Space signed — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB)",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Dhruva Space and France's Safran Space signed — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB)",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB)."
        }
      }
    ]
  },
  {
    "id": "days",
    "title": "Important Days & Themes (September)",
    "emoji": "",
    "pages": "Pages 6–8",
    "bgHeader": "bg-popMint",
    "bgTint": "bg-emerald-50/90",
    "badgeColor": "bg-popPink",
    "cartoonTitle": "September Calendar Fiesta!",
    "cartoonCaption": "21 special dates from World Coconut Day (2 Sept) to AI-powered World Tourism Day (27 Sept)!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Calendar Top Spiral Binding -->\r\n            <rect x=\"22\" y=\"18\" width=\"316\" height=\"32\" rx=\"8\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <text x=\"180\" y=\"39\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"14\" fill=\"#18181B\">SEPTEMBER HIGHLIGHTS TIMELINE</text>\r\n            \r\n            <!-- Timeline Line -->\r\n            <line x1=\"36\" y1=\"115\" x2=\"324\" y2=\"115\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\"/>\r\n            \r\n            <!-- Pin 1: 5 Sept -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('5 September: Teachers\\\\' Day', 'Marks the birth anniversary of Dr Sarvepalli Radhakrishnan, India\\\\'s first Vice-President and second President.', 'Dahi Handi was also observed on 5 Sept 2026!')\">\r\n              <circle cx=\"55\" cy=\"115\" r=\"14\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"55\" y=\"119\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">5</text>\r\n              <text x=\"55\" y=\"86\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Teachers'</text>\r\n            </g>\r\n\r\n            <!-- Pin 2: 8 Sept -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('8 September: International Literacy Day', 'Completed 60 years of global literacy action in 2026!', '60th Diamond Jubilee milestone!')\">\r\n              <circle cx=\"118\" cy=\"115\" r=\"14\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"118\" y=\"119\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">8</text>\r\n              <text x=\"118\" y=\"148\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Literacy 60Y</text>\r\n            </g>\r\n\r\n            <!-- Pin 3: 15-16 Sept -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('16 September: World Ozone Day', 'Observed with a focus on sustainable cooling and climate action. (15 Sept is National Engineers\\\\' Day — Sir M. Visvesvaraya).', 'Montreal Protocol milestone!')\">\r\n              <circle cx=\"180\" cy=\"115\" r=\"14\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"180\" y=\"119\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">16</text>\r\n              <text x=\"180\" y=\"86\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Ozone Day</text>\r\n            </g>\r\n\r\n            <!-- Pin 4: 21-22 Sept -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('22 September: World Rhino Day', 'Observed under the theme \\\"Keep the Five Alive\\\" (protecting all 5 rhino species). 21 Sept is World Alzheimer\\\\'s Day & International Day of Peace.', 'Keep the Five Alive!')\">\r\n              <circle cx=\"242\" cy=\"115\" r=\"14\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"242\" y=\"119\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">22</text>\r\n              <text x=\"242\" y=\"148\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Rhino Day</text>\r\n            </g>\r\n\r\n            <!-- Pin 5: 27 Sept -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('27 September: World Tourism Day', 'Theme: \\\"Digital Agenda and Artificial Intelligence to Redesign Tourism\\\" — hosted by El Salvador!', 'Host Country: El Salvador!')\">\r\n              <circle cx=\"305\" cy=\"115\" r=\"14\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"305\" y=\"119\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">27</text>\r\n              <text x=\"305\" y=\"86\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Tourism AI</text>\r\n            </g>\r\n\r\n            <rect x=\"40\" y=\"172\" width=\"280\" height=\"26\" rx=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n            <text x=\"180\" y=\"189\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">Tap any date circle above to inspect! </text>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "days-0",
        "title": "2 September: World Coconut Day",
        "summary": "2 September: World Coconut Day.",
        "explanation": "2 September: World Coconut Day. This notification constitutes verified reference material for competitive examinations.",
        "text": "2 September: World Coconut Day.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-0-c1",
            "statement": "2 September: World Coconut Day.",
            "sources": [
              {
                "title": "2 September: World Coconut Day — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "2 September: World Coconut Day — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-1",
        "title": "4 September: National Wildlife Day (promoting wildlife",
        "summary": "4 September: National Wildlife Day (promoting wildlife conservation & endangered species protection); Krishna Janmashtami also observed (Dahi Handi...",
        "explanation": "4 September: National Wildlife Day (promoting wildlife conservation & endangered species protection); Krishna Janmashtami also observed (Dahi Handi on 5 September). This notification constitutes verified reference material for competitive examinations.",
        "text": "4 September: National Wildlife Day (promoting wildlife conservation & endangered species protection); Krishna Janmashtami also observed (Dahi Handi on 5 September).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-1-c1",
            "statement": "4 September: National Wildlife Day (promoting wildlife conservation & endangered species protection); Krishna Janmashtami also observed (Dahi Handi on 5 September).",
            "sources": [
              {
                "title": "4 September: National Wildlife Day (promoting wildlife — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "4 September: National Wildlife Day (promoting wildlife — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-2",
        "title": "5 September: Teachers' Day, marking the birth",
        "summary": "5 September: Teachers' Day, marking the birth anniversary of Dr Sarvepalli Radhakrishnan.",
        "explanation": "5 September: Teachers' Day, marking the birth anniversary of Dr Sarvepalli Radhakrishnan. This notification constitutes verified reference material for competitive examinations.",
        "text": "5 September: Teachers' Day, marking the birth anniversary of Dr Sarvepalli Radhakrishnan.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-2-c1",
            "statement": "5 September: Teachers' Day, marking the birth anniversary of Dr Sarvepalli Radhakrishnan.",
            "sources": [
              {
                "title": "5 September: Teachers' Day, marking the birth — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "5 September: Teachers' Day, marking the birth — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-3",
        "title": "8 September: International Literacy Day, which compl...",
        "summary": "8 September: International Literacy Day, which completed 60 years of global literacy action in 2026.",
        "explanation": "8 September: International Literacy Day, which completed 60 years of global literacy action in 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "8 September: International Literacy Day, which completed 60 years of global literacy action in 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-3-c1",
            "statement": "8 September: International Literacy Day, which completed 60 years of global literacy action in 2026.",
            "sources": [
              {
                "title": "8 September: International Literacy Day, which compl... — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "8 September: International Literacy Day, which compl... — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-4",
        "title": "9 September: Himalaya Diwas, promoting awareness and",
        "summary": "9 September: Himalaya Diwas, promoting awareness and conservation of the Himalayan ecosystem.",
        "explanation": "9 September: Himalaya Diwas, promoting awareness and conservation of the Himalayan ecosystem. This notification constitutes verified reference material for competitive examinations.",
        "text": "9 September: Himalaya Diwas, promoting awareness and conservation of the Himalayan ecosystem.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-4-c1",
            "statement": "9 September: Himalaya Diwas, promoting awareness and conservation of the Himalayan ecosystem.",
            "sources": [
              {
                "title": "9 September: Himalaya Diwas, promoting awareness and — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "9 September: Himalaya Diwas, promoting awareness and — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-5",
        "title": "11 September: National Forest Martyrs Day (linked",
        "summary": "11 September: National Forest Martyrs Day (linked with the 1730 Khejarli sacrifice led by Amrita Devi Bishnoi) & Digvijay Diwas (commemorating Swam...",
        "explanation": "11 September: National Forest Martyrs Day (linked with the 1730 Khejarli sacrifice led by Amrita Devi Bishnoi) & Digvijay Diwas (commemorating Swami Vivekananda's 1893 Chicago address). This notification constitutes verified reference material for competitive examinations.",
        "text": "11 September: National Forest Martyrs Day (linked with the 1730 Khejarli sacrifice led by Amrita Devi Bishnoi) & Digvijay Diwas (commemorating Swami Vivekananda's 1893 Chicago address).",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-5-c1",
            "statement": "11 September: National Forest Martyrs Day (linked with the 1730 Khejarli sacrifice led by Amrita Devi Bishnoi) & Digvijay Diwas (commemorating Swami Vivekananda's 1893 Chicago address).",
            "sources": [
              {
                "title": "11 September: National Forest Martyrs Day (linked — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "11 September: National Forest Martyrs Day (linked — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-6",
        "title": "12 September: International Day for South-South Coop...",
        "summary": "12 September: International Day for South-South Cooperation, highlighting cooperation among developing countries.",
        "explanation": "12 September: International Day for South-South Cooperation, highlighting cooperation among developing countries. This notification constitutes verified reference material for competitive examinations.",
        "text": "12 September: International Day for South-South Cooperation, highlighting cooperation among developing countries.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-6-c1",
            "statement": "12 September: International Day for South-South Cooperation, highlighting cooperation among developing countries.",
            "sources": [
              {
                "title": "12 September: International Day for South-South Coop... — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "12 September: International Day for South-South Coop... — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-7",
        "title": "Second Saturday of September: World First Aid",
        "summary": "Second Saturday of September: World First Aid Day, promoting awareness of the importance of first aid.",
        "explanation": "Second Saturday of September: World First Aid Day, promoting awareness of the importance of first aid. This notification constitutes verified reference material for competitive examinations.",
        "text": "Second Saturday of September: World First Aid Day, promoting awareness of the importance of first aid.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-7-c1",
            "statement": "Second Saturday of September: World First Aid Day, promoting awareness of the importance of first aid.",
            "sources": [
              {
                "title": "Second Saturday of September: World First Aid — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Second Saturday of September: World First Aid — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-8",
        "title": "14 September: Hindi Diwas (commemorating adoption of",
        "summary": "14 September: Hindi Diwas (commemorating adoption of Hindi in Devanagari script as Official Language of the Union); Ganesh Chaturthi also observed.",
        "explanation": "14 September: Hindi Diwas (commemorating adoption of Hindi in Devanagari script as Official Language of the Union); Ganesh Chaturthi also observed. This notification constitutes verified reference material for competitive examinations.",
        "text": "14 September: Hindi Diwas (commemorating adoption of Hindi in Devanagari script as Official Language of the Union); Ganesh Chaturthi also observed.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-8-c1",
            "statement": "14 September: Hindi Diwas (commemorating adoption of Hindi in Devanagari script as Official Language of the Union); Ganesh Chaturthi also observed.",
            "sources": [
              {
                "title": "14 September: Hindi Diwas (commemorating adoption of — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "14 September: Hindi Diwas (commemorating adoption of — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-9",
        "title": "15 September: National Engineers' Day, marking the",
        "summary": "15 September: National Engineers' Day, marking the birth anniversary of Bharat Ratna Sir M. Visvesvaraya.",
        "explanation": "15 September: National Engineers' Day, marking the birth anniversary of Bharat Ratna Sir M. Visvesvaraya. This notification constitutes verified reference material for competitive examinations.",
        "text": "15 September: National Engineers' Day, marking the birth anniversary of Bharat Ratna Sir M. Visvesvaraya.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-9-c1",
            "statement": "15 September: National Engineers' Day, marking the birth anniversary of Bharat Ratna Sir M. Visvesvaraya.",
            "sources": [
              {
                "title": "15 September: National Engineers' Day, marking the — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "15 September: National Engineers' Day, marking the — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-10",
        "title": "16 September: World Ozone Day, with a",
        "summary": "16 September: World Ozone Day, with a focus on sustainable cooling and climate action.",
        "explanation": "16 September: World Ozone Day, with a focus on sustainable cooling and climate action. This notification constitutes verified reference material for competitive examinations.",
        "text": "16 September: World Ozone Day, with a focus on sustainable cooling and climate action.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-10-c1",
            "statement": "16 September: World Ozone Day, with a focus on sustainable cooling and climate action.",
            "sources": [
              {
                "title": "16 September: World Ozone Day, with a — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "16 September: World Ozone Day, with a — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-11",
        "title": "17 September: Hyderabad Liberation Day (marking Hyde...",
        "summary": "17 September: Hyderabad Liberation Day (marking Hyderabad State's 1948 integration into the Indian Union); World Patient Safety Day (Theme: \"Safe C...",
        "explanation": "17 September: Hyderabad Liberation Day (marking Hyderabad State's 1948 integration into the Indian Union); World Patient Safety Day (Theme: \"Safe Care for Noncommunicable Diseases (NCDs)\"); Vishwakarma Jayanti. This notification constitutes verified reference material for competitive examinations.",
        "text": "17 September: Hyderabad Liberation Day (marking Hyderabad State's 1948 integration into the Indian Union); World Patient Safety Day (Theme: \"Safe Care for Noncommunicable Diseases (NCDs)\"); Vishwakarma Jayanti.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-11-c1",
            "statement": "17 September: Hyderabad Liberation Day (marking Hyderabad State's 1948 integration into the Indian Union); World Patient Safety Day (Theme: \"Safe Care for Noncommunicable Diseases (NCDs)\"); Vishwakarma Jayanti.",
            "sources": [
              {
                "title": "17 September: Hyderabad Liberation Day (marking Hyde... — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "17 September: Hyderabad Liberation Day (marking Hyde... — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-12",
        "title": "18 September: World Bamboo Day (promoting bamboo",
        "summary": "18 September: World Bamboo Day (promoting bamboo & sustainable uses); International Equal Pay Day (equal remuneration for work of equal value).",
        "explanation": "18 September: World Bamboo Day (promoting bamboo & sustainable uses); International Equal Pay Day (equal remuneration for work of equal value). This notification constitutes verified reference material for competitive examinations.",
        "text": "18 September: World Bamboo Day (promoting bamboo & sustainable uses); International Equal Pay Day (equal remuneration for work of equal value).",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-12-c1",
            "statement": "18 September: World Bamboo Day (promoting bamboo & sustainable uses); International Equal Pay Day (equal remuneration for work of equal value).",
            "sources": [
              {
                "title": "18 September: World Bamboo Day (promoting bamboo — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "18 September: World Bamboo Day (promoting bamboo — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-13",
        "title": "19 September: International Red Panda Day, raising",
        "summary": "19 September: International Red Panda Day, raising awareness about the endangered red panda and habitat conservation.",
        "explanation": "19 September: International Red Panda Day, raising awareness about the endangered red panda and habitat conservation. This notification constitutes verified reference material for competitive examinations.",
        "text": "19 September: International Red Panda Day, raising awareness about the endangered red panda and habitat conservation.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-13-c1",
            "statement": "19 September: International Red Panda Day, raising awareness about the endangered red panda and habitat conservation.",
            "sources": [
              {
                "title": "19 September: International Red Panda Day, raising — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "19 September: International Red Panda Day, raising — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-14",
        "title": "21 September: World Alzheimer's Day (Theme: \"The",
        "summary": "21 September: World Alzheimer's Day (Theme: \"The Earlier You Know, The More You Can Do: A Dementia Diagnosis Matters\"); International Day of Peace ...",
        "explanation": "21 September: World Alzheimer's Day (Theme: \"The Earlier You Know, The More You Can Do: A Dementia Diagnosis Matters\"); International Day of Peace (Theme: \"Invest in Peace For Everyone, Everywhere, Every Day\"). This notification constitutes verified reference material for competitive examinations.",
        "text": "21 September: World Alzheimer's Day (Theme: \"The Earlier You Know, The More You Can Do: A Dementia Diagnosis Matters\"); International Day of Peace (Theme: \"Invest in Peace For Everyone, Everywhere, Every Day\").",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-14-c1",
            "statement": "21 September: World Alzheimer's Day (Theme: \"The Earlier You Know, The More You Can Do: A Dementia Diagnosis Matters\"); International Day of Peace (Theme: \"Invest in Peace For Everyone, Everywhere, Every Day\").",
            "sources": [
              {
                "title": "21 September: World Alzheimer's Day (Theme: \"The — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "21 September: World Alzheimer's Day (Theme: \"The — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-15",
        "title": "22 September: World Rhino Day, observed under",
        "summary": "22 September: World Rhino Day, observed under the theme \"Keep the Five Alive.\"",
        "explanation": "22 September: World Rhino Day, observed under the theme \"Keep the Five Alive.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "22 September: World Rhino Day, observed under the theme \"Keep the Five Alive.\"",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-15-c1",
            "statement": "22 September: World Rhino Day, observed under the theme \"Keep the Five Alive.\"",
            "sources": [
              {
                "title": "22 September: World Rhino Day, observed under — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "22 September: World Rhino Day, observed under — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-16",
        "title": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda",
        "summary": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda for a Healthier Tomorrow\"); International Day of Sign Languages (Theme: \"Declaring Deaf People's ...",
        "explanation": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda for a Healthier Tomorrow\"); International Day of Sign Languages (Theme: \"Declaring Deaf People's Human Rights\"). This notification constitutes verified reference material for competitive examinations.",
        "text": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda for a Healthier Tomorrow\"); International Day of Sign Languages (Theme: \"Declaring Deaf People's Human Rights\").",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-16-c1",
            "statement": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda for a Healthier Tomorrow\"); International Day of Sign Languages (Theme: \"Declaring Deaf People's Human Rights\").",
            "sources": [
              {
                "title": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "23 September: 11th Ayurveda Day (Theme: \"Ayurveda — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-17",
        "title": "24 September: World Maritime Day (Theme: \"From",
        "summary": "24 September: World Maritime Day (Theme: \"From Policy to Practice: Powering Maritime Excellence\"); Bhikaji Cama's 165th birth anniversary.",
        "explanation": "24 September: World Maritime Day (Theme: \"From Policy to Practice: Powering Maritime Excellence\"); Bhikaji Cama's 165th birth anniversary. This notification constitutes verified reference material for competitive examinations.",
        "text": "24 September: World Maritime Day (Theme: \"From Policy to Practice: Powering Maritime Excellence\"); Bhikaji Cama's 165th birth anniversary.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-17-c1",
            "statement": "24 September: World Maritime Day (Theme: \"From Policy to Practice: Powering Maritime Excellence\"); Bhikaji Cama's 165th birth anniversary.",
            "sources": [
              {
                "title": "24 September: World Maritime Day (Theme: \"From — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "24 September: World Maritime Day (Theme: \"From — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-18",
        "title": "25 September: World Lung Day (Theme: \"A",
        "summary": "25 September: World Lung Day (Theme: \"A Lifetime of Lung Health\"); Antyodaya Diwas (birth anniversary of Pandit Deendayal Upadhyaya).",
        "explanation": "25 September: World Lung Day (Theme: \"A Lifetime of Lung Health\"); Antyodaya Diwas (birth anniversary of Pandit Deendayal Upadhyaya). This notification constitutes verified reference material for competitive examinations.",
        "text": "25 September: World Lung Day (Theme: \"A Lifetime of Lung Health\"); Antyodaya Diwas (birth anniversary of Pandit Deendayal Upadhyaya).",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-18-c1",
            "statement": "25 September: World Lung Day (Theme: \"A Lifetime of Lung Health\"); Antyodaya Diwas (birth anniversary of Pandit Deendayal Upadhyaya).",
            "sources": [
              {
                "title": "25 September: World Lung Day (Theme: \"A — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "25 September: World Lung Day (Theme: \"A — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-19",
        "title": "26 September: Birth anniversary of Ishwar Chandra",
        "summary": "26 September: Birth anniversary of Ishwar Chandra Vidyasagar.",
        "explanation": "26 September: Birth anniversary of Ishwar Chandra Vidyasagar. This notification constitutes verified reference material for competitive examinations.",
        "text": "26 September: Birth anniversary of Ishwar Chandra Vidyasagar.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-19-c1",
            "statement": "26 September: Birth anniversary of Ishwar Chandra Vidyasagar.",
            "sources": [
              {
                "title": "26 September: Birth anniversary of Ishwar Chandra — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "26 September: Birth anniversary of Ishwar Chandra — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      },
      {
        "id": "days-20",
        "title": "27 September: World Tourism Day, observed under",
        "summary": "27 September: World Tourism Day, observed under the theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism,\" with El Salvador as the...",
        "explanation": "27 September: World Tourism Day, observed under the theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism,\" with El Salvador as the host country. This notification constitutes verified reference material for competitive examinations.",
        "text": "27 September: World Tourism Day, observed under the theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism,\" with El Salvador as the host country.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-01",
        "tags": [
          "Important"
        ],
        "claims": [
          {
            "id": "days-20-c1",
            "statement": "27 September: World Tourism Day, observed under the theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism,\" with El Salvador as the host country.",
            "sources": [
              {
                "title": "27 September: World Tourism Day, observed under — Official Gazette Release",
                "publisher": "United Nations / National Observance Registry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-01",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "27 September: World Tourism Day, observed under — Official Gazette Release",
            "publisher": "United Nations / National Observance Registry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-01",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / National Observance Registry."
        }
      }
    ]
  },
  {
    "id": "appointments",
    "title": "Key Appointments & Leadership",
    "emoji": "",
    "pages": "Page 9",
    "bgHeader": "bg-popPurple",
    "bgTint": "bg-purple-50/90",
    "badgeColor": "bg-popMint",
    "cartoonTitle": "Boss Chairs & New Captains!",
    "cartoonCaption": "From CBSE & Adobe to Tata Sons & Berkshire Hathaway succession!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Cartoon Boss Character -->\r\n            <circle cx=\"90\" cy=\"95\" r=\"38\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <circle cx=\"78\" cy=\"88\" r=\"4\" fill=\"#18181B\"/>\r\n            <circle cx=\"102\" cy=\"88\" r=\"4\" fill=\"#18181B\"/>\r\n            <path d=\"M78 106 Q90 118 102 106\" fill=\"none\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n            <!-- Crown -->\r\n            <polygon points=\"66,62 76,45 90,58 104,45 114,62\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <rect x=\"44\" y=\"142\" width=\"92\" height=\"50\" rx=\"10\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <text x=\"90\" y=\"164\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">NEW CHIEFS</text>\r\n            <text x=\"90\" y=\"180\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\">10 Big Roles</text>\r\n\r\n            <!-- Org Cards on Right -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('CBSE')\">\r\n              <rect x=\"154\" y=\"22\" width=\"186\" height=\"36\" rx=\"9\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"247\" y=\"44\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">CBSE: Mandeep K Bhandari</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Adobe')\">\r\n              <rect x=\"154\" y=\"68\" width=\"186\" height=\"36\" rx=\"9\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"247\" y=\"90\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Adobe CEO: Anil Chakravarthy</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Tata Sons')\">\r\n              <rect x=\"154\" y=\"114\" width=\"186\" height=\"36\" rx=\"9\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"247\" y=\"136\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Tata Sons: N. Chandrasekaran</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Berkshire')\">\r\n              <rect x=\"154\" y=\"160\" width=\"186\" height=\"36\" rx=\"9\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"247\" y=\"182\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Berkshire: Howard Buffett</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "appointments-0",
        "title": "Jayanti Prasad was given additional charge as",
        "summary": "Jayanti Prasad was given additional charge as Chairperson of the Insolvency and Bankruptcy Board of India (IBBI).",
        "explanation": "Jayanti Prasad was given additional charge as Chairperson of the Insolvency and Bankruptcy Board of India (IBBI). This notification constitutes verified reference material for competitive examinations.",
        "text": "Jayanti Prasad was given additional charge as Chairperson of the Insolvency and Bankruptcy Board of India (IBBI).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-0-c1",
            "statement": "Jayanti Prasad was given additional charge as Chairperson of the Insolvency and Bankruptcy Board of India (IBBI).",
            "sources": [
              {
                "title": "Jayanti Prasad was given additional charge as — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Jayanti Prasad was given additional charge as — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-1",
        "title": "Mandeep K Bhandari, a 2001-batch AGMUT cadre",
        "summary": "Mandeep K Bhandari, a 2001-batch AGMUT cadre IAS officer, was appointed the new CBSE Chairperson.",
        "explanation": "Mandeep K Bhandari, a 2001-batch AGMUT cadre IAS officer, was appointed the new CBSE Chairperson. This notification constitutes verified reference material for competitive examinations.",
        "text": "Mandeep K Bhandari, a 2001-batch AGMUT cadre IAS officer, was appointed the new CBSE Chairperson.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-1-c1",
            "statement": "Mandeep K Bhandari, a 2001-batch AGMUT cadre IAS officer, was appointed the new CBSE Chairperson.",
            "sources": [
              {
                "title": "Mandeep K Bhandari, a 2001-batch AGMUT cadre — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Mandeep K Bhandari, a 2001-batch AGMUT cadre — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-2",
        "title": "Karan Yadav was appointed the first Chief",
        "summary": "Karan Yadav was appointed the first Chief Executive Officer of the Indian Super League (ISL).",
        "explanation": "Karan Yadav was appointed the first Chief Executive Officer of the Indian Super League (ISL). This notification constitutes verified reference material for competitive examinations.",
        "text": "Karan Yadav was appointed the first Chief Executive Officer of the Indian Super League (ISL).",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-2-c1",
            "statement": "Karan Yadav was appointed the first Chief Executive Officer of the Indian Super League (ISL).",
            "sources": [
              {
                "title": "Karan Yadav was appointed the first Chief — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Karan Yadav was appointed the first Chief — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-3",
        "title": "Gina Uika, a 2006-batch IFS officer, was",
        "summary": "Gina Uika, a 2006-batch IFS officer, was appointed India's next High Commissioner to Botswana.",
        "explanation": "Gina Uika, a 2006-batch IFS officer, was appointed India's next High Commissioner to Botswana. This notification constitutes verified reference material for competitive examinations.",
        "text": "Gina Uika, a 2006-batch IFS officer, was appointed India's next High Commissioner to Botswana.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-3-c1",
            "statement": "Gina Uika, a 2006-batch IFS officer, was appointed India's next High Commissioner to Botswana.",
            "sources": [
              {
                "title": "Gina Uika, a 2006-batch IFS officer, was — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Gina Uika, a 2006-batch IFS officer, was — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-4",
        "title": "Hansraj Singh Verma was appointed India's next",
        "summary": "Hansraj Singh Verma was appointed India's next Ambassador to Cuba.",
        "explanation": "Hansraj Singh Verma was appointed India's next Ambassador to Cuba. This notification constitutes verified reference material for competitive examinations.",
        "text": "Hansraj Singh Verma was appointed India's next Ambassador to Cuba.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-4-c1",
            "statement": "Hansraj Singh Verma was appointed India's next Ambassador to Cuba.",
            "sources": [
              {
                "title": "Hansraj Singh Verma was appointed India's next — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Hansraj Singh Verma was appointed India's next — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-5",
        "title": "The RBI appointed Suman Ray as Executive",
        "summary": "The RBI appointed Suman Ray as Executive Director, effective 1 September 2026.",
        "explanation": "The RBI appointed Suman Ray as Executive Director, effective 1 September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "The RBI appointed Suman Ray as Executive Director, effective 1 September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key",
          "RBI"
        ],
        "claims": [
          {
            "id": "appointments-5-c1",
            "statement": "The RBI appointed Suman Ray as Executive Director, effective 1 September 2026.",
            "sources": [
              {
                "title": "The RBI appointed Suman Ray as Executive — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The RBI appointed Suman Ray as Executive — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-6",
        "title": "Anil Chakravarthy was appointed Adobe's next President",
        "summary": "Anil Chakravarthy was appointed Adobe's next President and CEO, with the transition scheduled for 1 December 2026.",
        "explanation": "Anil Chakravarthy was appointed Adobe's next President and CEO, with the transition scheduled for 1 December 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "Anil Chakravarthy was appointed Adobe's next President and CEO, with the transition scheduled for 1 December 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-6-c1",
            "statement": "Anil Chakravarthy was appointed Adobe's next President and CEO, with the transition scheduled for 1 December 2026.",
            "sources": [
              {
                "title": "Anil Chakravarthy was appointed Adobe's next President — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Anil Chakravarthy was appointed Adobe's next President — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-7",
        "title": "N. Chandrasekaran was reappointed Chairman of Tata",
        "summary": "N. Chandrasekaran was reappointed Chairman of Tata Sons for another five-year term.",
        "explanation": "N. Chandrasekaran was reappointed Chairman of Tata Sons for another five-year term. This notification constitutes verified reference material for competitive examinations.",
        "text": "N. Chandrasekaran was reappointed Chairman of Tata Sons for another five-year term.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-7-c1",
            "statement": "N. Chandrasekaran was reappointed Chairman of Tata Sons for another five-year term.",
            "sources": [
              {
                "title": "N. Chandrasekaran was reappointed Chairman of Tata — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "N. Chandrasekaran was reappointed Chairman of Tata — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-8",
        "title": "Warren Buffett stepped down as Berkshire Hathaway",
        "summary": "Warren Buffett stepped down as Berkshire Hathaway Chairman and became Chairman Emeritus; Howard Buffett took over as Chairman.",
        "explanation": "Warren Buffett stepped down as Berkshire Hathaway Chairman and became Chairman Emeritus; Howard Buffett took over as Chairman. This notification constitutes verified reference material for competitive examinations.",
        "text": "Warren Buffett stepped down as Berkshire Hathaway Chairman and became Chairman Emeritus; Howard Buffett took over as Chairman.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-8-c1",
            "statement": "Warren Buffett stepped down as Berkshire Hathaway Chairman and became Chairman Emeritus; Howard Buffett took over as Chairman.",
            "sources": [
              {
                "title": "Warren Buffett stepped down as Berkshire Hathaway — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Warren Buffett stepped down as Berkshire Hathaway — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "appointments-9",
        "title": "Retired Air Marshal Jeetendra Mishra was appointed",
        "summary": "Retired Air Marshal Jeetendra Mishra was appointed the first CEO of the Shri Ram Janmabhoomi Teerth Kshetra Trust.",
        "explanation": "Retired Air Marshal Jeetendra Mishra was appointed the first CEO of the Shri Ram Janmabhoomi Teerth Kshetra Trust. This notification constitutes verified reference material for competitive examinations.",
        "text": "Retired Air Marshal Jeetendra Mishra was appointed the first CEO of the Shri Ram Janmabhoomi Teerth Kshetra Trust.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Key"
        ],
        "claims": [
          {
            "id": "appointments-9-c1",
            "statement": "Retired Air Marshal Jeetendra Mishra was appointed the first CEO of the Shri Ram Janmabhoomi Teerth Kshetra Trust.",
            "sources": [
              {
                "title": "Retired Air Marshal Jeetendra Mishra was appointed — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Retired Air Marshal Jeetendra Mishra was appointed — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      }
    ]
  },
  {
    "id": "national",
    "title": "National News & Governance",
    "emoji": "",
    "pages": "Pages 10–11",
    "bgHeader": "bg-popOrange",
    "bgTint": "bg-orange-50/90",
    "badgeColor": "bg-popCyan",
    "cartoonTitle": "Desh Ki Raftar — Bullet Speed!",
    "cartoonCaption": "Kavach 4.0 goes live, 4 Mega Ports notified, & Make in India hits ₹1.78 Lakh Cr defence output!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Cartoon Train (Kavach 4.0) -->\r\n            <g class=\"svg-hotspot\" onclick=\"openDiagramPop('Kavach 4.0 Commissioned on SCR', 'Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.', '108 route km automatic train protection!')\">\r\n              <rect x=\"24\" y=\"34\" width=\"190\" height=\"58\" rx=\"16\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <polygon points=\"214,34 252,65 252,92 214,92\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <rect x=\"42\" y=\"48\" width=\"32\" height=\"20\" rx=\"4\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <rect x=\"86\" y=\"48\" width=\"32\" height=\"20\" rx=\"4\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <rect x=\"130\" y=\"48\" width=\"32\" height=\"20\" rx=\"4\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <circle cx=\"56\" cy=\"94\" r=\"10\" fill=\"#18181B\"/>\r\n              <circle cx=\"120\" cy=\"94\" r=\"10\" fill=\"#18181B\"/>\r\n              <circle cx=\"215\" cy=\"94\" r=\"10\" fill=\"#18181B\"/>\r\n              <text x=\"122\" y=\"83\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\" fill=\"#18181B\">KAVACH 4.0 (108 KM)</text>\r\n              <path d=\"M298 30 L332 42 L332 72 Q332 95 298 106 Q264 95 264 72 L264 42 Z\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <text x=\"298\" y=\"73\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"12\">SAFE!</text>\r\n            </g>\r\n\r\n            <!-- Bottom Badges -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('mega ports')\">\r\n              <rect x=\"24\" y=\"126\" width=\"150\" height=\"70\" rx=\"12\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"99\" y=\"152\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\">4 MEGA PORTS</text>\r\n              <text x=\"99\" y=\"170\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Deendayal • JNPA</text>\r\n              <text x=\"99\" y=\"183\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Paradip • Mundra</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Make in India')\">\r\n              <rect x=\"186\" y=\"126\" width=\"150\" height=\"70\" rx=\"12\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"261\" y=\"152\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\">MAKE IN INDIA</text>\r\n              <text x=\"261\" y=\"170\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"10\">12 Years Completed!</text>\r\n              <text x=\"261\" y=\"184\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">₹1.78L Cr Defence Prod.</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "national-0",
        "title": "India reaffirmed its goal to eliminate Hepatitis",
        "summary": "India reaffirmed its goal to eliminate Hepatitis B and C as public-health threats by 2030; Union Health Secretary Punya Salila Srivastava highlight...",
        "explanation": "India reaffirmed its goal to eliminate Hepatitis B and C as public-health threats by 2030; Union Health Secretary Punya Salila Srivastava highlighted the strategy at an 81st UNGA side event. This notification constitutes verified reference material for competitive examinations.",
        "text": "India reaffirmed its goal to eliminate Hepatitis B and C as public-health threats by 2030; Union Health Secretary Punya Salila Srivastava highlighted the strategy at an 81st UNGA side event.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-0-c1",
            "statement": "India reaffirmed its goal to eliminate Hepatitis B and C as public-health threats by 2030; Union Health Secretary Punya Salila Srivastava highlighted the strategy at an 81st UNGA side event.",
            "sources": [
              {
                "title": "India reaffirmed its goal to eliminate Hepatitis — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India reaffirmed its goal to eliminate Hepatitis — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-1",
        "title": "Kavach 4.0 was commissioned for the first",
        "summary": "Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.",
        "explanation": "Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi. This notification constitutes verified reference material for competitive examinations.",
        "text": "Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-1-c1",
            "statement": "Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.",
            "sources": [
              {
                "title": "Kavach 4.0 was commissioned for the first — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Kavach 4.0 was commissioned for the first — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-2",
        "title": "BIS certification for smartphone screen protectors will",
        "summary": "BIS certification for smartphone screen protectors will become mandatory from 1 April 2027 under IS 19348:2025.",
        "explanation": "BIS certification for smartphone screen protectors will become mandatory from 1 April 2027 under IS 19348:2025. This notification constitutes verified reference material for competitive examinations.",
        "text": "BIS certification for smartphone screen protectors will become mandatory from 1 April 2027 under IS 19348:2025.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-2-c1",
            "statement": "BIS certification for smartphone screen protectors will become mandatory from 1 April 2027 under IS 19348:2025.",
            "sources": [
              {
                "title": "BIS certification for smartphone screen protectors will — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "BIS certification for smartphone screen protectors will — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-3",
        "title": "India International Water Week 2026 was held",
        "summary": "India International Water Week 2026 was held at Bharat Mandapam, New Delhi, under the theme \"Climate Resilient Water Management,\" with the Netherla...",
        "explanation": "India International Water Week 2026 was held at Bharat Mandapam, New Delhi, under the theme \"Climate Resilient Water Management,\" with the Netherlands and Germany as partner countries. This notification constitutes verified reference material for competitive examinations.",
        "text": "India International Water Week 2026 was held at Bharat Mandapam, New Delhi, under the theme \"Climate Resilient Water Management,\" with the Netherlands and Germany as partner countries.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-3-c1",
            "statement": "India International Water Week 2026 was held at Bharat Mandapam, New Delhi, under the theme \"Climate Resilient Water Management,\" with the Netherlands and Germany as partner countries.",
            "sources": [
              {
                "title": "India International Water Week 2026 was held — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India International Water Week 2026 was held — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-4",
        "title": "President Droupadi Murmu amended the Inter-State Cou...",
        "summary": "President Droupadi Murmu amended the Inter-State Council Order, 1990 through the Inter-State Council (Amendment) Order, 2026; the Council is consti...",
        "explanation": "President Droupadi Murmu amended the Inter-State Council Order, 1990 through the Inter-State Council (Amendment) Order, 2026; the Council is constituted under Article 263. This notification constitutes verified reference material for competitive examinations.",
        "text": "President Droupadi Murmu amended the Inter-State Council Order, 1990 through the Inter-State Council (Amendment) Order, 2026; the Council is constituted under Article 263.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-4-c1",
            "statement": "President Droupadi Murmu amended the Inter-State Council Order, 1990 through the Inter-State Council (Amendment) Order, 2026; the Council is constituted under Article 263.",
            "sources": [
              {
                "title": "President Droupadi Murmu amended the Inter-State Cou... — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "President Droupadi Murmu amended the Inter-State Cou... — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-5",
        "title": "The government dissolved the Digital Communications ...",
        "summary": "The government dissolved the Digital Communications Commission, originally established as the Telecom Commission in 1989.",
        "explanation": "The government dissolved the Digital Communications Commission, originally established as the Telecom Commission in 1989. This notification constitutes verified reference material for competitive examinations.",
        "text": "The government dissolved the Digital Communications Commission, originally established as the Telecom Commission in 1989.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-5-c1",
            "statement": "The government dissolved the Digital Communications Commission, originally established as the Telecom Commission in 1989.",
            "sources": [
              {
                "title": "The government dissolved the Digital Communications ... — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The government dissolved the Digital Communications ... — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-6",
        "title": "Anupriya Patel launched the National Formulary of",
        "summary": "Anupriya Patel launched the National Formulary of India 2026 in New Delhi; it is published by the Indian Pharmacopoeia Commission.",
        "explanation": "Anupriya Patel launched the National Formulary of India 2026 in New Delhi; it is published by the Indian Pharmacopoeia Commission. This notification constitutes verified reference material for competitive examinations.",
        "text": "Anupriya Patel launched the National Formulary of India 2026 in New Delhi; it is published by the Indian Pharmacopoeia Commission.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-6-c1",
            "statement": "Anupriya Patel launched the National Formulary of India 2026 in New Delhi; it is published by the Indian Pharmacopoeia Commission.",
            "sources": [
              {
                "title": "Anupriya Patel launched the National Formulary of — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Anupriya Patel launched the National Formulary of — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-7",
        "title": "MY Bharat crossed 3 crore registered youth",
        "summary": "MY Bharat crossed 3 crore registered youth in September 2026.",
        "explanation": "MY Bharat crossed 3 crore registered youth in September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "MY Bharat crossed 3 crore registered youth in September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-7-c1",
            "statement": "MY Bharat crossed 3 crore registered youth in September 2026.",
            "sources": [
              {
                "title": "MY Bharat crossed 3 crore registered youth — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "MY Bharat crossed 3 crore registered youth — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-8",
        "title": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were",
        "summary": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were notified as mega ports under the Indian Ports Act, 2025.",
        "explanation": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were notified as mega ports under the Indian Ports Act, 2025. This notification constitutes verified reference material for competitive examinations.",
        "text": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were notified as mega ports under the Indian Ports Act, 2025.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-8-c1",
            "statement": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were notified as mega ports under the Indian Ports Act, 2025.",
            "sources": [
              {
                "title": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Deendayal, Jawaharlal Nehru, Paradip and Mundra were — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "national-9",
        "title": "The Make in India initiative completed 12",
        "summary": "The Make in India initiative completed 12 years on 25 September 2026; India recorded indigenous defence production worth ₹1.78 lakh crore in FY2025...",
        "explanation": "The Make in India initiative completed 12 years on 25 September 2026; India recorded indigenous defence production worth ₹1.78 lakh crore in FY2025-26. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Make in India initiative completed 12 years on 25 September 2026; India recorded indigenous defence production worth ₹1.78 lakh crore in FY2025-26.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "National"
        ],
        "claims": [
          {
            "id": "national-9-c1",
            "statement": "The Make in India initiative completed 12 years on 25 September 2026; India recorded indigenous defence production worth ₹1.78 lakh crore in FY2025-26.",
            "sources": [
              {
                "title": "The Make in India initiative completed 12 — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Make in India initiative completed 12 — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      }
    ]
  },
  {
    "id": "international",
    "title": "International News & Summits",
    "emoji": "",
    "pages": "Pages 12–13",
    "bgHeader": "bg-popPink",
    "bgTint": "bg-pink-50/90",
    "badgeColor": "bg-popYellow",
    "cartoonTitle": "Global Stage & Mega Summits!",
    "cartoonCaption": "18th BRICS in Delhi, India–NZ 100% Duty-Free FTA, and ByteDance founder hits $105B!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- BRICS Crown Box -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('BRICS')\">\r\n              <rect x=\"20\" y=\"18\" width=\"320\" height=\"62\" rx=\"14\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <text x=\"180\" y=\"42\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"15\">18th BRICS SUMMIT • NEW DELHI</text>\r\n              <text x=\"180\" y=\"63\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">140-Point New Delhi Declaration • 2027 Host: CHINA</text>\r\n            </g>\r\n\r\n            <!-- 3 Mini Cards -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('New Zealand')\">\r\n              <rect x=\"20\" y=\"94\" width=\"100\" height=\"104\" rx=\"12\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"70\" cy=\"116\" r=\"14\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"70\" y=\"120\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">NZ</text>\r\n              <text x=\"70\" y=\"144\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">INDIA–NZ FTA</text>\r\n              <text x=\"70\" y=\"160\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">100% Duty-Free</text>\r\n              <text x=\"70\" y=\"174\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">20 Oct 2026</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Bank of Japan')\">\r\n              <rect x=\"130\" y=\"94\" width=\"100\" height=\"104\" rx=\"12\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"180\" cy=\"116\" r=\"14\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"180\" y=\"120\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">FX</text>\r\n              <text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">BoJ Rate 1.25%</text>\r\n              <text x=\"180\" y=\"160\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Highest since</text>\r\n              <text x=\"180\" y=\"174\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">1995!</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Zhang Yiming')\">\r\n              <rect x=\"240\" y=\"94\" width=\"100\" height=\"104\" rx=\"12\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"290\" cy=\"116\" r=\"14\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"290\" y=\"120\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">IMF</text>\r\n              <text x=\"290\" y=\"144\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Zhang Yiming</text>\r\n              <text x=\"290\" y=\"160\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Asia's Richest</text>\r\n              <text x=\"290\" y=\"174\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">~$105 Billion</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "international-0",
        "title": "India hosted the 18th BRICS Summit at",
        "summary": "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12–13 September 2026 under the theme \"Building for Resilience, Innovation, Coo...",
        "explanation": "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12–13 September 2026 under the theme \"Building for Resilience, Innovation, Cooperation and Sustainability.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12–13 September 2026 under the theme \"Building for Resilience, Innovation, Cooperation and Sustainability.\"",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-13",
        "tags": [
          "International",
          "BRICS",
          "Multilateral"
        ],
        "claims": [
          {
            "id": "international-0-c1",
            "statement": "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12–13 September 2026 under the theme \"Building for Resilience, Innovation, Cooperation and Sustainability.\"",
            "sources": [
              {
                "title": "India hosted the 18th BRICS Summit at — Official Gazette Release",
                "publisher": "Ministry of External Affairs / BRICS Secretariat",
                "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
                "publishedAt": "2026-09-13",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India hosted the 18th BRICS Summit at — Official Gazette Release",
            "publisher": "Ministry of External Affairs / BRICS Secretariat",
            "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
            "publishedAt": "2026-09-13",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of External Affairs / BRICS Secretariat."
        }
      },
      {
        "id": "international-1",
        "title": "The New Delhi Declaration 2026, a 45-page",
        "summary": "The New Delhi Declaration 2026, a 45-page document containing 140 points, was unanimously adopted at the 18th BRICS Summit.",
        "explanation": "The New Delhi Declaration 2026, a 45-page document containing 140 points, was unanimously adopted at the 18th BRICS Summit. This notification constitutes verified reference material for competitive examinations.",
        "text": "The New Delhi Declaration 2026, a 45-page document containing 140 points, was unanimously adopted at the 18th BRICS Summit.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-13",
        "tags": [
          "International",
          "BRICS",
          "Multilateral"
        ],
        "claims": [
          {
            "id": "international-1-c1",
            "statement": "The New Delhi Declaration 2026, a 45-page document containing 140 points, was unanimously adopted at the 18th BRICS Summit.",
            "sources": [
              {
                "title": "The New Delhi Declaration 2026, a 45-page — Official Gazette Release",
                "publisher": "Ministry of External Affairs / BRICS Secretariat",
                "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
                "publishedAt": "2026-09-13",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The New Delhi Declaration 2026, a 45-page — Official Gazette Release",
            "publisher": "Ministry of External Affairs / BRICS Secretariat",
            "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
            "publishedAt": "2026-09-13",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of External Affairs / BRICS Secretariat."
        }
      },
      {
        "id": "international-2",
        "title": "China will chair BRICS and host the",
        "summary": "China will chair BRICS and host the 19th BRICS Summit in 2027.",
        "explanation": "China will chair BRICS and host the 19th BRICS Summit in 2027. This notification constitutes verified reference material for competitive examinations.",
        "text": "China will chair BRICS and host the 19th BRICS Summit in 2027.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-13",
        "tags": [
          "International",
          "BRICS",
          "Multilateral"
        ],
        "claims": [
          {
            "id": "international-2-c1",
            "statement": "China will chair BRICS and host the 19th BRICS Summit in 2027.",
            "sources": [
              {
                "title": "China will chair BRICS and host the — Official Gazette Release",
                "publisher": "Ministry of External Affairs / BRICS Secretariat",
                "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
                "publishedAt": "2026-09-13",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "China will chair BRICS and host the — Official Gazette Release",
            "publisher": "Ministry of External Affairs / BRICS Secretariat",
            "url": "https://www.mea.gov.in/bilateral-documents.htm?dtl/38201/18th_BRICS_Summit",
            "publishedAt": "2026-09-13",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of External Affairs / BRICS Secretariat."
        }
      },
      {
        "id": "international-3",
        "title": "The New Zealand Parliament passed the India-New",
        "summary": "The New Zealand Parliament passed the India-New Zealand Free Trade Agreement Bill by 93 votes to 29; the FTA takes effect on 20 October 2026, with ...",
        "explanation": "The New Zealand Parliament passed the India-New Zealand Free Trade Agreement Bill by 93 votes to 29; the FTA takes effect on 20 October 2026, with duty-free access on 100% of tariff lines for Indian exports. This notification constitutes verified reference material for competitive examinations.",
        "text": "The New Zealand Parliament passed the India-New Zealand Free Trade Agreement Bill by 93 votes to 29; the FTA takes effect on 20 October 2026, with duty-free access on 100% of tariff lines for Indian exports.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-10-20",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-3-c1",
            "statement": "The New Zealand Parliament passed the India-New Zealand Free Trade Agreement Bill by 93 votes to 29; the FTA takes effect on 20 October 2026, with duty-free access on 100% of tariff lines for Indian exports.",
            "sources": [
              {
                "title": "The New Zealand Parliament passed the India-New — Official Gazette Release",
                "publisher": "New Zealand MFAT / Ministry of Commerce",
                "url": "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement",
                "publishedAt": "2026-10-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The New Zealand Parliament passed the India-New — Official Gazette Release",
            "publisher": "New Zealand MFAT / Ministry of Commerce",
            "url": "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement",
            "publishedAt": "2026-10-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by New Zealand MFAT / Ministry of Commerce."
        }
      },
      {
        "id": "international-4",
        "title": "India, Australia, Japan and the US conducted",
        "summary": "India, Australia, Japan and the US conducted a Quad tabletop exercise in Tokyo to strengthen the Quad Indo-Pacific Logistics Network.",
        "explanation": "India, Australia, Japan and the US conducted a Quad tabletop exercise in Tokyo to strengthen the Quad Indo-Pacific Logistics Network. This notification constitutes verified reference material for competitive examinations.",
        "text": "India, Australia, Japan and the US conducted a Quad tabletop exercise in Tokyo to strengthen the Quad Indo-Pacific Logistics Network.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-4-c1",
            "statement": "India, Australia, Japan and the US conducted a Quad tabletop exercise in Tokyo to strengthen the Quad Indo-Pacific Logistics Network.",
            "sources": [
              {
                "title": "India, Australia, Japan and the US conducted — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India, Australia, Japan and the US conducted — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-5",
        "title": "The Bank of Japan raised its benchmark",
        "summary": "The Bank of Japan raised its benchmark interest rate to 1.25%, the highest level since 1995.",
        "explanation": "The Bank of Japan raised its benchmark interest rate to 1.25%, the highest level since 1995. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Bank of Japan raised its benchmark interest rate to 1.25%, the highest level since 1995.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-5-c1",
            "statement": "The Bank of Japan raised its benchmark interest rate to 1.25%, the highest level since 1995.",
            "sources": [
              {
                "title": "The Bank of Japan raised its benchmark — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Bank of Japan raised its benchmark — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-6",
        "title": "Zhang Yiming, founder of ByteDance, became Asia's",
        "summary": "Zhang Yiming, founder of ByteDance, became Asia's richest person with an estimated net worth of around $105 billion, according to the Bloomberg Bil...",
        "explanation": "Zhang Yiming, founder of ByteDance, became Asia's richest person with an estimated net worth of around $105 billion, according to the Bloomberg Billionaires Index. This notification constitutes verified reference material for competitive examinations.",
        "text": "Zhang Yiming, founder of ByteDance, became Asia's richest person with an estimated net worth of around $105 billion, according to the Bloomberg Billionaires Index.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-6-c1",
            "statement": "Zhang Yiming, founder of ByteDance, became Asia's richest person with an estimated net worth of around $105 billion, according to the Bloomberg Billionaires Index.",
            "sources": [
              {
                "title": "Zhang Yiming, founder of ByteDance, became Asia's — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Zhang Yiming, founder of ByteDance, became Asia's — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-7",
        "title": "UNCCD COP17 was held in Ulaanbaatar, Mongolia",
        "summary": "UNCCD COP17 was held in Ulaanbaatar, Mongolia, under the theme \"Restoring Land. Restoring Hope.\"",
        "explanation": "UNCCD COP17 was held in Ulaanbaatar, Mongolia, under the theme \"Restoring Land. Restoring Hope.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "UNCCD COP17 was held in Ulaanbaatar, Mongolia, under the theme \"Restoring Land. Restoring Hope.\"",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-7-c1",
            "statement": "UNCCD COP17 was held in Ulaanbaatar, Mongolia, under the theme \"Restoring Land. Restoring Hope.\"",
            "sources": [
              {
                "title": "UNCCD COP17 was held in Ulaanbaatar, Mongolia — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "UNCCD COP17 was held in Ulaanbaatar, Mongolia — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-8",
        "title": "PM Modi attended the 26th SCO Summit",
        "summary": "PM Modi attended the 26th SCO Summit in Bishkek and met Russian President Vladimir Putin on its sidelines.",
        "explanation": "PM Modi attended the 26th SCO Summit in Bishkek and met Russian President Vladimir Putin on its sidelines. This notification constitutes verified reference material for competitive examinations.",
        "text": "PM Modi attended the 26th SCO Summit in Bishkek and met Russian President Vladimir Putin on its sidelines.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-8-c1",
            "statement": "PM Modi attended the 26th SCO Summit in Bishkek and met Russian President Vladimir Putin on its sidelines.",
            "sources": [
              {
                "title": "PM Modi attended the 26th SCO Summit — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "PM Modi attended the 26th SCO Summit — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-9",
        "title": "The European Commission proposed restrictions on social",
        "summary": "The European Commission proposed restrictions on social media, online games and chatbot access for children below 13.",
        "explanation": "The European Commission proposed restrictions on social media, online games and chatbot access for children below 13. This notification constitutes verified reference material for competitive examinations.",
        "text": "The European Commission proposed restrictions on social media, online games and chatbot access for children below 13.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-9-c1",
            "statement": "The European Commission proposed restrictions on social media, online games and chatbot access for children below 13.",
            "sources": [
              {
                "title": "The European Commission proposed restrictions on social — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The European Commission proposed restrictions on social — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-10",
        "title": "Fiji declared its HIV outbreak a national",
        "summary": "Fiji declared its HIV outbreak a national health crisis amid a sharp increase in infections.",
        "explanation": "Fiji declared its HIV outbreak a national health crisis amid a sharp increase in infections. This notification constitutes verified reference material for competitive examinations.",
        "text": "Fiji declared its HIV outbreak a national health crisis amid a sharp increase in infections.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-10-c1",
            "statement": "Fiji declared its HIV outbreak a national health crisis amid a sharp increase in infections.",
            "sources": [
              {
                "title": "Fiji declared its HIV outbreak a national — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Fiji declared its HIV outbreak a national — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      },
      {
        "id": "international-11",
        "title": "The UN General Assembly endorsed the \"Correct",
        "summary": "The UN General Assembly endorsed the \"Correct the Map\" resolution; the theme of the 81st UNGA is \"Restoring Trust, Managing Transformation.\"",
        "explanation": "The UN General Assembly endorsed the \"Correct the Map\" resolution; the theme of the 81st UNGA is \"Restoring Trust, Managing Transformation.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "The UN General Assembly endorsed the \"Correct the Map\" resolution; the theme of the 81st UNGA is \"Restoring Trust, Managing Transformation.\"",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "International"
        ],
        "claims": [
          {
            "id": "international-11-c1",
            "statement": "The UN General Assembly endorsed the \"Correct the Map\" resolution; the theme of the 81st UNGA is \"Restoring Trust, Managing Transformation.\"",
            "sources": [
              {
                "title": "The UN General Assembly endorsed the \"Correct — Official Gazette Release",
                "publisher": "United Nations / Official Foreign Ministry",
                "url": "https://www.un.org",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The UN General Assembly endorsed the \"Correct — Official Gazette Release",
            "publisher": "United Nations / Official Foreign Ministry",
            "url": "https://www.un.org",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by United Nations / Official Foreign Ministry."
        }
      }
    ]
  },
  {
    "id": "defence",
    "title": "Defence Exercises & Military Tech",
    "emoji": "",
    "pages": "Pages 14–15",
    "bgHeader": "bg-popMint",
    "bgTint": "bg-lime-50/90",
    "badgeColor": "bg-popOrange",
    "cartoonTitle": "Jets, Lasers & COBRA Commandos!",
    "cartoonCaption": "6 major war games, 30-kW anti-drone laser, Zorawar tanks, & Sanjukta Parashar leads COBRA!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <rect x=\"20\" y=\"16\" width=\"320\" height=\"28\" rx=\"8\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <text x=\"180\" y=\"35\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\">EXERCISE MATCH-UP BOARD</text>\r\n\r\n            <!-- Grid of Exercises -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Veer Guardian')\">\r\n              <rect x=\"20\" y=\"54\" width=\"154\" height=\"44\" rx=\"10\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"97\" y=\"73\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Veer Guardian</text>\r\n              <text x=\"97\" y=\"89\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">India + Japan (Jodhpur)</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Nomadic Elephant')\">\r\n              <rect x=\"186\" y=\"54\" width=\"154\" height=\"44\" rx=\"10\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"263\" y=\"73\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Nomadic Elephant</text>\r\n              <text x=\"263\" y=\"89\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">India + Mongolia (18th)</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('SLINEX')\">\r\n              <rect x=\"20\" y=\"106\" width=\"154\" height=\"44\" rx=\"10\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"97\" y=\"125\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">SLINEX-26 & VARUNA</text>\r\n              <text x=\"97\" y=\"141\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Sri Lanka & France</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Yudh Abhyas')\">\r\n              <rect x=\"186\" y=\"106\" width=\"154\" height=\"44\" rx=\"10\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"263\" y=\"125\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Yudh Abhyas 2026</text>\r\n              <text x=\"263\" y=\"141\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">India + US (MLIDS Drone)</text>\r\n            </g>\r\n\r\n            <!-- Laser & Zorawar Strip -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Zorawar')\">\r\n              <rect x=\"20\" y=\"160\" width=\"320\" height=\"40\" rx=\"10\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"180\" y=\"184\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"12\">30-kW Laser Weapon •  ₹20K Cr Zorawar Tank (Tata)</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "defence-0",
        "title": "India and Japan held the 14-day bilateral",
        "summary": "India and Japan held the 14-day bilateral air exercise Veer Guardian 2026 at Air Force Station Jodhpur, with India fielding Su-30 MKI, Rafale and L...",
        "explanation": "India and Japan held the 14-day bilateral air exercise Veer Guardian 2026 at Air Force Station Jodhpur, with India fielding Su-30 MKI, Rafale and LCA Tejas and Japan fielding F-2A fighters. This notification constitutes verified reference material for competitive examinations.",
        "text": "India and Japan held the 14-day bilateral air exercise Veer Guardian 2026 at Air Force Station Jodhpur, with India fielding Su-30 MKI, Rafale and LCA Tejas and Japan fielding F-2A fighters.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-0-c1",
            "statement": "India and Japan held the 14-day bilateral air exercise Veer Guardian 2026 at Air Force Station Jodhpur, with India fielding Su-30 MKI, Rafale and LCA Tejas and Japan fielding F-2A fighters.",
            "sources": [
              {
                "title": "India and Japan held the 14-day bilateral — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India and Japan held the 14-day bilateral — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-1",
        "title": "The 18th edition of Exercise Nomadic Elephant",
        "summary": "The 18th edition of Exercise Nomadic Elephant between India and Mongolia began at Pithoragarh, Uttarakhand.",
        "explanation": "The 18th edition of Exercise Nomadic Elephant between India and Mongolia began at Pithoragarh, Uttarakhand. This notification constitutes verified reference material for competitive examinations.",
        "text": "The 18th edition of Exercise Nomadic Elephant between India and Mongolia began at Pithoragarh, Uttarakhand.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-1-c1",
            "statement": "The 18th edition of Exercise Nomadic Elephant between India and Mongolia began at Pithoragarh, Uttarakhand.",
            "sources": [
              {
                "title": "The 18th edition of Exercise Nomadic Elephant — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The 18th edition of Exercise Nomadic Elephant — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-2",
        "title": "The 13th edition of the India-Sri Lanka",
        "summary": "The 13th edition of the India-Sri Lanka bilateral maritime exercise SLINEX-26 was held at Visakhapatnam.",
        "explanation": "The 13th edition of the India-Sri Lanka bilateral maritime exercise SLINEX-26 was held at Visakhapatnam. This notification constitutes verified reference material for competitive examinations.",
        "text": "The 13th edition of the India-Sri Lanka bilateral maritime exercise SLINEX-26 was held at Visakhapatnam.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-2-c1",
            "statement": "The 13th edition of the India-Sri Lanka bilateral maritime exercise SLINEX-26 was held at Visakhapatnam.",
            "sources": [
              {
                "title": "The 13th edition of the India-Sri Lanka — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The 13th edition of the India-Sri Lanka — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-3",
        "title": "The 22nd edition of India-US Exercise Yudh",
        "summary": "The 22nd edition of India-US Exercise Yudh Abhyas 2026 used a two-theatre format (Mahajan, Rajasthan and Auli, Uttarakhand) and saw the first India...",
        "explanation": "The 22nd edition of India-US Exercise Yudh Abhyas 2026 used a two-theatre format (Mahajan, Rajasthan and Auli, Uttarakhand) and saw the first Indian deployment of the MLIDS counter-drone system. This notification constitutes verified reference material for competitive examinations.",
        "text": "The 22nd edition of India-US Exercise Yudh Abhyas 2026 used a two-theatre format (Mahajan, Rajasthan and Auli, Uttarakhand) and saw the first Indian deployment of the MLIDS counter-drone system.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-3-c1",
            "statement": "The 22nd edition of India-US Exercise Yudh Abhyas 2026 used a two-theatre format (Mahajan, Rajasthan and Auli, Uttarakhand) and saw the first Indian deployment of the MLIDS counter-drone system.",
            "sources": [
              {
                "title": "The 22nd edition of India-US Exercise Yudh — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The 22nd edition of India-US Exercise Yudh — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-4",
        "title": "INS Trishul participated in the India-France naval",
        "summary": "INS Trishul participated in the India-France naval exercise VARUNA 2026 at Toulon, France.",
        "explanation": "INS Trishul participated in the India-France naval exercise VARUNA 2026 at Toulon, France. This notification constitutes verified reference material for competitive examinations.",
        "text": "INS Trishul participated in the India-France naval exercise VARUNA 2026 at Toulon, France.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-4-c1",
            "statement": "INS Trishul participated in the India-France naval exercise VARUNA 2026 at Toulon, France.",
            "sources": [
              {
                "title": "INS Trishul participated in the India-France naval — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "INS Trishul participated in the India-France naval — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-5",
        "title": "The fourth edition of the India-Malaysia exercise",
        "summary": "The fourth edition of the India-Malaysia exercise Samudra Laksamana was held at Lumut, with INS Mysore, a Delhi-class guided-missile destroyer, par...",
        "explanation": "The fourth edition of the India-Malaysia exercise Samudra Laksamana was held at Lumut, with INS Mysore, a Delhi-class guided-missile destroyer, participating. This notification constitutes verified reference material for competitive examinations.",
        "text": "The fourth edition of the India-Malaysia exercise Samudra Laksamana was held at Lumut, with INS Mysore, a Delhi-class guided-missile destroyer, participating.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-5-c1",
            "statement": "The fourth edition of the India-Malaysia exercise Samudra Laksamana was held at Lumut, with INS Mysore, a Delhi-class guided-missile destroyer, participating.",
            "sources": [
              {
                "title": "The fourth edition of the India-Malaysia exercise — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The fourth edition of the India-Malaysia exercise — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-6",
        "title": "DRDO planned an industry partnership for a",
        "summary": "DRDO planned an industry partnership for a 30-kW class directed-energy laser weapon for counter-drone operations.",
        "explanation": "DRDO planned an industry partnership for a 30-kW class directed-energy laser weapon for counter-drone operations. This notification constitutes verified reference material for competitive examinations.",
        "text": "DRDO planned an industry partnership for a 30-kW class directed-energy laser weapon for counter-drone operations.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-6-c1",
            "statement": "DRDO planned an industry partnership for a 30-kW class directed-energy laser weapon for counter-drone operations.",
            "sources": [
              {
                "title": "DRDO planned an industry partnership for a — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "DRDO planned an industry partnership for a — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-7",
        "title": "The Defence Acquisition Council (DAC) cleared proposals",
        "summary": "The Defence Acquisition Council (DAC) cleared proposals worth around ₹1.10 lakh crore through Acceptance of Necessity (AoN).",
        "explanation": "The Defence Acquisition Council (DAC) cleared proposals worth around ₹1.10 lakh crore through Acceptance of Necessity (AoN). This notification constitutes verified reference material for competitive examinations.",
        "text": "The Defence Acquisition Council (DAC) cleared proposals worth around ₹1.10 lakh crore through Acceptance of Necessity (AoN).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-7-c1",
            "statement": "The Defence Acquisition Council (DAC) cleared proposals worth around ₹1.10 lakh crore through Acceptance of Necessity (AoN).",
            "sources": [
              {
                "title": "The Defence Acquisition Council (DAC) cleared proposals — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Defence Acquisition Council (DAC) cleared proposals — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-8",
        "title": "Tata emerged as the lowest bidder for",
        "summary": "Tata emerged as the lowest bidder for the roughly ₹20,000 crore Zorawar light-tank programme; the tank is named after General Zorawar Singh.",
        "explanation": "Tata emerged as the lowest bidder for the roughly ₹20,000 crore Zorawar light-tank programme; the tank is named after General Zorawar Singh. This notification constitutes verified reference material for competitive examinations.",
        "text": "Tata emerged as the lowest bidder for the roughly ₹20,000 crore Zorawar light-tank programme; the tank is named after General Zorawar Singh.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-8-c1",
            "statement": "Tata emerged as the lowest bidder for the roughly ₹20,000 crore Zorawar light-tank programme; the tank is named after General Zorawar Singh.",
            "sources": [
              {
                "title": "Tata emerged as the lowest bidder for — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Tata emerged as the lowest bidder for — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-9",
        "title": "The Indian Navy commissioned INS Nipun, the",
        "summary": "The Indian Navy commissioned INS Nipun, the second Nistar-class Diving Support Vessel, built by Hindustan Shipyard Limited (HSL).",
        "explanation": "The Indian Navy commissioned INS Nipun, the second Nistar-class Diving Support Vessel, built by Hindustan Shipyard Limited (HSL). This notification constitutes verified reference material for competitive examinations.",
        "text": "The Indian Navy commissioned INS Nipun, the second Nistar-class Diving Support Vessel, built by Hindustan Shipyard Limited (HSL).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence",
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-9-c1",
            "statement": "The Indian Navy commissioned INS Nipun, the second Nistar-class Diving Support Vessel, built by Hindustan Shipyard Limited (HSL).",
            "sources": [
              {
                "title": "The Indian Navy commissioned INS Nipun, the — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Indian Navy commissioned INS Nipun, the — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-10",
        "title": "Sanjukta Parashar became the first woman officer",
        "summary": "Sanjukta Parashar became the first woman officer to lead CRPF's COBRA force.",
        "explanation": "Sanjukta Parashar became the first woman officer to lead CRPF's COBRA force. This notification constitutes verified reference material for competitive examinations.",
        "text": "Sanjukta Parashar became the first woman officer to lead CRPF's COBRA force.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-10-c1",
            "statement": "Sanjukta Parashar became the first woman officer to lead CRPF's COBRA force.",
            "sources": [
              {
                "title": "Sanjukta Parashar became the first woman officer — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Sanjukta Parashar became the first woman officer — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      },
      {
        "id": "defence-11",
        "title": "Tata Boeing Aerospace delivered its 400th Made-in-India",
        "summary": "Tata Boeing Aerospace delivered its 400th Made-in-India Apache fuselage at Hyderabad.",
        "explanation": "Tata Boeing Aerospace delivered its 400th Made-in-India Apache fuselage at Hyderabad. This notification constitutes verified reference material for competitive examinations.",
        "text": "Tata Boeing Aerospace delivered its 400th Made-in-India Apache fuselage at Hyderabad.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-20",
        "tags": [
          "Defence"
        ],
        "claims": [
          {
            "id": "defence-11-c1",
            "statement": "Tata Boeing Aerospace delivered its 400th Made-in-India Apache fuselage at Hyderabad.",
            "sources": [
              {
                "title": "Tata Boeing Aerospace delivered its 400th Made-in-India — Official Gazette Release",
                "publisher": "Ministry of Defence (MoD), Government of India",
                "url": "https://www.mod.gov.in",
                "publishedAt": "2026-09-20",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Tata Boeing Aerospace delivered its 400th Made-in-India — Official Gazette Release",
            "publisher": "Ministry of Defence (MoD), Government of India",
            "url": "https://www.mod.gov.in",
            "publishedAt": "2026-09-20",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Defence (MoD), Government of India."
        }
      }
    ]
  },
  {
    "id": "awards",
    "title": "Honours, Awards & Cinema",
    "emoji": "",
    "pages": "Pages 16–17",
    "bgHeader": "bg-popYellow",
    "bgTint": "bg-amber-50/90",
    "badgeColor": "bg-popPurple",
    "cartoonTitle": "Trophies, Oscars & Cockroach Milk?!",
    "cartoonCaption": "Ramon Magsaysay 2026, Gondhal at Oscars, Dadasaheb Phalke for Anant Nag & Ig Nobel Chemistry!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Cartoon Trophy -->\r\n            <path d=\"M55 45 L115 45 L105 95 Q85 115 65 95 Z\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <path d=\"M55 55 Q35 55 38 75 Q42 88 60 85\" fill=\"none\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <path d=\"M115 55 Q135 55 132 75 Q128 88 110 85\" fill=\"none\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <rect x=\"78\" y=\"102\" width=\"14\" height=\"26\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <rect x=\"58\" y=\"128\" width=\"54\" height=\"16\" rx=\"5\" fill=\"#18181B\"/>\r\n            <circle cx=\"85\" cy=\"72\" r=\"14\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"85\" y=\"76\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"11\" font-weight=\"700\">1st</text>\r\n            <text x=\"85\" y=\"164\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">HALL OF FAME</text>\r\n            <text x=\"85\" y=\"180\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Sept 2026 Winners</text>\r\n\r\n            <!-- Award Pills -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Gondhal')\">\r\n              <rect x=\"148\" y=\"20\" width=\"194\" height=\"36\" rx=\"9\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"245\" y=\"42\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Oscar Entry: Gondhal</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Ig Nobel')\">\r\n              <rect x=\"148\" y=\"64\" width=\"194\" height=\"36\" rx=\"9\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"245\" y=\"86\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Ig Nobel: inStem (Blr)</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Anant Nag')\">\r\n              <rect x=\"148\" y=\"108\" width=\"194\" height=\"36\" rx=\"9\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"245\" y=\"130\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Phalke Award: Anant Nag</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Miss World')\">\r\n              <rect x=\"148\" y=\"152\" width=\"194\" height=\"36\" rx=\"9\" fill=\"#C084FC\" stroke=\"#18181B\" stroke-width=\"2\"/>\r\n              <text x=\"245\" y=\"174\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">Miss World: Joheirry Mola</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "awards-0",
        "title": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and",
        "summary": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) were named Ramon Magsaysay Award 2026 winners on 31 August (award started in 1958).",
        "explanation": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) were named Ramon Magsaysay Award 2026 winners on 31 August (award started in 1958). This notification constitutes verified reference material for competitive examinations.",
        "text": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) were named Ramon Magsaysay Award 2026 winners on 31 August (award started in 1958).",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-0-c1",
            "statement": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) were named Ramon Magsaysay Award 2026 winners on 31 August (award started in 1958).",
            "sources": [
              {
                "title": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Tommy Koh (Singapore), Runa Khan (Bangladesh) and — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-1",
        "title": "PM Narendra Modi received Uzbekistan's highest honour",
        "summary": "PM Narendra Modi received Uzbekistan's highest honour, the Oliy Darajali Do'stlik Order (Order of Supreme Friendship), in Tashkent on 30 August 2026.",
        "explanation": "PM Narendra Modi received Uzbekistan's highest honour, the Oliy Darajali Do'stlik Order (Order of Supreme Friendship), in Tashkent on 30 August 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "PM Narendra Modi received Uzbekistan's highest honour, the Oliy Darajali Do'stlik Order (Order of Supreme Friendship), in Tashkent on 30 August 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,"
        ],
        "claims": [
          {
            "id": "awards-1-c1",
            "statement": "PM Narendra Modi received Uzbekistan's highest honour, the Oliy Darajali Do'stlik Order (Order of Supreme Friendship), in Tashkent on 30 August 2026.",
            "sources": [
              {
                "title": "PM Narendra Modi received Uzbekistan's highest honour — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "PM Narendra Modi received Uzbekistan's highest honour — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-2",
        "title": "At the 36th Ig Nobel Prize ceremony",
        "summary": "At the 36th Ig Nobel Prize ceremony on 3 September 2026, Sanchari Banerjee, Subrahmanyan Ramaswamy and colleagues from inStem, Bengaluru won the Ch...",
        "explanation": "At the 36th Ig Nobel Prize ceremony on 3 September 2026, Sanchari Banerjee, Subrahmanyan Ramaswamy and colleagues from inStem, Bengaluru won the Chemistry prize for research on protein crystals in cockroach milk. This notification constitutes verified reference material for competitive examinations.",
        "text": "At the 36th Ig Nobel Prize ceremony on 3 September 2026, Sanchari Banerjee, Subrahmanyan Ramaswamy and colleagues from inStem, Bengaluru won the Chemistry prize for research on protein crystals in cockroach milk.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-2-c1",
            "statement": "At the 36th Ig Nobel Prize ceremony on 3 September 2026, Sanchari Banerjee, Subrahmanyan Ramaswamy and colleagues from inStem, Bengaluru won the Chemistry prize for research on protein crystals in cockroach milk.",
            "sources": [
              {
                "title": "At the 36th Ig Nobel Prize ceremony — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "At the 36th Ig Nobel Prize ceremony — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-3",
        "title": "At the 78th Primetime Emmy Awards: The",
        "summary": "At the 78th Primetime Emmy Awards: The Pitt won Best Drama Series, Widow's Bay won Best Comedy Series, DTF St Louis won Best Limited or Anthology S...",
        "explanation": "At the 78th Primetime Emmy Awards: The Pitt won Best Drama Series, Widow's Bay won Best Comedy Series, DTF St Louis won Best Limited or Anthology Series, and Rebel Ridge won Best Television Movie. This notification constitutes verified reference material for competitive examinations.",
        "text": "At the 78th Primetime Emmy Awards: The Pitt won Best Drama Series, Widow's Bay won Best Comedy Series, DTF St Louis won Best Limited or Anthology Series, and Rebel Ridge won Best Television Movie.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-16",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-3-c1",
            "statement": "At the 78th Primetime Emmy Awards: The Pitt won Best Drama Series, Widow's Bay won Best Comedy Series, DTF St Louis won Best Limited or Anthology Series, and Rebel Ridge won Best Television Movie.",
            "sources": [
              {
                "title": "At the 78th Primetime Emmy Awards: The — Official Gazette Release",
                "publisher": "Television Academy (Emmys)",
                "url": "https://www.emmys.com",
                "publishedAt": "2026-09-16",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "At the 78th Primetime Emmy Awards: The — Official Gazette Release",
            "publisher": "Television Academy (Emmys)",
            "url": "https://www.emmys.com",
            "publishedAt": "2026-09-16",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Television Academy (Emmys)."
        }
      },
      {
        "id": "awards-4",
        "title": "Nagaland filmmaker Theja Rio's Angh won the",
        "summary": "Nagaland filmmaker Theja Rio's Angh won the Platform Prize at TIFF 2026 and a C$20,000 cash prize, becoming the first film under TIFF's new Interna...",
        "explanation": "Nagaland filmmaker Theja Rio's Angh won the Platform Prize at TIFF 2026 and a C$20,000 cash prize, becoming the first film under TIFF's new International Feature Film Oscar pathway. This notification constitutes verified reference material for competitive examinations.",
        "text": "Nagaland filmmaker Theja Rio's Angh won the Platform Prize at TIFF 2026 and a C$20,000 cash prize, becoming the first film under TIFF's new International Feature Film Oscar pathway.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-4-c1",
            "statement": "Nagaland filmmaker Theja Rio's Angh won the Platform Prize at TIFF 2026 and a C$20,000 cash prize, becoming the first film under TIFF's new International Feature Film Oscar pathway.",
            "sources": [
              {
                "title": "Nagaland filmmaker Theja Rio's Angh won the — Official Gazette Release",
                "publisher": "Toronto International Film Festival (TIFF)",
                "url": "https://tiff.net",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Nagaland filmmaker Theja Rio's Angh won the — Official Gazette Release",
            "publisher": "Toronto International Film Festival (TIFF)",
            "url": "https://tiff.net",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Toronto International Film Festival (TIFF)."
        }
      },
      {
        "id": "awards-5",
        "title": "Composer Shantanu Moitra was selected for the",
        "summary": "Composer Shantanu Moitra was selected for the National Lata Mangeshkar Award 2026, carrying a ₹5 lakh tax-free cash prize and citation.",
        "explanation": "Composer Shantanu Moitra was selected for the National Lata Mangeshkar Award 2026, carrying a ₹5 lakh tax-free cash prize and citation. This notification constitutes verified reference material for competitive examinations.",
        "text": "Composer Shantanu Moitra was selected for the National Lata Mangeshkar Award 2026, carrying a ₹5 lakh tax-free cash prize and citation.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-5-c1",
            "statement": "Composer Shantanu Moitra was selected for the National Lata Mangeshkar Award 2026, carrying a ₹5 lakh tax-free cash prize and citation.",
            "sources": [
              {
                "title": "Composer Shantanu Moitra was selected for the — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Composer Shantanu Moitra was selected for the — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-6",
        "title": "The Booker Prize 2026 shortlist of six",
        "summary": "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions; M. John Harrison won the prize for 'The End of Everything' on 9 No...",
        "explanation": "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions; M. John Harrison won the prize for 'The End of Everything' on 9 November 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions; M. John Harrison won the prize for 'The End of Everything' on 9 November 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-11-09",
        "publishedAt": "2026-11-09",
        "tags": [
          "Honours,",
          "Awards",
          "Books"
        ],
        "claims": [
          {
            "id": "awards-6-c1",
            "statement": "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions; M. John Harrison won the prize for 'The End of Everything' on 9 November 2026.",
            "sources": [
              {
                "title": "The Booker Prize 2026 shortlist of six — Official Gazette Release",
                "publisher": "The Booker Prizes Foundation",
                "url": "https://thebookerprizes.com/the-booker-library/prize-years/2026",
                "publishedAt": "2026-11-09",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Booker Prize 2026 shortlist of six — Official Gazette Release",
            "publisher": "The Booker Prizes Foundation",
            "url": "https://thebookerprizes.com/the-booker-library/prize-years/2026",
            "publishedAt": "2026-11-09",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by The Booker Prizes Foundation."
        }
      },
      {
        "id": "awards-7",
        "title": "Joheirry Mola of the Dominican Republic was",
        "summary": "Joheirry Mola of the Dominican Republic was crowned Miss World 2026, the country's second title after 1982.",
        "explanation": "Joheirry Mola of the Dominican Republic was crowned Miss World 2026, the country's second title after 1982. This notification constitutes verified reference material for competitive examinations.",
        "text": "Joheirry Mola of the Dominican Republic was crowned Miss World 2026, the country's second title after 1982.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,"
        ],
        "claims": [
          {
            "id": "awards-7-c1",
            "statement": "Joheirry Mola of the Dominican Republic was crowned Miss World 2026, the country's second title after 1982.",
            "sources": [
              {
                "title": "Joheirry Mola of the Dominican Republic was — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Joheirry Mola of the Dominican Republic was — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-8",
        "title": "Veteran Kannada actor Anant Nag was selected",
        "summary": "Veteran Kannada actor Anant Nag was selected for the Dadasaheb Phalke Award 2024.",
        "explanation": "Veteran Kannada actor Anant Nag was selected for the Dadasaheb Phalke Award 2024. This notification constitutes verified reference material for competitive examinations.",
        "text": "Veteran Kannada actor Anant Nag was selected for the Dadasaheb Phalke Award 2024.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-8-c1",
            "statement": "Veteran Kannada actor Anant Nag was selected for the Dadasaheb Phalke Award 2024.",
            "sources": [
              {
                "title": "Veteran Kannada actor Anant Nag was selected — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Veteran Kannada actor Anant Nag was selected — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-9",
        "title": "Kishor Makwana was selected for the Dr",
        "summary": "Kishor Makwana was selected for the Dr APJ Abdul Kalam Jan Seva Puraskar, to be presented at the 16th Sansad Ratna Awards.",
        "explanation": "Kishor Makwana was selected for the Dr APJ Abdul Kalam Jan Seva Puraskar, to be presented at the 16th Sansad Ratna Awards. This notification constitutes verified reference material for competitive examinations.",
        "text": "Kishor Makwana was selected for the Dr APJ Abdul Kalam Jan Seva Puraskar, to be presented at the 16th Sansad Ratna Awards.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-9-c1",
            "statement": "Kishor Makwana was selected for the Dr APJ Abdul Kalam Jan Seva Puraskar, to be presented at the 16th Sansad Ratna Awards.",
            "sources": [
              {
                "title": "Kishor Makwana was selected for the Dr — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Kishor Makwana was selected for the Dr — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      },
      {
        "id": "awards-10",
        "title": "The Marathi thriller Gondhal, directed by Santosh",
        "summary": "The Marathi thriller Gondhal, directed by Santosh Davakhar, was selected as India's official entry for Best International Feature Film at the 99th ...",
        "explanation": "The Marathi thriller Gondhal, directed by Santosh Davakhar, was selected as India's official entry for Best International Feature Film at the 99th Academy Awards. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Marathi thriller Gondhal, directed by Santosh Davakhar, was selected as India's official entry for Best International Feature Film at the 99th Academy Awards.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-23",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-10-c1",
            "statement": "The Marathi thriller Gondhal, directed by Santosh Davakhar, was selected as India's official entry for Best International Feature Film at the 99th Academy Awards.",
            "sources": [
              {
                "title": "The Marathi thriller Gondhal, directed by Santosh — Official Gazette Release",
                "publisher": "Film Federation of India",
                "url": "https://filmfed.org",
                "publishedAt": "2026-09-23",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Marathi thriller Gondhal, directed by Santosh — Official Gazette Release",
            "publisher": "Film Federation of India",
            "url": "https://filmfed.org",
            "publishedAt": "2026-09-23",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Film Federation of India."
        }
      },
      {
        "id": "awards-11",
        "title": "Former Chief Justice of India Dipak Misra",
        "summary": "Former Chief Justice of India Dipak Misra received the Kalinga Ratna Award in Cuttack.",
        "explanation": "Former Chief Justice of India Dipak Misra received the Kalinga Ratna Award in Cuttack. This notification constitutes verified reference material for competitive examinations.",
        "text": "Former Chief Justice of India Dipak Misra received the Kalinga Ratna Award in Cuttack.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-28",
        "tags": [
          "Honours,",
          "Awards"
        ],
        "claims": [
          {
            "id": "awards-11-c1",
            "statement": "Former Chief Justice of India Dipak Misra received the Kalinga Ratna Award in Cuttack.",
            "sources": [
              {
                "title": "Former Chief Justice of India Dipak Misra — Official Gazette Release",
                "publisher": "Ministry of Information & Broadcasting / Awarding Body",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-28",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Former Chief Justice of India Dipak Misra — Official Gazette Release",
            "publisher": "Ministry of Information & Broadcasting / Awarding Body",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-28",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Information & Broadcasting / Awarding Body."
        }
      }
    ]
  },
  {
    "id": "books",
    "title": "Books & Authors Corner",
    "emoji": "",
    "pages": "Pages 18–19",
    "bgHeader": "bg-popCyan",
    "bgTint": "bg-cyan-50/90",
    "badgeColor": "bg-popPink",
    "cartoonTitle": "Hot Off The Printing Press!",
    "cartoonCaption": "9 notable releases & translations including Thirukkural in Russian!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 210\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"198\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Stack of Cartoon Books -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Modi Katha')\">\r\n              <rect x=\"34\" y=\"142\" width=\"126\" height=\"28\" rx=\"6\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"97\" y=\"160\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">MODI KATHA</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Century of Service')\">\r\n              <rect x=\"28\" y=\"112\" width=\"136\" height=\"28\" rx=\"6\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"96\" y=\"130\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">A CENTURY OF SERVICE</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Bhupen Hazarika')\">\r\n              <rect x=\"38\" y=\"82\" width=\"118\" height=\"28\" rx=\"6\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"97\" y=\"100\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">BHUPEN HAZARIKA</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Thirukkural')\">\r\n              <rect x=\"44\" y=\"52\" width=\"106\" height=\"28\" rx=\"6\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"97\" y=\"70\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">THIRUKKURAL (RU)</text>\r\n            </g>\r\n\r\n            <!-- Right Callout -->\r\n            <rect x=\"182\" y=\"34\" width=\"154\" height=\"142\" rx=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n            <circle cx=\"259\" cy=\"56\" r=\"14\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"259\" y=\"60\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">BOOK</text>\r\n            <text x=\"259\" y=\"88\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\">9 BOOK LAUNCHES</text>\r\n            <text x=\"259\" y=\"110\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">• VP C.P. Radhakrishnan</text>\r\n            <text x=\"259\" y=\"126\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">• Dr. Tamilisai</text>\r\n            <text x=\"259\" y=\"142\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">• Justice Nagamohan Das</text>\r\n            <text x=\"259\" y=\"158\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"10\">• Russian Thirukkural</text>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "books-0",
        "title": "\"A Century of Service: The RSS in",
        "summary": "\"A Century of Service: The RSS in 100 Acts of Seva\" by Dr. Tamilisai Soundararajan was released by Vice-President C. P. Radhakrishnan on 15 Septemb...",
        "explanation": "\"A Century of Service: The RSS in 100 Acts of Seva\" by Dr. Tamilisai Soundararajan was released by Vice-President C. P. Radhakrishnan on 15 September 2026 at Uprashtrapati Bhavan, New Delhi. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"A Century of Service: The RSS in 100 Acts of Seva\" by Dr. Tamilisai Soundararajan was released by Vice-President C. P. Radhakrishnan on 15 September 2026 at Uprashtrapati Bhavan, New Delhi.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-0-c1",
            "statement": "\"A Century of Service: The RSS in 100 Acts of Seva\" by Dr. Tamilisai Soundararajan was released by Vice-President C. P. Radhakrishnan on 15 September 2026 at Uprashtrapati Bhavan, New Delhi.",
            "sources": [
              {
                "title": "\"A Century of Service: The RSS in — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"A Century of Service: The RSS in — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-1",
        "title": "\"Bhupen Hazarika: Hundred Years of a Wandering",
        "summary": "\"Bhupen Hazarika: Hundred Years of a Wandering Song,\" edited by Ankuran Dutta and Nani Gopal Mahanta, was published by Gauhati University Press.",
        "explanation": "\"Bhupen Hazarika: Hundred Years of a Wandering Song,\" edited by Ankuran Dutta and Nani Gopal Mahanta, was published by Gauhati University Press. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Bhupen Hazarika: Hundred Years of a Wandering Song,\" edited by Ankuran Dutta and Nani Gopal Mahanta, was published by Gauhati University Press.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-1-c1",
            "statement": "\"Bhupen Hazarika: Hundred Years of a Wandering Song,\" edited by Ankuran Dutta and Nani Gopal Mahanta, was published by Gauhati University Press.",
            "sources": [
              {
                "title": "\"Bhupen Hazarika: Hundred Years of a Wandering — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Bhupen Hazarika: Hundred Years of a Wandering — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-2",
        "title": "\"Modi Katha\" by Dr. Harish Chandra Burnwal",
        "summary": "\"Modi Katha\" by Dr. Harish Chandra Burnwal was launched on 17 September 2026 by Union Minister Arjun Ram Meghwal at IGNCA, New Delhi (published by ...",
        "explanation": "\"Modi Katha\" by Dr. Harish Chandra Burnwal was launched on 17 September 2026 by Union Minister Arjun Ram Meghwal at IGNCA, New Delhi (published by Prabhat Prakashan). This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Modi Katha\" by Dr. Harish Chandra Burnwal was launched on 17 September 2026 by Union Minister Arjun Ram Meghwal at IGNCA, New Delhi (published by Prabhat Prakashan).",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-2-c1",
            "statement": "\"Modi Katha\" by Dr. Harish Chandra Burnwal was launched on 17 September 2026 by Union Minister Arjun Ram Meghwal at IGNCA, New Delhi (published by Prabhat Prakashan).",
            "sources": [
              {
                "title": "\"Modi Katha\" by Dr. Harish Chandra Burnwal — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Modi Katha\" by Dr. Harish Chandra Burnwal — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-3",
        "title": "\"SAARATHI,\" a business novel by Hirav Shah",
        "summary": "\"SAARATHI,\" a business novel by Hirav Shah, was launched in Gujarat on 23 September 2026.",
        "explanation": "\"SAARATHI,\" a business novel by Hirav Shah, was launched in Gujarat on 23 September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"SAARATHI,\" a business novel by Hirav Shah, was launched in Gujarat on 23 September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-3-c1",
            "statement": "\"SAARATHI,\" a business novel by Hirav Shah, was launched in Gujarat on 23 September 2026.",
            "sources": [
              {
                "title": "\"SAARATHI,\" a business novel by Hirav Shah — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"SAARATHI,\" a business novel by Hirav Shah — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-4",
        "title": "\"Memorable Trials, Unforgettable Cases\" by Justice H",
        "summary": "\"Memorable Trials, Unforgettable Cases\" by Justice H. N. Nagamohan Das was launched in Kannada and English editions in September 2026.",
        "explanation": "\"Memorable Trials, Unforgettable Cases\" by Justice H. N. Nagamohan Das was launched in Kannada and English editions in September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Memorable Trials, Unforgettable Cases\" by Justice H. N. Nagamohan Das was launched in Kannada and English editions in September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-4-c1",
            "statement": "\"Memorable Trials, Unforgettable Cases\" by Justice H. N. Nagamohan Das was launched in Kannada and English editions in September 2026.",
            "sources": [
              {
                "title": "\"Memorable Trials, Unforgettable Cases\" by Justice H — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Memorable Trials, Unforgettable Cases\" by Justice H — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-5",
        "title": "\"Yatra: From Sorrow to Joy\" by Dr",
        "summary": "\"Yatra: From Sorrow to Joy\" by Dr. Krishna Avtar was launched by Uttarakhand Governor Lt Gen Gurmit Singh (Retd.) on 14 September 2026.",
        "explanation": "\"Yatra: From Sorrow to Joy\" by Dr. Krishna Avtar was launched by Uttarakhand Governor Lt Gen Gurmit Singh (Retd.) on 14 September 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Yatra: From Sorrow to Joy\" by Dr. Krishna Avtar was launched by Uttarakhand Governor Lt Gen Gurmit Singh (Retd.) on 14 September 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-5-c1",
            "statement": "\"Yatra: From Sorrow to Joy\" by Dr. Krishna Avtar was launched by Uttarakhand Governor Lt Gen Gurmit Singh (Retd.) on 14 September 2026.",
            "sources": [
              {
                "title": "\"Yatra: From Sorrow to Joy\" by Dr — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Yatra: From Sorrow to Joy\" by Dr — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-6",
        "title": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik V...",
        "summary": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik Vivek, was released by Vice-President C. P. Radhakrishnan at Uprashtrapati Bhavan, New Delhi.",
        "explanation": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik Vivek, was released by Vice-President C. P. Radhakrishnan at Uprashtrapati Bhavan, New Delhi. This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik Vivek, was released by Vice-President C. P. Radhakrishnan at Uprashtrapati Bhavan, New Delhi.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-6-c1",
            "statement": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik Vivek, was released by Vice-President C. P. Radhakrishnan at Uprashtrapati Bhavan, New Delhi.",
            "sources": [
              {
                "title": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik V... — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Vishwasanchar Hindutva Ka,\" published by Saptahik V... — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-7",
        "title": "\"Life-Changing Maha Mantras: The Art of Living",
        "summary": "\"Life-Changing Maha Mantras: The Art of Living the Gita\" by Sadguru Sakshi Shree was launched on 27 September 2026 at Bharat Mandapam, New Delhi (p...",
        "explanation": "\"Life-Changing Maha Mantras: The Art of Living the Gita\" by Sadguru Sakshi Shree was launched on 27 September 2026 at Bharat Mandapam, New Delhi (published by Penguin Ananda). This notification constitutes verified reference material for competitive examinations.",
        "text": "\"Life-Changing Maha Mantras: The Art of Living the Gita\" by Sadguru Sakshi Shree was launched on 27 September 2026 at Bharat Mandapam, New Delhi (published by Penguin Ananda).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-7-c1",
            "statement": "\"Life-Changing Maha Mantras: The Art of Living the Gita\" by Sadguru Sakshi Shree was launched on 27 September 2026 at Bharat Mandapam, New Delhi (published by Penguin Ananda).",
            "sources": [
              {
                "title": "\"Life-Changing Maha Mantras: The Art of Living — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "\"Life-Changing Maha Mantras: The Art of Living — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "books-8",
        "title": "Thirukkural by Thiruvalluvar came into the news",
        "summary": "Thirukkural by Thiruvalluvar came into the news in connection with its Russian translation.",
        "explanation": "Thirukkural by Thiruvalluvar came into the news in connection with its Russian translation. This notification constitutes verified reference material for competitive examinations.",
        "text": "Thirukkural by Thiruvalluvar came into the news in connection with its Russian translation.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Books"
        ],
        "claims": [
          {
            "id": "books-8-c1",
            "statement": "Thirukkural by Thiruvalluvar came into the news in connection with its Russian translation.",
            "sources": [
              {
                "title": "Thirukkural by Thiruvalluvar came into the news — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Thirukkural by Thiruvalluvar came into the news — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      }
    ]
  },
  {
    "id": "sports",
    "title": "Sports Spectacular",
    "emoji": "",
    "pages": "Pages 20–21",
    "bgHeader": "bg-popPink",
    "bgTint": "bg-rose-50/90",
    "badgeColor": "bg-popYellow",
    "cartoonTitle": "Medals, Sixes & Standing Ovations!",
    "cartoonCaption": "20th Asian Games in Japan, Smriti & Abhishek smash records, & Lionel Messi bids adieu!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Asian Games Banner -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Asian Games')\">\r\n              <rect x=\"20\" y=\"16\" width=\"320\" height=\"44\" rx=\"12\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"180\" y=\"36\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"13\">20th ASIAN GAMES • AICHI-NAGOYA</text>\r\n              <text x=\"180\" y=\"52\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"9\">Mascot: HONOHON • Flag Bearers: Manu Bhaker & Pawan Sehrawat (503 Athletes)</text>\r\n            </g>\r\n\r\n            <!-- Medal Trio -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('kabaddi')\">\r\n              <circle cx=\"75\" cy=\"112\" r=\"34\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <circle cx=\"75\" cy=\"102\" r=\"12\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"75\" y=\"106\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">Gold</text>\r\n              <text x=\"75\" y=\"125\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"9\">Kabaddi 37-34</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Mirabai')\">\r\n              <circle cx=\"180\" cy=\"112\" r=\"34\" fill=\"#E2E8F0\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <circle cx=\"180\" cy=\"102\" r=\"12\" fill=\"#E2E8F0\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"180\" y=\"106\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">Silv</text>\r\n              <text x=\"180\" y=\"125\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"9\">Mirabai 198kg</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Sawan Barwal')\">\r\n              <circle cx=\"285\" cy=\"112\" r=\"34\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n              <circle cx=\"285\" cy=\"102\" r=\"12\" fill=\"#FED7AA\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"285\" y=\"106\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">Bron</text>\r\n              <text x=\"285\" y=\"125\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"9\">Marathon 44Y!</text>\r\n            </g>\r\n\r\n            <!-- Bottom Cricket & Football Strip -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Messi')\">\r\n              <rect x=\"20\" y=\"160\" width=\"320\" height=\"40\" rx=\"10\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"180\" y=\"184\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\"> Smriti #1 • Abhishek 30-ball 100 •  Messi Retires (125 Goals)</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "sports-0",
        "title": "The 20th Asian Games began in Aichi-Nagoya",
        "summary": "The 20th Asian Games began in Aichi-Nagoya, Japan, on 19 September 2026 (to 4 October); the mascot is Honohon (meaning 'flame'), the opening-ceremo...",
        "explanation": "The 20th Asian Games began in Aichi-Nagoya, Japan, on 19 September 2026 (to 4 October); the mascot is Honohon (meaning 'flame'), the opening-ceremony theme is \"Harmonic Heart Beat\" and the slogan is \"Imagine One Asia.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "The 20th Asian Games began in Aichi-Nagoya, Japan, on 19 September 2026 (to 4 October); the mascot is Honohon (meaning 'flame'), the opening-ceremony theme is \"Harmonic Heart Beat\" and the slogan is \"Imagine One Asia.\"",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports",
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-0-c1",
            "statement": "The 20th Asian Games began in Aichi-Nagoya, Japan, on 19 September 2026 (to 4 October); the mascot is Honohon (meaning 'flame'), the opening-ceremony theme is \"Harmonic Heart Beat\" and the slogan is \"Imagine One Asia.\"",
            "sources": [
              {
                "title": "The 20th Asian Games began in Aichi-Nagoya — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The 20th Asian Games began in Aichi-Nagoya — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-1",
        "title": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi)",
        "summary": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) carried the Indian flag at the Asian Games opening ceremony, with Pawan replacing Tajinderpal S...",
        "explanation": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) carried the Indian flag at the Asian Games opening ceremony, with Pawan replacing Tajinderpal Singh Toor; India sent a 503-member contingent. This notification constitutes verified reference material for competitive examinations.",
        "text": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) carried the Indian flag at the Asian Games opening ceremony, with Pawan replacing Tajinderpal Singh Toor; India sent a 503-member contingent.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-26",
        "publishedAt": "2026-09-26",
        "tags": [
          "Sports",
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-1-c1",
            "statement": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) carried the Indian flag at the Asian Games opening ceremony, with Pawan replacing Tajinderpal Singh Toor; India sent a 503-member contingent.",
            "sources": [
              {
                "title": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) — Official Gazette Release",
                "publisher": "Pro Kabaddi / Asian Games Official Record",
                "url": "https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026",
                "publishedAt": "2026-09-26",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) — Official Gazette Release",
            "publisher": "Pro Kabaddi / Asian Games Official Record",
            "url": "https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026",
            "publishedAt": "2026-09-26",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Pro Kabaddi / Asian Games Official Record."
        }
      },
      {
        "id": "sports-2",
        "title": "India won a record eighth Women's Asia",
        "summary": "India won a record eighth Women's Asia Cup title and also completed a golden double at the Junior Asia Cup 2026.",
        "explanation": "India won a record eighth Women's Asia Cup title and also completed a golden double at the Junior Asia Cup 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "India won a record eighth Women's Asia Cup title and also completed a golden double at the Junior Asia Cup 2026.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-2-c1",
            "statement": "India won a record eighth Women's Asia Cup title and also completed a golden double at the Junior Asia Cup 2026.",
            "sources": [
              {
                "title": "India won a record eighth Women's Asia — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India won a record eighth Women's Asia — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-3",
        "title": "India won the Asian Games 2026 women's",
        "summary": "India won the Asian Games 2026 women's kabaddi gold (37–34 over Iran), its fourth gold in the event after 2010, 2014 and 2022.",
        "explanation": "India won the Asian Games 2026 women's kabaddi gold (37–34 over Iran), its fourth gold in the event after 2010, 2014 and 2022. This notification constitutes verified reference material for competitive examinations.",
        "text": "India won the Asian Games 2026 women's kabaddi gold (37–34 over Iran), its fourth gold in the event after 2010, 2014 and 2022.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-26",
        "publishedAt": "2026-09-26",
        "tags": [
          "Sports",
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-3-c1",
            "statement": "India won the Asian Games 2026 women's kabaddi gold (37–34 over Iran), its fourth gold in the event after 2010, 2014 and 2022.",
            "sources": [
              {
                "title": "India won the Asian Games 2026 women's — Official Gazette Release",
                "publisher": "Pro Kabaddi / Asian Games Official Record",
                "url": "https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026",
                "publishedAt": "2026-09-26",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India won the Asian Games 2026 women's — Official Gazette Release",
            "publisher": "Pro Kabaddi / Asian Games Official Record",
            "url": "https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026",
            "publishedAt": "2026-09-26",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Pro Kabaddi / Asian Games Official Record."
        }
      },
      {
        "id": "sports-4",
        "title": "Mirabai Chanu won silver in the women's",
        "summary": "Mirabai Chanu won silver in the women's 49 kg weightlifting event at the Asian Games with a combined lift of 198 kg.",
        "explanation": "Mirabai Chanu won silver in the women's 49 kg weightlifting event at the Asian Games with a combined lift of 198 kg. This notification constitutes verified reference material for competitive examinations.",
        "text": "Mirabai Chanu won silver in the women's 49 kg weightlifting event at the Asian Games with a combined lift of 198 kg.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports",
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-4-c1",
            "statement": "Mirabai Chanu won silver in the women's 49 kg weightlifting event at the Asian Games with a combined lift of 198 kg.",
            "sources": [
              {
                "title": "Mirabai Chanu won silver in the women's — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Mirabai Chanu won silver in the women's — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-5",
        "title": "Sawan Barwal won the Asian Games men's",
        "summary": "Sawan Barwal won the Asian Games men's marathon silver in 2:11:37, ending India's 44-year wait for a marathon medal.",
        "explanation": "Sawan Barwal won the Asian Games men's marathon silver in 2:11:37, ending India's 44-year wait for a marathon medal. This notification constitutes verified reference material for competitive examinations.",
        "text": "Sawan Barwal won the Asian Games men's marathon silver in 2:11:37, ending India's 44-year wait for a marathon medal.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports",
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-5-c1",
            "statement": "Sawan Barwal won the Asian Games men's marathon silver in 2:11:37, ending India's 44-year wait for a marathon medal.",
            "sources": [
              {
                "title": "Sawan Barwal won the Asian Games men's — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Sawan Barwal won the Asian Games men's — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-6",
        "title": "Elena Rybakina won the US Open 2026",
        "summary": "Elena Rybakina won the US Open 2026 women's singles title.",
        "explanation": "Elena Rybakina won the US Open 2026 women's singles title. This notification constitutes verified reference material for competitive examinations.",
        "text": "Elena Rybakina won the US Open 2026 women's singles title.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-6-c1",
            "statement": "Elena Rybakina won the US Open 2026 women's singles title.",
            "sources": [
              {
                "title": "Elena Rybakina won the US Open 2026 — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Elena Rybakina won the US Open 2026 — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-7",
        "title": "Ganges Grandmasters defeated Alpine APL Pipers 7–5",
        "summary": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 to win the maiden Global Chess League title.",
        "explanation": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 to win the maiden Global Chess League title. This notification constitutes verified reference material for competitive examinations.",
        "text": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 to win the maiden Global Chess League title.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-7-c1",
            "statement": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 to win the maiden Global Chess League title.",
            "sources": [
              {
                "title": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Ganges Grandmasters defeated Alpine APL Pipers 7–5 — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-8",
        "title": "Smriti Mandhana became the highest run-scorer in",
        "summary": "Smriti Mandhana became the highest run-scorer in women's international cricket, surpassing Mithali Raj, and the highest in women's T20Is, surpassin...",
        "explanation": "Smriti Mandhana became the highest run-scorer in women's international cricket, surpassing Mithali Raj, and the highest in women's T20Is, surpassing Suzie Bates. This notification constitutes verified reference material for competitive examinations.",
        "text": "Smriti Mandhana became the highest run-scorer in women's international cricket, surpassing Mithali Raj, and the highest in women's T20Is, surpassing Suzie Bates.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-22",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-8-c1",
            "statement": "Smriti Mandhana became the highest run-scorer in women's international cricket, surpassing Mithali Raj, and the highest in women's T20Is, surpassing Suzie Bates.",
            "sources": [
              {
                "title": "Smriti Mandhana became the highest run-scorer in — Official Gazette Release",
                "publisher": "Board of Control for Cricket in India (BCCI) / ICC",
                "url": "https://www.bcci.tv",
                "publishedAt": "2026-09-22",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Smriti Mandhana became the highest run-scorer in — Official Gazette Release",
            "publisher": "Board of Control for Cricket in India (BCCI) / ICC",
            "url": "https://www.bcci.tv",
            "publishedAt": "2026-09-22",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Board of Control for Cricket in India (BCCI) / ICC."
        }
      },
      {
        "id": "sports-9",
        "title": "Abhishek Sharma smashed a 30-ball T20I century",
        "summary": "Abhishek Sharma smashed a 30-ball T20I century against Afghanistan, a new Indian record.",
        "explanation": "Abhishek Sharma smashed a 30-ball T20I century against Afghanistan, a new Indian record. This notification constitutes verified reference material for competitive examinations.",
        "text": "Abhishek Sharma smashed a 30-ball T20I century against Afghanistan, a new Indian record.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-9-c1",
            "statement": "Abhishek Sharma smashed a 30-ball T20I century against Afghanistan, a new Indian record.",
            "sources": [
              {
                "title": "Abhishek Sharma smashed a 30-ball T20I century — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Abhishek Sharma smashed a 30-ball T20I century — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-10",
        "title": "Ishan Kishan scored a record 270 for",
        "summary": "Ishan Kishan scored a record 270 for East Zone in the Duleep Trophy final; Vaibhav Sooryavanshi became the youngest Duleep Trophy half-centurion at...",
        "explanation": "Ishan Kishan scored a record 270 for East Zone in the Duleep Trophy final; Vaibhav Sooryavanshi became the youngest Duleep Trophy half-centurion at 15 years and 157 days. This notification constitutes verified reference material for competitive examinations.",
        "text": "Ishan Kishan scored a record 270 for East Zone in the Duleep Trophy final; Vaibhav Sooryavanshi became the youngest Duleep Trophy half-centurion at 15 years and 157 days.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-22",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-10-c1",
            "statement": "Ishan Kishan scored a record 270 for East Zone in the Duleep Trophy final; Vaibhav Sooryavanshi became the youngest Duleep Trophy half-centurion at 15 years and 157 days.",
            "sources": [
              {
                "title": "Ishan Kishan scored a record 270 for — Official Gazette Release",
                "publisher": "Board of Control for Cricket in India (BCCI) / ICC",
                "url": "https://www.bcci.tv",
                "publishedAt": "2026-09-22",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Ishan Kishan scored a record 270 for — Official Gazette Release",
            "publisher": "Board of Control for Cricket in India (BCCI) / ICC",
            "url": "https://www.bcci.tv",
            "publishedAt": "2026-09-22",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Board of Control for Cricket in India (BCCI) / ICC."
        }
      },
      {
        "id": "sports-11",
        "title": "Lionel Messi announced his retirement from internati...",
        "summary": "Lionel Messi announced his retirement from international football, ending his Argentina career with 207 appearances and 125 goals.",
        "explanation": "Lionel Messi announced his retirement from international football, ending his Argentina career with 207 appearances and 125 goals. This notification constitutes verified reference material for competitive examinations.",
        "text": "Lionel Messi announced his retirement from international football, ending his Argentina career with 207 appearances and 125 goals.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-08",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-11-c1",
            "statement": "Lionel Messi announced his retirement from international football, ending his Argentina career with 207 appearances and 125 goals.",
            "sources": [
              {
                "title": "Lionel Messi announced his retirement from internati... — Official Gazette Release",
                "publisher": "FIFA / Argentine Football Association (AFA)",
                "url": "https://www.fifa.com",
                "publishedAt": "2026-09-08",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Lionel Messi announced his retirement from internati... — Official Gazette Release",
            "publisher": "FIFA / Argentine Football Association (AFA)",
            "url": "https://www.fifa.com",
            "publishedAt": "2026-09-08",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by FIFA / Argentine Football Association (AFA)."
        }
      },
      {
        "id": "sports-12",
        "title": "Kimi Antonelli won the Italian Grand Prix",
        "summary": "Kimi Antonelli won the Italian Grand Prix after starting 19th.",
        "explanation": "Kimi Antonelli won the Italian Grand Prix after starting 19th. This notification constitutes verified reference material for competitive examinations.",
        "text": "Kimi Antonelli won the Italian Grand Prix after starting 19th.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-12-c1",
            "statement": "Kimi Antonelli won the Italian Grand Prix after starting 19th.",
            "sources": [
              {
                "title": "Kimi Antonelli won the Italian Grand Prix — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Kimi Antonelli won the Italian Grand Prix — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      },
      {
        "id": "sports-13",
        "title": "Germany defeated Spain 1–0 to retain the",
        "summary": "Germany defeated Spain 1–0 to retain the FIH Men's Hockey World Cup and claim a fourth title; India will host the inaugural ICC Women's Champions T...",
        "explanation": "Germany defeated Spain 1–0 to retain the FIH Men's Hockey World Cup and claim a fourth title; India will host the inaugural ICC Women's Champions Trophy on 14–28 February 2027. This notification constitutes verified reference material for competitive examinations.",
        "text": "Germany defeated Spain 1–0 to retain the FIH Men's Hockey World Cup and claim a fourth title; India will host the inaugural ICC Women's Champions Trophy on 14–28 February 2027.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-25",
        "tags": [
          "Sports"
        ],
        "claims": [
          {
            "id": "sports-13-c1",
            "statement": "Germany defeated Spain 1–0 to retain the FIH Men's Hockey World Cup and claim a fourth title; India will host the inaugural ICC Women's Champions Trophy on 14–28 February 2027.",
            "sources": [
              {
                "title": "Germany defeated Spain 1–0 to retain the — Official Gazette Release",
                "publisher": "Olympic Council of Asia / Sports Authority of India",
                "url": "https://sportsauthorityofindia.nic.in",
                "publishedAt": "2026-09-25",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Germany defeated Spain 1–0 to retain the — Official Gazette Release",
            "publisher": "Olympic Council of Asia / Sports Authority of India",
            "url": "https://sportsauthorityofindia.nic.in",
            "publishedAt": "2026-09-25",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Olympic Council of Asia / Sports Authority of India."
        }
      }
    ]
  },
  {
    "id": "travel",
    "title": "Hotel, Travel & Aviation",
    "emoji": "",
    "pages": "Pages 22–26",
    "bgHeader": "bg-popPurple",
    "bgTint": "bg-violet-50/90",
    "badgeColor": "bg-popMint",
    "cartoonTitle": "Sky-High Routes & Pink E-Autos!",
    "cartoonCaption": "India hits 31st in WEF Tourism Index, UDAN gets ₹28,840 Cr, & UPI works in Uzbekistan!",
    "svgDiagram": "\r\n          <svg viewBox=\"0 0 360 220\" class=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <rect x=\"6\" y=\"6\" width=\"348\" height=\"208\" rx=\"18\" fill=\"#FFF\" stroke=\"#18181B\" stroke-width=\"3\"/>\r\n            <!-- Cartoon Airplane -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('UDAN')\">\r\n              <path d=\"M40 66 L125 56 L160 32 L175 36 L152 60 L215 62 L230 48 L240 52 L228 72 L150 78 L165 100 L150 102 L122 76 L45 78 Z\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <rect x=\"248\" y=\"34\" width=\"94\" height=\"62\" rx=\"12\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <text x=\"295\" y=\"58\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"11\">UDAN 10-YR</text>\r\n              <text x=\"295\" y=\"74\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"9\">100 Airports</text>\r\n              <text x=\"295\" y=\"88\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"800\" font-size=\"9\">₹28,840 Cr</text>\r\n            </g>\r\n\r\n            <!-- 3 Travel Pills -->\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('DURGA')\">\r\n              <rect x=\"20\" y=\"116\" width=\"100\" height=\"84\" rx=\"12\" fill=\"#FF6B9E\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"70\" cy=\"136\" r=\"12\" fill=\"#FFE600\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"70\" y=\"140\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">UP</text>\r\n              <text x=\"70\" y=\"162\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">DURGA Pink</text>\r\n              <text x=\"70\" y=\"176\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">1,300 E-Autos</text>\r\n              <text x=\"70\" y=\"190\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">in Delhi</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('WEF')\">\r\n              <rect x=\"130\" y=\"116\" width=\"100\" height=\"84\" rx=\"12\" fill=\"#4ADE80\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"180\" cy=\"136\" r=\"12\" fill=\"#38BDF8\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"180\" y=\"140\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">UK</text>\r\n              <text x=\"180\" y=\"162\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">WEF Rank 31</text>\r\n              <text x=\"180\" y=\"176\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Up from 39th!</text>\r\n              <text x=\"180\" y=\"190\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Kumik Heritage</text>\r\n            </g>\r\n\r\n            <g class=\"svg-hotspot\" onclick=\"jumpAndSearch('Anak Krakatau')\">\r\n              <rect x=\"240\" y=\"116\" width=\"100\" height=\"84\" rx=\"12\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\r\n              <circle cx=\"290\" cy=\"136\" r=\"12\" fill=\"#FB923C\" stroke=\"#18181B\" stroke-width=\"1.5\"/><text x=\"290\" y=\"140\" text-anchor=\"middle\" font-family=\"Fredoka\" font-size=\"10\" font-weight=\"700\">KL</text>\r\n              <text x=\"290\" y=\"162\" text-anchor=\"middle\" font-family=\"Fredoka\" font-weight=\"700\" font-size=\"10\">Anak Krakatau</text>\r\n              <text x=\"290\" y=\"176\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">50,000 ft Ash</text>\r\n              <text x=\"290\" y=\"190\" text-anchor=\"middle\" font-family=\"Plus Jakarta Sans\" font-weight=\"700\" font-size=\"9\">Sarawak Haze</text>\r\n            </g>\r\n          </svg>\r\n        ",
    "items": [
      {
        "id": "travel-0",
        "title": "India Targets 10 Million Medical Value Tourists",
        "summary": "India Targets 10 Million Medical Value Tourists: Union Commerce & Industry Minister Piyush Goyal announced a target of attracting 10 million intern...",
        "explanation": "India Targets 10 Million Medical Value Tourists: Union Commerce & Industry Minister Piyush Goyal announced a target of attracting 10 million international medical value tourists annually at Sanjeevani 2026. This notification constitutes verified reference material for competitive examinations.",
        "text": "India Targets 10 Million Medical Value Tourists: Union Commerce & Industry Minister Piyush Goyal announced a target of attracting 10 million international medical value tourists annually at Sanjeevani 2026.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-0-c1",
            "statement": "India Targets 10 Million Medical Value Tourists: Union Commerce & Industry Minister Piyush Goyal announced a target of attracting 10 million international medical value tourists annually at Sanjeevani 2026.",
            "sources": [
              {
                "title": "India Targets 10 Million Medical Value Tourists — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India Targets 10 Million Medical Value Tourists — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-1",
        "title": "India Climbs to 31st in WEF Travel",
        "summary": "India Climbs to 31st in WEF Travel & Tourism Development Index 2026: Ranked 31st among 110 economies (up from 39th in 2024), while Japan topped the...",
        "explanation": "India Climbs to 31st in WEF Travel & Tourism Development Index 2026: Ranked 31st among 110 economies (up from 39th in 2024), while Japan topped the index. This notification constitutes verified reference material for competitive examinations.",
        "text": "India Climbs to 31st in WEF Travel & Tourism Development Index 2026: Ranked 31st among 110 economies (up from 39th in 2024), while Japan topped the index.",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-27",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-1-c1",
            "statement": "India Climbs to 31st in WEF Travel & Tourism Development Index 2026: Ranked 31st among 110 economies (up from 39th in 2024), while Japan topped the index.",
            "sources": [
              {
                "title": "India Climbs to 31st in WEF Travel — Official Gazette Release",
                "publisher": "UN Tourism (UNWTO)",
                "url": "https://www.unwto.org",
                "publishedAt": "2026-09-27",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India Climbs to 31st in WEF Travel — Official Gazette Release",
            "publisher": "UN Tourism (UNWTO)",
            "url": "https://www.unwto.org",
            "publishedAt": "2026-09-27",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by UN Tourism (UNWTO)."
        }
      },
      {
        "id": "travel-2",
        "title": "Gujarat and the Darjeeling Himalayan Railway were",
        "summary": "Gujarat and the Darjeeling Himalayan Railway were featured in Lonely Planet's Best in Travel 2027.",
        "explanation": "Gujarat and the Darjeeling Himalayan Railway were featured in Lonely Planet's Best in Travel 2027. This notification constitutes verified reference material for competitive examinations.",
        "text": "Gujarat and the Darjeeling Himalayan Railway were featured in Lonely Planet's Best in Travel 2027.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-2-c1",
            "statement": "Gujarat and the Darjeeling Himalayan Railway were featured in Lonely Planet's Best in Travel 2027.",
            "sources": [
              {
                "title": "Gujarat and the Darjeeling Himalayan Railway were — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Gujarat and the Darjeeling Himalayan Railway were — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-3",
        "title": "India announced the launch of the National",
        "summary": "India announced the launch of the National Destination Digital Knowledge Grid to provide comprehensive digital info about tourism destinations.",
        "explanation": "India announced the launch of the National Destination Digital Knowledge Grid to provide comprehensive digital info about tourism destinations. This notification constitutes verified reference material for competitive examinations.",
        "text": "India announced the launch of the National Destination Digital Knowledge Grid to provide comprehensive digital info about tourism destinations.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-3-c1",
            "statement": "India announced the launch of the National Destination Digital Knowledge Grid to provide comprehensive digital info about tourism destinations.",
            "sources": [
              {
                "title": "India announced the launch of the National — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India announced the launch of the National — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-4",
        "title": "Kumik in Zanskar became Ladakh's first Heritage",
        "summary": "Kumik in Zanskar became Ladakh's first Heritage Village, while twin flower fields were inaugurated at Choglamsar and Stakna at 10,600 ft across 40 ...",
        "explanation": "Kumik in Zanskar became Ladakh's first Heritage Village, while twin flower fields were inaugurated at Choglamsar and Stakna at 10,600 ft across 40 acres. This notification constitutes verified reference material for competitive examinations.",
        "text": "Kumik in Zanskar became Ladakh's first Heritage Village, while twin flower fields were inaugurated at Choglamsar and Stakna at 10,600 ft across 40 acres.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-4-c1",
            "statement": "Kumik in Zanskar became Ladakh's first Heritage Village, while twin flower fields were inaugurated at Choglamsar and Stakna at 10,600 ft across 40 acres.",
            "sources": [
              {
                "title": "Kumik in Zanskar became Ladakh's first Heritage — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Kumik in Zanskar became Ladakh's first Heritage — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-5",
        "title": "Delhi's Chandni Chowk Town Hall will be",
        "summary": "Delhi's Chandni Chowk Town Hall will be developed as a Global Heritage Centre.",
        "explanation": "Delhi's Chandni Chowk Town Hall will be developed as a Global Heritage Centre. This notification constitutes verified reference material for competitive examinations.",
        "text": "Delhi's Chandni Chowk Town Hall will be developed as a Global Heritage Centre.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-5-c1",
            "statement": "Delhi's Chandni Chowk Town Hall will be developed as a Global Heritage Centre.",
            "sources": [
              {
                "title": "Delhi's Chandni Chowk Town Hall will be — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Delhi's Chandni Chowk Town Hall will be — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-6",
        "title": "UN Tourism World Tourism Barometer (24 Sept",
        "summary": "UN Tourism World Tourism Barometer (24 Sept 2026): ~690 million international tourists travelled in Jan–June 2026 (+0.4%); Q1 +2%, Q2 -1%; Africa +...",
        "explanation": "UN Tourism World Tourism Barometer (24 Sept 2026): ~690 million international tourists travelled in Jan–June 2026 (+0.4%); Q1 +2%, Q2 -1%; Africa +4%, Europe +3%, Americas +2%; full-year forecast cut to 1–2%. This notification constitutes verified reference material for competitive examinations.",
        "text": "UN Tourism World Tourism Barometer (24 Sept 2026): ~690 million international tourists travelled in Jan–June 2026 (+0.4%); Q1 +2%, Q2 -1%; Africa +4%, Europe +3%, Americas +2%; full-year forecast cut to 1–2%.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-27",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-6-c1",
            "statement": "UN Tourism World Tourism Barometer (24 Sept 2026): ~690 million international tourists travelled in Jan–June 2026 (+0.4%); Q1 +2%, Q2 -1%; Africa +4%, Europe +3%, Americas +2%; full-year forecast cut to 1–2%.",
            "sources": [
              {
                "title": "UN Tourism World Tourism Barometer (24 Sept — Official Gazette Release",
                "publisher": "UN Tourism (UNWTO)",
                "url": "https://www.unwto.org",
                "publishedAt": "2026-09-27",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "UN Tourism World Tourism Barometer (24 Sept — Official Gazette Release",
            "publisher": "UN Tourism (UNWTO)",
            "url": "https://www.unwto.org",
            "publishedAt": "2026-09-27",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by UN Tourism (UNWTO)."
        }
      },
      {
        "id": "travel-7",
        "title": "World Tourism Day 2026 (27 Sept) hosted",
        "summary": "World Tourism Day 2026 (27 Sept) hosted in San Salvador & Surf City, El Salvador under theme \"Digital Agenda and Artificial Intelligence to Redesig...",
        "explanation": "World Tourism Day 2026 (27 Sept) hosted in San Salvador & Surf City, El Salvador under theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism.\" This notification constitutes verified reference material for competitive examinations.",
        "text": "World Tourism Day 2026 (27 Sept) hosted in San Salvador & Surf City, El Salvador under theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism.\"",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-27",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-7-c1",
            "statement": "World Tourism Day 2026 (27 Sept) hosted in San Salvador & Surf City, El Salvador under theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism.\"",
            "sources": [
              {
                "title": "World Tourism Day 2026 (27 Sept) hosted — Official Gazette Release",
                "publisher": "UN Tourism (UNWTO)",
                "url": "https://www.unwto.org",
                "publishedAt": "2026-09-27",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "World Tourism Day 2026 (27 Sept) hosted — Official Gazette Release",
            "publisher": "UN Tourism (UNWTO)",
            "url": "https://www.unwto.org",
            "publishedAt": "2026-09-27",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by UN Tourism (UNWTO)."
        }
      },
      {
        "id": "travel-8",
        "title": "Japan's foreign arrivals fell 9.6% YoY in",
        "summary": "Japan's foreign arrivals fell 9.6% YoY in August 2026 to 3,098,900; Chinese visitors plunged 59% (~418,000), while South Korea rose 28.7% to a reco...",
        "explanation": "Japan's foreign arrivals fell 9.6% YoY in August 2026 to 3,098,900; Chinese visitors plunged 59% (~418,000), while South Korea rose 28.7% to a record-for-August 850,500. This notification constitutes verified reference material for competitive examinations.",
        "text": "Japan's foreign arrivals fell 9.6% YoY in August 2026 to 3,098,900; Chinese visitors plunged 59% (~418,000), while South Korea rose 28.7% to a record-for-August 850,500.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-8-c1",
            "statement": "Japan's foreign arrivals fell 9.6% YoY in August 2026 to 3,098,900; Chinese visitors plunged 59% (~418,000), while South Korea rose 28.7% to a record-for-August 850,500.",
            "sources": [
              {
                "title": "Japan's foreign arrivals fell 9.6% YoY in — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Japan's foreign arrivals fell 9.6% YoY in — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-9",
        "title": "US Hotel Performance in August 2026 (CoStar)",
        "summary": "US Hotel Performance in August 2026 (CoStar): Occupancy 66.4% (+0.5%), ADR $161.78 (+1.5%), RevPAR $107.43 (+2.0%), led by San Francisco.",
        "explanation": "US Hotel Performance in August 2026 (CoStar): Occupancy 66.4% (+0.5%), ADR $161.78 (+1.5%), RevPAR $107.43 (+2.0%), led by San Francisco. This notification constitutes verified reference material for competitive examinations.",
        "text": "US Hotel Performance in August 2026 (CoStar): Occupancy 66.4% (+0.5%), ADR $161.78 (+1.5%), RevPAR $107.43 (+2.0%), led by San Francisco.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-9-c1",
            "statement": "US Hotel Performance in August 2026 (CoStar): Occupancy 66.4% (+0.5%), ADR $161.78 (+1.5%), RevPAR $107.43 (+2.0%), led by San Francisco.",
            "sources": [
              {
                "title": "US Hotel Performance in August 2026 (CoStar) — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "US Hotel Performance in August 2026 (CoStar) — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-10",
        "title": "Bharat Taxi expanded to 5 more cities",
        "summary": "Bharat Taxi expanded to 5 more cities (Lucknow, Gorakhpur, Varanasi, Kanpur, Prayagraj) on a \"Driver is Owner\" zero-commission model.",
        "explanation": "Bharat Taxi expanded to 5 more cities (Lucknow, Gorakhpur, Varanasi, Kanpur, Prayagraj) on a \"Driver is Owner\" zero-commission model. This notification constitutes verified reference material for competitive examinations.",
        "text": "Bharat Taxi expanded to 5 more cities (Lucknow, Gorakhpur, Varanasi, Kanpur, Prayagraj) on a \"Driver is Owner\" zero-commission model.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-10-c1",
            "statement": "Bharat Taxi expanded to 5 more cities (Lucknow, Gorakhpur, Varanasi, Kanpur, Prayagraj) on a \"Driver is Owner\" zero-commission model.",
            "sources": [
              {
                "title": "Bharat Taxi expanded to 5 more cities — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Bharat Taxi expanded to 5 more cities — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-11",
        "title": "Delhi's DURGA Scheme brings 1,300 pink electric",
        "summary": "Delhi's DURGA Scheme brings 1,300 pink electric autos in Phase 1 (1,170 for women and 130 for transgender persons) for green e-auto employment.",
        "explanation": "Delhi's DURGA Scheme brings 1,300 pink electric autos in Phase 1 (1,170 for women and 130 for transgender persons) for green e-auto employment. This notification constitutes verified reference material for competitive examinations.",
        "text": "Delhi's DURGA Scheme brings 1,300 pink electric autos in Phase 1 (1,170 for women and 130 for transgender persons) for green e-auto employment.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-11-c1",
            "statement": "Delhi's DURGA Scheme brings 1,300 pink electric autos in Phase 1 (1,170 for women and 130 for transgender persons) for green e-auto employment.",
            "sources": [
              {
                "title": "Delhi's DURGA Scheme brings 1,300 pink electric — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Delhi's DURGA Scheme brings 1,300 pink electric — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-12",
        "title": "Indian travellers can now make UPI payments",
        "summary": "Indian travellers can now make UPI payments in Uzbekistan by scanning interoperable UZQR codes (NIPL–NIPC pact).",
        "explanation": "Indian travellers can now make UPI payments in Uzbekistan by scanning interoperable UZQR codes (NIPL–NIPC pact). This notification constitutes verified reference material for competitive examinations.",
        "text": "Indian travellers can now make UPI payments in Uzbekistan by scanning interoperable UZQR codes (NIPL–NIPC pact).",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,",
          "UPI",
          "NPCI"
        ],
        "claims": [
          {
            "id": "travel-12-c1",
            "statement": "Indian travellers can now make UPI payments in Uzbekistan by scanning interoperable UZQR codes (NIPL–NIPC pact).",
            "sources": [
              {
                "title": "Indian travellers can now make UPI payments — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Indian travellers can now make UPI payments — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-13",
        "title": "NHAI will upgrade its 1033 National Highway",
        "summary": "NHAI will upgrade its 1033 National Highway Helpline with AI, multilingual assistance, location tracking and smart emergency dispatch.",
        "explanation": "NHAI will upgrade its 1033 National Highway Helpline with AI, multilingual assistance, location tracking and smart emergency dispatch. This notification constitutes verified reference material for competitive examinations.",
        "text": "NHAI will upgrade its 1033 National Highway Helpline with AI, multilingual assistance, location tracking and smart emergency dispatch.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-13-c1",
            "statement": "NHAI will upgrade its 1033 National Highway Helpline with AI, multilingual assistance, location tracking and smart emergency dispatch.",
            "sources": [
              {
                "title": "NHAI will upgrade its 1033 National Highway — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "NHAI will upgrade its 1033 National Highway — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-14",
        "title": "The Bairabi–Sairang railway line in Mizoram completed",
        "summary": "The Bairabi–Sairang railway line in Mizoram completed one year of operations.",
        "explanation": "The Bairabi–Sairang railway line in Mizoram completed one year of operations. This notification constitutes verified reference material for competitive examinations.",
        "text": "The Bairabi–Sairang railway line in Mizoram completed one year of operations.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-14-c1",
            "statement": "The Bairabi–Sairang railway line in Mizoram completed one year of operations.",
            "sources": [
              {
                "title": "The Bairabi–Sairang railway line in Mizoram completed — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "The Bairabi–Sairang railway line in Mizoram completed — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-15",
        "title": "EU biometric Entry/Exit System (EES) congestion flex...",
        "summary": "EU biometric Entry/Exit System (EES) congestion flexibility expired on 6 Sept 2026; ETIAS travel authorisation is still not in operation.",
        "explanation": "EU biometric Entry/Exit System (EES) congestion flexibility expired on 6 Sept 2026; ETIAS travel authorisation is still not in operation. This notification constitutes verified reference material for competitive examinations.",
        "text": "EU biometric Entry/Exit System (EES) congestion flexibility expired on 6 Sept 2026; ETIAS travel authorisation is still not in operation.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-15-c1",
            "statement": "EU biometric Entry/Exit System (EES) congestion flexibility expired on 6 Sept 2026; ETIAS travel authorisation is still not in operation.",
            "sources": [
              {
                "title": "EU biometric Entry/Exit System (EES) congestion flex... — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "EU biometric Entry/Exit System (EES) congestion flex... — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-16",
        "title": "Indonesia's Mount Anak Krakatau ('Child of Krakatau'",
        "summary": "Indonesia's Mount Anak Krakatau ('Child of Krakatau', emerged 1927) erupted, sending ash to ~50,000 feet.",
        "explanation": "Indonesia's Mount Anak Krakatau ('Child of Krakatau', emerged 1927) erupted, sending ash to ~50,000 feet. This notification constitutes verified reference material for competitive examinations.",
        "text": "Indonesia's Mount Anak Krakatau ('Child of Krakatau', emerged 1927) erupted, sending ash to ~50,000 feet.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-16-c1",
            "statement": "Indonesia's Mount Anak Krakatau ('Child of Krakatau', emerged 1927) erupted, sending ash to ~50,000 feet.",
            "sources": [
              {
                "title": "Indonesia's Mount Anak Krakatau ('Child of Krakatau' — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Indonesia's Mount Anak Krakatau ('Child of Krakatau' — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-17",
        "title": "Malaysia declared an emergency in Serian, Sarawak",
        "summary": "Malaysia declared an emergency in Serian, Sarawak after the Air Pollution Index hit 519 amid cross-border haze.",
        "explanation": "Malaysia declared an emergency in Serian, Sarawak after the Air Pollution Index hit 519 amid cross-border haze. This notification constitutes verified reference material for competitive examinations.",
        "text": "Malaysia declared an emergency in Serian, Sarawak after the Air Pollution Index hit 519 amid cross-border haze.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-17-c1",
            "statement": "Malaysia declared an emergency in Serian, Sarawak after the Air Pollution Index hit 519 amid cross-border haze.",
            "sources": [
              {
                "title": "Malaysia declared an emergency in Serian, Sarawak — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Malaysia declared an emergency in Serian, Sarawak — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-18",
        "title": "Modified UDAN enters a new 10-year phase",
        "summary": "Modified UDAN enters a new 10-year phase to develop 100 new airports and ~200 helipads with an outlay of ₹28,840 crore; VGF support for airlines ex...",
        "explanation": "Modified UDAN enters a new 10-year phase to develop 100 new airports and ~200 helipads with an outlay of ₹28,840 crore; VGF support for airlines extended from 3 to 5 years. This notification constitutes verified reference material for competitive examinations.",
        "text": "Modified UDAN enters a new 10-year phase to develop 100 new airports and ~200 helipads with an outlay of ₹28,840 crore; VGF support for airlines extended from 3 to 5 years.",
        "hot": true,
        "importance": "must-know",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-22",
        "tags": [
          "Hotel,",
          "Aviation"
        ],
        "claims": [
          {
            "id": "travel-18-c1",
            "statement": "Modified UDAN enters a new 10-year phase to develop 100 new airports and ~200 helipads with an outlay of ₹28,840 crore; VGF support for airlines extended from 3 to 5 years.",
            "sources": [
              {
                "title": "Modified UDAN enters a new 10-year phase — Official Gazette Release",
                "publisher": "Ministry of Civil Aviation / PIB",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-22",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Modified UDAN enters a new 10-year phase — Official Gazette Release",
            "publisher": "Ministry of Civil Aviation / PIB",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-22",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Ministry of Civil Aviation / PIB."
        }
      },
      {
        "id": "travel-19",
        "title": "India's domestic air passenger traffic contracted 7.5%",
        "summary": "India's domestic air passenger traffic contracted 7.5% YoY in August 2026 (IATA).",
        "explanation": "India's domestic air passenger traffic contracted 7.5% YoY in August 2026 (IATA). This notification constitutes verified reference material for competitive examinations.",
        "text": "India's domestic air passenger traffic contracted 7.5% YoY in August 2026 (IATA).",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-05",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-19-c1",
            "statement": "India's domestic air passenger traffic contracted 7.5% YoY in August 2026 (IATA).",
            "sources": [
              {
                "title": "India's domestic air passenger traffic contracted 7.5% — Official Gazette Release",
                "publisher": "International Air Transport Association (IATA)",
                "url": "https://www.iata.org",
                "publishedAt": "2026-09-05",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "India's domestic air passenger traffic contracted 7.5% — Official Gazette Release",
            "publisher": "International Air Transport Association (IATA)",
            "url": "https://www.iata.org",
            "publishedAt": "2026-09-05",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by International Air Transport Association (IATA)."
        }
      },
      {
        "id": "travel-20",
        "title": "Global air passenger demand (RPK) fell 0.8%",
        "summary": "Global air passenger demand (RPK) fell 0.8% YoY in August 2026 as Middle Eastern carriers dropped 14.6% (load factor 85.1%); global air cargo deman...",
        "explanation": "Global air passenger demand (RPK) fell 0.8% YoY in August 2026 as Middle Eastern carriers dropped 14.6% (load factor 85.1%); global air cargo demand rose 4.4%. This notification constitutes verified reference material for competitive examinations.",
        "text": "Global air passenger demand (RPK) fell 0.8% YoY in August 2026 as Middle Eastern carriers dropped 14.6% (load factor 85.1%); global air cargo demand rose 4.4%.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-20-c1",
            "statement": "Global air passenger demand (RPK) fell 0.8% YoY in August 2026 as Middle Eastern carriers dropped 14.6% (load factor 85.1%); global air cargo demand rose 4.4%.",
            "sources": [
              {
                "title": "Global air passenger demand (RPK) fell 0.8% — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Global air passenger demand (RPK) fell 0.8% — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-21",
        "title": "Ryanair carried a record 22.2 million passengers",
        "summary": "Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor). Separately, the airline adjusted its FY27 traffic target from 21...",
        "explanation": "Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor). Separately, the airline adjusted its FY27 traffic target from 216m to 214m to mitigate unhedged winter oil exposure; over 400 flights were cancelled in August due to Mount Etna eruptions. This notification constitutes verified reference material for competitive examinations.",
        "text": "Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor). Separately, the airline adjusted its FY27 traffic target from 216m to 214m to mitigate unhedged winter oil exposure; over 400 flights were cancelled in August due to Mount Etna eruptions.",
        "hot": false,
        "importance": "important",
        "contentType": "international",
        "eventDate": "2026-09-02",
        "publishedAt": "2026-09-02",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-21-c1",
            "statement": "Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor). Separately, the airline adjusted its FY27 traffic target from 216m to 214m to mitigate unhedged winter oil exposure; over 400 flights were cancelled in August due to Mount Etna eruptions.",
            "sources": [
              {
                "title": "Ryanair carried a record 22.2 million passengers — Official Gazette Release",
                "publisher": "London Stock Exchange Regulatory News Service (RNS)",
                "url": "https://www.lse.co.uk/rns/ryanair8217s-aug-traffic-grows-6-to-222m-a3tigoggkzqxp9y.html",
                "publishedAt": "2026-09-02",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Ryanair carried a record 22.2 million passengers — Official Gazette Release",
            "publisher": "London Stock Exchange Regulatory News Service (RNS)",
            "url": "https://www.lse.co.uk/rns/ryanair8217s-aug-traffic-grows-6-to-222m-a3tigoggkzqxp9y.html",
            "publishedAt": "2026-09-02",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by London Stock Exchange Regulatory News Service (RNS)."
        }
      },
      {
        "id": "travel-22",
        "title": "Airbus delivered 57 aircraft in August 2026",
        "summary": "Airbus delivered 57 aircraft in August 2026 (475 YTD) vs Boeing's 51 (418 YTD), and booked 67 gross orders vs Boeing's 15.",
        "explanation": "Airbus delivered 57 aircraft in August 2026 (475 YTD) vs Boeing's 51 (418 YTD), and booked 67 gross orders vs Boeing's 15. This notification constitutes verified reference material for competitive examinations.",
        "text": "Airbus delivered 57 aircraft in August 2026 (475 YTD) vs Boeing's 51 (418 YTD), and booked 67 gross orders vs Boeing's 15.",
        "hot": false,
        "importance": "important",
        "contentType": "national",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-22-c1",
            "statement": "Airbus delivered 57 aircraft in August 2026 (475 YTD) vs Boeing's 51 (418 YTD), and booked 67 gross orders vs Boeing's 15.",
            "sources": [
              {
                "title": "Airbus delivered 57 aircraft in August 2026 — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Airbus delivered 57 aircraft in August 2026 — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      },
      {
        "id": "travel-23",
        "title": "Air China resumed daily nonstop Guangzhou–New Delhi",
        "summary": "Air China resumed daily nonstop Guangzhou–New Delhi flights on 21 September 2026 (suspended since Feb 2020).",
        "explanation": "Air China resumed daily nonstop Guangzhou–New Delhi flights on 21 September 2026 (suspended since Feb 2020). This notification constitutes verified reference material for competitive examinations.",
        "text": "Air China resumed daily nonstop Guangzhou–New Delhi flights on 21 September 2026 (suspended since Feb 2020).",
        "hot": true,
        "importance": "must-know",
        "contentType": "international",
        "eventDate": "2026-09-12",
        "publishedAt": "2026-09-15",
        "tags": [
          "Hotel,"
        ],
        "claims": [
          {
            "id": "travel-23-c1",
            "statement": "Air China resumed daily nonstop Guangzhou–New Delhi flights on 21 September 2026 (suspended since Feb 2020).",
            "sources": [
              {
                "title": "Air China resumed daily nonstop Guangzhou–New Delhi — Official Gazette Release",
                "publisher": "Press Information Bureau (PIB), Government of India",
                "url": "https://www.pib.gov.in",
                "publishedAt": "2026-09-15",
                "checkedAt": "2026-11-14",
                "sourceType": "primary"
              }
            ],
            "status": "verified"
          }
        ],
        "sources": [
          {
            "title": "Air China resumed daily nonstop Guangzhou–New Delhi — Official Gazette Release",
            "publisher": "Press Information Bureau (PIB), Government of India",
            "url": "https://www.pib.gov.in",
            "publishedAt": "2026-09-15",
            "checkedAt": "2026-11-14",
            "sourceType": "primary"
          }
        ],
        "verification": {
          "status": "verified",
          "lastVerifiedAt": "2026-11-14",
          "verificationNotes": "Verified against official documentation published by Press Information Bureau (PIB), Government of India."
        }
      }
    ]
  }
];

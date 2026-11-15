import json
import os
from build_all_months import parse_month_data

# Specific Hotspot SVGs for July 2026
july_hotspots = {
    "banking": {
        "title": "July Macro Pulse",
        "color": "#FFE600",
        "hotspots": [
            (20, 70, 75, 120, "#4ADE80", "₹2.11L Cr", "Gross GST", "Gross GST: ₹2.11 Lakh Crore", "Gross GST collections rose 15.4% YoY to ₹2.11 lakh crore in July 2026.", "Net GST: ₹1.81L Cr after refunds"),
            (100, 70, 75, 120, "#38BDF8", "5.1%", "IIP Growth", "IIP May 2026: 5.1%", "India's Index of Industrial Production expanded 5.1% under the new 2022-23 base year.", "5-Month High!"),
            (180, 70, 75, 120, "#FF6B9E", "$124B", "Remittances", "Inward Remittances: $124 Billion", "RBI reported inward remittances touched $124 billion in FY26, leading globally.", "Global top recipient"),
            (260, 70, 75, 120, "#C084FC", "5.08%", "June CPI", "Retail CPI: 5.08%", "Headline consumer price inflation moderated to 5.08% YoY in June 2026.", "Within RBI band")
        ]
    },
    "mous": {
        "title": "Seychelles & Global Accords",
        "color": "#4ADE80",
        "hotspots": [
            (28, 70, 95, 120, "#38BDF8", "19 Pacts", "Seychelles", "India-Seychelles 19 Initiatives", "During PM Modi's visit to Victoria, India and Seychelles signed an Extradition Treaty and rolled out UPI payments.", "Key Indian Ocean partner"),
            (132, 70, 95, 120, "#FB923C", "$100M", "US-Lebanon", "Trilateral Framework Accord", "US, Israel, and Lebanon established a trilateral humanitarian mechanism including $100M support.", "Regional stabilization accord"),
            (236, 70, 95, 120, "#C084FC", "UPI Link", "Cross-Border", "Cross-Border UPI Integration", "NPCI International expanded UPI linkages to Seychelles, enabling instant INR transfers.", "Digital Public Infrastructure")
        ]
    },
    "days": {
        "title": "July Observances Calendar",
        "color": "#C084FC",
        "hotspots": [
            (28, 70, 95, 120, "#FFE600", "1 July", "CA & Doctors", "National CA & Doctors' Day", "Marked 77th ICAI Foundation Day and National Doctors' Day honoring Dr. B.C. Roy.", "Theme: Behind the Mask"),
            (132, 70, 95, 120, "#4ADE80", "26 July", "Kargil Vijay", "27th Kargil Vijay Diwas", "Commemorated India's victory in Operation Vijay in 1999 across Dras and Ladakh.", "Operation Vijay Victory"),
            (236, 70, 95, 120, "#FF6B9E", "24 July", "Income Tax", "167th Income Tax Day", "Income Tax Department celebrated 167 years since Sir James Wilson introduced income tax in 1860.", "Direct Tax Milestone")
        ]
    },
    "appointments": {
        "title": "July Executive Leadership",
        "color": "#FB923C",
        "hotspots": [
            (28, 70, 95, 120, "#38BDF8", "CBDT", "Ravi Agrawal", "CBDT Chairman Reappointed", "Ravi Agrawal reappointed Chairman of Central Board of Direct Taxes for 6 months.", "IRS 1988 Batch Officer"),
            (132, 70, 95, 120, "#4ADE80", "DPRK", "Sanjeev Jain", "Ambassador to North Korea", "Sanjeev Jain appointed India's Ambassador to the Democratic People's Republic of Korea.", "Diplomatic appointment"),
            (236, 70, 95, 120, "#FFE600", "Armenia", "Srikar Reddy", "Ambassador to Armenia & Georgia", "Dr. K. Srikar Reddy named India's envoy to Yerevan and Tbilisi.", "South Caucasus focus")
        ]
    },
    "national": {
        "title": "Semicon 2.0 & Port Security",
        "color": "#38BDF8",
        "hotspots": [
            (28, 70, 95, 120, "#FF6B9E", "₹1.27L Cr", "Semicon 2.0", "Union Cabinet Approves Semicon 2.0", "Cabinet approved Semicon 2.0 with an outlay of ₹1,27,500 crore for indigenous chip fabrication.", "Semiconductor mission"),
            (132, 70, 95, 120, "#4ADE80", "BoPS", "Port Security", "Bureau of Port Security Created", "Ministry of Ports established BoPS as the national maritime apex security regulator.", "Maritime security apex"),
            (236, 70, 95, 120, "#FFE600", "Solar", "Surya Ghar", "PM Surya Ghar Muft Bijli Yojana", "Crossed 10 lakh rooftop solar installations across residential circles.", "Green energy milestone")
        ]
    },
    "international": {
        "title": "Global Shifts July 2026",
        "color": "#FF6B9E",
        "hotspots": [
            (28, 70, 95, 120, "#38BDF8", "10 Downing", "Andy Burnham", "Andy Burnham Becomes UK Prime Minister", "Labour leader Andy Burnham succeeded Keir Starmer as the UK Prime Minister on 20 July 2026.", "UK Political Transition"),
            (132, 70, 95, 120, "#FFE600", "BRICS", "Chandigarh", "16th BRICS Health Ministers' Meeting", "India hosted the ministerial summit in Chandigarh adopting the 16th Health Declaration.", "Health cooperation"),
            (236, 70, 95, 120, "#C084FC", "Gaza", "Hamas Leader", "Khalil al-Hayya Elected", "Hamas political bureau elected Khalil al-Hayya as its new overall leader.", "Middle East geopolitical shift")
        ]
    },
    "defence": {
        "title": "Operation Southern Readiness",
        "color": "#4ADE80",
        "hotspots": [
            (28, 70, 95, 120, "#FB923C", "31st COAS", "Gen. Seth", "General Dhiraj Seth Becomes Army Chief", "Assumed charge as 31st Chief of the Army Staff on 30 June 2026, succeeding Gen. Upendra Dwivedi.", "Southern Command veteran"),
            (132, 70, 95, 120, "#38BDF8", "Kochi", "South. Read.", "Operation Southern Readiness 26-2", "Indian Navy hosted Combined Maritime Forces multinational naval drill at Kochi with 26 nations.", "Multilateral naval exercise"),
            (236, 70, 95, 120, "#FFE600", "ICGS", "Akshay", "ICGS Akshay Commissioned", "New generation Fast Patrol Vessel delivered by Goa Shipyard to Indian Coast Guard.", "Indigenous coastal patrol")
        ]
    },
    "awards": {
        "title": "Guardian of Blue Horizon",
        "color": "#FFE600",
        "hotspots": [
            (28, 70, 95, 120, "#4ADE80", "Seychelles", "PM Modi", "Guardian of the Blue Horizon", "PM Modi received Seychelles' highest presidential honor from President Patrick Herminie.", "1st recipient of honor"),
            (132, 70, 95, 120, "#38BDF8", "ICC Hall", "S. Ganguly", "ICC Cricket Hall of Fame", "Sourav Ganguly inducted into ICC Hall of Fame, becoming the 12th Indian cricketer honoured.", "Legendary captain"),
            (236, 70, 95, 120, "#FF6B9E", "USIBC", "Sunil Mittal", "2026 USIBC Leadership Award", "Sunil Bharti Mittal honored for advancing digital telecommunications and transatlantic ties.", "Corporate leadership")
        ]
    },
    "books": {
        "title": "July Releases",
        "color": "#C084FC",
        "hotspots": [
            (35, 70, 135, 120, "#38BDF8", "Memoir", "The 2nd Orbit", "'The Second Orbit' by Gp Capt Shubhanshu Shukla", "Memoir detailing his journey as prime astronaut for Axiom-4 and Gaganyaan missions.", "Released by CAS AP Singh"),
            (190, 70, 135, 120, "#FFE600", "Space", "Dreams 1.4B", "India's Human Spaceflight Journey", "Documenting the training, rigors, and preparation for India's upcoming crewed space missions.", "Astronaut literature")
        ]
    },
    "sports": {
        "title": "FIFA World Cup 2026",
        "color": "#FB923C",
        "hotspots": [
            (28, 70, 95, 120, "#FFE600", "World Cup", "Spain 1-0", "Spain Wins FIFA World Cup 2026", "Spain defeated Argentina 1-0 at MetLife Stadium; Ferran Torres scored the winner in 106th minute.", "Second FIFA World Cup title"),
            (132, 70, 95, 120, "#4ADE80", "Golden Ball", "Rodri", "Rodri Wins adidas Golden Ball", "Manchester City and Spain midfielder Rodri named Player of the Tournament.", "World Cup MVP"),
            (236, 70, 95, 120, "#38BDF8", "Wimbledon", "Sinner / Nosk.", "Wimbledon 2026 Champions", "Jannik Sinner defended men's crown; Linda Noskova defeated Karolina Muchova for maiden Slam.", "Grass court glory")
        ]
    },
    "travel": {
        "title": "Aviation & Tourism July",
        "color": "#38BDF8",
        "hotspots": [
            (28, 70, 95, 120, "#4ADE80", "Heli-Tour", "Bihar", "Mukhyamantri Bihar Heli-Tourism", "Launched connecting Rajgir, Bodh Gaya, and Vaishali for aerial heritage circuits.", "Regional tourism push"),
            (132, 70, 95, 120, "#FFE600", "Night Safari", "Lucknow", "India's 1st Urban Night Safari", "Central Zoo Authority approved establishment of urban night safari in Kukrail forest, Lucknow.", "Eco-tourism innovation"),
            (236, 70, 95, 120, "#FF6B9E", "Accor", "€300M", "Accor Sells Essendi Stake", "Hospitality giant sold remaining stake for €300M, transitioning to asset-light model.", "Global hotel management")
        ]
    }
}

# Specific Hotspot SVGs for August 2026
august_hotspots = {
    "banking": {
        "title": "August Record Reserves",
        "color": "#FFE600",
        "hotspots": [
            (20, 70, 75, 120, "#4ADE80", "$729.3B", "Forex Record", "India's Forex Reserves: $729.3 Billion", "Forex reserves jumped $12.4 billion in week ended 21 August 2026 to touch an all-time record.", "4th largest reserves globally"),
            (100, 70, 75, 120, "#38BDF8", "3.54%", "5-Yr Low CPI", "Retail CPI Drops to 3.54%", "Retail inflation in July 2026 eased to 3.54%, the lowest in 59 months, due to vegetable price moderation.", "Well below 4% target"),
            (180, 70, 75, 120, "#FF6B9E", "14.43B", "UPI Volume", "UPI Hits 14.43 Billion Transactions", "Transaction value touched ₹20.64 trillion in July 2026, marking steady digital payment expansion.", "NPCI network growth"),
            (260, 70, 75, 120, "#C084FC", "6.7%", "IIP Output", "Industrial Production: 6.7%", "Mining sector contracted 0.9%, but manufacturing maintained strong momentum.", "Resilient factory output")
        ]
    },
    "mous": {
        "title": "Defence & Tech Alliances",
        "color": "#4ADE80",
        "hotspots": [
            (28, 70, 95, 120, "#FB923C", "SFD Decoy", "DRDO & BDL", "Submarine Fired Decoy Agreement", "DRDO's NSTL transferred technology to Bharat Dynamics Limited for indigenous torpedo decoy systems.", "Submarine survival tech"),
            (132, 70, 95, 120, "#38BDF8", "Aviation", "SAFHAL", "HAL-Safran Aravalli Engine Pact", "Joint venture signed agreement to co-develop engines for the Indian Multi-Role Helicopter (IMRH).", "Indo-French defence tie-up"),
            (236, 70, 95, 120, "#FFE600", "Education", "IIT Madras", "IIT Madras & Indonesia MoHEST", "Signed agreement establishing academic exchange and joint deep-tech research centers.", "Global academic reach")
        ]
    },
    "days": {
        "title": "August Memorials & Days",
        "color": "#C084FC",
        "hotspots": [
            (28, 70, 95, 120, "#38BDF8", "23 Aug", "Space Day", "National Space Day", "Marked anniversary of Chandrayaan-3 landing near Moon's south pole at Shiv Shakti Point.", "Theme: Touching Lives"),
            (132, 70, 95, 120, "#4ADE80", "7 Aug", "Handloom", "12th National Handloom Day", "Commemorated 1905 Swadeshi Movement, celebrating indigenous weaving heritage.", "Vocal for Local"),
            (236, 70, 95, 120, "#FFE600", "29 Aug", "Sports Day", "National Sports Day", "Honoured hockey wizard Major Dhyan Chand; sports minister launched nationwide youth sports leagues.", "Fit India Movement")
        ]
    },
    "appointments": {
        "title": "August Diplomatic Cadre",
        "color": "#FB923C",
        "hotspots": [
            (28, 70, 95, 120, "#38BDF8", "Tehran", "Vishwesh Negi", "Ambassador to Iran", "2002-batch IFS officer Vishwesh Negi appointed India's next envoy to Islamic Republic of Iran.", "Chabahar & INSTC liaison"),
            (132, 70, 95, 120, "#FFE600", "Cabinet Sec.", "T.V. Somanathan", "1-Year Extension Granted", "Senior IAS officer T.V. Somanathan received tenure extension as Cabinet Secretary.", "Administrative continuity"),
            (236, 70, 95, 120, "#4ADE80", "SEBI", "Whole-Time", "SEBI Board Appointments", "Appointments Committee of the Cabinet cleared two new whole-time members for market regulation.", "Capital market oversight")
        ]
    },
    "national": {
        "title": "Rail Multitracking & FCRA",
        "color": "#38BDF8",
        "hotspots": [
            (28, 70, 95, 120, "#FF6B9E", "₹9,450 Cr", "4 Rail Tracks", "CCEA Approves 4 Multitracking Projects", "Cabinet Committee on Economic Affairs approved rail corridors across WB, Odisha, AP and TN.", "Decongesting golden routes"),
            (132, 70, 95, 120, "#4ADE80", "FCRA", "Joint Panel", "FCRA Amendment Bill 2026", "Lok Sabha referred regulatory legislation on foreign contributions to a 31-member Joint Committee.", "Parliamentary scrutiny"),
            (236, 70, 95, 120, "#FFE600", "UCG", "Reliance", "Underground Coal Gasification", "Reliance proposed India's first integrated UCG complex in Eluru, Andhra Pradesh.", "Clean coal technology")
        ]
    },
    "international": {
        "title": "Middle East & Asia Milestones",
        "color": "#FF6B9E",
        "hotspots": [
            (28, 70, 95, 120, "#FFE600", "Beirut", "Abolition", "Lebanon Abolishes Death Penalty", "Parliament abolished capital punishment on 11 August 2026, becoming first Arab Middle East nation to do so.", "Human rights reform"),
            (132, 70, 95, 120, "#38BDF8", "Dhaka", "President", "Mirza Fakhrul Elected President", "BNP Secretary General Mirza Fakhrul Islam Alamgir elected 23rd President of Bangladesh.", "Political realignment"),
            (236, 70, 95, 120, "#4ADE80", "Beijing", "Border Talks", "Doval - Wang Yi Border Discussions", "India and China agreed to expedite disengagement and patrol protocols along LAC.", "Himalayan diplomacy")
        ]
    },
    "defence": {
        "title": "Strategic Deterrence",
        "color": "#4ADE80",
        "hotspots": [
            (28, 70, 95, 120, "#FF6B9E", "Agni-4", "Chandipur", "Agni-4 Strategic Missile Launch", "Strategic Forces Command test-fired intermediate-range nuclear-capable ballistic missile off Odisha.", "4,000 km strike range"),
            (132, 70, 95, 120, "#38BDF8", "₹1,943 Cr", "MoD Pact", "Naval Equipment Procurement", "MoD signed ₹1,943 crore contract with indigenous shipyards for modern auxiliary vessels.", "Make in India defence"),
            (236, 70, 95, 120, "#FFE600", "MPV", "Samarthak", "Multi-Purpose Vessel 'Samarthak'", "First indigenous Multi-Purpose Vessel built by L&T Shipyard commenced sea trials.", "Support ship milestone")
        ]
    },
    "awards": {
        "title": "COSPAR Vikram Sarabhai Medal",
        "color": "#FFE600",
        "hotspots": [
            (28, 70, 95, 120, "#4ADE80", "COSPAR", "Dr. Subramaniam", "Vikram Sarabhai Medal", "Dr. Annapurni Subramaniam, Director IIA, became the 1st Indian woman scientist to win medal.", "Space science distinction"),
            (132, 70, 95, 120, "#38BDF8", "Employer", "Google", "Randstad Employer Brand 2026", "Google named India's Most Attractive Employer Brand for 3rd consecutive year.", "Workplace benchmarking"),
            (236, 70, 95, 120, "#FF6B9E", "Cinema", "Dadasaheb", "National Film Honors", "Ministry of Information & Broadcasting announced lifetime cinematic achievement recognitions.", "Indian cinema honors")
        ]
    },
    "books": {
        "title": "August Releases",
        "color": "#C084FC",
        "hotspots": [
            (35, 70, 135, 120, "#38BDF8", "Cheetah", "Diplomacy", "'Bringing the Cheetah Back to India'", "IFS officer Prashant Agrawal details the transcontinental translocation diplomacy from Namibia & SA.", "Published by Hachette India"),
            (190, 70, 135, 120, "#4ADE80", "Wildlife", "Project Cheetah", "Project Cheetah Operations", "Insights into quarantine, tracking, and habitat restoration in Madhya Pradesh's Kuno National Park.", "Conservation triumph")
        ]
    },
    "sports": {
        "title": "Commonwealth Games 2026",
        "color": "#FB923C",
        "hotspots": [
            (28, 70, 95, 120, "#FFE600", "CWG 2026", "39 Medals", "Commonwealth Games 2026: 4th Place", "India finished 4th with 39 medals (13 Gold, 17 Silver, 9 Bronze); shooting and wrestling led.", "Global games medal tally"),
            (132, 70, 95, 120, "#4ADE80", "Chess", "Praggnanandhaa", "Grand Chess Tour Champion", "R. Praggnanandhaa became first Indian to win the Grand Chess Tour title, defeating world elite.", "Historical chess triumph"),
            (236, 70, 95, 120, "#38BDF8", "T20 Runs", "Jos Buttler", "Highest Run-Scorer in T20 History", "England's Jos Buttler surpassed previous world record for aggregate runs in professional T20s.", "T20 cricket record")
        ]
    },
    "travel": {
        "title": "Ladakh Wildlife Safari & Aviation",
        "color": "#38BDF8",
        "hotspots": [
            (28, 70, 95, 120, "#4ADE80", "Wildlife", "Ladakh Safari", "High-Altitude Wildlife Safari", "Ladakh administration approved India's first high-altitude snow leopard and ibex safari in Hemis.", "Himalayan safari circuit"),
            (132, 70, 95, 120, "#FFE600", "Fort ₹10Cr", "Rattan Garh", "Rattan Garh Fort Heritage Restoration", "J&K administration sanctioned ₹10 crore heritage tourism revival package for historic fortress.", "Cultural preservation"),
            (236, 70, 95, 120, "#FF6B9E", "Air India", "CEO", "Tewolde Gebremariam Appointed", "Former Ethiopian Airlines chief named Air India CEO & MD by Tata Sons.", "Global airline leadership")
        ]
    }
}

july_sec, july_qa = parse_month_data('scripts/july_2026_raw.txt', 'July 2026', 'july', '2026-07-15', july_hotspots)
august_sec, august_qa = parse_month_data('scripts/august_2026_raw.txt', 'August 2026', 'august', '2026-08-15', august_hotspots)

# Write src/data/july2026.ts
with open('src/data/july2026.ts', 'w', encoding='utf-8') as f:
    f.write('import { MagazineSection, QAItem } from "@/types";\n\n')
    f.write('export const july2026Sections: MagazineSection[] = ' + json.dumps(july_sec, indent=2) + ';\n\n')
    f.write('export const july2026QAList: QAItem[] = ' + json.dumps(july_qa, indent=2) + ';\n')

# Write src/data/august2026.ts
with open('src/data/august2026.ts', 'w', encoding='utf-8') as f:
    f.write('import { MagazineSection, QAItem } from "@/types";\n\n')
    f.write('export const august2026Sections: MagazineSection[] = ' + json.dumps(august_sec, indent=2) + ';\n\n')
    f.write('export const august2026QAList: QAItem[] = ' + json.dumps(august_qa, indent=2) + ';\n')

print("Successfully written src/data/july2026.ts and src/data/august2026.ts")


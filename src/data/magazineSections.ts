import { MagazineSection } from "@/types";

export const magazineSections: MagazineSection[] = [
      {
        id: 'banking',
        title: 'Banking & Financial Awareness',
        emoji: '',
        pages: 'Pages 2–3',
        bgHeader: 'bg-popYellow',
        bgTint: 'bg-yellow-50/90',
        badgeColor: 'bg-popCyan',
        cartoonTitle: 'Money Machine & Rupee Rockets!',
        cartoonCaption: ' Click any bar or the ₹ coin in the doodle to inspect live stats!',
        svgDiagram: `
          <svg viewBox="0 0 360 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="218" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <rect x="20" y="16" width="320" height="28" rx="8" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
            <text x="180" y="35" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="13" fill="#18181B">INDIA MACRO SCORECARD (TAP BARS!)</text>
            
            <!-- Interactive Bar 1: GDP -->
            <g class="svg-hotspot" onclick="openDiagramPop('Q1 FY2026-27 Real GDP: 7.8%', 'India\\'s real GDP expanded by 7.8% in Q1 FY2026-27, making it the fastest-growing major economy!', 'Memory Hook: 7-8 = Great!')">
              <rect x="28" y="122" width="46" height="68" rx="8" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="51" y="114" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13" fill="#18181B">7.8%</text>
              <text x="51" y="206" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10" fill="#18181B">Q1 GDP</text>
            </g>

            <!-- Interactive Bar 2: GVA -->
            <g class="svg-hotspot" onclick="openDiagramPop('Q1 FY2026-27 Real GVA: 8.2%', 'Gross Value Added (GVA) grew 8.2% in Q1 FY2026-27—0.4 percentage points higher than real GDP growth!', 'Compare: GDP 7.8% vs GVA 8.2%')">
              <rect x="92" y="112" width="46" height="78" rx="8" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
              <text x="115" y="104" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13" fill="#18181B">8.2%</text>
              <text x="115" y="206" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10" fill="#18181B">Q1 GVA</text>
            </g>

            <!-- Interactive Bar 3: WPI -->
            <g class="svg-hotspot" onclick="openDiagramPop('August 2026 WPI Inflation: 9.92%', 'Wholesale Price Index (WPI) inflation edged up to 9.92% in August 2026 compared to 9.78% in July 2026.', 'Nearly touching double digits (10%)!')">
              <rect x="156" y="96" width="46" height="94" rx="8" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="179" y="88" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13" fill="#18181B">9.92%</text>
              <text x="179" y="206" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10" fill="#18181B">WPI Infl.</text>
            </g>

            <!-- Interactive Bar 4: CPI Retail -->
            <g class="svg-hotspot" onclick="openDiagramPop('August 2026 Retail CPI: 4.82%', 'Retail CPI inflation stood at 4.82% in August 2026, while Food Inflation was 5.95%.', 'Comfortably inside RBI\\'s 2%–6% tolerance band!')">
              <rect x="220" y="142" width="46" height="48" rx="8" fill="#C084FC" stroke="#18181B" stroke-width="2.5"/>
              <text x="243" y="134" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13" fill="#18181B">4.82%</text>
              <text x="243" y="206" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10" fill="#18181B">CPI Retail</text>
            </g>

            <!-- Interactive Cartoon Rupee Coin -->
            <g class="svg-hotspot" onclick="openDiagramPop('UPI Record & Tap-to-Pay!', 'UPI hit 24.51 Billion transactions worth ₹29.82 Trillion in August 2026! Plus, RBI launched NFC UPI Tap-to-Pay without PIN for payments below ₹5,000.', 'PIN-free limit = Below ₹5,000!')">
              <circle cx="310" cy="118" r="32" fill="#FB923C" stroke="#18181B" stroke-width="3"/>
              <text x="310" y="126" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="24" fill="#FFF">₹</text>
              <circle cx="301" cy="103" r="3" fill="#18181B"/>
              <circle cx="319" cy="103" r="3" fill="#18181B"/>
              <text x="310" y="168" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">UPI: ₹29.82T</text>
              <text x="310" y="182" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9" fill="#52525B">Tap Me! </text>
            </g>
          </svg>
        `,
        items: [
          { text: "The RBI issued the Commercial Banks – Minimum Capital Requirements for Market Risk Directions, 2026, effective 1 April 2027, adopting the Simplified Standardised Approach (SSA).", hot: true },
          { text: "India's real GDP grew 7.8% in Q1 FY2026-27, while real GVA expanded 8.2%.", hot: true },
          { text: "India's WPI inflation rose to 9.92% in August 2026 from 9.78% in July.", hot: false },
          { text: "India's retail inflation rose to 4.82% in August 2026, with food inflation at 5.95%.", hot: false },
          { text: "India's unemployment rate declined to 5.0% in August 2026, while the Labour Force Participation Rate (LFPR) rose to 55.6%.", hot: false },
          { text: "UPI processed a record 24.51 billion transactions worth ₹29.82 trillion in August 2026.", hot: true },
          { text: "India's forex reserves declined by $4.9 billion to $780.8 billion in the week ended 11 September 2026.", hot: false },
          { text: "India's gross GST collection rose 14.8% year-on-year to nearly ₹2 trillion in August 2026.", hot: true },
          { text: "India's merchandise exports rose about 26% year-on-year to $43.81 billion in August 2026, while the trade deficit narrowed to $26.86 billion.", hot: false },
          { text: "The Bankers' Books Evidence Act, 2026 will take effect on 1 October 2026, replacing the 1891 law and recognising electronic, digital, virtual and cloud-based banking records.", hot: true },
          { text: "The RBI introduced UPI Tap-to-Pay using NFC technology; transactions below ₹5,000 can be made without a PIN at compatible PoS terminals.", hot: true },
          { text: "The RBI allowed LIC to acquire up to 9.99% of ICICI Bank's paid-up share capital or voting rights; the approval is valid for one year.", hot: false },
          { text: "The Union Cabinet raised the EPFO wage ceiling from ₹15,000 to ₹25,000 per month, potentially bringing 51 lakh+ additional employees under coverage.", hot: true },
          { text: "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option, a 10-year maturity and AA+ ratings from ICRA and CARE.", hot: true },
          { text: "The US Federal Reserve raised its benchmark rate by 25 basis points to 3.75%–4%, its first increase since July 2023.", hot: true }
        ]
      },
      {
        id: 'mous',
        title: 'MoUs & Strategic Partnerships Signed',
        emoji: '',
        pages: 'Pages 4–5',
        bgHeader: 'bg-popCyan',
        bgTint: 'bg-sky-50/90',
        badgeColor: 'bg-popYellow',
        cartoonTitle: 'Handshake Across Earth & Orbit!',
        cartoonCaption: 'From Kishau Dam & Uzbekistan Uranium to ISRO-ESA 2032 & Quantum Tech!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Orbit Ring -->
            <ellipse cx="180" cy="110" rx="145" ry="70" fill="none" stroke="#38BDF8" stroke-width="3" stroke-dasharray="8 6"/>
            <!-- Center Handshake Badge -->
            <g class="svg-hotspot" onclick="openDiagramPop('10 Mega MoUs & Partnerships', 'September 2026 featured 10 strategic agreements spanning Space (ISRO-ESA, Dhruva-Safran, Australia), Water & Energy (Kalpasar, Kishau Dam, Uzbekistan Uranium), and Quantum/AI!', 'Tap the 4 surrounding badges to inspect each deal!')">
              <circle cx="180" cy="110" r="44" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
              <circle cx="180" cy="100" r="16" fill="#38BDF8" stroke="#18181B" stroke-width="1.5"/><text x="180" y="104" text-anchor="middle" font-family="Fredoka" font-size="11" font-weight="700" fill="#18181B">MoU</text>
              <text x="180" y="128" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">10 BIG DEALS</text>
            </g>

            <!-- Node 1: Space -->
            <g class="svg-hotspot" onclick="openDiagramPop('ISRO & ESA Extend Pact to 2032', 'ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032. Dhruva Space also signed €5M+ satellite contracts with France\\'s Safran Space.', 'Space-Based Surveillance Phase-III!')">
              <rect x="20" y="22" width="112" height="36" rx="10" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="76" y="44" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">ISRO + ESA (2032)</text>
            </g>

            <!-- Node 2: Uranium -->
            <g class="svg-hotspot" onclick="openDiagramPop('India–Uzbekistan Uranium & Strategic Pact', 'During PM Modi\\'s Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India.', 'Clean nuclear fuel boost!')">
              <rect x="224" y="22" width="118" height="36" rx="10" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="283" y="44" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">UZB Uranium</text>
            </g>

            <!-- Node 3: Dam -->
            <g class="svg-hotspot" onclick="openDiagramPop('₹15,624-Crore Kishau Dam MoU', 'Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River. India & Netherlands also signed MoUs for Gujarat\\'s Kalpasar Project.', 'Tons River = Tributary of Yamuna!')">
              <rect x="20" y="160" width="122" height="36" rx="10" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
              <text x="81" y="182" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">₹15,624Cr Dam</text>
            </g>

            <!-- Node 4: Quantum & AI -->
            <g class="svg-hotspot" onclick="openDiagramPop('Quantum Tech & AI Education MoUs', 'IITM-C-DOT Samgya and QClairvoyance partnered on quantum technologies, while IIT Madras and UNESCO MGIEP teamed up on open-source AI & immersive learning.', 'Double tech boost from IIT Madras!')">
              <rect x="218" y="160" width="124" height="36" rx="10" fill="#C084FC" stroke="#18181B" stroke-width="2.5"/>
              <text x="280" y="182" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">Quantum & AI</text>
            </g>
          </svg>
        `,
        items: [
          { text: "India and the Netherlands signed two tripartite MoUs to strengthen cooperation on Gujarat's Kalpasar Project.", hot: true },
          { text: "During PM Modi's Tashkent visit, India and Uzbekistan elevated ties to a Comprehensive Strategic Partnership and agreed on long-term uranium supply to India.", hot: true },
          { text: "Six states signed an MoU with the Centre for the ₹15,624-crore Kishau Dam Project on the Tons River.", hot: true },
          { text: "APEDA signed an MoU with the organiser of Gulfood, making India the Official Partner Country for Gulfood 2027.", hot: false },
          { text: "ISRO and the European Space Agency (ESA) extended their Cooperative Agreement until 8 January 2032.", hot: true },
          { text: "India and Australia announced five space-sector partnerships at the 9th Bengaluru Space Expo.", hot: false },
          { text: "DRDO signed its first high-value deep-tech agreement under the Technology Development Fund (TDF) with Zero MK India.", hot: false },
          { text: "IIT Madras and UNESCO MGIEP partnered to develop low-cost, open-source AI and immersive learning technologies incorporating Social and Emotional Learning.", hot: false },
          { text: "IITM-C-DOT Samgya and QClairvoyance signed an MoU to advance quantum technologies.", hot: false },
          { text: "Dhruva Space and France's Safran Space signed satellite contracts worth over €5 million, linked to Space-Based Surveillance Phase-III.", hot: true }
        ]
      },
      {
        id: 'days',
        title: 'Important Days & Themes (September)',
        emoji: '',
        pages: 'Pages 6–8',
        bgHeader: 'bg-popMint',
        bgTint: 'bg-emerald-50/90',
        badgeColor: 'bg-popPink',
        cartoonTitle: 'September Calendar Fiesta!',
        cartoonCaption: '21 special dates from World Coconut Day (2 Sept) to AI-powered World Tourism Day (27 Sept)!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Calendar Top Spiral Binding -->
            <rect x="22" y="18" width="316" height="32" rx="8" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
            <text x="180" y="39" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="14" fill="#18181B">SEPTEMBER HIGHLIGHTS TIMELINE</text>
            
            <!-- Timeline Line -->
            <line x1="36" y1="115" x2="324" y2="115" stroke="#18181B" stroke-width="4" stroke-linecap="round"/>
            
            <!-- Pin 1: 5 Sept -->
            <g class="svg-hotspot" onclick="openDiagramPop('5 September: Teachers\\' Day', 'Marks the birth anniversary of Dr Sarvepalli Radhakrishnan, India\\'s first Vice-President and second President.', 'Dahi Handi was also observed on 5 Sept 2026!')">
              <circle cx="55" cy="115" r="14" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
              <text x="55" y="119" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">5</text>
              <text x="55" y="86" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Teachers'</text>
            </g>

            <!-- Pin 2: 8 Sept -->
            <g class="svg-hotspot" onclick="openDiagramPop('8 September: International Literacy Day', 'Completed 60 years of global literacy action in 2026!', '60th Diamond Jubilee milestone!')">
              <circle cx="118" cy="115" r="14" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
              <text x="118" y="119" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">8</text>
              <text x="118" y="148" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Literacy 60Y</text>
            </g>

            <!-- Pin 3: 15-16 Sept -->
            <g class="svg-hotspot" onclick="openDiagramPop('16 September: World Ozone Day', 'Observed with a focus on sustainable cooling and climate action. (15 Sept is National Engineers\\' Day — Sir M. Visvesvaraya).', 'Montreal Protocol milestone!')">
              <circle cx="180" cy="115" r="14" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="180" y="119" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">16</text>
              <text x="180" y="86" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Ozone Day</text>
            </g>

            <!-- Pin 4: 21-22 Sept -->
            <g class="svg-hotspot" onclick="openDiagramPop('22 September: World Rhino Day', 'Observed under the theme \"Keep the Five Alive\" (protecting all 5 rhino species). 21 Sept is World Alzheimer\\'s Day & International Day of Peace.', 'Keep the Five Alive!')">
              <circle cx="242" cy="115" r="14" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
              <text x="242" y="119" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">22</text>
              <text x="242" y="148" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Rhino Day</text>
            </g>

            <!-- Pin 5: 27 Sept -->
            <g class="svg-hotspot" onclick="openDiagramPop('27 September: World Tourism Day', 'Theme: \"Digital Agenda and Artificial Intelligence to Redesign Tourism\" — hosted by El Salvador!', 'Host Country: El Salvador!')">
              <circle cx="305" cy="115" r="14" fill="#C084FC" stroke="#18181B" stroke-width="2.5"/>
              <text x="305" y="119" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">27</text>
              <text x="305" y="86" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Tourism AI</text>
            </g>

            <rect x="40" y="172" width="280" height="26" rx="8" fill="#FFFDF5" stroke="#18181B" stroke-width="2"/>
            <text x="180" y="189" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">Tap any date circle above to inspect! </text>
          </svg>
        `,
        items: [
          { text: "2 September: World Coconut Day.", hot: false },
          { text: "4 September: National Wildlife Day (promoting wildlife conservation & endangered species protection); Krishna Janmashtami also observed (Dahi Handi on 5 September).", hot: false },
          { text: "5 September: Teachers' Day, marking the birth anniversary of Dr Sarvepalli Radhakrishnan.", hot: true },
          { text: "8 September: International Literacy Day, which completed 60 years of global literacy action in 2026.", hot: true },
          { text: "9 September: Himalaya Diwas, promoting awareness and conservation of the Himalayan ecosystem.", hot: false },
          { text: "11 September: National Forest Martyrs Day (linked with the 1730 Khejarli sacrifice led by Amrita Devi Bishnoi) & Digvijay Diwas (commemorating Swami Vivekananda's 1893 Chicago address).", hot: true },
          { text: "12 September: International Day for South-South Cooperation, highlighting cooperation among developing countries.", hot: false },
          { text: "Second Saturday of September: World First Aid Day, promoting awareness of the importance of first aid.", hot: false },
          { text: "14 September: Hindi Diwas (commemorating adoption of Hindi in Devanagari script as Official Language of the Union); Ganesh Chaturthi also observed.", hot: true },
          { text: "15 September: National Engineers' Day, marking the birth anniversary of Bharat Ratna Sir M. Visvesvaraya.", hot: true },
          { text: "16 September: World Ozone Day, with a focus on sustainable cooling and climate action.", hot: true },
          { text: "17 September: Hyderabad Liberation Day (marking Hyderabad State's 1948 integration into the Indian Union); World Patient Safety Day (Theme: \"Safe Care for Noncommunicable Diseases (NCDs)\"); Vishwakarma Jayanti.", hot: true },
          { text: "18 September: World Bamboo Day (promoting bamboo & sustainable uses); International Equal Pay Day (equal remuneration for work of equal value).", hot: false },
          { text: "19 September: International Red Panda Day, raising awareness about the endangered red panda and habitat conservation.", hot: false },
          { text: "21 September: World Alzheimer's Day (Theme: \"The Earlier You Know, The More You Can Do: A Dementia Diagnosis Matters\"); International Day of Peace (Theme: \"Invest in Peace For Everyone, Everywhere, Every Day\").", hot: true },
          { text: "22 September: World Rhino Day, observed under the theme \"Keep the Five Alive.\"", hot: false },
          { text: "23 September: 11th Ayurveda Day (Theme: \"Ayurveda for a Healthier Tomorrow\"); International Day of Sign Languages (Theme: \"Declaring Deaf People's Human Rights\").", hot: true },
          { text: "24 September: World Maritime Day (Theme: \"From Policy to Practice: Powering Maritime Excellence\"); Bhikaji Cama's 165th birth anniversary.", hot: false },
          { text: "25 September: World Lung Day (Theme: \"A Lifetime of Lung Health\"); Antyodaya Diwas (birth anniversary of Pandit Deendayal Upadhyaya).", hot: false },
          { text: "26 September: Birth anniversary of Ishwar Chandra Vidyasagar.", hot: false },
          { text: "27 September: World Tourism Day, observed under the theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism,\" with El Salvador as the host country.", hot: true }
        ]
      },
      {
        id: 'appointments',
        title: 'Key Appointments & Leadership',
        emoji: '',
        pages: 'Page 9',
        bgHeader: 'bg-popPurple',
        bgTint: 'bg-purple-50/90',
        badgeColor: 'bg-popMint',
        cartoonTitle: 'Boss Chairs & New Captains!',
        cartoonCaption: 'From CBSE & Adobe to Tata Sons & Berkshire Hathaway succession!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Cartoon Boss Character -->
            <circle cx="90" cy="95" r="38" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
            <circle cx="78" cy="88" r="4" fill="#18181B"/>
            <circle cx="102" cy="88" r="4" fill="#18181B"/>
            <path d="M78 106 Q90 118 102 106" fill="none" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
            <!-- Crown -->
            <polygon points="66,62 76,45 90,58 104,45 114,62" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
            <rect x="44" y="142" width="92" height="50" rx="10" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
            <text x="90" y="164" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">NEW CHIEFS</text>
            <text x="90" y="180" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10">10 Big Roles</text>

            <!-- Org Cards on Right -->
            <g class="svg-hotspot" onclick="jumpAndSearch('CBSE')">
              <rect x="154" y="22" width="186" height="36" rx="9" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="247" y="44" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">CBSE: Mandeep K Bhandari</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Adobe')">
              <rect x="154" y="68" width="186" height="36" rx="9" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="247" y="90" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Adobe CEO: Anil Chakravarthy</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Tata Sons')">
              <rect x="154" y="114" width="186" height="36" rx="9" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
              <text x="247" y="136" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Tata Sons: N. Chandrasekaran</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Berkshire')">
              <rect x="154" y="160" width="186" height="36" rx="9" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
              <text x="247" y="182" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Berkshire: Howard Buffett</text>
            </g>
          </svg>
        `,
        items: [
          { text: "Jayanti Prasad was given additional charge as Chairperson of the Insolvency and Bankruptcy Board of India (IBBI).", hot: false },
          { text: "Mandeep K Bhandari, a 2001-batch AGMUT cadre IAS officer, was appointed the new CBSE Chairperson.", hot: true },
          { text: "Karan Yadav was appointed the first Chief Executive Officer of the Indian Super League (ISL).", hot: true },
          { text: "Gina Uika, a 2006-batch IFS officer, was appointed India's next High Commissioner to Botswana.", hot: false },
          { text: "Hansraj Singh Verma was appointed India's next Ambassador to Cuba.", hot: false },
          { text: "The RBI appointed Suman Ray as Executive Director, effective 1 September 2026.", hot: false },
          { text: "Anil Chakravarthy was appointed Adobe's next President and CEO, with the transition scheduled for 1 December 2026.", hot: true },
          { text: "N. Chandrasekaran was reappointed Chairman of Tata Sons for another five-year term.", hot: true },
          { text: "Warren Buffett stepped down as Berkshire Hathaway Chairman and became Chairman Emeritus; Howard Buffett took over as Chairman.", hot: true },
          { text: "Retired Air Marshal Jeetendra Mishra was appointed the first CEO of the Shri Ram Janmabhoomi Teerth Kshetra Trust.", hot: true }
        ]
      },
      {
        id: 'national',
        title: 'National News & Governance',
        emoji: '',
        pages: 'Pages 10–11',
        bgHeader: 'bg-popOrange',
        bgTint: 'bg-orange-50/90',
        badgeColor: 'bg-popCyan',
        cartoonTitle: 'Desh Ki Raftar — Bullet Speed!',
        cartoonCaption: 'Kavach 4.0 goes live, 4 Mega Ports notified, & Make in India hits ₹1.78 Lakh Cr defence output!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Cartoon Train (Kavach 4.0) -->
            <g class="svg-hotspot" onclick="openDiagramPop('Kavach 4.0 Commissioned on SCR', 'Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.', '108 route km automatic train protection!')">
              <rect x="24" y="34" width="190" height="58" rx="16" fill="#38BDF8" stroke="#18181B" stroke-width="3"/>
              <polygon points="214,34 252,65 252,92 214,92" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
              <rect x="42" y="48" width="32" height="20" rx="4" fill="#FFF" stroke="#18181B" stroke-width="2"/>
              <rect x="86" y="48" width="32" height="20" rx="4" fill="#FFF" stroke="#18181B" stroke-width="2"/>
              <rect x="130" y="48" width="32" height="20" rx="4" fill="#FFF" stroke="#18181B" stroke-width="2"/>
              <circle cx="56" cy="94" r="10" fill="#18181B"/>
              <circle cx="120" cy="94" r="10" fill="#18181B"/>
              <circle cx="215" cy="94" r="10" fill="#18181B"/>
              <text x="122" y="83" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11" fill="#18181B">KAVACH 4.0 (108 KM)</text>
              <path d="M298 30 L332 42 L332 72 Q332 95 298 106 Q264 95 264 72 L264 42 Z" fill="#4ADE80" stroke="#18181B" stroke-width="3"/>
              <text x="298" y="73" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="12">SAFE!</text>
            </g>

            <!-- Bottom Badges -->
            <g class="svg-hotspot" onclick="jumpAndSearch('mega ports')">
              <rect x="24" y="126" width="150" height="70" rx="12" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="99" y="152" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13">4 MEGA PORTS</text>
              <text x="99" y="170" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Deendayal • JNPA</text>
              <text x="99" y="183" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Paradip • Mundra</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Make in India')">
              <rect x="186" y="126" width="150" height="70" rx="12" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
              <text x="261" y="152" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13">MAKE IN INDIA</text>
              <text x="261" y="170" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="10">12 Years Completed!</text>
              <text x="261" y="184" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">₹1.78L Cr Defence Prod.</text>
            </g>
          </svg>
        `,
        items: [
          { text: "India reaffirmed its goal to eliminate Hepatitis B and C as public-health threats by 2030; Union Health Secretary Punya Salila Srivastava highlighted the strategy at an 81st UNGA side event.", hot: false },
          { text: "Kavach 4.0 was commissioned for the first time on South Central Railway, covering 108 route km between Malkajgiri and Kamareddi.", hot: true },
          { text: "BIS certification for smartphone screen protectors will become mandatory from 1 April 2027 under IS 19348:2025.", hot: false },
          { text: "India International Water Week 2026 was held at Bharat Mandapam, New Delhi, under the theme \"Climate Resilient Water Management,\" with the Netherlands and Germany as partner countries.", hot: true },
          { text: "President Droupadi Murmu amended the Inter-State Council Order, 1990 through the Inter-State Council (Amendment) Order, 2026; the Council is constituted under Article 263.", hot: true },
          { text: "The government dissolved the Digital Communications Commission, originally established as the Telecom Commission in 1989.", hot: false },
          { text: "Anupriya Patel launched the National Formulary of India 2026 in New Delhi; it is published by the Indian Pharmacopoeia Commission.", hot: false },
          { text: "MY Bharat crossed 3 crore registered youth in September 2026.", hot: false },
          { text: "Deendayal, Jawaharlal Nehru, Paradip and Mundra were notified as mega ports under the Indian Ports Act, 2025.", hot: true },
          { text: "The Make in India initiative completed 12 years on 25 September 2026; India recorded indigenous defence production worth ₹1.78 lakh crore in FY2025-26.", hot: true }
        ]
      },
      {
        id: 'international',
        title: 'International News & Summits',
        emoji: '',
        pages: 'Pages 12–13',
        bgHeader: 'bg-popPink',
        bgTint: 'bg-pink-50/90',
        badgeColor: 'bg-popYellow',
        cartoonTitle: 'Global Stage & Mega Summits!',
        cartoonCaption: '18th BRICS in Delhi, India–NZ 100% Duty-Free FTA, and ByteDance founder hits $105B!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- BRICS Crown Box -->
            <g class="svg-hotspot" onclick="jumpAndSearch('BRICS')">
              <rect x="20" y="18" width="320" height="62" rx="14" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
              <text x="180" y="42" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="15">18th BRICS SUMMIT • NEW DELHI</text>
              <text x="180" y="63" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">140-Point New Delhi Declaration • 2027 Host: CHINA</text>
            </g>

            <!-- 3 Mini Cards -->
            <g class="svg-hotspot" onclick="jumpAndSearch('New Zealand')">
              <rect x="20" y="94" width="100" height="104" rx="12" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="70" cy="116" r="14" fill="#FFE600" stroke="#18181B" stroke-width="1.5"/><text x="70" y="120" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">NZ</text>
              <text x="70" y="144" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">INDIA–NZ FTA</text>
              <text x="70" y="160" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">100% Duty-Free</text>
              <text x="70" y="174" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">20 Oct 2026</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Bank of Japan')">
              <rect x="130" y="94" width="100" height="104" rx="12" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="180" cy="116" r="14" fill="#38BDF8" stroke="#18181B" stroke-width="1.5"/><text x="180" y="120" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">FX</text>
              <text x="180" y="144" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">BoJ Rate 1.25%</text>
              <text x="180" y="160" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Highest since</text>
              <text x="180" y="174" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">1995!</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Zhang Yiming')">
              <rect x="240" y="94" width="100" height="104" rx="12" fill="#C084FC" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="290" cy="116" r="14" fill="#4ADE80" stroke="#18181B" stroke-width="1.5"/><text x="290" y="120" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">IMF</text>
              <text x="290" y="144" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Zhang Yiming</text>
              <text x="290" y="160" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Asia's Richest</text>
              <text x="290" y="174" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">~$105 Billion</text>
            </g>
          </svg>
        `,
        items: [
          { text: "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12–13 September 2026 under the theme \"Building for Resilience, Innovation, Cooperation and Sustainability.\"", hot: true },
          { text: "The New Delhi Declaration 2026, a 45-page document containing 140 points, was unanimously adopted at the 18th BRICS Summit.", hot: true },
          { text: "China will chair BRICS and host the 19th BRICS Summit in 2027.", hot: true },
          { text: "The New Zealand Parliament passed the India-New Zealand Free Trade Agreement Bill by 93 votes to 29; the FTA takes effect on 20 October 2026, with duty-free access on 100% of tariff lines for Indian exports.", hot: true },
          { text: "India, Australia, Japan and the US conducted a Quad tabletop exercise in Tokyo to strengthen the Quad Indo-Pacific Logistics Network.", hot: false },
          { text: "The Bank of Japan raised its benchmark interest rate to 1.25%, the highest level since 1995.", hot: true },
          { text: "Zhang Yiming, founder of ByteDance, became Asia's richest person with an estimated net worth of around $105 billion, according to the Bloomberg Billionaires Index.", hot: true },
          { text: "UNCCD COP17 was held in Ulaanbaatar, Mongolia, under the theme \"Restoring Land. Restoring Hope.\"", hot: true },
          { text: "PM Modi attended the 26th SCO Summit in Bishkek and met Russian President Vladimir Putin on its sidelines.", hot: true },
          { text: "The European Commission proposed restrictions on social media, online games and chatbot access for children below 13.", hot: false },
          { text: "Fiji declared its HIV outbreak a national health crisis amid a sharp increase in infections.", hot: false },
          { text: "The UN General Assembly endorsed the \"Correct the Map\" resolution; the theme of the 81st UNGA is \"Restoring Trust, Managing Transformation.\"", hot: true }
        ]
      },
      {
        id: 'defence',
        title: 'Defence Exercises & Military Tech',
        emoji: '',
        pages: 'Pages 14–15',
        bgHeader: 'bg-popMint',
        bgTint: 'bg-lime-50/90',
        badgeColor: 'bg-popOrange',
        cartoonTitle: 'Jets, Lasers & COBRA Commandos!',
        cartoonCaption: '6 major war games, 30-kW anti-drone laser, Zorawar tanks, & Sanjukta Parashar leads COBRA!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <rect x="20" y="16" width="320" height="28" rx="8" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
            <text x="180" y="35" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13">EXERCISE MATCH-UP BOARD</text>

            <!-- Grid of Exercises -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Veer Guardian')">
              <rect x="20" y="54" width="154" height="44" rx="10" fill="#FFE600" stroke="#18181B" stroke-width="2"/>
              <text x="97" y="73" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Veer Guardian</text>
              <text x="97" y="89" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">India + Japan (Jodhpur)</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Nomadic Elephant')">
              <rect x="186" y="54" width="154" height="44" rx="10" fill="#38BDF8" stroke="#18181B" stroke-width="2"/>
              <text x="263" y="73" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Nomadic Elephant</text>
              <text x="263" y="89" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">India + Mongolia (18th)</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('SLINEX')">
              <rect x="20" y="106" width="154" height="44" rx="10" fill="#FF6B9E" stroke="#18181B" stroke-width="2"/>
              <text x="97" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">SLINEX-26 & VARUNA</text>
              <text x="97" y="141" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Sri Lanka & France</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Yudh Abhyas')">
              <rect x="186" y="106" width="154" height="44" rx="10" fill="#C084FC" stroke="#18181B" stroke-width="2"/>
              <text x="263" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Yudh Abhyas 2026</text>
              <text x="263" y="141" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">India + US (MLIDS Drone)</text>
            </g>

            <!-- Laser & Zorawar Strip -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Zorawar')">
              <rect x="20" y="160" width="320" height="40" rx="10" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
              <text x="180" y="184" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="12">30-kW Laser Weapon •  ₹20K Cr Zorawar Tank (Tata)</text>
            </g>
          </svg>
        `,
        items: [
          { text: "India and Japan held the 14-day bilateral air exercise Veer Guardian 2026 at Air Force Station Jodhpur, with India fielding Su-30 MKI, Rafale and LCA Tejas and Japan fielding F-2A fighters.", hot: true },
          { text: "The 18th edition of Exercise Nomadic Elephant between India and Mongolia began at Pithoragarh, Uttarakhand.", hot: true },
          { text: "The 13th edition of the India-Sri Lanka bilateral maritime exercise SLINEX-26 was held at Visakhapatnam.", hot: false },
          { text: "The 22nd edition of India-US Exercise Yudh Abhyas 2026 used a two-theatre format (Mahajan, Rajasthan and Auli, Uttarakhand) and saw the first Indian deployment of the MLIDS counter-drone system.", hot: true },
          { text: "INS Trishul participated in the India-France naval exercise VARUNA 2026 at Toulon, France.", hot: false },
          { text: "The fourth edition of the India-Malaysia exercise Samudra Laksamana was held at Lumut, with INS Mysore, a Delhi-class guided-missile destroyer, participating.", hot: false },
          { text: "DRDO planned an industry partnership for a 30-kW class directed-energy laser weapon for counter-drone operations.", hot: true },
          { text: "The Defence Acquisition Council (DAC) cleared proposals worth around ₹1.10 lakh crore through Acceptance of Necessity (AoN).", hot: false },
          { text: "Tata emerged as the lowest bidder for the roughly ₹20,000 crore Zorawar light-tank programme; the tank is named after General Zorawar Singh.", hot: true },
          { text: "The Indian Navy commissioned INS Nipun, the second Nistar-class Diving Support Vessel, built by Hindustan Shipyard Limited (HSL).", hot: false },
          { text: "Sanjukta Parashar became the first woman officer to lead CRPF's COBRA force.", hot: true },
          { text: "Tata Boeing Aerospace delivered its 400th Made-in-India Apache fuselage at Hyderabad.", hot: false }
        ]
      },
      {
        id: 'awards',
        title: 'Honours, Awards & Cinema',
        emoji: '',
        pages: 'Pages 16–17',
        bgHeader: 'bg-popYellow',
        bgTint: 'bg-amber-50/90',
        badgeColor: 'bg-popPurple',
        cartoonTitle: 'Trophies, Oscars & Cockroach Milk?!',
        cartoonCaption: 'Ramon Magsaysay 2026, Gondhal at Oscars, Dadasaheb Phalke for Anant Nag & Ig Nobel Chemistry!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Cartoon Trophy -->
            <path d="M55 45 L115 45 L105 95 Q85 115 65 95 Z" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
            <path d="M55 55 Q35 55 38 75 Q42 88 60 85" fill="none" stroke="#18181B" stroke-width="3"/>
            <path d="M115 55 Q135 55 132 75 Q128 88 110 85" fill="none" stroke="#18181B" stroke-width="3"/>
            <rect x="78" y="102" width="14" height="26" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
            <rect x="58" y="128" width="54" height="16" rx="5" fill="#18181B"/>
            <circle cx="85" cy="72" r="14" fill="#FFE600" stroke="#18181B" stroke-width="1.5"/><text x="85" y="76" text-anchor="middle" font-family="Fredoka" font-size="11" font-weight="700">1st</text>
            <text x="85" y="164" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">HALL OF FAME</text>
            <text x="85" y="180" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Sept 2026 Winners</text>

            <!-- Award Pills -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Gondhal')">
              <rect x="148" y="20" width="194" height="36" rx="9" fill="#FF6B9E" stroke="#18181B" stroke-width="2"/>
              <text x="245" y="42" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Oscar Entry: Gondhal</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Ig Nobel')">
              <rect x="148" y="64" width="194" height="36" rx="9" fill="#4ADE80" stroke="#18181B" stroke-width="2"/>
              <text x="245" y="86" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Ig Nobel: inStem (Blr)</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Anant Nag')">
              <rect x="148" y="108" width="194" height="36" rx="9" fill="#38BDF8" stroke="#18181B" stroke-width="2"/>
              <text x="245" y="130" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Phalke Award: Anant Nag</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Miss World')">
              <rect x="148" y="152" width="194" height="36" rx="9" fill="#C084FC" stroke="#18181B" stroke-width="2"/>
              <text x="245" y="174" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">Miss World: Joheirry Mola</text>
            </g>
          </svg>
        `,
        items: [
          { text: "Tommy Koh (Singapore), Runa Khan (Bangladesh) and Bo Kyi (Myanmar) were named Ramon Magsaysay Award 2026 winners on 31 August (award started in 1958).", hot: true },
          { text: "PM Narendra Modi received Uzbekistan's highest honour, the Oliy Darajali Do'stlik Order (Order of Supreme Friendship), in Tashkent on 30 August 2026.", hot: true },
          { text: "At the 36th Ig Nobel Prize ceremony on 3 September 2026, Sanchari Banerjee, Subrahmanyan Ramaswamy and colleagues from inStem, Bengaluru won the Chemistry prize for research on protein crystals in cockroach milk.", hot: true },
          { text: "At the 78th Primetime Emmy Awards: The Pitt won Best Drama Series, Widow's Bay won Best Comedy Series, DTF St Louis won Best Limited or Anthology Series, and Rebel Ridge won Best Television Movie.", hot: true },
          { text: "Nagaland filmmaker Theja Rio's Angh won the Platform Prize at TIFF 2026 and a C$20,000 cash prize, becoming the first film under TIFF's new International Feature Film Oscar pathway.", hot: true },
          { text: "Composer Shantanu Moitra was selected for the National Lata Mangeshkar Award 2026, carrying a ₹5 lakh tax-free cash prize and citation.", hot: true },
          { text: "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions (winner scheduled for 9 November 2026).", hot: false },
          { text: "Joheirry Mola of the Dominican Republic was crowned Miss World 2026, the country's second title after 1982.", hot: false },
          { text: "Veteran Kannada actor Anant Nag was selected for the Dadasaheb Phalke Award 2024.", hot: true },
          { text: "Kishor Makwana was selected for the Dr APJ Abdul Kalam Jan Seva Puraskar, to be presented at the 16th Sansad Ratna Awards.", hot: false },
          { text: "The Marathi thriller Gondhal, directed by Santosh Davakhar, was selected as India's official entry for Best International Feature Film at the 99th Academy Awards.", hot: true },
          { text: "Former Chief Justice of India Dipak Misra received the Kalinga Ratna Award in Cuttack.", hot: false }
        ]
      },
      {
        id: 'books',
        title: 'Books & Authors Corner',
        emoji: '',
        pages: 'Pages 18–19',
        bgHeader: 'bg-popCyan',
        bgTint: 'bg-cyan-50/90',
        badgeColor: 'bg-popPink',
        cartoonTitle: 'Hot Off The Printing Press!',
        cartoonCaption: '9 notable releases & translations including Thirukkural in Russian!',
        svgDiagram: `
          <svg viewBox="0 0 360 210" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="198" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Stack of Cartoon Books -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Modi Katha')">
              <rect x="34" y="142" width="126" height="28" rx="6" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="97" y="160" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">MODI KATHA</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Century of Service')">
              <rect x="28" y="112" width="136" height="28" rx="6" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
              <text x="96" y="130" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">A CENTURY OF SERVICE</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Bhupen Hazarika')">
              <rect x="38" y="82" width="118" height="28" rx="6" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="97" y="100" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">BHUPEN HAZARIKA</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Thirukkural')">
              <rect x="44" y="52" width="106" height="28" rx="6" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
              <text x="97" y="70" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">THIRUKKURAL (RU)</text>
            </g>

            <!-- Right Callout -->
            <rect x="182" y="34" width="154" height="142" rx="14" fill="#FFFDF5" stroke="#18181B" stroke-width="2.5"/>
            <circle cx="259" cy="56" r="14" fill="#38BDF8" stroke="#18181B" stroke-width="1.5"/><text x="259" y="60" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">BOOK</text>
            <text x="259" y="88" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13">9 BOOK LAUNCHES</text>
            <text x="259" y="110" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">• VP C.P. Radhakrishnan</text>
            <text x="259" y="126" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">• Dr. Tamilisai</text>
            <text x="259" y="142" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">• Justice Nagamohan Das</text>
            <text x="259" y="158" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="10">• Russian Thirukkural</text>
          </svg>
        `,
        items: [
          { text: "\"A Century of Service: The RSS in 100 Acts of Seva\" by Dr. Tamilisai Soundararajan was released by Vice-President C. P. Radhakrishnan on 15 September 2026 at Uprashtrapati Bhavan, New Delhi.", hot: true },
          { text: "\"Bhupen Hazarika: Hundred Years of a Wandering Song,\" edited by Ankuran Dutta and Nani Gopal Mahanta, was published by Gauhati University Press.", hot: false },
          { text: "\"Modi Katha\" by Dr. Harish Chandra Burnwal was launched on 17 September 2026 by Union Minister Arjun Ram Meghwal at IGNCA, New Delhi (published by Prabhat Prakashan).", hot: true },
          { text: "\"SAARATHI,\" a business novel by Hirav Shah, was launched in Gujarat on 23 September 2026.", hot: false },
          { text: "\"Memorable Trials, Unforgettable Cases\" by Justice H. N. Nagamohan Das was launched in Kannada and English editions in September 2026.", hot: false },
          { text: "\"Yatra: From Sorrow to Joy\" by Dr. Krishna Avtar was launched by Uttarakhand Governor Lt Gen Gurmit Singh (Retd.) on 14 September 2026.", hot: false },
          { text: "\"Vishwasanchar Hindutva Ka,\" published by Saptahik Vivek, was released by Vice-President C. P. Radhakrishnan at Uprashtrapati Bhavan, New Delhi.", hot: false },
          { text: "\"Life-Changing Maha Mantras: The Art of Living the Gita\" by Sadguru Sakshi Shree was launched on 27 September 2026 at Bharat Mandapam, New Delhi (published by Penguin Ananda).", hot: false },
          { text: "Thirukkural by Thiruvalluvar came into the news in connection with its Russian translation.", hot: true }
        ]
      },
      {
        id: 'sports',
        title: 'Sports Spectacular',
        emoji: '',
        pages: 'Pages 20–21',
        bgHeader: 'bg-popPink',
        bgTint: 'bg-rose-50/90',
        badgeColor: 'bg-popYellow',
        cartoonTitle: 'Medals, Sixes & Standing Ovations!',
        cartoonCaption: '20th Asian Games in Japan, Smriti & Abhishek smash records, & Lionel Messi bids adieu!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Asian Games Banner -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Asian Games')">
              <rect x="20" y="16" width="320" height="44" rx="12" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <text x="180" y="36" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13">20th ASIAN GAMES • AICHI-NAGOYA</text>
              <text x="180" y="52" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="9">Mascot: HONOHON • Flag Bearers: Manu Bhaker & Pawan Sehrawat (503 Athletes)</text>
            </g>

            <!-- Medal Trio -->
            <g class="svg-hotspot" onclick="jumpAndSearch('kabaddi')">
              <circle cx="75" cy="112" r="34" fill="#FFE600" stroke="#18181B" stroke-width="3"/>
              <circle cx="75" cy="102" r="12" fill="#FFE600" stroke="#18181B" stroke-width="1.5"/><text x="75" y="106" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">Gold</text>
              <text x="75" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="9">Kabaddi 37-33</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Mirabai')">
              <circle cx="180" cy="112" r="34" fill="#E2E8F0" stroke="#18181B" stroke-width="3"/>
              <circle cx="180" cy="102" r="12" fill="#E2E8F0" stroke="#18181B" stroke-width="1.5"/><text x="180" y="106" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">Silv</text>
              <text x="180" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="9">Mirabai 198kg</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Sawan Barwal')">
              <circle cx="285" cy="112" r="34" fill="#38BDF8" stroke="#18181B" stroke-width="3"/>
              <circle cx="285" cy="102" r="12" fill="#FED7AA" stroke="#18181B" stroke-width="1.5"/><text x="285" y="106" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">Bron</text>
              <text x="285" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="9">Marathon 44Y!</text>
            </g>

            <!-- Bottom Cricket & Football Strip -->
            <g class="svg-hotspot" onclick="jumpAndSearch('Messi')">
              <rect x="20" y="160" width="320" height="40" rx="10" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <text x="180" y="184" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11"> Smriti #1 • Abhishek 30-ball 100 •  Messi Retires (125 Goals)</text>
            </g>
          </svg>
        `,
        items: [
          { text: "The 20th Asian Games began in Aichi-Nagoya, Japan, on 19 September 2026 (to 4 October); the mascot is Honohon (meaning 'flame'), the opening-ceremony theme is \"Harmonic Heart Beat\" and the slogan is \"Imagine One Asia.\"", hot: true },
          { text: "Manu Bhaker (shooting) and Pawan Sehrawat (kabaddi) carried the Indian flag at the Asian Games opening ceremony, with Pawan replacing Tajinderpal Singh Toor; India sent a 503-member contingent.", hot: true },
          { text: "India won a record eighth Women's Asia Cup title and also completed a golden double at the Junior Asia Cup 2026.", hot: false },
          { text: "India won the Asian Games 2026 women's kabaddi gold (37–33 over Iran), its fourth gold in the event after 2010, 2014 and 2022.", hot: true },
          { text: "Mirabai Chanu won silver in the women's 49 kg weightlifting event at the Asian Games with a combined lift of 198 kg.", hot: true },
          { text: "Sawan Barwal won the Asian Games men's marathon silver in 2:11:37, ending India's 44-year wait for a marathon medal.", hot: true },
          { text: "Elena Rybakina won the US Open 2026 women's singles title.", hot: true },
          { text: "Ganges Grandmasters defeated Alpine APL Pipers 7–5 to win the maiden Global Chess League title.", hot: false },
          { text: "Smriti Mandhana became the highest run-scorer in women's international cricket, surpassing Mithali Raj, and the highest in women's T20Is, surpassing Suzie Bates.", hot: true },
          { text: "Abhishek Sharma smashed a 30-ball T20I century against Afghanistan, a new Indian record.", hot: true },
          { text: "Ishan Kishan scored a record 270 for East Zone in the Duleep Trophy final; Vaibhav Sooryavanshi became the youngest Duleep Trophy half-centurion at 15 years and 157 days.", hot: true },
          { text: "Lionel Messi announced his retirement from international football, ending his Argentina career with 207 appearances and 125 goals.", hot: true },
          { text: "Kimi Antonelli won the Italian Grand Prix after starting 19th.", hot: false },
          { text: "Germany defeated Spain 1–0 to retain the FIH Men's Hockey World Cup and claim a fourth title; India will host the inaugural ICC Women's Champions Trophy on 14–28 February 2027.", hot: true }
        ]
      },
      {
        id: 'travel',
        title: 'Hotel, Travel & Aviation',
        emoji: '',
        pages: 'Pages 22–26',
        bgHeader: 'bg-popPurple',
        bgTint: 'bg-violet-50/90',
        badgeColor: 'bg-popMint',
        cartoonTitle: 'Sky-High Routes & Pink E-Autos!',
        cartoonCaption: 'India hits 31st in WEF Tourism Index, UDAN gets ₹28,840 Cr, & UPI works in Uzbekistan!',
        svgDiagram: `
          <svg viewBox="0 0 360 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="208" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <!-- Cartoon Airplane -->
            <g class="svg-hotspot" onclick="jumpAndSearch('UDAN')">
              <path d="M40 66 L125 56 L160 32 L175 36 L152 60 L215 62 L230 48 L240 52 L228 72 L150 78 L165 100 L150 102 L122 76 L45 78 Z" fill="#38BDF8" stroke="#18181B" stroke-width="2.5"/>
              <rect x="248" y="34" width="94" height="62" rx="12" fill="#FFE600" stroke="#18181B" stroke-width="2.5"/>
              <text x="295" y="58" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="11">UDAN 10-YR</text>
              <text x="295" y="74" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="9">100 Airports</text>
              <text x="295" y="88" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="9">₹28,840 Cr</text>
            </g>

            <!-- 3 Travel Pills -->
            <g class="svg-hotspot" onclick="jumpAndSearch('DURGA')">
              <rect x="20" y="116" width="100" height="84" rx="12" fill="#FF6B9E" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="70" cy="136" r="12" fill="#FFE600" stroke="#18181B" stroke-width="1.5"/><text x="70" y="140" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">UP</text>
              <text x="70" y="162" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">DURGA Pink</text>
              <text x="70" y="176" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">1,300 E-Autos</text>
              <text x="70" y="190" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">in Delhi</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('WEF')">
              <rect x="130" y="116" width="100" height="84" rx="12" fill="#4ADE80" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="180" cy="136" r="12" fill="#38BDF8" stroke="#18181B" stroke-width="1.5"/><text x="180" y="140" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">UK</text>
              <text x="180" y="162" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">WEF Rank 31</text>
              <text x="180" y="176" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Up from 39th!</text>
              <text x="180" y="190" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Kumik Heritage</text>
            </g>

            <g class="svg-hotspot" onclick="jumpAndSearch('Anak Krakatau')">
              <rect x="240" y="116" width="100" height="84" rx="12" fill="#FB923C" stroke="#18181B" stroke-width="2.5"/>
              <circle cx="290" cy="136" r="12" fill="#FB923C" stroke="#18181B" stroke-width="1.5"/><text x="290" y="140" text-anchor="middle" font-family="Fredoka" font-size="10" font-weight="700">KL</text>
              <text x="290" y="162" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="10">Anak Krakatau</text>
              <text x="290" y="176" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">50,000 ft Ash</text>
              <text x="290" y="190" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="700" font-size="9">Sarawak Haze</text>
            </g>
          </svg>
        `,
        items: [
          { text: "[Tourism • National] India Targets 10 Million Medical Value Tourists: Union Commerce & Industry Minister Piyush Goyal announced a target of attracting 10 million international medical value tourists annually at Sanjeevani 2026.", hot: true },
          { text: "[Tourism • National] India Climbs to 31st in WEF Travel & Tourism Development Index 2026: Ranked 31st among 110 economies (up from 39th in 2024), while Japan topped the index.", hot: true },
          { text: "[Tourism • National] Gujarat and the Darjeeling Himalayan Railway were featured in Lonely Planet's Best in Travel 2027.", hot: false },
          { text: "[Tourism • National] India announced the launch of the National Destination Digital Knowledge Grid to provide comprehensive digital info about tourism destinations.", hot: false },
          { text: "[Tourism • National] Kumik in Zanskar became Ladakh's first Heritage Village, while twin flower fields were inaugurated at Choglamsar and Stakna at 10,600 ft across 40 acres.", hot: true },
          { text: "[Tourism • National] Delhi's Chandni Chowk Town Hall will be developed as a Global Heritage Centre.", hot: false },
          { text: "[Tourism • International] UN Tourism World Tourism Barometer (24 Sept 2026): ~690 million international tourists travelled in Jan–June 2026 (+0.4%); Q1 +2%, Q2 -1%; Africa +4%, Europe +3%, Americas +2%; full-year forecast cut to 1–2%.", hot: false },
          { text: "[Tourism • International] World Tourism Day 2026 (27 Sept) hosted in San Salvador & Surf City, El Salvador under theme \"Digital Agenda and Artificial Intelligence to Redesign Tourism.\"", hot: true },
          { text: "[Tourism • International] Japan's foreign arrivals fell 9.6% YoY in August 2026 to 3,098,900; Chinese visitors plunged 59% (~418,000), while South Korea rose 28.7% to a record-for-August 850,500.", hot: false },
          { text: "[Tourism • International] US Hotel Performance in August 2026 (CoStar): Occupancy 66.4% (+0.5%), ADR $161.78 (+1.5%), RevPAR $107.43 (+2.0%), led by San Francisco.", hot: false },
          { text: "[Travel • National] Bharat Taxi expanded to 5 more cities (Lucknow, Gorakhpur, Varanasi, Kanpur, Prayagraj) on a \"Driver is Owner\" zero-commission model.", hot: false },
          { text: "[Travel • National] Delhi's DURGA Scheme brings 1,300 pink electric autos in Phase 1 (1,170 for women and 130 for transgender persons) for green e-auto employment.", hot: true },
          { text: "[Travel • National] Indian travellers can now make UPI payments in Uzbekistan by scanning interoperable UZQR codes (NIPL–NIPC pact).", hot: true },
          { text: "[Travel • National] NHAI will upgrade its 1033 National Highway Helpline with AI, multilingual assistance, location tracking and smart emergency dispatch.", hot: false },
          { text: "[Travel • National] The Bairabi–Sairang railway line in Mizoram completed one year of operations.", hot: false },
          { text: "[Travel • International] EU biometric Entry/Exit System (EES) congestion flexibility expired on 6 Sept 2026; ETIAS travel authorisation is still not in operation.", hot: false },
          { text: "[Travel • International] Indonesia's Mount Anak Krakatau ('Child of Krakatau', emerged 1927) erupted, sending ash to ~50,000 feet.", hot: true },
          { text: "[Travel • International] Malaysia declared an emergency in Serian, Sarawak after the Air Pollution Index hit 519 amid cross-border haze.", hot: false },
          { text: "[Aviation • National] Modified UDAN enters a new 10-year phase to develop 100 new airports and ~200 helipads with an outlay of ₹28,840 crore; VGF support for airlines extended from 3 to 5 years.", hot: true },
          { text: "[Aviation • National] India's domestic air passenger traffic contracted 7.5% YoY in August 2026 (IATA).", hot: false },
          { text: "[Aviation • International] Global air passenger demand (RPK) fell 0.8% YoY in August 2026 as Middle Eastern carriers dropped 14.6% (load factor 85.1%); global air cargo demand rose 4.4%.", hot: false },
          { text: "[Aviation • International] Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor) but cut FY27 forecast to 214M after 400+ flights cancelled due to Mount Etna eruptions.", hot: false },
          { text: "[Aviation • International] Airbus delivered 57 aircraft in August 2026 (475 YTD) vs Boeing's 51 (418 YTD), and booked 67 gross orders vs Boeing's 15.", hot: false },
          { text: "[Aviation • International] Air China resumed daily nonstop Guangzhou–New Delhi flights on 21 September 2026 (suspended since Feb 2020).", hot: true }
        ]
      }
    ];

    // =========================================================================
    // ALL 39 RAPID-FIRE ONE-LINER QUESTIONS & ANSWERS (PAGES 27-30)
    // Includes bonus facts from Q19 & Q20 (Lucknow Swachh Vayu & e-Shram 5 yrs)!
    // =========================================================================;

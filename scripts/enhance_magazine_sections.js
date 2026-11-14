const fs = require('fs');

const magContent = fs.readFileSync('src/data/magazineSections.ts', 'utf8');

// 1. Fix Kabaddi score in SVG and fact text
let updated = magContent.replace('Kabaddi 37-33', 'Kabaddi 37-34');
updated = updated.replace(
  "India won the Asian Games 2026 women's kabaddi gold (37–33 over Iran), its fourth gold in the event after 2010, 2014 and 2022.",
  "India won the Asian Games 2026 women's kabaddi gold (37–34 over Iran), its fourth gold in the event after 2010, 2014 and 2022."
);

// 2. Fix Ryanair forecast explanation
updated = updated.replace(
  "[Aviation • International] Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor) but cut FY27 forecast to 214M after 400+ flights cancelled due to Mount Etna eruptions.",
  "[Aviation • International] Ryanair carried a record 22.2 million passengers in August 2026 (96% load factor). Separately, the airline adjusted its FY27 traffic target from 216m to 214m to mitigate unhedged winter oil exposure; over 400 flights were cancelled in August due to Mount Etna eruptions."
);

// 3. Fix Booker Prize outcome
updated = updated.replace(
  "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions (winner scheduled for 9 November 2026).",
  "The Booker Prize 2026 shortlist of six novels was selected from 163 submissions; M. John Harrison won the prize for 'The End of Everything' on 9 November 2026."
);

// 4. Annotate Sagarmala Blue Bond
updated = updated.replace(
  "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option, a 10-year maturity and AA+ ratings from ICRA and CARE.",
  "Sagarmala Finance Corporation announced India's maiden blue bond of ₹600 crore with a ₹500-crore greenshoe option; the proposed issue was subsequently withdrawn on 28 September 2026 after bids quoted higher coupons than acceptable."
);

fs.writeFileSync('src/data/magazineSections.ts', updated, 'utf8');
console.log('Successfully applied all 4 core factual corrections to src/data/magazineSections.ts');


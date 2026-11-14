# Current Affairs Gazette — Prioritized QA Checklist

**Audit snapshot:** 14 November 2026  
**Live site:** https://current-affairs-self.vercel.app/  
**Repository:** https://github.com/shouri123/Current-Affairs-2026  
**Scope:** September 2026 content represented in `src/data/magazineSections.ts` and `src/data/qaList.ts`, plus the visible revision/diagram copy. This is a remediation checklist based on the audit snapshot, not a claim that every one of the 149 facts has been independently re-verified.

## Status key

- [ ] Not started
- [x] Completed
- **Confirmed error** means a claim in the published copy conflicts with a reliable result or primary source.
- **Source gap** means the claim may be correct, but the project does not provide enough claim-level evidence to verify it quickly.
- **Stale/context update** means the original future-dated announcement may have been accurate when published, but the live wording needs updating after the event.

---

## P0 — Confirmed errors to correct first

These items are confirmed by the audit and should be fixed in the source data and every repeated visual/quiz instance.

- [ ] **Sports — Asian Games women's kabaddi final score**
  - **Published:** India beat Iran 37–33.
  - **Correct:** India beat Iran **37–34** in the final on 26 September 2026.
  - **Files/locations:** `src/data/magazineSections.ts` — Sports section fact; also update the SVG/diagram label that displays `Kabaddi 37-33` and search the repository for all `37–33` / `37-33` variants.
  - **Evidence:** [Pro Kabaddi — India women defend Asian Games kabaddi gold, 37–34](https://www.prokabaddi.com/news/india-women-beat-iran-37-34-kabaddi-gold-asian-games-2026).
  - **Acceptance check:** No visible or source-code instance still says 37–33; the card, infographic and any quiz answer agree.

- [ ] **Travel & Aviation — Ryanair forecast explanation**
  - **Published:** Ryanair carried 22.2 million passengers in August 2026 but cut its FY27 forecast to 214 million *after* more than 400 flights were cancelled due to Mount Etna eruptions. This implies the cancellations caused the forecast reduction.
  - **Correct context:** Ryanair's 2 September 2026 regulatory announcement says the FY27 traffic forecast was reduced from 216 million to 214 million **to reduce exposure to unhedged winter oil**. The same announcement separately says more than 400 August flights were cancelled due to Mount Etna eruptions.
  - **File/location:** `src/data/magazineSections.ts` — Hotel, Travel & Aviation section.
  - **Evidence:** [Ryanair regulatory announcement, 2 September 2026 (RNS)](https://www.lse.co.uk/rns/ryanair8217s-aug-traffic-grows-6-to-222m-a3tigoggkzqxp9y.html).
  - **Acceptance check:** Rewrite as two separate facts/sentences so the cancellations are not presented as the reason for the forecast reduction.

---

## P1 — Stale or incomplete context updates

These are not all false historical claims. Update the present-tense/current-status wording and preserve the original announcement where useful.

- [ ] **Booker Prize — replace scheduled wording with the result**
  - **Published:** The 2026 shortlist was selected from 163 submissions; winner scheduled for 9 November 2026.
  - **Update:** M. John Harrison won the 2026 Booker Prize for *The End of Everything*; the winner was announced on 9 November 2026.
  - **File/location:** `src/data/magazineSections.ts` — Honours, Awards & Cinema.
  - **Evidence:** [Booker Prize — 2026 award page](https://thebookerprizes.com/the-booker-library/prize-years/2026).
  - **Acceptance check:** The card states the winner and announcement date, not a future schedule.

- [ ] **India–New Zealand FTA — revise Q7 to past tense**
  - **Published:** Q7 asks which FTA is “scheduled to take effect” on 20 October 2026.
  - **Update:** Ask which FTA **entered into force** on 20 October 2026; keep the answer as India–New Zealand FTA.
  - **File/location:** `src/data/qaList.ts` — Q7.
  - **Evidence:** [New Zealand Ministry of Foreign Affairs and Trade — FTA entered into force on 20 October 2026](https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement) and [PIB, 19 October 2026](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2325235&lang=1&reg=3).
  - **Acceptance check:** The question uses past tense and the answer/date remain consistent.

- [ ] **Sagarmala Finance Corporation — append the subsequent withdrawal**
  - **Published:** The company announced a proposed ₹600 crore maiden blue bond with a ₹500 crore greenshoe option.
  - **Follow-up to include:** The proposed issue was subsequently reported as withdrawn on 28 September 2026 after bids came in at higher coupon rates than the issuer intended to accept. Do not describe the announced proposal as a completed issuance.
  - **File/location:** `src/data/magazineSections.ts` — Banking & Financial Awareness; `src/data/qaList.ts` — Q17.
  - **Evidence:** [Business Standard — Sagarmala Finance withdraws ₹600 crore blue bond issue](https://www.business-standard.com/companies/news/sagarmala-finance-withdraws-600-crore-blue-bond-issue-on-higher-coupon-126092801263_1.html).
  - **Verification note:** This follow-up was located in reputable financial reporting. Look for a primary issuer/stock-exchange notice before treating the withdrawal detail as fully primary-source verified.
  - **Acceptance check:** Preserve the historical announcement, add the later withdrawal/status, and make clear that the issue was not completed.

- [ ] **Revision-only facts — make their status explicit**
  - **Published:** Q19 (Lucknow / Swachh Vayu Sarvekshan 2026) and Q20 (e-Shram five-year milestone) are described in the source comment as bonus facts, but are not standalone items in the 149-fact main collection.
  - **Action:** Either add each to the relevant main section with its own source, or label the questions as supplementary revision facts. Do not imply every Q&A is directly traceable to a main-page card.
  - **Files:** `src/data/qaList.ts`, `src/data/magazineSections.ts`.
  - **Evidence for Q20:** [PIB — Five Years of e-Shram Portal](https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159705&lang=1&reg=6).
  - **Acceptance check:** Every revision question is linked to a main fact or explicitly marked supplementary, and has a source reference.

---

## P1 — Systemic source-transparency gaps

These are project-wide gaps, not proof that every underlying fact is wrong. The current data model makes source verification difficult because the published fact and Q&A records do not carry source metadata.

- [ ] **Add source metadata to the content model**
  - **Observed:** `SectionItem` in `src/types/index.ts` only contains `text` and `hot`; `QAItem` only contains `id?`, `q` and `a`. The records in `src/data/magazineSections.ts` and `src/data/qaList.ts` consequently have no first-class source URL, issuing authority, publication date or verification status.
  - **Action:** Add a typed source reference (or source array) with at least: `title`, `publisher/authority`, `url`, `publishedAt`, `checkedAt`, and `sourceType` (primary / secondary). Allow multiple references where one sentence contains multiple claims.
  - **Acceptance check:** Each factual item can identify the evidence supporting it; no placeholder or fabricated URL is accepted.

- [ ] **Attach sources to all 149 main facts**
  - Link each factual card to the original release, notification, official results page, regulator, court, institution or primary dataset.
  - Use secondary reporting only where a primary source is unavailable, and label it accordingly.
  - Split compound sentences when one source does not support every clause or figure.
  - **Acceptance check:** 149/149 main facts have at least one working, claim-relevant source or are visibly marked “needs verification”.

- [ ] **Attach sources to all 39 revision questions**
  - Link the answer to the same evidence used by the corresponding fact card.
  - Where a Q&A is supplementary, record that fact and its source explicitly.
  - **Acceptance check:** 39/39 questions have a traceable evidence link and do not contradict the main collection.

- [ ] **Cover diagrams, SVG hotspots and modal copy**
  - Source-bearing cards are not enough if the interactive chart or hotspot repeats a claim without evidence.
  - Audit all hard-coded factual strings in SVG markup, `openDiagramPop(...)` copy, chart labels and tooltips.
  - **Acceptance check:** Repeated values and claims match the sourced fact record; diagrams do not retain stale or contradictory text.

- [ ] **Expose verification status in the UI**
  - Suggested statuses: `verified`, `needs-review`, `outdated`, `disputed`.
  - Show “last checked” dates; distinguish an official announcement from a proposal, approval, commencement, implementation or completed outcome.
  - **Acceptance check:** The “verified” label is only displayed for claims with reviewed evidence.

---

## P2 — Section-by-section source review queue

Complete this after the confirmed corrections and source-model work. A missing source is a review task, not evidence that the claim is false.

- [ ] **Banking & Financial Awareness:** GST collections, employment and LFPR figures, forex reserves, exports/trade deficit, Bankers' Books Evidence Act commencement, UPI Tap & Pay attribution/₹5,000 rule, LIC–ICICI approval, EPFO wage-ceiling decision, blue-bond announcement and US Fed decision. Reconcile the main card and SVG copy for UPI Tap & Pay.
  - Useful official starting points: [NPCI — UPI Tap & Pay](https://www.npci.org.in/product/tapandpay.html); [RBI notifications](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12898).

- [ ] **MoUs & Strategic Partnerships:** India–Netherlands/Kalpasar, India–Uzbekistan uranium, Kishau project, APEDA–Gulfood, ISRO–ESA, India–Australia space partnerships, DRDO–Zero MK India, IIT Madras–UNESCO MGIEP, IITM-C-DOT Samgya–QClairvoyance, Dhruva Space–Safran. Confirm signatories, amount, term, scope and whether each item is an MoU, agreement, contract or announcement.

- [ ] **Important Days & Themes:** Verify every September observance date, official theme, host country and claimed milestone against the responsible UN body, ministry or organising institution.

- [ ] **Appointments & Leadership:** Verify appointment names, exact office titles, appointing authority, effective date and term. Include IBBI, CBSE, ISL, diplomatic and Shri Ram Janmabhoomi Trust entries.

- [ ] **National News & Governance:** Verify the BIS screen-protector standard, Inter-State Council amendment, Digital Communications Commission change, port announcements and other policy/notification claims against Gazette, ministry or regulator documents.

- [ ] **International News & Summits:** Verify BRICS declaration point/page counts, summit outcomes, Quad exercise details, Fiji health-crisis declaration and the “Correct the Map” resolution against the issuing government or institution.

- [ ] **Defence & Military Technology:** Verify laser/DEW plans, Zorawar procurement status, INS Nipun commissioning, Apache fuselage delivery, DAC clearances and exercise details against MoD, PIB, service or manufacturer announcements. Distinguish trial, clearance, order, delivery and induction.

- [ ] **Honours, Awards & Cinema:** Verify award recipients, award year, selection/ceremony dates, prize amounts and film-selection status against the awarding body. Check the Ramon Magsaysay, Ig Nobel, Emmys, TIFF, National Lata Mangeshkar Award, Dadasaheb Phalke and India's Oscar-entry claims.

- [ ] **Books & Authors:** Verify each title, author, publisher, launch/release date and whether an event is an announcement or a completed release.

- [ ] **Sports:** Apart from the kabaddi score correction above, verify retirement/appearance statistics, tournament results, records, medals, rankings and player milestones against the relevant federation, tournament organiser or official scorecard.

- [ ] **Hotel, Travel & Aviation:** Verify Bharat Taxi, DURGA, UPI acceptance abroad, NHAI helpline, Anak Krakatau ash plume, Air China route resumption, IATA figures and every airline forecast/traffic claim against the relevant authority, airline release or industry body.

---

## P2 — Add repeatable QA checks

- [ ] Add a build-time/content validation script that fails if a published factual item has no source reference or an invalid URL.
- [ ] Add a check for duplicate claims and conflicting numbers across cards, diagrams and Q&A answers.
- [ ] Add a freshness review for time-sensitive statements containing terms such as “scheduled”, “upcoming”, “will”, “current”, “latest” and “incumbent”.
- [ ] Maintain an audit log with claim ID, previous text, corrected text, source, reviewer, verification date and status.
- [ ] Update the README's “verified” language only after the source-coverage checklist is complete.

## Definition of done

- [ ] Both confirmed errors are corrected in every occurrence.
- [ ] Stale entries and revision wording reflect the event status as of the latest review date.
- [ ] Every main fact, Q&A answer and diagram-level claim has a working source or a visible review status.
- [ ] No claim is labelled verified solely because it appears in the source content or a secondary summary.
- [ ] The production site is checked after deployment to confirm the published copy matches the reviewed repository.

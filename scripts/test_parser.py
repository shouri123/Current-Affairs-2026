import re
import json

def parse_items_from_text(raw_file):
    with open(raw_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Section markers
    sections = [
        ("banking", "Banking & Financial Awareness", ["Pages 2–3" if "july" in raw_file else "Pages 2–3"]),
        ("mous", "MoU’s Signed", ["Pages 4–5" if "july" in raw_file else "Pages 4–5"]),
        ("days", "Important Days", ["Page 6" if "july" in raw_file else "Page 6"]),
        ("appointments", "Appointments", ["Pages 7–8" if "july" in raw_file else "Page 7"]),
        ("national", "National News", ["Pages 9–10" if "july" in raw_file else "Pages 8–9"]),
        ("international", "International News", ["Pages 11–12" if "july" in raw_file else "Pages 10–11"]),
        ("defence", "Defence News", ["Pages 13–14" if "july" in raw_file else "Page 12"]),
        ("awards", "Honours & Awards", ["Pages 15–16" if "july" in raw_file else "Pages 13–14"]),
        ("books", "Books and Authors", ["Page 17" if "july" in raw_file else "Page 15"]),
        ("sports", "Sports News", ["Pages 18–19" if "july" in raw_file else "Page 16"]),
        ("travel", "Hotel, Travel & Aviation", ["Pages 20–23" if "july" in raw_file else "Pages 17–19"]),
        ("qa", "Important one liner questions", ["Pages 24–27" if "july" in raw_file else "Pages 20–23"])
    ]

    positions = []
    for sid, stitle, pages in sections:
        m = re.search(r'\b' + re.escape(stitle) + r'\b', content, re.IGNORECASE)
        if m:
            positions.append((m.start(), sid, stitle, pages[0]))
        else:
            print(f"Warning: {stitle} not found in {raw_file}")

    positions.sort()

    parsed_sections = {}
    
    for i in range(len(positions)):
        start, sid, stitle, pages = positions[i]
        end = positions[i+1][0] if i+1 < len(positions) else len(content)
        sec_text = content[start:end].strip()

        # Remove the section title itself from the start
        sec_text = sec_text[len(stitle):].strip()

        if sid == "qa":
            # Parse Q&A items: Q1. ... Ans: ...
            # Clean page markers like === PAGE X ===
            clean_text = re.sub(r'=== PAGE \d+ ===', '', sec_text)
            q_pattern = re.compile(r'Q(\d+)\.\s*(.*?)\s*Ans:\s*(.*?)(?=(?:Q\d+\.|$))', re.DOTALL)
            matches = q_pattern.findall(clean_text)
            qa_items = []
            for q_num, question, answer in matches:
                q_clean = ' '.join(question.split())
                a_clean = ' '.join(answer.split())
                qa_items.append({
                    "id": f"q-{q_num}",
                    "qNumber": int(q_num),
                    "question": q_clean,
                    "answer": a_clean
                })
            parsed_sections[sid] = qa_items
            print(f"{raw_file} - QA: parsed {len(qa_items)} items")

        elif sid == "days":
            # Days are bulleted by date: e.g. "1 July — ...", "11 July — ..."
            clean_text = re.sub(r'=== PAGE \d+ ===', '', sec_text)
            # Find lines starting with date pattern: e.g. (\d+(?:-\d+)?\s+[A-Za-z]+)\s*[—–-]\s*
            day_matches = re.split(r'\n(?=\d+(?:-\d+)?\s+(?:July|August)\b|\d+\s+(?:July|August)\b)', clean_text)
            day_items = []
            for item_text in day_matches:
                t = ' '.join(item_text.split()).strip()
                if t and any(month in t for month in ['July', 'August']):
                    day_items.append(t)
            parsed_sections[sid] = day_items
            print(f"{raw_file} - Days: parsed {len(day_items)} items")

        elif sid == "travel":
            # Travel has subheadings: TOURISM & HOSPITALITY, TRAVEL, AVIATION, etc.
            clean_text = re.sub(r'=== PAGE \d+ ===', '', sec_text)
            # Split numbered items or sub-blocks
            # In travel, items are like: "1. Ladakh Approves...", "2. ...", "1. Tewolde Gebremariam..."
            lines = clean_text.split('\n')
            items = []
            curr_item = []
            curr_cat = "Tourism & Travel"
            for line in lines:
                l = line.strip()
                if not l: continue
                if l in ["TOURISM & HOSPITALITY", "NATIONAL", "INTERNATIONAL", "TRAVEL", "AVIATION"]:
                    curr_cat = l
                    continue
                # Check if starts with a number like "1. ", "2. "
                if re.match(r'^\d+\.\s+', l):
                    if curr_item:
                        items.append((' '.join(curr_item)).strip())
                        curr_item = []
                    curr_item.append(l)
                else:
                    if curr_item:
                        curr_item.append(l)
            if curr_item:
                items.append((' '.join(curr_item)).strip())
            parsed_sections[sid] = items
            print(f"{raw_file} - Travel: parsed {len(items)} items")

        else:
            # Standard numbered items 1. ... 2. ...
            clean_text = re.sub(r'=== PAGE \d+ ===', '', sec_text)
            items = []
            curr = []
            for line in clean_text.split('\n'):
                l = line.strip()
                if not l: continue
                if re.match(r'^\d+\.\s+', l):
                    if curr:
                        items.append(' '.join(curr).strip())
                        curr = []
                    curr.append(l)
                else:
                    if curr:
                        curr.append(l)
            if curr:
                items.append(' '.join(curr).strip())
            parsed_sections[sid] = items
            print(f"{raw_file} - {sid}: parsed {len(items)} items")

    return parsed_sections

july_parsed = parse_items_from_text('scripts/july_2026_raw.txt')
august_parsed = parse_items_from_text('scripts/august_2026_raw.txt')


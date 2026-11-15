import re
import json

def inspect_structure(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    section_titles = [
        ("banking", "Banking & Financial Awareness"),
        ("mous", "MoU’s Signed"),
        ("days", "Important Days"),
        ("appointments", "Appointments"),
        ("national", "National News"),
        ("international", "International News"),
        ("defence", "Defence News"),
        ("awards", "Honours & Awards"),
        ("books", "Books and Authors"),
        ("sports", "Sports News"),
        ("travel", "Hotel, Travel & Aviation"),
        ("qa", "Important one liner questions")
    ]
    
    print(f"\n==================== {file_path} ====================")
    
    # Locate positions
    positions = []
    for sid, stitle in section_titles:
        m = re.search(re.escape(stitle), content, re.IGNORECASE)
        if m:
            positions.append((m.start(), sid, stitle))
        else:
            print(f"NOT FOUND: {stitle}")
            
    positions.sort()
    
    for i in range(len(positions)):
        start_pos, sid, stitle = positions[i]
        end_pos = positions[i+1][0] if i + 1 < len(positions) else len(content)
        sec_text = content[start_pos:end_pos].strip()
        
        # Count numbered items: e.g. "1.", "2.", "3."
        numbered = re.findall(r'\n\s*(\d+)\.\s+', sec_text)
        q_numbered = re.findall(r'\bQ(\d+)\.', sec_text)
        
        # Also check pages mentioned
        pages = re.findall(r'=== PAGE (\d+) ===', sec_text)
        
        print(f"[{sid}] {stitle}:")
        print(f"   Pages in raw text: {pages}")
        if q_numbered:
            print(f"   Q items: {len(q_numbered)} (Max Q: {q_numbered[-1] if q_numbered else 0})")
        else:
            print(f"   Numbered items: {len(numbered)} (Max item: {numbered[-1] if numbered else 0})")
        # Print first 200 chars after header
        first_lines = sec_text.split('\n')[1:4]
        print(f"   Sample: {' // '.join(first_lines)}")

inspect_structure('scripts/july_2026_raw.txt')
inspect_structure('scripts/august_2026_raw.txt')


import re

def parse_magazine(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split by pages
    pages = text.split('=== PAGE ')
    
    sections = [
        "Banking & Financial Awareness",
        "MoU’s Signed",
        "Important Days",
        "Appointments",
        "National News",
        "International News",
        "Defence News",
        "Honours & Awards",
        "Books and Authors",
        "Sports News",
        "Hotel, Travel & Aviation",
        "Important one liner questions"
    ]
    
    print(f"Analyzing {file_path}:")
    
    # Let's find occurrences of section headers
    for sec in sections:
        matches = [m.start() for m in re.finditer(re.escape(sec), text, re.IGNORECASE)]
        print(f"  Section '{sec}': found {len(matches)} times")

parse_magazine('scripts/july_2026_raw.txt')
parse_magazine('scripts/august_2026_raw.txt')


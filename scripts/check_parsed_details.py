import json
from test_parser import parse_items_from_text

july = parse_items_from_text('scripts/july_2026_raw.txt')
august = parse_items_from_text('scripts/august_2026_raw.txt')

print("--- JULY DAYS ---")
for i, d in enumerate(july['days']):
    print(f"{i+1}. {d[:80]}...")

print("\n--- AUGUST DAYS ---")
for i, d in enumerate(august['days']):
    print(f"{i+1}. {d[:80]}...")

print("\n--- JULY TRAVEL SAMPLES ---")
for i, t in enumerate(july['travel'][:5]):
    print(f"{i+1}. {t[:80]}...")

print("\n--- AUGUST TRAVEL SAMPLES ---")
for i, t in enumerate(august['travel'][:5]):
    print(f"{i+1}. {t[:80]}...")

print("\n--- JULY QA SAMPLES ---")
for i, q in enumerate(july['qa'][:3]):
    print(f"Q{q['qNumber']}: {q['question']} -> {q['answer']}")

print("\n--- AUGUST QA SAMPLES ---")
for i, q in enumerate(august['qa'][:3]):
    print(f"Q{q['qNumber']}: {q['question']} -> {q['answer']}")


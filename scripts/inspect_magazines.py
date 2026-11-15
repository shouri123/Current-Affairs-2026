import pypdf
import json
import re

def analyze_pdf(name, path):
    reader = pypdf.PdfReader(path)
    print(f"******************** {name} ********************")
    print(f"Pages: {len(reader.pages)}")
    
    sections = []
    current_section = None
    
    for i, page in enumerate(reader.pages):
        pno = i + 1
        text = page.extract_text() or ""
        lines = [l.strip() for l in text.split("\n") if l.strip()]
        
        # print first few lines of each page
        header = " // ".join(lines[:3]) if lines else "EMPTY"
        print(f"Page {pno:02d}: {header}")

analyze_pdf('JULY 2026', r'c:\Users\PC\Downloads\Current_Affairs_Magazine_JULY_2026.pdf')
analyze_pdf('AUGUST 2026', r'c:\Users\PC\Downloads\Current_Affairs_Magazine_AUGUST_2026.pdf')


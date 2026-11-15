import json
import re

def escape_js(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

def make_svg(title, banner_color, hotspots):
    # hotspots: list of (x, y, w, h, fill, label1, label2, pop_title, pop_body, pop_tip)
    svg_hotspots = []
    for (x, y, w, h, fill, l1, l2, p_title, p_body, p_tip) in hotspots:
        p_title_esc = escape_js(p_title)
        p_body_esc = escape_js(p_body)
        p_tip_esc = escape_js(p_tip)
        svg_hotspots.append(f"""
            <g class="svg-hotspot" onclick="openDiagramPop('{p_title_esc}', '{p_body_esc}', '{p_tip_esc}')">
              <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{fill}" stroke="#18181B" stroke-width="2.5"/>
              <text x="{x + w//2}" y="{y + h//2 - 2}" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="12" fill="#18181B">{l1}</text>
              <text x="{x + w//2}" y="{y + h//2 + 14}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="9" fill="#18181B">{l2}</text>
            </g>""")
        
    hotspots_str = "\n".join(svg_hotspots)
    title_esc = escape_js(title)
    return f"""<svg viewBox="0 0 360 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="348" height="218" rx="18" fill="#FFF" stroke="#18181B" stroke-width="3"/>
            <rect x="20" y="16" width="320" height="28" rx="8" fill="{banner_color}" stroke="#18181B" stroke-width="2.5"/>
            <text x="180" y="35" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="12" fill="#18181B">{title_esc} (TAP BOXES!)</text>
            {hotspots_str}
          </svg>"""

print("SVG generator template ready.")


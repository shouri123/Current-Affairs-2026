"use client";

import React, { useRef, useEffect } from "react";
import { DiagramHotspot } from "@/types";

interface SvgDiagramProps {
  svgContent: string;
  onHotspotClick: (hotspot: DiagramHotspot) => void;
}

export function SvgDiagram({ svgContent, onHotspotClick }: SvgDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Listen for clicks inside SVG
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".svg-hotspot");
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      const onclickAttr = target.getAttribute("onclick");
      if (onclickAttr && onclickAttr.includes("openDiagramPop")) {
        // Parse arguments from openDiagramPop('Title', 'Body', 'Tip')
        const match = onclickAttr.match(/openDiagramPop\(\s*(['"])(.*?)\1\s*,\s*(['"])(.*?)\3\s*,\s*(['"])(.*?)\5\s*\)/);
        if (match) {
          const title = match[2].replace(/\\'/g, "'");
          const body = match[4].replace(/\\'/g, "'");
          const tip = match[6].replace(/\\'/g, "'");
          onHotspotClick({ title, body, tip });
          return;
        }
      }

      // Fallback: check data attributes
      const title = target.getAttribute("data-title") || "Fact Spotlight";
      const body = target.getAttribute("data-body") || "Interactive point from diagram.";
      const tip = target.getAttribute("data-tip") || "Memory Hook!";
      onHotspotClick({ title, body, tip });
    };

    container.addEventListener("click", handleClick);
    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [onHotspotClick]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-lg bg-white border border-ink/15 p-2"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}


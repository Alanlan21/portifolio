"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Returns the ID of the section currently most visible in the viewport.
 * Only active when on the home page ("/"). Returns null on other routes.
 */
export function useActiveSection(): string | null {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // Map of sectionId → intersectionRatio, updated by the observer callbacks
  const ratioMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (sections.length === 0) return;

    function pickMostVisible() {
      let bestId: string | null = null;
      let bestRatio = -1;
      ratioMap.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId !== null) {
        setActiveSection(bestId);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.current.set(entry.target.id, entry.intersectionRatio);
        });
        pickMostVisible();
      },
      {
        threshold: [0, 0.1, 0.25, 0.5],
        rootMargin: "-56px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return activeSection;
}

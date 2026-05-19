"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Document {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> };
  }
}

export function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("#") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        target.getAttribute("download") !== null ||
        target.getAttribute("target") === "_blank"
      ) return;

      if (!document.startViewTransition) return;

      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href);
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return null;
}

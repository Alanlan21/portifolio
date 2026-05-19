"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TextScramble({ text, className, delay = 0, speed = 30 }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;

      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += 0.5;
        if (iteration >= text.length) clearInterval(interval);
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return <span className={cn(className)}>{display}</span>;
}

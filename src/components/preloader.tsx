"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
const TEXT = "alan.dev";
const SPEED = 38;
const SCRAMBLE_DELAY = 80;
const EXIT_AT = 1700;
const REMOVE_AT = 2250;

export function Preloader() {
  const [display, setDisplay] = useState(() =>
    TEXT.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
  );
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        TEXT.split("").map((char, i) => {
          if (i < iteration) return TEXT[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      iteration += 0.5;
      if (iteration >= TEXT.length) clearInterval(interval);
    }, SPEED);

    const exitTimer = setTimeout(() => setExiting(true), EXIT_AT);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, REMOVE_AT);

    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={cn("preloader-overlay", exiting && "preloader-exit")} aria-hidden="true">
      <div className="preloader-content">
        <span className="preloader-prompt">$</span>
        <span className="preloader-name">{display}</span>
        <span className="preloader-cursor" />
      </div>
      <div className="preloader-bar" />
    </div>
  );
}

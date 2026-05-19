"use client";

import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

const TRANSITION_TRACK = "border-color 0.3s ease, box-shadow 0.3s ease";
const TRANSITION_RETURN =
  "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease";

export function GlowCard({ children, className, tilt = true }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.background = `radial-gradient(250px circle at ${x}px ${y}px, var(--card-glow-color), transparent 70%)`;
    glow.style.opacity = "1";

    if (tilt) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      el.style.transition = TRANSITION_TRACK;
      el.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) scale(1.015)`;
    }
  };

  const handleMouseLeave = () => {
    const glow = glowRef.current;
    const el = ref.current;
    if (glow) glow.style.opacity = "0";
    if (el && tilt) {
      el.style.transition = TRANSITION_RETURN;
      el.style.transform = "";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{ willChange: "transform" }}
    >
      <div ref={glowRef} aria-hidden="true" className="glow-card-inner" />
      {children}
    </div>
  );
}

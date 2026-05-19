"use client";

import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
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
  };

  const handleMouseLeave = () => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="glow-card-inner"
      />
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Check, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ThemeOption = {
  id: string;
  label: string;
  /** cor de fundo do tema (swatch externo) */
  bg: string;
  /** cor de marca/accent do tema (ponto interno) */
  accent: string;
};

// Ordem do menu = ordem de afinidade (cafés primeiro).
const THEMES: ThemeOption[] = [
  { id: "coffee", label: "Coffee", bg: "#292423", accent: "#f09177" },
  {
    id: "chocolate-espresso",
    label: "Chocolate Espresso",
    bg: "#2e2424",
    accent: "#f69c95",
  },
  { id: "black-gold", label: "Black & Gold", bg: "#111418", accent: "#e3a52a" },
  { id: "cyberpunk", label: "Cyberpunk", bg: "#0b0b1a", accent: "#f700c0" },
  { id: "material-dark", label: "Material Dark", bg: "#121212", accent: "#bb86fc" },
  { id: "cute-pink", label: "Cute Pink", bg: "#fbeef4", accent: "#e8337e" },
  { id: "dark", label: "Dark", bg: "#171717", accent: "#34d399" },
  { id: "light", label: "Solarized Light", bg: "#fdf6e3", accent: "#268bd2" },
];

function Swatch({ bg, accent }: { bg: string; accent: string }) {
  return (
    <span
      className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ring-1 ring-black/20"
      style={{ background: bg }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: accent }}
      />
    </span>
  );
}

export function ThemePicker({ side = "top" }: { side?: "top" | "bottom" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Fecha ao clicar fora ou pressionar Esc.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div ref={rootRef} className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Escolher tema"
      >
        {mounted ? (
          <Palette className="h-4 w-4" />
        ) : (
          <span className="h-4 w-4" aria-hidden />
        )}
      </Button>

      {mounted && open && (
        <div
          role="menu"
          className={cn(
            "absolute right-0 z-50 w-52 overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-150",
            side === "top"
              ? "bottom-full mb-2 origin-bottom-right"
              : "top-full mt-2 origin-top-right",
          )}
        >
          <p className="px-2.5 pt-1 pb-2 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            <span className="text-[color:var(--brand)]">~/</span>themes
          </p>
          {THEMES.map((t) => {
            const isActive = t.id === active.id;
            return (
              <button
                key={t.id}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                )}
              >
                <Swatch bg={t.bg} accent={t.accent} />
                <span className="flex-1 text-left">{t.label}</span>
                {isActive && (
                  <Check className="h-3.5 w-3.5 text-[color:var(--brand)]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

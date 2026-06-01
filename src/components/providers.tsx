"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="e-ink"
        themes={[
          "coffee",
          "chocolate-espresso",
          "black-gold",
          "cyberpunk",
          "material-dark",
          "cute-pink",
          "pink-cat-boo",
          "doki-mai",
          "dark",
          "light",
          "fluffy",
          "e-ink",
          "e-ink-dark",
        ]}
        enableSystem={false}
      >
        <TooltipProvider delay={0}>{children}</TooltipProvider>
      </NextThemesProvider>
    </LanguageProvider>
  );
}

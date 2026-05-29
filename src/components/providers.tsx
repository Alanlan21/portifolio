"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="coffee"
        themes={[
          "coffee",
          "chocolate-espresso",
          "black-gold",
          "cyberpunk",
          "material-dark",
          "cute-pink",
          "pink-cat-boo",
          "dark",
          "light",
        ]}
        enableSystem={false}
      >
        <TooltipProvider delay={0}>{children}</TooltipProvider>
      </NextThemesProvider>
    </LanguageProvider>
  );
}

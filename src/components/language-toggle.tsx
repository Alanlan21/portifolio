"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="font-mono text-xs h-7 px-2 text-muted-foreground hover:text-foreground"
      title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {lang === "pt" ? "EN" : "PT"}
    </Button>
  );
}

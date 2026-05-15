"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";

interface LocaleContentProps {
  pt: ReactNode;
  en: ReactNode;
}

export function LocaleContent({ pt, en }: LocaleContentProps) {
  const { lang } = useLanguage();
  return <>{lang === "en" ? en : pt}</>;
}

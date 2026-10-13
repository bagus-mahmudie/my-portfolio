"use client";

import { Globe } from "lucide-react";

interface LanguageToggleProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  return (
    <button type="button" onClick={() => setLang(lang === "id" ? "en" : "id")} className="language-toggle" aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}>
      <Globe size={13} aria-hidden="true" /><span>{lang.toUpperCase()}</span>
    </button>
  );
}

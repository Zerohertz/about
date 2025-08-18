import { Language } from "@/utils/GlobalLanguage";

export interface MultiLanguageText {
  ko: string;
  en: string;
}

export function includes(text: string | MultiLanguageText, searchString: string, language: Language = "en"): boolean {
  const str = typeof text === "string" ? text : text[language];
  return str.includes(searchString);
}

export function getLocalizedText(text: string | MultiLanguageText, language: Language = "en"): string {
  if (typeof text === "string") {
    return text;
  }
  return text[language];
}

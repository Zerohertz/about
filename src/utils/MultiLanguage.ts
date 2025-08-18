import { Language, MultiLanguageText } from "@/types/language";

// Re-export for backward compatibility
export type { Language, MultiLanguageText };

export function includes(text: string | MultiLanguageText, searchString: string, language: Language = "en"): boolean {
  const str = typeof text === "string" ? text : text[language] || text.en || "";
  return str.includes(searchString);
}

export function getLocalizedText(text: string | MultiLanguageText, language: Language = "en"): string {
  if (typeof text === "string") {
    return text;
  }
  // Fallback to English if requested language is not available
  return text[language] || text.en || "";
}

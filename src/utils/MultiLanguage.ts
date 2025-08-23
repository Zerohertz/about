import { Language, MultiLanguageText } from "@/components/default/Language";

export const includes = (
  text: string | MultiLanguageText,
  searchString: string,
  language: Language = "en",
): boolean => {
  const str = typeof text === "string" ? text : text[language] || text.en || "";
  return str.includes(searchString);
};

export const getLocalizedText = (text: string | MultiLanguageText, language: Language = "en"): string => {
  if (typeof text === "string") {
    return text;
  }
  // Fallback to English if requested language is not available
  return text[language] || text.en || "";
};

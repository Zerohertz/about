export type Language = "ko" | "en";

export interface MultiLanguageText {
  ko: string;
  en: string;
}

export interface MultiLanguageArray {
  ko: string[];
  en: string[];
}

export function includes(text: string | MultiLanguageText, searchString: string, language: Language = "en"): boolean {
  const str = typeof text === "string" ? text : text[language];
  return str.includes(searchString);
}

export function getLocalizedText(text: string | MultiLanguageText, language: Language): string {
  if (typeof text === "string") {
    return text;
  }
  return text[language];
}

export function getLocalizedArray(array: string[] | MultiLanguageArray, language: Language): string[] {
  if (Array.isArray(array)) {
    return array;
  }
  return array[language];
}

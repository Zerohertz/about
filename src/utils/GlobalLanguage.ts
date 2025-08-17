export type Language = "ko" | "en";

declare global {
  interface Window {
    currentLanguage?: Language;
    isLanguageChanging?: boolean;
  }
}

export function getCurrentLanguage(): Language {
  if (typeof window !== "undefined") {
    return window.currentLanguage || "en";
  }
  return "en";
}

export function setCurrentLanguage(language: Language): void {
  if (typeof window !== "undefined") {
    window.currentLanguage = language;
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
  }
}

export function setLanguageChanging(isChanging: boolean): void {
  if (typeof window !== "undefined") {
    window.isLanguageChanging = isChanging;
  }
}

export function isLanguageChanging(): boolean {
  if (typeof window !== "undefined") {
    return window.isLanguageChanging || false;
  }
  return false;
}

export function toggleLanguage(): void {
  const current = getCurrentLanguage();
  setCurrentLanguage(current === "en" ? "ko" : "en");
}

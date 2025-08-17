export type Language = "ko" | "en";

declare global {
  interface Window {
    currentLanguage?: Language;
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
    console.log("Setting language to:", language);
    window.currentLanguage = language;
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
  }
}

export function toggleLanguage(): void {
  const current = getCurrentLanguage();
  setCurrentLanguage(current === "en" ? "ko" : "en");
}

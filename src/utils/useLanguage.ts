import { useEffect, useState } from "react";

import { getCurrentLanguage, Language } from "@/utils/GlobalLanguage";

export function useLanguage(initialLanguage?: Language) {
  const [language, setLanguage] = useState<Language>(initialLanguage || "ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const currentLang = getCurrentLanguage();
      setLanguage(currentLang);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, [mounted]);

  return { language, mounted };
}

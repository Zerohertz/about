import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Language } from "@/utils/GlobalLanguage";

export function useLanguage(initialLanguage?: Language) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>(initialLanguage || "en");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // URL에서 언어 감지
    const lang = router.query.lang as Language;
    if (lang && (lang === "ko" || lang === "en")) {
      setLanguage(lang);
    } else if (initialLanguage) {
      setLanguage(initialLanguage);
    }
  }, [mounted, router.query.lang, initialLanguage]);

  return { language, mounted };
}

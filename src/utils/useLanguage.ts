import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Language, setCurrentLanguage } from "@/utils/GlobalLanguage";

export function useLanguage(initialLanguage?: Language) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [language, setLanguage] = useState<Language>(initialLanguage || "en");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // 언어 변경 이벤트 리스너 설정
    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    // 클라이언트에서만 실행되는 언어 동기화
    let targetLanguage: Language;
    const currentPath = window.location.pathname;

    if (router.pathname === "/[lang]" && router.query.lang === "ko") {
      targetLanguage = "ko";
    } else if (currentPath === "/ko" || currentPath === "/ko/") {
      targetLanguage = "ko";
    } else {
      targetLanguage = "en";
    }

    if (language !== targetLanguage) {
      setLanguage(targetLanguage);
      setCurrentLanguage(targetLanguage);
    }
  }, [mounted, router.pathname, router.query.lang, language]);

  return { language, mounted };
}

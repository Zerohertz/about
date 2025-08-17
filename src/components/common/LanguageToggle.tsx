import { useCallback, useEffect } from "react";
import { Button } from "reactstrap";

import { useRouter } from "next/router";

import { Language, setCurrentLanguage } from "@/utils/GlobalLanguage";
import { useLanguage } from "@/utils/useLanguage";

function LanguageToggle() {
  const router = useRouter();
  const { language, mounted } = useLanguage();

  useEffect(() => {
    if (!mounted) return;

    let targetLanguage: Language;

    if (router.pathname === "/[lang]" && typeof router.query.lang === "string" && router.query.lang === "ko") {
      targetLanguage = "ko";
    } else {
      targetLanguage = "en";
    }

    // Only update language if it's actually different to avoid unnecessary calls
    if (language !== targetLanguage) {
      setCurrentLanguage(targetLanguage);
    }
  }, [mounted, router.pathname, router.query.lang, language]);

  const handleLanguageToggle = useCallback(async () => {
    const newLanguage: Language = language === "en" ? "ko" : "en";
    const targetPath = newLanguage === "en" ? "/" : "/ko";

    // Use router.push for proper Next.js navigation
    await router.push(targetPath, undefined, { scroll: false });
  }, [language, router]);

  return (
    <Button size="sm" onClick={handleLanguageToggle} className="language-toggle">
      {language === "en" ? "KOR" : "ENG"}
    </Button>
  );
}

export default LanguageToggle;

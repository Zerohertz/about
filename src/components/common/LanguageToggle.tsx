import { useEffect } from "react";
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

    if (router.pathname === "/[lang]" && router.query.lang === "ko") {
      targetLanguage = "ko";
    } else {
      targetLanguage = "en";
    }

    if (language !== targetLanguage) {
      setCurrentLanguage(targetLanguage);
    }
  }, [mounted, router.pathname, router.query, language]);

  const handleLanguageToggle = () => {
    const newLanguage: Language = language === "en" ? "ko" : "en";
    setCurrentLanguage(newLanguage);

    // Calculate current scroll percentage
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = documentHeight > 0 ? scrollTop / documentHeight : 0;

    const targetPath = newLanguage === "en" ? "/" : "/ko";

    router.push(targetPath, undefined, { scroll: false }).then(() => {
      // Restore scroll position based on percentage
      setTimeout(() => {
        const newDocumentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollTop = newDocumentHeight * scrollPercent;
        window.scrollTo({ top: newScrollTop, behavior: "smooth" });
      }, 100);
    });
  };

  return (
    <Button size="sm" onClick={handleLanguageToggle} className="language-toggle">
      {language === "en" ? "KOR" : "ENG"}
    </Button>
  );
}

export default LanguageToggle;

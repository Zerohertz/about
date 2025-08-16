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

    if (newLanguage === "en") {
      router.push("/", undefined, { scroll: false });
    } else {
      router.push("/ko", undefined, { scroll: false });
    }
  };

  return (
    <Button size="sm" onClick={handleLanguageToggle} className="language-toggle">
      {language === "en" ? "KOR" : "ENG"}
    </Button>
  );
}

export default LanguageToggle;

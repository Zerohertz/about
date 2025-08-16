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

    if (router.pathname === "/[lang]" && router.query.lang === "en") {
      targetLanguage = "en";
    } else {
      targetLanguage = "ko";
    }

    if (language !== targetLanguage) {
      setCurrentLanguage(targetLanguage);
    }
  }, [mounted, router.pathname, router.query, language]);

  const handleLanguageToggle = () => {
    const newLanguage: Language = language === "ko" ? "en" : "ko";
    setCurrentLanguage(newLanguage);

    if (newLanguage === "ko") {
      router.push("/", undefined, { scroll: false });
    } else {
      router.push("/en", undefined, { scroll: false });
    }
  };

  return (
    <Button size="sm" onClick={handleLanguageToggle} className="language-toggle">
      {language === "ko" ? "ENG" : "KOR"}
    </Button>
  );
}

export default LanguageToggle;

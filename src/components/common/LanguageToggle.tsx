import { useCallback } from "react";
import { Button } from "reactstrap";

import { useRouter } from "next/router";

import { Language } from "@/utils/GlobalLanguage";
import { useLanguage } from "@/utils/useLanguage";

function LanguageToggle() {
  const { language } = useLanguage();
  const router = useRouter();

  const handleLanguageToggle = useCallback(() => {
    const newLanguage: Language = language === "en" ? "ko" : "en";
    const targetPath = `/${newLanguage}`;

    // Next.js router를 사용한 부드러운 전환
    router.push(targetPath);
  }, [language, router]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleLanguageToggle();
      }
    },
    [handleLanguageToggle],
  );

  return (
    <Button
      size="sm"
      onClick={handleLanguageToggle}
      onKeyDown={handleKeyDown}
      className="language-toggle"
      aria-label={`Switch to ${language === "en" ? "Korean" : "English"} language`}
      title={`Switch to ${language === "en" ? "Korean" : "English"}`}
    >
      {language === "en" ? "KOR" : "ENG"}
    </Button>
  );
}

export default LanguageToggle;

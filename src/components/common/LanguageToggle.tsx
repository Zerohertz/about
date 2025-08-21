import { useCallback } from "react";
import { Button } from "reactstrap";

import { useRouter } from "next/router";

import { saveScrollPosition } from "@/utils/scrollUtils";
import { useLanguage } from "@/utils/useLanguage";

import { Language } from "@/components/default/Language";

function LanguageToggle() {
  const { language } = useLanguage();
  const router = useRouter();

  const handleLanguageToggle = useCallback(() => {
    const newLanguage: Language = language === "en" ? "ko" : "en";
    const targetPath = `/${newLanguage}`;

    // 현재 스크롤 위치를 백분율로 저장
    saveScrollPosition("language-switch");

    // 스크롤 위치 유지하면서 언어 전환
    router.push(targetPath, undefined, { scroll: false });
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

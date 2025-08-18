import { useCallback } from "react";
import { Button } from "reactstrap";

import { Language, setCurrentLanguage } from "@/utils/GlobalLanguage";
import { useLanguage } from "@/utils/useLanguage";

function LanguageToggle() {
  const { language } = useLanguage();

  const handleLanguageToggle = useCallback(() => {
    const newLanguage: Language = language === "en" ? "ko" : "en";
    const targetPath = newLanguage === "en" ? "/" : "/ko";

    // 직접 언어 상태 변경 (라우팅 없이)
    setCurrentLanguage(newLanguage);

    // 브라우저 히스토리만 업데이트 (페이지 리로드 없음)
    window.history.pushState(null, "", targetPath);
  }, [language]);

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

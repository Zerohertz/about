import { useEffect, useState } from "react";
import { Button } from "reactstrap";

import { getCurrentLanguage, Language, toggleLanguage } from "@/utils/GlobalLanguage";

function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getCurrentLanguage());

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <Button size="sm" onClick={toggleLanguage} className="language-toggle">
      {language === "ko" ? "ENG" : "KOR"}
    </Button>
  );
}

export default LanguageToggle;

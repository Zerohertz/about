import { useEffect } from "react";

import { getCurrentLanguage, setCurrentLanguage } from "@/utils/GlobalLanguage";

import About from "@/container/About";

function HomePage() {
  useEffect(() => {
    const currentLang = getCurrentLanguage();
    if (currentLang !== "ko") {
      setCurrentLanguage("ko");
    }
  }, []);

  return <About />;
}

export default HomePage;

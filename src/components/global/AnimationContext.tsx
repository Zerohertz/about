import { createContext, useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";

import { useLanguage } from "@/utils/useLanguage";

import { ANIMATION_DELAYS } from "@/constants";

interface AnimationContextType {
  animationKey: number;
  getAnimationClass: (staggerIndex: number) => string;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, mounted } = useLanguage();
  const [animationKey, setAnimationKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    setShouldAnimate(false);
    setAnimationKey((prev) => prev + 1);

    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, ANIMATION_DELAYS.TRIGGER_DELAY);

    return () => clearTimeout(timer);
  }, [language, mounted]);

  const getAnimationClass = (staggerIndex: number) => {
    if (!shouldAnimate) return "";

    switch (staggerIndex) {
      case 1:
        return "fadeInUpStagger1";
      case 2:
        return "fadeInUpStagger2";
      case 3:
        return "fadeInUpStagger3";
      default:
        return "fadeInUp";
    }
  };

  return (
    <AnimationContext.Provider value={{ animationKey, getAnimationClass }}>
      <Container>{children}</Container>
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};

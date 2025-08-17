import { useEffect, useState } from "react";

import { useLanguage } from "@/utils/useLanguage";

/**
 * Custom hook for managing mount-based animations with staggered timing
 * @param staggerIndex - Index for staggered animation timing (0, 1, 2, 3)
 * @returns Object containing current language and animation class name
 */
export const useStaggeredAnimation = (staggerIndex: number = 0) => {
  const { language } = useLanguage();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount with staggered delay
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100 * staggerIndex);

    return () => clearTimeout(timer);
  }, [staggerIndex]);

  const getAnimationClass = () => {
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

  return {
    language,
    animationClass: getAnimationClass(),
  };
};

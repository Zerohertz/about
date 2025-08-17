import { useEffect, useState } from "react";

import { useLanguage } from "@/utils/useLanguage";

import { useAnimationContext } from "@/contexts/AnimationContext";

/**
 * Custom hook for managing mount-based animations with language support
 * Only animates on initial page load, not on language switches
 * @param delay - Optional delay before triggering animation (in ms)
 * @returns Object containing current language and animation class name
 */
export const useAnimation = (delay: number = 0) => {
  const { language } = useLanguage();
  const { isLanguageSwitch } = useAnimationContext();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Skip animation if this is a language switch
    if (isLanguageSwitch) {
      setShouldAnimate(false);
      return;
    }

    // Only animate on initial mount
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isLanguageSwitch]);

  return {
    language,
    animationClass: shouldAnimate ? "fadeInUp" : "",
  };
};

/**
 * Custom hook for staggered animations
 * Only animates on initial page load, not on language switches
 * @param staggerIndex - Index for staggered animation timing (0, 1, 2, 3)
 * @returns Object containing current language and animation class name
 */
export const useStaggeredAnimation = (staggerIndex: number = 0) => {
  const { language } = useLanguage();
  const { isLanguageSwitch } = useAnimationContext();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Skip animation if this is a language switch
    if (isLanguageSwitch) {
      setShouldAnimate(false);
      return;
    }

    // Only animate on initial mount with staggered delay
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100 * staggerIndex);

    return () => clearTimeout(timer);
  }, [staggerIndex, isLanguageSwitch]);

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

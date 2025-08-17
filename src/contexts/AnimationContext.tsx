import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

// Delay before re-enabling animations after language switch
const ANIMATION_RESET_DELAY = 400;

interface AnimationContextType {
  isLanguageSwitch: boolean;
  setIsLanguageSwitch: (value: boolean) => void;
  enableAnimationsOnInteraction: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isLanguageSwitch, setIsLanguageSwitch] = useState(false);

  const enableAnimationsOnInteraction = useCallback(() => {
    setIsLanguageSwitch(false);
  }, []);

  useEffect(() => {
    if (!isLanguageSwitch) return;

    // Re-enable animations after a reasonable delay
    // This provides enough time for language content to load and render
    const timer = setTimeout(() => {
      setIsLanguageSwitch(false);
    }, ANIMATION_RESET_DELAY);

    return () => clearTimeout(timer);
  }, [isLanguageSwitch]);

  return (
    <AnimationContext.Provider value={{ isLanguageSwitch, setIsLanguageSwitch, enableAnimationsOnInteraction }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimationContext must be used within an AnimationProvider");
  }
  return context;
};

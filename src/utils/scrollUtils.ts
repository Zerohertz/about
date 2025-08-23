/**
 * 스크롤 위치를 백분율로 계산
 */
export const getScrollPercentage = (): number => {
  if (typeof window === "undefined") return 0;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) return 0;

  return Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
};

/**
 * 백분율 기반으로 스크롤 위치 설정
 */
export const setScrollPercentage = (percentage: number): void => {
  if (typeof window === "undefined") return;

  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const targetScrollTop = (percentage / 100) * scrollHeight;

  window.scrollTo({ top: targetScrollTop, behavior: "smooth" });
};

/**
 * 스크롤 위치를 세션 스토리지에 저장
 */
export const saveScrollPosition = (key: string): void => {
  if (typeof window === "undefined") return;

  const percentage = getScrollPercentage();
  sessionStorage.setItem(`scroll-${key}`, percentage.toString());
};

/**
 * 세션 스토리지에서 스크롤 위치 복원
 */
export const restoreScrollPosition = (key: string): void => {
  if (typeof window === "undefined") return;

  const savedPercentage = sessionStorage.getItem(`scroll-${key}`);
  if (savedPercentage) {
    const percentage = parseFloat(savedPercentage);
    // NaN 체크 추가
    if (!isNaN(percentage)) {
      // 페이지가 완전히 로드된 후 스크롤 복원
      setTimeout(() => setScrollPercentage(percentage), 100);
    }
  }
};

export const getImageSrc = (originalSrc: string): string => {
  if (originalSrc.startsWith("http")) return originalSrc;

  // GitHub Pages 환경 감지
  const isGitHubPages =
    typeof window !== "undefined" &&
    (window.location.hostname.endsWith(".github.io") ||
      (process.env.NODE_ENV === "production" && window.location.pathname.startsWith("/about")));

  const basePath = isGitHubPages ? "/about" : "";

  return originalSrc.startsWith("/") ? `${basePath}${originalSrc}` : `${basePath}/${originalSrc}`;
};

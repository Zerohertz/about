export const getImageSrc = (originalSrc: string): string => {
  // External URLs are returned as-is
  if (originalSrc.startsWith("http")) return originalSrc;

  // Add basePath for GitHub Pages deployment
  const basePath = "/about";
  const normalizedPath = originalSrc.startsWith("/") ? originalSrc : `/${originalSrc}`;

  return `${basePath}${normalizedPath}`;
};

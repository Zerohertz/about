export const getImageSrc = (originalSrc: string): string => {
  // External URLs are returned as-is
  if (originalSrc.startsWith("http")) return originalSrc;

  // GitHub Actions configure-pages automatically injects basePath during build
  // We just need to ensure the path starts with /
  return originalSrc.startsWith("/") ? originalSrc : `/${originalSrc}`;
};

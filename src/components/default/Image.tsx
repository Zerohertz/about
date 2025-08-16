import Image from "next/image";

const CustomImage = ({ src }: { src: string }) => {
  const getImageSrc = (originalSrc: string) => {
    if (originalSrc.startsWith("http")) return originalSrc;

    const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "zerohertz.github.io";
    const basePath = isGitHubPages ? "/about" : "";

    return originalSrc.startsWith("/") ? `${basePath}${originalSrc}` : `${basePath}/${originalSrc}`;
  };

  return (
    <Image
      className="image"
      src={getImageSrc(src)}
      alt={src}
      height={5000}
      width={5000}
      quality={100}
      unoptimized={src.endsWith(".gif")}
    />
  );
};

export default CustomImage;

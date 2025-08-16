import Image from "next/image";
import { useRouter } from "next/router";

const CustomImage = ({ src }: { src: string }) => {
  const router = useRouter();

  const getImageSrc = (originalSrc: string) => {
    if (originalSrc.startsWith("http")) return originalSrc;

    const isGitHubPages = router.asPath.startsWith("/about/");
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

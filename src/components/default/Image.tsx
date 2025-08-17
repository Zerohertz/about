import Image from "next/image";

import { APP_CONFIG } from "@/config/app";

const CustomImage = ({ src, className = "image", size = 5000 }: { src: string; className?: string; size?: number }) => {
  const imageSrc = src.startsWith("http") ? src : `${APP_CONFIG.basePath}${src}`;

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={src}
      height={size}
      width={size}
      quality={100}
      unoptimized={src.endsWith(".gif")}
    />
  );
};

export default CustomImage;

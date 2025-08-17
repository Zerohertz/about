import { memo } from "react";

import Image from "next/image";

import { APP_CONFIG } from "@/config/app";

import { IMAGE_DEFAULTS } from "@/constants";

const CustomImage = ({
  src,
  className = "image",
  size = IMAGE_DEFAULTS.DEFAULT_SIZE,
}: {
  src: string;
  className?: string;
  size?: number;
}) => {
  const imageSrc = src.startsWith("http") ? src : `${APP_CONFIG.basePath}${src}`;

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={src}
      height={size}
      width={size}
      quality={IMAGE_DEFAULTS.QUALITY}
      unoptimized={src.endsWith(".gif")}
    />
  );
};

export default memo(CustomImage);

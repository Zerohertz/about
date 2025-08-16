import Image from "next/image";

import { getImageSrc } from "@/utils/ImagePath";

const CustomImage = ({ src }: { src: string }) => {
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

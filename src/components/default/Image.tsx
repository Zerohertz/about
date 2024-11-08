import Image from "next/image";

const _Image = ({ src }: { src: string }) => {
  return (
    <Image
      className="image"
      src={src}
      alt={src}
      height={5000}
      width={5000}
      quality={100}
      unoptimized={src.endsWith(".gif")}
    />
  );
};

export default _Image;

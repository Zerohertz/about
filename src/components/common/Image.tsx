import Image from "next/image";

// NOTE:
const _Image = ({ src }: { src: string }) => {
  return (
    <div style={{ maxWidth: "70%", display: "block", width: "fit-content" }}>
      <Image
        src={src}
        alt={src}
        height={0}
        width={0}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default _Image;

import Image from "next/image";

// NOTE:
const _Image = ({ src }: { src: string }) => {
  return (
    <div style={{ maxWidth: "100%", display: "block", width: "fit-content" }}>
      <Image
        src={src}
        alt={src}
        height={0}
        width={0}
        style={{
          width: "90%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default _Image;

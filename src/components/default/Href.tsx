import Link from "next/link";

const Href = ({ url, text, className = "" }: { url: string; text?: string; className?: string }) => {
  return (
    <Link
      href={url}
      className={`link-underline link-underline-opacity-0 link-underline-opacity-100-hover ${className}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text || url}
    </Link>
  );
};

export default Href;

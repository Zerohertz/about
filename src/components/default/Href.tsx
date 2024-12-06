import { PropsWithChildren } from "react";

import Link from "next/link";

const Href = ({ className = "", src, children }: PropsWithChildren<{ className?: string; src?: string }>) => {
  return (
    <Link
      className={`link-underline link-underline-opacity-0 link-underline-opacity-100-hover ${className}`}
      href={src || "#"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children || src}
    </Link>
  );
};

export default Href;

import { PropsWithChildren } from "react";

import Link from "next/link";

const Href = ({ href, className = "", children }: PropsWithChildren<{ href?: string; className?: string }>) => {
  return (
    <Link
      href={href || "#"}
      className={`link-underline link-underline-opacity-0 link-underline-opacity-100-hover ${className}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children || href}
    </Link>
  );
};

export default Href;

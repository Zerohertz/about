import { PropsWithChildren } from "react";

import Link from "next/link";

const Href = ({ className = "", href, children }: PropsWithChildren<{ className?: string; href?: string }>) => {
  return (
    <Link
      className={`link-underline link-underline-opacity-0 link-underline-opacity-100-hover ${className}`}
      href={href || "#"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children || href}
    </Link>
  );
};

export default Href;

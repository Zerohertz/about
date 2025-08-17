import { memo, PropsWithChildren } from "react";

import Link from "next/link";

import { LINK_CLASSES } from "@/constants";

const Href = ({ className = "", href, children }: PropsWithChildren<{ className?: string; href?: string }>) => {
  return (
    <Link
      className={`${LINK_CLASSES.DEFAULT} ${className}`}
      href={href || "#"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children || href}
    </Link>
  );
};

export default memo(Href);

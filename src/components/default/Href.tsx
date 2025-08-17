import { memo, PropsWithChildren } from "react";

import Link from "next/link";

import { LINK_CLASSES } from "@/constants";

const isValidUrl = (url: string): boolean => {
  try {
    const validUrl = new URL(url);
    return ["http:", "https:", "mailto:"].includes(validUrl.protocol);
  } catch {
    return false;
  }
};

const Href = ({ className = "", href, children }: PropsWithChildren<{ className?: string; href?: string }>) => {
  // Return a span if no href is provided or if href is invalid
  if (!href || !isValidUrl(href)) {
    return <span className={`${LINK_CLASSES.DEFAULT} ${className}`}>{children || href || ""}</span>;
  }

  return (
    <Link className={`${LINK_CLASSES.DEFAULT} ${className}`} href={href} target="_blank" rel="noreferrer noopener">
      {children || href}
    </Link>
  );
};

export default memo(Href);

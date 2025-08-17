import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  basePath: "/about",
  trailingSlash: true,
  images: {
    // https://nextjs.org/docs/messages/export-image-api
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

import packageJson from "./package.json";

const isProd = process.env.NODE_ENV === "production";
const prefix = packageJson.prefix || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProd && prefix ? `/${prefix}` : "",
  assetPrefix: isProd && prefix ? `/${prefix}/` : "",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

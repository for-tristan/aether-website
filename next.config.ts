import type { NextConfig } from "next";

const isExport = process.env.NEXT_PUBLIC_EXPORT === "1";
const basePath = isExport ? "/aether-website" : "";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Static export for GitHub Pages — enabled via NEXT_PUBLIC_EXPORT=1
  ...(isExport && {
    output: "export",
    basePath,
    images: { unoptimized: true },
    cacheComponents: false,
    partialPrefetching: false,
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
  }),
};

export default nextConfig;

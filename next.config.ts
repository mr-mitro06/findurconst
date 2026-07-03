import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/findurconst",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

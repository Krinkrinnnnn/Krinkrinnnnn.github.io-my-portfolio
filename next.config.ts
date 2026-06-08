import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_REPOSITORY && !process.env.GITHUB_REPOSITORY.endsWith('.github.io')
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
    : '',
};

export default nextConfig;

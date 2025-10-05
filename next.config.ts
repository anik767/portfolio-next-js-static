import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Use the new serverExternalPackages instead of experimental
  serverExternalPackages: [],
  // Add outputFileTracingRoot to fix the workspace warning
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;

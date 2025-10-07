import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Use the new serverExternalPackages instead of experimental
  serverExternalPackages: [],
  // Add outputFileTracingRoot to fix the workspace warning
  outputFileTracingRoot: process.cwd(),
  // Generate a fully static build compatible with Netlify static hosting
  output: "export",
  // Ensure exported pages work well on static hosts
  trailingSlash: true,
  images: {
    // Disable the Image Optimization API for static export
    unoptimized: true,
  },
  // Ensure asset prefix works with static hosting if needed
  // assetPrefix: process.env.ASSET_PREFIX || undefined,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "asset-2.tstatic.net",
      },
    ],
  },
};

export default nextConfig;

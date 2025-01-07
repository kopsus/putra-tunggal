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
    ],
  },
};

export default nextConfig;

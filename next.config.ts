import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmm-bucket-public.allen-live.in",
      },
      {
        protocol: "https",
        hostname: "asset.allen.in",
      },
      {
        protocol: "https",
        hostname: "www.mentorsedu.com",
      },
      {
        protocol: "https",
        hostname: "gurukripa.ac.in",
      },
      {
        protocol: "https",
        hostname: "coresg-normal.trae.ai",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;

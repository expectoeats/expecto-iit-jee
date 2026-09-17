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
      {
        protocol: "https",
        hostname: "www.studynlearn.com",
      },
      {
        protocol: "https",
        hostname: "l1coaching.in",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "www.hillshigh.com",
      },
      {
        protocol: "https",
        hostname: "poorvucenter.yale.edu",
      },
    ],
  },
};

export default nextConfig;

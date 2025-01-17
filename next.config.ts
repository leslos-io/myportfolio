import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-man2-1.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'anybikeforcash.co.uk',
      }, 
      {
        protocol: 'https',
        hostname: 'gmdremovals.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'lkcreativenailtraining.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'luxeassetglobal.com',
      },
    ],
  },
};

export default nextConfig;

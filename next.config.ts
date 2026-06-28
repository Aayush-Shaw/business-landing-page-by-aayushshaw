import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 75],
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Optimize static file serving for videos
  async headers() {
    return [
      {
        source: '/:all*(mp4|webm|mov)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Increase the body parser limit for large video files
  experimental: {
    // Allow larger static files during build
    largePageDataBytes: 128 * 100000, // 12.8MB
  },
};

export default nextConfig;

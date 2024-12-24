import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, 
      },
    ];
  },
  images: {
    domains: ['wpriverthemes.com'], 
  },
};

export default nextConfig;

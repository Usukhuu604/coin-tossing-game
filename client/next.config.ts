import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     { source: "/api/:path*", destination: "http://localhost:8000/:path*" },
  //   ];
  // },
  env: {
    NEXT_PUBLIC_BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI,
  },
};

export default nextConfig;

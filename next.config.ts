import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, maxage=60, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
      {
        source: "/user-custom",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
          {
            key: "user-custom",
            value: "my other custom header value",
          },
        ],
      },
      {
        source: "/user-static",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "user-static",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

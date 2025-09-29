/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "img.clerk.com"],
    unoptimized: process.env.NODE_ENV === "development" ? true : false,
  },
  experimental: {
    turbo: {
      rules: {
        "*.md": {
          loaders: ["markdown-loader"],
          as: "*.md",
        },
      },
    },
  },
};

export default nextConfig;

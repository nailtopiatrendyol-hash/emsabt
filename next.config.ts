import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cloudflare Pages preview: static export (no Node server needed).
     Remove `output: "export"` and `images.unoptimized` when moving to a
     Node host (e.g. Hostinger) that can run `next start`. */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

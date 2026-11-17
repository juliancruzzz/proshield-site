import type { NextConfig } from "next";
import { redirects } from "./vercel.json";

const nextConfig: NextConfig = {
  // Server/SSG build on Vercel (NOT static export) so Next can optimize images:
  // responsive resizing + AVIF/WebP. Static export forces images.unoptimized,
  // which shipped every photo full-size (4.3MB / 11.5s mobile LCP).
  images: { formats: ["image/avif", "image/webp"] },
  // Keep explicit old-URL destinations ahead of trailing-slash normalization.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...redirects,
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
};

export default nextConfig;

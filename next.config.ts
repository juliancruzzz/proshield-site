import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server/SSG build on Vercel (NOT static export) so Next can optimize images:
  // responsive resizing + AVIF/WebP. Static export forces images.unoptimized,
  // which shipped every photo full-size (4.3MB / 11.5s mobile LCP).
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;

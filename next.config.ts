// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Experimental ── */
  experimental: {
    // React 19 + Next.js 15: PPR for partial pre-rendering
    ppr: false, // enable when stable
    reactCompiler: false, // enable when stable
  },

  /* ── Compiler ── */
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  /* ── Images ── */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // Add external image domains here as needed
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  /* ── Headers ── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets
        source: "/(.*)\\.(ico|png|svg|jpg|jpeg|gif|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* ── Redirects ── */
  async redirects() {
    return [
      // Enforce trailing slash consistency
      // Example: redirect old portfolio URLs to new agency URLs
    ];
  },

  /* ── Output ── */
  poweredByHeader: false,

  /* ── TypeScript ── */
  typescript: {
    ignoreBuildErrors: false,
  },

  /* ── ESLint ── */
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

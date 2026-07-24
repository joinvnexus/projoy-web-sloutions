// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";
// Ignore missing type declarations for global CSS side-effect import in TS
// @ts-ignore
import "../styles/globals.css";

/* ─── Fonts ──────────────────────────────────────────────── */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

/* ─── Viewport ───────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ─── Root Metadata ──────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: `${SITE_CONFIG.name} — Web Development & Local SEO Agency`,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    "web development agency",
    "Next.js development",
    "local SEO agency",
    "Google Business Profile optimization",
    "React development",
    "SaaS development",
    "AI web development",
    "Google Maps ranking",
    "Projoy Web Solutions",
    "Bangladesh web agency",
  ],

  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  category: "Web Development & Digital Marketing",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Web Development & Local SEO Agency`,
    description:
      "We build websites that rank on Google and grow your business. Next.js development + Local SEO under one roof.",
    images: [
      {
        url: SITE_CONFIG.openGraph.image,
        width: SITE_CONFIG.openGraph.width,
        height: SITE_CONFIG.openGraph.height,
        alt: SITE_CONFIG.openGraph.imageAlt,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@projoywebsol",
    creator: "@projoywebsol",
    title: `${SITE_CONFIG.name} — Web Development & Local SEO Agency`,
    description:
      "Next.js Web Development + Local SEO. We build websites that rank and grow businesses.",
    images: [SITE_CONFIG.openGraph.image],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",
};

/* ─── Root Layout ────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-700 font-body antialiased">
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="ms-clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_CLARITY_ID}');
            `}
          </Script>
        )}

        {/* JSON-LD Schemas */}
        <SchemaMarkup
          schema={[organizationSchema, localBusinessSchema, websiteSchema]}
        />

        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-notifications focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* Sticky navigation */}
        <Navbar />

        {/* Page content */}
        <main id="main-content" className="relative">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

// lib/schemas/index.ts
import { SITE_CONFIG } from "@/lib/constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/logo.png`,
    width: 240,
    height: 60,
  },
  description: SITE_CONFIG.description,
  foundingDate: "2023",
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressRegion: "Sylhet Division",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SITE_CONFIG.email,
    availableLanguage: ["English"],
  },
  sameAs: Object.values(SITE_CONFIG.social),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.url}/#local-business`,
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressRegion: "Sylhet Division",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8949,
    longitude: 91.8687,
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const webDevServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  serviceType: "Web Development",
  description:
    "Custom Next.js 15 and React web development services including SaaS, landing pages, dashboards, and AI integrations.",
  url: `${SITE_CONFIG.url}/services/web-development/`,
  areaServed: "Worldwide",
};

export const localSeoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO & Google Business Profile Optimization",
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  serviceType: "Search Engine Optimization",
  description:
    "Local SEO and Google Business Profile optimization services to help businesses rank in the Google 3-pack and dominate local search.",
  url: `${SITE_CONFIG.url}/services/local-seo/`,
  areaServed: "Worldwide",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const createFaqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
});

export const createBreadcrumbSchema = (
  items: { name: string; href: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.href}`,
  })),
});

export const createArticleSchema = (post: {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.publishedAt,
  url: `${SITE_CONFIG.url}/blog/${post.slug}/`,
  author: {
    "@type": "Person",
    name: post.author ?? "Projoy Web Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/logo.png`,
    },
  },
});

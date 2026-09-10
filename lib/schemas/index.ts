// lib/schemas/index.ts
import { SITE_CONFIG, FOUNDER_CONFIG } from "@/lib/constants";

/* ─── Shared @id anchors ─────────────────────────────────────
   Reused across every schema block below so Organization, Person,
   WebSite, and page-level schemas all reference the same nodes instead
   of re-declaring the entity each time. */
export const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
export const PERSON_ID = `${SITE_CONFIG.url}/#person-${FOUNDER_CONFIG.slug}`;
export const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/icon-512.png`,
    width: 512,
    height: 512,
  },
  description: SITE_CONFIG.description,
  foundingDate: "2023",
  email: SITE_CONFIG.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SITE_CONFIG.email,
    availableLanguage: ["English"],
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: FOUNDER_CONFIG.name,
  url: `${SITE_CONFIG.url}/about/${FOUNDER_CONFIG.slug}`,
  jobTitle: FOUNDER_CONFIG.jobTitle,
  description: FOUNDER_CONFIG.description,
  worksFor: { "@id": ORGANIZATION_ID },
  knowsAbout: [...FOUNDER_CONFIG.knowsAbout],
  sameAs: Object.values(FOUNDER_CONFIG.sameAs),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.url}/#local-business`,
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}/og-image.png`,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Remote",
    addressCountry: "US",
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
  provider: { "@id": ORGANIZATION_ID },
  serviceType: "Web Development",
  description:
    "Custom web development services including business websites, e-commerce, landing pages, and custom web applications.",
  url: `${SITE_CONFIG.url}/services/web-development`,
  areaServed: "Worldwide",
};

export const localSeoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO",
  provider: { "@id": ORGANIZATION_ID },
  serviceType: "Search Engine Optimization",
  description:
    "Local SEO services to help businesses rank in local search, improve Google Maps visibility, and generate more leads.",
  url: `${SITE_CONFIG.url}/services/local-seo`,
  areaServed: "Worldwide",
};

export const technicalSeoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO",
  provider: { "@id": ORGANIZATION_ID },
  serviceType: "Technical Search Engine Optimization",
  description:
    "Technical SEO audits, reporting, implementation, and validation for crawlability, indexability, performance, metadata, and structured data.",
  url: `${SITE_CONFIG.url}/services/technical-seo`,
  areaServed: "Worldwide",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: { "@id": ORGANIZATION_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** AboutPage schema — use on /about. */
export const createAboutPageSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_CONFIG.url}${url}/#aboutpage`,
  url: `${SITE_CONFIG.url}${url}`,
  about: { "@id": ORGANIZATION_ID },
  isPartOf: { "@id": WEBSITE_ID },
});

/** ProfilePage schema — use on /about/projoy-naidu (or any Person profile page). */
export const createProfilePageSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_CONFIG.url}${url}/#profilepage`,
  url: `${SITE_CONFIG.url}${url}`,
  mainEntity: { "@id": PERSON_ID },
  isPartOf: { "@id": WEBSITE_ID },
});

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
  dateModified?: string;
  slug: string;
  author?: string;
  schemaType?: "BlogPosting" | "Article";
}) => {
  const url = `${SITE_CONFIG.url}/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": post.schemaType ?? "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.dateModified ?? post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
};

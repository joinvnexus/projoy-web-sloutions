// lib/schemas/index.ts
import { SITE_CONFIG, FOUNDER_CONFIG } from "@/lib/constants";

export const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
export const PERSON_ID = `${SITE_CONFIG.url}/#person-${FOUNDER_CONFIG.slug}`;
export const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/Logo-projoywebsloutions.png`, width: 240, height: 60 },
  description: SITE_CONFIG.description,
  foundingDate: "2023",
  email: SITE_CONFIG.email,
  address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressRegion: "Sylhet Division", addressCountry: "BD" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: SITE_CONFIG.email, availableLanguage: ["English"] },
  founder: { "@id": PERSON_ID },
  sameAs: Object.values(SITE_CONFIG.social),
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
  address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressRegion: "Sylhet Division", addressCountry: "BD" },
  geo: { "@type": "GeoCoordinates", latitude: 24.8949, longitude: 91.8687 },
  priceRange: "$$",
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }],
};

export const webDevServiceSchema = {
  "@context": "https://schema.org", "@type": "Service", name: "Custom Web Development Services",
  provider: { "@id": ORGANIZATION_ID }, serviceType: "Web Development",
  description: "Custom web development services for high-performance websites, SaaS applications, dashboards, and web applications.",
  url: `${SITE_CONFIG.url}/services/web-development`, areaServed: "Worldwide",
};

export const localSeoServiceSchema = {
  "@context": "https://schema.org", "@type": "Service", name: "Local SEO Services",
  provider: { "@id": ORGANIZATION_ID }, serviceType: "Local SEO",
  description: "Local SEO and Google Business Profile optimization services to improve local search and Google Maps visibility.",
  url: `${SITE_CONFIG.url}/services/local-seo`, areaServed: "Worldwide",
};

export const technicalSeoServiceSchema = {
  "@context": "https://schema.org", "@type": "Service", name: "Technical SEO Services",
  provider: { "@id": ORGANIZATION_ID }, serviceType: "Technical SEO",
  description: "Technical SEO audits and implementation covering crawlability, indexability, performance, structured data, JavaScript SEO, and search-ready website architecture.",
  url: `${SITE_CONFIG.url}/services/technical-seo`, areaServed: "Worldwide",
};

export const aiSolutionsServiceSchema = {
  "@context": "https://schema.org", "@type": "Service", name: "AI Solutions & Automation",
  provider: { "@id": ORGANIZATION_ID }, serviceType: "AI Automation",
  description: "AI-powered chatbots, workflow automation, and custom AI integrations as an additional business capability.",
  url: `${SITE_CONFIG.url}/services/ai-solutions`, areaServed: "Worldwide",
};

export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": WEBSITE_ID,
  name: SITE_CONFIG.name, url: SITE_CONFIG.url, description: SITE_CONFIG.description,
  publisher: { "@id": ORGANIZATION_ID },
  potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}` }, "query-input": "required name=search_term_string" },
};

export const createAboutPageSchema = (url: string) => ({ "@context": "https://schema.org", "@type": "AboutPage", "@id": `${SITE_CONFIG.url}${url}/#aboutpage`, url: `${SITE_CONFIG.url}${url}`, about: { "@id": ORGANIZATION_ID }, isPartOf: { "@id": WEBSITE_ID } });
export const createProfilePageSchema = (url: string) => ({ "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${SITE_CONFIG.url}${url}/#profilepage`, url: `${SITE_CONFIG.url}${url}`, mainEntity: { "@id": PERSON_ID }, isPartOf: { "@id": WEBSITE_ID } });
export const createFaqSchema = (faqs: { q: string; a: string }[]) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
export const createBreadcrumbSchema = (items: { name: string; href: string }[]) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_CONFIG.url}${item.href}` })) });

export const createArticleSchema = (post: { title: string; description: string; publishedAt: string; dateModified?: string; slug: string; author?: string }) => {
  const author = post.author === FOUNDER_CONFIG.name ? { "@id": PERSON_ID } : { "@id": ORGANIZATION_ID };
  const url = `${SITE_CONFIG.url}/${post.slug}`;
  return { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.publishedAt, dateModified: post.dateModified ?? post.publishedAt, mainEntityOfPage: { "@type": "WebPage", "@id": url }, url, author, publisher: { "@id": ORGANIZATION_ID } };
};

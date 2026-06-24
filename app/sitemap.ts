// app/sitemap.ts
import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { subServices } from "@/lib/data/sub-services";
import { caseStudies } from "@/lib/data/case-studies";
import { blogPosts } from "@/lib/data/blog";

const baseUrl = SITE_CONFIG.url;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ai-solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.75 },
  ];

  /* All sub-service pages now exist — generated dynamically from the data layer
     so the sitemap can never drift out of sync with real routes again. */
  const subServicePages: MetadataRoute.Sitemap = subServices.map((s) => ({
    url: `${baseUrl}/services/${s.parentSlug}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: "monthly" as const,
    priority: cs.featured ? 0.8 : 0.65,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.7 : 0.6,
  }));

  return [...corePages, ...subServicePages, ...caseStudyPages, ...blogPages];
}

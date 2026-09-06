// app/sitemap.ts
import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { subServices } from "@/lib/data/sub-services";
import { caseStudies } from "@/lib/data/case-studies";
import { blogPosts } from "@/lib/data/blog";

const baseUrl = SITE_CONFIG.url;
export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services/local-seo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/technical-seo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ai-solutions`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/case-studies`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about/projoy-naidu`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog`, changeFrequency: "daily", priority: 0.75 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];
  const subServicePages: MetadataRoute.Sitemap = subServices.map((s) => ({ url: `${baseUrl}/services/${s.parentSlug}/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.75 }));
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({ url: `${baseUrl}/case-studies/${cs.slug}`, lastModified: new Date(cs.publishedAt), changeFrequency: "monthly" as const, priority: cs.featured ? 0.8 : 0.65 }));
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: "monthly" as const, priority: post.featured ? 0.7 : 0.6 }));
  return [...corePages, ...subServicePages, ...caseStudyPages, ...blogPages];
}

// lib/data/blog.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  categorySlug: string;
  tags: string[];
  author: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-rank-google-maps-local-business",
    title: "How to Rank Your Local Business on Google Maps in 2025",
    excerpt:
      "Google Maps ranking isn't magic — it's a system. Learn the exact signals Google uses to determine your local 3-pack position and how to optimize each one systematically.",
    publishedAt: "2024-11-10",
    readingTime: 9,
    category: "Local SEO",
    categorySlug: "local-seo",
    tags: ["Google Maps", "Local SEO", "GBP", "Ranking"],
    author: "Projoy Web Solutions",
    featured: true,
  },
  {
    slug: "nextjs-vs-wordpress-for-seo",
    title: "Next.js vs WordPress for SEO: What the Data Actually Shows",
    excerpt:
      "WordPress powers 43% of the web, but Next.js is winning the performance race. Here's a data-driven comparison of what each platform actually delivers for SEO in 2025.",
    publishedAt: "2024-10-28",
    readingTime: 7,
    category: "Web Development",
    categorySlug: "web-development",
    tags: ["Next.js", "WordPress", "SEO", "Performance"],
    author: "Projoy Web Solutions",
    featured: true,
  },
  {
    slug: "google-business-profile-optimization-guide",
    title: "The Complete Google Business Profile Optimization Guide",
    excerpt:
      "Your GBP is your most powerful local marketing asset — and most businesses leave 80% of its potential untapped. Here's our complete optimization framework.",
    publishedAt: "2024-10-05",
    readingTime: 12,
    category: "Local SEO",
    categorySlug: "local-seo",
    tags: ["GBP", "Google Business Profile", "Local SEO"],
    author: "Projoy Web Solutions",
    featured: true,
  },
  {
    slug: "core-web-vitals-guide-2025",
    title: "Core Web Vitals in 2025: What Business Owners Actually Need to Know",
    excerpt:
      "LCP, CLS, INP — Google's performance metrics sound technical but they have a direct impact on your rankings and conversions. Here's the non-technical guide.",
    publishedAt: "2024-09-18",
    readingTime: 6,
    category: "Web Development",
    categorySlug: "web-development",
    tags: ["Core Web Vitals", "Performance", "SEO", "Next.js"],
    author: "Projoy Web Solutions",
    featured: false,
  },
  {
    slug: "ai-chatbot-for-small-business",
    title: "Should Your Small Business Use an AI Chatbot? An Honest Assessment",
    excerpt:
      "AI chatbots aren't right for every business. Here's an honest breakdown of when they deliver ROI, when they don't, and what a realistic implementation looks like.",
    publishedAt: "2024-09-02",
    readingTime: 8,
    category: "AI Solutions",
    categorySlug: "ai-solutions",
    tags: ["AI Chatbot", "Automation", "Small Business"],
    author: "Projoy Web Solutions",
    featured: false,
  },
  {
    slug: "local-citation-building-guide",
    title: "Local Citation Building: The 50 Directories That Actually Move the Needle",
    excerpt:
      "Not all citations are created equal. Here are the 50 highest-impact directories for local SEO, why NAP consistency matters, and how to audit your existing citations.",
    publishedAt: "2024-08-20",
    readingTime: 10,
    category: "Local SEO",
    categorySlug: "local-seo",
    tags: ["Citations", "Local SEO", "NAP", "Directories"],
    author: "Projoy Web Solutions",
    featured: false,
  },
];

export const blogCategories = [
  { label: "All Posts", slug: "all" },
  { label: "Local SEO", slug: "local-seo" },
  { label: "Web Development", slug: "web-development" },
  { label: "AI Solutions", slug: "ai-solutions" },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  if (categorySlug === "all") return blogPosts;
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

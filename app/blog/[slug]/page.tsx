// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Tag as TagIcon } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Tag } from "@/components/shared/Typography";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { createBreadcrumbSchema, createArticleSchema } from "@/lib/schemas";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { SITE_CONFIG } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

/* ─── Static Params ──────────────────────────────────────── */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ─── Metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Projoy Web Solutions Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ─── Placeholder body — replace with MDX in production ─── */
function PostBody({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  // Generic placeholder sections — in production these come from MDX/CMS
  const sections = [
    {
      heading: "Why This Matters for Your Business",
      body: `Understanding ${post.category.toLowerCase()} is one of the highest-leverage skills a business owner can develop. The difference between a business that's visible online and one that's invisible often comes down to a handful of decisions that, once made correctly, compound over time.

In this article, we'll break down the exact framework we use with our clients — stripped of jargon and focused on what actually moves the needle.`,
    },
    {
      heading: "The Core Principles",
      body: `Most advice in this space focuses on tactics. But tactics without strategy produce inconsistent results. The businesses that consistently outperform their competitors online share a few key characteristics:

First, they treat their digital presence as infrastructure — not a project that gets done once and forgotten. Second, they measure what matters and ignore vanity metrics. Third, they compound their advantages over time rather than chasing shortcuts.`,
    },
    {
      heading: "Practical Implementation",
      body: `Here's how to apply these principles in practice. Start with an audit of your current position. You can't improve what you don't measure — and most businesses we work with are surprised to discover opportunities they're already close to capturing.

From there, prioritise the highest-impact actions first. In our experience, 20% of the available actions produce 80% of the results. The goal is to find those 20% and execute them well before moving on to the next layer of optimisation.`,
    },
    {
      heading: "Common Mistakes to Avoid",
      body: `We've worked with dozens of businesses in this space and the same mistakes appear again and again. The most costly is inconsistency — starting strong and then letting things slide for weeks or months.

The second most common mistake is optimising for the wrong metrics. It's easy to focus on things that feel productive but don't actually drive business outcomes. Always trace your activity back to a revenue impact — if you can't draw that line, reconsider whether the activity deserves your time.`,
    },
    {
      heading: "What to Do Next",
      body: `If you've read this far, you're in the right mindset to make real progress. The next step is to take one concrete action this week — not next month, this week.

If you'd like us to audit your current setup and give you a personalised list of the highest-impact improvements, that's exactly what our free Growth Audit covers. It's free, takes about 30 minutes on a call, and gives you a clear picture of where to focus.`,
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((section, i) => (
        <RevealWrapper key={i}>
          <div>
            <h2 className="font-display font-bold text-slate-900 text-xl lg:text-2xl mb-4 leading-snug">
              {section.heading}
            </h2>
            {section.body.split("\n\n").map((para, j) => (
              <p key={j} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </RevealWrapper>
      ))}
    </div>
  );
}

const categoryTagMap: Record<string, "brand" | "accent" | "slate"> = {
  "Local SEO": "accent",
  "Web Development": "brand",
  "AI Solutions": "brand",
};

const relatedServiceMap: Record<string, { label: string; href: string }> = {
  "Local SEO": { label: "Local SEO Services", href: "/services/local-seo" },
  "Web Development": { label: "Web Development Services", href: "/services/web-development" },
  "AI Solutions": { label: "AI Solutions", href: "/services/ai-solutions" },
};

/* ─── Page ───────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === post.categorySlug)
    .slice(0, 2);

  const relatedService = relatedServiceMap[post.category];

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${slug}` },
  ]);

  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    publishedAt: post.publishedAt,
    slug: `blog/${slug}`,
    author: post.author,
  });

  return (
    <>
      <SchemaMarkup schema={[breadcrumb, articleSchema]} />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-white pt-10 pb-12">
        <div className="container mx-auto max-w-[800px]">
          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <Tag variant={categoryTagMap[post.category] ?? "slate"}>
              {post.category}
            </Tag>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime} min read
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-brand-200 pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-slate-100" />

      {/* ── Article body + sidebar ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Body */}
            <article className="min-w-0">
              <PostBody post={post} />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <TagIcon className="w-4 h-4 text-slate-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base">P</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{post.author}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                    Web Development &amp; Local SEO Agency · Sylhet, Bangladesh · Serving clients worldwide
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="card p-6 sticky top-24">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Free Offer
                </p>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-2">
                  Get a Free Growth Audit
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We&apos;ll audit your website and Google presence and show you exactly what to fix first.
                </p>
                <Link
                  href="/contact#audit"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors"
                >
                  Claim Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {relatedService && (
                  <Link
                    href={relatedService.href}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors mt-2"
                  >
                    {relatedService.label}
                  </Link>
                )}
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Related Articles
                  </p>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="card card-hover p-4 block group"
                      >
                        <p className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-brand-700 transition-colors mb-1">
                          {related.title}
                        </p>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {related.readingTime} min read
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <FinalServiceCTA
        heading="Put This Into Practice — With Expert Help"
        subheading="Our free Growth Audit shows you exactly where to focus for maximum impact. No commitment, no fluff."
        primaryCTA={{ label: "Get Your Free Growth Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
        accentColor="brand"
      />
    </>
  );
}

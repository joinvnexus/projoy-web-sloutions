// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GradientText, Eyebrow, Tag } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { blogPosts } from "@/lib/data/blog";
import { SITE_CONFIG } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Local SEO & Web Development Insights | Projoy Web Solutions",
  description:
    "Free guides and insights on local SEO, Google Business Profile optimization, Next.js development, Core Web Vitals, and AI integrations for growing businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Projoy Web Solutions",
    description: "Local SEO guides, Next.js tutorials, and AI insights for growing businesses.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

const categoryTagMap: Record<string, "brand" | "accent" | "slate"> = {
  "Local SEO": "accent",
  "Web Development": "brand",
  "AI Solutions": "brand",
};

const featured = blogPosts.filter((p) => p.featured);
const rest = blogPosts.filter((p) => !p.featured);

export default function BlogPage() {
  const breadcrumb = createBreadcrumbSchema([{ name: "Blog", href: "/blog" }]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-8 pb-14 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <Eyebrow>Insights &amp; Guides</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Insights That Actually{" "}
            <GradientText>Help You Grow</GradientText>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            No filler, no fluff — just actionable guides on local SEO, web development,
            and AI for businesses that want to grow.
          </p>
        </div>
      </section>

      {/* ── Featured Posts ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="featured-posts-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2 id="featured-posts-heading" className="font-display font-bold text-slate-900 text-xl mb-8">
            Featured Articles
          </h2>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Main featured post */}
            {featured[0] && (
              <StaggerItem className="lg:col-span-2">
                <Link href={`/blog/${featured[0].slug}`} className="card card-hover overflow-hidden group flex flex-col h-full block">
                  <div className="h-52 bg-gradient-to-br from-brand-100 to-accent-50 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 flex items-end p-6">
                      <Tag variant={categoryTagMap[featured[0].category] ?? "slate"}>
                        {featured[0].category}
                      </Tag>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                      <time dateTime={featured[0].publishedAt}>{formatDate(featured[0].publishedAt)}</time>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />{featured[0].readingTime} min read
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-xl lg:text-2xl leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                      {featured[0].title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                      {featured[0].excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )}

            {/* Secondary featured posts */}
            <StaggerItem>
              <div className="flex flex-col gap-5 h-full">
                {featured.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card card-hover p-6 group flex flex-col flex-1 block"
                  >
                    <Tag variant={categoryTagMap[post.category] ?? "slate"} className="mb-3 w-fit">
                      {post.category}
                    </Tag>
                    <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{post.readingTime} min
                      </span>
                      <span className="text-xs font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Filterable "More Articles" — client island */}
          {rest.length > 0 && (
            <>
              <h2 className="font-display font-bold text-slate-900 text-xl mb-6">
                More Articles
              </h2>
              <BlogCategoryFilter posts={rest} />
            </>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <RevealWrapper>
            <div className="max-w-2xl mx-auto text-center card p-10 lg:p-14">
              <Eyebrow>Stay Ahead</Eyebrow>
              <h2 className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-4 leading-tight">
                Want Actionable Insights in Your Inbox?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-7">
                We write about local SEO, Next.js performance, and AI integrations — once or
                twice a month, never spam.
              </p>
              <NewsletterForm />
              <p className="text-xs text-slate-400 mt-3">
                No spam. Unsubscribe anytime with one click.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}

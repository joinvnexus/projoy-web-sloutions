// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, GradientText, Eyebrow, Tag } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { projects } from "@/lib/data/projects";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects — Our Portfolio | Projoy Web Solutions",
  description:
    "Browse Projoy Web Solutions' portfolio of Next.js websites, SaaS applications, landing pages, and local SEO campaigns. Real work, real results.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Projoy Web Solutions Portfolio",
    description: "Next.js builds, SaaS apps, AI integrations, and local SEO campaigns.",
    url: `${SITE_CONFIG.url}/projects`,
  },
};

const categoryMeta: Record<string, { label: string; variant: "brand" | "accent" | "slate" }> = {
  "web-app": { label: "Web Application", variant: "brand" },
  "landing-page": { label: "Landing Page", variant: "accent" },
  saas: { label: "SaaS", variant: "brand" },
  dashboard: { label: "Dashboard", variant: "slate" },
  ecommerce: { label: "E-commerce", variant: "brand" },
};

export default function ProjectsPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ]);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-8 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="max-w-2xl">
            <Eyebrow>Our Portfolio</Eyebrow>
            <h1
              className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Work We&apos;re{" "}
              <GradientText>Proud Of</GradientText>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              A selection of websites, applications, and campaigns we&apos;ve built and
              optimised. Every project below is held to a 95+ PageSpeed standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="featured-projects-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Featured Work"
            heading="Selected Projects"
            subheading="A cross-section of our best work — from SaaS applications to local SEO campaigns."
            id="featured-projects-heading"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featured.map((project) => {
              const cat = categoryMeta[project.category] ?? { label: project.categoryLabel, variant: "slate" as const };
              return (
                <StaggerItem key={project.slug}>
                  <article className="card card-hover overflow-hidden group flex flex-col h-full">
                    {/* Placeholder visual header */}
                    <div className="h-44 bg-gradient-to-br from-brand-50 to-accent-50 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-accent-500" />
                        </div>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors opacity-0 group-hover:opacity-100"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <Tag variant={cat.variant}>{cat.label}</Tag>
                        <span className="text-xs text-slate-400">{project.year}</span>
                      </div>

                      <h2 className="font-display font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-4">
                          {project.metrics.map((m) => (
                            <div key={m.label}>
                              <span className="text-sm font-black text-brand-600 font-display">{m.value}</span>
                              <span className="text-xs text-slate-500 ml-1">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-xs font-medium text-slate-600">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-xs text-slate-400">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Rest of projects as compact list */}
          {rest.length > 0 && (
            <>
              <h2 className="font-display font-bold text-slate-900 text-xl mb-5">
                More Projects
              </h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rest.map((project) => {
                  const cat = categoryMeta[project.category] ?? { label: project.categoryLabel, variant: "slate" as const };
                  return (
                    <StaggerItem key={project.slug}>
                      <article className="card card-hover p-5 flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 flex items-center justify-center flex-shrink-0">
                          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-brand-600 to-accent-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <Tag variant={cat.variant} className="text-[10px]">{cat.label}</Tag>
                            <span className="text-[10px] text-slate-400">{project.year}</span>
                          </div>
                          <h3 className="font-display font-bold text-slate-900 text-sm leading-snug mb-1 group-hover:text-brand-700 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-slate-400 hover:text-brand-600 transition-colors"
                            aria-label="Live site"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </article>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <FinalServiceCTA
        heading="Have a Project in Mind?"
        subheading="Whether you need a Next.js website, a local SEO campaign, or an AI integration — let's talk about what we can build together."
        primaryCTA={{ label: "Discuss Your Project", href: "/contact#audit" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
        accentColor="brand"
      />
    </>
  );
}

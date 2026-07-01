// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  MapPin,
  Cpu,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, Tag } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem, RevealWrapper } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import {
  createBreadcrumbSchema,
  webDevServiceSchema,
  localSeoServiceSchema,
} from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Our Services — Web Development, Local SEO & AI Solutions",
  description:
    "Projoy Web Solutions offers expert Next.js web development, local SEO & Google Business Profile optimization, and AI integrations. Two services. One growth partner.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Projoy Web Solutions",
    description:
      "Next.js web development + local SEO under one roof. Explore our full service offering.",
    url: `${SITE_CONFIG.url}/services`,
  },
};

/* ─── Data ───────────────────────────────────────────────── */
const services = [
  {
    id: "web-development",
    icon: Code2,
    tag: "Development",
    tagVariant: "brand" as const,
    title: "Web Development & AI Solutions",
    description:
      "We build high-performance websites, SaaS applications, and AI-powered tools using Next.js 15, React, and TypeScript. Every build is engineered for speed, SEO, and conversion.",
    href: "/services/web-development",
    cta: "Explore Web Development",
    features: [
      "Next.js 15 & React",
      "TypeScript & Tailwind CSS",
      "SaaS Product Development",
      "AI Chatbots & Automations",
      "Custom Dashboards",
      "High-Converting Landing Pages",
    ],
    stats: [{ value: "95+", label: "Avg. PageSpeed" }, { value: "3 wk", label: "Avg. Launch Time" }],
    gradient: "from-brand-600 to-accent-500",
  },
  {
    id: "local-seo",
    icon: MapPin,
    tag: "SEO",
    tagVariant: "accent" as const,
    title: "Local SEO & Google Business Profile",
    description:
      "We get local businesses to the top of Google Maps and local search results. Our proven GBP optimization strategy delivers measurable ranking improvements within 60–90 days.",
    href: "/services/local-seo",
    cta: "Explore Local SEO",
    features: [
      "Google Business Profile Optimization",
      "Google Maps Ranking",
      "Citation Building (50+ directories)",
      "Geo-Tagged Image Strategy",
      "Review & Reputation Management",
      "Local Link Building",
    ],
    stats: [{ value: "60–90", label: "Days to Results" }, { value: "3-Pack", label: "Target Ranking" }],
    gradient: "from-accent-500 to-brand-600",
  },
  {
    id: "ai-solutions",
    icon: Cpu,
    tag: "AI",
    tagVariant: "brand" as const,
    title: "AI Solutions & Integrations",
    description:
      "We integrate AI into your website and business workflows — chatbots, automation, smart lead capture — so your business scales without linearly increasing headcount.",
    href: "/services/ai-solutions",
    cta: "Explore AI Solutions",
    features: [
      "AI Chatbots (OpenAI / Claude)",
      "Lead Qualification Automation",
      "AI-Powered SaaS Builds",
      "Content Generation Workflows",
      "Business Process Automation",
      "Custom AI Integrations",
    ],
    stats: [{ value: "24/7", label: "Lead Capture" }, { value: "3×", label: "Lead Quality" }],
    gradient: "from-brand-600 to-accent-500",
  },
] as const;

/* ─── Cross-sell block ───────────────────────────────────── */
const crossSell = [
  {
    from: "Already have a site?",
    suggestion: "Start with Local SEO to get it ranking.",
    href: "/services/local-seo",
  },
  {
    from: "Need a site first?",
    suggestion: "We'll build it fast and SEO-ready.",
    href: "/services/web-development",
  },
  {
    from: "Want to scale without hiring?",
    suggestion: "AI automation is your answer.",
    href: "/services/ai-solutions",
  },
] as const;

/* ─── Page Component ─────────────────────────────────────── */
export default function ServicesPage() {
  const schemas = [
    createBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
    ]),
    webDevServiceSchema,
    localSeoServiceSchema,
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      {/* ── Page Hero ── */}
      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #297eec 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <span className="eyebrow">What We Offer</span>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Two Powerful Services.{" "}
            <span className="gradient-text">One Growth Partner.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Most agencies specialize in one thing. We bridge expert web development
            with local SEO mastery — so you get traffic, leads, and revenue from
            a single trusted partner.
          </p>
          <Link
            href="/contact#audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
          >
            Get a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="services-list-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2 id="services-list-heading" className="sr-only">Our Services</h2>
          <StaggerContainer className="space-y-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <div className="card p-8 lg:p-10 group hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      {/* Left: Icon + content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center",
                              `bg-gradient-to-br ${service.gradient}`
                            )}
                          >
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                          </div>
                          <Tag variant={service.tagVariant}>{service.tag}</Tag>
                        </div>

                        <h2 className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-3 leading-snug">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-xl">
                          {service.description}
                        </p>

                        {/* Feature list */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6" role="list">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={service.href}
                          className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm",
                            "shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200",
                            `bg-gradient-to-r ${service.gradient}`
                          )}
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right: Stats */}
                      <div className="flex lg:flex-col gap-4 lg:gap-6 flex-shrink-0 lg:min-w-[140px] lg:text-right">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="lg:text-right">
                            <div
                              className={cn(
                                "text-3xl lg:text-4xl font-black font-display tracking-tight leading-none mb-1",
                                "bg-gradient-to-r bg-clip-text text-transparent",
                                service.gradient
                              )}
                            >
                              {stat.value}
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Cross-sell helper ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              eyebrow="Not Sure Where to Start?"
              heading="We'll Point You in the Right Direction"
              subheading="Most clients combine both services. Here's a quick guide based on where you are right now."
              maxWidth="md"
            />
          </RevealWrapper>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {crossSell.map((item) => (
              <StaggerItem key={item.href}>
                <Link
                  href={item.href}
                  className="card card-hover p-6 flex flex-col gap-3 group block"
                >
                  <TrendingUp className="w-5 h-5 text-brand-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.from}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-brand-700 transition-colors">
                    {item.suggestion}
                  </p>
                  <span className="text-xs font-semibold text-brand-600 inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalServiceCTA
        heading="Let's Build Your Growth Engine"
        subheading="Book a free 30-minute strategy call and we'll map the exact services your business needs to rank higher, convert better, and grow faster."
        testimonialQuote="They helped us figure out exactly what we needed — we didn't overspend on services we didn't require. Refreshingly honest."
        testimonialAuthor="Rahim Chowdhury · RC Restaurant, Sylhet"
      />
    </>
  );
}

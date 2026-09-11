// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  MapPin,
  Search,
  Cpu,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, Tag, Eyebrow, GradientText } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem, RevealWrapper } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import {
  createBreadcrumbSchema,
  webDevServiceSchema,
  localSeoServiceSchema,
  technicalSeoServiceSchema,
  aiSolutionsServiceSchema,
} from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Our Services — Local SEO, Technical SEO & Web Development",
  description:
    "LocalLeads connects three core services: web development, technical SEO, and local SEO. One system to get found, rank higher, and generate more leads.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — LocalLeads",
    description:
      "Custom web development, Local SEO, and Technical SEO under one roof. Explore our core services.",
    url: `${SITE_CONFIG.url}/services`,
  },
};

/* ─── Data ───────────────────────────────────────────────── */
const services = [
  {
    id: "web-development",
    icon: Code2,
    tag: "01 · Core Service",
    tagVariant: "brand" as const,
    title: "Custom Web Development",
    description:
      "Fast, scalable, modern web experiences built around your business goals using Next.js, React, TypeScript, and custom functionality.",
    href: "/services/web-development",
    cta: "Explore Web Development",
    features: [
      "Next.js 16 & React",
      "TypeScript & Tailwind CSS",
      "SaaS Product Development",
      "Custom Dashboards",
      "High-Converting Landing Pages",
    ],
    stats: [{ value: "Fast", label: "Performance Focus" }, { value: "Custom", label: "Build Approach" }],
    gradient: "from-brand-600 to-accent-500",
  },
  {
    id: "local-seo",
    icon: MapPin,
    tag: "02 · Core Service",
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
    stats: [{ value: "Local", label: "Search Focus" }, { value: "Maps", label: "Visibility Target" }],
    gradient: "from-accent-500 to-brand-600",
  },
  {
    id: "technical-seo",
    icon: Search,
    tag: "03 · Core Service",
    tagVariant: "brand" as const,
    title: "Technical SEO",
    description:
      "We audit your existing website, report technical issues, implement approved improvements, and validate the result for better crawlability, performance, and search visibility.",
    href: "/services/technical-seo",
    cta: "Explore Technical SEO",
    features: [
      "Technical SEO Audits",
      "Crawlability & Indexability",
      "Metadata & Canonicals",
      "Structured Data & JSON-LD",
      "Core Web Vitals",
      "Approved Code-Level Fixes",
    ],
    stats: [{ value: "Code", label: "Implementation Ready" }, { value: "5-Step", label: "Audit to Validation" }],
    gradient: "from-brand-600 to-accent-500",
  },
] as const;

const additionalCapability = {
  icon: Cpu,
  tag: "Additional Capability",
  title: "AI Solutions & Automation",
  description:
    "Add AI chatbots, workflow automation, AI integrations, and intelligent business workflows when they support your core web and SEO goals.",
  href: "/services/ai-solutions",
  cta: "Explore AI Solutions",
  features: ["AI Chatbots", "Workflow Automation", "AI Integrations", "Custom Business Workflows"],
};

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
    from: "Need a search-ready foundation?",
    suggestion: "Technical SEO connects your site and search strategy.",
    href: "/services/technical-seo",
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
    technicalSeoServiceSchema,
    aiSolutionsServiceSchema,
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
          <Eyebrow>What We Offer</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Get Found. Get Ranked.{" "}
            <GradientText>Get More Leads.</GradientText>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Three connected services: a fast, conversion-ready website, a solid technical foundation, and local search visibility that drives qualified leads.
          </p>
          <Link
            href="/contact#audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
          >
            Get a Free SEO Audit
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

      <section className="py-14 bg-white" aria-labelledby="additional-capability-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="card p-8 lg:p-10 border-brand-100 bg-brand-50/40">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <Tag variant="brand">{additionalCapability.tag}</Tag>
                <h2 id="additional-capability-heading" className="font-display font-bold text-slate-900 text-2xl mt-3 mb-2">{additionalCapability.title}</h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl mb-4">{additionalCapability.description}</p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {additionalCapability.features.map((feature) => <li key={feature} className="px-3 py-1 rounded-full bg-white border border-brand-100 text-xs font-medium text-slate-700">{feature}</li>)}
                </ul>
              </div>
              <Link href={additionalCapability.href} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 whitespace-nowrap">{additionalCapability.cta}<ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-sell helper ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <RevealWrapper>
            <SectionHeader
              eyebrow="Not Sure Where to Start?"
              heading="We'll Point You in the Right Direction"
              subheading="Start with the part of your growth engine that needs the most attention, then expand as your foundations improve."
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

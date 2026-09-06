// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Code2, MapPin, Search, Cpu, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, Tag, Eyebrow, GradientText } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem, RevealWrapper } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { createBreadcrumbSchema, webDevServiceSchema, localSeoServiceSchema, technicalSeoServiceSchema, aiSolutionsServiceSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — Custom Web Development, Local SEO & Technical SEO | Projoy Web Solutions",
  description: "Custom web development, Local SEO, and Technical SEO services for businesses that want a stronger digital foundation and better search visibility. AI automation is available as an additional capability.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Projoy Web Solutions",
    description: "Custom Web Development, Local SEO, Technical SEO, plus AI Solutions & Automation as an additional capability.",
    url: `${SITE_CONFIG.url}/services`,
  },
};

const coreServices = [
  {
    id: "web-development", icon: Code2, tag: "Primary Service", tagVariant: "brand" as const,
    title: "Custom Web Development",
    description: "High-performance websites, SaaS applications, dashboards, and web apps engineered around your business goals, user experience, SEO, and conversion.",
    href: "/services/web-development", cta: "Explore Web Development",
    features: ["Next.js & React", "TypeScript", "SaaS Development", "Custom Web Apps", "Dashboards", "SEO-ready builds"],
    stats: [{ value: "Custom", label: "Build Approach" }, { value: "Full", label: "Code Ownership" }], gradient: "from-brand-600 to-accent-500",
  },
  {
    id: "local-seo", icon: MapPin, tag: "Core SEO Service", tagVariant: "accent" as const,
    title: "Local SEO",
    description: "Improve local search visibility through Google Business Profile optimization, Google Maps strategy, citations, reputation, and local authority building.",
    href: "/services/local-seo", cta: "Explore Local SEO",
    features: ["GBP Optimization", "Google Maps", "Citation Building", "Reputation", "Local Links", "Rank Tracking"],
    stats: [{ value: "Local", label: "Search Focus" }, { value: "Maps", label: "Visibility Target" }], gradient: "from-accent-500 to-brand-600",
  },
  {
    id: "technical-seo", icon: Search, tag: "Core SEO Service", tagVariant: "brand" as const,
    title: "Technical SEO",
    description: "Find and fix technical issues affecting crawling, indexing, performance, structured data, internal linking, JavaScript rendering, and search readiness.",
    href: "/services/technical-seo", cta: "Explore Technical SEO",
    features: ["Technical Audits", "Crawl & Indexability", "Core Web Vitals", "Structured Data", "JavaScript SEO", "Implementation"],
    stats: [{ value: "Audit", label: "Find Issues" }, { value: "Fix", label: "Implement Changes" }], gradient: "from-brand-600 to-accent-500",
  },
] as const;

const additionalCapability = {
  icon: Cpu, tag: "Additional Capability", title: "AI Solutions & Automation",
  description: "Add practical AI to your website and business workflows when it supports the project — including chatbots, lead qualification, workflow automation, and custom AI integrations.",
  href: "/services/ai-solutions",
  features: ["AI Chatbots", "Workflow Automation", "Smart Lead Capture", "Custom AI Integrations"],
};

const crossSell = [
  { from: "Need a new digital foundation?", suggestion: "Start with Custom Web Development.", href: "/services/web-development" },
  { from: "Already have a business website?", suggestion: "Use Local SEO to improve local visibility.", href: "/services/local-seo" },
  { from: "Traffic but technical problems?", suggestion: "Start with a Technical SEO audit.", href: "/services/technical-seo" },
] as const;

export default function ServicesPage() {
  const schemas = [
    createBreadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]),
    webDevServiceSchema, localSeoServiceSchema, technicalSeoServiceSchema, aiSolutionsServiceSchema,
  ];
  return (
    <>
      <SchemaMarkup schema={schemas} />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #297eec 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.35 }} aria-hidden="true" />
        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Eyebrow>What We Offer</Eyebrow>
          <h1 className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            Three Core Services. <GradientText>One Growth Partner.</GradientText>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">Custom Web Development is our primary service, supported by Local SEO and Technical SEO. AI Solutions &amp; Automation is available as an additional capability when it fits your goals.</p>
          <Link href="/contact#audit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200">Get a Free Strategy Call <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="section-padding bg-slate-50" aria-labelledby="services-list-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2 id="services-list-heading" className="sr-only">Core Services</h2>
          <StaggerContainer className="space-y-6">
            {coreServices.map((service) => { const Icon = service.icon; return <StaggerItem key={service.id}><div className="card p-8 lg:p-10 group hover:shadow-card-hover transition-all duration-300"><div className="flex flex-col lg:flex-row lg:items-start gap-8"><div className="flex-1"><div className="flex items-center gap-3 mb-4"><div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", `bg-gradient-to-br ${service.gradient}`)}><Icon className="w-6 h-6 text-white" strokeWidth={1.75} /></div><Tag variant={service.tagVariant}>{service.tag}</Tag></div><h2 className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-3 leading-snug">{service.title}</h2><p className="text-slate-600 leading-relaxed mb-6 max-w-xl">{service.description}</p><ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6" role="list">{service.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-success flex-shrink-0" />{f}</li>)}</ul><Link href={service.href} className={cn("inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200", `bg-gradient-to-r ${service.gradient}`)}>{service.cta}<ArrowRight className="w-4 h-4" /></Link></div><div className="flex lg:flex-col gap-4 lg:gap-6 flex-shrink-0 lg:min-w-[140px]">{service.stats.map((stat) => <div key={stat.label} className="lg:text-right"><div className={cn("text-3xl lg:text-4xl font-black font-display tracking-tight leading-none mb-1 bg-gradient-to-r bg-clip-text text-transparent", service.gradient)}>{stat.value}</div><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{stat.label}</p></div>)}</div></div></div></StaggerItem>; })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="additional-capability-heading">
        <div className="container mx-auto max-w-[900px]"><RevealWrapper><div className="card p-8 lg:p-10 border border-brand-100 bg-brand-50/30"><div className="flex flex-col md:flex-row gap-6 md:items-start"><div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-600 to-accent-500 flex-shrink-0"><Cpu className="w-6 h-6 text-white" /></div><div className="flex-1"><Tag variant="brand">{additionalCapability.tag}</Tag><h2 id="additional-capability-heading" className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mt-3 mb-3">{additionalCapability.title}</h2><p className="text-slate-600 leading-relaxed mb-5">{additionalCapability.description}</p><ul className="grid sm:grid-cols-2 gap-2 mb-6">{additionalCapability.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-success" />{f}</li>)}</ul><Link href={additionalCapability.href} className="inline-flex items-center gap-2 text-brand-700 font-bold">Explore AI Solutions <ArrowRight className="w-4 h-4" /></Link></div></div></div></RevealWrapper></div>
      </section>

      <section className="py-14 bg-white"><div className="container mx-auto max-w-[1200px]"><RevealWrapper><SectionHeader eyebrow="Not Sure Where to Start?" heading="We'll Point You in the Right Direction" subheading="Start with the service that matches your current growth constraint. We can combine services when the project requires it." maxWidth="md" /></RevealWrapper><StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">{crossSell.map((item) => <StaggerItem key={item.href}><Link href={item.href} className="card card-hover p-6 flex flex-col gap-3 group block"><TrendingUp className="w-5 h-5 text-brand-500" /><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.from}</p><p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-brand-700 transition-colors">{item.suggestion}</p><span className="text-xs font-semibold text-brand-600 inline-flex items-center gap-1 mt-auto">Learn more <ArrowRight className="w-3 h-3" /></span></Link></StaggerItem>)}</StaggerContainer></div></section>
      <FinalServiceCTA heading="Let's Build Your Growth Engine" subheading="Book a free 30-minute strategy call and we'll map the exact services your business needs to build, optimize, get found, and grow." testimonialQuote="They helped us figure out exactly what we needed — we didn't overspend on services we didn't require. Refreshingly honest." testimonialAuthor="Rahim Chowdhury · RC Restaurant, Sylhet" />
    </>
  );
}

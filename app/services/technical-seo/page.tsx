import type { Metadata } from "next";
import Link from "next/link";
import { Search, FileText, CheckCircle2, Code2, Gauge, ShieldCheck, ArrowRight } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { SectionHeader, GradientText } from "@/components/shared/Typography";
import { createBreadcrumbSchema, createFaqSchema, technicalSeoServiceSchema, ORGANIZATION_ID } from "@/lib/schemas";
import { IMAGE_ASSETS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technical SEO Services — Audits, Fixes & Search-Ready Architecture | Projoy Web Solutions",
  description: "Technical SEO audits and implementation for crawlability, indexability, performance, structured data, JavaScript SEO, internal linking, and search-ready websites.",
  alternates: { canonical: "/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services — Projoy Web Solutions",
    description: "Find technical SEO problems, get a clear implementation plan, approve the changes, and let us fix and validate them.",
    url: `${SITE_CONFIG.url}/services/technical-seo`,
  },
};

const benefits = [
  { icon: <Search strokeWidth={1.75} />, title: "Crawlability & Indexability", description: "We identify crawl barriers, indexing problems, canonical conflicts, robots directives, sitemap issues, redirects, and duplicate URL patterns that can prevent search engines from understanding your site.", highlight: "Search-ready architecture" },
  { icon: <Gauge strokeWidth={1.75} />, title: "Performance & Core Web Vitals", description: "We review loading performance, rendering behavior, JavaScript execution, image delivery, layout stability, and other technical factors that affect user experience and search readiness.", highlight: "Performance-focused fixes" },
  { icon: <Code2 strokeWidth={1.75} />, title: "JavaScript & Rendering SEO", description: "For modern React and Next.js sites, we inspect rendering, metadata generation, internal links, hydration-sensitive content, and other implementation details that affect discoverability.", highlight: "Code-level SEO expertise" },
  { icon: <FileText strokeWidth={1.75} />, title: "Structured Data & Metadata", description: "We validate title tags, descriptions, canonicals, Open Graph, JSON-LD, breadcrumbs, and relevant structured data so important pages communicate their purpose clearly.", highlight: "Clean technical signals" },
  { icon: <ShieldCheck strokeWidth={1.75} />, title: "Technical Risk Reduction", description: "We prioritize issues by impact and effort, explain what should change, and keep implementation controlled so SEO fixes do not create avoidable regressions.", highlight: "Approval before implementation" },
  { icon: <CheckCircle2 strokeWidth={1.75} />, title: "Validation After Fixes", description: "After approved changes are implemented, we re-check the affected technical areas and document what was fixed, what was validated, and what remains.", highlight: "Evidence-based validation" },
];

const processPhases = [
  { phase: "Phase 1", title: "Audit", timeline: "Step 1", description: "We crawl and review the website across technical SEO areas including crawlability, indexability, metadata, canonicals, sitemap, robots.txt, structured data, internal linking, redirects, performance, mobile SEO, and JavaScript rendering.", deliverables: ["Technical Crawl", "Issue Inventory", "Priority Assessment"], icon: <Search strokeWidth={1.75} /> },
  { phase: "Phase 2", title: "Detailed Report", timeline: "Step 2", description: "You receive a prioritized report explaining the issue, affected URLs or systems, why it matters, recommended resolution, and implementation priority.", deliverables: ["Detailed Findings", "Impact & Priority", "Implementation Recommendations"], icon: <FileText strokeWidth={1.75} /> },
  { phase: "Phase 3", title: "Client Approval", timeline: "Step 3", description: "We review the recommendations with you and confirm the approved scope. No technical changes are implemented without client approval.", deliverables: ["Scope Confirmation", "Approved Fix List", "Implementation Plan"], icon: <ShieldCheck strokeWidth={1.75} /> },
  { phase: "Phase 4", title: "Implementation", timeline: "Step 4", description: "We implement the approved technical SEO changes at the appropriate code, configuration, or content-architecture level while keeping the existing design and business logic intact.", deliverables: ["Approved Fixes", "Code-Level Changes", "Technical Documentation"], icon: <Code2 strokeWidth={1.75} /> },
  { phase: "Phase 5", title: "Validation", timeline: "Step 5", description: "We validate the implemented changes, re-check affected URLs and technical signals, and provide a clear completion summary with any remaining recommendations.", deliverables: ["Post-Fix Checks", "Validation Summary", "Remaining Actions"], icon: <CheckCircle2 strokeWidth={1.75} /> },
];

const faqs = [
  { q: "What does a Technical SEO audit include?", a: "The scope can include crawlability, indexability, robots.txt, XML sitemaps, canonical URLs, metadata, redirects, duplicate content, structured data, internal linking, mobile SEO, Core Web Vitals, JavaScript rendering, Open Graph, and other technical factors relevant to the website." },
  { q: "Do you only provide a report, or can you fix the issues?", a: "We can do both. The workflow is Review → Approve → Implement. After the audit and report, approved fixes can be implemented at the appropriate technical level." },
  { q: "Will you make changes without approval?", a: "No. Recommendations are reviewed first, and no technical changes are implemented without client approval." },
  { q: "Can you work on Next.js and React websites?", a: "Yes. Modern JavaScript applications are part of our technical development expertise, so we can evaluate rendering, metadata, routing, internal linking, structured data, performance, and other SEO considerations in React and Next.js projects." },
  { q: "Is Technical SEO the same as Local SEO?", a: "No. Technical SEO focuses on the website's technical accessibility, architecture, rendering, indexing, and search readiness. Local SEO focuses on geographic visibility, Google Business Profile, Maps, citations, reputation, and local authority. They can work together when a local business needs both." },
];

export default function TechnicalSeoPage() {
  const breadcrumbSchema = createBreadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Technical SEO", href: "/services/technical-seo" }]);
  const faqSchema = createFaqSchema(faqs);
  const serviceSchema = { ...technicalSeoServiceSchema, provider: { "@id": ORGANIZATION_ID } };
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: "Technical SEO", href: "/services/technical-seo" }]} />
      <ServiceHero
        eyebrow="Technical SEO Services"
        heading={<>Fix the Technical Issues Holding Your Search Visibility Back <GradientText>at the Code Level</GradientText></>}
        backgroundImage={IMAGE_ASSETS.services.technicalSeo}
        backgroundImageAlt="Technical SEO service visual"
        subheading="We audit the technical foundation behind your search visibility, explain what needs to change, get your approval, implement the fixes, and validate the result."
        primaryCTA={{ label: "Get a Technical SEO Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "Explore Core Services", href: "/services" }}
        trustPoints={["Audit before implementation", "Client approval required", "Code-level implementation", "Post-fix validation"]}
        stats={[{ value: "Audit", label: "Find Issues" }, { value: "Review", label: "Explain Findings" }, { value: "Fix", label: "Implement Approved Changes" }, { value: "Validate", label: "Re-check Results" }]}
        accentColor="brand"
      />

      <BenefitsSection eyebrow="What We Fix" heading={<>Technical SEO Built for <GradientText>Real Websites</GradientText></>} subheading="Technical SEO is more than a checklist. We connect search-engine requirements with the actual architecture and implementation of your website." benefits={benefits} />

      <section className="section-padding bg-white"><div className="container mx-auto max-w-[1000px]"><div className="card p-8 lg:p-12 text-center"><p className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-3">Our Differentiator</p><h2 className="font-display font-extrabold text-slate-900 text-3xl lg:text-4xl mb-4">We Don’t Just Find SEO Problems — We Can Fix Them.</h2><p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">You get a technical review from a development-focused team. Once you approve the recommendations, we can implement the relevant fixes instead of leaving you with a report and a list of tasks.</p><div className="mt-7 inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800"><span>Review</span><ArrowRight className="w-4 h-4 text-brand-600" /><span>Approve</span><ArrowRight className="w-4 h-4 text-brand-600" /><span>Implement</span></div></div></div></section>

      <ProcessTimeline eyebrow="Our Technical SEO Workflow" heading={<>Review → Approve → <GradientText>Implement → Validate</GradientText></>} subheading="Every technical change follows a controlled five-step workflow. No changes are made before the scope is approved." phases={processPhases} accentColor="brand" background="slate" ctaLabel="Start a Technical SEO Audit" ctaHref="/contact#audit" />

      <section className="section-padding bg-white"><div className="container mx-auto max-w-[1100px]"><SectionHeader eyebrow="Technical SEO Scope" heading={<>A Practical <GradientText>Search-Ready Checklist</GradientText></>} subheading="Depending on the project, we can assess and address the technical areas below."/><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{["Crawlability & indexability", "Metadata & canonical URLs", "XML sitemap & robots.txt", "Structured data / JSON-LD", "Internal linking & architecture", "Redirects & duplicate URLs", "Core Web Vitals & performance", "Mobile SEO", "JavaScript SEO & rendering", "Open Graph & social metadata", "Status codes & broken links", "Technical implementation QA"].map((item) => <div key={item} className="card p-5 flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5"/><span className="text-sm font-semibold text-slate-700">{item}</span></div>)}</div></div></section>

      <FAQSection eyebrow="Technical SEO FAQs" heading={<>Questions, <GradientText>Answered</GradientText></>} subheading="A few common questions about our audit and implementation workflow." faqs={faqs} />
      <FinalServiceCTA heading="Make Your Website Easier to Crawl, Understand & Rank" subheading="Start with a Technical SEO audit and get a prioritized path from finding the problems to implementing and validating the approved fixes." testimonialQuote="A good technical foundation makes every other SEO effort easier to measure and improve." testimonialAuthor="Projoy Web Solutions" />
    </>
  );
}

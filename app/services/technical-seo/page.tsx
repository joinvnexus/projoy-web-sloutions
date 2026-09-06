import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  FileText,
  CheckCircle,
  Code2,
  Gauge,
  Route,
  ShieldCheck,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { GradientText, SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  technicalSeoServiceSchema,
} from "@/lib/schemas";
import { IMAGE_ASSETS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technical SEO Services & Search-Ready Development | Projoy Web Solutions",
  description:
    "Technical SEO audits, detailed reports, approved code-level implementation, and validation for crawlability, performance, metadata, structured data, and search visibility.",
  alternates: { canonical: "/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services | Projoy Web Solutions",
    description:
      "Audit your website, review the report, approve the plan, and get technical SEO improvements implemented and validated.",
    url: `${SITE_CONFIG.url}/services/technical-seo`,
  },
};

const benefits = [
  {
    icon: <Search strokeWidth={1.75} />,
    title: "Crawlability and Indexability",
    description:
      "We inspect robots.txt, XML sitemaps, canonical URLs, redirects, status codes, internal links, and rendering paths so search engines can discover and understand the right pages.",
    highlight: "Technical foundation review",
  },
  {
    icon: <FileText strokeWidth={1.75} />,
    title: "Metadata and Structured Data",
    description:
      "We review titles, descriptions, Open Graph, JSON-LD, LocalBusiness, Service, and Breadcrumb schema for accuracy, consistency, and useful search presentation.",
    highlight: "Search-ready page signals",
  },
  {
    icon: <Gauge strokeWidth={1.75} />,
    title: "Performance and Mobile SEO",
    description:
      "We identify performance and Core Web Vitals opportunities across mobile and desktop, including JavaScript weight, rendering behavior, and user experience issues.",
    highlight: "Performance-aware recommendations",
  },
  {
    icon: <Code2 strokeWidth={1.75} />,
    title: "Code-Level Implementation",
    description:
      "After approval, we can implement the agreed improvements directly in the existing project, especially for Next.js, React, and TypeScript codebases.",
    highlight: "We can fix what we find",
  },
  {
    icon: <Route strokeWidth={1.75} />,
    title: "URL and Internal Linking Review",
    description:
      "We map affected pages, assess URL structure and duplicate content, and recommend internal links that make important content easier to reach.",
    highlight: "Clear page-level priorities",
  },
  {
    icon: <ShieldCheck strokeWidth={1.75} />,
    title: "Validation and Final Summary",
    description:
      "Every approved change is checked after implementation, with a final summary covering metadata, indexability, structured data, redirects, and performance-related work.",
    highlight: "Evidence after implementation",
  },
];

const processPhases = [
  {
    phase: "Step 1",
    title: "Audit",
    timeline: "Discovery",
    description:
      "We analyze the existing website or project across technical SEO, crawlability, indexability, metadata, canonicals, sitemap, robots.txt, structured data, internal links, redirects, duplicate content, mobile SEO, performance, Core Web Vitals, JavaScript SEO, and Google Search Console-related issues.",
    deliverables: ["Technical SEO Review", "Affected Page Inventory", "Rendering Review", "Initial Findings"],
    icon: <Search strokeWidth={1.75} />,
  },
  {
    phase: "Step 2",
    title: "Detailed Report",
    timeline: "Prioritized findings",
    description:
      "You receive a clear report explaining what exists, what is missing or incorrect, which pages are affected, the recommended solution, priority, and implementation approach.",
    deliverables: ["Critical", "High", "Medium", "Low", "Recommended Solutions"],
    icon: <FileText strokeWidth={1.75} />,
  },
  {
    phase: "Step 3",
    title: "Client Approval",
    timeline: "Review first",
    description:
      "You review the findings and proposed scope. No changes are implemented without client approval. We confirm the approved priorities, constraints, and implementation plan before touching the project.",
    deliverables: ["Review", "Approve", "Implementation Scope", "Clear Quote"],
    icon: <CheckCircle strokeWidth={1.75} />,
  },
  {
    phase: "Step 4",
    title: "Implementation",
    timeline: "Approved work",
    description:
      "We implement the approved technical SEO improvements directly within the existing website or project. This can include code-level work in Next.js, React, and TypeScript, without assuming every project uses those technologies.",
    deliverables: ["Approved Fixes", "Metadata Updates", "Schema Improvements", "Redirects and Links"],
    icon: <Code2 strokeWidth={1.75} />,
  },
  {
    phase: "Step 5",
    title: "Validation",
    timeline: "Final checks",
    description:
      "We validate metadata, canonicals, sitemap, robots.txt, structured data, internal linking, indexability, mobile SEO, redirects, and performance-related improvements, then provide a final implementation summary.",
    deliverables: ["Validation Results", "Before and After Notes", "Remaining Risks", "Final Summary"],
    icon: <Gauge strokeWidth={1.75} />,
  },
];

const faqs = [
  {
    q: "What does a Technical SEO audit include?",
    a: "We review crawlability, indexability, metadata, canonical URLs, XML sitemap, robots.txt, structured data and JSON-LD, Open Graph, internal linking, URL structure, redirects, 404 issues, duplicate content, mobile SEO, performance, Core Web Vitals, JavaScript SEO, rendering, and relevant Google Search Console issues.",
  },
  {
    q: "Do you implement the fixes or only provide a report?",
    a: "We can do both. You receive a detailed report first, and after client approval we can implement the approved technical SEO improvements directly within the existing website or project.",
  },
  {
    q: "Do you only work with Next.js and React?",
    a: "No. We can audit websites across different stacks. Our code-level implementation experience is especially useful for Next.js, React, and TypeScript projects, but the technology fit is assessed during the audit.",
  },
  {
    q: "What priorities will appear in the report?",
    a: "Findings are grouped as Critical, High, Medium, or Low based on impact, affected pages, technical risk, and implementation effort. Each finding includes a recommended solution and implementation approach.",
  },
  {
    q: "How do you validate the work after implementation?",
    a: "We recheck the approved areas, including metadata, canonicals, sitemap, robots.txt, JSON-LD, internal linking, indexability, mobile SEO, redirects, and performance-related improvements. You receive a final summary of what was implemented.",
  },
];

export default function TechnicalSEOPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Technical SEO", href: "/services/technical-seo" },
  ]);
  const faqSchema = createFaqSchema(faqs);

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema, technicalSeoServiceSchema]} />
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Technical SEO", href: "/services/technical-seo" },
        ]}
      />

      <ServiceHero
        eyebrow="Technical SEO Services"
        heading={
          <>
            Technical SEO for Better Crawlability, Performance <GradientText>&amp; Search Visibility</GradientText>
          </>
        }
        backgroundImage={IMAGE_ASSETS.services.technicalSeo}
        backgroundImageAlt="Technical SEO and search-ready web development workspace"
        imagePriority
        subheading="We audit your existing website, identify technical SEO issues, provide a detailed report, and implement approved improvements directly within the existing project."
        primaryCTA={{ label: "Request a Technical SEO Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "See the Process", href: "#process" }}
        trustPoints={["Detailed prioritized report", "No implementation without approval", "Code-level implementation available", "Final validation summary"]}
        stats={[{ value: "5", label: "Clear Steps" }, { value: "Code", label: "Fixes Available" }, { value: "SEO", label: "Search-Ready Focus" }, { value: "Clear", label: "Priority Report" }]}
        accentColor="brand"
      />

      <section className="section-padding bg-slate-900" aria-labelledby="differentiator-heading">
        <div className="container mx-auto max-w-[900px] text-center">
          <p className="eyebrow text-accent-400 before:from-accent-400">The Projoy Difference</p>
          <h2 id="differentiator-heading" className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
            We Don&apos;t Just Find SEO Problems — <span className="text-accent-400">We Can Fix Them.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">Audit the existing project. Report the issues. Get approval. Implement the approved technical SEO improvements. Validate the result.</p>
        </div>
      </section>

      <BenefitsSection
        eyebrow="What We Review and Improve"
        heading={<>Technical foundations that make your site <GradientText>search-ready</GradientText></>}
        subheading="From rendering and indexability to structured data and performance, we connect technical decisions to search visibility and user experience."
        benefits={benefits}
        columns={3}
        variant="cards"
        accentColor="brand"
        background="slate"
      />

      <div id="process">
        <ProcessTimeline
          eyebrow="Audit to Validation"
          heading="Review → Approve → Implement"
          subheading="A controlled workflow keeps recommendations clear and ensures implementation matches the work you approved."
          phases={processPhases}
          accentColor="brand"
          background="white"
          ctaLabel="Start with a Technical SEO Audit"
        />
      </div>

      <section className="section-padding bg-slate-50" aria-labelledby="deliverables-heading">
        <div className="container mx-auto max-w-[1000px]">
          <SectionHeader eyebrow="Your Deliverables" heading="A practical report and a verifiable implementation record" subheading="You will know what was found, what was approved, what changed, and what still needs attention." id="deliverables-heading" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Technical SEO audit findings", "Page-level issue inventory", "Critical, High, Medium, and Low priorities", "Recommended solutions and implementation approach", "Approved code-level improvements", "Final validation summary"].map((item) => (
              <StaggerItem key={item}>
                <div className="card p-5 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-sm text-slate-500 mt-8">Need the broader growth picture? <Link href="/services/web-development" className="font-semibold text-brand-600 hover:text-brand-700">Explore Custom Web Development</Link> or <Link href="/services/local-seo" className="font-semibold text-brand-600 hover:text-brand-700">Local SEO</Link>.</p>
        </div>
      </section>

      <FAQSection eyebrow="Technical SEO FAQ" heading="Common questions about the audit and implementation process" faqs={faqs} accentColor="brand" background="white" columns={1} />
      <FinalServiceCTA heading="Make Your Website Easier to Crawl, Understand, and Find" subheading="Request a Technical SEO audit and receive a clear path from findings to approved implementation and validation." primaryCTA={{ label: "Request a Technical SEO Audit", href: "/contact#audit" }} accentColor="brand" />
    </>
  );
}

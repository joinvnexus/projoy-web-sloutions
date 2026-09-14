import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  FileText,
  CheckCircle,
  Code2,
  Gauge,
  ShieldCheck,
  FileSearch,
  Globe,
  Zap,
  BarChart3,
  FileJson,
  GitBranch,
  Monitor,
  Wrench,
  ArrowRight,
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
  title: "Technical SEO Services & Search-Ready Development | LocalLeads",
  description:
    "Technical SEO audits, detailed reports, approved code-level implementation, and validation for crawlability, performance, metadata, structured data, and search visibility.",
  alternates: { canonical: "/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services | LocalLeads",
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
    // href: "/services/technical-seo/crawl-indexation",
  },
  {
    icon: <FileJson strokeWidth={1.75} />,
    title: "Metadata and Structured Data",
    description:
      "We review titles, descriptions, Open Graph, JSON-LD, LocalBusiness, Service, and Breadcrumb schema for accuracy, consistency, and useful search presentation.",
    highlight: "Search-ready page signals",
    // href: "/services/technical-seo/schema-markup",
  },
  {
    icon: <Gauge strokeWidth={1.75} />,
    title: "Performance and Mobile SEO",
    description:
      "We identify performance and Core Web Vitals opportunities across mobile and desktop, including JavaScript weight, rendering behavior, and user experience issues.",
    highlight: "Performance-aware recommendations",
    // href: "/services/technical-seo/website-performance",
  },
  {
    icon: <Code2 strokeWidth={1.75} />,
    title: "Code-Level Implementation",
    description:
      "After approval, we can implement the agreed improvements directly in the existing project, especially for Next.js, React, and TypeScript codebases.",
    highlight: "We can fix what we find",
    // href: "/services/technical-seo/technical-seo-fixes",
  },
  {
    icon: <GitBranch strokeWidth={1.75} />,
    title: "URL and Internal Linking Review",
    description:
      "We map affected pages, assess URL structure and duplicate content, and recommend internal links that make important content easier to reach.",
    highlight: "Clear page-level priorities",
    // href: "/services/technical-seo/internal-linking",
  },
  {
    icon: <ShieldCheck strokeWidth={1.75} />,
    title: "Validation and Final Summary",
    description:
      "Every approved change is checked after implementation, with a final summary covering metadata, indexability, structured data, redirects, and performance-related work.",
    highlight: "Evidence after implementation",
    // href: "/services/technical-seo/technical-seo-audit",
  },
];

const subServices = [
  {
    icon: <FileSearch strokeWidth={1.75} />,
    title: "Technical SEO Audit",
    description:
      "Comprehensive technical SEO audit covering crawlability, indexation, performance, metadata, and structured data. Get a prioritized action plan.",
    tags: ["Audit", "Prioritized", "Action Plan"],
    href: "/services/technical-seo/technical-seo-audit",
  },
  {
    icon: <Globe strokeWidth={1.75} />,
    title: "Crawl & Indexation",
    description:
      "Fix crawlability and indexation issues so search engines can discover, crawl, and index your most important pages. Robots.txt, sitemaps, canonicals, and redirects.",
    tags: ["Crawl", "Indexation", "Robots.txt"],
    href: "/services/technical-seo/crawl-indexation",
  },
  {
    icon: <Zap strokeWidth={1.75} />,
    title: "Core Web Vitals",
    description:
      "Core Web Vitals optimization for better search rankings and user experience. Fix LCP, INP, and CLS issues with measurable improvements.",
    tags: ["LCP", "INP", "CLS"],
    href: "/services/technical-seo/core-web-vitals",
  },
  {
    icon: <BarChart3 strokeWidth={1.75} />,
    title: "Website Performance",
    description:
      "Systematic performance optimization for better user experience and search visibility. Image optimization, caching, code splitting, and measurable load time improvements.",
    tags: ["Speed", "Optimization", "Core Web Vitals"],
    href: "/services/technical-seo/website-performance",
  },
  {
    icon: <FileText strokeWidth={1.75} />,
    title: "Technical On-Page SEO",
    description:
      "On-page technical SEO fixes: title tags, meta descriptions, headers, internal linking, and content structure. Optimize every page for search visibility.",
    tags: ["Title Tags", "Meta", "Headers"],
    href: "/services/technical-seo/technical-on-page-seo",
  },
  {
    icon: <FileJson strokeWidth={1.75} />,
    title: "Schema Markup",
    description:
      "Structured data implementation for better search visibility. LocalBusiness, Service, FAQ, Breadcrumb, and custom schema markup.",
    tags: ["JSON-LD", "Rich Results", "Schema"],
    href: "/services/technical-seo/schema-markup",
  },
  {
    icon: <GitBranch strokeWidth={1.75} />,
    title: "Internal Linking",
    description:
      "Strategic internal linking to pass authority, improve crawlability, and help users navigate. Link audits, architecture improvements, and anchor text optimization.",
    tags: ["Authority", "Crawlability", "Navigation"],
    href: "/services/technical-seo/internal-linking",
  },
  {
    icon: <Monitor strokeWidth={1.75} />,
    title: "Google Search Console",
    description:
      "Google Search Console setup, monitoring, and action plans. Index coverage, manual actions, performance metrics, and ongoing technical SEO insights.",
    tags: ["GSC", "Monitoring", "Insights"],
    href: "/services/technical-seo/google-search-console",
  },
  {
    icon: <FileText strokeWidth={1.75} />,
    title: "Sitemap & Robots.txt",
    description:
      "XML sitemap creation and robots.txt optimization. Help search engines discover and crawl the right pages while blocking admin and duplicate content.",
    tags: ["XML Sitemap", "Robots.txt", "Crawl"],
    href: "/services/technical-seo/sitemap-robots-txt",
  },
  {
    icon: <Wrench strokeWidth={1.75} />,
    title: "Technical SEO Fixes",
    description:
      "Approved technical SEO implementation: metadata updates, redirects, schema improvements, and code-level fixes for Next.js, React, and TypeScript sites.",
    tags: ["Implementation", "Code-Level", "Fixes"],
    href: "/services/technical-seo/technical-seo-fixes",
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
          <p className="eyebrow text-accent-400 before:from-accent-400">The LocalLeads Difference</p>
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

      {/* Sub-services */}
      <section className="section-padding bg-white" aria-labelledby="sub-services-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Our Technical SEO Services"
            heading="Technical SEO Services We Offer"
            subheading="Every technical SEO service below is a dedicated offering with its own page, process, and deliverables."
            id="sub-services-heading"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="card card-hover p-7 group flex flex-col h-full block"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    <span className="text-brand-600 w-5 h-5">{service.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:gap-2.5 transition-all mt-auto">
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

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

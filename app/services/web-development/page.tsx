// app/services/web-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Smartphone,
  Search,
  Bot,
  Lock,
  BarChart3,
  Code2,
  Layers,
  Globe,
  LayoutDashboard,
  Rocket,
  FileCode2,
  ArrowRight,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { SectionHeader, GradientText } from "@/components/shared/Typography";
import {
  RevealWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Web Development Services — Next.js, React & AI | Projoy Web Solutions",
  description:
    "Custom Next.js 15 web development, SaaS builds, AI integrations, and high-converting landing pages. 95+ PageSpeed scores guaranteed. Free consultation available.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Development Services — Next.js, React & AI | Projoy Web Solutions",
    description:
      "We build blazing-fast, SEO-optimized websites and web applications with Next.js 15 and React. Designed to convert, built to scale.",
    url: `${SITE_CONFIG.url}/services/web-development`,
  },
};

/* ─── Page Data ──────────────────────────────────────────── */
const benefits = [
  {
    icon: <Zap strokeWidth={1.75} />,
    title: "Blazing-Fast Performance",
    description:
      "Next.js SSR and SSG mean sub-2-second load times and 95+ Core Web Vitals scores. Google rewards speed with rankings — and users reward it with conversions.",
    highlight: "95+ avg. PageSpeed score",
  },
  {
    icon: <Smartphone strokeWidth={1.75} />,
    title: "Mobile-First by Default",
    description:
      "Over 70% of your traffic arrives on mobile. We design and build mobile-first, then scale up — ensuring a flawless experience across every device and screen size.",
    highlight: "Tested on 12+ devices",
  },
  {
    icon: <Search strokeWidth={1.75} />,
    title: "SEO-Ready Architecture",
    description:
      "Clean semantic HTML, structured data (JSON-LD), meta configuration, canonical URLs, and Open Graph — all set up correctly from day one, not bolted on later.",
    highlight: "Schema + meta included",
  },
  {
    icon: <Bot strokeWidth={1.75} />,
    title: "AI-Powered Features",
    description:
      "We integrate OpenAI, Anthropic Claude, and custom AI into your site — chatbots that qualify leads, content workflows, smart forms, and intelligent automation.",
    highlight: "GPT-4 & Claude APIs",
  },
  {
    icon: <Lock strokeWidth={1.75} />,
    title: "Secure & Production-Grade",
    description:
      "Best practices for authentication, data handling, environment secrets, and deployment. We build as if your users' data matters — because it does.",
    highlight: "HTTPS, CSP & auth hardened",
  },
  {
    icon: <BarChart3 strokeWidth={1.75} />,
    title: "Analytics & Conversion Tracking",
    description:
      "GA4, Google Tag Manager, Search Console, Hotjar or Microsoft Clarity — all configured. You'll know exactly which pages convert, which don't, and why.",
    highlight: "Full analytics stack setup",
  },
];

const subServices = [
  {
    icon: <Globe strokeWidth={1.75} />,
    title: "Next.js Website Development",
    description:
      "Full custom websites built on Next.js 15 — the framework powering some of the world's fastest sites. Ideal for businesses who need a marketing presence that ranks and converts.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    href: "/services/web-development/nextjs-development",
  },
  {
    icon: <Layers strokeWidth={1.75} />,
    title: "SaaS Application Development",
    description:
      "End-to-end SaaS builds — auth, dashboard, subscription billing (Stripe), API integrations. From validated idea to production-ready product in weeks.",
    tags: ["Auth", "Stripe", "Prisma", "API"],
    href: "/services/web-development/saas-development",
  },
  {
    icon: <Rocket strokeWidth={1.75} />,
    title: "High-Converting Landing Pages",
    description:
      "CRO-optimized landing pages for ad campaigns, product launches, and lead generation — built to turn cold traffic into warm leads. Every element is A/B tested.",
    tags: ["CRO", "A/B Testing", "Lead Gen"],
    href: "/services/web-development/landing-pages",
  },
  {
    icon: <LayoutDashboard strokeWidth={1.75} />,
    title: "Custom Dashboard Development",
    description:
      "Internal tools, client portals, admin panels — React and Next.js powered dashboards that display real-time data in a clean, intuitive UI.",
    tags: ["React", "Charts", "Real-time"],
    href: "/services/web-development/custom-dashboards",
  },
  {
    icon: <Bot strokeWidth={1.75} />,
    title: "AI Integrations",
    description:
      "OpenAI GPT-4, Anthropic Claude, and Gemini API integrations into your existing or new website — chatbots, content generation, smart lead capture, and AI automation.",
    tags: ["OpenAI", "Claude API", "Langchain"],
    href: "/services/web-development/ai-integrations",
  },
  {
    icon: <FileCode2 strokeWidth={1.75} />,
    title: "Website Redesign & Migration",
    description:
      "Transform your slow WordPress or legacy site into a blazing-fast Next.js application. We handle the full migration — content, SEO signals, redirects, and performance.",
    tags: ["Migration", "WordPress", "Performance"],
    href: "/services/web-development",
  },
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Scoping",
    timeline: "Week 1",
    description:
      "We start with a structured discovery call to understand your business goals, target audience, technical requirements, and competitive landscape. No assumptions — just clarity.",
    deliverables: [
      "Project Brief Document",
      "Technical Spec",
      "Competitor Audit",
      "Timeline & Quote",
    ],
    icon: <Search strokeWidth={1.75} />,
  },
  {
    phase: "Phase 2",
    title: "Design & Wireframing",
    timeline: "Week 1–2",
    description:
      "We create Figma wireframes, then move to high-fidelity UI design using your brand guidelines or our design system. You approve every screen before a single line of code is written.",
    deliverables: [
      "Figma Wireframes",
      "UI Design (all screens)",
      "Component Library",
      "Design Tokens",
    ],
    icon: <Layers strokeWidth={1.75} />,
  },
  {
    phase: "Phase 3",
    title: "Development & Integration",
    timeline: "Week 2–5",
    description:
      "Next.js scaffold, component build-out, CMS setup, API integrations, and third-party service connections. You get weekly progress updates and access to a live staging environment.",
    deliverables: [
      "Staging Environment",
      "Weekly Updates",
      "Component Build",
      "API Integrations",
    ],
    icon: <Code2 strokeWidth={1.75} />,
  },
  {
    phase: "Phase 4",
    title: "QA, Launch & Handoff",
    timeline: "Week 5–6",
    description:
      "Full QA pass across devices and browsers, Core Web Vitals testing (we guarantee 90+ scores), SEO meta setup, deployment to Vercel, and a 30-day post-launch support window.",
    deliverables: [
      "Core Web Vitals ≥90",
      "Vercel Deployment",
      "Source Code + Docs",
      "30-Day Support",
    ],
    icon: <Rocket strokeWidth={1.75} />,
  },
];

const deliverables = [
  "Complete Next.js 15 source code (GitHub repo, you own it 100%)",
  "Figma design files for all screens",
  "Component documentation",
  "Vercel deployment with custom domain setup",
  "GA4 + Google Search Console configuration",
  "Core Web Vitals report (90+ score guarantee)",
  "SEO meta, JSON-LD schema, Open Graph setup",
  "30-day post-launch support window",
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Prisma ORM", "PostgreSQL", "REST / tRPC"] },
  { category: "Auth", items: ["NextAuth.js", "Clerk", "JWT", "OAuth 2.0"] },
  { category: "Payments", items: ["Stripe", "Webhooks", "Subscriptions"] },
  { category: "AI", items: ["OpenAI API", "Anthropic Claude", "LangChain", "Vercel AI SDK"] },
  { category: "Deploy", items: ["Vercel", "AWS", "Railway", "GitHub CI/CD"] },
];

const faqs = [
  {
    q: "How long does a Next.js website take to build?",
    a: "A standard marketing website takes 3–5 weeks from kick-off to launch. A SaaS MVP typically takes 6–10 weeks depending on feature scope and integration complexity. We always provide a detailed timeline before starting.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes. We offer monthly maintenance and growth retainers starting at a flat monthly rate. This covers hosting management, security updates, content edits, performance monitoring, and continued CRO and SEO work.",
  },
  {
    q: "Can you work from my existing Figma designs?",
    a: "Absolutely. We can develop directly from your Figma files, improve them, or start the design from scratch — whatever your project requires. We're comfortable with handoffs from other design tools too.",
  },
  {
    q: "Do I own the code when the project is complete?",
    a: "100%. You receive full source code ownership with no license restrictions. It's delivered via a private GitHub repository. We never use code you don't own or hidden proprietary dependencies.",
  },
  {
    q: "Can you integrate with my existing tools (CRM, email, etc.)?",
    a: "Yes — HubSpot, Mailchimp, Intercom, Zapier, Stripe, custom REST APIs, and more. If a tool has an API, we can integrate it. We'll confirm feasibility and complexity during discovery.",
  },
  {
    q: "What if my project needs a CMS for content management?",
    a: "We support several CMS options depending on your needs: Sanity for structured content, Contentlayer for MDX-based blogs, or Payload CMS for full headless control. We'll recommend the right fit based on who'll be editing content.",
  },
  {
    q: "Do you guarantee PageSpeed scores?",
    a: "Yes. We guarantee a minimum 90/100 on Google PageSpeed Insights (desktop) and a mobile score of 85+ at launch. We test against Core Web Vitals (LCP, CLS, INP) and won't sign off on a launch that doesn't meet these thresholds.",
  },
  {
    q: "What's the typical investment for a Next.js website?",
    a: "Project pricing depends on scope and complexity. A marketing website typically starts in the $1,500–$3,500 range. SaaS MVPs start at $4,000+. Book a free call and we'll provide a detailed, itemized quote — no vague estimates.",
  },
];

/* ─── Page Component ─────────────────────────────────────── */
export default function WebDevelopmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Web Development", href: "/services/web-development" },
  ]);

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    provider: { "@type": "Organization", name: SITE_CONFIG.name },
    serviceType: "Web Development",
    description:
      "Custom Next.js 15, React, and AI-powered web development services including SaaS applications, landing pages, dashboards, and website redesigns.",
    url: `${SITE_CONFIG.url}/services/web-development/`,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: subServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Web Development", href: "/services/web-development" },
        ]}
      />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="Web Development Services"
        heading={
          <>
            Custom Web Development That{" "}
            <GradientText>Converts Visitors</GradientText> Into Customers
          </>
        }
        backgroundImage="/images/web-dev-hero-bg.jpg"

        subheading="We build blazing-fast, SEO-optimized websites and web applications using Next.js 15, React, and TypeScript. Every pixel and every millisecond is engineered for one goal: your growth."
        primaryCTA={{ label: "Get a Free Development Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "View Our Projects", href: "/projects" }}
        trustPoints={[
          "95+ PageSpeed score guarantee",
          "Full source code ownership",
          "30-day post-launch support",
          "Delivered in 3–6 weeks",
        ]}
        stats={[
          { value: "95+", label: "PageSpeed Avg." },
          { value: "50+", label: "Sites Launched" },
          { value: "3 wk", label: "Avg. Launch Time" },
          { value: "100%", label: "Code Ownership" },
        ]}
        accentColor="brand"
      />

      {/* 2. Benefits */}
      <BenefitsSection
        eyebrow="Why It Works"
        heading={
          <>
            Built for Speed, SEO,{" "}
            <GradientText>and Conversion</GradientText>
          </>
        }
        subheading="Every technical decision we make is tied to a business outcome. Here's what that looks like in practice."
        benefits={benefits}
        columns={3}
        variant="cards"
        accentColor="brand"
        background="slate"
      />

      {/* 3. Sub-services */}
      <section className="section-padding bg-white" aria-labelledby="sub-services-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="What We Build"
            heading="Our Web Development Services"
            subheading="From a fast marketing site to a full SaaS product — here's the full scope of what we deliver."
            id="sub-services-heading"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="card card-hover p-7 group flex flex-col h-full"
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

      {/* 4. Process */}
      <ProcessTimeline
        eyebrow="How We Work"
        heading="From Brief to Launch in 4 Clear Phases"
        subheading="A transparent process you can follow at every step — no black boxes, no surprises."
        phases={processPhases}
        accentColor="brand"
        background="slate"
        ctaLabel="Start Your Project"
        ctaHref="/contact#audit"
      />

      {/* 5. Deliverables + Tech Stack */}
      <section className="section-padding bg-white" aria-labelledby="deliverables-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Deliverables */}
            <RevealWrapper>
              <div>
                <span className="eyebrow">What You Receive</span>
                <h2
                  id="deliverables-heading"
                  className="font-display font-bold text-slate-900 text-3xl mb-3 leading-tight"
                >
                  Everything You Need to Launch
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">
                  No hidden extras. Every engagement includes a comprehensive set of
                  deliverables so you can launch — and grow — with confidence.
                </p>
                <ul className="space-y-3" role="list">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-brand-500" />
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>

            {/* Tech Stack */}
            <RevealWrapper delay={0.15}>
              <div>
                <span className="eyebrow">Technology Stack</span>
                <h2 className="font-display font-bold text-slate-900 text-3xl mb-3 leading-tight">
                  Modern, Proven, Scalable
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">
                  We use the tools that give you the best combination of performance,
                  developer experience, and long-term maintainability.
                </p>
                <div className="space-y-4">
                  {techStack.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQSection
        eyebrow="FAQ"
        heading="Web Development — Common Questions"
        subheading="Everything you need to know before starting your project."
        faqs={faqs}
        accentColor="brand"
        background="slate"
        columns={2}
      />

      {/* 7. Final CTA */}
      <FinalServiceCTA
        heading="Ready to Build a Website That Actually Grows Your Business?"
        subheading="Book a free development consultation. We'll review your current site (or idea), identify the key opportunities, and give you a clear path forward — no pressure, no commitment."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact#audit" }}
        secondaryCTA={{ label: "View Our Projects", href: "/projects" }}
        trustPoints={[
          "Free 30-min consultation",
          "Detailed quote within 48 hours",
          "No lock-in contracts",
        ]}
        accentColor="brand"
        testimonialQuote="They rebuilt our entire site in Next.js in 4 weeks. PageSpeed went from 42 to 97. Our bounce rate dropped by 34% in the first month alone."
        testimonialAuthor="Tanvir Islam · Marketing Manager, EduPlatform BD"
      />
    </>
  );
}

// app/services/ai-solutions/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Code2,
  BarChart3,
  Users,
  Clock,
  Cpu,
  Layers,
  MessageSquare,
  Workflow,
  BrainCircuit,
  Rocket,
  Search,
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
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import { IMAGE_ASSETS, SITE_CONFIG } from "@/lib/constants";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "AI Integration Services for Websites & SaaS | Projoy Web Solutions",
  description:
    "We integrate AI into your website and business — chatbots, lead automation, content workflows, and AI SaaS builds. Scale without adding headcount. Free consultation.",
  alternates: { canonical: "/services/ai-solutions" },
  openGraph: {
    title: "AI Integration Services — Projoy Web Solutions",
    description:
      "AI chatbots, automation, and custom AI integrations that save time, reduce costs, and grow revenue.",
    url: `${SITE_CONFIG.url}/services/ai-solutions`,
  },
};

/* ─── Page Data ──────────────────────────────────────────── */
const benefits = [
  {
    icon: <Clock strokeWidth={1.75} />,
    title: "Scale Without Hiring",
    description:
      "AI handles repetitive tasks — lead qualification, FAQ responses, content creation, scheduling — so your team focuses on high-value work that actually requires humans.",
    highlight: "10+ hours saved per week",
  },
  {
    icon: <MessageSquare strokeWidth={1.75} />,
    title: "24/7 Lead Qualification",
    description:
      "An AI chatbot trained on your business qualifies, nurtures, and even books calls with leads while you're asleep. No missed opportunities, no response delay.",
    highlight: "Always-on lead capture",
  },
  {
    icon: <Zap strokeWidth={1.75} />,
    title: "Instant, Accurate Responses",
    description:
      "AI trained on your products, services, and FAQs gives prospects instant, accurate answers — reducing friction and moving them down the funnel faster than any human team can.",
    highlight: "Sub-second response times",
  },
  {
    icon: <BarChart3 strokeWidth={1.75} />,
    title: "Measurable ROI",
    description:
      "We track every AI interaction — leads captured, conversations resolved, time saved — so you can see exactly what your AI investment is returning.",
    highlight: "Full performance dashboard",
  },
  {
    icon: <Code2 strokeWidth={1.75} />,
    title: "Custom-Built, Not Off-the-Shelf",
    description:
      "We build AI solutions specifically for your business — trained on your data, integrated with your existing tools, and designed to solve your actual problems.",
    highlight: "No generic templates",
  },
  {
    icon: <Users strokeWidth={1.75} />,
    title: "Works With Your Existing Stack",
    description:
      "Whether you use HubSpot, Notion, Slack, or custom tools — we integrate AI into your workflows without disrupting what's already working.",
    highlight: "CRM + email + calendar ready",
  },
];

const aiServices = [
  {
    icon: <MessageSquare strokeWidth={1.75} />,
    title: "AI Chatbots & Lead Capture",
    description:
      "We train a custom GPT-powered chatbot on your business data — services, FAQs, pricing, case studies. Deployed on your website to qualify leads and answer questions 24/7.",
    models: ["GPT-4o", "Claude 3.5", "Custom fine-tuning"],
    useCase: "Best for: Service businesses, agencies, SaaS, e-commerce",
    impact: "Avg. 3× more qualified leads per month",
    href: "/services/ai-solutions/ai-chatbots",
  },
  {
    icon: <Workflow strokeWidth={1.75} />,
    title: "Business Process Automation",
    description:
      "We connect AI to your CRM, email, calendar, and operations tools to automate repetitive workflows — lead routing, follow-ups, report generation, and data entry.",
    models: ["LangChain", "n8n", "Zapier AI", "Custom APIs"],
    useCase: "Best for: Agencies, B2B services, ops-heavy businesses",
    impact: "10+ hours of manual work automated per week",
    href: "/services/ai-solutions/automation",
  },
  {
    icon: <BrainCircuit strokeWidth={1.75} />,
    title: "AI Content Workflows",
    description:
      "Automated pipelines for SEO content generation, product descriptions, email sequences, and social media posts — all generated with your brand voice and reviewed before publishing.",
    models: ["Claude 3.5 Sonnet", "GPT-4o", "Custom prompts"],
    useCase: "Best for: E-commerce, SaaS blogs, content-heavy sites",
    impact: "10× content output at a fraction of the cost",
    href: null,
  },
  {
    icon: <Layers strokeWidth={1.75} />,
    title: "AI-Powered SaaS Development",
    description:
      "Full-stack SaaS applications with AI at the core — from idea to deployed product. We build the foundation (Next.js, auth, payments) and layer in AI capabilities cleanly.",
    models: ["Vercel AI SDK", "OpenAI", "Anthropic Claude"],
    useCase: "Best for: Founders, entrepreneurs, agencies building products",
    impact: "MVP to production in 6–10 weeks",
    href: "/services/ai-solutions/ai-powered-saas",
  },
];

const processPhases = [
  {
    phase: "Phase 1",
    title: "AI Opportunity Audit",
    timeline: "Week 1",
    description:
      "We map your current workflows, identify the highest-ROI automation opportunities, and determine which AI models and architectures are the best fit for your use case.",
    deliverables: [
      "Workflow Audit Document",
      "AI Opportunity Map",
      "Model Recommendation",
      "ROI Projection",
    ],
    icon: <Search strokeWidth={1.75} />,
  },
  {
    phase: "Phase 2",
    title: "Design & Data Preparation",
    timeline: "Week 1–2",
    description:
      "We design the AI interaction flows, prepare your training data (FAQs, product info, brand voice), configure the model, and define the integration architecture.",
    deliverables: [
      "Conversation Flow Design",
      "Training Data Set",
      "Integration Spec",
      "Brand Voice Guide",
    ],
    icon: <BrainCircuit strokeWidth={1.75} />,
  },
  {
    phase: "Phase 3",
    title: "Build & Integration",
    timeline: "Week 2–4",
    description:
      "We build the AI system, integrate it with your website and existing tools (CRM, calendar, email), and test extensively on real-world scenarios before anything goes live.",
    deliverables: [
      "AI System Live (Staging)",
      "CRM Integration",
      "API Connections",
      "Test Report",
    ],
    icon: <Code2 strokeWidth={1.75} />,
  },
  {
    phase: "Phase 4",
    title: "Launch & Optimization",
    timeline: "Week 4–6+",
    description:
      "We launch the AI system, monitor performance metrics, and continuously improve based on real conversation data. AI gets smarter the more it's used.",
    deliverables: [
      "Production Launch",
      "Performance Dashboard",
      "30-Day Optimization",
      "Monthly Review",
    ],
    icon: <Rocket strokeWidth={1.75} />,
  },
];

const faqs = [
  {
    q: "What AI models do you use?",
    a: "We primarily work with OpenAI's GPT-4o, Anthropic's Claude 3.5 Sonnet, and Google Gemini — selecting the best model for your specific use case based on performance, cost, and capability requirements. We also support fine-tuning for specialized applications.",
  },
  {
    q: "How does the chatbot get trained on my business?",
    a: "We compile your business data — website content, FAQs, service descriptions, pricing, case studies — and use retrieval-augmented generation (RAG) to give the AI accurate, up-to-date context. It doesn't hallucinate answers; it references your actual data.",
  },
  {
    q: "Will the AI give wrong or embarrassing answers?",
    a: "We configure guardrails that restrict the AI to topics it's trained on. If a question is outside its scope, it gracefully redirects to a human or provides a helpful non-answer. Before launch, we run extensive testing across edge cases.",
  },
  {
    q: "Can the AI book appointments or capture lead details?",
    a: "Yes. We can integrate with Calendly, Cal.com, HubSpot, Salesforce, or custom CRMs to capture lead information and schedule calls directly from the chat conversation — without a human involved.",
  },
  {
    q: "What does an AI chatbot cost to run monthly?",
    a: "API costs depend on conversation volume but are typically very low — most small business chatbots cost $10–$80/month in API usage. We'll provide an estimated running cost based on your expected traffic before you commit.",
  },
  {
    q: "How long does it take to build and launch?",
    a: "A chatbot integration typically takes 2–3 weeks from kick-off to launch. A full AI SaaS build takes 6–10 weeks. Complex workflow automations vary — we scope these during the discovery phase.",
  },
  {
    q: "Do you offer ongoing maintenance for AI systems?",
    a: "Yes. AI systems need regular updates as your business changes and as models improve. We offer monthly retainers that cover prompt updates, retraining, performance monitoring, and capability expansion.",
  },
  {
    q: "Can you integrate AI into my existing website without a full rebuild?",
    a: "Absolutely. We can add AI features to existing websites — regardless of the stack — via a JavaScript embed or API integration. A full rebuild is only necessary if the existing site lacks the technical foundation to support it.",
  },
];

/* ─── Use Cases Showcase ─────────────────────────────────── */
function UseCasesSection() {
  const useCases = [
    {
      industry: "Service Business",
      problem: "Missing leads after hours",
      solution: "AI chatbot qualifies and books consultations 24/7",
      result: "+180% leads captured after hours",
    },
    {
      industry: "E-commerce",
      problem: "High support ticket volume",
      solution: "AI handles order FAQs, returns, and tracking queries",
      result: "60% reduction in support tickets",
    },
    {
      industry: "SaaS Product",
      problem: "Long sales cycle, low trial-to-paid conversion",
      solution: "AI onboarding assistant guides users to activation",
      result: "+40% trial activation rate",
    },
    {
      industry: "Agency",
      problem: "Manual lead qualification wasting team time",
      solution: "AI pre-qualifies leads and routes to right team member",
      result: "3× more qualified sales calls per week",
    },
  ];

  return (
    <section className="section-padding bg-slate-50" aria-labelledby="use-cases-heading">
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Real-World Impact"
          heading="AI That Solves Actual Business Problems"
          subheading="Here's how businesses like yours are using AI to save time and grow revenue."
          id="use-cases-heading"
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <StaggerItem key={uc.industry}>
              <div className="card card-hover p-7 group">
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-700">
                    {uc.industry}
                  </span>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Problem</p>
                      <p className="text-sm text-slate-700">{uc.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Cpu className="w-2.5 h-2.5 text-brand-600" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">AI Solution</p>
                      <p className="text-sm text-slate-700">{uc.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-xs font-bold text-success">{uc.result}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── Page Component ─────────────────────────────────────── */
export default function AISolutionsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
  ]);

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Solutions & Integrations",
    provider: { "@type": "Organization", name: SITE_CONFIG.name },
    serviceType: "Artificial Intelligence Integration",
    description:
      "Custom AI chatbots, business process automation, AI content workflows, and AI-powered SaaS development.",
    url: `${SITE_CONFIG.url}/services/ai-solutions/`,
    areaServed: "Worldwide",
  };

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "AI Solutions", href: "/services/ai-solutions" },
        ]}
      />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="AI Solutions"
        heading={
          <>
            AI Integrations That Save Time,{" "}
            <GradientText>Reduce Costs</GradientText> &amp; Grow Revenue
          </>
        }
        backgroundImage={IMAGE_ASSETS.services.aiSolutions}
        backgroundImageAlt="AI solutions dashboard and automation illustration"
        imagePriority
        subheading="We integrate AI into your website and business workflows — chatbots, automation, content generation, and smart lead capture — so your business scales without linearly adding headcount."
        primaryCTA={{ label: "Explore AI for My Business", href: "/contact#audit" }}
        secondaryCTA={{ label: "See How It Works", href: "#process" }}
        trustPoints={[
          "Custom-trained on your data",
          "Works with your existing tools",
          "Live in 2–4 weeks",
          "Ongoing optimization included",
        ]}
        stats={[
          { value: "24/7", label: "Lead Capture" },
          { value: "3×", label: "More Qualified Leads" },
          { value: "10h+", label: "Saved Per Week" },
          { value: "2–4 wk", label: "Time to Launch" },
        ]}
        accentColor="brand"
        badge="New"
      />

      {/* 2. Benefits */}
      <BenefitsSection
        eyebrow="Why AI, Why Now"
        heading={
          <>
            Your Competitors Are Already Using AI.{" "}
            <GradientText>Are You?</GradientText>
          </>
        }
        subheading="AI isn't a future technology — it's a current competitive advantage. Here's what it actually delivers for small and growing businesses."
        benefits={benefits}
        columns={3}
        variant="cards"
        accentColor="brand"
        background="slate"
      />

      {/* 3. AI Services Detail */}
      <section className="section-padding bg-white" aria-labelledby="ai-services-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="What We Build"
            heading="Our AI Services"
            subheading="Four proven AI solutions, each solving a specific business problem."
            id="ai-services-heading"
          />
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aiServices.map((service) => {
              const cardContent = (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <span className="text-brand-600 w-5 h-5">{service.icon}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-xl leading-snug group-hover:text-brand-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {/* Models used */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Models / Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.models.map((m) => (
                          <span key={m} className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Use case */}
                    <p className="text-xs text-slate-500 italic">{service.useCase}</p>
                    {/* Impact */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                        <span className="text-xs font-bold text-success">{service.impact}</span>
                      </div>
                      {service.href && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </>
              );

              return (
                <StaggerItem key={service.title}>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="card card-hover p-7 lg:p-8 group flex flex-col h-full"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="card card-hover p-7 lg:p-8 group flex flex-col h-full">
                      {cardContent}
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Use Cases */}
      <UseCasesSection />

      {/* 5. Process */}
      <ProcessTimeline
        eyebrow="Our AI Process"
        heading="From Discovery to Deployed AI in 4 Phases"
        subheading="We follow a structured process that ensures your AI solution is accurate, well-integrated, and actually used."
        phases={processPhases}
        accentColor="brand"
        background="white"
        ctaLabel="Start Your AI Integration"
        ctaHref="/contact#audit"
      />

      {/* 6. FAQ */}
      <FAQSection
        eyebrow="FAQ"
        heading="AI Solutions — Common Questions"
        subheading="Honest answers about how our AI integrations work, what they cost, and what to expect."
        faqs={faqs}
        accentColor="brand"
        background="slate"
        columns={2}
      />

      {/* 7. Final CTA */}
      <FinalServiceCTA
        heading="Ready to Put AI to Work in Your Business?"
        subheading="Book a free 30-minute AI opportunity audit. We'll identify your highest-ROI automation opportunities and show you exactly what AI can do for your business — in plain English."
        primaryCTA={{ label: "Book a Free AI Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
        trustPoints={[
          "Free opportunity audit",
          "No jargon, plain English",
          "Custom-built, not templates",
        ]}
        accentColor="brand"
        testimonialQuote="The AI chatbot they built qualifies leads before they reach us. We now only spend time on prospects who are actually ready to buy. Complete game-changer."
        testimonialAuthor="Priya Sharma · CEO, FlowCommerce"
      />
    </>
  );
}

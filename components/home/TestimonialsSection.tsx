// components/home/TestimonialsSection.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { TestimonialCard } from "@/components/shared/Card";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const testimonials = [
  {
    id: "t1",
    quote:
      "Within 60 days of working with Projoy, we went from being invisible on Google Maps to showing up in the top 3 for our main keywords. The phone hasn't stopped ringing since.",
    author: "Rahim Chowdhury",
    role: "Owner",
    company: "RC Restaurant",
    location: "Sylhet",
    rating: 5 as const,
    resultStat: "+210% calls from Google",
    service: "local-seo" as const,
  },
  {
    id: "t2",
    quote:
      "They built our SaaS landing page in under 3 weeks. The design is clean, it loads instantly, and we're converting at over 8%. These guys understand both design and growth, not just code.",
    author: "Sarah Ahmed",
    role: "Co-Founder",
    company: "LaunchHQ",
    location: "Remote",
    rating: 5 as const,
    resultStat: "8.4% conversion rate",
    service: "web-development" as const,
  },
  {
    id: "t3",
    quote:
      "We hired Projoy for GBP optimization and ended up retaining them for our new website too. Best decision we made. Two vendors' worth of expertise from one team. Communication is excellent.",
    author: "Nasrin Begum",
    role: "Director",
    company: "BD Legal Associates",
    location: "Dhaka",
    rating: 5 as const,
    resultStat: "Top 3 local ranking",
    service: "local-seo" as const,
  },
  {
    id: "t4",
    quote:
      "Our old WordPress site was embarrassingly slow. Projoy rebuilt everything on Next.js and our PageSpeed score went from 42 to 97. Our bounce rate dropped by 34% in the first month.",
    author: "Tanvir Islam",
    role: "Marketing Manager",
    company: "EduPlatform BD",
    location: "Dhaka",
    rating: 5 as const,
    resultStat: "42 → 97 PageSpeed",
    service: "web-development" as const,
  },
  {
    id: "t5",
    quote:
      "The citation building and reputation management work they did for us made a huge difference. We went from 12 reviews to 47 in 4 months and our Maps ranking followed. Highly recommend.",
    author: "Karim Miah",
    role: "Owner",
    company: "KM Auto Repair",
    location: "Sylhet",
    rating: 5 as const,
    resultStat: "+35 Google reviews",
    service: "local-seo" as const,
  },
  {
    id: "t6",
    quote:
      "The AI chatbot they integrated into our website qualifies leads before they even reach us. We now only spend time on prospects who are actually ready to buy. It's been a game-changer.",
    author: "Priya Sharma",
    role: "CEO",
    company: "FlowCommerce",
    location: "Remote",
    rating: 5 as const,
    resultStat: "3× qualified leads",
    service: "ai-solutions" as const,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Client Love"
          heading="Words From the Businesses We've Grown"
          subheading="Real results from real clients. No cherry-picked quotes — just consistent outcomes across web development and local SEO."
          id="testimonials-heading"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                role={t.role}
                company={t.company}
                location={t.location}
                rating={t.rating}
                resultStat={t.resultStat}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Google Reviews link */}
        <RevealWrapper className="text-center mt-10">
          <Link
            href="https://g.page/projoywebsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            See all 30+ reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

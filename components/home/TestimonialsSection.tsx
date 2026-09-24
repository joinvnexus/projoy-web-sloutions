// components/home/TestimonialsSection.tsx
import { SectionHeader } from "@/components/shared/Typography";
import { TestimonialCard } from "@/components/shared/Card";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const testimonials = [
  { id: "t1", quote: "This is placeholder testimonial copy. A real client quote can go here once the engagement is complete and the client has approved the testimonial.", author: "Demo Client", role: "Business Owner", company: "Illustrative Local Business", location: "Example", resultStat: "Verified outcome goes here", service: "local-seo" as const },
  { id: "t2", quote: "This demo card shows the intended testimonial layout for a web development project. Replace this copy with an approved client quote when real proof is available.", author: "Demo Client", role: "Founder", company: "Illustrative SaaS Project", location: "Example", resultStat: "Verified result goes here", service: "web-development" as const },
  { id: "t3", quote: "Placeholder testimonial content for the final design system. The production version should use a real quote, attribution, and a result that can be substantiated.", author: "Demo Client", role: "Marketing Lead", company: "Illustrative Service Business", location: "Example", resultStat: "Verified outcome goes here", service: "local-seo" as const },
  { id: "t4", quote: "A demo testimonial keeps the page structure complete while the real client feedback and supporting evidence are being collected.", author: "Demo Client", role: "Product Lead", company: "Illustrative Technology Business", location: "Example", resultStat: "Verified result goes here", service: "web-development" as const },
  { id: "t5", quote: "Placeholder copy for the testimonial system. Replace this with an approved customer story, attribution, and documented outcome before publishing as social proof.", author: "Demo Client", role: "Business Owner", company: "Illustrative Local Business", location: "Example", resultStat: "Verified outcome goes here", service: "local-seo" as const },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Testimonial Layout"
          heading="Client Stories Will Live Here"
          subheading="Demo content keeps the layout ready. Replace each card with an approved client quote and documented outcome when the real proof is available."
          id="testimonials-heading"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard quote={t.quote} author={t.author} role={t.role} company={t.company} location={t.location} resultStat={t.resultStat} isDemo />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <RevealWrapper className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Google review link will be added when the business profile is ready.
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

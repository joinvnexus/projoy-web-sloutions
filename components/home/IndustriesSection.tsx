// components/home/IndustriesSection.tsx
import Link from "next/link";
import { Stethoscope, Building2, Heart, UtensilsCrossed, Scissors, Home, Truck } from "lucide-react";
import { Eyebrow } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const industries = [
  { name: "Dentists", href: "/industries/dentists", Icon: Stethoscope },
  { name: "Law Firms", href: "/industries/law-firms", Icon: Building2 },
  { name: "Clinics", href: "/industries/clinics", Icon: Heart },
  { name: "Restaurants", href: "/industries/restaurants", Icon: UtensilsCrossed },
  { name: "Salons", href: "/industries/salons", Icon: Scissors },
  { name: "Real Estate", href: "/industries/real-estate", Icon: Home },
  { name: "Home Services", href: "/industries/home-services", Icon: Truck },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="industries-heading">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <Eyebrow>Industries</Eyebrow>
          <h2
            id="industries-heading"
            className="font-display font-bold text-slate-900 text-3xl lg:text-4xl leading-tight mb-4"
          >
            Built for Local Service Businesses
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We work with businesses that depend on being found locally. Every strategy is built around the unique needs of your industry and market.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const Icon = industry.Icon;
            return (
              <StaggerItem key={industry.name}>
                <Link
                  href={industry.href}
                  className="card card-hover p-6 flex flex-col items-center text-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.75} />
                  </div>
                  <span className="font-display font-bold text-slate-900 text-sm group-hover:text-brand-700 transition-colors">
                    {industry.name}
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

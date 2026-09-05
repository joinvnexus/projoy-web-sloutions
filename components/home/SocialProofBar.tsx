// components/home/SocialProofBar.tsx
import { Star, Zap, MapPin, Code2, Shield } from "lucide-react";

const items = [
  { icon: Code2,   text: "50+ Projects Delivered" },
  { icon: Star,    text: "98% Client Satisfaction" },
  { icon: Zap,     text: "95+ PageSpeed Average" },
  { icon: MapPin,  text: "Google Maps Ranking Specialists" },
  { icon: Shield,  text: "100% White-Hat Practices" },
  { icon: Code2,   text: "Next.js 15 Experts" },
  { icon: Star,    text: "Local SEO Results in 60–90 Days" },
  { icon: Zap,     text: "AI Integration Ready" },
] as const;

/* Duplicate for seamless loop */
const allItems = [...items, ...items];

export function SocialProofBar() {
  return (
    <section
      className="relative py-4 bg-slate-900 overflow-hidden border-y border-slate-800"
      aria-label="Trust signals"
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0F172A, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0F172A, transparent)" }}
        aria-hidden="true"
      />

      {/* Marquee track */}
      <div className="flex gap-0 w-max animate-marquee will-change-transform">
        {allItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.text}-${i}`}
              className="flex items-center gap-2.5 px-8 flex-shrink-0"
              aria-hidden={i >= items.length}
            >
              <Icon className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                {item.text}
              </span>
              {/* Separator dot */}
              <span className="w-1 h-1 rounded-full bg-slate-700 ml-4 flex-shrink-0" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

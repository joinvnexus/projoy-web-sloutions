// components/shared/Card.tsx
import { cn } from "@/lib/utils";

/* ─── Base Card ──────────────────────────────────────────── */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  as?: React.ElementType;
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "card",
        hover && "card-hover",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ─── Service Card ───────────────────────────────────────── */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: readonly string[];
  href: string;
  accent?: "brand" | "accent";
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
  accent = "brand",
  className,
}: ServiceCardProps) {
  const accentClasses = {
    brand: {
      iconBg: "bg-brand-50 group-hover:bg-brand-100",
      iconColor: "text-brand-600",
      dot: "bg-brand-500",
      link: "text-brand-600 group-hover:text-brand-700",
    },
    accent: {
      iconBg: "bg-accent-50 group-hover:bg-accent-100",
      iconColor: "text-accent-600",
      dot: "bg-accent-500",
      link: "text-accent-600 group-hover:text-accent-700",
    },
  }[accent];

  return (
    <div
      className={cn(
        "card card-hover p-8 group flex flex-col",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200",
          accentClasses.iconBg
        )}
      >
        <span className={cn("w-6 h-6", accentClasses.iconColor)}>{icon}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-slate-900 mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
        {description}
      </p>

      {/* Feature list */}
      <ul className="space-y-1.5 mb-6" role="list">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <span
              className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", accentClasses.dot)}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={href}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200",
          "group-hover:gap-2.5",
          accentClasses.link
        )}
      >
        Learn more
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}

/* ─── Testimonial Card ───────────────────────────────────── */
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  location?: string;
  rating?: number;
  resultStat?: string;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  location,
  rating = 5,
  resultStat,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("card p-6 flex flex-col gap-4", className)}>
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-amber-400" : "text-slate-200"
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-slate-700 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Result stat badge */}
      {resultStat && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
          <span className="text-xs font-semibold text-brand-700">{resultStat}</span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">
            {author.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 leading-none mb-0.5">
            {author}
          </p>
          <p className="text-xs text-slate-500">
            {role}, {company}
            {location && ` · ${location}`}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Stat Card ──────────────────────────────────────────── */
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export function StatCard({ value, label, className, dark }: StatCardProps) {
  return (
    <div
      className={cn(
        "text-center p-6 rounded-2xl",
        dark
          ? "bg-slate-800 border border-slate-700"
          : "card",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl lg:text-5xl font-black font-display tracking-tight leading-none mb-2",
          dark ? "text-white" : "gradient-text"
        )}
      >
        {value}
      </div>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-widest",
          dark ? "text-slate-500" : "text-slate-500"
        )}
      >
        {label}
      </p>
    </div>
  );
}

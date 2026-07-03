// components/shared/Typography.tsx
import { cn } from "@/lib/utils";

/* ─── Eyebrow Label ──────────────────────────────────────── */
interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3",
        light ? "text-brand-300" : "text-brand-600",
        className
      )}
    >
      <span
        className={cn(
          "h-px flex-shrink-0",
          light
            ? "w-2 bg-gradient-to-r from-brand-300 to-accent-400"
            : "w-8 bg-gradient-to-r from-brand-600 to-accent-500"
        )}
      />
      {children}
    </span>
  );
}

/* ─── Section Header ─────────────────────────────────────── */
interface SectionHeaderProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  light?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "none";
  /** Optional id forwarded to the <h2> for aria-labelledby */
  id?: string;
}

const maxWidthMap = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
  none: "",
};

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
  headingClassName,
  light,
  maxWidth = "lg",
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center mx-auto",
        maxWidthMap[maxWidth],
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}

      <h2
        id={id}
        className={cn(
          "font-display font-bold leading-tight tracking-tight mb-4",
          "text-3xl sm:text-4xl lg:text-[2.625rem]",
          light ? "text-white" : "text-slate-900",
          headingClassName
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-slate-300" : "text-slate-600",
            align === "center" && "mx-auto",
            "max-w-2xl"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

/* ─── Metric Display ─────────────────────────────────────── */
interface MetricDisplayProps {
  value: string;
  label: string;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

const metricSizeMap = {
  sm: "text-3xl",
  md: "text-4xl lg:text-5xl",
  lg: "text-5xl lg:text-7xl",
};

export function MetricDisplay({
  value,
  label,
  className,
  light,
  size = "md",
}: MetricDisplayProps) {
  return (
    <div className={cn("text-center", className)}>
      {light ? (
        <div className={cn("metric-number font-display", metricSizeMap[size], "text-white")}>
          {value}
        </div>
      ) : (
        <div
          className={cn("metric-number font-display", metricSizeMap[size], "bg-clip-text text-transparent")}
          style={{
            backgroundImage: "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
          }}
        >
          {value}
        </div>
      )}
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-widest mt-1.5",
          light ? "text-slate-400" : "text-slate-500"
        )}
      >
        {label}
      </p>
    </div>
  );
}

/* ─── Gradient Highlight ─────────────────────────────────── */
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Tag / Badge ────────────────────────────────────────── */
interface TagProps {
  children: React.ReactNode;
  variant?: "brand" | "accent" | "slate" | "success" | "warning";
  className?: string;
}

const tagVariantMap = {
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-100",
  warning: "bg-amber-50 text-amber-700 border-amber-100",
};

export function Tag({ children, variant = "brand", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        tagVariantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

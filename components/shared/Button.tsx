// components/shared/Button.tsx
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─── Variants ───────────────────────────────────────────── */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md hover:-translate-y-px active:translate-y-0",
        secondary:
          "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 hover:-translate-y-px active:translate-y-0",
        outline:
          "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300",
        ghost: "text-brand-600 hover:text-brand-700 hover:bg-brand-50",
        white:
          "bg-white text-brand-700 hover:bg-brand-50 shadow-sm hover:shadow-md hover:-translate-y-px",
        dark: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700",
        danger: "bg-danger text-white hover:bg-red-700 shadow-sm hover:shadow-md",
      },
      size: {
        sm: "text-xs px-3.5 py-2 rounded-lg",
        md: "text-sm px-5 py-2.5 rounded-xl",
        lg: "text-base px-6 py-3 rounded-xl",
        xl: "text-base px-8 py-4 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* ─── Link variant ───────────────────────────────────────── */
interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  pulse?: boolean;
}

export function ButtonLink({
  href,
  external,
  variant,
  size,
  className,
  children,
  pulse,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), pulse && "animate-pulse-ring", className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ─── Button element variant ─────────────────────────────── */
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  pulse?: boolean;
}

export function Button({ variant, size, className, pulse, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), pulse && "animate-pulse-ring", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };

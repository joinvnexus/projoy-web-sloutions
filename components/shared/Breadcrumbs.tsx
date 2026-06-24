// components/shared/Breadcrumbs.tsx
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb trail. Pairs with createBreadcrumbSchema() for SEO —
 * this component renders the same trail visibly for users and screen readers,
 * and doubles as an internal-linking surface per the site's hub-and-spoke IA.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={className ?? "bg-slate-50 border-b border-slate-100"}
    >
      <div className="container mx-auto max-w-[1200px] py-3">
        <ol className="flex items-center gap-1.5 flex-wrap text-xs" role="list">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-slate-500 hover:text-brand-600 transition-colors"
                    aria-label="Home"
                  >
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                ) : isLast ? (
                  <span className="font-semibold text-slate-700" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-slate-300 flex-shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

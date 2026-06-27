// components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  MapPin,
  Cpu,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─── Icon map ───────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  "map-pin": MapPin,
  cpu: Cpu,
};

/* ─── Navbar ─────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Scroll state */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "nav-blur shadow-nav"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container mx-auto max-w-[1200px]">
          <nav
            className="flex items-center justify-between h-16 lg:h-18"
            aria-label="Main navigation"
            ref={dropdownRef}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label={`${SITE_CONFIG.name} — Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-sm">
                {/* <Zap className="w-4 h-4 text-white" strokeWidth={2.5} /> */}
                <img className="w-8 h-8" src="/Logo-projoywebsloutions.png" alt="Projoy Web Solutions" />
              </div>
              <span className="font-display font-bold text-slate-900 text-[0.9375rem] leading-tight">
                Projoy
                <span className="text-brand-600"> Web</span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="relative">
                  {link.children ? (
                    <div
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                          "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                          activeDropdown === link.label && "text-slate-900 bg-slate-50"
                        )}
                        aria-expanded={activeDropdown === link.label}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            activeDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Mega Dropdown */}
                      {activeDropdown === link.label && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl border border-slate-100 shadow-card-hover p-2"
                          role="menu"
                          onMouseEnter={() => handleMouseEnter(link.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid grid-cols-1 gap-0.5">
                            {link.children.map((child) => {
                              const Icon = iconMap[child.icon] ?? Code2;
                              const isActive = pathname.startsWith(child.href);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "flex items-start gap-3 px-4 py-3.5 rounded-xl transition-colors group",
                                    isActive
                                      ? "bg-brand-50 text-brand-700"
                                      : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                                  )}
                                  role="menuitem"
                                >
                                  <div
                                    className={cn(
                                      "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
                                      isActive
                                        ? "bg-brand-100"
                                        : "bg-slate-100 group-hover:bg-brand-50"
                                    )}
                                  >
                                    <Icon
                                      className={cn(
                                        "w-4 h-4 transition-colors",
                                        isActive
                                          ? "text-brand-600"
                                          : "text-slate-500 group-hover:text-brand-600"
                                      )}
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold leading-none mb-1">
                                      {child.label}
                                    </p>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Dropdown footer */}
                          <div className="mt-2 pt-2 border-t border-slate-100 px-4 pb-1">
                            <Link
                              href="/services"
                              className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                            >
                              View all services
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors block",
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-brand-600 bg-brand-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2"
              >
                Contact
              </Link>
              <Link
                href="/contact#audit"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-brand-600 hover:bg-brand-700 text-white",
                  "text-sm font-semibold",
                  "shadow-sm hover:shadow-md hover:-translate-y-px",
                  "transition-all duration-200"
                )}
              >
                Free Growth Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* ── Mobile Menu Toggle ── */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[320px] bg-white shadow-2xl",
            "flex flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
<div className="w-7 h-7 rounded-lg bg-gradient-brand flex items-center justify-center">
                <img className="w-7 h-7" src="/Logo-projoywebsloutions.png" alt="Projoy Web Solutions" />
               </div>
              <span className="font-display font-bold text-slate-900 text-sm">
                Projoy <span className="text-brand-600">Web</span>
              </span>
            </Link>
            <button
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {link.label}
                    </p>
                    <div className="space-y-0.5 ml-2">
                      {link.children.map((child) => {
                        const Icon = iconMap[child.icon] ?? Code2;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                              pathname.startsWith(child.href)
                                ? "bg-brand-50 text-brand-700"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Drawer CTA (sticky bottom) */}
          <div className="px-4 py-5 border-t border-slate-100 space-y-3">
            <Link
              href="/contact#audit"
              className={cn(
                "flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl",
                "bg-brand-600 hover:bg-brand-700 text-white",
                "text-sm font-semibold",
                "transition-colors duration-200"
              )}
            >
              Get Free Growth Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "flex items-center justify-center w-full px-5 py-3 rounded-xl",
                "border border-slate-200 text-slate-600 hover:bg-slate-50",
                "text-sm font-medium transition-colors duration-200"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from sitting under fixed nav */}
      <div className="h-16 lg:h-18" aria-hidden="true" />
    </>
  );
}

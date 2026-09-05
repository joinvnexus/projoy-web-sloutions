// lib/analytics.ts

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventNameOrId: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | "audit_form_submit"
  | "contact_form_submit"
  | "newsletter_signup"
  | "cta_click"
  | "calendly_click";

/**
 * Fires a GA4 event via gtag if it's loaded (production), and no-ops safely
 * in development or if analytics hasn't initialized yet — so forms never
 * throw if the script is blocked or hasn't loaded.
 */
export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  // Also push to dataLayer directly as a GTM-compatible fallback
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params });
  }
}

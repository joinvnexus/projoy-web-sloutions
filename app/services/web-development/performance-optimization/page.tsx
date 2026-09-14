// app/services/web-development/performance-optimization/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("web-development", "performance-optimization");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/performance-optimization" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/web-development/performance-optimization`,
      },
    }
  : { title: "Service Not Found" };

export default function PerformanceOptimizationPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

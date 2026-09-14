// app/services/technical-seo/website-performance/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("technical-seo", "website-performance");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/technical-seo/website-performance" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/technical-seo/website-performance`,
      },
    }
  : { title: "Service Not Found" };

export default function WebsitePerformancePage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

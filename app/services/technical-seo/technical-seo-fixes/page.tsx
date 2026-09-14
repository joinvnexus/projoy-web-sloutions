// app/services/technical-seo/technical-seo-fixes/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("technical-seo", "technical-seo-fixes");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/technical-seo/technical-seo-fixes" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/technical-seo/technical-seo-fixes`,
      },
    }
  : { title: "Service Not Found" };

export default function TechnicalSeoFixesPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

// app/services/local-seo/citation-building/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("local-seo", "citation-building");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/citation-building" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/local-seo/citation-building`,
      },
    }
  : { title: "Service Not Found" };

export default function CitationBuildingPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

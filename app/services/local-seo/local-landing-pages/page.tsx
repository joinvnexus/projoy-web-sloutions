// app/services/local-seo/local-landing-pages/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("local-seo", "local-landing-pages");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/local-landing-pages" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/local-seo/local-landing-pages`,
      },
    }
  : { title: "Service Not Found" };

export default function LocalLandingPagesPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

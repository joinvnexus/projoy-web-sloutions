// app/services/web-development/saas-development/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("web-development", "saas-development");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/saas-development" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/web-development/saas-development`,
      },
    }
  : { title: "Service Not Found" };

export default function SaasDevelopmentPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

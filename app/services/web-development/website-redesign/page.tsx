// app/services/web-development/website-redesign/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("web-development", "website-redesign");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/website-redesign" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/web-development/website-redesign`,
      },
    }
  : { title: "Service Not Found" };

export default function WebsiteRedesignPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

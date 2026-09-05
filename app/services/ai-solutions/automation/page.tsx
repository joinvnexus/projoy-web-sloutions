// app/services/ai-solutions/automation/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("ai-solutions", "automation");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/ai-solutions/automation" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/ai-solutions/automation`,
      },
    }
  : { title: "Service Not Found" };

export default function AutomationPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

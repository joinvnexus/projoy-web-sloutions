// app/services/web-development/ai-integrations/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("web-development", "ai-integrations");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/ai-integrations" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/web-development/ai-integrations`,
      },
    }
  : { title: "Service Not Found" };

export default function AiIntegrationsPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

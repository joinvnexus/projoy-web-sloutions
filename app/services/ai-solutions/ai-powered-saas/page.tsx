// app/services/ai-solutions/ai-powered-saas/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("ai-solutions", "ai-powered-saas");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/ai-solutions/ai-powered-saas" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/ai-solutions/ai-powered-saas`,
      },
    }
  : { title: "Service Not Found" };

export default function AiPoweredSaasPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

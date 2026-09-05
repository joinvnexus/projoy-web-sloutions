// app/services/ai-solutions/ai-chatbots/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("ai-solutions", "ai-chatbots");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/ai-solutions/ai-chatbots" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/ai-solutions/ai-chatbots`,
      },
    }
  : { title: "Service Not Found" };

export default function AiChatbotsPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

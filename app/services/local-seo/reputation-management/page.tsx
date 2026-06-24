// app/services/local-seo/reputation-management/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("local-seo", "reputation-management");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/reputation-management" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/local-seo/reputation-management`,
      },
    }
  : { title: "Service Not Found" };

export default function ReputationManagementPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

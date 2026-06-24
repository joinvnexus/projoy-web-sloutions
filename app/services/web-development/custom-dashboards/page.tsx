// app/services/web-development/custom-dashboards/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("web-development", "custom-dashboards");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/custom-dashboards" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/web-development/custom-dashboards`,
      },
    }
  : { title: "Service Not Found" };

export default function CustomDashboardsPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

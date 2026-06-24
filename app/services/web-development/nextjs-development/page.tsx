// app/services/web-development/nextjs-development/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("web-development", "nextjs-development");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/nextjs-development" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/web-development/nextjs-development`,
      },
    }
  : { title: "Service Not Found" };

export default function NextjsDevelopmentPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

// app/services/local-seo/google-maps-ranking/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("local-seo", "google-maps-ranking");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/google-maps-ranking" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/local-seo/google-maps-ranking`,
      },
    }
  : { title: "Service Not Found" };

export default function GoogleMapsRankingPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

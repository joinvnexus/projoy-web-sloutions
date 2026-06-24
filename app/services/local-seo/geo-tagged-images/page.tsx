// app/services/local-seo/geo-tagged-images/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("local-seo", "geo-tagged-images");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/geo-tagged-images" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/local-seo/geo-tagged-images`,
      },
    }
  : { title: "Service Not Found" };

export default function GeoTaggedImagesPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

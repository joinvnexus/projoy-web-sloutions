// app/services/local-seo/google-business-profile/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("local-seo", "google-business-profile");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/local-seo/google-business-profile" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/local-seo/google-business-profile`,
      },
    }
  : { title: "Service Not Found" };

export default function GoogleBusinessProfilePage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

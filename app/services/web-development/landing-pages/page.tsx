// app/services/web-development/landing-pages/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";

const data = getSubServiceBySlug("web-development", "landing-pages");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/web-development/landing-pages" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://projoywebsolutions.com/services/web-development/landing-pages`,
      },
    }
  : { title: "Service Not Found" };

export default function LandingPagesPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

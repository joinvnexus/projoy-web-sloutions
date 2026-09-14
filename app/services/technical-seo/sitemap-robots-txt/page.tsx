// app/services/technical-seo/sitemap-robots-txt/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { getSubServiceBySlug } from "@/lib/data/sub-services";
import { SITE_CONFIG } from "@/lib/constants";

const data = getSubServiceBySlug("technical-seo", "sitemap-robots-txt");

export const metadata: Metadata = data
  ? {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: "/services/technical-seo/sitemap-robots-txt" },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_CONFIG.url}/services/technical-seo/sitemap-robots-txt`,
      },
    }
  : { title: "Service Not Found" };

export default function SitemapRobotsTxtPage() {
  if (!data) notFound();
  return <SubServiceTemplate data={data} />;
}

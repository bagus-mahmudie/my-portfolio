import type { Metadata } from "next";
import { site } from "@/lib/seo";
import LivingProject from "./LivingProject";

const path = "/projects/888living";
const description = "Detail proyek website 888Living: layanan arsitektur, interior, renovasi, portofolio, karier, dan artikel. Dibangun dengan HTML, CSS, JavaScript, PHP, dan MySQL.";
const image = "/images/projects/888living/01.png";

export const metadata: Metadata = {
  title: "888Living — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "888Living | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website 888Living" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "888Living | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website 888Living" }],
  },
};

export default function LivingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "888Living — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "888Living",
      url: "https://www.888living.id/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <LivingProject />
    </>
  );
}

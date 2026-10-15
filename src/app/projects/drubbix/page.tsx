import type { Metadata } from "next";
import { site } from "@/lib/seo";
import DrubbixProject from "./DrubbixProject";

const path = "/projects/drubbix";
const description = "Detail proyek website Drubbix: layanan pickup sampah, produk maggot, profil perusahaan, dan artikel edukasi. Dibangun dengan HTML, CSS, JavaScript, dan Bootstrap.";
const image = "/images/projects/drubbix/01.png";

export const metadata: Metadata = {
  title: "Drubbix — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Drubbix | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Drubbix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drubbix | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Drubbix" }],
  },
};

export default function DrubbixPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Drubbix — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Drubbix",
      url: "https://drubbix.id/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <DrubbixProject />
    </>
  );
}

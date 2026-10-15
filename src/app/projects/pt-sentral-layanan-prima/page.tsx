import type { Metadata } from "next";
import { site } from "@/lib/seo";
import SlpProject from "./SlpProject";

const path = "/projects/pt-sentral-layanan-prima";
const description = "Detail proyek website PT Sentral Layanan Prima: profil perusahaan, pengelolaan fasilitas, tenaga kerja, klien, karier, dan kontak. Dibangun dengan HTML, CSS, JavaScript, dan PHP.";
const image = "/images/projects/pt-sentral-layanan-prima/01.png";

export const metadata: Metadata = {
  title: "PT Sentral Layanan Prima — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "PT Sentral Layanan Prima | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website PT Sentral Layanan Prima" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sentral Layanan Prima | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website PT Sentral Layanan Prima" }],
  },
};

export default function SlpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PT Sentral Layanan Prima — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "PT Sentral Layanan Prima",
      url: "https://pt-slp.co.id/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SlpProject />
    </>
  );
}

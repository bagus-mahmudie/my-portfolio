import type { Metadata } from "next";
import { site } from "@/lib/seo";
import AutoTrustProject from "./AutoTrustProject";

const path = "/projects/auto-trust";
const description = "Detail proyek Auto Trust: katalog jual dan sewa mobil serta motor, profil penjual, ulasan, favorit, dan pesan. Dibangun dengan Laravel, Blade, Alpine.js, dan MySQL.";
const image = "/images/projects/auto-trust/01.png";

export const metadata: Metadata = {
  title: "Auto Trust — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Auto Trust | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1569, height: 883, alt: "Preview website Auto Trust" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Trust | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Auto Trust" }],
  },
};

export default function AutoTrustPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Auto Trust — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Auto Trust",
      applicationCategory: "BusinessApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <AutoTrustProject />
    </>
  );
}

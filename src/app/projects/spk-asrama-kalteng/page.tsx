import type { Metadata } from "next";
import { site } from "@/lib/seo";
import SpkAsramaProject from "./SpkAsramaProject";

const path = "/projects/spk-asrama-kalteng";
const description = "Detail proyek SPK Asrama Kalteng: alternatif, bobot kriteria, matriks normalisasi, dan nilai preferensi dengan metode SAW. Dibangun dengan PHP dan MySQL.";
const image = "/images/projects/spk-asrama-kalteng/01.png";

export const metadata: Metadata = {
  title: "SPK Asrama Kalteng — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "SPK Asrama Kalteng | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1600, height: 900, alt: "Preview website SPK Asrama Kalteng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPK Asrama Kalteng | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website SPK Asrama Kalteng" }],
  },
};

export default function SpkAsramaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SPK Asrama Kalteng — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "SPK Asrama Kalteng",
      applicationCategory: "BusinessApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SpkAsramaProject />
    </>
  );
}

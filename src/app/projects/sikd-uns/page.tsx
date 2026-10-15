import type { Metadata } from "next";
import { site } from "@/lib/seo";
import SikdProject from "./SikdProject";

const path = "/projects/sikd-uns";
const description = "Detail proyek SIKD UNS: data dosen, kinerja akademik, penelitian, laporan per fakultas, dan ekspor data. Dibangun dengan Laravel, Blade, MySQL, DataTables, dan Laravel Excel.";
const image = "/images/projects/sikd-uns/01.png";

export const metadata: Metadata = {
  title: "SIKD UNS — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "SIKD UNS | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1600, height: 900, alt: "Preview website SIKD UNS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIKD UNS | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website SIKD UNS" }],
  },
};

export default function SikdPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SIKD UNS — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "SIKD UNS",
      applicationCategory: "EducationalApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SikdProject />
    </>
  );
}

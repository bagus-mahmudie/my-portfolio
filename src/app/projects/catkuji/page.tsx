import type { Metadata } from "next";
import { site } from "@/lib/seo";
import CatkujiProject from "./CatkujiProject";

const path = "/projects/catkuji";
const description = "Detail proyek Catkuji: katalog kuji, inventori hadiah, dompet, pembayaran, dan pengiriman. Dikembangkan dengan Laravel, Vue, Inertia.js, Tailwind CSS, dan MySQL.";
const image = "/images/projects/catkuji/01.png";

export const metadata: Metadata = {
  title: "Catkuji — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Catkuji | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1600, height: 900, alt: "Preview website Catkuji" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catkuji | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Catkuji" }],
  },
};

export default function CatkujiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Catkuji — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Catkuji",
      applicationCategory: "EntertainmentApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <CatkujiProject />
    </>
  );
}

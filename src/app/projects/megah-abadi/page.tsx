import type { Metadata } from "next";
import { site } from "@/lib/seo";
import MegahAbadiProject from "./MegahAbadiProject";

const path = "/projects/megah-abadi";
const description = "Detail proyek toko online Megah Abadi: katalog, keranjang, checkout, pembayaran, dan pengiriman. Dibangun dengan Laravel, Blade, Tailwind CSS, dan MySQL.";
const image = "/images/projects/megah-abadi/01.png";

export const metadata: Metadata = {
  title: "Megah Abadi — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Megah Abadi | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Megah Abadi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Megah Abadi | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Megah Abadi" }],
  },
};

export default function MegahAbadiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Megah Abadi — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Megah Abadi",
      applicationCategory: "ShoppingApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <MegahAbadiProject />
    </>
  );
}

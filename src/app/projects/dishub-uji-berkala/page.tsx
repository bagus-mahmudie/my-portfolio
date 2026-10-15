import type { Metadata } from "next";
import { site } from "@/lib/seo";
import DishubProject from "./DishubProject";

const path = "/projects/dishub-uji-berkala";
const description = "Detail proyek Dishub Uji Berkala: identitas kendaraan, hasil pemeriksaan, masa berlaku, unggahan berkas, dan ringkasan hasil uji. Dibangun dengan PHP dan MySQL.";
const image = "/images/projects/dishub-uji-berkala/01.png";

export const metadata: Metadata = {
  title: "Dishub Uji Berkala — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Dishub Uji Berkala | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1600, height: 900, alt: "Preview website Dishub Uji Berkala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishub Uji Berkala | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Dishub Uji Berkala" }],
  },
};

export default function DishubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dishub Uji Berkala — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Dishub Uji Berkala",
      applicationCategory: "BusinessApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <DishubProject />
    </>
  );
}

import type { Metadata } from "next";
import { site } from "@/lib/seo";
import NymgoProject from "./NymgoProject";

const path = "/projects/nymgo";
const description = "Detail proyek landing page Nymgo Indonesia: fitur telepon internasional, pilihan paket, testimoni, dan FAQ. Dibangun dengan HTML, CSS, JavaScript, dan Bootstrap.";
const image = "/images/projects/nymgo/01.png";

export const metadata: Metadata = {
  title: "Nymgo — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Nymgo | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Nymgo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nymgo | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Nymgo" }],
  },
};

export default function NymgoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nymgo — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Nymgo",
      url: "https://nymgo.id/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <NymgoProject />
    </>
  );
}

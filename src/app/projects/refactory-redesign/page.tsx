import type { Metadata } from "next";
import { site } from "@/lib/seo";
import RefactoryProject from "./RefactoryProject";

const path = "/projects/refactory-redesign";
const description = "Detail proyek Refactory Redesign: studi antarmuka landing page dengan HTML, CSS, JavaScript, dan Bootstrap. Eksplorasi layout peluang kerja, alumni, proyek, dan artikel.";
const image = "/images/projects/refactory-redesign/01.png";

export const metadata: Metadata = {
  title: "Refactory Redesign — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Refactory Redesign | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Refactory Redesign" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refactory Redesign | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Refactory Redesign" }],
  },
};

export default function RefactoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refactory Redesign — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "CreativeWork",
      name: "Refactory Redesign",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <RefactoryProject />
    </>
  );
}

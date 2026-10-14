import type { Metadata } from "next";
import { site } from "@/lib/seo";
import UwaisProject from "./UwaisProject";

const path = "/projects/uwais-pictures";
const description = "Detail proyek website Uwais Pictures: katalog film, berita, konten ID/EN, dan formulir kontak. Dibangun dengan Eleventy, Nunjucks, Tailwind CSS, dan PHP.";
const image = "/images/projects/uwais-pictures/01-home.png";

export const metadata: Metadata = {
  title: "Uwais Pictures — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Uwais Pictures | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1511, height: 850, alt: "Preview website Uwais Pictures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uwais Pictures | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Uwais Pictures" }],
  },
};

export default function UwaisPicturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Uwais Pictures — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Uwais Pictures",
      url: "https://uwaispictures.id/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <UwaisProject />
    </>
  );
}

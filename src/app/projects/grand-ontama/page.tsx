import type { Metadata } from "next";
import { site } from "@/lib/seo";
import GrandOntamaProject from "./GrandOntamaProject";

const path = "/projects/grand-ontama";
const description = "Detail proyek website Grand Ontama: tipe hunian, fasilitas, galeri interior, artikel properti, dan kontak. Dibangun dengan Eleventy, Nunjucks, Tailwind CSS, Sharp, dan PHP.";
const image = "/images/projects/grand-ontama/01.png";

export const metadata: Metadata = {
  title: "Grand Ontama — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Grand Ontama | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1569, height: 883, alt: "Preview website Grand Ontama" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Ontama | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Grand Ontama" }],
  },
};

export default function GrandOntamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grand Ontama — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Grand Ontama",
      url: "https://grandontama.com/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <GrandOntamaProject />
    </>
  );
}

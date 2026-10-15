import type { Metadata } from "next";
import { site } from "@/lib/seo";
import GrandOntamaV1Project from "./GrandOntamaV1Project";

const path = "/projects/grand-ontama-v1";
const description = "Detail proyek Grand Ontama V1: tipe rumah, interior, fasilitas, lokasi, artikel, dan kontak. Versi awal dengan HTML, Tailwind CSS, JavaScript, dan PHP.";
const image = "/images/projects/grand-ontama-v1/01.png";

export const metadata: Metadata = {
  title: "Grand Ontama V1 — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Grand Ontama V1 | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Grand Ontama V1" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Ontama V1 | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Grand Ontama V1" }],
  },
};

export default function GrandOntamaV1Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grand Ontama V1 — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "CreativeWork",
      name: "Grand Ontama V1",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <GrandOntamaV1Project />
    </>
  );
}

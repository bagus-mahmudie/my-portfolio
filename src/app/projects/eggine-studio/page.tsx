import type { Metadata } from "next";
import { site } from "@/lib/seo";
import EggineProject from "./EggineProject";

const path = "/projects/eggine-studio";
const description = "Detail proyek website Eggine Studio: profil studio game, katalog game, karier, artikel, dan kontak. Dibangun dengan Eleventy, Nunjucks, Tailwind CSS, dan JavaScript.";
const image = "/images/projects/eggine-studio/01.png";

export const metadata: Metadata = {
  title: "Eggine Studio — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Eggine Studio | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Eggine Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eggine Studio | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Eggine Studio" }],
  },
};

export default function EggineStudioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Eggine Studio — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Eggine Studio",
      url: "https://egginestudio.com/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <EggineProject />
    </>
  );
}

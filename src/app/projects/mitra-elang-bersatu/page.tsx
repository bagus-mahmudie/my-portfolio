import type { Metadata } from "next";
import { site } from "@/lib/seo";
import MitraElangProject from "./MitraElangProject";

const path = "/projects/mitra-elang-bersatu";
const description = "Detail proyek website Mitra Elang Bersatu: profil perusahaan, rekrutmen, outsourcing, pengelolaan SDM, dan karier. Dibangun dengan Eleventy, Nunjucks, dan Tailwind CSS.";
const image = "/images/projects/mitra-elang-bersatu/01.png";

export const metadata: Metadata = {
  title: "Mitra Elang Bersatu — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Mitra Elang Bersatu | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1569, height: 883, alt: "Preview website Mitra Elang Bersatu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Elang Bersatu | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Mitra Elang Bersatu" }],
  },
};

export default function MitraElangPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mitra Elang Bersatu — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Mitra Elang Bersatu",
      url: "https://mitraelangbersatu.com/",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <MitraElangProject />
    </>
  );
}

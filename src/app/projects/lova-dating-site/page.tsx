import type { Metadata } from "next";
import { site } from "@/lib/seo";
import LovaProject from "./LovaProject";

const path = "/projects/lova-dating-site";
const description = "Detail proyek Lova: profil pengguna, pencarian, suka, pesan, dan notifikasi. Dikembangkan dengan Laravel, Blade, Bootstrap, Laravel Mix, dan MySQL.";
const image = "/images/projects/lova-dating-site/01.png";

export const metadata: Metadata = {
  title: "Lova — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Lova | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1570, height: 883, alt: "Preview website Lova" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lova | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Lova" }],
  },
};

export default function LovaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lova — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Lova",
      applicationCategory: "SocialNetworkingApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <LovaProject />
    </>
  );
}

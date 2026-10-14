import type { Metadata } from "next";
import { site } from "@/lib/seo";
import GrandOntamaDashboardProject from "./GrandOntamaDashboardProject";

const path = "/projects/grand-ontama-dashboard";
const description = "Detail proyek Grand Ontama Dashboard: pengelolaan properti, pelanggan, agen, pemesanan, dan akses admin. Dibangun dengan PHP, MySQL, HTML, CSS, dan JavaScript.";
const image = "/images/projects/grand-ontama-dashboard/01.png";

export const metadata: Metadata = {
  title: "Grand Ontama Dashboard — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Grand Ontama Dashboard | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1571, height: 883, alt: "Preview website Grand Ontama Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Ontama Dashboard | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Grand Ontama Dashboard" }],
  },
};

export default function GrandOntamaDashboardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Grand Ontama Dashboard — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "WebSite",
      name: "Grand Ontama Dashboard",
      url: "https://grandontama.com/dashboard/login",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <GrandOntamaDashboardProject />
    </>
  );
}

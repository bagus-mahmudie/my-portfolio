import type { Metadata } from "next";
import { site } from "@/lib/seo";
import ProjectManagementProject from "./ProjectManagementProject";

const path = "/projects/project-management";
const description = "Detail proyek Project Management: pengelolaan proyek, tugas, tim, kalender, dan laporan harian. Dibangun dengan Laravel, Vue, Inertia.js, Tailwind CSS, dan MySQL.";
const image = "/images/projects/project-management/01.png";

export const metadata: Metadata = {
  title: "Project Management — Detail Proyek",
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Project Management | Bagus Mahmudie",
    description,
    url: path,
    siteName: "Bagus Mahmudie Portfolio",
    locale: "id_ID",
    images: [{ url: image, width: 1600, height: 900, alt: "Preview website Project Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management | Bagus Mahmudie",
    description,
    images: [{ url: image, alt: "Preview website Project Management" }],
  },
};

export default function ProjectManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Project Management — Detail Proyek",
    description,
    url: site.url ? new URL(path, site.url).href : undefined,
    isPartOf: { "@id": site.url ? new URL("#website", site.url).href : "#website" },
    about: {
      "@type": "SoftwareApplication",
      name: "Project Management",
      applicationCategory: "BusinessApplication",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ProjectManagementProject />
    </>
  );
}

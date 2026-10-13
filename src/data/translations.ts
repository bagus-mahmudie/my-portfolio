import { projects } from "./projects";

const copy = {
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      status: "Terbuka untuk proyek & kerja remote",
      description:
        "Membangun website dan aplikasi yang menghubungkan kebutuhan bisnis dengan pengalaman digital yang mudah digunakan. Dari website perusahaan hingga e-commerce dan dashboard, saya memadukan logika backend dengan antarmuka yang bersih dan responsif.",
      btnProjects: "Jelajahi proyek",
      btnGithub: "Profil GitHub ➔",
    },
    skills: {
      description:
        "Laravel, PHP, Vue, dan Inertia.js untuk aplikasi web. Eleventy dan Tailwind CSS untuk website berbasis konten, serta React dan Next.js dalam toolkit pengembangan saya.",
    },
    projects: {
      repository: "Lihat kode ➔",
      website: "Buka website ➔",
      hosted: "Website dipublikasikan",
      local: "Aplikasi lokal / studi desain",
      login: "Akses dashboard memerlukan akun resmi.",
    },
    contact: {
      description:
        "Butuh website perusahaan, aplikasi bisnis, atau rekan pengembangan? Saya berbasis di Jakarta dan terbuka untuk proyek, kolaborasi, serta pekerjaan remote.",
    },
    footer: "Dibangun dengan Next.js & Tailwind CSS",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      status: "Open to projects & remote roles",
      description:
        "Building websites and applications that turn business needs into approachable digital experiences. From company websites to e-commerce and dashboards, I connect backend logic with clean, responsive interfaces.",
      btnProjects: "Explore projects",
      btnGithub: "GitHub profile ➔",
    },
    skills: {
      description:
        "Laravel, PHP, Vue, and Inertia.js for web applications. Eleventy and Tailwind CSS for content-driven websites, with React and Next.js also in my development toolkit.",
    },
    projects: {
      repository: "View code ➔",
      website: "Visit website ➔",
      hosted: "Published website",
      local: "Local application / design study",
      login: "Dashboard access requires an authorized account.",
    },
    contact: {
      description:
        "Need a company website, a business application, or a development partner? Based in Jakarta, I’m open to projects, collaborations, and remote roles.",
    },
    footer: "Built with Next.js & Tailwind CSS",
  },
};

export const translations = {
  id: {
    ...copy.id,
    projects: {
      ...copy.id.projects,
      items: projects.map((project) => ({
        ...project,
        description: project.description.id,
      })),
    },
  },
  en: {
    ...copy.en,
    projects: {
      ...copy.en.projects,
      items: projects.map((project) => ({
        ...project,
        description: project.description.en,
      })),
    },
  },
};

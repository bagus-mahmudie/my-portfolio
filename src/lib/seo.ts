import type { Metadata } from "next";

type SiteEnvironment = {
  NEXT_PUBLIC_SITE_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  VERCEL_ENV?: string;
  NODE_ENV?: string;
};

export function resolveSiteConfig(env: SiteEnvironment) {
  const configured = env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelDomain = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = configured || (vercelDomain ? `https://${vercelDomain}` : undefined);
  let url: URL | undefined;
  if (value) {
    url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
      throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query, or hash.');
    }
  }
  const local = url && (['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || url.hostname.endsWith('.localhost'));
  return {
    url,
    indexable: Boolean(url && !local && env.NODE_ENV === 'production' && (!env.VERCEL_ENV || env.VERCEL_ENV === 'production')),
  };
}

export const site = {
  name: 'Bagus Mahmudie',
  title: 'Bagus Mahmudie | Full-Stack Web Developer',
  description: 'Portofolio Bagus Mahmudie, Full-Stack Web Developer di Jakarta. Jelajahi website, e-commerce, dan dashboard dengan Laravel, Vue, PHP, dan Next.js.',
  github: 'https://github.com/bagus-mahmudie',
  linkedin: 'https://www.linkedin.com/in/bagus-mahmudie/',
  ...resolveSiteConfig(process.env),
};

export const siteMetadata: Metadata = {
  metadataBase: site.url ?? new URL('http://localhost:3000'),
  title: { default: site.title, template: '%s | Bagus Mahmudie' },
  description: site.description,
  applicationName: 'Bagus Mahmudie Portfolio',
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  category: 'technology',
  alternates: site.url ? { canonical: site.url.href } : undefined,
  robots: {
    index: site.indexable,
    follow: site.indexable,
    ...(site.indexable ? { googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } } : {}),
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: site.title,
    description: site.description,
    siteName: 'Bagus Mahmudie Portfolio',
    url: site.url?.href,
    images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'Bagus Mahmudie — Full-Stack Web Developer, Jakarta, Indonesia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [{ url: '/social-preview.png', alt: 'Bagus Mahmudie — Full-Stack Web Developer' }],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

const entityId = (fragment: string) => site.url ? new URL(`#${fragment}`, site.url).href : `#${fragment}`;

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person', '@id': entityId('person'),
      name: site.name, alternateName: 'bagus-mahmudie',
      url: site.url?.href,
      image: site.url ? new URL('/images/bagus.png', site.url).href : undefined,
      jobTitle: 'Full-Stack Web Developer',
      description: site.description,
      email: 'mailto:bagusmahmudie@gmail.com',
      homeLocation: { '@type': 'Place', name: 'Jakarta, Indonesia' },
      sameAs: [site.github, site.linkedin],
      knowsAbout: ['PHP', 'Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Eleventy', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      '@type': 'WebSite', '@id': entityId('website'),
      name: 'Bagus Mahmudie Portfolio', url: site.url?.href,
      description: site.description, inLanguage: ['id', 'en'],
      publisher: { '@id': entityId('person') },
    },
    {
      '@type': 'ProfilePage', '@id': entityId('profile'),
      name: site.title, url: site.url?.href, description: site.description,
      inLanguage: 'id', isPartOf: { '@id': entityId('website') },
      mainEntity: { '@id': entityId('person') },
    },
  ],
};

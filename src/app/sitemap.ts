import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // The language switch is client-side; /en and /id are not separate pages.
  // Do not invent routes, hreflang URLs, or a last-modified date on each build.
  return site.indexable && site.url ? [{ url: site.url.href }, { url: new URL("/projects/uwais-pictures", site.url).href }, { url: new URL("/projects/grand-ontama", site.url).href }, { url: new URL("/projects/eggine-studio", site.url).href }, { url: new URL("/projects/888living", site.url).href }, { url: new URL("/projects/mitra-elang-bersatu", site.url).href }, { url: new URL("/projects/nymgo", site.url).href }, { url: new URL("/projects/grand-ontama-dashboard", site.url).href }, { url: new URL("/projects/drubbix", site.url).href }, { url: new URL("/projects/pt-sentral-layanan-prima", site.url).href }, { url: new URL("/projects/catkuji", site.url).href }, { url: new URL("/projects/project-management", site.url).href }, { url: new URL("/projects/auto-trust", site.url).href }, { url: new URL("/projects/lova-dating-site", site.url).href }, { url: new URL("/projects/spk-asrama-kalteng", site.url).href }, { url: new URL("/projects/refactory-redesign", site.url).href }, { url: new URL("/projects/megah-abadi", site.url).href }] : [];
}

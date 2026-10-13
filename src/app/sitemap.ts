import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // The language switch is client-side; /en and /id are not separate pages.
  // Do not invent routes, hreflang URLs, or a last-modified date on each build.
  return site.indexable && site.url ? [{ url: site.url.href }] : [];
}

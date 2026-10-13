import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return site.indexable && site.url
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: new URL('/sitemap.xml', site.url).href, host: site.url.origin }
    : { rules: { userAgent: '*', disallow: '/' } };
}

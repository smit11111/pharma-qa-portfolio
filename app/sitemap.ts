import { MetadataRoute } from 'next';
import { siteConfig, navItems } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...navItems.filter(i => i.href !== '/').map(i => ({
      url: `${siteConfig.url}${i.href}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8,
    })),
  ];
}

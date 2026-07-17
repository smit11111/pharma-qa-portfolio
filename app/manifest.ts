import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.fullName} — ${siteConfig.title}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#070b14',
    theme_color: '#0080ff',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}

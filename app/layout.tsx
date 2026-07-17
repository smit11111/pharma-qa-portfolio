import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ParticleBackground } from '@/components/particle-background';
import { ScrollProgress } from '@/components/scroll-progress';
import { LoadingScreen } from '@/components/loading-screen';
import { BackToTop } from '@/components/back-to-top';
import { siteConfig } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-display', display: 'swap' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#070b14' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.fullName} — ${siteConfig.title}`, template: `%s — ${siteConfig.fullName}` },
  description: siteConfig.description,
  keywords: ['Pharmaceutical Quality Assurance', 'QA Professional', 'GMP', 'GLP', 'Validation', 'B.Pharm', 'Smit Vekariya', 'Quality Assurance', 'Pharmaceutical Industry', 'Regulatory Compliance', 'SOP Documentation', 'CAPA', 'UV Spectroscopy', 'Method Validation'],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: 'website', locale: 'en_US', url: siteConfig.url,
    title: `${siteConfig.fullName} — ${siteConfig.title}`, description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.fullName} — ${siteConfig.title}` }],
  },
  twitter: { card: 'summary_large_image', title: `${siteConfig.fullName} — ${siteConfig.title}`, description: siteConfig.description, images: [siteConfig.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: siteConfig.url },
};

const personSchema = {
  '@context': 'https://schema.org', '@type': 'Person',
  name: siteConfig.fullName, url: siteConfig.url, email: siteConfig.email, telephone: siteConfig.phone,
  jobTitle: 'Pharmaceutical Quality Assurance Professional', description: siteConfig.description,
  knowsAbout: ['GMP', 'GLP', 'Quality Assurance', 'Validation', 'Regulatory Compliance', 'UV Spectroscopy', 'Pharmaceutical Documentation'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'RK University' },
  sameAs: ['https://www.linkedin.com/in/smit-vekariya-9118392b5', 'https://www.instagram.com/smittzzz._', 'https://www.facebook.com/share/19Dxjb2quH/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

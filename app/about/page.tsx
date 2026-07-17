import type { Metadata } from 'next';
import { AboutContent } from '@/components/pages/about-content';

export const metadata: Metadata = {
  title: 'About — Smit Vekariya',
  description:
    'Learn about Smit Vekariya, a B.Pharm graduate passionate about Pharmaceutical Quality Assurance with industrial training and research experience in UV Spectrophotometric Method Validation.',
};

export default function AboutPage() {
  return <AboutContent />;
}

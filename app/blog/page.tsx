import type { Metadata } from 'next';
import { BlogContent } from '@/components/pages/blog-content';

export const metadata: Metadata = {
  title: 'Blog — Smit Vekariya',
  description:
    'Insights and articles by Smit Vekariya on pharmaceutical quality assurance, GMP, analytical method validation, and starting a career in QA.',
};

export default function BlogPage() {
  return <BlogContent />;
}

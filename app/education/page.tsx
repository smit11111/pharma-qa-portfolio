import type { Metadata } from 'next';
import { EducationContent } from '@/components/pages/education-content';

export const metadata: Metadata = {
  title: 'Education — Smit Vekariya',
  description:
    'Academic background of Smit Vekariya — Bachelor of Pharmacy (B.Pharm) from RK University with CGPA 7.90, covering pharmacology, pharmaceutics, quality assurance, and analytical chemistry.',
};

export default function EducationPage() {
  return <EducationContent />;
}

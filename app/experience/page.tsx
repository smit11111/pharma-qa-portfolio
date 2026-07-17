import type { Metadata } from 'next';
import { ExperienceContent } from '@/components/pages/experience-content';

export const metadata: Metadata = {
  title: 'Experience — Smit Vekariya',
  description:
    'Professional and research experience of Smit Vekariya — industrial training at Sam Fine O Chem Limited and research in UV Spectroscopic Method Validation for Endoxifen tablets.',
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}

import type { Metadata } from 'next';
import { ResumeContent } from '@/components/pages/resume-content';

export const metadata: Metadata = {
  title: 'Resume — Smit Vekariya',
  description:
    'Download or preview the resume of Smit Vekariya — B.Pharm graduate aspiring to a career in Pharmaceutical Quality Assurance with GMP, validation, and documentation expertise.',
};

export default function ResumePage() {
  return <ResumeContent />;
}

import type { Metadata } from 'next';
import { ProjectsContent } from '@/components/pages/projects-content';

export const metadata: Metadata = {
  title: 'Projects — Smit Vekariya',
  description:
    'Research and training projects by Smit Vekariya — UV Spectroscopy Method Validation for Endoxifen tablets and industrial training at Sam Fine O Chem Limited.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

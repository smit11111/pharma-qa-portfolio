import type { Metadata } from 'next';
import { SkillsContent } from '@/components/pages/skills-content';

export const metadata: Metadata = {
  title: 'Skills — Smit Vekariya',
  description:
    'Core competencies of Smit Vekariya across GMP & GDP, Documentation, Validation, Regulatory Affairs, MS Office, and Soft Skills — built through academic study and industrial training.',
};

export default function SkillsPage() {
  return <SkillsContent />;
}

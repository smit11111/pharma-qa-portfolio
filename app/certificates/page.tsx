import type { Metadata } from 'next';
import { CertificatesContent } from '@/components/pages/certificates-content';

export const metadata: Metadata = {
  title: 'Certificates — Smit Vekariya',
  description:
    'Credentials and certifications of Smit Vekariya — B.Pharm degree, industrial training certificate from Sam Fine O Chem Limited, and research project certificate from RK University.',
};

export default function CertificatesPage() {
  return <CertificatesContent />;
}

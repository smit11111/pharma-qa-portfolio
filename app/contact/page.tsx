import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/contact-content';

export const metadata: Metadata = {
  title: 'Contact — Smit Vekariya',
  description:
    'Get in touch with Smit Vekariya — email, phone, and social links. Reach out for QA opportunities in the pharmaceutical industry.',
};

export default function ContactPage() {
  return <ContactContent />;
}

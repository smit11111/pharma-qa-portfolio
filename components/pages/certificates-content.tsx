'use client';

import { Calendar, Eye } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import { certificates } from '@/lib/data';

export function CertificatesContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Certificates"
          title="Credentials"
          description="Academic qualifications, professional certifications, and training certificates that validate my expertise in pharmaceutical quality assurance."
        />

        {/* ============================ CERTIFICATE CARDS ============================ */}
        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id} className="glass-card overflow-hidden rounded-3xl">
              {/* Image thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cert.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute left-4 top-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                {/* View Certificate button */}
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 h-12 w-full px-6 text-sm"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

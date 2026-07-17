'use client';

import {
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import {
  siteConfig,
  education,
  experiences,
  skills,
  certificates,
} from '@/lib/data';

export function ResumeContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Resume"
          title="Download My Resume"
          description="View or download my complete resume to learn more about my education, experience, skills, and certifications."
        />

        {/* ============================ ACTION BUTTONS ============================ */}
        <FadeIn className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/SMIT_VEKARIYA-RESUME.pdf"
            download
            className="btn-primary h-14 px-8 text-base"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
          <a
            href="/SMIT_VEKARIYA-RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary h-14 px-8 text-base"
          >
            <Eye className="h-5 w-5" />
            Preview Resume
          </a>
        </FadeIn>

        {/* ============================ RESUME PREVIEW CARD ============================ */}
        <FadeIn className="mx-auto mt-16 max-w-4xl">
          <div className="glass-card rounded-4xl overflow-hidden">
            {/* Header */}
            <div className="gradient-bg-animated p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {siteConfig.fullName}
              </h3>
              <p className="mt-1 text-sm font-medium text-white/80 sm:text-base">
                {siteConfig.role}
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Rajkot, Gujarat, India
                </span>
              </div>
            </div>

            {/* Body sections */}
            <div className="p-8 sm:p-10">
              {/* Education */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold">Education</h4>
                </div>
                <div className="ml-1 rounded-2xl glass p-5">
                  <p className="font-semibold">{education.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
                  <p className="mt-1 text-sm font-medium text-primary">
                    CGPA {education.cgpa} · {education.duration}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold">Experience</h4>
                </div>
                <div className="ml-1 space-y-3">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="rounded-2xl glass p-5">
                      <p className="font-semibold">{exp.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.organization} · {exp.date}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills summary */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold">Skills Summary</h4>
                </div>
                <div className="ml-1 flex flex-wrap gap-2">
                  {skills.slice(0, 12).map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold">Certificates</h4>
                </div>
                <div className="ml-1 space-y-3">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="rounded-2xl glass p-5">
                      <p className="font-semibold">{cert.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

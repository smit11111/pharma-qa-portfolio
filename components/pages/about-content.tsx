'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Target,
  BookOpen,
  Briefcase,
  FlaskConical,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import {
  siteConfig,
  education,
  careerObjective,
  professionalSummary,
  strengths,
  professionalValues,
  socialLinks,
  hobbies,
} from '@/lib/data';
import { cn } from '@/lib/utils';

const quickFacts = [
  { icon: BookOpen, label: 'Education', value: 'B.Pharm Graduate' },
  { icon: GraduationCap, label: 'CGPA', value: education.cgpa },
  { icon: Briefcase, label: 'Training', value: 'Sam Fine O Chem' },
  { icon: FlaskConical, label: 'Research', value: 'UV Method Validation' },
];

export function AboutContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="About Me"
          title={siteConfig.fullName}
          description={siteConfig.role}
        />

        {/* ============================ PROFILE CARD ============================ */}
        <FadeIn className="mx-auto mt-16 max-w-4xl">
          <div className="glass-card rounded-4xl p-8 sm:p-10">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              {/* Avatar with spinning gradient border */}
              <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                <div className="absolute inset-0 animate-spin-slow rounded-full gradient-bg" />
                <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-background">
                  <span className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                    SV
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {siteConfig.fullName}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                  {education.institution}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {professionalSummary}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    B.Pharm Graduate
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium">
                    <BookOpen className="h-4 w-4 text-primary" />
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================ CAREER OBJECTIVE ============================ */}
        <FadeIn className="mx-auto mt-12 max-w-4xl">
          <div className="glass-card rounded-4xl p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">Career Objective</h3>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {careerObjective}
            </p>
          </div>
        </FadeIn>

        {/* ============================ STRENGTHS ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Key Strengths</h3>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {strengths.map((item) => (
              <StaggerItem key={item.title} className="glass-card rounded-3xl p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ PROFESSIONAL VALUES ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Professional Values</h3>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {professionalValues.map((item) => (
              <StaggerItem key={item.title} className="glass-card rounded-3xl p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ QUICK FACTS ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Quick Facts</h3>
          </FadeIn>
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <StaggerItem key={fact.label} className="glass-card rounded-3xl p-6 text-center">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                  <fact.icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </div>
                <div className="mt-1 text-sm font-semibold sm:text-base">{fact.value}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ HOBBIES ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Hobbies &amp; Interests</h3>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {hobbies.map((hobby) => (
              <StaggerItem key={hobby.name} className="glass-card rounded-3xl p-7">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                    <hobby.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold">{hobby.name}</h4>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ CONNECT ============================ */}
        <FadeIn className="mt-20 text-center">
          <div className="glass-card rounded-4xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold sm:text-3xl">Let&apos;s Connect</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Reach out on social media or send an email — I&apos;m always open to QA opportunities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  {...(link.href.startsWith('mailto')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-primary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Go to contact page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

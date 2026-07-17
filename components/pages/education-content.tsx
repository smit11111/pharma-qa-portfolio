'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  ShieldCheck,
  Award,
  CheckCircle,
} from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader, AnimatedCounter } from '@/components/animations';
import { education } from '@/lib/data';
import { cn } from '@/lib/utils';

const timeline = [
  {
    year: '2019 – 2020',
    title: 'First Year — Foundation',
    description:
      'Started the B.Pharm journey with foundational subjects including Human Anatomy & Physiology, Pharmaceutical Chemistry, and Pharmaceutics basics.',
    icon: BookOpen,
  },
  {
    year: '2021 – 2023',
    title: 'Core Pharmacy Curriculum',
    description:
      'Advanced through Pharmacology, Pharmaceutical Analysis, Dosage Form Design, and Quality Assurance, building deep technical knowledge.',
    icon: FlaskConical,
  },
  {
    year: '2024 – 2025',
    title: 'Research & Graduation',
    description:
      'Completed research project on UV Spectroscopy Method Validation for Endoxifen tablets and graduated with CGPA 7.90 from RK University.',
    icon: Award,
  },
];

const subjects = [
  { name: 'Pharmaceutical Analysis', icon: FlaskConical },
  { name: 'Quality Assurance', icon: ShieldCheck },
  { name: 'Pharmaceutics', icon: BookOpen },
  { name: 'Pharmacology', icon: CheckCircle },
  { name: 'Industrial Pharmacy', icon: GraduationCap },
  { name: 'Analytical Chemistry', icon: FlaskConical },
];

const highlights = [
  {
    title: 'CGPA 7.90',
    description: 'Consistent academic performance throughout the B.Pharm program.',
    icon: Award,
  },
  {
    title: 'Research Project',
    description: 'UV Spectroscopy Method Development & Validation for Endoxifen tablets.',
    icon: FlaskConical,
  },
  {
    title: 'Industrial Training',
    description: 'Hands-on exposure at Sam Fine O Chem Limited in GMP-compliant manufacturing.',
    icon: GraduationCap,
  },
];

export function EducationContent() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          description="Bachelor of Pharmacy from RK University, building a strong foundation in pharmaceutical sciences and quality assurance."
        />

        {/* ============================ HIGHLIGHT CARD ============================ */}
        <FadeIn className="mx-auto mt-16 max-w-4xl">
          <div className="glass-card overflow-hidden rounded-4xl">
            {/* Animated gradient header */}
            <div className="gradient-bg-animated p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">Degree</p>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{education.degree}</h3>
                  <p className="mt-1 text-sm text-white/80">{education.institution}</p>
                </div>
              </div>
            </div>

            {/* Body with animated CGPA counter */}
            <div className="p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    CGPA
                  </div>
                  <div className="mt-2 text-5xl font-bold gradient-text sm:text-6xl">
                    <AnimatedCounter value={7.9} decimals={2} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Out of 10 — consistent academic performance
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Duration
                  </div>
                  <div className="mt-2 text-2xl font-bold sm:text-3xl">{education.duration}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full-time Bachelor of Pharmacy program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================ SCROLL-DRIVEN TIMELINE ============================ */}
        <div ref={timelineRef} className="relative mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Academic Journey</h3>
          </FadeIn>

          {/* Central line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 gradient-bg"
          />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div
                  className={cn(
                    'flex items-center gap-8',
                    i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  )}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className="glass-card rounded-3xl p-7">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                        {item.year}
                      </span>
                      <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full gradient-bg ring-4 ring-background" />

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ============================ KEY SUBJECTS ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Key Subjects</h3>
          </FadeIn>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {subjects.map((subject) => (
              <StaggerItem key={subject.name} className="glass-card rounded-2xl p-6 text-center">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                  <subject.icon className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-semibold">{subject.name}</h4>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ ACADEMIC HIGHLIGHTS ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Academic Highlights</h3>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
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
      </div>
    </section>
  );
}

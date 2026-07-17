'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Download,
  ShieldCheck,
  FlaskConical,
  Microscope,
  GraduationCap,
  Briefcase,
  Sparkles,
  Mail,
  ChevronDown,
  Lightbulb,
  Trophy,
  Leaf,
  Heart,
  Search,
  Users,
  TrendingUp,
  ClipboardCheck,
  FileText,
} from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader, AnimatedCounter } from '@/components/animations';
import { TypingText } from '@/components/typing-text';
import {
  siteConfig,
  skills,
  experiences,
  certificates,
  socialLinks,
  professionalSummary,
  education,
  whyHireMe,
  heroObjective,
} from '@/lib/data';

/* -------------------------------------------------------------------------- */
/*  Static content                                                             */
/* -------------------------------------------------------------------------- */

const counters = [
  { value: 7.9, decimals: 2, suffix: '', label: 'CGPA', icon: GraduationCap },
  { value: 1, decimals: 0, suffix: '', label: 'Training', icon: Briefcase },
  { value: 1, decimals: 0, suffix: '', label: 'Research', icon: FlaskConical },
  { value: 3, decimals: 0, suffix: '+', label: 'Projects', icon: Sparkles },
];

const aboutHighlights = [
  { icon: ShieldCheck, label: 'GMP Knowledge' },
  { icon: FileText, label: 'Documentation' },
  { icon: Search, label: 'Analytical Skills' },
  { icon: TrendingUp, label: 'Continuous Improvement' },
];

const featuredProjects = [
  {
    title: 'Endoxifen UV Spectroscopy Method Validation',
    subtitle: 'Academic Research',
    description:
      'Development and Validation of UV Spectroscopy Method for Estimation of Endoxifen in Tablet Dosage Form using Area Under Curve Method.',
    tags: ['UV Spectroscopy', 'Method Validation', 'Area Under Curve', 'Endoxifen'],
    icon: Microscope,
    badge: '',
    leaf: false,
  },
  {
    title: 'pH-Activated Nematicide Capsule',
    subtitle: 'Innovation Project',
    description:
      'An innovative drug delivery system utilizing pH-activated capsules for targeted nematicide release, designed for sustainable agricultural applications.',
    tags: ['Drug Delivery', 'Innovation', 'pH-Activated', 'Sustainability'],
    icon: Lightbulb,
    badge: 'SSIP 2.0',
    leaf: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero parallax
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // Blob parallax
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center section-padding pt-4 overflow-hidden"
      >
        {/* Animated background blobs */}
        <motion.div
          style={{ y: blob1Y }}
          className="pointer-events-none absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-primary/15 blur-[120px] animate-blob-float"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="pointer-events-none absolute right-[8%] top-[25%] h-80 w-80 rounded-full bg-accent/15 blur-[120px] animate-blob-float"
        />
        <motion.div
          style={{ y: blob3Y }}
          className="pointer-events-none absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-primary/15 blur-[120px] animate-blob-float"
        />

        {/* Hero content with parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center gap-6 text-center"
        >
          {/* Profile image with spinning gradient border */}
          <div className="relative h-44 w-44 sm:h-52 md:h-60">
            <div className="absolute inset-0 animate-spin-slow rounded-full gradient-bg" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-[5px] overflow-hidden rounded-full ring-2 ring-primary/20">
              <Image
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smit Vekariya — Pharmaceutical Quality Assurance Professional"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            Open to QA opportunities
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Smit <span className="gradient-text">Vekariya</span>
          </h1>

          {/* Headline */}
          <p className="text-xl font-semibold text-muted-foreground sm:text-2xl md:text-3xl">
            {siteConfig.headline}
          </p>

          {/* Typing text */}
          <div className="inline-flex items-center rounded-full glass px-5 py-2.5">
            <TypingText
              phrases={[
                'B.Pharm Graduate',
                'GMP Compliance Enthusiast',
                'Analytical Method Validation',
                'Quality-Focused Professional',
              ]}
              className="font-medium text-foreground"
            />
          </div>

          {/* Career objective */}
          <p className="max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            {heroObjective}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/SMIT_VEKARIYA-RESUME.pdf"
              download
              className="btn-primary h-14 px-8 text-base"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <Link href="/contact" className="btn-secondary h-14 px-8 text-base">
              <Mail className="h-5 w-5" />
              Hire Me
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.href.startsWith('mailto')
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* ============================ COUNTERS ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {counters.map((counter) => (
              <StaggerItem
                key={counter.label}
                className="glass-card rounded-3xl p-6 text-center"
              >
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white">
                  <counter.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold gradient-text sm:text-5xl">
                  <AnimatedCounter
                    value={counter.value}
                    decimals={counter.decimals}
                    suffix={counter.suffix}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {counter.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ WHY HIRE ME ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <SectionHeader
            eyebrow="Why Hire Me"
            title="What I Bring to the Table"
            description="A combination of academic knowledge, practical training, and genuine passion for pharmaceutical quality."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyHireMe.map((item) => (
              <StaggerItem
                key={item.title}
                className="glass-card group rounded-3xl p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ ABOUT PREVIEW ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-bg text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    About Me
                  </span>
                  <h2 className="text-2xl font-bold">Who I Am</h2>
                </div>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {professionalSummary}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  {education.degree} · {education.institution} · CGPA {education.cgpa}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {aboutHighlights.map((highlight) => (
                  <span
                    key={highlight.label}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium"
                  >
                    <highlight.icon className="h-4 w-4 text-primary" />
                    {highlight.label}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn more about me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================ EXPERIENCE PREVIEW ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <SectionHeader
            eyebrow="Experience"
            title="Professional & Academic Journey"
            description="Hands-on training and research that shaped my understanding of pharmaceutical quality."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <StaggerItem
                key={exp.id}
                className="glass-card group rounded-3xl p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-bg text-white">
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                      {exp.date}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm font-medium text-primary">
                      {exp.organization}
                    </p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/experience"
              className="btn-secondary h-12 px-6 text-sm"
            >
              View All Experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================ FEATURED PROJECTS ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Research & Innovation"
            description="Academic research and innovative projects that demonstrate practical pharmaceutical knowledge."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <StaggerItem
                key={project.title}
                className="glass-card group overflow-hidden rounded-3xl"
              >
                {/* Gradient header */}
                <div className="gradient-bg-animated p-7">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {project.badge && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                          <Trophy className="h-4 w-4" />
                          {project.badge}
                        </span>
                      )}
                      {project.leaf && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                          <Leaf className="h-4 w-4" />
                          Sustainable
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-white/80">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/projects"
              className="btn-secondary h-12 px-6 text-sm"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================ SKILLS PREVIEW ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <SectionHeader
            eyebrow="Skills"
            title="Technical Expertise"
            description="A blend of regulatory knowledge, documentation proficiency, and analytical capabilities."
          />
          <Stagger className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.slice(0, 8).map((skill) => (
              <StaggerItem
                key={skill.name}
                className="glass-card group rounded-2xl p-5 text-center"
              >
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white transition-transform duration-300 group-hover:scale-110">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {skill.category}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground">
              <ClipboardCheck className="h-4 w-4 text-primary" />
              {skills.length}+ skills across 6 categories
            </div>
            <Link
              href="/skills"
              className="btn-secondary h-12 px-6 text-sm"
            >
              View All Skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================ CERTIFICATES PREVIEW ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <SectionHeader
            eyebrow="Certificates"
            title="Credentials & Achievements"
            description="Academic qualifications and professional certifications that validate my expertise."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {certificates.map((cert) => (
              <StaggerItem
                key={cert.id}
                className="glass-card group rounded-3xl p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg text-white transition-transform duration-300 group-hover:scale-110">
                  <cert.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {cert.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/certificates"
              className="btn-secondary h-12 px-6 text-sm"
            >
              View All Certificates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section-padding pt-0">
        <div className="container-px">
          <FadeIn>
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-12 text-center sm:p-16">
              <div className="pointer-events-none absolute left-[15%] top-0 h-48 w-48 rounded-full bg-primary/15 blur-[100px]" />
              <div className="pointer-events-none absolute bottom-0 right-[15%] h-48 w-48 rounded-full bg-accent/15 blur-[100px]" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white">
                  <Heart className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Let&apos;s build <span className="gradient-text">quality</span> together
                </h2>
                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                  I&apos;m ready to contribute my knowledge of GMP, validation, and
                  documentation to your quality assurance team. Let&apos;s ensure
                  product quality and patient safety together.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary h-14 px-8 text-base"
                >
                  <Mail className="h-5 w-5" />
                  Hire Me
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

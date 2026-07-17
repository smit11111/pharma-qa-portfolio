'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeIn, SectionHeader } from '@/components/animations';
import { experiences } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ExperienceContent() {
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
          eyebrow="Experience"
          title="Professional & research"
          description="Hands-on industrial training and academic research that shaped my understanding of pharmaceutical quality assurance."
        />

        {/* ============================ SCROLL-DRIVEN TIMELINE ============================ */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 gradient-bg"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.1}>
                <div
                  className={cn(
                    'flex items-center gap-8',
                    i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  )}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className="glass-card rounded-3xl p-7">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-bg text-white">
                          <exp.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                            {exp.type}
                          </span>
                          <h4 className="mt-2 text-lg font-semibold">{exp.title}</h4>
                          <p className="text-sm font-medium text-primary">{exp.organization}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{exp.date}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
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

        {/* ============================ CTA CARD ============================ */}
        <FadeIn className="mx-auto mt-20 max-w-3xl">
          <div className="glass-card relative overflow-hidden rounded-4xl p-10 text-center sm:p-12">
            <div className="pointer-events-none absolute left-[15%] top-0 h-40 w-40 rounded-full bg-primary/15 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 right-[15%] h-40 w-40 rounded-full bg-accent/15 blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Ready to contribute to <span className="gradient-text">quality</span>
              </h3>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                I&apos;m eager to bring my training and research experience to a pharmaceutical
                quality assurance team. Let&apos;s connect.
              </p>
              <Link href="/contact" className="btn-primary h-14 px-8 text-base">
                <Mail className="h-5 w-5" />
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

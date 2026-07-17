'use client';

import { CheckCircle, ArrowRight, Trophy, ExternalLink, Sparkles } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import { projects } from '@/lib/data';

export function ProjectsContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Projects"
          title="Research & Training"
          description="Academic research and industrial training projects demonstrating practical pharmaceutical knowledge and analytical skills."
        />

        {/* ============================ PROJECT CARDS ============================ */}
        <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="glass-card overflow-hidden rounded-3xl">
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute left-4 top-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-white/80">{project.subtitle}</p>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mt-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Learning Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project button */}
                {project.hasLink && (
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 h-12 px-6 text-sm"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ============================ FEATURED SSIP CARD ============================ */}
        <FadeIn className="mt-10">
          <div className="glass-card overflow-hidden rounded-4xl">
            <div className="gradient-bg-animated p-8 sm:p-10">
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <Trophy className="h-4 w-4" />
                  SSIP 2.0
                </span>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  pH-Activated Nematicide Capsule
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-white/80">
                  An innovative drug delivery system utilizing pH-activated capsules for targeted
                  nematicide release, designed for sustainable agricultural applications. Featured
                  under the SSIP 2.0 innovation scheme.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

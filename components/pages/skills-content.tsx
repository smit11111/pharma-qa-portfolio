'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import { skills, skillCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function SkillsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillCategories];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Category summary: average levels
  const categorySummary = skillCategories.map((category) => {
    const catSkills = skills.filter((s) => s.category === category);
    const avg = Math.round(
      catSkills.reduce((sum, s) => sum + s.level, 0) / catSkills.length
    );
    return { category, avg };
  });

  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Skills"
          title="Core Competencies"
          description="A blend of regulatory knowledge, documentation proficiency, analytical capabilities, and soft skills built through academic study and industrial training."
        />

        {/* ============================ CATEGORY FILTER ============================ */}
        <FadeIn className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'gradient-bg text-white shadow-lg shadow-primary/25'
                  : 'glass text-muted-foreground hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </FadeIn>

        {/* ============================ SKILLS GRID ============================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
              {filteredSkills.map((skill) => (
                <StaggerItem key={skill.name} className="glass-card rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-bg text-white">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold sm:text-base">{skill.name}</h4>
                        <span className="text-sm font-bold gradient-text">{skill.level}%</span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">{skill.category}</p>
                      {/* Progress bar */}
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-foreground/10">
                        <motion.div
                          className="h-full rounded-full gradient-bg"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: EASE }}
                        />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </motion.div>
        </AnimatePresence>

        {/* ============================ CATEGORY SUMMARY ============================ */}
        <div className="mt-20">
          <FadeIn className="mb-10 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Category Summary</h3>
          </FadeIn>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categorySummary.map((cat) => (
              <StaggerItem key={cat.category} className="glass-card rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text">{cat.avg}%</div>
                <div className="mt-2 text-xs font-medium text-muted-foreground">
                  {cat.category}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ============================ CONTINUOUS LEARNING CALLOUT ============================ */}
        <FadeIn className="mx-auto mt-20 max-w-3xl">
          <div className="glass-card relative overflow-hidden rounded-4xl p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute left-[15%] top-0 h-40 w-40 rounded-full bg-primary/15 blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-white">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold sm:text-2xl">Continuous Learning</h3>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                I&apos;m always expanding my knowledge in regulatory affairs, advanced analytical
                techniques, and quality management systems. Staying current is essential in the
                pharmaceutical industry.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                {skills.length} skills across {skillCategories.length} categories
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

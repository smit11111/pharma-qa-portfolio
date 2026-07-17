'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem, SectionHeader } from '@/components/animations';
import { blogPosts } from '@/lib/data';
import { cn } from '@/lib/utils';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[number] | null>(null);

  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Blog"
          title="Insights & Articles"
          description="Thoughts and reflections on pharmaceutical quality assurance, analytical method validation, and building a career in QA."
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

        {/* ============================ BLOG POST CARDS ============================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id} className="glass-card overflow-hidden rounded-3xl">
                  {/* Gradient header */}
                  <div className="gradient-bg-animated p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================ POST MODAL ============================ */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[80] bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={() => setSelectedPost(null)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[81] flex items-center justify-center p-4">
              <motion.div
                className="glass-strong relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-4xl p-8 sm:p-10"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Category badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                  {selectedPost.category}
                </span>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {selectedPost.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                  {selectedPost.title}
                </h2>

                {/* Content split by \n\n */}
                <div className="mt-6 space-y-4">
                  {selectedPost.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

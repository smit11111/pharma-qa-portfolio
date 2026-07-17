'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { FadeIn, SectionHeader } from '@/components/animations';
import { siteConfig, socialLinks } from '@/lib/data';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="section-padding pt-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="I'm open to QA opportunities in the pharmaceutical industry. Reach out and let's start a conversation."
        />

        {/* ============================ CONTACT GRID ============================ */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Left — Contact info */}
          <FadeIn>
            <div className="glass-card h-full rounded-4xl p-8">
              <h3 className="text-xl font-bold sm:text-2xl">Contact Information</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Feel free to reach out through any of the channels below.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="min-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <div className="text-sm font-semibold sm:text-base">{siteConfig.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Phone
                    </div>
                    <div className="text-sm font-semibold sm:text-base">{siteConfig.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl glass p-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Location
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                      Rajkot, Gujarat, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Social
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
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
              </div>

              {/* Availability */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                Available for QA opportunities
              </div>
            </div>
          </FadeIn>

          {/* Right — Contact form */}
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card h-full rounded-4xl p-8"
            >
              <h3 className="text-xl font-bold sm:text-2xl">Send a Message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 w-full rounded-xl glass px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl glass px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="btn-primary h-14 w-full px-8 text-base disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </motion.span>
                    ) : status === 'success' ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <CheckCircle className="h-5 w-5" />
                        Message Sent!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </FadeIn>
        </div>

        {/* ============================ MAP EMBED ============================ */}
        <FadeIn className="mt-6">
          <div className="glass-card overflow-hidden rounded-4xl">
            <div className="flex items-center gap-3 border-b border-border/40 p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="text-base font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Rajkot, Gujarat, India</p>
              </div>
            </div>
            <iframe
              title="Rajkot, Gujarat map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118092.49029150492!2d70.7117!3d22.2855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9a3f3c4b0a7%3A0x4d2e2e2e2e2e2e2e!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>

        {/* ============================ RESPONSE TIME CALLOUT ============================ */}
        <FadeIn className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Typically responds within 24 hours
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

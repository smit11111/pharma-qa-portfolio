'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowUpRight, Heart } from 'lucide-react';
import { siteConfig, socialLinks, navItems } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container-px px-5 py-16">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`${siteConfig.name} — home`}
            >
              <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
                <ShieldCheck className="h-5 w-5 text-white" />
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.role}
            </p>

            {/* Social icons */}
            <div className="mt-1 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground transition-all duration-300 hover:bg-foreground/10 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:underline"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:underline"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:underline"
              >
                {siteConfig.phone}
              </a>
              <p className="text-muted-foreground">Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
            using Next.js &amp; Framer Motion
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-foreground/5 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Back to Top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

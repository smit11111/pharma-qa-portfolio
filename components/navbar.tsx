'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { navItems, siteConfig } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-2 left-1/2 z-[70] w-[calc(100%-1rem)] -translate-x-1/2">
        <nav
          className={cn(
            'mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500',
            scrolled
              ? 'glass-nav shadow-lg shadow-foreground/5'
              : 'border border-transparent'
          )}
        >
          {/* Logo + name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
              <ShieldCheck className="h-5 w-5 text-white" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          {/* Center nav links (desktop) */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[75] bg-background/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="glass-nav fixed right-0 top-0 z-[76] flex h-full w-[82%] max-w-sm flex-col px-6 py-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: EASE }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`${siteConfig.name} — home`}
                >
                  <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-foreground">
                    {siteConfig.name}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + i * 0.04, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-foreground/8 text-foreground'
                            : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

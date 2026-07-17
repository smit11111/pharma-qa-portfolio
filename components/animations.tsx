'use client';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
  type Variants,
} from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* -------------------------------------------------------------------------- */
/*  FadeIn                                                                    */
/* -------------------------------------------------------------------------- */

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, y = 30, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stagger / StaggerItem                                                     */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: {
      staggerChildren: 0.12,
      delayChildren: delay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SectionHeader                                                             */
/* -------------------------------------------------------------------------- */

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        'mx-auto flex max-w-2xl flex-col items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

/* -------------------------------------------------------------------------- */
/*  AnimatedCounter                                                           */
/* -------------------------------------------------------------------------- */

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
  });
  const [display, setDisplay] = useState(
    `${prefix ?? ''}${(0).toFixed(decimals)}${suffix ?? ''}`
  );

  useEffect(() => {
    const unsubscribe = spring.on('change', (v: number) => {
      setDisplay(`${prefix ?? ''}${v.toFixed(decimals)}${suffix ?? ''}`);
    });
    return () => unsubscribe();
  }, [spring, decimals, prefix, suffix]);

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: EASE,
      });
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}

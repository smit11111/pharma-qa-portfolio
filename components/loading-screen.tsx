'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl gradient-bg">
            <div className="absolute inset-0 animate-spin-slow rounded-2xl gradient-bg blur-lg" />
            <ShieldCheck className="relative h-10 w-10 text-white" />
          </div>

          <div className="mb-4 h-0.5 w-[120px] overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full gradient-bg"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            className="text-sm font-medium text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

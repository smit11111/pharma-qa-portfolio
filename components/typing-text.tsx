'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  phrases: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypingText({
  phrases,
  className,
  speed = 60,
  deleteSpeed = 30,
  pauseDuration = 2000,
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex] ?? '';

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      // Finished typing; pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      // Finished deleting; move to next phrase
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      // Type or delete one character
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={cn(className)}>
      <span>{text}</span>
      <span className="ml-1 inline-block w-[2px] animate-pulse bg-primary" style={{ height: '1em' }} />
    </span>
  );
}

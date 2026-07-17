import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="glass-card max-w-md rounded-4xl p-12 text-center">
        <div className="mb-6 font-display text-8xl font-bold gradient-text">404</div>
        <h1 className="mb-3 font-display text-2xl font-bold">Page not found</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary group h-12 px-7"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

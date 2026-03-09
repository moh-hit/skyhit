import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-6 py-24 md:px-10 flex items-center justify-center">
      <div className="max-w-md text-center space-y-4">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

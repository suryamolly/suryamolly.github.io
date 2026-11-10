import Link from "next/link";
import { ArrowLeft, Rss } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

/** Simple reading layout for blog pages: top bar + centered column. */
export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Surya Mouly</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/blog/"
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Blog
            </Link>
            <a
              href="/feed.xml"
              aria-label="RSS feed"
              className="p-2 rounded-lg text-zinc-500 hover:text-orange-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Rss className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">{children}</main>
    </div>
  );
}

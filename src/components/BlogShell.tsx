import Image from "next/image";
import Link from "next/link";
import { Rss } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

/** Page frame for blog pages: top bar, content area, footer. */
export function BlogShell({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  /** Wider column for pages with a sidebar (post pages). */
  wide?: boolean;
}) {
  const { personal } = portfolioData;
  const width = wide ? "max-w-6xl" : "max-w-5xl";

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-[380px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className={`${width} mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4`}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={personal.avatarUrl}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 rounded-lg object-cover object-top ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
            <span className="text-sm font-semibold text-zinc-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {personal.name}
            </span>
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            <Link
              href="/"
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/blog/"
              className="px-3 py-1.5 rounded-lg font-medium text-zinc-950 dark:text-white bg-zinc-100 dark:bg-zinc-900"
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
          </nav>
        </div>
      </header>

      <main className={`flex-1 w-full ${width} mx-auto px-4 sm:px-6 py-12 lg:py-16`}>{children}</main>

      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div
          className={`${width} mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500`}
        >
          <span>
            © {new Date().getFullYear()} {personal.name}
          </span>
          <div className="flex items-center gap-1">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:text-zinc-950 dark:hover:text-white transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="/feed.xml" aria-label="RSS feed" className="p-2 rounded-lg hover:text-orange-500 transition-colors">
              <Rss className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

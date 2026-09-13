"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Package, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-zinc-950 dark:text-white tracking-tight text-sm">
              {personal.name}
            </span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-xs text-zinc-500">
              Staff Engineer @ {personal.company} | Mobile App Architect
            </span>
          </div>

          {/* Center: Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-zinc-500 hover:text-sky-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.pubDev}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="pub.dev Profile"
              className="p-2 rounded-lg text-zinc-500 hover:text-sky-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Package className="w-4 h-4" />
            </a>
            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Blog"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-center text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Surya Mouly. Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

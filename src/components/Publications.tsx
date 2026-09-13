"use client";

import { motion } from "framer-motion";
import { portfolioData, Publication } from "@/data/portfolio";
import { BookOpen, FileText, ArrowUpRight } from "lucide-react";

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
          07 // PUBLICATIONS &amp; WRITING
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Research Papers &amp; Technical Insights
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Contributions to computer science research and technical writing on mobile software architecture and development best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub: Publication, index: number) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:border-sky-500/30 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  {pub.type === "Research Paper" ? (
                    <FileText className="w-3.5 h-3.5" />
                  ) : (
                    <BookOpen className="w-3.5 h-3.5" />
                  )}
                  {pub.type}
                </span>
                <span className="text-xs font-mono text-zinc-400">{pub.outlet}</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {pub.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {pub.description}
              </p>
            </div>

            {pub.link && (
              <div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
                >
                  <span>Read on Medium</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData, Education as EducationType } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
          04 // ACADEMIC FOUNDATION
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Education &amp; Academic Background
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Formal engineering foundation in computer science, system architectures, algorithmic problem solving, and software engineering principles.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="space-y-8">
        {education.map((edu: EducationType, index: number) => (
          <motion.div
            key={`${edu.degree}-${edu.institution}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-10 hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all hover:shadow-[0_4px_30px_rgba(56,189,248,0.06)] group"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-sky-500/15 transition-all" />

            <div className="relative z-10">
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-2">
                      <Award className="w-3 h-3" />
                      Engineering Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60">
                    <MapPin className="w-3.5 h-3.5 text-sky-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                  {edu.description}
                </p>
              )}

              {/* Academic Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                    <span>Key Academic Highlights &amp; Foundations</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

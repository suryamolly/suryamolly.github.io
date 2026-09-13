"use client";

import { motion } from "framer-motion";
import { portfolioData, Experience as ExperienceType } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
          03 // CAREER JOURNEY
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Work Experience &amp; Engineering Leadership
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          A progression of technical leadership, architectural governance, and system-level mobile engineering across enterprise consulting and global tech leaders.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-12">
        {experience.map((exp: ExperienceType, index: number) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Timeline node dot */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                exp.current
                  ? "bg-sky-500 border-white dark:border-zinc-950 ring-4 ring-sky-500/20"
                  : "bg-white dark:bg-zinc-900 border-zinc-400 dark:border-zinc-600 group-hover:border-sky-500"
              }`}
            />

            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
                    <span>{exp.role}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Present Role
                      </span>
                    )}
                  </h3>
                  <div className="text-base font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="space-y-2 mb-5">
                  {exp.responsibilities.map((item, rIndex) => (
                    <div key={rIndex} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

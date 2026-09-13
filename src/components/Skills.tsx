"use client";

import { motion } from "framer-motion";
import { portfolioData, SkillCategory } from "@/data/portfolio";
import { Smartphone, LayoutGrid, Terminal, HeartHandshake, Bot } from "lucide-react";

const categoryIcons = [Bot, Smartphone, LayoutGrid, Terminal, HeartHandshake];

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="scroll-mt-20">
      {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
            05 // TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Core Competencies &amp; Technical Matrix
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            A balanced synthesis of system-level engineering, Agentic AI product workflows, cross-platform mobile frameworks, and engineering leadership.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category: SkillCategory, index: number) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {category.skills.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 hover:border-sky-500/30 transition-colors"
                    >
                      <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 font-sans">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                          item.level === "Expert"
                            ? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
                            : item.level === "Advanced"
                            ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}

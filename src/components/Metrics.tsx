"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award, Smartphone, Users, Code2 } from "lucide-react";

const metricIcons = [Smartphone, Award, Users, Code2];

export function Metrics() {
  const { metrics } = portfolioData;

  return (
    <section className="p-5 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 backdrop-blur-sm">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => {
            const Icon = metricIcons[index % metricIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-mono">
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </span>
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}

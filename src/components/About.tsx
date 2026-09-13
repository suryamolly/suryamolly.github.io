"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Layers, Compass, Zap, Users2, Bot } from "lucide-react";

const pillarIcons = [Layers, Bot, Compass, Zap, Users2];

export function About() {
  const { about, personal } = portfolioData;

  const [imgSrc, setImgSrc] = React.useState<string>(
    personal.avatarUrl || personal.fallbackAvatarUrl || ""
  );
  const [imgFailed, setImgFailed] = React.useState(false);

  const handleImgError = () => {
    if (imgSrc === personal.avatarUrl && personal.fallbackAvatarUrl) {
      setImgSrc(personal.fallbackAvatarUrl);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
        {/* Left Column: Bio & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
            01 // ABOUT ME
          </div>

          {/* Executive Profile Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/90 dark:to-zinc-950 shadow-xs">
            <div className="relative shrink-0">
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-sky-500/30 shadow-md bg-zinc-950">
                {!imgFailed && imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={personal.name}
                    onError={handleImgError}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-950 font-bold text-2xl">
                    SM
                  </div>
                )}
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-950"></span>
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
                {personal.name}
              </h3>
              <p className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
                Staff Engineer &amp; Mobile Architect
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Nagarro • Noida, India • 10+ Years Experience
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {about.headline}
          </h2>

          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Quick info chip matrix */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-400 block mb-1">LOCATION</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-sans font-medium text-sm">
                Noida, UP, India
              </span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">SPECIALIZATION</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-sans font-medium text-sm">
                Mobile Architecture &amp; Agentic AI
              </span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">EDUCATION</span>
              <a
                href="#education"
                className="text-zinc-900 dark:text-zinc-200 font-sans font-medium text-sm hover:text-sky-500 transition-colors inline-flex items-center gap-1 group"
              >
                <span>B.Tech in Computer Science</span>
                <span className="text-xs text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">CURRENT ROLE</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-sans font-medium text-sm">
                Staff Engineer @ Nagarro
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Architectural Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {about.corePillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] group ${
                  index === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white mb-4 group-hover:bg-sky-500/10 group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:border-sky-500/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

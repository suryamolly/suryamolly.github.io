"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, BookOpen, Package } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-4 pb-8 sm:pt-6 sm:pb-12 overflow-hidden scroll-mt-20">
      {/* Background glow & ambient effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10 dark:from-sky-500/20 dark:via-indigo-500/15" />

      <div>
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-sm backdrop-blur-sm text-zinc-800 dark:text-zinc-200 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Staff Engineer @ Nagarro</span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-zinc-500 dark:text-zinc-400">Mobile App Architect</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.1] mb-6"
        >
          Architecting scalable <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            mobile ecosystems
          </span>{" "}
          &amp; agentic products.
        </motion.h1>

        {/* Subhead / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10"
        >
          Hi, I&apos;m <span className="text-zinc-900 dark:text-white font-medium">Surya Mouly</span>. 
          A Staff Engineer &amp; Mobile Architect with <span className="text-zinc-900 dark:text-white font-medium">10+ years</span> of experience 
          specializing in <span className="text-zinc-900 dark:text-white font-medium">Flutter, Android internals, and modular system design</span>. 
          From architecting Lufthansa Group&apos;s Miles &amp; More, Tirhal ride-hailing (5M+ users), and Samsung ONE UI to rapidly engineering production web platforms with <span className="text-zinc-900 dark:text-white font-medium">Agentic AI</span>, 
          I translate complex functional requirements into resilient, high-impact software.
        </motion.p>

        {/* Call to Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore Featured Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors backdrop-blur-sm"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-600" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={personal.pubDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-sky-500/20 bg-sky-500/5 text-sky-600 dark:text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>pub.dev (muscle_mapper)</span>
          </a>
        </motion.div>

        {/* Secondary Social Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-500"
        >
          <span className="font-mono uppercase tracking-wider">Connect Directly:</span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </a>
            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Medium Blog</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

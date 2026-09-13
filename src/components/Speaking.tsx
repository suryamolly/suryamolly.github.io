"use client";

import { motion } from "framer-motion";
import { portfolioData, SpeakingEngagement } from "@/data/portfolio";
import { Mic, Calendar, MapPin, CheckCircle2, Sparkles, ExternalLink, MessageSquareQuote } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export function Speaking() {
  const { speaking } = portfolioData;

  if (!speaking || speaking.length === 0) return null;

  return (
    <section id="speaking" className="scroll-mt-20">
      {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
              06 // STAGE &amp; SPEAKING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Stage Presence &amp; Speaking Engagements
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Sharing technical depth, generative AI reasoning paradigms, and mobile engineering architecture at global conferences and corporate innovation summits.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500/15 transition-colors"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Invite to Speak</span>
            </a>
          </div>
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {speaking.map((item: SpeakingEngagement, index: number) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-8 hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all hover:shadow-[0_4px_30px_rgba(56,189,248,0.08)] group"
            >
              <div>
                {/* Header Row: Role Badge & Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <Mic className="w-3 h-3" />
                    {item.role}
                  </span>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Event Name */}
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                  {item.event}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Takeaways / Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-sky-500" />
                      <span>Key Highlights &amp; Insights</span>
                    </h4>
                    {item.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct LinkedIn Post Action */}
                {item.link && (
                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] dark:text-sky-400 border border-[#0077B5]/20 transition-all shadow-xs group/btn"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0077B5] dark:text-sky-400" />
                      <span>View LinkedIn Post &amp; Discussion</span>
                      <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stage Presence Callout Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                Looking for a speaker, tech lead panelist, or podcast guest?
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Available to speak on Mobile System Architecture, Samsung ONE UI internals, Flutter at scale, and Chain of Thought AI reasoning.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
    </section>
  );
}

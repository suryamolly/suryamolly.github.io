"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Compose mailto link with prefilled data
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
    }, 800);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              08 // GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Let&apos;s build something impactful together.
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Whether you want to discuss mobile system architecture, RFP technical solutioning, Flutter consulting, or engineering leadership opportunities, my inbox is always open.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card with Copy Button */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-mono">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-sky-600 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Info */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-mono">PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-mono">LOCATION</span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Connect */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 text-sky-600 dark:text-sky-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="text-sm font-semibold">Connect on LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="xl:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Fill out the fields below to initiate a direct conversation.
              </p>

              {status === "sent" ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Your email client should have opened with the message draft. If not, feel free to email directly at {personal.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-xs text-sky-600 font-medium underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-zinc-500 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-zinc-500 mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Mobile Architecture Collaboration / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-500 mb-1.5">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Surya, I'd like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "submitting" ? "Preparing Message..." : "Send Message via Email"}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
    </section>
  );
}

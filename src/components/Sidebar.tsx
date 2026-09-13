"use client";

import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  Package,
  Mail,
  Menu,
  X,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "#hero", num: "01" },
  { name: "About", href: "#about", num: "02" },
  { name: "Featured Projects", href: "#projects", num: "03" },
  { name: "Career Experience", href: "#experience", num: "04" },
  { name: "Education", href: "#education", num: "05" },
  { name: "Technical Matrix", href: "#skills", num: "06" },
  { name: "Speaking & Talks", href: "#speaking", num: "07" },
  { name: "Publications", href: "#publications", num: "08" },
  { name: "Get in Touch", href: "#contact", num: "09" },
];

export function Sidebar() {
  const { personal } = portfolioData;
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [avatarSrc, setAvatarSrc] = React.useState<string>(
    personal.avatarUrl || personal.fallbackAvatarUrl || ""
  );
  const [failedAvatar, setFailedAvatar] = React.useState(false);

  const handleAvatarError = () => {
    if (avatarSrc === personal.avatarUrl && personal.fallbackAvatarUrl) {
      setAvatarSrc(personal.fallbackAvatarUrl);
    } else {
      setFailedAvatar(true);
    }
  };

  // ScrollSpy to track active section in viewport
  React.useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 shrink-0 bg-zinc-100 dark:bg-zinc-800">
            {!failedAvatar && avatarSrc ? (
              <img
                src={avatarSrc}
                alt={personal.name}
                onError={handleAvatarError}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="flex items-center justify-center w-full h-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs">
                SM
              </span>
            )}
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-950 dark:text-white leading-tight">
              Surya Mouly
            </div>
            <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
              Staff Engineer
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg px-6 py-6 overflow-y-auto border-b border-zinc-200 dark:border-zinc-800 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                    isActive
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs opacity-50">{item.num}</span>
                    <span>{item.name}</span>
                  </span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-around">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.pubDev}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-sky-500 transition-colors"
              aria-label="pub.dev"
            >
              <Package className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg text-zinc-500 hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Desktop Sticky Left Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-88 lg:shrink-0 lg:py-10 lg:px-7 lg:border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl">
        {/* Top: Identity & Status */}
        <div>
          {/* Avatar / Brand */}
          <div className="flex items-center gap-4 mb-5">
            <div className="relative group shrink-0">
              <div className="w-13 h-13 rounded-2xl overflow-hidden ring-2 ring-zinc-200/90 dark:ring-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-800 transition-transform group-hover:scale-105">
                {!failedAvatar && avatarSrc ? (
                  <img
                    src={avatarSrc}
                    alt={personal.name}
                    onError={handleAvatarError}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-950 font-bold text-base shadow-sm">
                    SM
                  </div>
                )}
              </div>
              {/* Active online pulse */}
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-950"></span>
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
                {personal.name}
              </h1>
              <p className="text-xs font-medium text-sky-600 dark:text-sky-400 flex items-center gap-1.5 mt-0.5">
                <Briefcase className="w-3 h-3 shrink-0" />
                <span>Staff Engineer @ {personal.company}</span>
              </p>
              <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                <MapPin className="w-3 h-3 shrink-0" />
                <span>{personal.location.split(",")[0]}, India</span>
              </div>
            </div>
          </div>

          {/* Quick Tagline */}
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            Architecting high-concurrency mobile systems, enterprise frameworks, and production web platforms with Agentic AI.
          </p>

          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Mobile Architect • Agentic AI</span>
          </div>

          {/* Section Navigation Menu with ScrollSpy */}
          <nav className="space-y-1" aria-label="Table of contents">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 px-3 mb-2">
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-left text-xs font-medium transition-all group ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-white font-semibold shadow-xs"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[11px] transition-colors ${
                        isActive
                          ? "text-sky-600 dark:text-sky-400 font-bold"
                          : "text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span>{item.name}</span>
                  </span>

                  {/* Active indicator bar */}
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-4 bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                        : "w-0 bg-transparent group-hover:w-1.5 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Location, Social Channels & Theme Toggle */}
        <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{personal.location}</span>
            </span>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-zinc-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
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
              aria-label="pub.dev Packages"
              className="p-2 rounded-lg text-zinc-500 hover:text-sky-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Package className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg text-zinc-500 hover:text-emerald-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

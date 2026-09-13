import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Speaking } from "@/components/Speaking";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/20 selection:text-sky-400">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      {/* Main Split Shell: Left Sticky Sidebar + Right Content Stream */}
      <div className="flex flex-col lg:flex-row min-h-screen max-w-7xl mx-auto">
        {/* Left Sticky Panel */}
        <Sidebar />

        {/* Right Scrollable Content Stream */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 lg:py-12 space-y-20 lg:space-y-28">
          <Hero />
          <Metrics />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Speaking />
          <Publications />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

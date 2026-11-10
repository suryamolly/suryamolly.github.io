"use client";

import * as React from "react";
import type { Heading } from "@/lib/blog";

/** "On this page" list that highlights the section currently being read. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(headings[0]?.id ?? null);

  React.useEffect(() => {
    const update = () => {
      // The active heading is the last one that has scrolled past the top area.
      let current = headings[0]?.id ?? null;
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-zinc-200 dark:border-zinc-800">
        {headings.map((heading) => {
          const active = heading.id === activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`-ml-px block border-l py-1.5 text-[13px] leading-snug transition-colors ${
                  heading.level === 3 ? "pl-7" : "pl-4"
                } ${
                  active
                    ? "border-sky-500 text-sky-700 dark:text-sky-300 font-medium"
                    : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

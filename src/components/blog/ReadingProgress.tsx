"use client";

import * as React from "react";

/** Thin gradient bar at the top of the page showing how far you've read. */
export function ReadingProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-0.5 pointer-events-none" aria-hidden>
      <div
        className="h-full origin-left bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

import Image from "next/image";
import type { Post } from "@/lib/blog";

// Gradient pairs used when a post has no cover image.
const PALETTES = [
  ["from-sky-500", "to-indigo-600"],
  ["from-emerald-500", "to-sky-600"],
  ["from-violet-500", "to-fuchsia-600"],
  ["from-amber-500", "to-rose-600"],
  ["from-cyan-500", "to-blue-700"],
];

function hash(value: string): number {
  let h = 0;
  for (const char of value) h = (h * 31 + char.charCodeAt(0)) >>> 0;
  return h;
}

/** Cover image for a post, or a generated gradient tile when it has none. */
export function PostCover({
  post,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  post: Post;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (post.cover) {
    return (
      <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${className}`}>
        <Image
          src={post.cover}
          alt={post.coverAlt ?? post.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const [from, to] = PALETTES[hash(post.slug) % PALETTES.length];
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden bg-gradient-to-br ${from} ${to} ${className}`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay" />
      <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/20 blur-2xl" />
      <span className="absolute left-5 bottom-4 font-mono text-xs text-white/80">
        {post.tags?.[0] ?? "notes"}
      </span>
    </div>
  );
}

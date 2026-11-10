import { CalendarDays, Clock } from "lucide-react";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/format";

/** "Nov 7, 2026 · 6 min read" with optional draft badge. */
export function PostMetaLine({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 ${className}`}
    >
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="w-3.5 h-3.5" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        {`${post.readingMinutes} min read`}
      </span>
      {post.draft && (
        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
          draft
        </span>
      )}
    </div>
  );
}

export function TagList({ tags, className = "" }: { tags?: string[]; className?: string }) {
  if (!tags?.length) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

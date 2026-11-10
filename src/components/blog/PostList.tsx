"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Post } from "@/lib/blog";
import { PostCover } from "./PostCover";
import { PostMetaLine, TagList } from "./PostMetaLine";

/** Featured latest post + grid of the rest, with topic filter chips. */
export function PostList({ posts }: { posts: Post[] }) {
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const tagCounts = React.useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) for (const tag of post.tags ?? []) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [posts]);

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-12 text-center">
        <p className="text-sm text-zinc-500">No posts yet. Check back soon.</p>
      </div>
    );
  }

  const filtered = activeTag ? posts.filter((post) => post.tags?.includes(activeTag)) : posts;
  // The newest post is featured only in the unfiltered view.
  const featured = activeTag ? undefined : filtered[0];
  const rest = activeTag ? filtered : filtered.slice(1);

  return (
    <div>
      {tagCounts.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-8" role="toolbar" aria-label="Filter by topic">
          <Chip active={activeTag === null} onClick={() => setActiveTag(null)}>
            All <span className="opacity-50">{posts.length}</span>
          </Chip>
          {tagCounts.map(([tag, count]) => (
            <Chip key={tag} active={activeTag === tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
              {tag} <span className="opacity-50">{count}</span>
            </Chip>
          ))}
        </div>
      )}

      {featured && <FeaturedCard post={featured} />}

      {rest.length > 0 && (
        <>
          {featured && (
            <div className="flex items-center gap-4 mt-14 mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">More articles</h2>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          )}
          <ul className="grid gap-6 sm:grid-cols-2">
            {rest.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300"
          : "border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group relative block rounded-3xl p-px bg-gradient-to-br from-zinc-200 via-zinc-200 to-zinc-200 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 hover:from-sky-500/60 hover:via-indigo-500/30 hover:to-transparent transition-colors"
    >
      <article className="grid md:grid-cols-[1.15fr_1fr] overflow-hidden rounded-[calc(1.5rem-1px)] bg-white dark:bg-zinc-950">
        <PostCover post={post} priority className="aspect-[16/10] md:aspect-auto md:min-h-80" />
        <div className="flex flex-col p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 mb-5">
            <Sparkles className="w-3 h-3" />
            Latest
          </span>
          <PostMetaLine post={post} />
          <h2 className="mt-3 text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-snug text-zinc-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {post.description}
          </p>
          <TagList tags={post.tags} className="mt-5" />
          <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
            Read article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all"
    >
      <PostCover post={post} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[16/9]" />
      <div className="flex flex-col flex-1 p-5">
        <PostMetaLine post={post} />
        <h3 className="mt-2.5 text-lg font-semibold leading-snug text-zinc-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {post.description}
        </p>
        <TagList tags={post.tags} className="mt-auto pt-4" />
      </div>
    </Link>
  );
}

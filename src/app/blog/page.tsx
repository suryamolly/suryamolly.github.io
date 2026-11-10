import type { Metadata } from "next";
import { ArrowUpRight, Rss } from "lucide-react";
import { BlogShell } from "@/components/BlogShell";
import { PostList } from "@/components/blog/PostList";
import { portfolioData } from "@/data/portfolio";
import { getPosts, SITE_URL } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Surya Mouly",
  description:
    "Writing by Surya Mouly on mobile architecture, Flutter, Android, and building with Agentic AI.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog/`,
    title: "Blog | Surya Mouly",
    description: "Notes on mobile architecture, Flutter, Android, and Agentic AI.",
  },
};

export default async function BlogIndex() {
  const posts = await getPosts();
  const topicCount = new Set(posts.flatMap((post) => post.tags ?? [])).size;

  return (
    <BlogShell>
      <header className="mb-12 lg:mb-16">
        <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-5">
          <span className="w-6 h-px bg-current" />
          Writing
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-950 dark:text-white max-w-3xl">
          Field notes on{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            mobile, architecture
          </span>{" "}
          &amp; AI.
        </h1>
        <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Lessons from a decade of shipping apps to millions of users, and from building products with
          AI agents. Written for engineers and the people who hire them.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90 transition-opacity"
          >
            <Rss className="w-4 h-4" />
            Subscribe via RSS
          </a>
          <a
            href={portfolioData.personal.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Follow on Medium
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
          <span className="sm:ml-auto text-xs font-mono text-zinc-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"} · {topicCount}{" "}
            {topicCount === 1 ? "topic" : "topics"}
          </span>
        </div>
      </header>

      <PostList posts={posts} />
    </BlogShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { BlogShell } from "@/components/BlogShell";
import { formatDate, getPosts, SITE_URL } from "@/lib/blog";

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

  return (
    <BlogShell>
      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
          Writing
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Blog
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Notes on mobile architecture, Flutter, Android, and building with Agentic AI.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-zinc-500">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="block p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:border-sky-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-zinc-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingMinutes} min read</span>
                  {post.draft && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      draft
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </BlogShell>
  );
}

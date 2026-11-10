import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogShell } from "@/components/BlogShell";
import { formatDate, getPosts, loadPost, SITE_URL } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

// Static export: every post URL is generated at build time; anything else 404s.
export const dynamicParams = false;

// Static export refuses an empty list, so before the first published post we
// emit one placeholder route that just renders the 404 page.
const PLACEHOLDER_SLUG = "_";

export async function generateStaticParams() {
  const posts = await getPosts();
  if (posts.length === 0) return [{ slug: PLACEHOLDER_SLUG }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === PLACEHOLDER_SLUG) return {};
  const { post } = await loadPost(slug);
  const url = `${SITE_URL}/blog/${slug}/`;

  return {
    title: `${post.title} | Surya Mouly`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Surya Mouly"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  if (slug === PLACEHOLDER_SLUG) notFound();
  const { post, Content } = await loadPost(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${slug}/`,
    keywords: post.tags?.join(", "),
    author: { "@type": "Person", name: "Surya Mouly", url: SITE_URL },
  };

  return (
    <BlogShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="mb-10">
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
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-zinc-950 dark:text-white">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
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
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800">
          <Content />
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          All posts
        </Link>
      </div>
    </BlogShell>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { BlogShell } from "@/components/BlogShell";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PostMetaLine, TagList } from "@/components/blog/PostMetaLine";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { portfolioData } from "@/data/portfolio";
import { getAdjacentPosts, getHeadings, getPosts, loadPost, SITE_URL, type Post } from "@/lib/blog";

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
  const images = post.cover ? [{ url: `${SITE_URL}${post.cover}`, alt: post.coverAlt ?? post.title }] : undefined;

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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: images?.map((image) => image.url),
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  if (slug === PLACEHOLDER_SLUG) notFound();

  const [{ post, Content }, { newer, older }] = await Promise.all([loadPost(slug), getAdjacentPosts(slug)]);
  const headings = getHeadings(slug);
  const url = `${SITE_URL}/blog/${slug}/`;
  const { personal } = portfolioData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url,
    image: post.cover ? `${SITE_URL}${post.cover}` : undefined,
    keywords: post.tags?.join(", "),
    author: { "@type": "Person", name: personal.name, url: SITE_URL },
  };

  return (
    <BlogShell wide>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-8">
        <Link href="/blog/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
          Blog
        </Link>
        {post.tags?.[0] && (
          <>
            <ChevronRight className="w-3 h-3" />
            <span>{post.tags[0]}</span>
          </>
        )}
      </nav>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 xl:gap-20">
        <article className="min-w-0 max-w-3xl">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-zinc-950 dark:text-white text-balance">
              {post.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-4 border-y border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-zinc-200 dark:ring-zinc-800"
                />
                <div>
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">{personal.name}</div>
                  <PostMetaLine post={post} className="mt-0.5" />
                </div>
              </div>
              <ShareButtons url={url} title={post.title} />
            </div>
          </header>

          {post.cover && (
            <figure className="mt-10">
              <div className="relative aspect-[1600/838] overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={post.cover}
                  alt={post.coverAlt ?? post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              {post.coverCredit && (
                <figcaption className="mt-3 text-center text-xs text-zinc-500">
                  {post.coverCredit.url ? (
                    <a
                      href={post.coverCredit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-950 dark:hover:text-white underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      Photo: {post.coverCredit.text}
                    </a>
                  ) : (
                    <>Photo: {post.coverCredit.text}</>
                  )}
                </figcaption>
              )}
            </figure>
          )}

          <div className="blog-prose prose prose-zinc dark:prose-invert prose-lg max-w-none mt-10">
            <Content />
          </div>

          <footer className="mt-14 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <TagList tags={post.tags} />
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-500">Share</span>
                <ShareButtons url={url} title={post.title} />
              </div>
            </div>

            <AuthorCard />

            {(newer || older) && (
              <nav aria-label="More posts" className="grid gap-4 sm:grid-cols-2">
                {older ? <AdjacentLink post={older} direction="older" /> : <div />}
                {newer && <AdjacentLink post={newer} direction="newer" />}
              </nav>
            )}

            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              All articles
            </Link>
          </footer>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>
    </BlogShell>
  );
}

function AuthorCard() {
  const { personal } = portfolioData;
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 p-6 sm:p-7">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row gap-5">
        <Image
          src={personal.avatarUrl}
          alt={personal.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-white dark:ring-zinc-800 shadow-sm shrink-0"
        />
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Written by</p>
          <h2 className="mt-1 text-lg font-bold text-zinc-950 dark:text-white">{personal.name}</h2>
          <p className="text-sm text-sky-600 dark:text-sky-400">
            Staff Engineer @ {personal.company} · Mobile App Architect
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{personal.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90 transition-opacity"
            >
              View portfolio
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              Connect
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdjacentLink({ post, direction }: { post: Post; direction: "older" | "newer" }) {
  const isNewer = direction === "newer";
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className={`group block p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors ${
        isNewer ? "sm:text-right" : ""
      }`}
    >
      <span className={`flex items-center gap-1.5 text-xs font-mono text-zinc-500 ${isNewer ? "sm:justify-end" : ""}`}>
        {!isNewer && <ArrowLeft className="w-3.5 h-3.5" />}
        {isNewer ? "Newer" : "Older"}
        {isNewer && <ArrowRight className="w-3.5 h-3.5" />}
      </span>
      <span className="mt-2 block font-semibold leading-snug text-zinc-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
        {post.title}
      </span>
    </Link>
  );
}

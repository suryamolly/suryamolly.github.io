import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import GithubSlugger from "github-slugger";

export const SITE_URL = "https://suryamouly.in";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/** Shape of the `export const metadata = {...}` block at the top of each post. */
export type PostMeta = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-10" */
  date: string;
  tags?: string[];
  /** Cover image path under /public, e.g. "/blog/my-post/cover.jpg" */
  cover?: string;
  coverAlt?: string;
  /** Photo credit shown under the cover, e.g. { text: "Jane Doe on Unsplash", url: "..." } */
  coverCredit?: { text: string; url?: string };
  /** Drafts show up in `pnpm dev` but are left out of production builds. */
  draft?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  readingMinutes: number;
};

export type Heading = { id: string; text: string; level: 2 | 3 };

const showDrafts = process.env.NODE_ENV !== "production";

function readSource(slug: string): string {
  return fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
}

/** Strip code blocks so they don't count as prose or headings. */
function withoutCode(source: string): string {
  return source.replace(/```[\s\S]*?```/g, " ");
}

function readingMinutes(source: string): number {
  const words = withoutCode(source).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Headings for the table of contents. Ids are generated the same way
 * rehype-slug generates them, so the links match the rendered page.
 */
export function getHeadings(slug: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];

  for (const line of withoutCode(readSource(slug)).split("\n")) {
    const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links → text
      .replace(/[*_`~]/g, "");
    const id = slugger.slug(text);
    const level = match[1].length;
    if (level === 2 || level === 3) headings.push({ id, text, level });
  }
  return headings;
}

function allSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function loadPost(slug: string): Promise<{ post: Post; Content: ComponentType }> {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  const meta = mod.metadata as PostMeta | undefined;
  if (!meta?.title || !meta?.date || !meta?.description) {
    throw new Error(`Post "${slug}.mdx" needs metadata with title, description and date.`);
  }
  return {
    post: { ...meta, slug, readingMinutes: readingMinutes(readSource(slug)) },
    Content: mod.default,
  };
}

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(allSlugs().map(async (slug) => (await loadPost(slug)).post));
  return posts
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** The posts published just before and after this one. */
export async function getAdjacentPosts(slug: string): Promise<{ newer?: Post; older?: Post }> {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { newer: posts[index - 1], older: posts[index + 1] };
}

export { formatDate } from "./format";

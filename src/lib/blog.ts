import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export const SITE_URL = "https://suryamouly.in";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/** Shape of the `export const metadata = {...}` block at the top of each post. */
export type PostMeta = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-10" */
  date: string;
  tags?: string[];
  /** Drafts show up in `pnpm dev` but are left out of production builds. */
  draft?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  readingMinutes: number;
};

const showDrafts = process.env.NODE_ENV !== "production";

function readingMinutes(slug: string): number {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const words = raw.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
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
    post: { ...meta, slug, readingMinutes: readingMinutes(slug) },
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

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

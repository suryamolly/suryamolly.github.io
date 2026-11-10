import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Determine base path for GitHub Pages if deployed under a repository subdirectory
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "") : "";
const isUserPage = repo.endsWith(".github.io");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions && repo && !isUserPage ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

// Plugins are referenced by name so the config also works with Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark-dimmed" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);

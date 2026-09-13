import type { NextConfig } from "next";

// Determine base path for GitHub Pages if deployed under a repository subdirectory
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "") : "";
const isUserPage = repo.endsWith(".github.io");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions && repo && !isUserPage ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

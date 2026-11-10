# Surya Mouly — Portfolio

Personal portfolio site, live at **[suryamouly.in](https://suryamouly.in)**.

Built with Next.js (App Router, static export), React, Tailwind CSS v4, framer-motion, and next-themes.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build    # static export to ./out
```

## Project layout

| Path | What's there |
| --- | --- |
| `src/data/portfolio.ts` | All site content — bio, projects, experience, skills, talks, publications. Edit this to update the site. |
| `src/components/` | One component per page section, plus the sticky `Sidebar` navigation and theme toggle. |
| `src/app/layout.tsx` | Page metadata, Open Graph tags, and JSON-LD structured data. |
| `src/app/robots.ts`, `sitemap.ts` | Generated at build time. |
| `public/` | Static assets (`profile.png`, icons) and `CNAME` for the custom domain. |

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages. The custom domain is set by `public/CNAME`.

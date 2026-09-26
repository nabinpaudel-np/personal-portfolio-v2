# Personal Portfolio v2

Personal portfolio site for **Nabin Paudel** — Technical Project Manager, builder, entrepreneur, and educator working across technology, business, and execution.

**Live:** [https://paudelnabin.com.np](https://paudelnabin.com.np)
**Repo:** `github.com/nabinpaudel-np/personal-portfolio-v2`

---

## Stack

| Layer        | Tool                                                |
| ------------ | --------------------------------------------------- |
| Framework    | [Next.js 15](https://nextjs.org) (App Router, RSC)   |
| Language     | TypeScript                                          |
| Styling      | [Tailwind CSS 3.4](https://tailwindcss.com)         |
| Content      | Markdown via [`next-mdx-remote` (RSC)](https://github.com/hashicorp/next-mdx-remote) |
| Frontmatter  | [`gray-matter`](https://github.com/jonschlinkert/gray-matter) |
| Markdown     | `remark-gfm`, `rehype-slug`, `rehype-autolink-headings` |
| Fonts        | Inter (body), JetBrains Mono (label), Righteous (headline) — loaded via Google Fonts `<link>` |
| Icons        | [Material Symbols Outlined](https://fonts.google.com/icons) |

---

## Getting Started

```bash
# Install
npm install

# Dev (default port 3000, falls back to 3001/3002 if busy)
npm run dev

# Production build
npm run build

# Production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start Next.js dev server with HMR             |
| `npm run build` | Production build (all routes prerendered)     |
| `npm start`     | Run the production server (after `build`)     |
| `npm run lint`  | Next.js / ESLint checks                       |

---

## Project Structure

```
personal-portfolio-v2/
├── app/                          # Next.js App Router routes
│   ├── layout.tsx                # Root layout: fonts, <head>, Header, Footer
│   ├── page.tsx                  # Home — composes 7 home/* sections
│   ├── globals.css               # Tailwind directives + prose-mdx styles
│   ├── sitemap.ts                # /sitemap.xml generator
│   ├── work/
│   │   └── page.tsx              # /work — experience, case studies, teaching
│   ├── services/
│   │   └── page.tsx              # /services — engagement models, contact form
│   ├── blogs/
│   │   ├── page.tsx              # /blogs — index with category filter + grid
│   │   └── [slug]/
│   │       └── page.tsx          # /blogs/[slug] — MDX post detail
│   └── case-studies/
│       ├── page.tsx              # /case-studies — index
│       └── [slug]/
│           └── page.tsx          # /case-studies/[slug] — MDX case study detail
│
├── components/
│   ├── layout/                   # Shared chrome
│   │   ├── Container.tsx         # max-w-[1380px] + horizontal padding
│   │   ├── Header.tsx            # Fixed top nav with active route highlight
│   │   ├── Footer.tsx            # 3-col index + channels + copyright
│   │   └── SectionShell.tsx      # Section wrapper with border-frame
│   ├── ui/                       # Design-system primitives
│   │   ├── Badge.tsx             # Pill variants (dark / outline / tertiary)
│   │   ├── Button.tsx            # Brand buttons (primary / secondary / tertiary)
│   │   ├── Kicker.tsx            # Overline label with optional indicator dot
│   │   ├── MetricCard.tsx        # Bordered stat tile used across sections
│   │   └── SectionHeader.tsx     # Kicker + headline + lede pattern
│   ├── home/                     # Homepage sections (composed by app/page.tsx)
│   │   ├── Hero.tsx              # Top hero with portrait + meta + 2 CTAs
│   │   ├── Receipts.tsx          # 6 metric tiles with conic-gradient trace
│   │   ├── WhatIDo.tsx           # 4 sticky-stacking editorial cards
│   │   ├── ServicesPreview.tsx   # 2-card preview of /services
│   │   ├── SelectedWork.tsx      # 3 featured project cards
│   │   ├── CareerTimeline.tsx    # 6-milestone chronology grid
│   │   └── FinalCTA.tsx          # Dark closing CTA panel
│   ├── work/                     # /work page sections
│   │   ├── WorkHero.tsx
│   │   ├── CaseStudyEntry.tsx    # Reusable wrapper for each case study
│   │   ├── WebpointCase.tsx      # Wraps MDX for webpoint-solutions.md
│   │   ├── TrainingpointCase.tsx
│   │   ├── SipSocietyCase.tsx
│   │   ├── FindMeUniCase.tsx
│   │   ├── TeachingMentoring.tsx
│   │   ├── Education.tsx
│   │   └── WorkBottomCTA.tsx
│   ├── services/                 # /services page sections
│   │   ├── ServicesHero.tsx
│   │   ├── MetricsRibbon.tsx
│   │   ├── EngagementModels.tsx
│   │   ├── EngagementProcess.tsx
│   │   ├── WorkflowDiagram.tsx   # Inline SVG diagram
│   │   └── ContactForm.tsx       # Client component (interactive chips + submit)
│   ├── blog/                     # /blogs page sections
│   │   ├── BlogHero.tsx
│   │   ├── CategoryFilter.tsx    # Client — active filter pill
│   │   ├── FeaturedArticle.tsx   # Hero card (currently unused, kept for future)
│   │   ├── ArticleCard.tsx       # Grid tile with tag pills
│   │   ├── ArticleHero.tsx       # Post detail top
│   │   ├── ArticlesGrid.tsx      # Posts grid + conditional archive button
│   │   ├── NextReads.tsx         # Related posts strip
│   │   ├── DistributionChannels.tsx
│   │   └── NewsletterBox.tsx
│   └── mdx/
│       └── index.tsx             # MDX component map (h1/h2/p/code/pre/table/etc.)
│
├── content/                      # Markdown content (authored as data)
│   ├── posts/
│   │   ├── sample-post.md
│   │   ├── raci-matrix.md
│   │   ├── history-of-project-management.md
│   │   ├── ui-ux-career-in-nepal.md
│   │   ├── top-it-training-centers-kathmandu.md
│   │   └── how-to-center-a-div.md
│   └── case-studies/
│       └── webpoint-solutions.md
│
├── lib/
│   └── content.ts                # fs + gray-matter loaders for posts + case studies
│
├── public/                       # Static assets (favicon, hero portrait)
│   ├── NabinPaudel.jpg
│   └── robots.txt
│
├── next.config.mjs               # Next config + .html legacy redirects
├── tailwind.config.ts            # Material 3 design tokens
├── postcss.config.mjs            # PostCSS pipeline
├── tsconfig.json
└── package.json
```

---

## Routing

| Path                          | File                                 | Notes                          |
| ----------------------------- | ------------------------------------ | ------------------------------ |
| `/`                           | `app/page.tsx`                       | Composes 7 home sections       |
| `/work`                       | `app/work/page.tsx`                  | Experience + 4 case studies    |
| `/services`                   | `app/services/page.tsx`              | Engagement models + contact    |
| `/blogs`                      | `app/blogs/page.tsx`                 | Index, category filter, grid   |
| `/blogs/[slug]`               | `app/blogs/[slug]/page.tsx`          | MDX post detail                |
| `/case-studies`               | `app/case-studies/page.tsx`          | Index                          |
| `/case-studies/[slug]`        | `app/case-studies/[slug]/page.tsx`   | MDX case study detail          |
| `/sitemap.xml`                | `app/sitemap.ts`                     | Generated from content + routes |

### Legacy redirects (`next.config.mjs`)

To preserve SEO from the previous live site, these redirect permanently (308):

| Old URL                              | New URL                  |
| ------------------------------------ | ------------------------ |
| `/blogs.html`                        | `/blogs`                 |
| `/blogs/:slug.html`                  | `/blogs/:slug`           |
| `/case-studies/:slug.html`           | `/case-studies/:slug`    |

---

## Content authoring

### Blog posts (`content/posts/*.md`)

Filename = slug. Frontmatter schema (`PostMeta` in `lib/content.ts`):

```yaml
---
slug: my-post-slug              # optional, derived from filename if omitted
title: "My Post Title"
category: Project Management     # free-form label
date: "2026-09-12"               # ISO date
readTime: "9 min"
excerpt: "One-line summary shown on cards and meta tags."
tags:                            # rendered as individual pill chips
  - Agile
  - PM
  - Process
coverImage: ""                   # optional URL
featured: true                   # optional — marks as flagship
---
```

Body is standard markdown. Supports GFM tables, fenced code blocks, headings, lists, blockquotes, links, and inline HTML. Code blocks use the prose-mdx styles defined in `app/globals.css`.

### Case studies (`content/case-studies/*.md`)

Frontmatter schema (`CaseStudyMeta`):

```yaml
---
slug: webpoint-solutions
title: "Webpoint Solutions — US SaaS Migration"
client: "Webpoint Solutions"
role: "Technical Project Manager"
scope: "End-to-end delivery"
status: "Completed"
year: "2024"
coverImage: ""
tags: [PM, SaaS, Migration]
obstacle: "What blocked delivery"
resolution: "What we did about it"
---
```

---

## Design System

All visual primitives are Material 3 design tokens defined in `tailwind.config.ts`.

### Color palette (semantic)

`bg-surface`, `bg-surface-container`, `bg-surface-container-low`, `bg-surface-container-high`, `bg-surface-container-highest`, `bg-surface-container-lowest`, `bg-surface-variant`, `bg-surface-dim`, `bg-surface-bright`, `bg-inverse-surface`, `bg-inverse-on-surface`, `bg-background`, `bg-on-background`, `bg-on-surface`, `bg-on-surface-variant`, `bg-primary`, `bg-on-primary`, `bg-primary-container`, `bg-on-primary-container`, `bg-primary-fixed`, `bg-primary-fixed-dim`, `bg-on-primary-fixed`, `bg-on-primary-fixed-variant`, `bg-secondary`, `bg-on-secondary`, `bg-secondary-container`, `bg-on-secondary-container`, `bg-secondary-fixed`, `bg-secondary-fixed-dim`, `bg-on-secondary-fixed`, `bg-on-secondary-fixed-variant`, `bg-tertiary`, `bg-on-tertiary`, `bg-tertiary-container`, `bg-on-tertiary-container`, `bg-tertiary-fixed`, `bg-tertiary-fixed-dim`, `bg-on-tertiary-fixed`, `bg-on-tertiary-fixed-variant`, `bg-error`, `bg-on-error`, `bg-error-container`, `bg-on-error-container`, `bg-inverse-primary`, `bg-outline`, `bg-outline-variant`, `bg-surface-tint`, `bg-border-frame`, `bg-cobalt-alt`

The brand accent (`#b1f735`, lime) is exposed as `bg-tertiary-fixed`.

### Spacing scale

`space-xs` (0.25rem) · `space-sm` (0.5rem) · `space-md` (1rem) · `space-lg` (1.75rem) · `space-xl` (3rem) · `space-2xl` (5rem) · `margin` (1.5rem) · `margin-md` (3rem) · `margin-lg` (5rem) · `gutter` (1.5rem) · `gutter-lg` (2.5rem)

### Border radius

`rounded` (0.25rem) · `rounded-lg` (0.5rem) · `rounded-xl` (0.75rem) · `rounded-full` (9999px)

### Type scale (with line-height, letter-spacing, weight baked in)

- **Headline / display:** Righteous — `font-headline-sm/md/lg`, `font-display-hero[-mobile]`
- **Body:** Inter — `font-body-md/lg`
- **Label / metric:** JetBrains Mono — `font-label-sm/md`, `font-metric-display`, `font-mono`

### Icons

Material Symbols Outlined, loaded in `app/layout.tsx`. Use the `material-symbols-outlined` class:

```html
<span class="material-symbols-outlined">arrow_forward</span>
```

---

## Configuration

### Site URL

`app/sitemap.ts` reads `process.env.NEXT_PUBLIC_SITE_URL` with a fallback of `https://paudelnabin.com.np`. Set this in `.env.local` for staging or alternate domains.

### Image hosts

`next.config.mjs` whitelists `lh3.googleusercontent.com` for `next/image` (Google user content used in case study covers). Add other hosts under `images.remotePatterns` as needed.

---

## Conventions

- All page chrome (Header / Footer / top padding for fixed header) is set once in `app/layout.tsx`. Route pages never repeat it.
- Sections use `<Container>` from `components/layout/Container.tsx` for consistent max-width and gutters.
- Cross-cutting visuals (border-frame strokes, primary buttons, status pills) use the primitives in `components/ui/`.
- All interactive bits (forms, filter chips, scroll-driven effects) are client components — pages stay server-rendered.

---

## Roadmap

- [ ] Newsletter form backend integration (currently client-only stub)
- [ ] Contact form backend integration (currently client-only stub)
- [ ] Search across posts + case studies
- [ ] Add remaining case study `.md` files (Trainingpoint, Sip Society, Find Me University)
- [ ] RSS feed at `/feed.xml`

---

## License

Source code: MIT. Content (blog posts, case studies): © Nabin Paudel.

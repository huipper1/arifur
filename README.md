# Arifur Rahman — Personal Portfolio Website

A client-focused, frontend-only portfolio website for Arifur Rahman, Full-Stack Developer. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and GSAP animations, configured for static HTML export (`output: 'export'`).

## Features

- **Design Aesthetic**: Modern, minimal, editorial design inspired by high-end developer portfolios (warm off-white / deep dark themes, vibrant red/coral accent `#E53935`, mixed display typography with serif italic accents, and animated marquee dividers).
- **Light & Dark Theme**: Theme toggle with instant persistence (`localStorage` & `prefers-color-scheme`) and zero flash-of-unstyled-content (FOUC).
- **Pages**:
  - `Home` (`/`): High-converting hero, services overview accordion, selected work showcase, working process steps, about preview, interactive FAQ accordion, and closing CTA.
  - `About` (`/about`): Full bio, working principles, readable tech capability groups, and contact action.
  - `Services` (`/services`): Anchored breakdown of 5 core services, buyer needs, scoped capabilities, and illustrative industry use cases.
  - `Projects` (`/projects`): Category filters, alternating card layout, and case study route (`/projects/[slug]`). Includes graceful draft/concept gating.
  - `Contact` (`/contact`): Structured inquiry composer (with URL preselection from services), "Open email draft", "Continue in WhatsApp", copy brief fallback, and verified direct contact details.
  - `404` (`/not-found`): Friendly error page with quick links.
- **Motion**: GSAP scroll reveals and stagger animations respecting `prefers-reduced-motion`.
- **SEO & Accessibility**: Complete OpenGraph and Twitter metadata, robots.txt, dynamic sitemap.xml, JSON-LD structured data (`WebSite`, `Person`, `FAQPage`), skip-to-content link, and accessible keyboard navigation.

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Static Export

To build and export the static site to the `out/` directory:

```bash
npm run build
```

This generates pure static files inside `out/` ready to be hosted on any static host (GitHub Pages, Cloudflare Pages, Vercel, Netlify, AWS S3, etc.).

### Type Checking & Linting

```bash
# TypeScript verification
npx tsc --noEmit

# ESLint check
npm run lint
```

---

## Content Configuration

All site content is stored cleanly in TypeScript files under `src/content/`:

1. **Profile (`src/content/profile.ts`)**:
   - Update contact details (`email`, `whatsappPrimary`, `whatsappAlternative`).
   - Add profile picture (`portraitSrc`) or custom biography.
   - Configure social links and custom domain `siteUrl`.

2. **Projects (`src/content/projects.ts`)**:
   - Add real case studies into the `projects` array.
   - Set `status: "published"` when ready for public display.
   - Set `featured: true` to display on the Home page.

3. **Services (`src/content/services.ts`)**:
   - Edit the 5 core services, buyer problem descriptions, and deliverables.

4. **FAQs (`src/content/faq.ts`)**:
   - Add or revise frequently asked questions.

5. **Process (`src/content/process.ts`)**:
   - Customize the 5-step client collaboration process.

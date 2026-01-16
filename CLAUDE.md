# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Andrew Sky, a professional drone pilot offering FPV cinematic footage and photogrammetric survey services. The site is built as a single-page application with smooth scrolling sections.

**Tech Stack:**
- **Framework:** Vike (React-based SSR/meta-framework) with Vite
- **UI:** React 19 + Tailwind CSS v4
- **Components:** Radix UI primitives (via shadcn-style components)
- **i18n:** i18next with English and Italian support
- **Animation:** Framer Motion + custom Tailwind animations
- **3D Graphics:** Three.js and OGL (likely for future drone/3D visualizations)
- **Language:** TypeScript

## Development Commands

```bash
# Start development server
npm run dev

# Production build (TypeScript check + Vite build)
npm run build

# Preview production build
npm run preview
```

## Architecture

### File-based Routing with Vike

Vike uses file-based routing in the `pages/` directory. Each route can have special files:

- `+Page.tsx` - The page component (required)
- `+Layout.tsx` - Layout wrapper (applies to all pages in this directory)
- `+Head.tsx` - HTML head/meta tags (global, cannot be overridden per page)

**Current structure:**
- `pages/index/+Page.tsx` - Landing page with all sections (Hero, About, Footage, Surveys, Portfolio, Contact)
- `pages/+Layout.tsx` - Global layout (note: also includes Navbar/Footer inline, though these are also in index page)
- `pages/+Head.tsx` - Global SEO meta tags

**Note:** There's some duplication - both `pages/index/+Page.tsx` and `pages/+Layout.tsx` include Navbar and Footer. The index page includes all components inline for the single-page experience.

### Component Organization

- `src/components/custom/` - Feature components (Hero, About, Footage, Surveys, Portfolio, Contact, Navbar, Footer, LanguageSelector)
- `src/components/ui/` - Reusable UI primitives (button, input, textarea - shadcn-style components)

### Internationalization

i18next is configured in `src/i18n.ts` with browser language detection. Translations are stored in `src/locales/`:

- `en.json` - English translations
- `it.json` - Italian translations

All components use the `useTranslation()` hook to access translations via the `t()` function.

### Styling System

**CSS Variables:** Custom theme system defined in `src/index.css` with:
- Light/dark mode support (`.dark` class)
- Custom color palette (sky blue primary, slate secondary)
- Shadow, spacing, and radius variables
- Custom `@font-face` for "Utendo" logo font

**Tailwind v4:** Uses the new Tailwind v4 syntax with `@import "tailwindcss"` and inline theme configuration via `@theme inline`.

**Key animations:**
- `fade-in`, `slide-up` - Entry animations
- `glow-pulse` - Pulsing glow effect for CTAs
- Custom keyframes in `tailwind.config.ts`

### Path Aliases

TypeScript path aliases are configured:
- `@/*` maps to `./src/*`

## Custom Features

### Language Selector

Toggle button in Navbar that switches between English (EN) and Italian (IT). Implemented in `src/components/custom/LanguageSelector.tsx`.

### Sitemap Generation

Custom Vite plugin (`vite-plugin-sitemap.ts`) generates `sitemap.xml` during build. Add new pages to the `pages` array in the `generateSitemap()` function.

### Smooth Scrolling

Navigation links use `document.getElementById().scrollIntoView({ behavior: 'smooth' })` for single-page navigation.

## Important Notes

- The site is currently in active development (many new untracked files)
- Some legacy code/comments reference "QueueR" or "Cambiami" - this appears to be repurposed from another project
- `pages/+Layout.tsx` contains unused Navbar/Footer imports (layout wrapper not fully utilized)
- No testing framework is currently configured
- TypeScript strict mode is disabled (`noUnusedLocals: false`, `noUnusedParameters: false`)

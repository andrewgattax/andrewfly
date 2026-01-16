---
trigger: always_on
---

# Project Overview

This document outlines the technical architecture, patterns, and conventions used in this project.

## Tech Stack

### Core Framework
- **React 19.2.0** - UI library with TypeScript 5.9.3
- **Vike 0.4.206** - Meta-framework providing SSR/SSG capabilities with Vite
- **Vite 7.2.2** - Build tool and dev server with SWC for fast builds
- **React Router DOM 7.9.6** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable component library built on Radix UI primitives
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.553.0** - Icon library
- **class-variance-authority** - Component variant management
- **clsx + tailwind-merge** - Conditional class name utilities

### Internationalization
- **i18next 25.6.3** - Core i18n framework
- **react-i18next 16.3.5** - React bindings for i18next
- **i18next-browser-languagedetector 8.2.0** - Automatic language detection

### Build & Development
- **TypeScript 5.9.3** - Static typing
- **@vitejs/plugin-react-swc** - Fast React compilation with SWC

## Project Structure

```
├── pages/                    # Vike page structure (file-based routing)
│   ├── +config.ts          # Vike global configuration (SSR/SSG settings)
│   ├── +Head.tsx          # Global HTML head component (SEO, meta tags)
│   ├── +Layout.tsx        # Root layout wrapper
│   ├── index/             # Route: / (landing page)
│   │   └── +Page.tsx      # Page component
│   └── [route-name]/      # Additional routes follow same pattern
│       └── +Page.tsx
│
├── src/
│   ├── components/
│   │   ├── ui/            # Shadcn/ui base components (Button, Card, etc.)
│   │   └── custom/        # Project-specific components (Navbar, Footer, etc.)
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── useCountries.ts  # Example: data fetching hooks
│   │
│   ├── locales/           # Translation files
│   │   ├── en.json        # English translations (default/fallback)
│   │   └── it.json        # Italian translations
│   │
│   ├── i18n.ts            # i18next configuration
│   ├── lib/
│   │   └── utils.ts       # Utility functions (cn for class merging)
│   │
│   └── index.css          # Global styles with Tailwind directives
│
├── public/                # Static assets (images, favicon, etc.)
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Architectural Patterns

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Use absolute imports: `import { Button } from '@/components/ui/button'`
- Project references separate app and Node.js tooling configs

## Build & Development

### Development Commands

```bash
npm install         # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build with SSR/SSG
npm run preview    # Preview production build
```

### Build Configuration

The build is configured in `vite.config.ts`:
- **Path aliases**: `@/*` → `./src/*`
- **Plugins**: React SWC, Tailwind CSS, Vike, custom sitemap generator
- **Output**: Default Vite build with SSG support

### Sitemap Generation

The `vite-plugin-sitemap.ts` automatically generates `sitemap.xml` after build. Add new routes to the sitemap config array.

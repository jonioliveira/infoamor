# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Emergency information portal for Freguesia de Amor (Leiria, Portugal) built with Next.js App Router. Portuguese-language site providing community information about emergency services and resources following Storm Kristin.

## Tech Stack

- **Next.js 16** with App Router (not Pages Router)
- **React 19** (server components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** via PostCSS plugin
- **pnpm** as package manager

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Run production server
```

No test or lint commands are configured.

## Architecture

- `src/app/` — Next.js App Router directory with file-system routing
- `src/app/layout.tsx` — Root layout with HTML metadata (lang="pt")
- `src/app/page.tsx` — Single home page with all content
- `src/app/globals.css` — Global styles with Tailwind imports
- Path alias: `@/*` maps to `./src/*`

## Conventions

- All UI content is in **Portuguese**
- Tailwind utility classes used inline (no CSS modules)
- Mobile-first responsive design with `md:` breakpoints
- Metadata defined via Next.js Metadata API in layout

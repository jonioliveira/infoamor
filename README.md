# Info Amor — Informações de Emergência

Emergency information portal for **Freguesia de Amor** (Leiria, Portugal). Portuguese-language site providing community information about emergency services and resources following Storm Kristin.

## Features

- Real-time service status (water, electricity, telecom, etc.)
- Available community resources and support
- Community cleanup and repair event details
- Transport information
- Administrative declarations and documents
- 5-day weather forecast via Open-Meteo API
- Parish contact information

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [React 19](https://react.dev/) (server components by default)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/) via PostCSS
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout (metadata, fonts)
│   ├── page.tsx        # Home page with all sections
│   └── globals.css     # Global styles with Tailwind imports
└── data/
    └── content.ts      # All site content (Portuguese)
```

## License

ISC

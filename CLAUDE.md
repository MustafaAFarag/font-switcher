# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application (App Router) built with TypeScript, React 19, and Tailwind CSS v4. The project demonstrates a font-switching or theming system with hero components that support light/dark themes.

## Development Commands

```bash
# Development server (with hot reload at http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Project Architecture

### Directory Structure

- **`/app`** - Next.js App Router pages and layouts
  - `page.tsx` - Home page, renders the Hero1 component
  - `layout.tsx` - Root layout with Geist font configuration (Sans & Mono variants)
  - `globals.css` - Tailwind CSS imports

- **`/components`** - Shared UI components
  - `Hero1.tsx` - Client component with navigation and hero section, supports `theme` prop ("light" | "dark")
  - `Hero2.tsx` - Additional hero variant (currently minimal)

- **`/features`** - Feature-based modules (organized by feature domain)
  - `Hero/` - Hero-specific sub-components (e.g., MobileHamburger.tsx)

### Key Configuration

- **Path Aliases**: `@/*` maps to project root (configured in tsconfig.json)
- **TypeScript**: Strict mode enabled, targeting ES2017, using React JSX transform
- **Tailwind CSS**: Version 4 via PostCSS plugin (`@tailwindcss/postcss`)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in layout.tsx

### Component Patterns

- **Client Components**: Use `"use client"` directive for interactivity (e.g., Hero1.tsx with Headless UI Dialog)
- **Theming**: Components accept theme props to toggle between light/dark color schemes
- **Headless UI**: Dialog and navigation components from `@headlessui/react`
- **Icons**: Heroicons v2 (`@heroicons/react`) for UI icons

## Implementation Notes

- When creating new components, follow the existing pattern:
  - Use TypeScript with explicit prop types
  - Apply theme-based conditional styling with Tailwind classes
  - Place shared components in `/components` and feature-specific ones in `/features/[FeatureName]`

- The project uses React 19 and Next.js 16, which may have different APIs than earlier versions
- Tailwind CSS v4 has a different configuration approach (via PostCSS plugin instead of traditional config file)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Next.js development server (use `npm run dev -- -p PORT` to specify port)
- `npm run build` - Build for production (outputs to `out/` directory)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (use `npm run lint --fix` to auto-fix)

## Architecture Overview

This is a personal portfolio/about page built with Next.js 15, React 18, TypeScript, and Bootstrap 5. The application uses a component-payload architecture where content is separated from presentation:

### Key Directories

- `src/components/` - Reusable UI components organized by purpose
- `src/payloads/` - Content data files (TypeScript objects) for each section
- `src/pages/` - Next.js pages (main entry point is `index.tsx`)
- `src/styles/` - SCSS styles with modular approach
- `src/utils/` - Utility functions
- `public/` - Static assets (images, icons)

### Component Structure

- `src/components/common/` - Common reusable components with shared `Item` and `Payload` interfaces
- `src/components/default/` - Default components for standard layouts and core types (`Language`, `MultiLanguageText`)
- `src/components/profile/`, `src/components/skills/`, `src/components/introduction/` - Section-specific components
- `src/components/global/` - Global configuration components, contexts (`AnimationContext`), and keywords mapping

### Content Management

The application uses a payload-driven approach where content is defined in TypeScript files in `src/payloads/`:

- Each payload file exports a data structure that populates its corresponding component
- Main sections: profile, introduction, skills, experiences, projects, presentations, opensources, publications, educations, extras
- Global configuration in `src/payloads/global.ts` includes SEO, analytics, and metadata

### Layout Structure

The main page (`src/pages/index.tsx`) composes sections using:

```tsx
<Profile payload={profile} />
<Introduction payload={introduction} />
<Skills payload={skills} />
<Common payload={experiences} />
// ... other sections
```

## Configuration

- **TypeScript**: Uses strict mode with path mapping (`@/*` -> `./src/*`)
- **Next.js**: Configured for static export (`output: "export"`) to `out/` directory
- **ESLint**: Comprehensive rules including TypeScript, Prettier, import ordering, and React best practices
- **Styling**: SCSS with Bootstrap 5, custom color theming in `src/styles/colors.module.scss`

## Static Site Generation

The application is configured for static export and GitHub Pages deployment:

- Build outputs to `out/` directory
- Images are unoptimized for static hosting
- GitHub Actions workflow automatically updates the last modified date and deploys on push to main

## Development Notes

- Import order is enforced by ESLint rules with specific grouping for React, Next.js, internal components, and payloads
- No default React imports to reduce bundle size
- Uses Luxon for date handling
- FontAwesome icons integrated via React components
- Bootstrap components via Reactstrap

## Recent Architecture Changes

- **Type Organization**: Moved `Language` and `MultiLanguageText` types from `src/types/language.ts` to `src/components/default/Language.ts` for better organization
- **Context Consolidation**: Moved `AnimationContext` from `src/contexts/` to `src/components/global/` to consolidate global utilities
- **Import Cleanup**: Removed unnecessary re-export files (`GlobalLanguage.ts`) and updated all imports to use direct paths
- **ESLint Updates**: Removed obsolete import ordering rules for deleted directories


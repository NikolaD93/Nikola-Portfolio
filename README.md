# Nikola Dojcinovic Portfolio

Personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn-style UI primitives. The site presents experience, skills, selected projects, and a contact section in a single-page layout.

## Overview

This project is a portfolio landing page for a frontend and full-stack developer focused on high-performance web and OTT experiences. The homepage is composed of:

- Hero section
- Experience timeline
- Skills section
- Featured projects
- Contact call to action

The content is largely data-driven through files in `src/assets/data`, which makes updates straightforward without restructuring UI components.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- `@thesvg/react` for technology logos
- Radix/shadcn-style UI components
- ESLint + Prettier

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` runs ESLint
- `npm run lint:fix` runs ESLint with auto-fixes
- `npm run format` formats source files with Prettier
- `npm run check-types` runs TypeScript type-checking

## Project Structure

```text
src/
	app/
		(pages)/
			page.tsx
	assets/
		data/
			navigation.ts
			projects-content.ts
			skills-content.ts
			timeline-data.ts
	components/
		blocks/
			hero-section/
			timeline-section/
			skills-section/
			projects-section/
			contact-section/
		layout/
		ui/
```

## Content Updates

Most portfolio content lives in these files:

- `src/assets/data/timeline-data.ts` for work experience and teaching roles
- `src/assets/data/skills-content.ts` for skill groups
- `src/assets/data/projects-content.ts` for featured projects
- `src/components/ui/tech-icon.tsx` for technology badge/icon mappings

## Notes

- The project uses image assets from `public/images`
- Technology icons are rendered through `@thesvg/react` with a few custom mappings and fallbacks
- The site includes structured data via JSON-LD for SEO

## License

MIT

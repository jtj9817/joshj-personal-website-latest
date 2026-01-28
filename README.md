# Personal Portfolio Website

A portfolio website built with Astro v2, showcasing projects and skills with a modern, theme-aware design.

## Tech Stack

- **Astro v2** - Static site generator with content collections
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- Custom theme system with dark/light mode support

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Project Structure

- `src/content/work/` - Portfolio project content (markdown with frontmatter)
- `src/components/` - Reusable UI components
- `src/pages/` - File-based routing
- `src/layouts/` - Page layout templates
- `src/styles/` - Global CSS and design tokens
- `public/` - Static assets

## Adding Portfolio Items

Create a new `.md` file in `src/content/work/` with the following frontmatter:

```yaml
---
title: "Project Name"
description: "Brief description"
publishDate: 2024-01-01
tags: ["tag1", "tag2"]
img: "/assets/image.jpg"
img_alt: "Image description"
---
```

See `CLAUDE.md` for detailed development guidance.

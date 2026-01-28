# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro v2, showcasing work projects and skills. The site features a content-driven architecture using Astro's content collections for portfolio items, with Tailwind CSS integration for styling and a custom theme system supporting dark/light modes.

## Development Commands

### Core Commands
- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

## Architecture

### Content System
The site uses Astro's Content Collections API for managing portfolio work:

- **Content location**: `src/content/work/`
- **Schema definition**: `src/content/config.ts`
- **Schema fields**: title, description, publishDate, tags, img, img_alt (optional)
- **Content format**: Markdown files with YAML frontmatter
- **Nested content**: Supports nested directories (e.g., `src/content/work/nested/`)

Portfolio items are fetched using `getCollection('work')` and can be sorted by `publishDate`. The dynamic route `src/pages/work/[...slug].astro` generates individual project pages using `getStaticPaths()`.

### Layout System
- **BaseLayout** (`src/layouts/BaseLayout.astro`) - Main layout wrapper providing:
  - Document structure with MainHead, Nav, and Footer components
  - Multi-layered background system with responsive images
  - Dark/light theme CSS variables and theme switching
  - Lazy-loaded background images below the fold (triggered by `.loaded` class)

### Component Architecture

**Page Components**:
- `Hero` - Large header/title sections with alignment options
- `Grid` - Layout wrapper for content grids
- `PortfolioPreview` - Project card previews
- `Skills` - Skills showcase section
- `ContactCTA` - Call-to-action for contact

**UI Components**:
- `Nav` - Navigation with theme toggle
- `Footer` - Site footer
- `Icon` - SVG icon system using `IconPaths.ts` definitions
- `Pill` - Tag/badge UI elements
- `ThemeToggle` - Custom element for theme switching using Web Components API

**Utility Components**:
- `MainHead` - SEO meta tags and document head
- `CallToAction` - Reusable CTA blocks

### Styling System

The site uses a hybrid approach:

1. **CSS Custom Properties** (`src/styles/global.css`):
   - Comprehensive design token system (colors, typography, shadows, gradients)
   - Theme variants via `.theme-dark` class switching
   - Utility classes for layout (`.wrapper`, `.stack`, `.gap-*`)
   - Responsive breakpoint at `50em` (800px)

2. **Tailwind CSS**:
   - Integrated via `@astrojs/tailwind`
   - Configured in `tailwind.config.cjs` for all source file types
   - Used sparingly; most styling uses custom CSS properties

3. **Component-Scoped Styles**:
   - Astro's scoped `<style>` blocks in each component
   - Styles reference CSS custom properties from global.css

### Theme System

Theme switching is implemented through:
- Web Components custom element `<theme-toggle>` (src/components/ThemeToggle.astro)
- CSS class `.theme-dark` on `<html>` element
- CSS custom properties that change values based on theme class
- Theme state persists through manual class manipulation (no localStorage shown in current implementation)

### Background System

Complex multi-layered background approach:
- Combines noise texture, footer gradient, header curves SVG, and header photo
- Uses CSS blend modes for visual effects
- Responsive images loaded based on viewport width (800w/1440w variants)
- Lazy loads below-the-fold backgrounds after page load via `.loaded` class

## File Structure Patterns

- **Pages**: `src/pages/` - File-based routing (`.astro` files)
- **Components**: `src/components/` - Reusable UI components
- **Layouts**: `src/layouts/` - Page layout templates
- **Content**: `src/content/` - Content collections with schema validation
- **Styles**: `src/styles/` - Global CSS and design tokens
- **Static**: `public/` - Static assets (images, favicon)

## Key Patterns

### Adding Portfolio Items
1. Create new `.md` file in `src/content/work/` (or subdirectory)
2. Include required frontmatter: title, description, publishDate, tags, img
3. Write markdown content below frontmatter
4. Image paths should reference `public/` directory (e.g., `/assets/...`)

### Working with Content Collections
- Import `getCollection` from `astro:content`
- Type-safe with `CollectionEntry<'work'>`
- Use `entry.data` for frontmatter, `entry.render()` for content component
- Sort by date: `b.data.publishDate.valueOf() - a.data.publishDate.valueOf()`

### Custom Elements
Components using Web Components (like ThemeToggle) define custom elements in `<script>` blocks that extend `HTMLElement`. These run client-side and are defined with `customElements.define()`.

## Design System Reference

- **Fonts**: 'Public Sans' (body), 'Rubik' (brand/headings)
- **Color scale**: gray-0 through gray-999, accent-light/regular/dark
- **Text sizes**: sm through 5xl
- **Spacing**: gap utilities use rem-based scale (0.5rem to 12rem)
- **Shadows**: sm, md, lg variants
- **Transitions**: `--theme-transition` (0.2s ease-in-out)

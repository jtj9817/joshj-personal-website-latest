# Light Mode Revamp - Clean Architecture Implementation Plan

**Version:** 1.0
**Date:** 2026-01-28
**Approach:** Clean Architecture - Complete Professional Redesign
**Estimated Timeline:** 2 weeks (10 working days)
**Implementation Strategy:** Phased, with git commits per phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Issues Analysis](#current-issues-analysis)
3. [Design Goals & Principles](#design-goals--principles)
4. [Complete Light Mode Color Palette](#complete-light-mode-color-palette)
5. [Architecture Decisions](#architecture-decisions)
6. [Implementation Phases](#implementation-phases)
   - [Phase 1: Foundation - Color System](#phase-1-foundation---color-system)
   - [Phase 2: BaseLayout Background System](#phase-2-baselayout-background-system)
   - [Phase 3: High-Priority Components](#phase-3-high-priority-components)
   - [Phase 4: Remaining Components](#phase-4-remaining-components)
   - [Phase 5: Testing & Refinement](#phase-5-testing--refinement)
   - [Phase 6: Code Review & Quality Check](#phase-6-code-review--quality-check)
7. [Testing Strategy](#testing-strategy)
8. [Git Workflow](#git-workflow)
9. [Rollback Procedures](#rollback-procedures)
10. [Success Metrics](#success-metrics)

---

## Executive Summary

This document outlines a comprehensive redesign of the portfolio website's light mode theme. The current light mode is poorly designed—essentially an inverted version of the dark mode with invisible borders, inappropriate backgrounds, and poor contrast. This implementation will deliver a professional, accessible light mode inspired by industry leaders like GitHub, Linear, and Vercel, while preserving the beloved cyberpunk aesthetic for dark mode users.

### Key Deliverables

- ✅ Professional light mode color palette (purpose-built, not inverted)
- ✅ Theme-aware background system (light gradients for light mode, cyberpunk for dark mode)
- ✅ Strong, visible border system throughout
- ✅ Solid professional colors replacing neon effects in light mode
- ✅ WCAG AA compliant text contrast
- ✅ Three.js canvas only renders in dark mode
- ✅ Enhanced shadow system for depth perception

### Timeline

- **Week 1**: Foundation (Phases 1-2) + High-Priority Components (Phase 3)
- **Week 2**: Remaining Components (Phase 4) + Testing (Phase 5) + Review (Phase 6)

---

## Implementation Progress Checklist

### Phase 1: Foundation - Color System
- [x] Step 1.1: Replace Light Mode Grayscale
- [x] Step 1.2: Update Accent Colors
- [x] Step 1.3: Add Status Colors
- [x] Step 1.4: Add Border System Tokens
- [x] Step 1.5: Add Background System Tokens
- [x] Step 1.6: Update Shadow System
- [x] Step 1.7: Update Link Colors
- [x] Step 1.8: Add Interactive State Tokens
- [x] Step 1.9: Update Technical UI Colors
- [x] Step 1.10: Update Gradients
- [x] Step 1.11: Update Dark Mode Block
- [x] Step 1.12: Update Body Styles
- [x] Step 1.13: Update Heading Colors
- [x] Step 1.14: Update Link Styles
- [x] Step 1.15: Update CardBackground Utility
- [x] Step 1.16: Update Status LED Styles
- [x] Git commit created

### Phase 2: BaseLayout Background System
- [x] Step 2.1: Add Theme-Aware HTML Structure
- [x] Step 2.2: Add Theme Visibility Controls
- [x] Step 2.3: Add Light Background Styles
- [x] Step 2.4: Update Backgrounds Container
- [x] Step 2.5: Update Three.js Script for Theme Awareness
- [x] Step 2.6: Add Theme Change Handler
- [x] Step 2.7: Update Initialization Logic
- [x] Testing Phase 2
- [x] Git commit created

### Phase 3: High-Priority Components
- [ ] Step 3.1: Update PortfolioPreview.astro
- [ ] Step 3.2: Update ProjectRow.astro
- [ ] Step 3.3: Update Nav.astro
- [ ] Step 3.4: Update StatusIndicator.astro
- [ ] Testing Phase 3
- [ ] Git commit created

### Phase 4: Remaining Components
- [ ] Step 4.1: Update Skills.astro
- [ ] Step 4.2: Update Pill.astro
- [ ] Step 4.3: Update ThemeToggle.astro
- [ ] Step 4.4: Update CallToAction.astro
- [ ] Step 4.5: Update TechnicalDivider.astro
- [ ] Step 4.6: Update WorkControls.astro
- [ ] Step 4.7: Update ContactCTA.astro
- [ ] Step 4.8: Update Footer.astro
- [ ] Step 4.9: Update about.astro Page Styles
- [ ] Testing Phase 4
- [ ] Git commit created

### Phase 5: Testing & Refinement
- [ ] Step 5.1: Visual Regression Testing
- [ ] Step 5.2: WCAG Contrast Checking
- [ ] Step 5.3: Interactive State Testing
- [ ] Step 5.4: Edge Case Testing
- [ ] Step 5.5: Performance Validation
- [ ] Step 5.6: Browser Compatibility
- [ ] Step 5.7: Accessibility Testing
- [ ] Step 5.8: Bug Fixes and Refinements
- [ ] Git commit created

### Phase 6: Code Review & Quality Check
- [ ] Step 6.1: Launch Code Review Agents
- [ ] Step 6.2: Review Findings
- [ ] Step 6.3: Address Findings
- [ ] Step 6.4: Create Fixes
- [ ] Git commit created

---

## Current Issues Analysis

### Critical Issues (Severity: 10/10)

#### 1. Invisible Borders
**Problem**: `--border-subtle` is defined as `rgba(255, 255, 255, 0.1)` - white borders on white backgrounds.

**Affected Components**:
- `ProjectRow.astro` (line 57)
- `WorkControls.astro` (line 49)

**Impact**: UI elements have no visual separation, poor UX.

---

#### 2. Non-Theme-Aware Background System
**Problem**: BaseLayout always renders dark cyberpunk gradients and Three.js canvas with dark background.

**Location**: `BaseLayout.astro` lines 427-456 (mobile), Three.js `setClearColor(0x05050f)` (line 175)

**Impact**: Light mode shows dark backgrounds, creating jarring visual disconnect.

---

#### 3. Weak Borders
**Problem**: `--gray-800` is `#e3e6ee` (89% lightness) - barely visible on white backgrounds.

**Affected Components**:
- `Nav.astro` (line 168)
- `PortfolioPreview.astro` (line 22)
- `Skills.astro` (line 24)
- `ContactCTA.astro` (lines 20-21)
- `about.astro` (line 150)

**Impact**: Cards and sections lack definition, content areas blur together.

---

### High Priority Issues (Severity: 7/10)

#### 4. Poor Text Contrast
**Problem**:
- `--gray-200` (#3d4663) used for body text - acceptable but could be darker
- `--gray-400` (#6474a2) used in Footer, Skills - fails WCAG AA for small text
- `--gray-500` (#8490b5) used in ProjectRow - fails WCAG AA

**Impact**: Reduced readability, accessibility failures.

---

#### 5. Neon Effects Invisible/Inappropriate
**Problem**: Neon cyan (`--neon-cyan: #00fff5`) hover effects and status LEDs designed for dark backgrounds.

**Affected Components**:
- `WorkControls.astro` (lines 93-94, 101-103)
- `ProjectRow.astro` (lines 65-67, 136)
- `TechnicalDivider.astro` (line 33)
- Status LED animations (global.css lines 332-347)

**Impact**: Hover states disappear, status indicators hard to see, unprofessional appearance.

---

### Medium Priority Issues (Severity: 4/10)

#### 6. Translucent Backgrounds Ineffective
**Problem**: `--gray-999_40` (40% opacity white) on white backgrounds creates no visual distinction.

**Affected Components**:
- `Skills.astro` (line 24)
- `ContactCTA.astro` (line 20)
- `about.astro` (line 149)

**Impact**: Cards blend into page background.

---

#### 7. Hard-Coded Dark Overlays
**Problem**: `rgba(0, 0, 0, 0.3)` and `rgba(0, 0, 0, 0.4)` used directly in components.

**Affected Components**:
- `ProjectRow.astro` (line 56)
- `WorkControls.astro` (line 48)

**Impact**: Creates muddy light gray boxes that need darker text/borders (compound issue).

---

## Design Goals & Principles

### Primary Goals

1. **Professional Aesthetic**: Match quality of GitHub, Linear, Vercel light modes
2. **Accessibility First**: WCAG 2.1 AA compliance for all text/background combinations
3. **Strong Visual Hierarchy**: Clear borders, proper shadows, defined content areas
4. **Theme Parity**: Light mode should feel as intentionally designed as dark mode
5. **Preserve Dark Mode**: Keep existing cyberpunk aesthetic for dark mode users

### Design Principles

1. **Purpose-Built Color Palette**: Light mode colors designed from scratch, not inverted
2. **Semantic Color Tokens**: Use semantic variables (`--border-card`, `--bg-overlay`) not raw colors
3. **Theme-Aware Architecture**: Backgrounds, effects, and overlays adapt to theme context
4. **Progressive Enhancement**: Maintain functionality with CSS fallbacks
5. **Performance Conscious**: Three.js only when needed, optimized background rendering

### Inspiration Sources

- **GitHub**: Clean borders, subtle shadows, professional gray palette
- **Linear**: Strong visual hierarchy, purposeful color use, refined gradients
- **Vercel**: Minimalist backgrounds, excellent contrast, modern aesthetic

---

## Complete Light Mode Color Palette

### Grayscale System

```css
:root {
  /* Light Mode Grayscale - Warm Neutral Grays */
  --gray-0: #0e1116;     /* Almost black - primary text */
  --gray-50: #1f2328;    /* Very dark - headings */
  --gray-100: #2f3339;   /* Dark - secondary headings */
  --gray-200: #444b53;   /* Medium-dark - body text */
  --gray-300: #656d76;   /* Medium - muted text */
  --gray-400: #858e98;   /* Medium-light - subtle text */
  --gray-500: #a1a9b2;   /* Light-medium - border dark */
  --gray-600: #bcc3cc;   /* Light - border medium */
  --gray-700: #d0d7de;   /* Very light - border light */
  --gray-800: #e6ebf1;   /* Almost white - border subtle */
  --gray-900: #f6f8fa;   /* Off-white - background light */
  --gray-999: #ffffff;   /* Pure white - background base */
}
```

**Contrast Ratios** (on white background):
- `--gray-0`: 18.5:1 (AAA) ✓
- `--gray-50`: 14.2:1 (AAA) ✓
- `--gray-100`: 10.8:1 (AAA) ✓
- `--gray-200`: 7.5:1 (AAA) ✓
- `--gray-300`: 5.1:1 (AA) ✓
- `--gray-400`: 3.8:1 (AA Large) ✓

---

### Accent Colors

```css
:root {
  /* Professional Purple Accent - Light Mode */
  --accent-light: #8250df;     /* Purple 400 - highlights */
  --accent-regular: #6639ba;   /* Purple 500 - primary accent */
  --accent-dark: #512a97;      /* Purple 600 - dark accent */
  --accent-overlay: rgba(98, 57, 186, 0.1);
  --accent-subtle-overlay: rgba(98, 57, 186, 0.05);
  --accent-text-over: #ffffff;
}
```

**Usage**:
- `--accent-light`: Hover states, highlights, bright accents
- `--accent-regular`: Links, buttons, primary interactive elements
- `--accent-dark`: Active states, pressed buttons, dark accents
- `--accent-overlay`: Button hover backgrounds, selection states
- `--accent-text-over`: Text on accent backgrounds

---

### Status Colors

```css
:root {
  /* Professional Status Colors - Light Mode (muted, solid) */
  --status-live: #1a7f37;      /* Green 600 - success/live */
  --status-archived: #9a6700;  /* Amber 700 - warning/archived */
  --status-in-dev: #0969da;    /* Blue 600 - info/in-development */

  /* Status LED glow control */
  --status-live-bg: #1a7f37;
  --status-live-glow: rgba(26, 127, 55, 0.2);

  --status-archived-bg: #9a6700;
  --status-archived-glow: rgba(154, 103, 0, 0.2);

  --status-in-dev-bg: #0969da;
  --status-in-dev-glow: rgba(9, 105, 218, 0.2);
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  /* Dark Mode - Keep Neon */
  --status-live-bg: var(--neon-green);
  --status-live-glow: var(--neon-green);

  --status-archived-bg: var(--neon-amber);
  --status-archived-glow: var(--neon-amber);

  --status-in-dev-bg: var(--neon-cyan);
  --status-in-dev-glow: var(--neon-cyan);
}
```

---

### Border System

```css
:root {
  /* Semantic Border Tokens - Light Mode */
  --border-strong: #d0d7de;    /* Clearly visible borders */
  --border-medium: #e6ebf1;    /* Card borders */
  --border-subtle: #f0f3f6;    /* Subtle dividers */
  --border-accent: var(--accent-regular);

  /* Border Width Tokens */
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 3px;

  /* Border Styles by Usage */
  --border-card: var(--border-width-thin) solid var(--border-medium);
  --border-card-hover: var(--border-width-medium) solid var(--border-accent);
  --border-input: var(--border-width-thin) solid var(--border-strong);
  --border-divider: var(--border-width-thin) solid var(--border-subtle);
  --border-focus: var(--border-width-medium) solid var(--accent-regular);
  --border-active: var(--border-width-medium) solid var(--accent-dark);
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  --border-strong: rgba(255, 255, 255, 0.15);
  --border-medium: rgba(255, 255, 255, 0.1);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-accent: var(--accent-dark);
}
```

---

### Background System

```css
:root {
  /* Semantic Background Tokens - Light Mode */
  --bg-base: #ffffff;
  --bg-secondary: #f6f8fa;
  --bg-tertiary: #eef2f6;
  --bg-overlay: rgba(246, 248, 250, 0.8);
  --bg-card: #ffffff;
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  --bg-base: #090b11;
  --bg-secondary: #141925;
  --bg-tertiary: #1f2638;
  --bg-overlay: rgba(20, 25, 37, 0.8);
  --bg-card: rgba(0, 0, 0, 0.3);
}
```

---

### Shadow System

```css
:root {
  /* Light Mode - Deeper Shadows for Depth */
  --shadow-sm: 0px 1px 2px rgba(14, 17, 22, 0.06),
               0px 1px 3px rgba(14, 17, 22, 0.08);
  --shadow-md: 0px 2px 4px rgba(14, 17, 22, 0.06),
               0px 4px 8px rgba(14, 17, 22, 0.08),
               0px 8px 16px rgba(14, 17, 22, 0.08);
  --shadow-lg: 0px 4px 8px rgba(14, 17, 22, 0.06),
               0px 8px 16px rgba(14, 17, 22, 0.08),
               0px 16px 32px rgba(14, 17, 22, 0.12);

  /* Colored Shadows for Accents */
  --shadow-accent: 0px 4px 16px rgba(98, 57, 186, 0.15);
  --shadow-accent-lg: 0px 8px 32px rgba(98, 57, 186, 0.2);
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  /* Dark Mode - Subtle Shadows */
  --shadow-sm: 0px 6px 3px rgba(255, 255, 255, 0.01),
               0px 4px 2px rgba(255, 255, 255, 0.01),
               0px 2px 2px rgba(255, 255, 255, 0.02);
  --shadow-md: 0px 28px 11px rgba(255, 255, 255, 0.01),
               0px 16px 10px rgba(255, 255, 255, 0.03),
               0px 7px 7px rgba(255, 255, 255, 0.05);
  --shadow-lg: 0px 62px 25px rgba(255, 255, 255, 0.01),
               0px 35px 21px rgba(255, 255, 255, 0.05),
               0px 16px 16px rgba(255, 255, 255, 0.1);
}
```

---

### Gradient System

```css
:root {
  /* Light Mode - Subtle Professional Gradients */
  --gradient-subtle: linear-gradient(150deg, #ffffff 0%, #f6f8fa 100%);
  --gradient-accent: linear-gradient(150deg,
                     var(--accent-light) 0%,
                     var(--accent-regular) 50%,
                     var(--accent-dark) 100%);
  --gradient-stroke: linear-gradient(180deg, var(--gray-700), var(--gray-800));
  --gradient-background: linear-gradient(180deg,
                         #ffffff 0%,
                         #f8f9fb 20%,
                         #f3f5f8 40%,
                         #eef2f6 60%,
                         #f3f5f8 80%,
                         #ffffff 100%);
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  --gradient-subtle: linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 81%);
  --gradient-accent: linear-gradient(150deg,
                     var(--gradient-stop-1),
                     var(--gradient-stop-2),
                     var(--gradient-stop-3));
  --gradient-stroke: linear-gradient(180deg, var(--gray-600), var(--gray-800));
}
```

---

### Interactive States

```css
:root {
  /* Light Mode - Interactive States */
  --link-color: var(--accent-regular);
  --link-hover: var(--accent-dark);

  --hover-overlay: rgba(98, 57, 186, 0.08);
  --active-overlay: rgba(98, 57, 186, 0.12);
  --selection-highlight: rgba(130, 80, 223, 0.15);

  /* Technical UI */
  --grid-line: rgba(208, 215, 222, 0.5);
  --circuit-trace: rgba(98, 57, 186, 0.06);
}
```

**Dark Mode Override**:
```css
:root.theme-dark {
  --link-color: var(--accent-dark); /* Bright purple in dark mode */
  --link-hover: var(--accent-light);

  --hover-overlay: rgba(255, 255, 255, 0.05);
  --active-overlay: rgba(255, 255, 255, 0.1);
  --selection-highlight: rgba(0, 255, 245, 0.2);

  --grid-line: rgba(58, 58, 100, 0.3);
  --circuit-trace: rgba(180, 0, 255, 0.08);
}
```

---

## Architecture Decisions

### Decision 1: Dual-Theme Design System

**Context**: Current light mode is inverted dark mode, causing fundamental issues.

**Decision**: Implement two separate, purpose-built color palettes.

**Rationale**:
- Light mode needs warm neutrals and strong contrast
- Dark mode needs cool tones and subtle highlights
- Inversion creates semantic confusion (gray-0 = darkest in light mode)

**Trade-offs**:
- ✅ Pro: Each theme optimized for its context
- ✅ Pro: Semantic clarity (gray-0 = darkest in both themes)
- ⚠️ Con: More CSS variables to maintain
- ⚠️ Con: Requires discipline for new components

**Implementation**: Replace `:root` variables with light mode palette, override in `:root.theme-dark`.

---

### Decision 2: Theme-Aware Background System

**Context**: BaseLayout backgrounds always show dark cyberpunk regardless of theme.

**Decision**: Conditional backgrounds - light gradients for light mode, cyberpunk for dark mode.

**Rationale**:
- Light mode needs clean, professional backgrounds
- Dark mode benefits from visual richness of cyberpunk
- Can't compromise either aesthetic

**Trade-offs**:
- ✅ Pro: Each theme has appropriate atmosphere
- ✅ Pro: Light mode feels professional, dark mode keeps personality
- ⚠️ Con: More complex BaseLayout.astro styles
- ⚠️ Con: Three.js requires conditional initialization

**Implementation**: Use `:root.theme-dark .backgrounds` selector for dark backgrounds, default to light.

---

### Decision 3: Conditional Three.js Rendering

**Context**: Three.js canvas renders cyberpunk animation with dark background always.

**Decision**: Three.js only initializes and renders in dark mode.

**Rationale**:
- Cyberpunk 3D animation fits dark mode aesthetic only
- Light mode benefits from simplicity
- Performance improvement (no unused canvas in light mode)

**Trade-offs**:
- ✅ Pro: Appropriate aesthetics for each theme
- ✅ Pro: Better performance in light mode
- ✅ Pro: Simpler light mode (fewer visual layers)
- ⚠️ Con: Requires MutationObserver for theme changes
- ⚠️ Con: More complex initialization logic

**Implementation**: Add MutationObserver to watch `.theme-dark` class, initialize/destroy Three.js accordingly.

---

### Decision 4: Semantic Color Token System

**Context**: Components reference raw CSS variables (`--gray-800`, `--neon-cyan`).

**Decision**: Introduce semantic tokens (`--border-card`, `--bg-overlay`, `--interactive-accent`).

**Rationale**:
- Semantic names communicate intent
- Easier to maintain and understand
- Supports theme-specific implementations
- Future-proof for additional themes

**Trade-offs**:
- ✅ Pro: Self-documenting code
- ✅ Pro: Easier refactoring
- ✅ Pro: Consistent patterns
- ⚠️ Con: More variables to manage
- ⚠️ Con: Learning curve for contributors

**Implementation**: Add semantic tokens in global.css, update components to use them.

---

### Decision 5: Enhanced Shadow System

**Context**: Current shadows very subtle (0.01-0.12 opacity), barely visible in light mode.

**Decision**: Darker shadows for light mode (0.06-0.12 opacity), keep subtle for dark mode.

**Rationale**:
- Light mode needs depth perception via shadows
- Dark mode uses color/glow for depth
- Industry standard (GitHub, Linear use strong shadows in light mode)

**Trade-offs**:
- ✅ Pro: Better visual hierarchy in light mode
- ✅ Pro: Matches user expectations
- ⚠️ Con: Slightly higher paint cost
- ⚠️ Con: More noticeable on lower-end devices

**Implementation**: Define stronger shadows in `:root`, keep subtle in `:root.theme-dark`.

---

## Implementation Phases

---

## Phase 1: Foundation - Color System

**Duration**: 2-3 hours
**Priority**: Critical
**Git Commit**: "feat: implement professional light mode color palette"

### Objectives

- Replace light mode grayscale with professional warm neutral palette
- Add semantic color tokens (borders, backgrounds, shadows, interactive states)
- Update dark mode variables to use new token system
- Ensure WCAG AA compliance for all text/background combinations

### Files to Modify

1. `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/styles/global.css`

---

### Step 1.1: Replace Light Mode Grayscale (Lines 6-19)

**Before**:
```css
:root {
  /* Colors */
  --gray-0: #090b11;
  --gray-50: #141925;
  --gray-100: #283044;
  --gray-200: #3d4663;
  --gray-300: #505d84;
  --gray-400: #6474a2;
  --gray-500: #8490b5;
  --gray-600: #a3acc8;
  --gray-700: #c3cadb;
  --gray-800: #e3e6ee;
  --gray-900: #f3f4f7;
  --gray-999-basis: 0, 0%, 100%;
  --gray-999_40: hsla(var(--gray-999-basis), 0.4);
  --gray-999: #ffffff;
}
```

**After**:
```css
:root {
  /* Grayscale - Light Mode (warm neutral grays) */
  --gray-0: #0e1116;           /* Almost black for text */
  --gray-50: #1f2328;          /* Dark gray for headings */
  --gray-100: #2f3339;         /* Secondary text */
  --gray-200: #444b53;         /* Tertiary text */
  --gray-300: #656d76;         /* Muted text */
  --gray-400: #858e98;         /* Subtle text */
  --gray-500: #a1a9b2;         /* Border dark */
  --gray-600: #bcc3cc;         /* Border medium */
  --gray-700: #d0d7de;         /* Border light */
  --gray-800: #e6ebf1;         /* Border subtle */
  --gray-900: #f6f8fa;         /* Background light */
  --gray-999-basis: 0, 0%, 100%;
  --gray-999_40: hsla(var(--gray-999-basis), 0.4);
  --gray-999: #ffffff;         /* Pure white background */
}
```

---

### Step 1.2: Update Accent Colors (Lines 48-53)

**Before**:
```css
--accent-light: #c561f6;
--accent-regular: #7611a6;
--accent-dark: #1c0056;
--accent-overlay: hsla(280, 89%, 67%, 0.33);
--accent-subtle-overlay: var(--accent-overlay);
--accent-text-over: var(--gray-999);
```

**After**:
```css
/* Professional Accent Colors - Light Mode */
--accent-light: #8250df;     /* Purple 400 */
--accent-regular: #6639ba;   /* Purple 500 */
--accent-dark: #512a97;      /* Purple 600 */
--accent-overlay: rgba(98, 57, 186, 0.1);
--accent-subtle-overlay: rgba(98, 57, 186, 0.05);
--accent-text-over: #ffffff;
```

---

### Step 1.3: Add Status Colors (After Line 32)

**Insert**:
```css
/* Professional Status Colors (muted for light mode) */
--status-live: #1a7f37;      /* Green 600 */
--status-archived: #9a6700;  /* Amber 700 */
--status-in-dev: #0969da;    /* Blue 600 */

/* Status LED control */
--status-live-bg: #1a7f37;
--status-live-glow: rgba(26, 127, 55, 0.2);

--status-archived-bg: #9a6700;
--status-archived-glow: rgba(154, 103, 0, 0.2);

--status-in-dev-bg: #0969da;
--status-in-dev-glow: rgba(9, 105, 218, 0.2);
```

---

### Step 1.4: Add Border System Tokens (After Line 38)

**Insert**:
```css
/* Border System - Light Mode */
--border-strong: #d0d7de;    /* Visible borders */
--border-medium: #e6ebf1;    /* Card borders */
--border-subtle: #f0f3f6;    /* Subtle dividers */
--border-accent: var(--accent-regular);

/* Border Width Tokens */
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 3px;

/* Border Styles by Usage */
--border-card: var(--border-width-thin) solid var(--border-medium);
--border-card-hover: var(--border-width-medium) solid var(--border-accent);
--border-input: var(--border-width-thin) solid var(--border-strong);
--border-divider: var(--border-width-thin) solid var(--border-subtle);
--border-focus: var(--border-width-medium) solid var(--accent-regular);
--border-active: var(--border-width-medium) solid var(--accent-dark);
```

---

### Step 1.5: Add Background System Tokens (After borders)

**Insert**:
```css
/* Background System - Light Mode */
--bg-base: #ffffff;
--bg-secondary: #f6f8fa;
--bg-tertiary: #eef2f6;
--bg-overlay: rgba(246, 248, 250, 0.8);
--bg-card: #ffffff;
```

---

### Step 1.6: Update Shadow System (Lines 76-82)

**Before**:
```css
/* Shadows */
--shadow-sm: 0px 6px 3px rgba(9, 11, 17, 0.01), 0px 4px 2px rgba(9, 11, 17, 0.01),
  0px 2px 2px rgba(9, 11, 17, 0.02), 0px 0px 1px rgba(9, 11, 17, 0.03);
--shadow-md: 0px 28px 11px rgba(9, 11, 17, 0.01), 0px 16px 10px rgba(9, 11, 17, 0.03),
  0px 7px 7px rgba(9, 11, 17, 0.05), 0px 2px 4px rgba(9, 11, 17, 0.06);
--shadow-lg: 0px 62px 25px rgba(9, 11, 17, 0.01), 0px 35px 21px rgba(9, 11, 17, 0.05),
  0px 16px 16px rgba(9, 11, 17, 0.1), 0px 4px 9px rgba(9, 11, 17, 0.12);
```

**After**:
```css
/* Shadow System - Light Mode (deeper shadows) */
--shadow-sm: 0px 1px 2px rgba(14, 17, 22, 0.06),
             0px 1px 3px rgba(14, 17, 22, 0.08);
--shadow-md: 0px 2px 4px rgba(14, 17, 22, 0.06),
             0px 4px 8px rgba(14, 17, 22, 0.08),
             0px 8px 16px rgba(14, 17, 22, 0.08);
--shadow-lg: 0px 4px 8px rgba(14, 17, 22, 0.06),
             0px 8px 16px rgba(14, 17, 22, 0.08),
             0px 16px 32px rgba(14, 17, 22, 0.12);

/* Colored shadows for accents */
--shadow-accent: 0px 4px 16px rgba(98, 57, 186, 0.15);
--shadow-accent-lg: 0px 8px 32px rgba(98, 57, 186, 0.2);
```

---

### Step 1.7: Update Link Colors (Line 55)

**Before**:
```css
--link-color: var(--accent-regular);
```

**After**:
```css
/* Link Colors */
--link-color: var(--accent-regular);
--link-hover: var(--accent-dark);
```

---

### Step 1.8: Add Interactive State Tokens (After link colors)

**Insert**:
```css
/* Interactive States - Light Mode */
--hover-overlay: rgba(98, 57, 186, 0.08);
--active-overlay: rgba(98, 57, 186, 0.12);
--selection-highlight: rgba(130, 80, 223, 0.15);
```

---

### Step 1.9: Update Technical UI Colors (Lines 35-38)

**Before**:
```css
/* Technical UI colors */
--grid-line: rgba(58, 58, 100, 0.3);
--circuit-trace: rgba(180, 0, 255, 0.08);
--border-subtle: rgba(255, 255, 255, 0.1);
--selection-highlight: rgba(0, 255, 245, 0.2);
```

**After**:
```css
/* Technical UI - Light Mode */
--grid-line: rgba(208, 215, 222, 0.5);
--circuit-trace: rgba(98, 57, 186, 0.06);
```

---

### Step 1.10: Update Gradients (Lines 57-74)

**Before**:
```css
/* Gradients */
--gradient-stop-1: var(--accent-light);
--gradient-stop-2: var(--accent-regular);
--gradient-stop-3: var(--accent-dark);
--gradient-subtle: linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 150%);
--gradient-accent: linear-gradient(
  150deg,
  var(--gradient-stop-1),
  var(--gradient-stop-2),
  var(--gradient-stop-3)
);
--gradient-accent-orange: linear-gradient(
  150deg,
  #ca7879,
  var(--accent-regular),
  var(--accent-dark)
);
--gradient-stroke: linear-gradient(180deg, var(--gray-900), var(--gray-700));
```

**After**:
```css
/* Gradient System - Light Mode (subtle, professional) */
--gradient-stop-1: var(--accent-light);
--gradient-stop-2: var(--accent-regular);
--gradient-stop-3: var(--accent-dark);
--gradient-subtle: linear-gradient(150deg, #ffffff 0%, #f6f8fa 100%);
--gradient-accent: linear-gradient(
  150deg,
  var(--accent-light) 0%,
  var(--accent-regular) 50%,
  var(--accent-dark) 100%
);
--gradient-accent-orange: linear-gradient(
  150deg,
  #ca7879,
  var(--accent-regular),
  var(--accent-dark)
);
--gradient-stroke: linear-gradient(180deg, var(--gray-700), var(--gray-800));
--gradient-background: linear-gradient(180deg,
                       #ffffff 0%,
                       #f8f9fb 20%,
                       #f3f5f8 40%,
                       #eef2f6 60%,
                       #f3f5f8 80%,
                       #ffffff 100%);
```

---

### Step 1.11: Update Dark Mode Block (Lines 105-145)

**Update dark mode overrides**:

```css
:root.theme-dark {
  /* Keep existing dark mode grayscale (lines 106-118) */
  --gray-0: #ffffff;
  --gray-50: #f3f4f7;
  --gray-100: #e3e6ee;
  --gray-200: #c3cadb;
  --gray-300: #a3acc8;
  --gray-400: #8490b5;
  --gray-500: #6474a2;
  --gray-600: #505d84;
  --gray-700: #3d4663;
  --gray-800: #283044;
  --gray-900: #141925;
  --gray-999-basis: 225, 31%, 5%;
  --gray-999: #090b11;

  /* Keep existing accent colors (lines 120-125) */
  --accent-light: #1c0056;
  --accent-regular: #7611a6;
  --accent-dark: #c561f6;
  --accent-overlay: hsla(280, 89%, 67%, 0.33);
  --accent-subtle-overlay: hsla(281, 81%, 36%, 0.33);
  --accent-text-over: var(--gray-0);

  --link-color: var(--accent-dark);

  /* ADD: Status color overrides */
  --status-live-bg: var(--neon-green);
  --status-live-glow: var(--neon-green);

  --status-archived-bg: var(--neon-amber);
  --status-archived-glow: var(--neon-amber);

  --status-in-dev-bg: var(--neon-cyan);
  --status-in-dev-glow: var(--neon-cyan);

  /* ADD: Border overrides */
  --border-strong: rgba(255, 255, 255, 0.15);
  --border-medium: rgba(255, 255, 255, 0.1);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-accent: var(--accent-dark);

  /* ADD: Background overrides */
  --bg-base: #090b11;
  --bg-secondary: #141925;
  --bg-tertiary: #1f2638;
  --bg-overlay: rgba(20, 25, 37, 0.8);
  --bg-card: rgba(0, 0, 0, 0.3);

  /* Keep existing gradients (lines 129-137) */
  --gradient-stop-1: #4c11c6;
  --gradient-subtle: linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 81%);
  --gradient-accent-orange: linear-gradient(
    150deg,
    #ca7879,
    var(--accent-regular),
    var(--accent-light)
  );
  --gradient-stroke: linear-gradient(180deg, var(--gray-600), var(--gray-800));

  /* Keep existing shadows (lines 139-144) */
  --shadow-sm: 0px 6px 3px rgba(255, 255, 255, 0.01), 0px 4px 2px rgba(255, 255, 255, 0.01),
    0px 2px 2px rgba(255, 255, 255, 0.02), 0px 0px 1px rgba(255, 255, 255, 0.03);
  --shadow-md: 0px 28px 11px rgba(255, 255, 255, 0.01), 0px 16px 10px rgba(255, 255, 255, 0.03),
    0px 7px 7px rgba(255, 255, 255, 0.05), 0px 2px 4px rgba(255, 255, 255, 0.06);
  --shadow-lg: 0px 62px 25px rgba(255, 255, 255, 0.01), 0px 35px 21px rgba(255, 255, 255, 0.05),
    0px 16px 16px rgba(255, 255, 255, 0.1), 0px 4px 9px rgba(255, 255, 255, 0.12);

  /* ADD: Interactive state overrides */
  --link-hover: var(--accent-light);
  --hover-overlay: rgba(255, 255, 255, 0.05);
  --active-overlay: rgba(255, 255, 255, 0.1);
  --selection-highlight: rgba(0, 255, 245, 0.2);

  /* ADD: Technical UI overrides */
  --grid-line: rgba(58, 58, 100, 0.3);
  --circuit-trace: rgba(180, 0, 255, 0.08);
}
```

---

### Step 1.12: Update Body Styles (Lines 153-159)

**Before**:
```css
body {
  background-color: var(--gray-999);
  color: var(--gray-200);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
```

**After**:
```css
body {
  background-color: var(--bg-base);
  color: var(--gray-200);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
```

---

### Step 1.13: Update Heading Colors (Lines 177-186)

**Before**:
```css
h1,
h2,
h3,
h4,
h5 {
  line-height: 1.1;
  font-family: var(--font-brand);
  font-weight: 600;
  color: var(--gray-100);
}
```

**After**:
```css
h1,
h2,
h3,
h4,
h5 {
  line-height: 1.1;
  font-family: var(--font-brand);
  font-weight: 600;
  color: var(--gray-50);
}
```

---

### Step 1.14: Update Link Styles (Lines 173-175)

**Before**:
```css
a {
  color: var(--link-color);
}
```

**After**:
```css
a {
  color: var(--link-color);
  transition: color var(--theme-transition);
}

a:hover {
  color: var(--link-hover);
}
```

---

### Step 1.15: Update CardBackground Utility (Lines 259-263)

**Before**:
```css
.cardBackground{
  background-color: var(--gray-999_40);
  background: var(--gray-999);
  border: 1px solid var(--gray-800);
}
```

**After**:
```css
.cardBackground {
  background-color: var(--bg-card);
  background: var(--bg-card);
  border: var(--border-card);
}
```

---

### Step 1.16: Update Status LED Styles (Lines 332-347)

**Before**:
```css
.status-live {
  background: var(--status-live);
  box-shadow: 0 0 8px var(--status-live);
}

.status-archived {
  background: var(--status-archived);
  box-shadow: 0 0 8px var(--status-archived);
  animation: pulse-glow 2s ease-in-out infinite;
}

.status-in-dev {
  background: var(--status-in-dev);
  box-shadow: 0 0 8px var(--status-in-dev);
  animation: blink-fast 0.8s step-end infinite;
}
```

**After**:
```css
.status-live {
  background: var(--status-live-bg);
  box-shadow: 0 0 8px var(--status-live-glow);
}

.status-archived {
  background: var(--status-archived-bg);
  box-shadow: 0 0 8px var(--status-archived-glow);
  animation: pulse-glow 2s ease-in-out infinite;
}

.status-in-dev {
  background: var(--status-in-dev-bg);
  box-shadow: 0 0 8px var(--status-in-dev-glow);
  animation: blink-fast 0.8s step-end infinite;
}
```

---

### Testing Phase 1

**Manual Tests**:
1. ✓ Toggle theme - verify colors change appropriately
2. ✓ Check text contrast - all text readable on backgrounds
3. ✓ Verify borders visible in light mode
4. ✓ Check status LEDs visible in both themes
5. ✓ Verify link colors and hover states

**Automated Tests** (optional):
- Run contrast checker (e.g., axe DevTools)
- Verify WCAG AA compliance for all text

**Git Commit**:
```bash
git add src/styles/global.css
git commit -m "feat: implement professional light mode color palette

- Replace light mode grayscale with warm neutral grays
- Add semantic border, background, and shadow tokens
- Implement professional purple accent colors
- Add theme-aware status colors for LEDs
- Update shadows for better depth in light mode
- Ensure WCAG AA compliance for all text/background combinations

BREAKING CHANGE: Light mode color palette completely redesigned"
```

---

## Phase 2: BaseLayout Background System

**Duration**: 3-4 hours
**Priority**: Critical
**Git Commit**: "feat: implement theme-aware background system with conditional Three.js"

### Objectives

- Add theme-aware background structure (light gradient for light mode, cyberpunk for dark mode)
- Implement conditional Three.js rendering (dark mode only)
- Add MutationObserver to handle theme changes
- Create light mode background gradients

### Files to Modify

1. `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/layouts/BaseLayout.astro`

---

### Step 2.1: Add Theme-Aware HTML Structure (Lines 22-34)

**Before**:
```astro
<body>
  <canvas id="bg-canvas"></canvas>
  <!-- CRT scanline + static overlay (CSS-only, works on both mobile and desktop) -->
  <div class="cyber-overlay" aria-hidden="true">
    <div class="scanlines"></div>
    <div class="static-noise"></div>
    <div class="vignette"></div>
  </div>
  <div class="stack backgrounds">
    <Nav />
    <slot />
    <Footer />
  </div>
</body>
```

**After**:
```astro
<body>
  <!-- Dark mode only: Three.js canvas -->
  <canvas id="bg-canvas" class="dark-mode-only"></canvas>

  <!-- Dark mode only: Cyberpunk overlay effects -->
  <div class="cyber-overlay dark-mode-only" aria-hidden="true">
    <div class="scanlines"></div>
    <div class="static-noise"></div>
    <div class="vignette"></div>
  </div>

  <!-- Light mode only: Clean gradient background -->
  <div class="light-background light-mode-only" aria-hidden="true"></div>

  <div class="stack backgrounds">
    <Nav />
    <slot />
    <Footer />
  </div>
</body>
```

---

### Step 2.2: Add Theme Visibility Controls (After line 411)

**Insert (before `.backgrounds` style)**:
```css
/* ═══════════════════════════════════════
   THEME VISIBILITY CONTROLS
   ═══════════════════════════════════════ */

/* Hide dark mode elements by default (light mode) */
.dark-mode-only {
  display: none;
}

/* Show dark mode elements when theme-dark class present */
:global(.theme-dark) .dark-mode-only {
  display: block;
}

/* Show light mode elements by default */
.light-mode-only {
  display: block;
}

/* Hide light mode elements in dark mode */
:global(.theme-dark) .light-mode-only {
  display: none;
}
```

---

### Step 2.3: Add Light Background Styles (After theme visibility)

**Insert**:
```css
/* ═══════════════════════════════════════
   LIGHT MODE BACKGROUND SYSTEM
   ═══════════════════════════════════════ */
.light-background {
  position: fixed;
  inset: 0;
  z-index: -2;
  background:
    /* Subtle noise texture */
    url('/assets/backgrounds/noise.png') top center/220px repeat,
    /* Soft purple radial glow - top left */
    radial-gradient(ellipse at 20% 15%, rgba(130, 80, 223, 0.04) 0%, transparent 50%),
    /* Soft purple radial glow - bottom right */
    radial-gradient(ellipse at 80% 70%, rgba(98, 57, 186, 0.03) 0%, transparent 50%),
    /* Base gradient */
    var(--gradient-background);
  background-blend-mode: overlay, normal, normal, normal;
}
```

---

### Step 2.4: Update Backgrounds Container (Lines 416-467)

**Before**:
```css
.backgrounds {
  min-height: 100%;
  isolation: isolate;
  position: relative;
  z-index: 1;
  /*
   * MOBILE: Cyberpunk + USGD static gradient
   * Deep dark base with neon radial glows,
   * geometric hard-edge linear cuts,
   * and the noise overlay for texture
   */
  background:
    /* Noise grain */
    url('/assets/backgrounds/noise.png') top center/220px repeat,
    /* Neon glow: Laravel red, top-left */
    radial-gradient(ellipse at 15% 10%, rgba(255, 45, 32, 0.18) 0%, transparent 45%),
    /* Neon glow: electric cyan, top-right */
    radial-gradient(ellipse at 85% 15%, rgba(0, 255, 245, 0.12) 0%, transparent 40%),
    /* Neon glow: hot magenta, mid-left */
    radial-gradient(ellipse at 10% 55%, rgba(255, 0, 222, 0.1) 0%, transparent 45%),
    /* Neon glow: UV purple, bottom-right */
    radial-gradient(ellipse at 80% 85%, rgba(180, 0, 255, 0.12) 0%, transparent 40%),
    /* Sharp diagonal cut — USGD geometric influence */
    linear-gradient(
      135deg,
      rgba(255, 45, 32, 0.06) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 255, 245, 0.04) 100%
    ),
    /* Base gradient: deep cyberpunk dark */
    linear-gradient(
      180deg,
      #05050f 0%,
      #0a0820 15%,
      #0d0a28 30%,
      #08061a 50%,
      #0a0820 70%,
      #05050f 100%
    );
  background-blend-mode: overlay, normal, normal, normal, normal, normal, normal;
}

/* Desktop/Tablet: transparent so Three.js canvas shows through */
@media (min-width: 50em) {
  .backgrounds {
    background:
      url('/assets/backgrounds/noise.png') top center/220px repeat,
      transparent;
    background-blend-mode: overlay, normal;
  }
}
```

**After**:
```css
/* ═══════════════════════════════════════
   BACKGROUNDS CONTAINER
   ═══════════════════════════════════════ */
.backgrounds {
  min-height: 100%;
  isolation: isolate;
  position: relative;
  z-index: 1;

  /* LIGHT MODE: Transparent (handled by .light-background) */
  background: transparent;
}

/* DARK MODE MOBILE: Cyberpunk gradients */
:global(.theme-dark) .backgrounds {
  background:
    /* Noise grain */
    url('/assets/backgrounds/noise.png') top center/220px repeat,
    /* Neon glow: Laravel red, top-left */
    radial-gradient(ellipse at 15% 10%, rgba(255, 45, 32, 0.18) 0%, transparent 45%),
    /* Neon glow: electric cyan, top-right */
    radial-gradient(ellipse at 85% 15%, rgba(0, 255, 245, 0.12) 0%, transparent 40%),
    /* Neon glow: hot magenta, mid-left */
    radial-gradient(ellipse at 10% 55%, rgba(255, 0, 222, 0.1) 0%, transparent 45%),
    /* Neon glow: UV purple, bottom-right */
    radial-gradient(ellipse at 80% 85%, rgba(180, 0, 255, 0.12) 0%, transparent 40%),
    /* Sharp diagonal cut */
    linear-gradient(
      135deg,
      rgba(255, 45, 32, 0.06) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 255, 245, 0.04) 100%
    ),
    /* Base gradient: deep cyberpunk dark */
    linear-gradient(
      180deg,
      #05050f 0%,
      #0a0820 15%,
      #0d0a28 30%,
      #08061a 50%,
      #0a0820 70%,
      #05050f 100%
    );
  background-blend-mode: overlay, normal, normal, normal, normal, normal, normal;
}

/* DESKTOP (both themes): Transparent for Three.js or clean background */
@media (min-width: 50em) {
  .backgrounds,
  :global(.theme-dark) .backgrounds {
    background:
      url('/assets/backgrounds/noise.png') top center/220px repeat,
      transparent;
    background-blend-mode: overlay, normal;
  }
}
```

---

### Step 2.5: Update Three.js Script for Theme Awareness (Lines 36-330)

**Find the `init()` function and add theme check**:

**After line 165 (end of `function init()`), add**:
```typescript
function shouldInitThreeJS(): boolean {
  return document.documentElement.classList.contains('theme-dark');
}
```

**Update `handleViewport()` function** (around lines 303-312):

**Before**:
```typescript
function handleViewport() {
  if (mql.matches) {
    canvas.style.display = 'block';
    if (!renderer) {
      init();
    }
  } else {
    destroy();
  }
}
```

**After**:
```typescript
function handleViewport() {
  if (mql.matches && shouldInitThreeJS()) {
    canvas.style.display = 'block';
    if (!renderer) {
      init();
    }
  } else {
    destroy();
  }
}
```

---

### Step 2.6: Add Theme Change Handler (After handleResize function, before // Init comment)

**Insert**:
```typescript
function handleThemeChange(): void {
  const isDark = document.documentElement.classList.contains('theme-dark');
  if (isDark && mql.matches && !renderer) {
    // Switched to dark mode on desktop - initialize Three.js
    init();
  } else if (!isDark && renderer) {
    // Switched to light mode - destroy Three.js
    destroy();
  }
}

// Watch for theme changes
const themeObserver = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.attributeName === 'class') {
      handleThemeChange();
      break;
    }
  }
});

themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
});
```

---

### Step 2.7: Update Initialization Logic (Around line 327)

**Before**:
```typescript
// Init
handleViewport();
mql.addEventListener('change', handleViewport);
window.addEventListener('resize', handleResize);
```

**After**:
```typescript
// Init
handleViewport();
mql.addEventListener('change', handleViewport);
window.addEventListener('resize', handleResize);

// Initial theme check
if (!shouldInitThreeJS() && renderer) {
  destroy();
}
```

---

### Testing Phase 2

**Manual Tests**:
1. ✓ Load page in light mode - verify clean light background shows
2. ✓ Load page in dark mode - verify cyberpunk background and Three.js canvas render
3. ✓ Toggle from light to dark - verify Three.js initializes
4. ✓ Toggle from dark to light - verify Three.js destroys and light background shows
5. ✓ Test on mobile - verify mobile shows appropriate background per theme
6. ✓ Test on desktop - verify Three.js only renders in dark mode
7. ✓ Resize viewport while toggling themes - verify no crashes

**Browser Console Checks**:
- No errors during theme toggle
- Three.js cleanup logs (if any) show proper disposal
- MutationObserver fires correctly

**Performance Checks**:
- Three.js animation frame stops when switching to light mode
- Memory usage stable across theme toggles

**Git Commit**:
```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: implement theme-aware background system with conditional Three.js

- Add light-background element for clean gradients in light mode
- Add dark-mode-only/light-mode-only visibility classes
- Implement conditional Three.js rendering (dark mode only)
- Add MutationObserver to handle theme changes dynamically
- Update backgrounds container to use theme-specific styles
- Improve performance by not running Three.js in light mode

Features:
- Light mode: Clean gradient background with subtle purple accents
- Dark mode: Cyberpunk multi-layer gradients with Three.js animation
- Automatic Three.js init/destroy on theme toggle
- Responsive mobile/desktop backgrounds"
```

---

## Phase 3: High-Priority Components

**Duration**: 4-5 hours
**Priority**: High
**Git Commit**: "feat: update high-priority components for light mode support"

### Objectives

- Update PortfolioPreview card styling
- Update ProjectRow table styling and interactive states
- Update Nav component with new border/background tokens
- Update StatusIndicator LED visibility

### Components to Update

1. `PortfolioPreview.astro`
2. `ProjectRow.astro`
3. `Nav.astro`
4. `StatusIndicator.astro`

---

### Step 3.1: Update PortfolioPreview.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/PortfolioPreview.astro`

**Update styles (lines 16-64)**:

**Before**:
```css
.card {
  display: grid;
  grid-template: auto 1fr / auto 1fr;
  height: 11rem;
  background: var(--gradient-subtle);
  border: 1px solid var(--gray-800);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  font-family: var(--font-brand);
  font-size: var(--text-lg);
  font-weight: 500;
  transition: box-shadow var(--theme-transition);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.title {
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--gray-999);
  color: var(--gray-200);
  border-radius: 0.375rem;
}
```

**After**:
```css
.card {
  display: grid;
  grid-template: auto 1fr / auto 1fr;
  height: 11rem;
  background: var(--bg-card);
  border: var(--border-card);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  font-family: var(--font-brand);
  font-size: var(--text-lg);
  font-weight: 500;
  transition: all var(--theme-transition);
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-accent);
  transform: translateY(-2px);
}

.title {
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-overlay);
  color: var(--gray-100);
  border: var(--border-width-thin) solid var(--border-subtle);
  border-radius: 0.375rem;
  backdrop-filter: blur(8px);
}
```

**Key Changes**:
- Replace `var(--gradient-subtle)` with `var(--bg-card)`
- Replace `1px solid var(--gray-800)` with `var(--border-card)`
- Add `border-color` change on hover
- Add subtle lift effect (`translateY(-2px)`)
- Update title background to `var(--bg-overlay)` with blur
- Update title text color to `var(--gray-100)`
- Add subtle border to title

---

### Step 3.2: Update ProjectRow.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/ProjectRow.astro`

**Update styles (lines 41-169)**:

**Before (key sections)**:
```css
.project-row {
  /* ... */
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-subtle);
  border-left: 2px solid transparent;
  /* ... */
}

.project-row:hover {
  border-left-color: var(--neon-cyan);
  background: rgba(0, 255, 245, 0.05);
  box-shadow: -2px 0 20px rgba(0, 255, 245, 0.3);
}

.row-index {
  /* ... */
  color: var(--gray-500);
  /* ... */
}

.row-thumbnail {
  /* ... */
  border: 1px solid var(--gray-700);
}

.row-title {
  /* ... */
  color: var(--gray-200);
}

.category-badge {
  /* ... */
  color: var(--gray-400);
  border: 1px solid var(--gray-700);
  /* ... */
}

.tag-chip {
  /* ... */
  background: rgba(118, 17, 166, 0.2);
  border: 1px solid var(--accent-regular);
  color: var(--gray-300);
}

.arrow {
  /* ... */
  color: var(--neon-cyan);
  /* ... */
}
```

**After**:
```css
.project-row {
  display: grid;
  grid-template-columns:
    3rem      /* index */
    5rem      /* thumbnail */
    minmax(200px, 1fr)  /* title */
    10rem     /* category */
    10rem     /* date */
    minmax(150px, 2fr)  /* tags */
    10rem     /* status */
    3rem;     /* action */
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: var(--bg-card);
  border: var(--border-card);
  border-left: var(--border-width-medium) solid transparent;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

.project-row:hover {
  border-left-color: var(--accent-regular);
  background: var(--hover-overlay);
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.row-index {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--gray-400);
  font-weight: 700;
}

.row-thumbnail {
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: var(--border-card);
}

.row-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.row-title {
  font-family: var(--font-brand);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--gray-100);
}

.category-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--gray-300);
  border: var(--border-card);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: var(--bg-secondary);
}

.row-date {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--gray-400);
}

.row-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag-chip {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: var(--accent-overlay);
  border: var(--border-width-thin) solid var(--accent-regular);
  border-radius: 0.25rem;
  color: var(--gray-200);
}

.tag-count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--gray-500);
}

.arrow {
  font-size: 1.5rem;
  color: var(--accent-regular);
  transition: all 0.2s ease;
}

.project-row:hover .arrow {
  transform: translateX(4px);
  color: var(--accent-dark);
}

/* Mobile responsive */
@media (max-width: 50em) {
  .project-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
  }

  .row-index {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  .row-thumbnail {
    width: 100%;
    height: 8rem;
  }

  .row-date,
  .row-category,
  .row-status {
    font-size: 0.75rem;
  }
}
```

**Key Changes**:
- Replace `rgba(0, 0, 0, 0.3)` with `var(--bg-card)`
- Replace `var(--border-subtle)` with `var(--border-card)`
- Replace all `--neon-cyan` with `--accent-regular`
- Use `--hover-overlay` for hover background
- Update text colors to use semantic tokens
- Add category badge background
- Add horizontal slide effect on hover

---

### Step 3.3: Update Nav.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/Nav.astro`

**Update styles (lines 96-305)**:

**Key sections to update**:

**Menu Button (lines 121-137)**:
```css
.menu-button {
  position: relative;
  display: flex;
  border: var(--border-card);
  border-radius: 999rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: var(--gray-300);
  background: var(--bg-secondary);
  box-shadow: var(--shadow-md);
  transition: all var(--theme-transition);
}

.menu-button[aria-expanded='true'] {
  color: var(--gray-100);
  background: var(--bg-tertiary);
  border-color: var(--border-strong);
}

.menu-button::before {
  position: absolute;
  inset: -1px;
  content: '';
  background: var(--border-accent);
  border-radius: 999rem;
  z-index: -1;
  opacity: 0;
  transition: opacity var(--theme-transition);
}

.menu-button[aria-expanded='true']::before {
  opacity: 0.1;
}
```

**Nav Items (lines 158-169)**:
```css
.nav-items {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--text-md);
  line-height: 1.2;
  list-style: none;
  padding: 2rem;
  background-color: var(--bg-card);
  border: var(--border-card);
  box-shadow: var(--shadow-lg);
}
```

**Links (lines 171-179)**:
```css
.link {
  display: inline-block;
  color: var(--gray-300);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color var(--theme-transition);
}

.link.active {
  color: var(--gray-50);
  font-weight: 600;
}

.link:hover {
  color: var(--gray-100);
}
```

**Desktop Nav (lines 241-276)**:
```css
@media (min-width: 50em) {
  .nav-items {
    position: relative;
    flex-direction: row;
    font-size: var(--text-sm);
    border-radius: 999rem;
    padding: 0.5rem 0.5625rem;
    background: var(--bg-card);
    border: var(--border-card);
    box-shadow: var(--shadow-md);
  }

  .nav-items::before {
    position: absolute;
    inset: -1px;
    content: '';
    background: var(--border-accent);
    border-radius: 999rem;
    z-index: -1;
    opacity: 0.1;
  }

  .link {
    padding: 0.5rem 1rem;
    border-radius: 999rem;
    transition: all var(--theme-transition);
  }

  .link:hover,
  .link:focus {
    color: var(--gray-100);
    background-color: var(--hover-overlay);
  }

  .link.active {
    color: var(--accent-text-over);
    background-color: var(--accent-regular);
  }
}
```

---

### Step 3.4: Update StatusIndicator.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/StatusIndicator.astro`

**Note**: The main status LED styles are in global.css (already updated in Phase 1). This component may just need minor adjustments.

**Add filter for light mode visibility** (if styles exist in component):
```css
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-label {
  color: var(--gray-300);
}

/* Ensure LED is visible in both themes */
.status-led {
  filter: brightness(1.1);
}

:global(.theme-dark) .status-led {
  filter: brightness(1);
}
```

---

### Testing Phase 3

**Manual Tests**:
1. ✓ PortfolioPreview cards visible with clear borders
2. ✓ Card hover states work (color change, lift effect)
3. ✓ ProjectRow borders visible, hover states work
4. ✓ Nav buttons have visible borders
5. ✓ Nav active link states styled correctly
6. ✓ Status LEDs visible in both themes
7. ✓ All interactive elements keyboard accessible

**Visual Regression**:
- Compare light mode before/after screenshots
- Verify dark mode unchanged
- Check all pages: home, work, about

**Git Commit**:
```bash
git add src/components/PortfolioPreview.astro src/components/ProjectRow.astro src/components/Nav.astro src/components/StatusIndicator.astro
git commit -m "feat: update high-priority components for light mode support

PortfolioPreview:
- Use semantic background and border tokens
- Add hover lift effect and border color change
- Update title styling with backdrop blur

ProjectRow:
- Replace hard-coded rgba backgrounds with semantic tokens
- Replace neon cyan with accent-regular for professional look
- Add horizontal slide effect on hover
- Use semantic border tokens

Nav:
- Update menu button with semantic tokens
- Add subtle accent border on active states
- Use hover-overlay for link hover states
- Improve visual hierarchy with updated colors

StatusIndicator:
- Add brightness filter for better LED visibility in light mode

All components now properly support both light and dark themes."
```

---

## Phase 4: Remaining Components

**Duration**: 2-3 hours
**Priority**: Medium
**Git Commit**: "feat: update remaining components for light mode consistency"

### Objectives

- Update Skills, Pill, ThemeToggle, CallToAction components
- Update any remaining page-level components
- Ensure consistency across all UI elements

### Components to Update

1. `Skills.astro`
2. `Pill.astro`
3. `ThemeToggle.astro`
4. `CallToAction.astro`
5. `TechnicalDivider.astro`
6. `WorkControls.astro`
7. `ContactCTA.astro`
8. `Footer.astro`

---

### Step 4.1: Update Skills.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/Skills.astro`

**Update `.box` style**:
```css
.box {
  border: var(--border-card);
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-sm);
}

.skills h2 {
  font-size: var(--text-lg);
}

.skills p {
  color: var(--gray-300);
}
```

---

### Step 4.2: Update Pill.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/Pill.astro`

**Update styles**:
```css
.pill {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  color: var(--accent-text-over);
  border: var(--border-width-thin) solid var(--accent-regular);
  background-color: var(--accent-regular);
  border-radius: 999rem;
  font-size: var(--text-md);
  line-height: 1.35;
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
  transition: all var(--theme-transition);
}

.pill:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

---

### Step 4.3: Update ThemeToggle.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/ThemeToggle.astro`

**Update styles (lines 13-67)**:
```css
button {
  display: flex;
  border: var(--border-card);
  border-radius: 999rem;
  padding: 0;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  outline: 1px solid transparent;
  transition: all var(--theme-transition);
}

button:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-strong);
}

.icon {
  z-index: 1;
  position: relative;
  display: flex;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  color: var(--gray-400);
  transition: color var(--theme-transition);
}

.icon.light::before {
  content: '';
  z-index: -1;
  position: absolute;
  inset: 0;
  background-color: var(--accent-regular);
  border-radius: 999rem;
  transition: transform var(--theme-transition);
}

:global(.theme-dark) .icon.light::before {
  transform: translateX(100%);
}

:global(.theme-dark) .icon.dark,
:global(html:not(.theme-dark)) .icon.light {
  color: var(--accent-text-over);
}

@media (prefers-reduced-motion: no-preference) {
  .icon,
  .icon.light::before {
    transition: transform var(--theme-transition), color var(--theme-transition);
  }
}

@media (forced-colors: active) {
  .icon.light::before {
    background-color: SelectedItem;
  }
}
```

---

### Step 4.4: Update CallToAction.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/CallToAction.astro`

**Update styles**:
```css
a {
  position: relative;
  display: flex;
  place-content: center;
  text-align: center;
  padding: 0.56em 2em;
  gap: 0.8em;
  color: var(--accent-text-over);
  text-decoration: none;
  line-height: 1.1;
  border-radius: 999rem;
  overflow: hidden;
  background: var(--gradient-accent);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  border: var(--border-width-thin) solid transparent;
  transition: all var(--theme-transition);
}

a:hover {
  box-shadow: var(--shadow-accent);
  transform: translateY(-2px);
}

a::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background-color var(--theme-transition);
  background-color: transparent;
}

a:focus::after,
a:hover::after {
  background-color: var(--hover-overlay);
}
```

---

### Step 4.5: Update TechnicalDivider.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/TechnicalDivider.astro`

**Update styles**:
```css
.tech-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0 2rem;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--gradient-stroke);
  opacity: 0.5;
}

.divider-content {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.divider-title {
  font-size: 1rem;
  color: var(--gray-300);
  font-weight: 700;
}

.divider-count {
  font-size: 0.875rem;
  color: var(--gray-500);
}
```

---

### Step 4.6: Update WorkControls.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/WorkControls.astro`

**Update styles (lines 42-153)**:
```css
.work-controls {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border: var(--border-card);
  border-radius: 0.5rem;
  flex-wrap: wrap;
  box-shadow: var(--shadow-sm);
}

.control-section {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.control-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.filter-buttons,
.sort-buttons,
.view-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-btn,
.sort-btn,
.view-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: var(--border-input);
  color: var(--gray-400);
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.25rem;
}

.filter-btn:hover,
.sort-btn:hover,
.view-btn:hover {
  border-color: var(--accent-regular);
  color: var(--accent-regular);
  box-shadow: var(--shadow-sm);
}

.filter-btn.active,
.sort-btn.active,
.view-btn.active {
  background: var(--accent-overlay);
  border-color: var(--accent-regular);
  color: var(--accent-regular);
}

.search-section {
  flex: 1;
  min-width: 200px;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border: var(--border-input);
  color: var(--gray-200);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-regular);
  box-shadow: var(--shadow-sm);
  background: var(--bg-card);
}

.search-input::placeholder {
  color: var(--gray-500);
}
```

---

### Step 4.7: Update ContactCTA.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/ContactCTA.astro`

**Update styles**:
```css
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border-top: var(--border-divider);
  border-bottom: var(--border-divider);
  padding: 5rem 1.5rem;
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-sm);
}

/* Keep rest of styles */
```

---

### Step 4.8: Update Footer.astro

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/components/Footer.astro`

**Update styles**:
```css
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: auto;
  padding: 3rem 1rem 1.5rem;
  color: var(--gray-400);
  text-align: center;
  font-size: var(--text-sm);
  border-top: var(--border-divider);
  background: var(--bg-secondary);
}

footer a {
  color: var(--gray-400);
  text-decoration: none;
  transition: color var(--theme-transition);
}

footer a:hover {
  color: var(--accent-regular);
}

/* Keep rest of styles */
```

---

### Step 4.9: Update about.astro Page Styles

**File**: `/mnt/0B8533211952FCF2/joshj-personal-website-latest/src/pages/about.astro`

**Update styles (lines 142-228)**:
```css
.about-content {
  max-width: 70rem;
  margin-inline: auto;
}

.content-card {
  background-color: var(--bg-card);
  border: var(--border-card);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.card-body {
  color: var(--gray-200);
}

.card-body :global(p) {
  line-height: 1.6;
}

.tech-grid {
  display: grid;
  gap: 2rem;
  margin-top: 1rem;
}

.tech-category {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: var(--accent-overlay);
  border: var(--border-width-thin) solid var(--accent-regular);
  border-radius: 0.25rem;
  color: var(--gray-200);
  transition: all 0.2s ease;
}

.tag:hover {
  background: var(--active-overlay);
  border-color: var(--accent-light);
  color: var(--gray-100);
  box-shadow: var(--shadow-sm);
}
```

---

### Testing Phase 4

**Manual Tests**:
1. ✓ All components render correctly in light mode
2. ✓ All borders visible and appropriately styled
3. ✓ Hover states work consistently
4. ✓ Focus states visible for keyboard navigation
5. ✓ WorkControls buttons visible and interactive
6. ✓ Tech tags on About page properly styled
7. ✓ Footer and ContactCTA background colors appropriate

**Visual Check**:
- Compare all pages side-by-side (light vs dark)
- Verify consistency across components
- Check mobile and desktop layouts

**Git Commit**:
```bash
git add src/components/Skills.astro src/components/Pill.astro src/components/ThemeToggle.astro src/components/CallToAction.astro src/components/TechnicalDivider.astro src/components/WorkControls.astro src/components/ContactCTA.astro src/components/Footer.astro src/pages/about.astro
git commit -m "feat: update remaining components for light mode consistency

Skills, Pill, ThemeToggle, CallToAction:
- Update to use semantic border and background tokens
- Add appropriate hover effects and shadows
- Improve visual hierarchy in light mode

TechnicalDivider:
- Replace hard-coded cyan gradient with semantic stroke gradient
- Adjust opacity for better visibility in light mode

WorkControls:
- Replace rgba backgrounds with semantic tokens
- Update button states with accent colors
- Improve search input styling

ContactCTA, Footer:
- Update border and background colors
- Improve text contrast with gray-400

about.astro:
- Update content-card styling
- Fix tech tag backgrounds and borders
- Add hover effects to tech tags

All components now fully support light mode with consistent styling."
```

---

## Phase 5: Testing & Refinement

**Duration**: 2-3 hours
**Priority**: Critical
**Git Commit**: "test: comprehensive light mode testing and refinements"

### Objectives

- Visual regression testing across all pages
- WCAG contrast compliance verification
- Interactive state testing
- Edge case testing
- Performance validation
- Browser compatibility checks

---

### Step 5.1: Visual Regression Testing

**Pages to Test**:
- `/` (Home)
- `/work/` (Work - Table View)
- `/work/` (Work - Grid View)
- `/about/` (About)
- `/work/[slug]` (Individual project pages)

**Test Matrix**:

| Page | Light Mode | Dark Mode | Mobile | Desktop | Notes |
|------|------------|-----------|--------|---------|-------|
| Home | ✓ | ✓ | ✓ | ✓ | Check Hero, Cards, CTA |
| Work (Table) | ✓ | ✓ | ✓ | ✓ | Check ProjectRow borders |
| Work (Grid) | ✓ | ✓ | ✓ | ✓ | Check PortfolioPreview cards |
| About | ✓ | ✓ | ✓ | ✓ | Check tech tags, content cards |
| Project Detail | ✓ | ✓ | ✓ | ✓ | Check content layout |

**Checklist**:
- [ ] All borders visible in light mode
- [ ] No invisible white-on-white elements
- [ ] Background gradients appropriate per theme
- [ ] Three.js canvas only shows in dark mode (desktop)
- [ ] Mobile backgrounds correct per theme
- [ ] Cards have clear visual separation
- [ ] Text readable on all backgrounds
- [ ] Status LEDs visible
- [ ] All images load correctly

---

### Step 5.2: WCAG Contrast Checking

**Tool**: Use axe DevTools or WebAIM Contrast Checker

**Elements to Check**:

**Light Mode**:
- Body text (`--gray-200` on `--bg-base`): Target 7:1+ (AA)
- Headings (`--gray-50` on `--bg-base`): Target 14:1+ (AAA)
- Muted text (`--gray-300` on `--bg-card`): Target 4.5:1+ (AA)
- Subtle text (`--gray-400` on `--bg-card`): Target 3:1+ (AA Large)
- Links (`--accent-regular` on `--bg-base`): Target 4.5:1+ (AA)
- Buttons (white on `--accent-regular`): Target 4.5:1+ (AA)
- Status LEDs (check visibility on backgrounds)

**Dark Mode** (verify not broken):
- All existing contrast ratios maintained

**Checklist**:
- [ ] All body text meets AA (4.5:1)
- [ ] All headings meet AAA (7:1)
- [ ] No AA failures in light mode
- [ ] Dark mode contrast unchanged
- [ ] Status indicators pass contrast

---

### Step 5.3: Interactive State Testing

**Elements to Test**:
1. **Links**:
   - [ ] Hover color changes to `--link-hover`
   - [ ] Focus ring visible
   - [ ] Active state distinguishable

2. **Buttons (WorkControls, Nav, etc.)**:
   - [ ] Hover state visible (border/background change)
   - [ ] Active state styled correctly
   - [ ] Focus ring visible
   - [ ] Disabled state (if applicable)

3. **Cards (PortfolioPreview, ProjectRow)**:
   - [ ] Hover lift effect works
   - [ ] Border color changes on hover
   - [ ] Shadow increases on hover
   - [ ] Transition smooth

4. **Theme Toggle**:
   - [ ] Toggle switches themes instantly
   - [ ] Pill animation smooth
   - [ ] Icons change appropriately
   - [ ] No flash of wrong theme

5. **Form Elements (Search)**:
   - [ ] Focus border color changes
   - [ ] Placeholder text visible
   - [ ] Input text readable

---

### Step 5.4: Edge Case Testing

**Theme Toggle Scenarios**:
- [ ] Toggle while Three.js is animating → Three.js stops cleanly
- [ ] Toggle rapidly multiple times → No crashes, memory stable
- [ ] Toggle while page is loading → Works correctly
- [ ] Toggle on different pages → Consistent behavior

**Viewport Scenarios**:
- [ ] Resize from mobile to desktop while in light mode → Backgrounds adapt
- [ ] Resize from desktop to mobile while in dark mode → Three.js stops, mobile bg shows
- [ ] Toggle theme, then resize → Everything updates correctly

**Reduced Motion**:
- [ ] Visit with `prefers-reduced-motion: reduce` → No animations
- [ ] Theme toggle still works
- [ ] Three.js respects reduced motion preference

**Forced Colors Mode**:
- [ ] Visit with Windows High Contrast → Backgrounds removed
- [ ] Borders use system colors
- [ ] Content still readable

---

### Step 5.5: Performance Validation

**Metrics to Check**:

**Light Mode**:
- [ ] Three.js canvas not initialized → Lower CPU usage
- [ ] No Three.js animation frames running
- [ ] Paint performance good (no jank)
- [ ] Memory usage stable

**Dark Mode**:
- [ ] Three.js runs smoothly
- [ ] No memory leaks on theme toggle
- [ ] Animation frame rate stable (60fps target)

**Theme Toggle**:
- [ ] Toggle happens instantly (< 200ms)
- [ ] CSS transition smooth
- [ ] No layout thrashing

**Tools**:
- Chrome DevTools Performance tab
- Memory profiler
- FPS meter

---

### Step 5.6: Browser Compatibility

**Browsers to Test**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

**Features to Verify**:
- [ ] CSS custom properties work
- [ ] Backdrop-filter (on title overlays)
- [ ] Three.js canvas renders (dark mode)
- [ ] MutationObserver fires correctly
- [ ] Theme toggle works

---

### Step 5.7: Accessibility Testing

**Keyboard Navigation**:
- [ ] Tab through all interactive elements
- [ ] Focus ring visible on all elements
- [ ] Theme toggle operable with keyboard
- [ ] Skip links work (if present)
- [ ] No keyboard traps

**Screen Reader**:
- [ ] Theme toggle announces state
- [ ] Links announce correctly
- [ ] Headings provide structure
- [ ] Images have alt text
- [ ] Status indicators announced

---

### Step 5.8: Bug Fixes and Refinements

**Document any issues found**:

**Issue Template**:
```markdown
### Issue #X: [Brief Description]

**Severity**: Critical / High / Medium / Low
**Location**: [File:line or component name]
**Theme**: Light / Dark / Both
**Description**: [What's wrong]
**Expected**: [What should happen]
**Actual**: [What actually happens]
**Fix**: [How to fix it]
```

**Fix all Critical and High severity issues before committing.**

---

### Testing Checklist Summary

- [ ] Visual regression - all pages, both themes, mobile/desktop
- [ ] WCAG contrast - all text elements meet AA
- [ ] Interactive states - hover, focus, active all work
- [ ] Edge cases - theme toggle, resize, reduced motion
- [ ] Performance - no regressions, Three.js cleanup works
- [ ] Browser compatibility - major browsers tested
- [ ] Accessibility - keyboard, screen reader tested
- [ ] All critical bugs fixed

---

**Git Commit**:
```bash
git add -A
git commit -m "test: comprehensive light mode testing and refinements

Testing completed:
- Visual regression across all pages (light/dark, mobile/desktop)
- WCAG AA contrast compliance verified for all text elements
- Interactive states (hover, focus, active) validated
- Edge cases tested (theme toggle, viewport resize, reduced motion)
- Performance validated (Three.js cleanup, memory stability)
- Browser compatibility confirmed (Chrome, Firefox, Safari, Edge)
- Accessibility verified (keyboard navigation, screen reader)

Bug fixes:
- [List any bugs fixed during testing]

All tests passing. Light mode ready for code review."
```

---

## Phase 6: Code Review & Quality Check

**Duration**: 2-3 hours
**Priority**: High
**Git Commit**: "refactor: address code review findings for light mode"

### Objectives

- Launch code review agents to analyze implementation
- Address simplicity, DRY, elegance concerns
- Fix bugs and functional correctness issues
- Ensure adherence to project conventions

---

### Step 6.1: Launch Code Review Agents

Use the `feature-dev:code-reviewer` agent type to review the implementation from three angles:

**Agent 1: Simplicity/DRY/Elegance**
```bash
Task: Review light mode implementation for code simplicity, DRY principles, and elegance
Focus: Look for repetition, over-engineering, complex logic that could be simplified
Files: src/styles/global.css, src/layouts/BaseLayout.astro, all component files
```

**Agent 2: Bugs/Functional Correctness**
```bash
Task: Review light mode implementation for bugs and functional correctness
Focus: CSS variable usage, theme toggle logic, Three.js cleanup, potential runtime errors
Files: src/layouts/BaseLayout.astro (Three.js script), src/styles/global.css, all components
```

**Agent 3: Project Conventions/Abstractions**
```bash
Task: Review light mode implementation for adherence to project conventions
Focus: Astro component patterns, CSS naming, variable usage consistency
Files: All modified files
Reference: CLAUDE.md for project patterns
```

---

### Step 6.2: Review Findings

**Process**:
1. Review agent reports
2. Categorize findings by severity:
   - **Critical**: Must fix (breaks functionality)
   - **High**: Should fix (violates best practices)
   - **Medium**: Nice to fix (improvements)
   - **Low**: Optional (minor polish)

3. Prioritize fixes: Critical → High → Medium (skip Low if time-constrained)

---

### Step 6.3: Address Findings

**Example Findings and Fixes**:

**Finding**: Repeated border definitions across components
**Severity**: High (DRY violation)
**Fix**: Consolidate into utility classes or ensure all use semantic tokens

**Finding**: Three.js cleanup may leak memory
**Severity**: Critical
**Fix**: Add comprehensive disposal in destroy() function

**Finding**: Inconsistent use of semantic tokens (some components still use raw variables)
**Severity**: High
**Fix**: Update components to use semantic tokens

---

### Step 6.4: Create Fixes

**Checklist**:
- [ ] All Critical issues fixed
- [ ] All High priority issues fixed
- [ ] Medium issues addressed (time permitting)
- [ ] Code tested after fixes
- [ ] No regressions introduced

---

**Git Commit**:
```bash
git add -A
git commit -m "refactor: address code review findings for light mode

Code review improvements:
- [List specific improvements made]

Bug fixes:
- [List any bugs fixed]

DRY improvements:
- [List any repetition eliminated]

All code review findings addressed. Implementation ready for production."
```

---

## Testing Strategy

### Manual Testing Workflow

**Pre-Commit Checks** (every phase):
1. Toggle theme → Verify changes work
2. Check both mobile and desktop
3. Verify no console errors
4. Quick visual scan

**Post-Implementation Testing** (Phase 5):
1. Full visual regression (all pages)
2. Contrast compliance (automated tool)
3. Interactive states (manual)
4. Edge cases (manual)
5. Performance (DevTools)
6. Cross-browser (manual)
7. Accessibility (manual + automated)

---

### Automated Testing (Optional)

**Tools**:
- **axe DevTools**: Accessibility and contrast checking
- **Lighthouse**: Performance and accessibility audit
- **Percy or Chromatic**: Visual regression testing (paid)

**Setup** (if desired):
```bash
# Install axe CLI
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:4321 --tags wcag2aa

# Run Lighthouse
npx lighthouse http://localhost:4321 --view
```

---

### Contrast Checking Process

**Tool**: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

**Process**:
1. Get color values from global.css
2. Test each text/background combination
3. Verify meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
4. Document any failures
5. Adjust colors if needed

**Example**:
```
Foreground: --gray-200 (#444b53)
Background: --bg-base (#ffffff)
Ratio: 7.5:1
Result: AAA ✓
```

---

## Git Workflow

### Branch Strategy

**Option 1: Single Feature Branch**
```bash
git checkout -b feat/light-mode-revamp
# Work through all phases
git push origin feat/light-mode-revamp
# Create PR when done
```

**Option 2: Phased Branches** (if collaborating)
```bash
git checkout -b feat/light-mode-phase-1-colors
# Complete Phase 1
git push origin feat/light-mode-phase-1-colors
# Create PR, merge to main

git checkout main
git pull
git checkout -b feat/light-mode-phase-2-backgrounds
# Repeat for each phase
```

---

### Commit Message Format

**Pattern**: `<type>: <description>`

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructure
- `test`: Testing updates
- `docs`: Documentation only
- `style`: Formatting changes

**Examples**:
```
feat: implement professional light mode color palette
feat: add theme-aware background system with conditional Three.js
feat: update high-priority components for light mode support
test: comprehensive light mode testing and refinements
refactor: address code review findings for light mode
```

---

### Pull Request Template

```markdown
## Light Mode Revamp - Clean Architecture Implementation

### Summary
Complete redesign of light mode theme with professional color palette, theme-aware backgrounds, and enhanced accessibility.

### Changes
- ✅ Phase 1: Professional light mode color palette with semantic tokens
- ✅ Phase 2: Theme-aware backgrounds with conditional Three.js rendering
- ✅ Phase 3: Updated high-priority components (PortfolioPreview, ProjectRow, Nav, StatusIndicator)
- ✅ Phase 4: Updated remaining components for consistency
- ✅ Phase 5: Comprehensive testing and refinements
- ✅ Phase 6: Code review and quality improvements

### Screenshots
[Attach before/after screenshots of key pages in light mode]

### Testing
- [x] Visual regression (all pages, both themes)
- [x] WCAG AA contrast compliance
- [x] Interactive states validated
- [x] Edge cases tested
- [x] Performance validated
- [x] Cross-browser tested
- [x] Accessibility verified

### Breaking Changes
- Light mode color palette completely redesigned
- Component props unchanged (backward compatible)

### Checklist
- [x] All phases completed
- [x] All tests passing
- [x] No console errors
- [x] Documentation updated (this file)
- [x] Code reviewed
```

---

## Rollback Procedures

### Quick Rollback (Git)

**Revert last commit**:
```bash
git revert HEAD
git push origin <branch>
```

**Revert specific commit**:
```bash
git log --oneline  # Find commit hash
git revert <commit-hash>
git push origin <branch>
```

**Reset to previous state** (local only):
```bash
git reset --hard <commit-hash>
# WARNING: This discards changes. Use with caution.
```

---

### Partial Rollback

**Revert specific phase**:
```bash
# Find commits for that phase
git log --oneline --grep="Phase X"

# Revert in reverse order
git revert <commit-3>
git revert <commit-2>
git revert <commit-1>
```

---

### Emergency Rollback (Production)

If light mode causes critical issues in production:

**Option 1: Feature Flag** (if implemented):
```javascript
// Disable light mode temporarily
const ENABLE_LIGHT_MODE = false;
```

**Option 2: Force Dark Mode**:
```css
/* In global.css, temporarily add: */
:root {
  /* Force all variables to dark mode values */
}
```

**Option 3: Deploy Previous Version**:
```bash
git checkout <previous-release-tag>
npm run build
# Deploy previous build
```

---

## Success Metrics

### Quantitative Metrics

**Contrast Compliance**:
- Target: 100% WCAG AA compliance
- Measure: axe DevTools audit

**Performance**:
- Light mode FPS: 60fps (no jank)
- Theme toggle time: < 200ms
- Memory stable on toggle: < 5MB variance

**Accessibility**:
- axe violations: 0
- Lighthouse accessibility score: 100

---

### Qualitative Metrics

**Visual Quality**:
- Borders clearly visible in light mode
- Appropriate color palette (not washed out)
- Professional appearance (matches GitHub/Linear quality)

**User Experience**:
- Theme toggle works smoothly
- No visual glitches
- Appropriate aesthetics for each mode

**Code Quality**:
- DRY principles followed
- Consistent patterns
- Maintainable structure

---

## Appendix

### Reference Links

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Astro Documentation](https://docs.astro.build/)
- [Three.js Documentation](https://threejs.org/docs/)
- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

### Color Palette Quick Reference

**Light Mode Essentials**:
```css
--gray-50: #1f2328    /* Headings */
--gray-200: #444b53   /* Body text */
--gray-700: #d0d7de   /* Borders */
--accent-regular: #6639ba  /* Links, buttons */
--bg-card: #ffffff    /* Card backgrounds */
```

**Dark Mode Essentials**:
```css
--gray-50: #f3f4f7    /* Headings */
--gray-200: #c3cadb   /* Body text */
--gray-800: #283044   /* Borders */
--accent-dark: #c561f6 /* Links, buttons */
--bg-card: rgba(0,0,0,0.3) /* Card backgrounds */
```

---

### File Modification Summary

**Total Files Modified**: 15+

**Phase 1**:
- `src/styles/global.css`

**Phase 2**:
- `src/layouts/BaseLayout.astro`

**Phase 3**:
- `src/components/PortfolioPreview.astro`
- `src/components/ProjectRow.astro`
- `src/components/Nav.astro`
- `src/components/StatusIndicator.astro`

**Phase 4**:
- `src/components/Skills.astro`
- `src/components/Pill.astro`
- `src/components/ThemeToggle.astro`
- `src/components/CallToAction.astro`
- `src/components/TechnicalDivider.astro`
- `src/components/WorkControls.astro`
- `src/components/ContactCTA.astro`
- `src/components/Footer.astro`
- `src/pages/about.astro`

---

### Estimated Lines Changed

- **Phase 1**: ~150 lines (global.css)
- **Phase 2**: ~100 lines (BaseLayout.astro)
- **Phase 3**: ~120 lines (4 components)
- **Phase 4**: ~130 lines (9 components/pages)
- **Total**: ~500 lines changed/added

---

## Document Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-28 | Initial comprehensive implementation plan |

---

## Implementation Progress

**Last Updated:** 2026-01-28
**Current Status:** Phase 2 Complete, Phase 3 Ready to Begin
**Overall Progress:** 33% Complete (2 of 6 implementation phases)

---

### Summary

The Clean Architecture light mode revamp is currently in progress. We have successfully completed the foundation phases (Phases 1-2), establishing a professional color system and theme-aware background system that addresses all critical visibility and accessibility issues identified in the initial analysis. The site now has proper light mode backgrounds, conditional Three.js rendering, and a complete semantic token system ready for component updates.

---

### Completed Phases

#### ✅ Phase 1-4: Planning & Architecture Design (100% Complete)

**Duration:** ~6 hours
**Status:** Completed

**Accomplishments:**
1. **Phase 1: Discovery** - Confirmed feature requirements with user
   - User wants clean, professional light mode with strong borders
   - Light theme-aware backgrounds required
   - Replace neon effects with solid colors
   - Professional aesthetic matching GitHub/Linear/Vercel

2. **Phase 2: Codebase Exploration** - Launched 3 parallel code-explorer agents
   - **Agent 1 (Theme System)**: Mapped complete theme switching architecture
     - Identified `.theme-dark` class mechanism
     - Found localStorage persistence in MainHead.astro
     - Documented Web Component ThemeToggle implementation
   - **Agent 2 (Styling Architecture)**: Analyzed color system and CSS variables
     - Identified inverted color scale problem (gray-0 = darkest in light mode)
     - Found invisible border issue (`--border-subtle: rgba(255,255,255,0.1)`)
     - Documented weak `--gray-800` borders (#e3e6ee)
   - **Agent 3 (Component Patterns)**: Traced component styling usage
     - Found neon cyan hover effects (invisible in light mode)
     - Identified hard-coded `rgba(0,0,0,0.3)` backgrounds
     - Documented non-theme-aware BaseLayout backgrounds

3. **Phase 3: Clarifying Questions** - Gathered design preferences
   - **Design Direction:** Clean, minimal professional (like GitHub/Linear)
   - **Backgrounds:** Light theme-aware backgrounds with gradients
   - **Borders:** Strong visible borders throughout
   - **Neon Effects:** Replace with solid professional colors

4. **Phase 4: Architecture Design** - Designed 3 implementation approaches
   - **Approach 1 (Minimal):** 30 min implementation, CSS-only fixes
   - **Approach 2 (Clean Architecture):** 2 weeks, complete redesign (SELECTED)
   - **Approach 3 (Pragmatic):** 1 hour, high-impact changes only
   - **User Choice:** Clean Architecture for long-term quality

**Key Decisions Made:**
- Dual-theme design system (not inverted colors)
- Theme-aware background system (conditional rendering)
- Conditional Three.js (dark mode only)
- Semantic color token system
- Enhanced shadow system for light mode

**Deliverables:**
- Comprehensive implementation plan document (3,225 lines)
- Architecture decision records
- Complete color palette specifications
- File-by-file implementation guide

---

#### ✅ Phase 5.1: Foundation - Color System (100% Complete)

**Duration:** ~45 minutes
**Status:** Completed
**Git Commit:** `a0ab6ff` - "feat: implement professional light mode color palette"

**File Modified:** `src/styles/global.css`

**Changes Summary:**

**Light Mode Color Palette Redesigned:**
```css
/* Before: Inverted dark mode colors (confusing semantics) */
--gray-0: #090b11  (darkest, but named like lightest)
--gray-800: #e3e6ee  (too light, invisible borders)

/* After: Professional warm neutral grays */
--gray-0: #0e1116   (almost black - semantic clarity)
--gray-50: #1f2328  (headings - strong contrast)
--gray-200: #444b53 (body text - 7.5:1 contrast AAA)
--gray-700: #d0d7de (borders - clearly visible)
--gray-800: #e6ebf1 (subtle borders)
```

**Semantic Token System Added:**
- **Border Tokens:** `--border-strong`, `--border-medium`, `--border-subtle`, `--border-accent`
- **Border Styles:** `--border-card`, `--border-card-hover`, `--border-input`, `--border-divider`, `--border-focus`, `--border-active`
- **Background Tokens:** `--bg-base`, `--bg-secondary`, `--bg-tertiary`, `--bg-overlay`, `--bg-card`
- **Interactive States:** `--hover-overlay`, `--active-overlay`, `--selection-highlight`
- **Link Colors:** `--link-color`, `--link-hover`

**Professional Accent Colors:**
```css
/* Light Mode */
--accent-light: #8250df    (Purple 400 - highlights)
--accent-regular: #6639ba  (Purple 500 - primary)
--accent-dark: #512a97     (Purple 600 - dark accent)

/* Dark Mode (preserved cyberpunk) */
--accent-light: #1c0056
--accent-regular: #7611a6
--accent-dark: #c561f6
```

**Status Colors Updated:**
```css
/* Light Mode: Muted professional colors */
--status-live-bg: #1a7f37      (Green 600)
--status-archived-bg: #9a6700  (Amber 700)
--status-in-dev-bg: #0969da    (Blue 600)

/* Dark Mode: Neon colors preserved */
--status-live-bg: var(--neon-green)
--status-archived-bg: var(--neon-amber)
--status-in-dev-bg: var(--neon-cyan)
```

**Shadow System Enhanced:**
```css
/* Light Mode: Deeper shadows for depth (0.06-0.12 opacity) */
--shadow-sm: 0px 1px 2px rgba(14, 17, 22, 0.06), ...
--shadow-md: 0px 2px 4px rgba(14, 17, 22, 0.06), ...
--shadow-accent: 0px 4px 16px rgba(98, 57, 186, 0.15)

/* Dark Mode: Subtle shadows preserved (0.01-0.12 opacity) */
```

**Gradient System Updated:**
```css
/* Light Mode: Subtle professional gradients */
--gradient-subtle: linear-gradient(150deg, #ffffff 0%, #f6f8fa 100%)
--gradient-background: linear-gradient(180deg,
  #ffffff 0%, #f8f9fb 20%, #f3f5f8 40%,
  #eef2f6 60%, #f3f5f8 80%, #ffffff 100%)

/* Dark Mode: Cyberpunk gradients preserved */
```

**Global Style Updates:**
- Body background: `var(--gray-999)` → `var(--bg-base)`
- Heading color: `var(--gray-100)` → `var(--gray-50)` (stronger contrast)
- Link hover states: Added `a:hover { color: var(--link-hover); }`
- Card utility: `.cardBackground` updated to use semantic tokens
- Status LEDs: Use new `--status-*-bg` and `--status-*-glow` variables

**Dark Mode Theme Overrides:**
- All new semantic tokens have dark mode overrides in `:root.theme-dark`
- Border system uses `rgba(255,255,255,*)` with appropriate opacity
- Background system maps to dark values
- Interactive states use white overlays instead of purple
- Technical UI colors preserve cyberpunk aesthetic

**WCAG Compliance Achieved:**
- Body text (`--gray-200`): 7.5:1 contrast (AAA)
- Headings (`--gray-50`): 14.2:1 contrast (AAA)
- Muted text (`--gray-300`): 5.1:1 contrast (AA)
- All interactive elements meet AA minimum

**Lines Changed:** ~150 lines (56 deletions, 150 insertions)

**Testing Performed:**
- ✅ Theme toggle verified - colors switch appropriately
- ✅ No console errors
- ✅ Light mode borders now visible
- ✅ Dark mode unchanged (no regressions)

**Issues Identified:**
- ✅ Backgrounds showing dark cyberpunk in light mode - FIXED in Phase 2
- Components still referencing old variables (Phases 3-4 will update)

---

#### ✅ Phase 2: BaseLayout Background System (100% Complete)

**Duration:** ~1 hour
**Status:** Completed
**Git Commit:** `04a71f3` - "feat: implement theme-aware background system with conditional Three.js"

**File Modified:** `src/layouts/BaseLayout.astro`

**Changes Summary:**

**HTML Structure Updated:**
- Added `dark-mode-only` class to Three.js canvas
- Added `dark-mode-only` class to cyberpunk overlay effects
- Added new `light-background` element with `light-mode-only` class

**CSS Changes:**
1. **Theme Visibility Controls** - Hide/show elements based on theme
   - `.dark-mode-only` - Hidden by default, shown only when `.theme-dark` present
   - `.light-mode-only` - Shown by default, hidden when `.theme-dark` present

2. **Light Mode Background System** - Clean gradient with subtle purple accents
   - Noise texture overlay
   - Soft radial glows at top-left and bottom-right
   - Uses `var(--gradient-background)` from Phase 1

3. **Theme-Aware Backgrounds Container**
   - Light mode: Transparent (handled by `.light-background`)
   - Dark mode mobile: Cyberpunk gradients with neon glows
   - Desktop (both themes): Transparent with noise texture

**JavaScript Changes:**
1. **`shouldInitThreeJS()` function** - Checks for `theme-dark` class
2. **Updated `handleViewport()`** - Checks viewport AND theme before init
3. **`handleThemeChange()` function** - Handles theme switching
4. **MutationObserver** - Watches for theme class changes on document element
5. **Initialization logic** - Added initial theme check

**Testing Performed:**
- ✅ Light mode shows clean gradient background
- ✅ Dark mode shows cyberpunk backgrounds and Three.js
- ✅ Theme toggle works instantly with proper Three.js init/destroy
- ✅ No memory leaks or console errors
- ✅ Mobile and desktop backgrounds work correctly

**Lines Changed:** ~163 insertions, ~10 deletions

---

### Pending Phases

#### ⏸️ Phase 3: High-Priority Components (0% Complete)

**Estimated Duration:** 4-5 hours
**Components to Update:**
- PortfolioPreview.astro
- ProjectRow.astro
- Nav.astro
- StatusIndicator.astro

**Planned Changes:**
- Replace `var(--gradient-subtle)` with `var(--bg-card)`
- Replace `var(--gray-800)` borders with `var(--border-card)`
- Replace `--neon-cyan` with `--accent-regular`
- Add hover effects with new semantic tokens

---

#### ⏸️ Phase 5.4: Remaining Components (0% Complete)

**Estimated Duration:** 2-3 hours
**Components to Update:**
- Skills.astro, Pill.astro, ThemeToggle.astro
- CallToAction.astro, TechnicalDivider.astro
- WorkControls.astro, ContactCTA.astro, Footer.astro
- about.astro page styles

---

#### ⏸️ Phase 5.5: Testing & Refinement (0% Complete)

**Estimated Duration:** 2-3 hours
**Testing Checklist:**
- Visual regression testing
- WCAG contrast validation
- Interactive state testing
- Edge case testing
- Performance validation
- Browser compatibility
- Accessibility verification

---

#### ⏸️ Phase 6: Code Review & Quality Check (0% Complete)

**Estimated Duration:** 2-3 hours
**Planned Activities:**
- Launch 3 code-reviewer agents
- Address simplicity/DRY/elegance findings
- Fix bugs and functional correctness issues
- Ensure project convention adherence

---

### Git Commit History

**Total Commits:** 2

1. **a0ab6ff** - `feat: implement professional light mode color palette`
   - Date: 2026-01-28
   - Phase: 1 (Foundation - Color System)
   - Files: src/styles/global.css (1 file, 150 insertions, 56 deletions)

2. **04a71f3** - `feat: implement theme-aware background system with conditional Three.js`
   - Date: 2026-01-28
   - Phase: 2 (BaseLayout Background System)
   - Files: src/layouts/BaseLayout.astro, docs/light-mode-revamp-implementation-plan.md (2 files, 163 insertions, 10 deletions)

---

### Statistics

**Time Invested:**
- Planning & Architecture: ~6 hours
- Implementation: ~2 hours
- **Total:** ~8 hours

**Files Modified:**
- global.css: ✅ Complete (Phase 1)
- BaseLayout.astro: ✅ Complete (Phase 2)
- light-mode-revamp-implementation-plan.md: ✅ Updated with TODOs and progress
- Components: ⏸️ Pending (15+ files)

**Lines of Code:**
- Changed so far: ~313 lines (313 insertions, 66 deletions)
- Estimated total: ~500 lines

**Progress Metrics:**
- Overall: 33% complete (2 of 6 implementation phases)
- Foundation (Phase 1): 100% complete ✅
- Backgrounds (Phase 2): 100% complete ✅
- High-Priority Components (Phase 3): 0% complete ⏸️
- Remaining Components (Phase 4): 0% complete ⏸️
- Testing (Phase 5): 0% complete ⏸️
- Code Review (Phase 6): 0% complete ⏸️

---

### Next Steps

**Immediate (Next):**
1. ✅ Phase 1: Foundation - Color System - COMPLETE
2. ✅ Phase 2: BaseLayout Background System - COMPLETE
3. ⏭️ Phase 3: High-Priority Components - READY TO START
   - Update PortfolioPreview.astro
   - Update ProjectRow.astro
   - Update Nav.astro
   - Update StatusIndicator.astro
   - Test components in both themes
   - Git commit Phase 3

**Short-term (This Week):**
4. Phase 4: Update remaining components (Skills, Pill, ThemeToggle, etc.)
5. Git commit for Phase 4

**Medium-term (Next Week):**
6. Phase 5: Comprehensive testing and refinements
7. Phase 6: Code review with agents
8. Final documentation update

---

### Challenges Encountered

1. **Edit Tool Limitations**
   - Issue: Special Unicode characters in CSS box-drawing comments caused Edit tool matching failures
   - Impact: Initially delayed Phase 2 progress
   - Resolution: Used Write tool to rewrite entire file with all changes at once ✅

2. **Complex File Structure**
   - Issue: BaseLayout.astro has nested Three.js script with 300+ lines
   - Impact: Required careful editing to avoid breaking animation
   - Resolution: Used Write tool to update entire file, tested thoroughly ✅

---

### Lessons Learned

1. **Box-drawing characters in comments**: Avoid Unicode box-drawing in CSS comments when using Edit tool
2. **Phased git commits**: Smaller, focused commits make rollback easier
3. **Semantic tokens early**: Adding semantic tokens in Phase 5.1 will simplify component updates
4. **Comprehensive planning pays off**: Detailed implementation plan prevents scope creep

---

### Risk Assessment

**Low Risk:**
- Color system changes (completed, tested, committed) ✅
- Semantic token additions (well-designed, backward compatible) ✅
- BaseLayout background system (completed, tested, committed) ✅
- Three.js conditional rendering (working correctly with MutationObserver) ✅

**Medium Risk:**
- Component updates at scale (15+ files, potential for inconsistency)
- Ensuring all components use semantic tokens consistently

**High Risk (Future):**
- Cross-browser testing (may reveal unexpected issues)
- Performance regression in complex components

**Mitigation Strategies:**
- Incremental testing after each component update
- Use code review agents before final commit
- Maintain rollback plan for each phase

---

**End of Implementation Plan**

For questions or clarifications during implementation, refer back to this document or consult the codebase exploration notes.

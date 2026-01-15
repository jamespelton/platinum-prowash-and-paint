# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Platinum ProWash & Paint is a React 18 single-page marketing website for an exterior services company (pressure washing, painting, restoration, holiday lighting). Built with TypeScript (strict mode) and Vite 5. Domain: paintnebraska.com

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (auto-opens browser)
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

**Tech Stack:** React 18 + TypeScript + Vite + CSS3 (no CSS-in-JS, no state management library, no routing)

**Component Flow:** `App.tsx` imports 13 section components in order (Header → Hero → Services → BeforeAfterSlider → Process → WhyUs → Gallery → ChristmasLights → Testimonials → About → FAQ → Contact → Footer). Each component is self-contained with its own CSS file.

**Key Patterns:**
- Functional components with hooks (useState, useEffect)
- Simple props passing, local component state only (no Redux/Context)
- Navigation via smooth scroll to section IDs
- Data arrays mapped to UI elements within components

**Styling System (`src/index.css`):**
- CSS variables for colors, spacing, typography
- Primary: Deep Blue (#0A1628), Accent: Patriotic Red (#C41E3A)
- Fonts: Montserrat (headings), Inter (body)
- Mobile breakpoint at 768px
- Glassmorphism effects with `.glass-card` classes

**Animations:**
- AOS (Animate On Scroll) initialized in `main.tsx` with 800ms duration
- Framer Motion available for advanced animations

## Important Files

**`src/constants.ts`** - Centralized business info (phone, email, business name). Update here to change contact details across all components. Note: `index.html` has hardcoded JSON-LD data that must be updated separately.

```typescript
export const PHONE_NUMBER = '(517) 755-7966'
export const PHONE_NUMBER_RAW = '5177557966'
export const EMAIL = 'Bryceredman83@icloud.com'
export const BUSINESS_NAME = 'Platinum ProWash & Paint'
```

## Important Notes

- **Netlify Forms:** Contact component uses Netlify form handling with honeypot spam protection - requires Netlify hosting
- **Images:** Organized in `/public/images/` with subfolders:
  - `/services/` - Service photos
  - `/before-after/painting/` and `/before-after/pool/` - Comparison images
  - `/christmas-lights/` - Holiday lighting gallery
- **SEO:** JSON-LD LocalBusiness schema in `index.html`
- **No tests configured:** No test framework is set up
- **Build output:** `dist/` folder, minified with esbuild

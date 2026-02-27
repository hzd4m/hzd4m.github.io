# SPEC.md — Portfolio Hzd4m

## 1. Project Overview

- **Project Name:** Portfolio Hzd4m
- **Type:** Personal portfolio website
- **Core Functionality:** Showcase a Computer Science academic and fullstack developer with an impressive, modern, tech-forward design
- **Target Users:** Potential employers, clients, collaborators, and fellow developers
- **Nível:** 1 (Site/Landing/MVP simples)

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (single-page scroll):**
1. **Navigation** — Fixed top nav with logo and anchor links
2. **Hero** — Full viewport intro with animated text and visual effects
3. **Tech Stack** — Grid of technologies with hover effects
4. **About** — Bio section with personal details
5. **Projects** — Card grid showcasing projects
6. **Blog** — Preview section for blog posts
7. **Footer** — Contact info and social links

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette (QUARK Identity):**
- Deep Carbon: `#0D0D0D` (primary background)
- Vivid Quark: `#00F5FF` (accent/highlights)
- Off-White: `#F5F5F0` (text primary)
- Muted Gray: `#2A2A2A` (secondary background)
- Dim Gray: `#666666` (secondary text)
- Electric Cyan: `#00D4E5` (hover states)

**Typography:**
- **Display/Titles:** Bebas Neue — bold, impactful, uppercase
- **Body Text:** Inter — clean, readable
- **Code/Data:** Space Mono — monospace for tech terms

**Font Sizes:**
- Hero Title: 72px (desktop) / 40px (mobile)
- Section Titles: 48px (desktop) / 32px (mobile)
- Subheadings: 24px
- Body: 16px
- Small/Caption: 14px

**Spacing System:**
- Section padding: 120px vertical (desktop) / 80px (mobile)
- Container max-width: 1200px
- Grid gap: 32px
- Card padding: 32px

**Visual Effects:**
- Subtle grid lines in background (brutalist aesthetic)
- Glow effects on accent elements
- Smooth scroll behavior
- Card hover: subtle lift + glow
- Text reveal animations on scroll

### Components

**Navigation:**
- Logo: "Hzd4m" in Bebas Neue with accent color
- Links: Home, Tech, About, Projects, Blog
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Large animated title: "HZD4M"
- Subtitle: "Desenvolvedor de Software & Ideias"
- Animated code-like tagline
- Scroll indicator at bottom
- Particle or grid background effect

**Tech Stack Grid:**
- 2-3 column layout (desktop) / 1-2 columns (mobile)
- Each tech item: icon + name
- Categories: Languages, Databases, Frontend, Backend, Cloud
- Hover: glow effect + slight scale
- Categories with headers

**About Section:**
- Profile image placeholder or stylized avatar
- Bio text with focus on academic background
- Passions: Coffee, Technology, Philosophy (icons)
- Academic credentials

**Project Cards:**
- Title with glow effect
- Description
- Tech tags
- MedCortex: no external links, internal highlight
- MedCortex Factory: AWS infrastructure highlight

**Blog Preview:**
- Section title "Crônicas"
- Grid of post previews (title + excerpt + date)
- Link to full blog
- Placeholder posts ready for content

**Footer:**
- Contact email
- Social links (GitHub, LinkedIn, etc.)
- "Built with Next.js + QUARK" credit

---

## 3. Functionality Specification

### Core Features

1. **Smooth Navigation** — Anchor links with smooth scroll
2. **Responsive Design** — Works on all devices
3. **Animations** — Subtle, performant CSS animations
4. **Tech Stack Display** — Organized, categorized grid
5. **Project Showcase** — Cards with detailed info
6. **Blog Integration** — Ready for markdown posts

### User Interactions

- Hover effects on all interactive elements
- Smooth scroll to sections
- Mobile menu toggle
- Scroll-triggered animations (fade in, slide up)

### Data Handling

- Static content (no CMS)
- Blog posts stored as markdown files
- Projects defined in data array

### Edge Cases

- Long project descriptions truncate gracefully
- Images have fallbacks
- Works without JavaScript (basic functionality)

---

## 4. Acceptance Criteria

### Visual Checkpoints

- [ ] Hero section fills viewport with animated text
- [ ] Tech grid displays all technologies in organized categories
- [ ] Project cards have hover effects and proper spacing
- [ ] Blog section shows preview cards
- [ ] Mobile navigation works correctly
- [ ] All animations are smooth (60fps)
- [ ] Colors match QUARK identity exactly

### Functional Checkpoints

- [ ] All navigation links scroll smoothly
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] All fonts load correctly
- [ ] Page loads under 3 seconds

---

## 5. Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Bebas Neue, Inter, Space Mono)
- **Animations:** CSS transitions + Framer Motion
- **Deployment:** Ready for Vercel

---

## 6. File Structure

```
portfolio_hzd4m/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── posts/
│   │           ├── post-1.md
│   │           └── post-2.md
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── posts.ts
│   └── types/
│       └── index.ts
├── public/
│   └── (static assets)
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

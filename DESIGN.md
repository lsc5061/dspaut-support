# DSPAUT Support Portal: Design System Guidelines

This document defines the visual identity, UI patterns, and design principles for the DSPAUT Support Portal. All future updates by developers or AI agents must adhere to these standards to maintain brand consistency.

## 1. Core Principles

- **Minimalist Excellence**: Avoid unnecessary decorations. Focus on spacing, typography, and content.
- **Professionalism**: Use a clean, corporate technical documentation style (Inspired by Microsoft Support, Stripe, and New Relic).
- **English UI Standardization**: All primary UI labels (Navigation, Buttons, Headings) must use standardized English terms (e.g., "MANUAL", "BLOG") to maintain a global, high-end identity.
- **Dark Mode First**: Every component must be fully responsive to both light and dark themes using semantic CSS classes.

## 2. Visual Foundation

### Color Palette
- **Primary Color**: `#555ED3` (Indigo/Purple) - Used for active links, buttons, and highlights.
- **Backgrounds**:
  - Light Mode: `bg-base-100` (White)
  - Dark Mode: `bg-base-100` (Deep Dark Gray/Black)
- **Borders**: Use `border-base-200` for subtle separation. Avoid heavy shadows.

### Typography
- **Headings**: `Outfit` - Modern, geometric, and bold.
- **Body Content**: `Inter` - Highly readable sans-serif for technical text.

## 3. Layout Standards

### Global Header (Navbar)
- Fixed height: `h-16`.
- Sticky behavior: Always visible at the top.
- Labels: Must strictly use `MANUAL` and `BLOG`.

### Homepage
- **Minimalist Entry**: Large cards for primary sections.
- **Max Width**: `max-w-[1600px]`.

### Manual (Documentation)
- **Index Page**: List-based design (No cards). Clean typography with horizontal dividers.
- **Content Pages**: Left sidebar for navigation, center content, right TOC (On This Page).
- **Sidebar Width**: `w-72` or `300px`.

### Blog (Insights)
- **Grid Layout**: 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **One-Screen View**: Keep the header and filters compact to ensure content is visible above the fold.
- **Filtering**: Alpine.js-powered smooth transitions between categories.
- **Pagination**: Strictly 9 items per page (3x3 grid) to maintain a balanced layout.

## 4. Component Specifications

### BlogCard
- **Thumbnail**: Mandatory 16:9 aspect ratio (`aspect-[16/9]`). Object-fit: cover.
- **Category Badge**: Top-left or above the title, color-coded by category.
- **Tags**: Strictly limited to **maximum 2 tags** to maintain uniform card height.
- **Summary**: Clamped to 3 lines for visual consistency.

## 5. Maintenance Rules for AI & Developers

- **No Arbitrary Changes**: Do not modify layouts or color schemes without explicit user authorization.
- **Path Integrity**: Store shared blog assets in `public/images/blog/ko/` for reliable client-side access.
- **Translation Object**: Use the centralized `t` object for UI strings to ensure consistent labeling across pages.
- **Semantic HTML**: Use proper tags (`<header>`, `<main>`, `<article>`, `<nav>`) for accessibility and SEO.

## 6. Content Upload Process

To maintain the high quality of the portal, the following workflow is used for new blog posts:

1.  **Draft Submission**: User provides the raw content, category, tags, and a specific thumbnail image.
2.  **Markdown Conversion**: AI transforms the content into a standardized Markdown file in `src/content/blog/ko/`.
3.  **Asset Management**: 
    - Thumbnail image is placed in `public/images/blog/ko/`.
    - Content-related images are placed in `src/content/blog/ko/images/`.
4.  **Metadata Tagging**: Ensure `category`, `image`, `tags`, and `publishDate` are correctly set in the frontmatter.
5.  **Verification**: Confirm the post appears correctly in the grid and maintains the "One-Screen View" balance.

---
*Last Updated: 2026-05-08 by Antigravity*

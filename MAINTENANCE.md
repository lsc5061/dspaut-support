# DSPAUT Documentation Portal Maintenance Guide

This document outlines the procedures and rules for maintaining the multi-language (KO/EN) documentation and blog portal.

## 1. Directory Structure Rules

Strictly follow the directory-based language separation to ensure routing works correctly.

### Product Manuals
- **Korean**: `src/content/manuals/ko/`
- **English**: `src/content/manuals/en/`
- **Note**: The folder structure inside `ko/` and `en/` (e.g., `equipment_manual/`, `software_manual/`) must be identical.

### Technical Blog
- **Korean**: `src/content/blog/ko/`
- **English**: `src/content/blog/en/`
- **Note**: Use the same filename for both versions (e.g., `paut-defect-identification.md`).

---

## 2. Content Update Workflow

### Updating Existing Manuals
1.  **Update Source**: Modify the original files in the central vault.
2.  **Run Sync**: Run `node sync-manuals.mjs`. This will update the `src/content/manuals/ko/` directory.
3.  **Manual Translation**: If the Korean manual has significant changes, update the corresponding English file in `src/content/manuals/en/` manually.

### Adding a New Blog Post
1.  **KO First**: Create `src/content/blog/ko/new-post.md`.
2.  **EN Second**: Create `src/content/blog/en/new-post.md` with translated frontmatter and content.
3.  **Image**: Place images in `public/images/blog/ko/` (recommended to use a shared path unless text is embedded in the image).

---

## 3. Maintenance Scripts

### `sync-manuals.mjs`
This script synchronizes manuals from the master vault to the website.
- **Protection**: The script is configured to **only overwrite `ko/`** folders and **skip/protect `en/`** folders to prevent losing translation work.
- **Run Command**: `node sync-manuals.mjs`

---

## 4. Image Management

To maintain a clean repository:
- **Shared Assets**: Use `public/images/blog/ko/` for images that don't need translation.
- **Localized Assets**: If an image contains Korean text, create an English version and place it in a corresponding `en/` image folder if necessary.
- **Standard**: Always use absolute paths in Markdown (e.g., `/images/blog/ko/image.png`).

---

## 5. Adding New Categories or Tags

If you add a new category (e.g., "Event"):
1.  **Update KO Index**: `src/pages/ko/blog/index.astro` -> Add to `categories` array.
2.  **Update EN Index**: `src/pages/en/blog/index.astro` -> Add to `categories` array (use English label).

---

## 6. Common Troubleshooting

### "My English post is not showing up"
- Check if the file is in `src/content/blog/en/`.
- Verify the ID starts with `en/`.
- Ensure the `publishDate` is not in the future (Astro might filter it).

### "Filtering is broken"
- Ensure `src/pages/[lang]/blog/index.astro` uses `.filter(post => post.id.startsWith(lang + '/'))`.
- Do not use `.includes(lang)` as it may capture files from other languages that happen to have those letters in their name.

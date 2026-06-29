import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://support.dspaut.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: replace with your real domain (or workers.dev URL) — used for og:image and canonical URLs
  site: 'https://sidecar-web.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // ship one self-contained HTML file per page
    inlineStylesheets: 'always',
  },
});

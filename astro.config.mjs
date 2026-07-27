import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // ship one self-contained HTML file per page
    inlineStylesheets: 'always',
  },
});

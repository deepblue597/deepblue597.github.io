import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://deepblue597.org',
  vite: {
    plugins: [tailwindcss()],
  },
});

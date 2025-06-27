import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [tailwind()],
  outDir: 'docs',

  // Update this to '/your-repo-name/' if deploying to GitHub Pages
  base: '/Brandon-Lightbody-Pf',

  vite: {
    plugins: [tailwindcss()]
  }
});
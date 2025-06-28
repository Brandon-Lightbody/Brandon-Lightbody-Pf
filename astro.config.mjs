import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  outDir: 'docs',

  // Update this to '/your-repo-name/' if deploying to GitHub Pages
  base: '/Brandon-Lightbody-Pf',

  vite: {
    plugins: [tailwind()]
  }
});
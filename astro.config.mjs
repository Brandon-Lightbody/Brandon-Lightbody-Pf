import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: '/Brandon-Lightbody-Pf/',
  outDir: 'docs',
  integrations: [tailwind()],
});
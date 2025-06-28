import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: '/Brandon-Lightbody-Pf/Docs/',
  outDir: 'docs',
  integrations: [tailwind()],
});
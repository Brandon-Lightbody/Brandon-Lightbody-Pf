import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  outDir: 'docs',
  integrations: [tailwind()],
  base: '/Brandon-Lightbody-Pf/',
});
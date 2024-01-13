import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://loicginoux.com',
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});
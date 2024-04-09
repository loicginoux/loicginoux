import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://loicginoux.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: "hybrid",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      fr: "en"
    }
  }
});
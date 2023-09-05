import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // sitemap
  site: "https://myndi.dev",

  image: {
    service: squooshImageService(),
  },

  integrations: [
    // sitemap
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
  },
});
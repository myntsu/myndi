import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
   },

  // sitemap
  site: "https://myndi.dev",

  integrations: [
    // sitemap
    sitemap(),
    // image
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
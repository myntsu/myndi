import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // sitemap
  site: "https://astro-blog-custom.netlify.app/",
 
  integrations: [
    // sitemap js
    sitemap(),
    // images js
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],

});

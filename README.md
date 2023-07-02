# 🚀 Astro Blog
> Utility sites, personal thoughts, and visions

### Work in Progress

This blog is a work in progress.

### 🔒 Dependencies

* [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/)
* [Sharp](https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional)
* [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
* [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)

#### Astro Image & Sharp quick setup
*Please refer to the documentation for a more in depth explanation*

**Install**
```
npm install @astrojs/image

and

npm install sharp
```

**Update astro.config.***
```
import image from '@astrojs/image';
```

**Add to astro.config.***
```
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
```

#### Astro Sitemap quick setup
*Please refer to the documentation for a more in depth explanation*

**Install**
```
npm install @astrojs/sitemap
```

**Add to astro.config.***
```
import sitemap from '@astrojs/sitemap';
```

**Update astro.config.***
```
export default defineConfig({
  site: "https://<YOUR SITE>",
 
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],

});
```

**Add to <head>**
```
<link rel="sitemap" href="/sitemap-index.xml" />
```

**Add to robots.txt**
```
    Sitemap: https://<YOUR SITE>/sitemap-index.xml
```

#### Astro Icon quick setup
*Please refer to the documentation for a more in depth explanation*

### 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - For the amazing tutorial to create an Astro Blog
 - **Kevin Powell** - for helping me realize
 - **Zakum** - for helping me fixing the navbar layout not sticking properly

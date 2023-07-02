# 🚀 Astro Blog
> Utility sites, personal thoughts, and visions

### Work in Progress

This website is a work in progress.

### 🔒 Dependencies

* [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/)
* [Sharp](https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional)
* [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
* [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)

### 🛠 Installations

🛑 You're only required to install if you cloned/forked this repository 🛑

#### Astro Image & Sharp quick setup
*Please refer to the documentation for a more in depth explanation*

**Install**
```ts
npm install @astrojs/image
```

```ts
npm install sharp
```

**Update astro.config.***
```ts
import image from '@astrojs/image';
```

**Add to astro.config.***
```ts
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
```ts
npm install @astrojs/sitemap
```

**Add to astro.config.***
```ts
import sitemap from '@astrojs/sitemap';
```

**Update astro.config.***
```ts
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

**Add to \<head\>**
```ts
<link rel="sitemap" href="/sitemap-index.xml" />
```

**Add to robots.txt**
```ts
Sitemap: https://<YOUR SITE>/sitemap-index.xml
```

#### Astro Icon quick setup
*Please refer to the documentation for a more in depth explanation*

### 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - For the amazing tutorial to create an Astro Blog
 - **Kevin Powell** - for helping me realize
 - **Zakum** - for helping me fixing the navbar layout not sticking properly

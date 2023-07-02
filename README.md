# 🚀 Astro Blog
> Utility sites, personal thoughts, and visions

### Work in Progress

This blog is a work in progress.

### Dependencies

[Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/)

Install:
```
npm install @astrojs/image
```

Add to your astro.config.*
```
import image from '@astrojs/image';

integrations: [image()],
```

Then install:
```
npm install sharp
```

Update your astro.config.*
```
image({
    serviceEntryPoint: '@astrojs/image/sharp',
}),
```

Update your env.d.ts
```
<reference types="@astrojs/image/client" />
```

[Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
[Astro Icon](https://github.com/natemoo-re/astro-icon#readme)

### 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - For the amazing tutorial to create an Astro Blog
 - **Kevin Powell** - for helping me realize
 - **Zakum** - for helping me fixing the navbar layout not sticking properly

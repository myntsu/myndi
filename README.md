# 🚀 Astro Blog
> Utility sites, personal thoughts, and visions

### Work in Progress

This website is a work in progress.

### 📚 Project Structure

```
/
├── public/
│   ├── fonts/
|   |   └── atkinson-hyperlegible
│   ├── images/
│   ├── rss/
|   |   └── styles.xsl
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── simple/
|   |   |   ├── AuthorLinkAndDate.astro
|   |   |   ├── CardsContainer.astro
|   |   |   └── SocialMedia.astro
|   |   ├── Footer.astro
|   |   ├── Nav.astro
|   |   ├── Pagination.astro
|   |   ├── PostCard.astro
|   |   ├── PostHeader.astro
|   |   └── RelatedPosts.astro
│   ├── layouts/
|   |   ├── BlogPostLayout.astro
|   |   ├── MainHead.astro
|   |   └── MainLayout.astro
│   ├── pages/
|   |   ├── author/
|   |   ├── blog/
|   |   ├── category/
|   |   ├── 404.astro
|   |   ├── about.astro
|   |   ├── index.astro
|   |   └── rss.xml.js
│   ├── scripts/
|   |   ├── copyright.js
|   |   ├── nava.js
|   |   ├── postcard.js
|   |   ├── scrollspy.js
|   |   └── utils.js
│   ├── env.d.ts
│   ├── .gitignore
│   ├── astro.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   └── READ.ME
└── ts.config.json
```

### 🔒 Dependencies

* [SaSS and SCSS](https://docs.astro.build/en/guides/styling/#sass-and-scss)
* [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/)
* [Sharp](https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional)
* [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
* [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)
* [Astro RSS](https://docs.astro.build/en/guides/rss/)

### 🛠 Installations

🛑 Warning: Do only the installations and skip the rest if you forked/cloned this repository 🛑  
*Please refer to the documentation for a more in depth explanation*

#### SaSS and SCSS quick setup
---

**Install**
```bash
npm install sass
```

**Usage**
```astro
<style lang="scss">
```
  

#### Astro Image & Sharp quick setup
---

**Install**
```bash
npm install @astrojs/image
```

```bash
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
---

**Install**
```bash
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
---

**Install**
```bash
npm i astro-icon
```

**Usage**
```astro
---
import { Icon } from 'astro-icon'
---

<!-- Automatically fetches and inlines Material Design Icon's "account" SVG -->
<Icon pack="mdi" name="account" />

<!-- Equivalent shorthand -->
<Icon name="mdi:account" />
```

*Note: to obtain the icons visit [Icônes](https://icones.js.org/)*

  
### Astro RSS quick steup
---

**Install**
```bash
npm install @astrojs/rss
```

**Create at the root of /pages**
```
rss.xml.js
```

**Add to rss.xml.js**
```ts
import rss from '@astrojs/rss';

import { formatBlogPosts } from "../scripts/utils"

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const get = () => rss({
  stylesheet: '/rss/styles.xsl',
  title: 'My Astro Blog',
  description: 'A humble Astronaut’s guide to the stars',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `
      <author>${post.frontmatter.author}</author>
    `
  }))
});
```

**Create a styles.xsl files at /public/rss**
```css
/* Here you add your XSL styles */
/* If you don't have any, grab the ones from this repository */
```
  

### 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - For the amazing tutorial to create an Astro Blog
 - **Kevin Powell** - for helping me realize it wasn't using the default responsive mode from browsers
 - **Zakum** - for helping me fixing the navbar layout not sticking properly

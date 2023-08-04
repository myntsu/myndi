# 🚀 Astro Portfolio & Blog
> Portfolio & blog template, feel free to get your copy (～￣▽￣)～

## 🚩 Getting started

**Are you lost or don't know where to start? Take a look at this simple guide!**

| Landmarks                                 | Explanation                                                 |
| :-----------------------------------------| :---------------------------------------------------------- |
| [Features](#-features)                    | All the features available in this project                  |
| [Project Structure](#-project-structure)  | List of folder within the project                           |
| [Setup](#-setup)                          | How to get started with if you want to use this repository  |
| [Credits](#-credits)                      | A special thanks to the people who made this possible       |

## 🏆 Features

✅ Vanguardist layout  
✅ Simple colors, intuitive design  
✅ Responsive  
✅ Mobile Friendly  
✅ Accessible, hyperlegible font  
✅ Type-safe Markdown  
✅ Super fast loading  
✅ Draft posts, pagination, related posts, categories, author  
✅ Sitemap & RSS  
✅ Mostly best practices  
✅ Customizable  
❌ Fuzzy search  
❌ Boring portfolio/blog

## 🗼 Ligthouse

![Lighthouse](https://pagespeed.web.dev/analysis/https-myndi-dev/q7q4is0aqm?form_factor=mobile)
https://pagespeed.web.dev/analysis/https-myndi-dev/q7q4is0aqm?form_factor=mobile

## 📚 Project Structure

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

## 💻 How to get started?

1. **Astro template**

2. **Clone/fork the repository**

3. **Do it yourself** - *simply start a new empty Astro project, and follow the steps below if you want to have the same integrations*

## 1️⃣ Astro template

**Run this command and let the magic happen**

```bash
npm create astro@latest -- --template Myntsu/astro-blog
# or
pnpm create astro@latest --template Myntsu/astro-blog
```

## 2️⃣ Clone/fork the repository

**Clone or fork the repository**

```bash
git clone https://github.com/Myntsu/astro-blog
```

**Change the directory**

```bash
cd blog-astro
```

**Install the dependencies**

```bash
npm install
```

## 3️⃣ Do it yourself

## 🔒 Dependencies

* [SaSS and SCSS](https://docs.astro.build/en/guides/styling/#sass-and-scss)
* [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/)
* [Sharp](https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional)
* [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
* [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)
* [Astro RSS](https://docs.astro.build/en/guides/rss/)

## 🛠 Installations
🛑 *Please refer to the documentation for a more in depth explanation* 🛑  

### SaSS and SCSS quick setup

  **Install**
  ```bash
  npm install sass
  ```

  **Usage**
  ```astro
  <style lang="scss">
  ```
  

### Astro Image & Sharp quick setup

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
  
### Astro Sitemap quick setup

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
  
### Astro Icon quick setup

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
  
### Astro RSS quick setup

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
  
## 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - for the amazing tutorial to create an Astro Blog
 - **Kevin Powell** - for helping me realize it wasn't using the default responsive mode from browsers
 - **Zakum** - for helping me fixing the navbar layout not sticking properly
 - **ChatGPT** - for the really good insights on parts of my code (it really helped me here and there)

## 📄 License

Apache-2.0 license

---

Made by [Myndi](https://github.com/Myntsu) - Enjoy 💙
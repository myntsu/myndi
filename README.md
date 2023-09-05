# 🚀 Astro Portfolio & Blog
> Portfolio & blog template, sit down and order yours for free (～￣▽￣)～

Hey there, my nickname is **Myndi**. I'm a **front-end** developer.  
Passionate about designing, wanting to give back to people starting on this journey 🥰

This project is a **highly costumizable** Portfolio & Blog.

## 🚩 Getting started

**Are you lost or don't know where to start? Take a look at this simple guide!**

1. [Deploy](#-setup) your project 😎

2. [Update](#-documentation) the website to your fit 😤

3. Delete this `.md` and make your own to sail 🙌

| Landmarks                                 | Explanation                                         |
| :-----------------------------------------| :-------------------------------------------------- |
| [Features](#-features)                    | What the project has to offer                       |
| [Metrics](#-lighthouse)                   | Lighthouse statistics for most of the views         |
| [Structure](#-project-structure)          | List of the folders you will find here              |
| [Setup](#-setup)                          | How to get started to get your own site             |
| [Documentation](#-setup)                  | Where to look to start editing it                   |
| [Learn](#-setup)                          | Want to know more? Check this curated list          |
| [Credits](#-credits)                      | A special thanks to everyone who contributed        |

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
✅ Light/Dark mode  
❌ Fuzzy search  
❌ Boring portfolio/blog

## 🌇 Ligthouse

![https://pagespeed.web.dev/analysis/https-myndi-dev/d9he6w1gkn?form_factor=mobile](https://raw.githubusercontent.com/brayandiazc/brayandiazc.com/main/AstroPaper-lighthouse-score.svg)

## 📚 Project Structure

This project has the following folder structure:

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
|   |   ├── about/
|   |   |   ├── AboutMe.astro
|   |   |   ├── Hobbies.astro
|   |   |   ├── Projects.astro
|   |   |   └── Technologies.astro
|   |   ├── utility/
|   |   |   ├── AuthorLinkAndDate.astro
|   |   |   ├── BackgroundNoise.astro
|   |   |   ├── CardsContainer.astro
|   |   |   ├── Link.astro
|   |   |   └── SocialMedia.astro
|   |   ├── CategoryCloud.astro
|   |   ├── Footer.astro
|   |   ├── Nav.astro
|   |   ├── Pagination.astro
|   |   ├── PostCard.astro
|   |   ├── PostHeader.astro
|   |   ├── RelatedPosts.astro
|   |   └── SEO.astro
│   ├── css/
|   |   ├── blogpost.scss
|   |   └── global.scss
│   ├── data/
|   |   └── siteData.json
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
|   |   ├── jsonLD.js
|   |   ├── nava.js
|   |   ├── postcard.js
|   |   ├── projects.js
|   |   ├── scrollspy.js
|   |   ├── technologies.js
|   |   ├── themechange.js
|   |   └── utils.js
|   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── config.js
├── LICENSE
├── package-lock.json
├── package.json
└── READ.ME
└── ts.config.json
```

Astro renders `.astro`, `.md` or `.mdx` files inside `src/pages/` as a regular ``.html`` page.

All the statics assets, like fonts, images, etc., must be placed inside `public/`.

## 💻 How to get started?

Pick your poison 😎

1. **[Astro template](#-astro-template)**

2. **[Clone or fork](#-clone-or-fork-the-repository) the repository** - *forks helps to boost my metrics in GitHub*

3. **[Do it yourself](#-do-it-yourself)** - *simply start a new empty Astro project, and follow the steps below if you want to have the same integrations*

## 1️⃣ Astro template

**Run this command locally and let the magic happen**

```bash
# npm 6.x
npm create astro@latest --template Myntsu/myndi

# npm 7+
npm create astro@latest -- --template Myntsu/myndi

#pnpm
pnpm create astro@latest --template Myntsu/myndi

# yarn
yarn create astro --template Myntsu/myndi
```

## 2️⃣ Clone or fork the repository

**Clone or fork the repository**

```bash
git clone https://github.com/Myntsu/myndi
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

## 📖 Documentation

The main files will be `astro.config.mjs` and `config.js` inside your `root` folder, the rest would be inside your `/src/`.

🔵 **`astro.config.mjs` to edit your site's URL.**
```js
site: "https://yoursite.com",
```

🔵 **`config.mjs` to edit various details about the site.**
```js
// links
{ label: "About me", href: "#About-Me" }

// socials
{ platform: "facebook", link: "www.facebook.com", handle: "User" }
```

🔵 **`/src/pages/blog/` to create a new blog post.**  
*Note: each post should have the name of post-X.md*
```js
---
layout: "../../layouts/BlogPostLayout.astro"
title: A title
date: 01January2023
author: Author
image: {
    src: "https//your-image.com",
    alt: "Your image",
}
description: Description.
draft: true/false
category: Category
---

Blog here.
```

🔵 **`/src/pages/category/[category].astro` to add a new category to your blog posts.**
```js
{
    params: { category: slugify("Category") },
    props: { name: "Category" },
}
```

🔵 **`/src/data/siteData.json` to set the default's meta data for each post.**
```json
{
  "title": "My Astro Page",
  "description": "My musings about the Astro framework",
  "image": {
    "src": "/images/image-default.jpg",
    "alt": "My Astro Page"
  }
}
```

🔵 **`/src/components/Seo.astro` and `/src/pages/rss.xml.js` to edit the social media embeds.**
```jsx
// /src/components/Seo.astro
<meta property="og:site_name" content="My Astro Page" />

// /src/pages/rss.xml.js
title: 'My Astro Page',
description: 'A humble Astronaut’s guide to the stars',
```
*Note: make sure you don't mess up with anything else in there since it's passed dynamically.*  

🔵 **`/src/css/global.scss` to edit the global variables.**
```scss
:root {
  // main tag
  --container-width: 100%;
  --container-max-width: 900px;
  --current-font-size: 1rem;
  --icon-font-size: calc(var(--current-font-size, 0.75rem) * 0.75);

  // sizing
  --rem-xs: 0.25rem;
  --rem-sm: 0.5rem;
  --rem-md: 0.75rem;
  --rem-lg: 1rem;
  --rem-xl: 1.5rem;

  // colors
  --main-color: 240 90% 80%;
  --background: 0 0% 9%;
  --background-lighter: 0 0% 11%;

  // font and link styles
  --font: 0 0% 91%;
  --font-dark: 0 0% 9%;
  --link: hsl(var(--main-color) / 0.2);

  // button an tag styles
  --button: 240 100% 65%;
  --button-font: 0 0% 100%;
  --tag: 0 60% 50%;
  --tag-font: 0 0% 100%;
}
```

🔵 **To use utility components do the following:**

- **Links**
  ```jsx
  import Link from "/components/simple/Link.astro";

  <Link href="www.site.com" target="blank" external>
    Content here
  </Link>
  ```

- **Cards container**
  ```jsx
  import CardsContainer from "/components/simple/CardsContainer.astro";

  <CardsContainer>
    Content here
  </CardsContainer>
  ```
- **Images**
  ```jsx
  // width and height are required
  import { Image } from 'astro:assets'

  <Image
    src="/images/your-image.jpg"
    alt="Image alt"
    width={150}
    height={150}
    format="webp"
    fit="cover"
    quality={100}
    aspectRatio="1:1"
    class="your-class"
  />
  ```

- **Icons**
  ```jsx
  // refer to for the icons in https://icones.js.org/
  import { Icon } from "astro-icon";

  <Icon class="your class" name="name:icon-name"/>
  ```

- **Social media links**
  ```jsx
  import SocialMedia from "/simple/SocialMedia.astro";

  <SocialMedia socials={config.socials} />
  ```

## 👀 Want to know more about Astro?

Check these amazing people (or articles)!

- [Astro Documentation](https://docs.astro.build/en/getting-started/) - the official **Astro** documentation, user friendly, somewhat **hard to follow**
- [Coding in Public](https://www.youtube.com/@CodinginPublic) - advanced Astro development, user friendly, very **easy to follow**
- [Kevin Powell](https://www.youtube.com/@KevinPowell) - introductory Astro development, very user friendly, very **easy to follow**
  
## 👑 Credits 

 - **CodingInPublic** [Youtube Channel] - for the amazing tutorial to create an Astro Blog
 - **Brayan Diaz C** - for his help reviewing this READ.ME and for some of the templates
 - **Kevin Powell** - for helping me realize it wasn't using the default responsive mode from browsers
 - **Zakum** - for helping me fixing the navbar layout not sticking properly
 - **ChatGPT** - for the really good insights on parts of my code (it really helped me here and there)

## 📄 License

Apache-2.0 license

---

Made by [Myndi](https://github.com/Myntsu) - Enjoy 💙
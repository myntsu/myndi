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
❌ Fuzzy search  
❌ Light/Dark mode  
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
npm create astro@latest --template Myntsu/astro-blog

# npm 7+
npm create astro@latest -- --template Myntsu/astro-blog

#pnpm
pnpm create astro@latest --template Myntsu/astro-blog

# yarn
yarn create astro --template Myntsu/astro-blog
```

## 2️⃣ Clone or fork the repository

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

## 📖 Documentation

The main files will be `astro.config.mjs` and `config.js` inside your `root` folder, the rest would be inside your `/src/`.

**Inside `astro.config.mjs` you can edit your site.**
```js
site: "https://yoursite.com",
```

**Inside `/src/data/siteData.json` you can edit the default meta data.**
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

**Inside `/src/components/Seo.astro` you can edit the site's name of your social media embeds.**
```html
<meta property="og:site_name" content="My Astro Page" />
```
*Note: make sure you don't mess up with anything else in there.*


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
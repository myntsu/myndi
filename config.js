export default {
    // page views to the left side in your navbar inside about
    links: [
        { label: "About me", href: "#About-Me" },
        { label: "My projects", href: "#My-projects" },
        { label: "Technologies", href: "#Technologies" },
        { label: "Hobbies", href: "#Hobbies" },
    ],
    // social links at the bottom of your navbar
    socials: [
      { platform: "mdi:discord", link: "https://discord.com/users/124421052569878528/", handle: "@myntsu" },
      { platform: "fa-brands:twitter-square", link: "https://twitter.com/myntsu", handle: "myntsu" },
      { platform: "fa-brands:github-square", link: "https://github.com/Myntsu", handle: "myntsu" },
    ],

    // list of yours projects
    // titles and description can be empty
    // Use this extension: GoFullPage - Full Page Screen Capture to capture your entire website views
    projects: [
      { title: "💼 Blogfolio", shortDescription: "Blogfolio template created with Astro", 
        src: import("/src/assets/about-me/blogfolio.png"), preview: "/images/about-me/blogfolio.png", alt: "Blogfolio website", 
        repository: "https://github.com/Myntsu/myndi", 
        liveDemo: "https://myndi.dev/" },

      { title: "💻 Cozynova", shortDescription: "Resources & tools for Nova Ragnarok", 
      src: import("/src/assets/about-me/cozynova.png"), preview: "/images/about-me/cozynova.png", alt: "Cozynova website", 
      repository: "https://github.com/Myntsu/cozynova", 
      liveDemo: "https://cozynova.online/" },

      { title: "💼 Blogfolio", shortDescription: "",
      src: import("/src/assets/about-me/cozynova.png"), preview: "/images/about-me/cozynova.png", alt: "Blogfolio website", 
      repository: "https://github.com/Myntsu/myndi", 
      liveDemo: "https://myndi.dev/" },
    ],

    // stacks for your about
    // reference https://icones.js.org/collection/mdi for the icon names
    stack: [
      {
        frontEnd: [
          { language: "HTML", name: "language-html5", percentage: 60, color: "orange" },
          { language: "CSS", name: "language-css3", percentage: 80, color: "blue" },
          { language: "Bootstrap", name: "bootstrap", percentage: 90, color: "purple" },
          { language: "Bulma", name: "bulma", percentage: 30, color: "green lighter" },
          { language: "JavaScript", name: "language-javascript", percentage: 50, color: "yellow" },
          { language: "jQuery", name: "jquery", percentage: 60, color: "yellow lighter" },
        ],
        backEnd: [
          { language: "Astro", name: "rocket-launch", percentage: 30, color: "orange" },
          { language: "Ruby", name: "ruby", percentage: 20, color: "red lighter" },
          { language: "Ruby on Rails", name: "language-ruby-on-rails", percentage: 30, color: "red" },
          { language: "SQL", name: "database", percentage: 30, color: "green" },
        ],
        devOps:[
          { language: "GitHub", name: "github", percentage: 70, color: "blue lighter" },
          { language: "Netlify", name: "cloud", percentage: 40, color: "green darker" },
        ],
        tools:[
          { language: "Git", name: "git", percentage: 50, color: "blue lighter" },
          { language: "Subsystem: WSL", name: "linux", percentage: 20, color: "blue darker" },
          { language: "Visual Studio Code", name: "application-brackets", percentage: 70, color: "blue" },
        ]
      },
    ],

    // list of your hobbies
    // for the positions use the following: 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top' | 'north' | 'northeast' | 'east' | 'southeast' | 'south' | 'southwest' | 'west' | 'northwest' | 'center'
    hobbies: [
      {title: "Watching anime girls", description: "I love watching anime girls because it's really fun", 
      img: import("/src/assets/about-me/hobbie-1.webp"), alt: "Alternative text sample", 
      position: "right top"},

      {title: "Watching anime girls", description: "I love watching anime girls because it's really fun", 
      img: import("/src/assets/about-me/hobbie-2.webp"), alt: "Alternative text sample", 
      position: "top"},

      {title: "Watching anime girls", description: "I love watching anime girls because it's really fun", 
      img: import("/src/assets/about-me/hobbie-3.webp"), alt: "Alternative text sample", 
      position: "top"},

      {title: "Watching anime girls", description: "I love watching anime girls because it's really fun", 
      img: import("/src/assets/about-me/hobbie-4.webp"), alt: "Alternative text sample", 
      position: "top"},

      {title: "Watching anime girls", description: "I love watching anime girls because it's really fun", 
      img: import("/src/assets/about-me/hobbie-5.webp"), alt: "Alternative text sample", 
      position: "top"},
    ]
  }
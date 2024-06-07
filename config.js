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
      { title: "💻 Cozynova", shortDescription: "Resources & tools for Nova Ragnarok (now closed)", 
      src: import("/src/assets/about-me/cozynova.png"), preview: "/images/about-me/cozynova.png", alt: "Cozynova website", 
      repository: "https://github.com/Myntsu/cozynova", 
      liveDemo: "https://cozynova.netlify.app/" },

      { title: "💼 Lawyer firm", shortDescription: "Personal website for a Laywer's firm",
      src: import("/src/assets/about-me/lawyer-firm.png"), preview: "/images/about-me/lawyer-firm.png", alt: "Blogfolio website", 
      repository: "https://github.com/myntsu/michel-campillay-abogado", 
      liveDemo: "https://michelcampillay.cl/" },
      { title: "📈 Action Value Calculator", shortDescription: "Action Value calculator for Honkai Star Rail", 
        src: import("/src/assets/about-me/action-value.png"), preview: "/images/about-me/action-value.png", alt: "Action Value Calculator", 
        repository: "https://github.com/myntsu/HSR-Simple-Action-Value-Calculator", 
        liveDemo: "https://hsr-av-calc.vercel.app/" },
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
      {title: "Playing video games", description: "As you might appreciate, I love videogames. From RTS, to MOBAs, from RPG to Puzzle games. My favorite saga is Command & Conquer, and childhood IP The Legend of Zelda.", 
      img: import("/src/assets/about-me/games.jpg"), alt: "Command & Conquer Logo", 
      position: "right top"},

      {title: "Programming", description: "Let's not get too ahead of ourselves. I'm not the best at programming, but my passion advocates for front-end and UX/UI. I guess this website is testimony of that.", 
      img: import("/src/assets/about-me/programming.jpg"), alt: "Alternative text sample", 
      position: "top"},

      {title: "Doing workouts", description: "Yup, as weird as it sounds, I love working out. There's a trifecta in life that I can't interchange anymore: eating, sleeping and working out.", 
      img: import("/src/assets/about-me/workout.webp"), alt: "Alternative text sample", 
      position: "top"},

      {title: "Watching anime", description: "Although I don't do it reguarly, surely a good anime could enlight my mood, such as Psycho-Pass, one of my favorites out there!", 
      img: import("/src/assets/about-me/psycho-pass.jpg"), alt: "Psycho-Pass anime", 
      position: "top"},

      {title: "Commissioning art and creating stories", description: "I simply love commissioning art and creating new stories. As you can see my character Myndi on the display, she's part of a commission, and a long tale created just for herself and my other characters.", 
      img: import("/src/assets/about-me/commissions.png"), alt: "Fictional character Myndi", 
      position: "top"},
    ]
  }
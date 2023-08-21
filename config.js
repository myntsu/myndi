export default {
    // page views to the left side in your navbar inside about
    links: [
        { label: "About me", href: "#About-Me" },
        { label: "Current projects", href: "#Current-Projects" },
        { label: "Technologies", href: "#Technologies" },
        { label: "Hobbies", href: "#Hobbies" },
    ],
    // social links at the bottom of your navbar
    socials: [
      { platform: "facebook", link: "www.facebook.com", handle: "User" },
      { platform: "instagram", link: "https://www.instagram.com/", handle: "User" },
      { platform: "youtube", link: "https://www.youtube.com/", handle: "@User" },
      { platform: "github", link: "https://github.com/", handle: "@User" },
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
  }
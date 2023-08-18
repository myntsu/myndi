// Color theme changer
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
  };
  
  // set theme when visitor returns
  const setTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });
    // fallback for no :has() support
    document.documentElement.className = activeTheme;
  };
  
  colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
      storeTheme(themeOption.id);
      // fallback for no :has() support
      document.documentElement.className = themeOption.id;
    });
  });
  
  document.DOMDocumentLoad = setTheme();
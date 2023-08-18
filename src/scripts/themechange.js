function applyPreferredTheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

applyPreferredTheme();


function toggleTheme() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
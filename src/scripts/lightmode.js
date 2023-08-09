const savedColorScheme = localStorage.getItem("colorScheme");
const toggleDarkLight = document.querySelector(".color-scheme");

if (savedColorScheme === "light") {
  document.body.classList.add("light-scheme");
  toggleDarkLight.classList.add("light");
} else {
  toggleDarkLight.classList.add("dark");
}

toggleDarkLight.addEventListener("click", () => {
  document.body.classList.toggle("light-scheme");

  if (document.body.classList.contains("light-scheme")) {
    localStorage.setItem("colorScheme", "light");
    toggleDarkLight.classList.add("light");
    toggleDarkLight.classList.remove("dark");
  } else {
    localStorage.removeItem("colorScheme");
    toggleDarkLight.classList.add("dark");
    toggleDarkLight.classList.remove("light");
  }
});

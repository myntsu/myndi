const navLinks = document.querySelectorAll("[data-link");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const transition = document.querySelector('[data-link]');
  transition.classList.add('loaded');
});

const navLinks = document.querySelectorAll("[data-link]");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});

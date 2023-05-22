document.addEventListener('DOMContentLoaded', () => {
  const transition = document.querySelectorAll('[data-link]');
  transition.forEach((element) => {
    element.classList.add('loaded');
  });
});

const navLinks = document.querySelectorAll("[data-link]");

navLinks.forEach((link) => {
  const href = link.getAttribute("href").replace(/\/$/, "");
  const pathname = window.location.pathname.replace(/\/$/, "");

  if (href === pathname) {
    link.setAttribute("aria-current", "page");
  }
});
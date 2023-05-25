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

  if (pathname.startsWith(href)) {
    link.setAttribute("aria-current", "page");
  }
});


const hamburger = document.querySelector('.hamburger');
const navPrimary = document.querySelector('#layout');

hamburger.addEventListener('click', () => {
  navPrimary.classList.toggle('open');
});
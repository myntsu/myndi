// class add to navbar to avoid layout shift
const navLinks = document.querySelectorAll("[data-link]");

document.addEventListener('DOMContentLoaded', () => {
  const transition = document.querySelectorAll('[data-link]');
  transition.forEach((element) => {
    element.classList.add('loaded');
  });
});

// set aria-current page
navLinks.forEach((link) => {
  const href = link.getAttribute("href").replace(/\/$/, "");
  const pathname = window.location.pathname.replace(/\/$/, "");

  if (pathname.startsWith(href)) {
    link.setAttribute("aria-current", "page");
  }
});

// hamburger menu open/close + aria attr
const hamburger = document.querySelector('.hamburger');
const navPrimary = document.querySelector('#layout');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', () => {
  const isOpen = navPrimary.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  navbar.setAttribute('aria-hidden', !isOpen);
});

// logic for the touchscreen navbar popup
// threshold: the higher the more pixels it needs to go through to active, when swiping
function phoneSwipe(element, callback, threshold = 20) {
  let touchStartX;
  let touchEndX;
  let touchStartY;
  let touchEndY;

  element.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, {passive: true});

  element.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;
    if (Math.abs(touchEndX - touchStartX) > threshold && Math.abs(touchEndY - touchStartY) < threshold) {
      if (touchEndX > touchStartX) {
        callback('right');
      } else if (touchEndX < touchStartX) {
        callback('left');
      }
    }
  }, {passive: true});
}


// navbar popup for phone users
phoneSwipe(navPrimary, (direction) => {
  if (direction === 'right') {
    navPrimary.classList.add('open');
  } else {
    navPrimary.classList.remove('open');
  }
}, 30, 100);
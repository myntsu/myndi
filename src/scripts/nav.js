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
const layout = document.querySelector('#layout');
const navbar = document.querySelector('#navbar');

// making objects not tabable on tablet/mobile when function is run
function navbarAccessibility(isOpen) {
  if (window.matchMedia('(max-width: 870px)').matches) {
    const navbarAnchors = navbar.querySelectorAll('a');
    navbarAnchors.forEach(element => {
      if (!isOpen) {
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('tabindex', '-1')
      } else {
        element.removeAttribute('aria-hidden');
        element.removeAttribute('tabindex');
      }
    });
  }
}

// hamburger menu toggle and aria hidden activation
hamburger.addEventListener('click', () => {
  const isOpen = layout.classList.toggle('open');
  navbarAccessibility(isOpen);
});

// disable it on load by default
navbarAccessibility(false);

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
const dialog = document.querySelector('.pop-up-container');
phoneSwipe(layout, (direction) => {
  if (!dialog.open && direction === 'right') {
    layout.classList.add('open');
  } else {
    layout.classList.remove('open');
  }
}, 30, 100);

document.addEventListener("astro:beforeload", phoneSwipe);

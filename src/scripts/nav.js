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

// making objects not tabable on tablet/mobile
function navbarAccessibility(isOpen) {
  hamburger.setAttribute('aria-expanded', isOpen);
  navbar.setAttribute('aria-hidden', !isOpen);

  if (window.matchMedia('(max-width: 870px)').matches) {
    const navbarAnchors = navbar.querySelectorAll('a');
    navbarAnchors.forEach(element => {
      if (!isOpen) {
        element.setAttribute('tabindex', '-1');
      } else {
        element.removeAttribute('tabindex');
      }
    });
  }
}

// making it active on load by default
navbarAccessibility(false);

// hamburger menu toggle + a11y
hamburger.addEventListener('click', () => {
  const isOpen = layout.classList.toggle('open');
  navbarAccessibility(isOpen);
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
phoneSwipe(layout, (direction) => {
  if (direction === 'right') {
    layout.classList.add('open');
  } else {
    layout.classList.remove('open');
  }
}, 30, 100);
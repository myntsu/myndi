// Get all the section elements
const sections = document.querySelectorAll('section[id]');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  // Loop through the sections
  sections.forEach(section => {
    // Get the section's position and height
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the section's bounds
    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      // Get the corresponding nav link
      const navLink = document.querySelector(`nav a[href="#${section.id}"]`);

      // Add the active class to the nav link
      navLink.classList.add('active');
    } else {
      // Get the corresponding nav link
      const navLink = document.querySelector(`nav a[href="#${section.id}"]`);

      // Remove the active class from the nav link
      navLink.classList.remove('active');
    }
  });
});
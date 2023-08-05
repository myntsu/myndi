
// adding titles to headers and description
const h2Elements = document.querySelectorAll('h2');
h2Elements.forEach((h2Element) => {
  const h2Text = h2Element.innerText;
  h2Element.setAttribute('title', h2Text);
});

const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach((descriptionElement) => {
  const descriptionText = descriptionElement.innerText;
  descriptionElement.setAttribute('title', descriptionText);
});

// cards highlight on mouseover
const updateCursor = ({ x, y }) => {
  if (window.innerWidth >= 870) {
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--y", y);
  }
};

document.body.addEventListener("pointermove", updateCursor);



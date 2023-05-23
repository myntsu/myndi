
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
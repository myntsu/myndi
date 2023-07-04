
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
document.getElementById("cards-container").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
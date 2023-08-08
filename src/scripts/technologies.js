import config from "../../config.js";

const stack = config.stack;

const stackProperties = document.querySelector(".stack");
const fill = document.querySelectorAll(".fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fill.forEach((fillChild, index) => {
          const percentage = stack[index].percentage;
          fillChild.style.width = "0%";
          fillChild.style.transition = "width 2s";
          setTimeout(() => {
            fillChild.style.width = `${percentage}%`;
          }, 100);
        });
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(stackProperties);
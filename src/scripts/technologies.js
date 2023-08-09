import config from "../../config.js";

const stack = config.stack[0];
const { frontEnd, backEnd, devOps, tools } = stack;

const stackContainer = document.querySelector(".stack");
const fill = document.querySelectorAll(".fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < fill.length; i++) {
          let percentage;
          if (i < frontEnd.length) {
            percentage = frontEnd[i].percentage;
          } else if (i < frontEnd.length + backEnd.length) {
            percentage = backEnd[i - frontEnd.length].percentage;
          } else if (i < frontEnd.length + backEnd.length + devOps.length) {
            percentage = devOps[i - frontEnd.length - backEnd.length].percentage;
          } else {
            percentage = tools[i - frontEnd.length - backEnd.length - devOps.length].percentage;
          }
          fill[i].style.width = "0%";
          fill[i].style.transition = "width 2s";
          setTimeout(() => {
            fill[i].style.width = `${percentage}%`;
          }, 100);
        }
        observer.unobserve(stackContainer);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(stackContainer);


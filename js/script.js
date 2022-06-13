`use strict`;
import { rotateMain, rotateOuter } from "./rotateText.js";
import { rotate3D } from "./rotateItem3D.js";

window.onload = function () {
  rotateMain(100);
  rotateOuter(10);

  const cards = document.querySelectorAll(".picture-link");
  for (let item of cards) {
    rotate3D(item);
  }

  //  use Typewriter library

  const itemArray = document.querySelectorAll(".planet-link");
  const textArray = [];
  for (let item of itemArray) {
    textArray.push(item.textContent);
    new Typewriter(item, 9, 8000).render();
  }

  const planets = document.querySelectorAll(".planet-item");

  planets.forEach((planet, index) => {
    planet.addEventListener("mouseover", () => {
      if (textArray[index] != planet.querySelector("a").textContent) return;
      new Typewriter(planet.querySelector("a"), 9, 10).render();
    });
  });

  // wait for load main section

  let promise = new Promise((resolve, reject) => {
    const lastLine = document.querySelector(".x-axis-clone");
    lastLine.addEventListener("animationend", () => resolve("Animation end"));
  });
  promise
    .then((value) => {
      document.querySelector("body").classList.remove("--scroll_disable");
      document.querySelector(".scrollbar").classList.add("--scroll-active");
      console.log(value);
    })
    .then(() => {
      const scrollbar = document.querySelector(".--scroll-active");
      const windowHeight =
        document.querySelector(".section-landing").clientHeight;
      document.addEventListener("scroll", () => {
        scrollbar.style.height = `${(window.scrollY * 100) / windowHeight}px`;
      });
    });

  // asteroid control

  // const asteroid = new Element(document.querySelector(".asteroid"), true);
  // asteroid.init();
};

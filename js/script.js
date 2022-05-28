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

  // asteroid control

  function asteroidControl() {
    const asteroid = document.querySelector(".asteroid");

    console.log(asteroid.style);
    requestAnimationFrame(asteroidControl);
  }
};

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

  //  init Typewriter library
  const textArray = document.querySelectorAll(".planet-link");

  for (let item of textArray) {
    new Typewriter(item, 9, 8000).render();
  }

  const planets = document.querySelectorAll(".planet-item");

  for (let planet of planets) {
    planet.addEventListener("mouseover", () => {
      new Typewriter(planet.querySelector("a"), 9, 10).render();
    });
  }

  // asteroid control

  function asteroidControl() {
    const asteroid = document.querySelector(".asteroid");

    console.log(asteroid.style);
    requestAnimationFrame(asteroidControl);
  }
};

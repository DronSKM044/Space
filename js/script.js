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
    const circle = document.querySelector(".circle-1");
    circle.addEventListener("animationend", () => resolve("Animation end"));
  });

  promise
    .then((value) => {
      //scroll  active
      document.querySelector("body").classList.remove("--scroll_disable");
      document.querySelector(".scrollbar-wrapper").style.opacity = 1;
      document.querySelector(".scrollbar").classList.add("--scroll-active");
      let scrollDown = document.querySelector(".scroll_down");
      scrollDown.classList.remove("visually-hidden");
      scrollDown.style.opacity = 1;

      // header active
      let header = document.querySelector(".header");
      header.classList.add("active");

      console.log(value);
    })
    .then(() => {
      //  scrollbar handler
      const scrollbar = document.querySelector(".--scroll-active");
      const windowHeight =
        document.querySelector(".section-landing").clientHeight;
      const scrollbarPin = document.querySelector(".scrollbar_pin");

      scrollbarPin.addEventListener("mousedown", scrollBarHandler);

      scrollbarPin.addEventListener("mouseup", () => {});

      function scrollBarHandler() {
        document.addEventListener("mousemove", (e) => {
          scrollbarPin.style.top = `${e.clientY}px`;
        });
      }

      document.addEventListener("scroll", () => {
        scrollbar.style.height = `${(window.scrollY * 88) / windowHeight}px`;
        scrollbarPin.style.top = scrollbar.style.height;
        scrollbar.style.backgroundColor = `rgba(${
          ((window.scrollY * 100) / windowHeight) * 0.5
        },${((window.scrollY * 100) / windowHeight) * 0.1},${
          ((window.scrollY * 100) / windowHeight) * 2
        },${0.8})`;
      });
    });

  // header handler
  let header = document.querySelector(".header");
  let headerBtn = document.querySelector(".header_btn");
  let btnArrow = document.querySelectorAll(".btn_arrow");
  headerBtn.addEventListener("click", () => {
    header.classList.toggle("show");
    btnArrow.forEach((item) => item.classList.toggle("close"));
  });
  // asteroid control

  // const asteroid = new Element(document.querySelector(".asteroid"), true);
  // asteroid.init();
};

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
};

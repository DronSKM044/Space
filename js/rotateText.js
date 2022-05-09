`use strict`;

export function rotateMain(value) {
  const inner = document.querySelectorAll(".landing-signature__inner");
  let deg = 0;

  for (let item of inner) {
    item.style.transform = `rotate(${deg}deg)`;
    deg += Math.sin(value / 200) + Math.cos(value * 0.01);
  }
  requestAnimationFrame(rotateMain);
  return value;
}

export function rotateOuter(value) {
  const content = document.querySelectorAll(".signature");
  let deg = 0;

  for (let item of content) {
    item.style.transform = `rotate(${deg}deg)`;
    deg += value;
  }
}

`use strict`;

export function rotateMain(value) {
  const inner = document.querySelectorAll(".landing-signature__inner");
  let deg = 0;

  for (let item of inner) {
    value = value / 5;
    deg += Math.sin(value / 1000) + value / 100;
    deg += 50;
    item.style.transform = `rotate(${deg}deg)`;
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

`use strict`;

export function rotate3D(el) {
  let halfHeight = null;
  let startY;
  if (el !== undefined) {
    el.addEventListener("mousemove", (e) => {
      halfHeight = el.offsetHeight / 2;
      el.style.transform = `rotateX(${
        (e.offsetY - halfHeight) / 30
      }deg) rotateY(${(e.offsetX - halfHeight) / 30}deg) `;
    });
    el.addEventListener("mouseout", () => {
      el.style.transform = `rotate(0)`;
    });
  } else console.log("need element");
}

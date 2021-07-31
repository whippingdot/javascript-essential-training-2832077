/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const cells = document.querySelector(".cell");
const cell2 = document.querySelector(".cell02");
const cell19 = document.querySelector(".cell19");
const cell21 = document.querySelector(".cell21");

grid.addEventListener("mouseenter", () => {
  grid.style.outline = "10px solid red";
});

grid.addEventListener("mouseleave", () => {
  grid.style.outline = "";
});

grid.addEventListener("mousemove", () => {
  grid.style.cursor = "pointer";
});

cell2.addEventListener("click", () => {
  body.classList.toggle("white");
});

cell19.addEventListener("click", () => {
  body.classList.toggle("red");
});

cell21.addEventListener("click", () => {
  body.classList.toggle("blue");
});

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyL") {
    body.classList.toggle("black");
  }
});

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyP") {
    grid.classList.toggle("aqua");
    cells.classList.toggle("white");
  }
});

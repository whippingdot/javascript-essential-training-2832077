/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pig", "headlamp", "pen"];

const body = document.querySelector("body");
const unList = document.createElement("ul");

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  unList.insertAdjacentElement("beforeend", item);
});

body.innerHTML = unList;

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);

console.log(backpackContents);

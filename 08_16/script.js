/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const backpacks = backpackObjectArray.map((item) => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", item.id);
  let content = `
    <figure class="backpack__image">
      <img src=${item.image} alt="" />
    </figure>
    <h1 class="backpack__name">${item.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        item.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        item.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${item.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        item.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        item.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        item.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        item.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;
  newArticle.innerHTML = content;
  return newArticle;
});

const main = document.querySelector(".maincontent");

backpacks.forEach((item) => {
  main.append(item);
});

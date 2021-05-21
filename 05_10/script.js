/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu.
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  <figure class="backpack__image">
    <img src=${everydayPack.image} alt="" />
  </figure>
  <h1 class="backpack__name">Everyday Backpack</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      everydayPack.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      everydayPack.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      everydayPack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      everydayPack.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      everydayPack.strapLength.right
    } inches</span></li>
    <li class="packprop backpack__lid">Lid status:<span> ${
      everydayPack.lidOpen
    }</span></li>
  </ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

// My Code

const navBar = `
  <ul class="sitenavbar">
    <li><a href=#title>Home</a></li>
    <li><a href=#slogan>Slogan</a></a></li>
    <li><a href=#description>Description</a></li>
    <li><a href=#everyday>The Everyday Backpack</a></li>
    <li><a href=#footer>Footer</a></li>
  </ul>
`;

const header = document.querySelector(".siteheader");

const newNavBar = document.createElement("nav");
const navList = document.createElement("ul");
navList.classList.add("sitenavbar");
navList.innerHTML = navBar;
newNavBar.append(navList);

header.insertAdjacentElement("afterend", newNavBar);

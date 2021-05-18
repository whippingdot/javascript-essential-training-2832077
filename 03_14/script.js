/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const percyJackson1 = new Book(
  "The Lightning Thief",
  "Rick Riordan",
  "Fantasy",
  377,
  false,
  3,
  true,
  true
);

percyJackson1.toggleFinished();

const heroesOfOlympus1 = new Book(
  "The Lost Hero",
  "Rick Riordan",
  "Fantasy",
  557,
  false,
  3,
  true,
  true
);

heroesOfOlympus1.toggleFinished();

const heroesOfOlympus2 = new Book(
  "The Son of Neptune",
  "Rick Riordan",
  "Fantasy",
  544,
  false,
  3,
  true,
  true
);

const magnusChase1 = new Book(
  "The Sword of Summer",
  "Rick Riordan",
  "Fantasy",
  513,
  false,
  4,
  true,
  true
);

magnusChase1.toggleFinished();

const magnusChase2 = new Book(
  "The Hammer of Thor",
  "Rick Riordan",
  "Fantasy",
  528,
  false,
  5,
  true,
  true
);

magnusChase2.toggleFinished();

const magnusChase3 = new Book(
  "The Ship of the Dead",
  "Rick Riordan",
  "Fantasy",
  432,
  false,
  3,
  true,
  true
);

console.log("The first book of Percy Jackson:", percyJackson1);
console.log("The first book of The Heroes of Olympus:", heroesOfOlympus1);
console.log("The second book of The Heroes of Olympus:", heroesOfOlympus2);
console.log("The first book of Magnus Chase:", magnusChase1);
console.log("The second book of Magnus Chase:", magnusChase2);
console.log("The third book of Magnus Chase:", magnusChase3);

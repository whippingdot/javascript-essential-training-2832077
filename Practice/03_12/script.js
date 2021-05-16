/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Room from "./Room.js";

const myRoom = new Room(
  "bedroom",
  true,
  true,
  "three cabinets",
  false,
  true,
  "100ml",
  "medium",
  "studying",
  true
);

console.log("The myRoom object:", myRoom);

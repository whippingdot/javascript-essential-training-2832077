/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let deskItems = [
  "iPod",
  "mouse",
  "keyboard",
  "laptop",
  "books",
  "calculator",
  "ipocras",
  "pencils",
];
console.log("Original array:", deskItems);

// deskItems.pop();
// console.log("After removing the first item:", deskItems);

// deskItems.unshift(deskItems.pop());
// console.log("After moving the last item to the start:", deskItems);

// deskItems.sort();
// console.log("After sorting the array:", deskItems);

// let calculator = deskItems.find(function (item) {
//   if (item === "calculator") {
//     return item;
//   }
// });
// console.log("Found item:", calculator);

deskItems.find(function (item, index, array) {
  if (item == "calculator") {
    array.splice(index, 1);
  }
});
console.log("Deleting the calculator from the array:", deskItems);

/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// NORMAL FUNCTION DECLARATION:

// function createList() {
//   console.log("Before editing the document");

//   const main = document.querySelector("main");
//   const newUL = document.createElement("ul");

//   newUL.innerHTML = `
//   <li>Contact Me</li>
//   <li>Talk To Me</li>
//   <li>Chat With Me</li>
//   `;

//   main.append(newUL);

//   console.log("After editing the document");
// }

// FUNCTION EXPRESSION DECLARATION:

// const createList = function () {
//   console.log("Before editing the document");

//   const main = document.querySelector("main");
//   const newUL = document.createElement("ul");

//   newUL.innerHTML = `
//   <li>Contact Me Expression</li>
//   <li>Talk To Me Expression</li>
//   <li>Chat With Me Expression</li>
//   `;

//   main.append(newUL);

//   console.log("After editing the document");
// };

// ARROW FUNCTION DECLARATION:

// const createList = () => {
//   console.log("Before editing the document");

//   const main = document.querySelector("main");
//   const newUL = document.createElement("ul");

//   newUL.innerHTML = `
//   <li>Contact Me Expression</li>
//   <li>Talk To Me Expression</li>
//   <li>Chat With Me Expression</li>
//   `;

//   main.append(newUL);

//   console.log("After editing the document");
// };

createList();

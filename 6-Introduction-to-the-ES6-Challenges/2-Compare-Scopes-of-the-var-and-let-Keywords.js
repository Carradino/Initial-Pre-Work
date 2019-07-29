/* The let keyword is local to whichever function, expression or block it is in.
It's not global like the var keyword. */
function checkScope() {
"use strict";
    let i = "function scope";
  if (true) {
     let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

console.log(checkScope());

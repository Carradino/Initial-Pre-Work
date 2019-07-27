// The parseInt() function takes a second argument called radix, an integer between 2 and 36.
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));

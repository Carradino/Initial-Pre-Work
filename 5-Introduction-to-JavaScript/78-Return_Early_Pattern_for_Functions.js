// return exits a function without performing the rest of the code. 
// Setup
function abTest(a, b) {
  // Only change code below this line
if ((a < 0) || (b < 0)){
  return undefined;
}
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(-3,4));

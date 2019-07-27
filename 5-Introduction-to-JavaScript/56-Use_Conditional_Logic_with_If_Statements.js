/* If is used to set a boolean conditonal that if (condition) = true, the code
is exexcuted, else the code is not executed if (condition) = false */
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue === true) {
      return "Yes, that was true";
   }
    return "No, that was false";




  // Only change code above this line.

}

// Change this value to test
console.log(trueOrFalse(false));

/* The second way to access an object property is with bracket notation.
theObject["property name"]; If there is a space in the property name, then
bracket notation is required to access the property. But bracket notation can
also be used if there is no space. Bracket notation requires that the property
name be in single or double quotes. */
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

/* It is possible to have global and local variables with the same now, but
if there is a local variable available for the function it will take precendence
over the global function. In the example below when the function is called
myOutfit(); it will return sweater instead of T-Shirt.*/
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"


  // Only change code above this line
  return outerWear;
}

myOutfit();

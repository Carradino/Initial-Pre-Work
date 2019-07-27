// .hasOwnProperty() function tests an object to see if it has a property. 
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if ((myObj.hasOwnProperty(checkProp)) == true) {
    return myObj[checkProp];
  } else if ((myObj.hasOwnProperty(checkProp)) == false) {
  return "Not Found";
}
}
// Test your code by modifying these values
console.log(checkObj("pony"));

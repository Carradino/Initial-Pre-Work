// Inequality operator != is the opposite of ==. It performs type conversion before comparing. 
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testNotEqual(10));

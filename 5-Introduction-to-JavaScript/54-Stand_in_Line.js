// In this lesson I learned how to make a queue using .push() and .shift()
function nextInLine(arr, item) {
  // Your code here
  var add = arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 5)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

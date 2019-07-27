/* The less than operator < compares two numbers, if the number to the left
is less than the number to the right, it returns True, otherwise it returns false.
Like the equality operator, the less than operator converts data types before
comparison. */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(27));

/* to test more than one condition at a time, a logical and (&&) operator can
be used.*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(29));

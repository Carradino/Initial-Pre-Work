/* Greater than or equal to operator >= compares two values and if the one on the
left is greater than or equal to the one on the right, true is returned otherwise
false is returned. Like the greater than operator, greater than or equal to
operator converts data types before evaluation.*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(9));

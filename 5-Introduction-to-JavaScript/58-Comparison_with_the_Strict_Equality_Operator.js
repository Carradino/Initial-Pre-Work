/* === is an equality operator that means stricly equal. It is different from
== equal in that it will not convert different data types to a shared data type
and evaluate them. It was return false unless strictly equal, same value & same
data type.*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(7));

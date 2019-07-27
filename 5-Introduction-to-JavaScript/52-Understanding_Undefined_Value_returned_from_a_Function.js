/* A function does not have to include a return statement. It can still carry
out the inner code but the return value will be undefined.*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;

}

// Only change code below this line
function addFive(){
  sum = sum + 5;

}
addThree();
addFive();

// Only change code above this line
var returnedValue = addFive();

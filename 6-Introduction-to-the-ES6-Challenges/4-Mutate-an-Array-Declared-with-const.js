// Arrays assigned with const are mutable.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s.pop();
s.unshift(2);
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
console.log(s);

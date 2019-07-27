// Variables declared inside a function are local to that function only. They can't be accessed outside of the function. 
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}

myLocalScope();

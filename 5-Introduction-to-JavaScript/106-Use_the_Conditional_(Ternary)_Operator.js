/* condition operator (condition ?) can be used to make if-else statements one line.
condition ? statement-if-true: statement-if-false; */
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

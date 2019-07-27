/* parseInt() turns a turns a string into a number. If the string doesn't
begin with a number, then it returns NaN. */
function convertToInteger(str) {
  var a = parseInt(str);
  return a;
}
console.log(convertToInteger("056"));

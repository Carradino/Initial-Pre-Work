// multiple conditional operators can be chained together. 
function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

console.log(checkSign(-2));

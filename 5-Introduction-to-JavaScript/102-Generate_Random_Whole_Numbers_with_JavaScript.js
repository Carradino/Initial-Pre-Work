/* To generate a random whole number, a combination of Math.random(), some factor,
and Math.floor() are required. The decimal generate by Math.random() is
multiplied by some factor and that result is then rounded to a whole number by
Math.floor(). */
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

return Math.floor(Math.random() * 10);
}

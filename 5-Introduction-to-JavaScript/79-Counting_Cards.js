// In this lesson I learned how to build a program for counting cards. 
var count = 0;

function cc(card) {
  // Only change code below this line

if ((card > 1) && (card < 7))  {
      count = (count + 1);
      return count + betOrHold();
} else if ((card > 6) && (card < 10)) {
      count = (count + 0);
      return count + betOrHold();
} else if ((card = 10) || (card = 'J') || (card = 'Q') || (card = 'K') || (card = 'A')) {
      count = (count - 1);
    return count + betOrHold();
}
}

function betOrHold() {
 if (count <= 0) {
   return " Hold";
 } else {
   return " Bet";
 }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); console.log(cc('A'));

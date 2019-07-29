/* With the let keyword a variable with the same name can only be declared once.
"use strict" catches common errors. */
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

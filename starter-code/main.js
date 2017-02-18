console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert("You've found a match");
  // Code to be executed if condition1 is true
} else if (cardOne === cardFour) {
	alert("Try again");
  // Code to be executed if condition1 and condition2 are false and condition3 is true
} else if (cardOne === cardThree) {
	alert("Try again");
  // Code to be executed if condition1, condition2, and condition3 are false
} else if (cardTwo === cardOne) {
	alert("You've found a match");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardTwo === cardThree) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardTwo === cardFour) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardThree === cardOne) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardThree === cardTwo) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardThree === cardFour) {
	alert("You've found a match");
  // Code to be executed if condition1 is false and condition2 is true
  } else if (cardFour === cardOne) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardFour === cardTwo) {
	alert("Try again");
  // Code to be executed if condition1 is false and condition2 is true
} else if (cardFour === cardThree) {
	alert("You've found a match");
  // Code to be executed if condition1 is false and condition2 is true
}

//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 === "2");
//2. Write a statement that checks if '2' and 2 are loosely equal
console.log(2 == "2");
//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === "14");
//4. Write a statement that checks if 10 is greater than -100
console.log(10 > -100);
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
console.log(4 === Math.round(4.4));
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
console.log(10 >= Math.ceil(9.1));
//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(10 > 2 && 3 > 4);
// 7.a Without changing any of the numbers, or their order. How do we make this print true?
console.log(10 > 2 || 3 > 4);
//8. Pick a number between 1-20 and assign it to a variable
let melonsAmount = 7;
// This is the number of watermelons you purchased.
//
// If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// If your number of watermelons is more than 15, print, 'Did you have a coupon?'

if (melonsAmount === 1 || melonsAmount === 2) {
  console.log("Looks like you like watermelon");
} else if (melonsAmount > 2 && melonsAmount < 5) {
  console.log("Thats a lot of watermelon");
} else if (melonsAmount > 5 && melonsAmount < 10) {
  console.log("Thats too many watermelon!");
} else if (melonsAmount > 10 && melonsAmount < 15) {
  console.log("You must be CRAZY for watermelon!");
} else {
  console.log("Did you have a coupon?");
}

//9. Create a variable that represents your current hunger on a level of 1-10
// Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
// Otherwise print. "I'm not hungry"
let myHunger = 5;
let action = myHunger > 6 ? "Time to eat!" : "I'm not hungry";
console.log(action);
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// 10. Think of an Magic-8 Ball
// Write a switch statement that works the same way.
// When you run this file you should
// Generate a random number
// And get an out put from your switch statement?
// Ex:
// I update a question variable to say "Will I win the lottery?"
// I run node <FILENAME>
// The console prints out:
// Will I win the lottery? Not Likely.

// Pseudocode:
// variable that holds a randomly generated number
// variable for holding the question
// switch statement that picks responses based on the random number variable

let randomQ = Math.ceil(Math.random() * 5);
let randomA = Math.ceil(Math.random() * 5);

switch (randomQ) {
  case 1:
    console.log("Will I become a good Programmer?");
    break;
  case 2:
    console.log("Is love coming soon?");
    break;
  case 3:
    console.log("Will there be world peace?");
    break;
  case 4:
    console.log("Will the Mets with the world series?");
    break;
  case 5:
    console.log("Will the Nets with the NBA championship?");
    break;
}

switch (randomA) {
  case 1:
    console.log("There's a good chance!");
    break;
  case 2:
    console.log("No shot!");
    break;
  case 3:
    console.log("Definitely Yes!");
    break;
  case 4:
    console.log("It's worth a shot!");
    break;
  case 5:
    console.log("It would be a surprise for everyone!");
    break;
}

//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// BONUS:
// On the prior example, try and have the answer print like someone is speaking to you.

// Ex:
//Input:  Will I win the lottery?
//Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

// Ex2:
// Input: Will I get a new pet this year?
// Output: Will you get a pet this year? It is certain.

// Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?

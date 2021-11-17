// 1. Create two string variables and concatenate them
const greet = "Hello";
const noun = "World";
const greeting = greet + " " + noun;
console.log(greeting);

// 2. Create variables; name, age, and favoriteFood and using a template literal return the string 'Hello, my name is _ , I am _ years old and my favorite food is _'
// Note, the underscores should be replaced by your variable values
const myName = "Daniel";
const age = 40;
const favoriteFood = "Pernil";
console.log(
  `Hello my name is ${myName}, I am ${age} years old and my favorite food is ${favoriteFood}.`
);

// 3. Using JavaScript, find the length of "Finding the length of a string is easy!"
const sentence = "Finding the length of a string is easy!";
console.log(sentence.length);

// 4. PT 1: Create a variable and set it equal to a random number between 0 and 50
//      PT 2: Reassign that variable to the nearest whole number
let range = Math.floor(Math.random() * 51);
console.log(range);

// 5. Using the string below, console.log you last name
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(letters[2] + letters[17] + letters[20] + letters[25]);

// 6. PT 1: Create a variable and set it equal to a number
//     PT 2: Reassign that variable to the value of it times itself
//     PT 3: console.log the square root of the new value
let myNum = 7;
console.log(Math.sqrt((myNum *= myNum)));

// 7. Create a variable and set it equal to a string and then console.log the last letter
let word = "Javascript";
console.log(word[word.length - 1]);
// 8. Using the string below, console.long only your name
let classList = "The people is this class are Daniel, Jordan, and Kelly";
console.log(classList.slice(29, 35));

// 9. Don't just count. Using JS and the string below, what index is 'w' at?
let stringExample =
  "The index and character position are actually two different numbers because indexes start with 0";
console.log(stringExample.indexOf("w"));

// 10. Create variables for the number 33 and the number 7.
//      Using two different Math methods, create new variables from these numbers
//      There should now be 4 total variables

let a = 33;
let b = 7;
let c = Math.pow(a, b);
let d = Math.imul(a, b);
console.log(c, d);

// BONUS: Given the list of names below, use a JavaScript method to find the one that would come first in a dictionary
let nameList = "George, Heather, Peter, Anna, Josh, Linda";
let nameArr = nameList.split(" ");
console.log(nameArr.sort());

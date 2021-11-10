// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
console.log("hello" + "goodbye");

// 2. Save the substring "Friend" from the string "Hello Friend"
let greeting = "Hello Friend";
let word = greeting.slice(6, 13);
console.log(word);

// 3. Using at least 5 of the following words, create a template literal that makes a legible sentence.
const word1 = "hello";
const word2 = "horror";
const word3 = "peace";
const word4 = "world";
const word5 = "dislike";
const word6 = "umbrella";
const word7 = "car";
const word8 = "pasta";
const word9 = "pizza";
const word10 = "movies";
const word11 = "football";
const word12 = "soccer";
const word13 = "eat";
const word14 = "cookie";
const word15 = "favorite";
const word16 = "makeup";
const word17 = "I";
const word18 = "to";
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like";

let someSentence = `
${word17} ${word23} ${word18} order ${word9} when ${word19} friends ${word21} ${word17} watch ${word11} together.
`;
console.log(someSentence);

// 4. Given the string of your full name get your initials.
let myName = "Daniel Delacruz";
let myArray = myName.split(" ");
let initials = myArray[0][0] + myArray[1][0];
console.log(initials);

// 5. Get the 5th character from the following string: 'Hello World'
let greeting2 = "Hello World";
console.log(greeting2[4]);

// 6. Find the index of the dash from 'Coding-Time!'
let phrase = "Coding-Time!";
console.log(phrase.indexOf("-"));

// 7. Write code to grab the final letter from a any string.
let someString = "lkasdaksljdkasj";
let lastLetter = someString[someString.length - 1];
console.log(lastLetter);

// 8. Write code to grab the first 3 letters from a string.
let anotherString = "jqueryisold";
let firstThree = anotherString.slice(0, 3);
console.log(firstThree);

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let anotherString2 = "This-is-a-sentence";
let myArray2 = anotherString2.split("-");
console.log(myArray2);

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
let stringOne = one.toString();
let stringTwo = two.toString();
let stringtwelve = stringOne + stringTwo;
console.log(stringtwelve);

// Bonus Given the string of ANY first and last name get the initials.
// This code needs to be dynamic, no matter the length of the names this code should work.
// Ex:
// Brad Pitt: BP
// Buzz Lightyear: BL
// Rick Grimes: RG

let anyName = "Brad Pitt";
let firstAndLast = anyName.split(" ");
let initials2 = firstAndLast[0][0] + firstAndLast[1][0];
console.log(initials2);

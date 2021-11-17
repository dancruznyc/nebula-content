// 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
//      Each loop it should log to the console 'the current index is _'

for (let i = 0; i <= 30; i++) {
  console.log(`The current index is ${i}`);
}

// 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
//      Each loop it should log to the console the current index

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// 3.   Create an array with your top 5 celebrity names in it.
//      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
const celebs = [
  "Steve Irwin",
  "Mike Piazza",
  "Scottie Pippen",
  "Bobby Fischer",
  "Jack Kirby",
];

//      Loop over the array and log each celebrity's full name to the console.
for (let i = 0; i < celebs.length; i++) {
  console.log(celebs[i]);
}

// 4.   Loop over your celebrity list and
//      If a celebrity's full name has an even number of characters log it to the console
for (let i = 0; i < celebs.length; i++) {
  if (celebs[i].length % 2 === 0) {
    console.log(celebs[i]);
  }
}

// 5.   Use the your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
const celebFName = [];
for (let i = 0; i < celebs.length; i++) {
  celebFName.push(celebs[i].split(" ")[0]);
}
console.log(celebFName);

// 6.   Use the your celebrity array for this question
//      Create a for loop which will output two separate arrays, one with only initials, one with only last names

const celebLName = [];
const initials = [];
for (let i = 0; i < celebs.length; i++) {
  celebLName.push(celebs[i].split(" ")[1]);
  initials.push(celebs[i].split(" ")[0][0] + celebs[i].split(" ")[1][0]);
}
console.log(celebLName);
console.log(initials);

// 7.   Loop over the celebrity list and then loop through each name.
//      If a letter is a vowel, log it to the console
let vowels = ["a", "e", "i", "o", "u"];
let vowelsOnly = "";
// for (let celeb of celebs) {
//   for (let letter of celeb) {
//     for (let vowel of vowels) {
//       if (letter === vowel) {
//         vowelsOnly += letter;
//       }
//     }
//   }
// }
// let vowels = ["a", "e", "i", "o", "u"];
// let vowelsOnly = "";
for (let celeb of celebs) {
  for (let letter of celeb) {
    if (vowels.includes(letter)) {
      vowelsOnly += letter;
    }
  }
}

console.log(vowelsOnly);

// 8.   Loop over the celebrity list and then loop through each name.
//      If a letter is uppercase, log it to the console
for (celeb of celebs) {
  for (letter of celeb) {
    if (letter === letter.toUpperCase() && letter !== " ") {
      console.log(letter);
    }
  }
}

// 9.   Convert your celebrity array to all caps and no spaces:
//      Ex:
//        Input:  ['Martha Stewart', 'David Beckham', etc..]
//        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

const newCelebArray = [];
for (celeb of celebs) {
  let celebAllCaps = "";
  for (letter of celeb) {
    if (letter === " ") {
      celebAllCaps += "-";
    } else {
      celebAllCaps += letter.toUpperCase();
    }
  }
  newCelebArray.push(celebAllCaps);
}
console.log(newCelebArray);

// 10.  Index your array to find your favorite celebrity.
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const favCeleb = celebs[3];

//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console

for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("fizz-buzz");
  } else if (i % 2 === 0) {
    console.log("fizz");
  } else if (i % 3 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

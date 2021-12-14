// .forEach

// 1.   Given an array of numbers, log them to the console for each number.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

// 2.   Given an array of people, log a greeting to the console for each person.
const people = ["Daniel", "John", "Mark"];
people.forEach((person) => console.log(`Hello ${person}`));

// 3.   Given an array of mixed values, log whether it contains an undefined value.
const mixed = [4, "a string", undefined, true];

mixed.forEach((item) => {
  if (typeof item === "undefined") console.log(true);
  else return;
});

// 4.   Given an array of strings, log the vowel count for each string.

let vowels = ["a", "e", "i", "o", "u"];
people.forEach((person) => {
  let count = 0;
  person.split("").forEach((letter) => {
    if (vowels.includes(letter.toLowerCase())) count++;
  });
  console.log(count);
});

// 5.   Given an array of numbers, double them and log them to the console.
const newNumArray = [];
numbers.forEach((num) => newNumArray.push(num * 2));
console.log(newNumArray);

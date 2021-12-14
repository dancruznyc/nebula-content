// .filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1.   Write a function to filter an array for all the numbers greater than 5
const greaterThan = numbers.filter((num) => num > 5);
console.log(greaterThan);

// 2.   Write a function to filter an array for all the even numbers
const evenNums = numbers.filter((num) => num % 2 === 0);
console.log(evenNums);

// 3.   Write a function to filter an array for all the non number items
const mixed = [1, "a", 2, false, "b", 3, "c", 4, "d", 5, true];

const onlyNums = mixed.filter((item) => typeof item === "number");
console.log(onlyNums);

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const people = [
  { name: "Daniel", age: 40 },
  { name: "Mark", age: 32 },
  { name: "Joe", age: 17 },
  { name: "John", age: 35 },
  { name: "Tim", age: 16 },
];

const over21 = people.filter((person) => person.age > 21);
console.log(over21);

const gameScore = "The score was 115 to 95.";
// 5.   Write a function to filter out all letters from a string
//      Hint: filter doesn't work on strings..
const stringOfNums = gameScore.split(" ").filter((item) => {
  console.log(typeof (0 + item));
  typeof (0 + item) === "string";
});
console.log(stringOfNums);

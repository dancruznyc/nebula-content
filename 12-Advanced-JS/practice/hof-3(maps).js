// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array

let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map((item) => item * 2);
console.log(newArray);

// 2.   Using .map() create a new array that halves all numbers in a given array
let halfed = myArray.map((item) => item / 2);
console.log(halfed);

// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
let power = myArray.map((item) => Math.pow(item, 2));
console.log(power);

// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
let strArray = ["Daniel", "Jordan", "Eric", "Kelly", "Chelsea"];
let strCaps = strArray.map((item) => item.toUpperCase());

console.log(strCaps);

// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
let people = [{ name: "Pamela" }, { name: "Micheal" }, { name: "Angela" }];
let greeting = people.map((item) => `Hello ${item.name}`);
console.log(greeting);

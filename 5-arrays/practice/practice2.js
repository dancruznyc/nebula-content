// Declare an empty array
let myFirstArr = [];
// Declare an array with all the data types you can think of within it
const myMixedArray = [true, 164, "Some String", [1, 3], null, undefined];
// Make a list of classmates names first names in an array
const classmates = ["Jordan", "Kelly", "Daniel"];
// Get the length of that previous array
console.log(classmates.length);

// Check the type of the previous array
console.log(typeof classmates);
// Check if the previous array is an array
Array.isArray(classmates);
// Using indexing, grab your name from that previous array
console.log(classmates[2]);
// Use the following variable to get the 2nd student from the array of students
let index = 2;

// Update the array to have each element as a students first and last name : 'firstName lastName'
classmates[0] = "Jordan Gant";
classmates[1] = "Kelly Raymond";
classmates[2] = "Daniel Delacruz";
console.log(classmates);
// Given the following list:

// Change the element at index zero to equal itself times 10
let numArr = [1, 2, 3, 4, 5];

numArr[0] *= 10;

// Add an additional element to the prior array
numArr.push(6);
console.log(numArr);
// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
let removedItem = numArr.pop;
console.log(numArr);

// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log falsecon
if (numArr.indexOf(1) === -1) {
  console.log(false);
} else {
  console.log(true);
}

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
let removedFirstItem = numArr.shift();
console.log(removedFirstItem);

// Add that item back
numArr.unshift(10);
console.log(numArr);

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];

// Now reverse the prior array
sortThis.reverse();
console.log(sortThis);

// Write a string stating your favorite 3 foods.
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const foods = "My favorite foods are za, pineapple, hawaiian-pizza";
// Convert the prior string into an array of words (don't worry about where punctuation lands).
foodArr = foods.split(" ");
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

foodArr.join("-");
// Convert the output from the prior example back into a string, but with dashes between the words.
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const nums = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(nums.splice(5, 0, 6));
// Create two arrays and, using JavaScript join them together
//.concat() combines two arrays
// Create a multi-dimensional array

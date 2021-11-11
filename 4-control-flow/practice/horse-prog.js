// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.

let horseName = "Modern Marvel";

let position = Math.ceil(Math.random() * 5);

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."
if (position === 1) {
  console.log(`${horseName} finished in first place!`);
} else if (position === 2) {
  console.log(`${horseName} finished in second place!`);
} else if (position === 3) {
  console.log(`${horseName} finished in third place!`);
} else if (position >= 4) {
  console.log(`${horseName} did not finish in the top 3.`);
}

let x = 42;
let y = 11;

// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'

if (x === 42 || y === 42) {
  console.log(
    "I see you've found the ultimate answer to life, the universe and everything."
  );
}

// Save your name to a variable called name
const name = "Daniel";
// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
// Otherwise log, 'I see you've got enough characters!' to the console.
if (name.length < 10) {
  console.log("you'll need more characters!");
} else {
  console.log("I see you've got enough characters!");
}

// Create the following if statement:
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
let month = 11;
if (month > 3 && month < 12) {
  console.log("Winter is Coming!");
}

// Create two variables a & b initialized as numbers
const a = 6;
const b = 4;
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

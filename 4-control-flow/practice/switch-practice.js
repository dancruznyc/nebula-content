// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement

let horseName = "Wild Mustang";

let position = Math.ceil(Math.random() * 5);

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

switch (position) {
  case 1:
    console.log(`${horseName} finished in first place!`);
    break;
  case 2:
    console.log(`${horseName} finished in second place!`);
    break;
  case 3:
    console.log(`${horseName} finished in third place!`);
    break;
  default:
    console.log(`${horseName} did not finish in the top three spots`);
}

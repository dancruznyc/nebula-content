class Elevator {
  constructor(currFloor, inTransit, occupied) {
    this.currFloor = currFloor;
    this.inTransit = inTransit;
    this.occupied = occupied;
  }
  printCurrFloor() {
    return `The current floor is: ${this.currFloor}`;
  }
  changeFloor(direction) {
    if (direction === "up") this.currFloor += 1;
    else if (direction === "down") this.currFloor -= 1;
  }
}

class Animal {
  constructor(speak, food, lives) {
    this.speak = speak;
    this.food = food;
    this.lives = lives;
  }
}

class Bird extends Animal {
  constructor(speak, food, lives, canFly) {
    super(speak, food, lives);
    this.canFly = canFly;
  }
}

class Snake extends Animal {
  constructor(speak, food, lives, hasVenom) {
    super(speak, food, lives);
    this.hasVenom = hasVenom;
  }
}

function doSomeMath(a, b, func) {
  return func(a, b);
}

function subtract(x, y) {
  return x - y;
}

doSomeMath(25, 15, subtract);

const arr = [5, 1, 7, 2, 3];
const product = arr.reduce((total, num) => (total *= num));
console.log(product);

const strings = ["Hello", "World", "Welcome", "Good Morning"];
const revStrings = strings.map((str) => str.split("").reverse().join(""));
console.log(revStrings);
//const strings = ["Hello", "World", "Good", "Day"];
const shortStrings = strings.filter((str) => str.length < 5);
console.log(shortStrings);

const merchandise = [
  { name: "t-shirt", id: 3456 },
  { name: "hat", id: 1096 },
  { name: "jeans", id: 9123 },
  { name: "jacket", id: 3238 },
  { name: "button shirt", id: 6991 },
];

const sortMerch = merchandise.sort((a, b) => a.id - b.id);
console.log(sortMerch);

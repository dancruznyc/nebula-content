let favBasketballTeam = "Chicago Bulls";
favBasketballTeam = "Brooklyn Nets";

const favBaseballTeam = "NY Mets";

console.log(favBasketballTeam);
console.log(favBaseballTeam);
// Practice 1
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// 1. Declare a new variable and set it equal to the string of your name
const myName = "Dan";

// 2. Declare a new variable and set it equal to a number

const birthYear = 1981;

// 3. Set a variable to a boolean value

let speaksFrench = false;

// 4. Create a variable called carName, assign the value Volvo to it.

const carName = "Volvo";

// 5. Create a variable called num, assign the value 50 to it.

let num = 50;

// 6. Display the sum of 5 + 10, using two variables: num1 and num2.

let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

// 7. Create a variable called num3, assign the addition of num1 and num2 to it.

let num3 = num1 + num2;

// Practice 2
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

let fullName = "Daniel Delacruz";
let streetName = "Pitkin Ave";
let houseNumber = "2906";
let city = "Brooklyn";
let state = "NY";
let zipCode = "11208";

let address = `${fullName}
${streetName}, ${houseNumber}
${city}, ${state}, ${zipCode}`;

console.log(address);

//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// Math.trunc vs Math.floor
let x = 10.5;
let z = Math.floor(x);
let y = Math.trunc(x);
console.log(y);
console.log(z);

let a = -10.5;
let b = Math.floor(a);
let c = Math.trunc(a);
console.log(b);
console.log(c);

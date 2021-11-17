// simple data comparisons, strings vs numbers
// console.log("ABCD".length);
// console.log(5*5);
// console.log("ABCD"*5);
// console.log(5.length); // <- this throws an error

// // Strings
// "Hello World"// quotes
// 'Good Eveneing' // single quotes
// `Top 'o the mornin'` // backticks

// // Numbers
// 5 // a number
// 2+3 // addition
// 5-2 // subtraction
// 10*1.3 // multiplication
// 40/4 // division
// 13%2 // modulus this gives 1
// Math.round(5.1) // rounds to 5

// // Boolean
// true
// false

// //Symbol
let sym1 = Symbol("Test");
// let sym2 = Symbol('Test');

// console.log(sym1 === sym2); // are they exactly the same? = no
// console.log(sym1 == sym2); // are they somewhat the same? = no

// //BigInt
// console.log(9007199254740991); // JS' biggest number
// console.log(90071992547409911); // gets rounded (larger than JS biggest number)
// console.log(90071992547409911n); // n indicates it's a big int

// // Object
let car = {
  brand: "BMW",
  color: "Blue",
  year: 1999,
  registered: false,
  currentDriver: null,
};

// console.log(car)
// console.log(car.color, car.year)
// console.log(car.licensePlate); // undefined

// // Function
function greet(name) {
  return "Hello " + name;
}
// console.log(greet('Kelly'));
// console.log(greet('Daniel'));
// console.log(greet('Jordan'));

let str = "This is a string";
let num = 5;
let bigN = 1n;
let bool = true;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bigN);
console.log(typeof bool);
console.log(typeof greet);
console.log(typeof sym1);
console.log(typeof null);
console.log(typeof undefined);

function calculate(a, b, func) {
  return func(a, b);
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(calculate(5, 4, sum));
console.log(calculate(5, 4, subtract));
console.log(calculate(5, 4, multiply));
console.log(calculate(5, 4, divide));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function calculateArgs(func) {
  return func(calculateArgs.arguments);
}

function add(x) {
  let sum = 0;
  for (let i = 1; i < x.length; i++) {
    sum += x[i];
  }
  console.log(sum);
  return sum;
}

calculateArgs(add, 3, 5, 6, 7, 8);
calculateArgs(add, 3, 5, 6, 7, 8, 1, 5, 10);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function stringModify(str, modify) {
  return modify(str);
}

function yeller(str) {
  return str.toUpperCase();
}

function sarcastic(str) {
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i += 2) {
    newStr[i] = newStr[i].toUpperCase();
  }
  return newStr.join("");
}

function code(str) {
  let newStr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      newStr[i] = "-";
    }
  }
  return newStr.join("");
}

console.log(stringModify("I need a nap", yeller));
console.log(stringModify("I really like running", sarcastic));
console.log(stringModify("There is no cake", code));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function oneType(func, arr) {
  return func();
}

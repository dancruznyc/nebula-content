// Reverse a string
// version 1
const reverseString = function (someString) {
  const stringToArray = someString.split("");
  const reverseArray = stringToArray.reverse();
  const newString = reverseArray.join("");
  return newString;
};

console.log(reverseString("Hello"));
// version 2
function reverseStr(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseStr("hello"));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//repeat a string

const repeatStr = function (num, str) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
};

console.log(repeatStr(5, "Hello"));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the smallest number in an array
// version 1
const smallestInt = function (numsArray) {
  return Math.min(...numsArray);
};

console.log(smallestInt([55, 101, 70, 9, 4, 6]));
// version 2
const array = [20, 300, 100, 90, 18];
const getMinValue = function (values) {
  let minvalue = values[0];
  for (let i = 0; i < values.length; i++) {
    if (values[i] < minvalue) {
      minvalue = values[i];
    }
  }
  return minvalue;
};

console.log(getMinValue(array));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

const addArrayItems = function (arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
};

console.log(addArrayItems([1, 3], [7, 6, 5]));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// String to Numbers

const stringToNum = function (str) {
  return parseInt(str);
};

console.log(stringToNum("12345"));

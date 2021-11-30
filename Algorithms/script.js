function stringChanger(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!" && str[i] !== " ") {
      newString += str[i];
    }
  }
  return newString;
}

console.log(stringChanger("Javascript is alot of fun!!!"));

function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(findAverage([5, 10, 20, 30, 15]));

function removeOddNums(num) {
  let numToString = num.toString();
  let numArray = Array.from(numToString);
  let newString = "";
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      newString += numArray[i];
    }
  }
  return parseInt(newString);
}

console.log(removeOddNums(567893456));

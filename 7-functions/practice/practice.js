const multiplyBy10 = function (num) {
  return num * 10;
};

const sayGoodbye = function (someName) {
  return `Goodbye ${someName}!`;
};

const evenNumbers = function (myArray) {
  let evenNums = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      evenNums.push(myArray[i]);
    }
  }
  return evenNums;
};

// Reverse the words in a sentence.

const sentence = "This is my original sentence";
const reversedWords = function (myString) {
  const reverseOrder = [];
  const splitwords = myString.split(" ");
  console.log(splitwords);
  for (let i = 0; i < splitwords.length; i++) {
    let word = splitwords.pop();
    reverseOrder.shift(word);
  }
  console.log(splitwords);
  return reverseOrder;
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reversedWords(sentence));

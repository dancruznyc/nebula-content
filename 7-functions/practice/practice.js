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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

const games = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

function points(games) {
  let score = 0;
  let newGamesArray = [];
  for (let i = 0; i < games.length; i++) {
    newGamesArray.push(games[i].split(":"));
  }
  for (let i = 0; i < newGamesArray.length; i++) {
    if (newGamesArray[i][0] > newGamesArray[i][1]) {
      score += 3;
    } else if (newGamesArray[i][0] === newGamesArray[i][1]) {
      score += 1;
    } else if (newGamesArray[i][0] < newGamesArray[i][1]) {
      score = score;
    }
  }
  return score;
}

console.log(points(games));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = "";
  if (dna === "" || dna === undefined) {
    return "";
  } else if (dna) {
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === "T") {
        rna += "U";
      } else {
        rna += dna[i];
      }
    }
  }
  return rna;
}
console.log(DNAtoRNA("GCAT"));

const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];
let evenNums = [];

for (let i = 0; i < arrayOfNums.length; i++) {
  if (arrayOfNums[i] % 2 === 0) {
    evenNums.push(arrayOfNums[i]);
  }
}

console.log(evenNums);

const famousQuote =
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";
let vowelCount = 0;

for (let i = 0; i < famousQuote.length; i++) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let j = 0; j < vowels.length; j++) {
    if (famousQuote[i] === vowels[j]) {
      // vowelCount += famousQuote[i];
      vowelCount++;
    }
  }
}

// for(let i = 0; i < famousQuote.length; i++) {
//   let vowels = ["a", "e", "i", "o", "u"];
//  if (vowelCount.includes(famousQuote[i])) {
//    vowelCount++
//  }
// }

const names = ["eric", "jordan", "kelly", "daniel"];

// for (name of names) {
//   for (letter of name) {
//     console.log(letter);
//   }
// }

for (name of names) {
  for (let i = 0; i < name.length; i += 2) {
    name[i] = name[i].toUpperCase();
    console.log(name);
  }
}
console.log(names);

console.log(vowelCount);

// Make every other letter in a string an uppercase
const string = "daniel delacruz";
let newString = "";
for (i = 0; i < string.length; i++) {
  newString += i % 2 == 0 ? string.charAt(i).toUpperCase() : string.charAt(i);
}
console.log(newString);

const arrNums = [
  [5, 4, 3],
  [20, 15, 50],
  [20, 13, 50],
  [21, 35, 10],
  [25, 21, 31],
];
// => [12, 85, 83, 66, 77];
const newArrNums = [];

for (let i = 0; i < arrNums.length; i++) {
  let sum = 0;
  for (let j = 0; j < arrNums[i].length; j++) {
    sum += arrNums[i][j];
  }
  newArrNums.push(sum);
}

console.log(newArrNums);

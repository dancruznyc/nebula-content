const myArray = [16, 3, 6, 4, 10, 15, 1, 19, 9, 8, 20, 17, 5, 2];

const greaterThanFive = myArray.filter((num) => num > 5);
console.log(greaterThanFive);

const evenNums = myArray.filter((num) => num % 2 === 0);
console.log(evenNums);

const mixedArray = [
  "hello",
  4,
  true,
  23,
  "world",
  31,
  false,
  undefined,
  7,
  null,
];

const numsOnly = mixedArray.filter((el) => typeof el === "number");
console.log(numsOnly);

const partyPeople = [
  { name: "Dan", age: 40 },
  { name: "Joe", age: 17 },
  { name: "Samantha", age: 21 },
  { name: "Jocelyn", age: 24 },
  { name: "Tim", age: 18 },
];

function whoCanParty() {
  const canParty = partyPeople
    .filter((person) => person.age >= 21)
    .map((person) => person.name);

  console.log(`${canParty.join(", ")} are old enough to party`);
}

whoCanParty();

const mixedString = "s?>akj<df%h329,84.67!08hnc#6ow08/3u4983-192eu1j";

function removeLetters(str) {
  const arr = str.split("");
  console.log(arr);
  const noLetters = arr.filter(
    (char) => char.toLowerCase() === char.toUpperCase()
  );
  console.log(noLetters.join(""));
  return noLetters.join("");
}

removeLetters(mixedString);

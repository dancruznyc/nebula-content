const numbers = [3, 6, 4, 10, 1, 9, 8, 5, 2];

const numRevOrder = numbers.sort((a, b) => b - a);
console.log(numRevOrder);

const numInOrder = numbers.sort((a, b) => a - b);
console.log(numInOrder);

const names = ["Daniel", "John", "Vanessa", "Sam"];

const namesOrder = names.sort((a, b) => a.length - b.length);
console.log(namesOrder);

const people = [
  { name: "Dan", age: 40 },
  { name: "Joe", age: 17 },
  { name: "Samantha", age: 21 },
  { name: "Jocelyn", age: 24 },
  { name: "Tim", age: 18 },
];

const ageOrder = people.sort((a, b) => a.age - b.age);
console.log(ageOrder);

const lastLetterSort = names.sort((a, b) => {
  const prev = a.split("").reverse().join("");
  const curr = b.split("").reverse().join("");
  if (prev < curr) return -1;
  else return 1;
});
console.log(lastLetterSort);

// Reduce Method.
const numbers = [3, 6, 4, 10, 1, 9, 8, 5, 2];

const sum = numbers.reduce((total, num) => total + num);
console.log(sum);

const product = numbers.reduce((total, num) => total * num);
console.log(product);

const largest = numbers.reduce((prev, curr) => (curr > prev ? curr : prev));
console.log(largest);

const people = [
  { name: "Dan", age: 40 },
  { name: "Joe", age: 17 },
  { name: "Samantha", age: 21 },
  { name: "Jocelyn", age: 24 },
  { name: "Tim", age: 18 },
];

const oldest = people.reduce((prev, curr) =>
  curr.age > prev.age ? curr : prev
);

console.log(oldest);

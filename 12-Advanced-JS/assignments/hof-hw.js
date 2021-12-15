// cumilitive - this is the difficult part. Figuring out which HOF to use.
// 1.   Write a hof function which returns the first number larger than 100
const numArray = [25, 75, 99, 100, 111, 60, 125, 33, 164];
const firstLargeNum = numArray.find((num) => num > 100);
console.log(firstLargeNum);

const people = [
  { name: "Dan", birthYear: 1981 },
  { name: "Joe", birthYear: 2005 },
  { name: "Samantha", birthYear: 2000 },
  { name: "Jocelyn", birthYear: 1995 },
  { name: "Sasha", birthYear: 1997 },
  { name: "Tim", birthYear: 2003 },
];

// 2.   Write a hof which lists a set of people based on their birth year
const youngestToOldest = people.sort((a, b) => b.birthYear - a.birthYear);
console.log(youngestToOldest);

// 3.   Given an array of cars only list cars that are build pre-2000
const cars = [
  { model: "Thunderbird", year: 1970 },
  { model: "Stingray", year: 1969 },
  { model: "Maybach S Class", year: 2020 },
  { model: "Charger", year: 2010 },
];

const oldestCars = cars.filter((car) => car.year < 2000);
console.log(oldestCars);

// 4.   Given an array of phone numbers return an array of protected phone numbers so that it has this structure:
//      input: 555-555-5555, output: 5##-###-#555

const phoneNums = [
  "718-647-9876",
  "516-722-3845",
  "631-477-9988",
  "917-987-2125",
  "347-123-4567",
];

const protected = phoneNums.map((num) => {
  const cutString = num.slice(1, 9);
  const insert = "##-###-#";
  return num.replace(cutString, insert);
});

console.log(protected);

// 5.   Given an array of numbers write a HOF that logs to the console:
//      `Thats a big number!` if it's larger than 1000 or
//      `This number isnt so big...` if its smaller than or equal to 1000
const numbers = [1025, 650, 755, 1100, 1850, 300];

numbers.forEach((num) => {
  if (num > 1000) console.log(`${num}: Thats a big number!`);
  else console.log(`${num}: This number isnt so big...`);
});
// 6.   Given an array of people's name write a hof that returns only people with names longer than 5 characters
const names = [
  "Megan",
  "Kristian",
  "larry",
  "Roderick",
  "John",
  "Sienna",
  "Jenny",
  "Wyatt",
  "Dan",
  "Mattie",
  "Neil",
];
const longerNames = names.filter((name) => name.length > 5);
console.log(longerNames);
// 7.   Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest
const persons = [
  { name: "Dan", age: 40 },
  { name: "Joe", age: 55 },
  { name: "Samantha", age: 21 },
  { name: "Jocelyn", age: 26 },
  { name: "Sasha", age: 24 },
  { name: "Tim", age: 18 },
];

const sortedPersons = persons
  .sort((a, b) => a - b)
  .filter((p) => p.age > 20 && p.age < 35);
console.log(sortedPersons);

// 8.   Given an array of objects, each object is a food, including an expiration date
//      return the food that will expire soonest
//      ex food: {nama: banana, expiration: "Dec 21, 2022"}
//      hint: JavaScript Date object may be helpful

const food = [
  { name: "Banana", exp: new Date(2021, 11, 21) },
  { name: "Steak", exp: new Date(2022, 0, 5) },
  { name: "Milk", exp: new Date(2022, 0, 8) },
  { name: "Eggs", exp: new Date(2021, 11, 28) },
  { name: "Bread", exp: new Date(2021, 11, 20) },
];

const foodSorted = food.sort((a, b) => a.exp - b.exp);
console.log(foodSorted);

// sort
// reduce
// map
// for each
// filter
// find

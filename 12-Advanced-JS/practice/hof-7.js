let x;
let y;

const arr = [3, null, 6, "second", 4, "first", 10, 1, 19, x, 8, 5, 2];

const greaterThanTen = arr.find((num) => num > 10);
console.log(greaterThanTen);

const firstString = arr.find((el) => typeof el === "string");
console.log(firstString);

const typeNull = arr.find((el) => el === null);
console.log(typeNull);

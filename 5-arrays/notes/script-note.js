let myArr = ["Wolverine", "Spiderman", "Hulk", "Daredevil", "Ironman"];
console.log(myArr[0]);
console.log(myArr[3]);
console.log(myArr.length);

myArr.push("Venom");
myArr.push("Batman");
console.log(myArr);

let retiredHero = myArr.pop(); // Removes Batman or last element
console.log(retiredHero);

myArr.unshift("Gambit"); // Add to the from of an array
console.log(myArr);
let deadHero = myArr.shift();
console.log(deadHero);

console.log(myArr);

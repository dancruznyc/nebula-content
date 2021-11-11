const commonName = "Corn Snake";
const speciesName = "Pantherophis Guttatus";
const animalClass = "Reptilia";
const limbsAmount = 0;
const laysEggs = true;
const hasVenom = false;

let animal = `
Animal: ${commonName}
Species: ${speciesName}
Class: ${animalClass}
About: A ${commonName} has ${limbsAmount} limbs. It is ${laysEggs} that they lay eggs. Reports of them having venomous bites are ${hasVenom}.
`;
console.log(animal);

const carModel = "Forrester";
const carMake = "Subaru";
const carYear = 2010;
const carColor = "White";
const hasBeenInAccident = false;
const bookValue = 6500;

let car = `
$$ Car For Sale $$
${carMake} ${carModel}
color: ${carColor} Year: ${carYear}
Accident: ${hasBeenInAccident} (Car has clean history)
`;

console.log(car);

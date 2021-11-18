// 1.   Create an object for a celebrity and save it to a variable
const athlete = {};
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
athlete.name = "Jacob deGrom";
athlete.sport = "Baseball";
athlete.position = "Pitcher";
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
athlete["team"] = "NY Mets";
athlete["freeAgent"] = false;
athlete["birthYear"] = 1988;

// 4.   Write a function that allows us to add or update 3 properties
const updateObj = function (obj, prop1, prop2, prop3, value1, value2, value3) {
  obj[prop1] = value1;
  obj[prop2] = value2;
  obj[prop3] = value3;
};

updateObj(
  athlete,
  "team",
  "freeAgent",
  "position",
  "Boston Red Sox",
  true,
  "DH"
);
console.log(athlete);

// 5.   Using a loop - log all the celebrities properties to the console
for (let key in athlete) {
  console.log(`${key}: ${athlete[key]}`);
}

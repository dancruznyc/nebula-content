// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamCar = {
  make: "Corvette",
  model: "Stingray",
  year: 1969,
  convertible: true,
  colorMain: "Turqoiuse",
  colorHighlight: "Bubblegum Pink",
  carIsOn: false,
  trunkContents: ["Basketball", "Chess Set", "Baseball", "Spare Tire"],
  gloveCompartment: ["Sunglasses", "Gloves", "Registration"],
};
// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(dreamCar.make);
console.log(dreamCar.model);
console.log(dreamCar.year);

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamCar["convertible"]);
console.log(dreamCar["colorMain"]);
console.log(dreamCar["colorHighlight"]);

// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(dreamCar.prevOwner);
// We get undefined
// 5.   Add a new key-value pair to the vehicle.
dreamCar.prevOwner = "An old guy.";
// 6.   Using bracket-notation update a property on the vehicle.
dreamCar["trunkContents"][2] = "Catchers Mit";
console.log(dreamCar.trunkContents);
// 7.   Using dot-notation update a property on the vehicle.
dreamCar.gloveCompartment.push("Air Freshener");
console.log(dreamCar.gloveCompartment);
// 8.   Create a method for turning your vehicle on
dreamCar.startEngine = function (keyFab) {
  if (keyFab && dreamCar.carIsOn === false) {
    dreamCar.carIsOn = true;
    return "vroom vroom";
  } else {
    dreamCar.carIsOn = false;
    return;
  }
};

console.log(dreamCar.startEngine(true));
// 9.   Create a method for turning your vehicle off
dreamCar.stopEngine = function (inPark, keyTurned) {
  if (inPark && keyTurned && dreamCar.carIsOn === true) {
    dreamCar.carIsOn = false;
    return "Car is turned off";
  } else if (!inPark && keyTurned && dreamCar.carIsOn === true) {
    return "Please put the car in park";
  } else if (inPark && !keyTurned && dreamCar.carIsOn === true) {
    return "Just in park";
  } else {
    return " The engine is already off";
  }
};
//10.
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)

console.log(dreamCar.stopEngine(false, true));
console.log(dreamCar.stopEngine(true, false));
console.log(dreamCar.stopEngine(true, true));
console.log(dreamCar.stopEngine(true, true));

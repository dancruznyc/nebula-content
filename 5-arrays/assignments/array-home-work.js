// 1.   Create an array that contains two of your favorite things to do
let myArray = ["chess", "art"];
// 2.   Using an array method, add another thing you like to do to that list
myArray.push("snakes");
console.log(myArray);
// 3.   Reverse the order of the array (remember, if needed use MDN)
myArray.reverse();
console.log(myArray);
// 4.   Using this array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// 5.   log the length of the array
console.log(daysOfWeek.length);
// 6.   log the 4th element in the array
console.log(daysOfWeek[3]);
// 7.   Remove the first element in the array. Log the new array and the element removed from the array
let elementRemoved = daysOfWeek.shift();
console.log(elementRemoved);
console.log(daysOfWeek);
// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array
daysOfWeek.unshift("Sunday");
console.log(daysOfWeek);
// 9.   Remove the last element in the array. Log the new array and log the element removed
let poppedEl = daysOfWeek.pop();
console.log(poppedEl);
console.log(daysOfWeek);
//10.   Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push("Saturday");
console.log(daysOfWeek);
//11.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = "Friday Junior";
//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favDay = daysOfWeek[daysOfWeek.length - 1];
console.log(favDay);

//13.   Combine these two arrays together
//14.   let phone = ['iphone', 'android']
//15.   let laptop = ['MacBook', 'HP', 'Dell']

let phone = ["iphone", "android"];
let laptop = ["MacBook", "HP", "Dell"];

let techGadgets = phone.concat(laptop);
console.log(techGadgets);

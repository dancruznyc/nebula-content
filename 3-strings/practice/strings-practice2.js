// Turn the following string into all lowercase letters
let noCaps = "This Should Not Have Capital Letters!";
noCaps = noCaps.toLowerCase();
console.log(noCaps);

// Turn the following string into all uppercase letters
let loud = "i'm very loud!";
loud = loud.toUpperCase();
console.log(loud);

// Join the prior two variables together.
let concat = noCaps + loud;
console.log(concat);

// Turn the following string into an array of names
let stringOfNames = "Ally Becca Carlos Drake Edgar Felicity Greta Hector";
let names = stringOfNames.split(" ");
console.log(names);

// Given the following sentence, create variables to make the template literal run properly.
let animal = "lion";
let verb = "run";
let verb2 = "rest";
let food = "chicken";
let emotion = "excited";

let paragraph = `Today I went on a safari. I saw a ${animal}, ${verb}ing up and down in a field! Then I saw lots more ${animal}s. However they were not ${verb}ing, they were ${verb2}ing. I threw them some ${food} and they got very ${emotion}`;

console.log(paragraph);

// Make your own mad-libs using a template literal

// Given the name Tony Stark, get his initials
let ironman = "Tony Stark";
let nameArr = ironman.split(" ");
let initials = nameArr[0][0] + nameArr[1][0];
console.log(initials);

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
let lyrics = "Hey now, you're an all-star!";
let lyricsArr = lyrics.split(" ");
let lastWord = lyricsArr[lyricsArr.length - 1];
console.log(lastWord);

// Using the string "How are you?" extract the question mark.
let greeting = "How are you?";
let i = greeting.indexOf("?");
let punctuation = greeting[i];
console.log(punctuation);

// Given the following variables, add them together to get 15
let ten = "10";
let five = "5";
ten = parseInt(ten);
five = parseInt(five);
let sum = ten + five;
console.log(sum);

// Given the following sentence, turn it into an array.

let sentence = "Welcome to the jungle!";

let sentenceArr = sentence.split(" ");
console.log(sentenceArr);

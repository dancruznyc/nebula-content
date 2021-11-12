// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called CreditCardNum, set it equal to a fake credit card string-number
const creditCardNum = "1234 0000 4567 0000 6789";
// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
const last4SS = "1981";
// Initialize a variable called userId, set it equal to a fake user ID
const userId = "newUser";
// Initialize a variable called password, set it equal to a fake password
const password = "hardPW123";

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
let inputId = userId;
let inputPass = password;

// inputId = userId;
// inputPass = "password";

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
let userInfo =
  userId === inputId && password === inputPass
    ? `CC Num: ${creditCardNum} Social: ${last4SS}`
    : "incorrect username or id";

console.log(userInfo);

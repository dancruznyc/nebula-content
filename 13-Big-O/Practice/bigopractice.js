// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// The function take an array and loops over it and logs each item in the array
//O(n)

// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
// This function loops over an array and compares each item to see which is largest
// O(n)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr) {
  console.log(arr[arr.length - 1]);
}
// This function simply logs the last element of an array to the consol
// O(1)

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }

  return newStr;
}

// This function takes a string and loops over it to creat a new string
// O(n)

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
  return 2 * num;
}

// This function take a number and doubles it
// O(1)

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
  let final = 4 * num;
  return final * 3;
}
// This function has 2 steps first taking a number and multiplying by 4 than multiplying that result by 3
// O(1)

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
  let arrReversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
  }
  return arrReversed;
}
// This function takes an array and loops over it starting from the end and creates a new array in reverse order.
// O(n)

// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;
  let total = 0;
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j;
    }
  }
  return total;
}
// This function takes 2 arrays
// O(n^2)

// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10, 20, 30, 40];
nums.push(50);

// Push add an item to the end of an array
// O(1)

// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10, 20, 30, 40];
nums.unshift(0);

//unshift add an element to the beginning of an array the rest of the elements need to be shifted over
//O(n)

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
  let numberOfLoops = 0;
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++;
  }
  return numberOfLoops;
}

// this function takes an array and counts the number of items inside of it
// O(log n)

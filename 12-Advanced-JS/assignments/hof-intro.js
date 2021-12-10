function changeNums(nums, func) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    output.push(func(nums[i]));
  }
  return output;
}

function doubler(num) {
  return num * 2;
}

function halves(num) {
  return num / 2;
}

function pow(num) {
  return Math.pow(num, 2);
}

console.log(changeNums([1, 2, 3, 4, 5], doubler));
console.log(changeNums([1, 2, 3, 4, 5], halves));
console.log(changeNums([1, 2, 3, 4, 5], pow));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function stringInfo(info, str) {
  let output = 0;
  for (let i = 0; i < str.length; i++) {
    output += info(str[i]);
  }
  return output;
}

function length(str) {
  return 1;
}

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(str)) {
    return 1;
  } else return 0;
}

function capitals(str) {
  if (str === str.toUpperCase() && str.toUpperCase() !== str.toLowerCase()) {
    return 1;
  } else return 0;
}

function nonLetters(str) {
  if (str.toLowerCase() === str.toUpperCase()) {
    return 1;
  } else return 0;
}

console.log(stringInfo(length, "Howdy Partner!"));
console.log(stringInfo(vowels, "Howdy Partner!"));
console.log(stringInfo(capitals, "Howdy Partner!"));
console.log(stringInfo(nonLetters, "Howdy Partner!"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function minimizeNums(min, nums) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    output += min(nums[i], nums.length);
  }
  return output;
}

function add(num) {
  return num;
}

function average(num, length) {
  return num / length;
}

console.log(minimizeNums(add, [2, 3, 5, 8]));
console.log(minimizeNums(average, [5, 8, 12, 15]));

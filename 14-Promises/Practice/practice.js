// 1.   What is the order of output?
//b,e,d,c,h,i,a,f,g

setTimeout(() => {
  console.log("a");
}, 1);
console.log("b");

new Promise((res, rej) => {
  res("c");
}).then((val) => console.log("d", val));
console.log("e");

setTimeout(() => {
  console.log("f");
}, 0);

setTimeout(() => {
  console.log("g");
}, 3);

new Promise((res) => {
  res("h");
}).then((res) => console.log(res, "i"));

// 2.   Create a promise for something you may, or may not do.

let hwPromise = true;
let didHomeWork = new Promise(function (resolve, reject) {
  if (hwPromise) {
    resolve("I did my home work");
  } else {
    reject("I did not do my home work");
  }
});

console.log(didHomeWork);

// 3.   Create a new promise for something you may or may not do.
//      After a few seconds log whether it has been done.
let trashPromise = true;
let emptyTrash = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (trashPromise) {
      resolve("I took out the trash");
    } else {
      reject("I did not take out the trash");
    }
  }, 5 * 1000);
});

console.log(emptyTrash);
setTimeout(() => {
  console.log(emptyTrash);
}, 5001);

// 4.   Using the prior example use .then and .catch to handle responses and rejections

// 5.   What does a promise resolve to?

// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page

// 7. What is the output of the following code?
const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// 8.

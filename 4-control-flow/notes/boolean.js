// 5 == "5" -- True
// 10 !== "10" -- True
// 20 === "20" -- False
// 20 >= "20" -- true
// 30 < 35 -- True

// Falsy Values
// false
// 0 (zero)
// -0 (negative zero)
// 0n
// '' (empty string)
// null
// undefined
// NaN

// Ternary Operator
let age = 26;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

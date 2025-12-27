let score = "33"
let score_2 = "33abc"
let score_3 = null
let score_4 = undefined
let score_5 = "Sarthak"

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // 33


let valueInNumber_2 = Number(score_2)
console.log(typeof valueInNumber_2);
console.log(valueInNumber_2); // NaN

let valueInNumber_3 = Number(score_3)
console.log(typeof valueInNumber_3);
console.log(valueInNumber_3); // 0

let valueInNumber_4 = Number(score_4)
console.log(typeof valueInNumber_4);
console.log(valueInNumber_4); // NaN

let valueInNumber_5 = Number(score_5)
console.log(typeof valueInNumber_5);
console.log(valueInNumber_5); // NaN

let isLoggedin = 1
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn); // true

let isLoggedin_2 = ""
let booleanIsLoggedIn_2 = Boolean(isLoggedin_2)
console.log((booleanIsLoggedIn_2)); // false

let isLoggedin_3 = "Sarthak"
let booleanIsLoggedIn_3 = Boolean(isLoggedin_3)
console.log((booleanIsLoggedIn_3)); // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // "33"

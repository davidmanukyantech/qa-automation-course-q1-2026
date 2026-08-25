/* 

PART A.1

"Hello World" - string
42 - number
true - boolean
null - object
undefined - object
[1, 2, 3] - array
{name: "Alex", age: 23} - object

*/

// PART A.2

let favoriteMovie = "Matrix";
let myAge = 36;
let iLikeJavaScript = true;
let deliveryDate;
let vacationDestination = null;

//PART A.3

let a = "JS"; //    primitive
let b = [10, 20]; // non-primitive
let c = 100; // primitive
let d = { city: "Paris" }; // non primitive

//  arrays and objects are non-primitive because they can hold multiple values and their contents can be changed.

//PART A.4

let winningNumbers = [10, 12, 45, 29, 65];

console.log(winningNumbers);

let visitedCities = ["Stockholm", "Amsterdam", "Munich", "Berlin", "Montreal"];

console.log(visitedCities);

let isVacant = [true, false, false, true, true];

console.log(isVacant);

//PART B.6

let number = 12;
if (number > 0) {
  console.log("Positive number");
}

//PART B.7

let citizen = false;

if (citizen == false) {
  console.log("you cant participate in elections");
}

//PART B.8

let score = 75;
if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score > 70) {
  console.log("Grade C");
} else console.log("Fail");

//PART B.9

let card = "amex";
switch (card) {
  case "visa":
    console.log("Visa");
    break;
  case "mastercard":
    console.log("MasterCard");
    break;
  case "amex":
    console.log("American Express");
    break;
  default:
    console.log("Not Supported");
}
// test

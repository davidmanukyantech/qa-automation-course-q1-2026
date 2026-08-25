//string
let name = "David";
let nameTwo = "Abby";
let nameTree = `Ronaldo`;

//Number
const birthYear = 1990;
const anotherNumber = 2.5;

console.log(anotherNumber);

//Boolean

let isLightOn = false;

console.log("Is the light on?", isLightOn);
//later, someone turns it on

isLightOn = true;
console.log("Is the lights on?", isLightOn);

//Null

let seatOwner = null;
console.log(seatOwner);

// in one hour someone takes the seat

seatOwner = "Ava";
console.log(seatOwner);

// undefined

let studentPresent; // not assigned = undefined
console.log("student present ?", studentPresent); // student present? undefined
// later, fater checking attendance
studentPresent = true;
console.log("Student present?", studentPresent); //

/* ARRAY
DEFINITION: represents an ordered collection of values, which can be any data type)
*/

const colors = ["red", "green", "blue"];
console.log(colors);

/* OBJECT
Definition: represents a collection of key-value pairs 
used to store related data and functionality.
*/

const person = {
  name: "David",
  age: 35,
  isStudent: false,
};

console.log(person);

// creating array with cars
const cars = ["Porsche", "BMW", "Mercedes", "Lexus", "Tesla"];

// creating array with numbers
const numbers = [21, 35, 3, 6, 65];

//creating string with extra spaces
const messyString = "   Make it clean       ";

//creating decimel number

const deciNumber = 5.312;

// ===========

//loggin first car from array
console.log(cars[0]);

//returning last car from array
console.log(cars.at[-1]);

//returning the lenth of array
console.log(cars.length);

// TASK 2

// changing second car in array
cars[1] = "Ferrari";
console.log(cars[1]);

cars[4] = "Aston Martin";
console.log(cars[4]);

console.log(cars);

// TASK 3: Mutator Methods

//adding car to the end of the array
cars.push("Maserati");
console.log(cars);

//removing last car from array
cars.pop();
console.log(cars);

//adding car to the start of the array
cars.unshift("Maserati");
console.log(cars);

//removing first car from the array
cars.shift();
console.log(cars);

//reversing array
cars.reverse();
console.log(cars);

//sorting array alphabetically
cars.sort();
console.log(cars);

// TASK 4: finder methodds

//checking if Toyota is in array

console.log(cars.includes("Toyota"));

//checking index of BMW
console.log(cars.indexOf("Mercedes"));

//pushin dublicate to the array to find last index of the car then

cars.push("Ferrari");
console.log(cars.lastIndexOf("Ferrari"));

//TASK 5: Joiners

//converting array into the string
console.log(cars.join(" "));

//checking if the var is array
console.log(Array.isArray(cars));

//converting word ENGINE into array
const word = "ENGINE";

const wordArray = word.split("");
console.log(wordArray);
console.log(Array.isArray(wordArray)); // doublechecking if its an array

// ========= PART 2
//TASK 6

//cleaning messy string

const cleanString = messyString.trim();

// logging clean string

console.log(cleanString);

// logging length

console.log(cleanString.length);

// TASK 7: Case & access

// converting it to all uppercase

const upperStr = cleanString.toUpperCase();

//converting it to lowercase

const lowerStr = cleanString.toLocaleLowerCase();

//logging uppercase string

console.log(upperStr);

//logging lowercase string

console.log(lowerStr);

// TASK 8: SLICE AND REPLACE

//extracting first word

console.log(cleanString.split(" ")[0]);

// extracting last word

console.log(cleanString.split(" ").at(-1));

//replace word with another

console.log(cleanString.replace("clean", "superclean"));

//TASK 9:

// making new string contains cars

const newStr = "Porsche is my favorite car brand";

//checking if it includes car

console.log(newStr.includes("car"));

//find position of the word
console.log(newStr.indexOf("car"));

//checking if string starts with specific word
console.log(newStr.startsWith("My"));

//check if the string ends with specific word
console.log(newStr.endsWith("brand"));

// TASK10 Split and Concat

//spliting sentence into words
console.log(newStr.split(" "));

//joining two strings with concat

const firstStr = "studying is time consuming";
const secondStr = "but its worth it";

console.log(firstStr.concat(" ", secondStr));

// TASK 11 : Template literals

const brand = "Porsche Targa";
const year = 1980;
const currentYear = 2026;

const carAge = currentYear - year;

const result = `It doesnt matter that its ${carAge} years old, ${year} ${brand} is still beautiful `;
console.log(result);

// PART 3: NUMBERS
//TASK12: rounding

//round decimel normaly
console.log(Math.round(deciNumber));

//round decimel number down
console.log(Math.floor(deciNumber));

//round decimel number up
console.log(Math.ceil(deciNumber));

//remove decimal part
console.log(Math.trunc(deciNumber));

//TASK13: formatting

console.log(deciNumber.toFixed(2)); //toFixed always returns String, not a number

//TASK 14: conversions

//converting numeric string into number
const numberStr = "21";
console.log(Number(numberStr));

//converting decimel string into integer
const deciStr = "7.34";
console.log(parseInt(deciStr));

//converting decimel str into float
console.log(parseFloat(deciStr));

//TASK 15: checking
const checkNum = 50;

console.log(isNaN(checkNum));

console.log(Number.isInteger(checkNum));

//TASK 16: MATH Utilities

// find absolute value
const number = -10;
console.log(Math.abs(number));

// find smallest number
console.log(Math.min(5, 8, 23, 2, 3));

//find largest number
console.log(Math.max(5, 8, 23, 2, 3));

//raise number to a power
console.log(Math.pow(5, 3));

//find square root
console.log(Math.sqrt(49));

// TASK17: random numbers

//generating random number between 0 and 1
console.log(Math.random());

//generating whole number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

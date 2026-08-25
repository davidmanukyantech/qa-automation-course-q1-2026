let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // picks apple from array
console.log(fruits[1]); // picks banana

// updating element in array

fruits[1] = "mango";

console.log(fruits);

// how to check how many elements in array

console.log(fruits.length);

//concat() - merges arrays into new array

const colors = ["red", "green"];
const moreColors = ["yellow", "white"];
const allColors = colors.concat(moreColors);

console.log(colors);
console.log(moreColors);
console.log(allColors);

// flat() - flattens nested arrays into a single array
const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

console.log("flat()", flatNumbers); // [1, 2, 3, 4, 5]
console.log(nestedNumbers);
console.log(nestedNumbers.flat());

//slice() - extracts a portion of the array without changing the original

const grades = ["A", "B", "C", "D", "E"];
const slicedGrades = grades.slice(1, 4);

console.log(grades);
console.log("slice ", slicedGrades);

// ----------MUTATORS

const mutableFruits = [...fruits];
console.log(mutableFruits);

// push() method, adds element to the array, by the end

mutableFruits.push("kiwi");
console.log(mutableFruits);

//pop - removes last element from array

mutableFruits.pop();
console.log(mutableFruits);

//unshift - adds an element to the start of the array

mutableFruits.unshift("orange");
console.log(mutableFruits);

//shift - removes first element from the array

mutableFruits.shift();
console.log(mutableFruits);

// reverse- reverses an order of the array

mutableFruits.reverse();
console.log(mutableFruits);

//sort() - sorts the array (alphabetically or numerically with compare functions)

mutableFruits.sort();
console.log(mutableFruits);

// ---- FINDERS

//indexOf() - returns **first index** of value in the array

const cars = ["BMW", "MERCEDES", "TESLA", "KIA", "JEEP", "TESLA"];
console.log(cars.indexOf("TESLA"));

//lastIndexOF() -returns the last matching value from array
console.log(cars.lastIndexOf("TESLA"));

//at() - gets an element at specific position
console.log(cars.at(1)); // mercedes
console.log(cars.at(4)); // JEEP

//includes.- checks if our array includes value. output is boolean

console.log(cars.includes("JEEP"));

//---- JOINERS AND CONVERTERS

//join() converts array into string with a specified separator
const carsString = cars.join(", ");
console.log(carsString);

//array.from() -creates a new array from iterable data type

const str = "Hello";
const chars = Array.from(str);
console.log(chars);

// Array.isArray() - checks if a value is an array
const luckyNumbers = [7, 10, 19, 21];
console.log(Array.isArray(luckyNumbers));

const name = "david";
console.log(Array.isArray(name));

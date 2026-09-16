const numbers = [3, 4, 5, 6, 7];

//maping

const tripledNumbers = numbers.map((num) => num * 3);

// const tripledNumbersTwo = numbers.map(function (num) {
//   return num * 3;
// });
console.log(tripledNumbers);

function multiplyNumberByThree(arr) {
  const multipliedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const multipliedValue = arr[i] * 3;
    multipliedArray.push(multipliedValue);
  }

  return multipliedArray;
}

const myTripledArrayNumbers = multiplyNumberByThree(numbers);
console.log(myTripledArrayNumbers);

//filter
const numberTwo = [10, 20, 25, 58, 60];
// .find() returns first element that matches the condition
const firstAbove18 = numberTwo.find((num) => num > 18);
console.log("find():", firstAbove18);

//findIndex() - returns index of the first element that matches the condition
const indexAbove10 = numberTwo.findIndex((num) => num > 10);

//forEach() - executes a function for each element ( no return )

const fruits = ["apple", "banana", "kiwi"];
const numbersThree = [1, 4, 5, 6, 7];

console.log("forEach():");
fruits.forEach((fruit) => console.log(" -", fruit));

// every() - returns true if all elements satisfy condition

const allPositive = numbersThree.every((num) => num > 0);
console.log("every():", allPositive);

//some() - at least one element meets condition

const hasEven = numbersThree.some((num) => num % 2 === 0);
console.log("some():", hasEven);

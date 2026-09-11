//task 1: combine 2 arrays

function combineArrays(arr1, arr2) {
  let combined = [];

  for (let arr of [arr1, arr2]) {
    combined.push(...arr);
  }
  return combined;
}

let italianCars = ["Ferrari", "Fiat", "lamborghini"];
let germanCars = ["BMW", "porsche", "mercedes"];

let allCars = combineArrays(italianCars, germanCars);

console.log(allCars);

//combine 2 arrays

function combine(arr1, arr2) {
  let combined = arr1.concat(arr2);

  for (let i = 0; i < combined.length; i++) {
    console.log(combined[i]);
  }
}

combine(germanCars, italianCars);

//combine numbers

let num1 = [4, 3, 10, 15];
let num2 = [8, 7, 9, 32];

function combineNumbers(arr1, arr2) {
  let newArray = [...arr1];

  for (let number of arr2) {
    newArray.push(number);
  }
  return newArray;
}

nums = combineNumbers(num1, num2);

console.log(nums);

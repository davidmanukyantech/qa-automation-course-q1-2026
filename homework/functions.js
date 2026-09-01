const cars = ["Tesla", "Porsche", "Ferrari", "BMW", "Mercedes"];
const numbers = [4, 21, 48, 23, 8];
const str = "Tesla is an electric vehicle";
const decimal = 21.09;

// === PART 1

// Task1: string and func

function cleanStr(str) {
  let cleanText = str.trim();
  cleanText = cleanText.toLowerCase();
  return cleanText;
}

console.log(cleanStr(str));

//Task 2: First & Last Character

function firstAndLast(str) {
  let clean = str.trim();
  return [clean[0], clean[clean.length - 1]];
}

console.log(firstAndLast(str));

//TASK 3 Word Counter

function count(str) {
  let words = str.trim().split(" ");

  return words.length;
}

console.log(count(str));

// ==== PART 2

//Task 4:brand checker

function brandChecker(cars, brand) {
  let lowCars = cars.map((car) => car.toLowerCase());
  let lowBrand = brand.toLowerCase();

  if (lowCars.includes(lowBrand)) {
    return "Car exist";
  } else {
    return "Car nout found";
  }
}

console.log(brandChecker(cars, "tesla"));

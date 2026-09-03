for (let i = 1; i <= 5; i++) {
  console.log("Count ", i);
}

// loop with arrays

const fruits = ["orange", "apple", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//looping each character in a string

const word = "hello";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

//while loop example

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//for of loop

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log("count", num);
}

//break in loops

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

const studentNames = ["ronaldo", "Kvara", "ibra", "vini"];

for (let i = 0; i < studentNames.length; i++) {
  if (studentNames[i] === "ibra") {
    break;
  }
  console.log(studentNames[i]);
}

// continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// NESTED LOOPS

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j =${j}`);
  }
}

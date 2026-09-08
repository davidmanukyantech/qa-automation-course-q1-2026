let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);

let ageTwo = 15;
let messageTwo = "";

if (age >= 18) {
  messageTwo = "You are an adult";
} else {
  messageTwo = "You are minor";
}

console.log(messageTwo);

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10));

let name = "Alice";
let isVIP = true;

console.log(`Hello ${isVIP === true ? "VIP guest" : "regular guest"}`);

//common use cases
let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cool";

console.log(weather);

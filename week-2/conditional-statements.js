let age = 24;

if (age > 18) {
  console.log("You are above the age to enter our webpage");
}

// elif

let score = 95;

if (score > 90) {
  console.log("Grade A");
} else if (score > 82) {
  console.log("Grade B");
} else {
  console.log("You Failed");
}

// SWITCH

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

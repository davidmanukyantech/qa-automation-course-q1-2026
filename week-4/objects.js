const person = {
  name: "David",
  age: 35,
  isStudent: true,
};

// // use "in" operator:
// //always returns boolean
console.log("name" in person); // youre checking if name exists in person object
console.log("weight" in person); // this should return false

// // dot vs bracket notation

console.log(person.name); // dot notation

console.log(person["age"]); //bracket notation

const user = { "first name": "David" };
console.log(user["first name"]);

// //looping through object properties

for (let key in person) {
  //   console.log(key + ": " + person[key]);
  console.log(`this is key ${key} and this is value ${person[key]}`);
}

//adding and updating properties

//adding new property
person.height = 185;
console.log(person.height);

//updating an existing property
person.age = 36;
console.log(person.age);

//removing key from object

delete person.isStudent;

//nested objects

const student = {
  name: "david",
  age: 35,
  grades: {
    math: 85,
    science: 90,
  },
};

console.log(student.grades.math);

student.grades.math = 95;
console.log(student.grades.math);

// object methods

const personTwo = {
  name: "David",
  age: 36,
  isStudent: true,
  greet: function () {
    return "Hello this is David";
  },
};

console.log(personTwo.greet());

const car = {
  brand: "tesla",
  speed: 125,
  info() {
    console.log(`${this.brand} is going at ${this.speed} mph`);
  },
};

car.info();

//methods with parameters

const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(2, 4));
console.log(calculator.multiply(3, 5));

//built-in object methods

console.log(Object.keys(person));

//get values

console.log(Object.values(person));

//get entries ( key value pairs)

console.log(Object.entries(person));

// oop is a programming paradigm based on objects and classes
// its like designing a blueprint for a house
// once yo uhave the blueprint, you can build as many houses as u want

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I am ${this.name} and im ${this.age}`;
  }
}

const alice = new Person("Alice", 25);

console.log(alice.greet()); // we using console log because we used just return in class

const bob = new Person("Bob", 30);

console.log(bob.greet());

// constructor

class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    console.log(`this phone is ${this.brand} ${this.model}`);
  }
}

const iphone14 = new Phone("Apple", "iPhone 14 Pro max");

return iphone14.describe();

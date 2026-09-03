// in JS, scope defines the accessibility of variable,
// functions, and objects within your code. it determines
// where and how these elements can be used. understanding
// scope is curcial for writing organized, maintainable,
//and bug free JS

// DEFINITION - scope determines where variables are accessible

// GLOBAL SCOPE
let globalVar = "I am gloobal";

console.log(globalVar);

// function scope
function greet() {
  let message = "Hello from the function";
  console.log(message);

  if (5 > 2) {
    console.log(message);
  }
}

greet();

//block scope

if (true) {
  let blockVar = "I'm inside a block";
  console.log(blockVar);
}

// 1. Function Declaration (Traditional function syntax)
function functionDeclaration() {
  console.log("This is a function declaration.");
}

functionDeclaration(); // Calling the function


// 2. Function Expression (Anonymous function assigned to a variable)
const functionExpression = function() {
  console.log("This is a function expression.");
};

functionExpression(); // Calling the function


// 3. Arrow Function (ES6+ syntax, shorter function expression)
const arrowFunction = () => {
  console.log("This is an arrow function.");
};

arrowFunction(); // Calling the function


// 4. Arrow Function with a single parameter (Implicit return)
const arrowFunctionWithParam = param => {
  console.log("This is an arrow function with parameter: " + param);
};

arrowFunctionWithParam("Hello!"); // Calling the function


// 5. Arrow Function with Implicit Return (One-line function body)
const simpleArrowFunction = () => "This is a one-line arrow function with an implicit return.";

console.log(simpleArrowFunction()); // Calling and logging the result


// 6. Named Function Expression (Function assigned to a variable with a name)
const namedFunctionExpression = function myNamedFunction() {
  console.log("This is a named function expression.");
};

namedFunctionExpression(); // Calling the function


// 7. IIFE (Immediately Invoked Function Expression) - Function expression invoked immediately after declaration
(function() {
  console.log("This is an IIFE (Immediately Invoked Function Expression).");
})();

// 8. Constructor Function (Using the 'new' keyword to create a function-based object)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const person1 = new Person("Alice", 30);
person1.greet(); // Calling the method from constructor function

// 9. Function as a Parameter (Passing a function as an argument to another function)
function higherOrderFunction(func) {
  console.log("This is a higher-order function.");
  func(); // Calling the passed function
}

higherOrderFunction(function() {
  console.log("This function was passed as an argument.");
});

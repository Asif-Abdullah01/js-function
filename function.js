/**
 * ============================================
 * FIRST PRACTICE: Functions and Function Syntax
 * ============================================
 * 
 * What are functions?
 * - A function is a reusable block of code that performs a specific task
 * - Functions help organize code, reduce repetition, and make code more maintainable
 * - A function can accept inputs (parameters) and return outputs (return value)
 */

// ============================================
// 1. FUNCTION DECLARATION (Traditional Syntax)
// ============================================

// Basic function declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function → Output: Hello, World!

// Function with parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8

// Function with multiple parameters
function createGreeting(firstName, lastName) {
  return "Hello, " + firstName + " " + lastName;
}

console.log(createGreeting("John", "Doe")); // Output: Hello, John Doe

// ============================================
// 2. FUNCTION EXPRESSION
// ============================================

// Function assigned to a variable
const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20

// Function expression with no name (anonymous function)
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // Output: 7

// ============================================
// 3. ARROW FUNCTION (ES6 Syntax)
// ============================================

// Basic arrow function
const square = (num) => {
  return num * num;
};

console.log(square(4)); // Output: 16

// Arrow function with implicit return (no curly braces)
const double = (num) => num * 2;

console.log(double(5)); // Output: 10

// Arrow function with single parameter (parentheses optional)
const cube = num => num ** 3;

console.log(cube(3)); // Output: 27

// Arrow function with no parameters
const getCurrentTime = () => new Date();

console.log(getCurrentTime()); // Output: Current date and time

// ============================================
// 4. FUNCTION PARAMETERS AND ARGUMENTS
// ============================================

// Parameters are variables in the function definition
// Arguments are values passed when calling the function

function displayInfo(name, age, city) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

// Calling with arguments
displayInfo("Alice", 25, "New York"); // Output: Name: Alice, Age: 25, City: New York

// Default parameters
function introduce(name = "Guest", role = "Developer") {
  console.log(`${name} is a ${role}`);
}

introduce("Bob", "Designer"); // Output: Bob is a Designer
introduce("Charlie");         // Output: Charlie is a Developer
introduce();                  // Output: Guest is a Developer

// ============================================
// 5. RETURN STATEMENTS
// ============================================

// Function without explicit return (returns undefined)
function noReturn() {
  console.log("This function doesn't return a value");
}

console.log(noReturn()); // Output: undefined

// Function with return
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483

// Function that returns different types
function processData(type) {
  if (type === "string") {
    return "Hello";
  } else if (type === "number") {
    return 42;
  } else if (type === "array") {
    return [1, 2, 3];
  } else {
    return null;
  }
}

console.log(processData("string")); // Output: Hello
console.log(processData("number")); // Output: 42
console.log(processData("array"));  // Output: [1, 2, 3]

// ============================================
// 6. VARIABLE SCOPE IN FUNCTIONS
// ============================================

let globalVar = "I'm global";

function demonstrateScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Can access global variable
  console.log(localVar);  // Can access local variable
}

demonstrateScope();
// Output:
// I'm global
// I'm local

// console.log(localVar); // ERROR: localVar is not defined outside the function

// ============================================
// 7. FUNCTION HOISTING
// ============================================

// Function declarations are hoisted (can be called before declaration)
sayHello(); // Works! Output: Hello from hoisting!

function sayHello() {
  console.log("Hello from hoisting!");
}

// Function expressions are NOT hoisted
// greetUser(); // ERROR: greetUser is not a function
const greetUser = function() {
  console.log("Greeting!");
};
greetUser();

// ============================================
// 8. PASS BY VALUE VS PASS BY REFERENCE
// ============================================

// Pass by value (primitives: number, string, boolean)
function modifyNumber(num) {
  num = num + 10;
  return num;
}

let x = 5;
console.log(modifyNumber(x)); // Output: 15
console.log(x);               // Output: 5 (original unchanged)

// Pass by reference (objects, arrays)
function modifyArray(arr) {
  arr.push(4);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] (original modified)

// ============================================
// PRACTICE EXERCISES
// ============================================

// Exercise 1: Create a function that checks if a number is even
function isEven(num) {
  return num % 2 === 0;
}

console.log("\n--- Exercise 1: isEven ---");
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false

// Exercise 2: Create a function that reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("\n--- Exercise 2: reverseString ---");
console.log(reverseString("hello"));   // Output: olleh
console.log(reverseString("function")); // Output: noitcnuf

// Exercise 3: Create a function that calculates factorial
function factorial(n) {
  if (n < 0) return "Error: negative number";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("\n--- Exercise 3: factorial ---");
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1

// Exercise 4: Create a function that finds the maximum of three numbers
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log("\n--- Exercise 4: findMax ---");
console.log(findMax(10, 5, 20)); // Output: 20
console.log(findMax(3, 3, 3));   // Output: 3

// Exercise 5: Create a function that counts vowels in a string
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("\n--- Exercise 5: countVowels ---");
console.log(countVowels("hello world"));  // Output: 3
console.log(countVowels("JavaScript"));   // Output: 3

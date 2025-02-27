console.log("Welcome to your JavaScript Playground!");
document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button clicked!");
});

// --------------------------------Primitive Datatype
// Basic Operations
let num1 = 10;
let num2 = 5;

let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus

console.log("Sum:", sum); // 15
console.log("Difference:", difference); // 5
console.log("Product:", product); // 50
console.log("Quotient:", quotient); // 2
console.log("Remainder:", remainder); // 0

// String Concatenations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Adding a space between

console.log("Full Name:", fullName); // John Doe

// Logical Operations
let isSunny = true;
let isWeekend = false;

console.log("Is it a good day for a picnic?", isSunny && isWeekend); // false
console.log("Can we relax today?", isSunny || isWeekend); // true
console.log("Is it not sunny?", !isSunny); // false

// -----------------------------------Reference Datatype
//Objects
let person = {
    name: "Alice",
    age: 25
};

// Accessing properties
console.log(person.name); // Alice

// Modifying properties
person.age = 26;
console.log(person.age); // 26

// Adding new properties
person.city = "New York";
console.log(person.city); // New York

//Arrays
let fruits = ["apple", "banana", "cherry"];

// Accessing elements
console.log(fruits[0]); // apple

// Adding elements
fruits.push("orange"); // Adds to the end
console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// Removing elements
fruits.pop(); // Removes the last element
console.log(fruits); // ["apple", "banana", "cherry"]
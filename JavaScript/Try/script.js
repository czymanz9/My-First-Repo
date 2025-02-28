console.log("Welcome to your JavaScript Playground!");
document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button clicked!");
});

// --------------------------------Primitive Datatype
//---Basic Operations
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

//---String Concatenations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Adding a space between

console.log("Full Name:", fullName); // John Doe

//---Logical Operations
let isSunny = true;
let isWeekend = false;

console.log("Is it a good day for a picnic?", isSunny && isWeekend); // false
console.log("Can we relax today?", isSunny || isWeekend); // true
console.log("Is it not sunny?", !isSunny); // false

// -----------------------------------Reference Datatype
//---Objects
let person = {
    name: "Alice",
    age: 25
};

// Accessing properties
console.log(person.name); // Alice

//---Modifying properties
person.age = 26;
console.log(person.age); // 26

//---Adding new properties
person.city = "New York";
console.log(person.city); // New York

//---Arrays
//let fruits = ["apple", "banana", "cherry"];

//Accessing elements
console.log(fruits[0]); // apple

//Adding elements
fruits.push("orange"); // Adds to the end
console.log(fruits); // ["apple", "banana", "cherry", "orange"]

//Removing elements
fruits.pop(); // Removes the last element
console.log(fruits); // ["apple", "banana", "cherry"]

//--Another Array
let colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[0]); // Outputs: Red
console.log(colors[2]); // Outputs: Green

//modifying
let cities = ["New York", "Los Angeles", "Chicago"];
cities[1] = "San Francisco"; // Changes "Los Angeles" to "San Francisco"
console.log(cities); // ["New York", "San Francisco", "Chicago"]

//---Objects
// Array from last lesson (ordered list)
let fruits = ["apple", "banana", "orange"];

// Same data with more context using an object
let fruitDetails = {
    type: "apple",
    color: "red",
    pricePerKg: 3.5,
};

// can store various data types
let person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling", "gardening"],
    greet: function () {
        console.log("Hi, I'm " + this.name);
    },
};

//functions
let car = {
    brand: "Toyota",
    model: "Corolla",
    start: function () {
        console.log(this.brand + " " + this.model + " is starting!");
    },
};

car.start(); // "Toyota Corolla is starting!"

//built-in Methods
let person = {
    name: "Alice",
    age: 28,
};

// Get all keys
console.log(Object.keys(person)); // ["name", "age"]

// Get all values
console.log(Object.values(person)); // ["Alice", 28]

// Get key-value pairs
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 28]}

//----Switches
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today's special is a free croissant with any coffee!");
        break;
    case "Wednesday":
        console.log("Enjoy half-price lattes today!");
        break;
    case "Friday":
        console.log("Free cookie with every sandwich!");
        break;
    default:
        console.log("Check back tomorrow for new specials.");
}

//


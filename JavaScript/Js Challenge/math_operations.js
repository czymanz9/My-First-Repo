//Task 1

let item1 = 40;
let item2 = 3;
let item3 = 2;
let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is: $",totalCost);

//Task 2
let num1 = 2;
let num2 = 3;
let num3 = 4;
let avg = (num1 + num2 + num3)/3;

console.log("The average is:", avg);

//Task 3
let num = 15;
let answer = num % 2;

if (answer === 0){
    console.log(num, "is an even number.");
} else{
    console.log(num, "is an odd number.");
}

//Task 4
let price = 100;
let discountPercent = 20;
let discount = (price * discountPercent) / 100;
let discountPrice = price - discount;

console.log("The discount price is: $", discountPrice);

//Task 5
let finalPrice = 80;
let discountPer = 20;
let originalPrice = finalPrice / (1 - discountPer / 100);

console.log("The original price before the discount was: $", originalPrice);


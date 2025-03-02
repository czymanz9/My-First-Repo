// Task 1
let number = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
};

// Task 2
let num = 6;
let sum = 0;

for(let i = 1; i <= num; i++){
    sum += i;
};

console.log(`The sum of the first ${num} numbers is: ${sum}`);

//Task 3
let nums = [1,9,3,8,5,8];

for(let i = 0; i < nums.length; i++){
    console.log(`Array Element: ${nums[i]}`);
};

//Task 4
for(let row = 1; row <= 5; row++){
    let star = "";
    for(let col = 1; col <= row; col++){
        star += "* "
    };

    console.log(star);
};

//Task 5
let arr = [2,4,6,8,10];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${arr[i]}`);
};

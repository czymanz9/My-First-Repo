//Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtraction(a, b){
    return a - b;
}

function division(a, b){
    return a / b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(6, 1, subtraction)); //Output: 5
console.log(calculate(5, 5, division));  //Output: 1

//Exercise 2
function delayedMessage(message, delay, callback, secondCallback) {
    secondCallback();
    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function(msg) {
    console.log(msg);
}, function(secondMessage){
    console.log("Second Callback");
});

//Output: Second Callback
//        Hello, world!

//Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if(callback(i) === false){
            break;
        }
    }
}


repeatTask(3, function(index) {
    console.log("Iteration:", index);

});

//Output: Iteration: 0
//        Iteration: 1
//        Iteration: 2

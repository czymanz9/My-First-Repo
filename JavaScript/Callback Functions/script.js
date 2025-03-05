//---------------Task 1
function customFilter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]) === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

//----------------Task 2
function countdown(start, callback) {
    for(let i = start; i > -1 ; i--){
        setTimeout(() => {
            callback(i); 
        }, (start - i) * 1000); //5 - 5 = 0 * 1000 ; 5 - 4 = 1 * 1000 = 1s and so on because if I don't do this, it would output simultaneously.
    }
}


function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

//------------------Task 3
function createButton(buttonText, callback) {
    let button = document.createElement("button");
    button.innerText = buttonText; 
    button.addEventListener("click", callback);
    document.body.appendChild(button); 
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  

//-------------------Task 4
function runTasks(tasks) {
    for(let task of tasks){
        setTimeout(() => {
            task();
        }, 1000);
    }
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  


//---------------------Task 5
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = prompt(question + "\n" + choices.join(", "));
    callback(userAnswer === correctAnswer);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
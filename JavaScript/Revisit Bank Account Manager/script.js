/* 
Name: Czyrah Manzano  
*/

/* Default Balance */
let balance = 5000;
var currentBalance = document.getElementById("currentBalance");
currentBalance.innerText ="Current Balance: $" + balance;

/* Buttons Event Listeners */
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", deposit);
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", withdraw);

/* This function just prints an error message when called in red fonts. */
function error(){
    var error = document.getElementById("message");
    error.innerHTML ="<h4><strong>Invalid Input, please try again</strong></h4>";
    error.style.color = "red";
}

/* Deposit Function, gets the user input and made into a number so that when adding to the
default balance it will sum it. Also made a message that tells that user has successfully
deposited the input they entered. In addition an error function is included when user inputs an empty string
or 0 or less so that they could only input a whole number. */
function deposit(){
    let userInput = parseFloat(document.getElementById("userInput").value)                                                        ;

    if(isNaN(userInput)|| userInput <= 0 ){
        error();
    }else{
    balance += userInput

    var depositMessage = document.getElementById("message");
    depositMessage.innerHTML =`<h5><strong>Successfully Deposited $${userInput}</strong></h5>`;
    depositMessage.style.color = "green";

    currentBalance.innerText = "Current Balance: $" + balance;
    }
}

/* Function is same with deposit but minus the user input to the current balance */
function withdraw(){
    let userInput = parseFloat(document.getElementById("userInput").value)                                                        ;

    if(isNaN(userInput)|| userInput <= 0 ){
        error();
    }else{
        
    balance -= userInput

    var depositMessage = document.getElementById("message");
    depositMessage.innerHTML =`<h5><strong>Successfully Withdrew $${userInput}</strong></h5>`;
    depositMessage.style.color = "green";

    currentBalance.innerText = "Current Balance: $" + balance;
    }
}
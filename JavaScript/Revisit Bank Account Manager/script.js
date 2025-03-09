/* 
Name: Czyrah Manzano  
*/

/* Default Balance */
let balance = 5000;
let dailyLimit = 0;
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

/* Display Feedback on transactions */
function successMessage(userAction, userInput){
    var depositMessage = document.getElementById("message");
    depositMessage.innerHTML =`<h5><strong>Successfully ${userAction} $${userInput}</strong></h5>`;
    depositMessage.style.color = "green";
}

/* Transaction Function shows the transaction the user made whether if its
deposit or withdraw */
function transaction(userAction, userInput){
    var historyContainer = document.getElementById("transactionHistory")

    var depositHistory = document.createElement("li");
    depositHistory.className = "list-group-item list-group-item-secondary";
    depositHistory.innerText = `${userAction}: $${userInput}`;

    historyContainer.appendChild(depositHistory);
}

/* Deposit Function, gets the user input and made into a number so that when adding to the
default balance it will sum it. Also made a message that tells that user has successfully
deposited the input they entered. In addition an error function is included when user inputs an empty string
or 0 or less so that they could only input a whole number. */
function deposit(){
    let userInput = parseFloat(document.getElementById("userInput").value);

    if(isNaN(userInput)|| userInput <= 0 ){
        error();
        return;
    }
    
    balance += userInput;

    /* Success Message */
    successMessage("deposited", userInput);

    /* Transaction History */
    transaction("Deposit", userInput);

    /* Current Balance after deposit */
    currentBalance.innerText = "Current Balance: $" + balance;
}


/* Withdraw Function has a daily limit of 500, in this function it checks it the withdrawal is within the balance
and the rest is just the same as the deposit function with the display messages and transaction history.*/
function withdraw(){
    let userInput = parseFloat(document.getElementById("userInput").value);

    if(isNaN(userInput)|| userInput <= 0 ){
        error();
        return;
    }
    
    /* Daily Limit Checker */
    if (dailyLimit + userInput > 500) {
        let limitMessage = document.getElementById("message");
        limitMessage.innerHTML = `<h5><strong>Daily withdrawal limit reached!</strong></h5>`;
        limitMessage.style.color = "red";
        return; 
    }

    /* Balance Checker */
    if (userInput > balance) { 
        document.getElementById("message").innerHTML = `<h5><strong>Insufficient Balance!</strong></h5>`;
        document.getElementById("message").style.color = "red";
        return;
    }
    
    balance -= userInput;
    dailyLimit += userInput;

    /* Success Message */
    successMessage("withdrew", userInput);

    /* Transaction History */
    transaction("Withdraw", userInput);

    /* Current Balance after deposit */
    currentBalance.innerText ="Current Balance: $" + balance;
}

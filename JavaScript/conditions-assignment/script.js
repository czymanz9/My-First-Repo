//Task 1
let score = 59;

if(score > 89){
    console.log("Grade A");
}else if(score > 79){
    console.log( "Grade B");
}else if(score > 69){
    console.log("Grade C");
}else if(score > 59){
    console.log("Grade D");
}else{
    console.log("Grade F");
};

//Task 2
let temperature = 51;

if(temperature < 0 ){
    console.log("It's freezing outside! Bundle up!");
}else if(temperature < 16){
    console.log("It's cold outside. Wear a jacket.");
}else if(temperature < 31){
    console.log("The weather is nice. Enjoy your day!");
}else{
    console.log("It's hot outside. Stay hydrated!");
};

//Task 3
let age = 13;

if( age < 13){
    console.log("You are too young for this activity.");
}else if(age < 18){
    console.log("You need parental permission.");
}else{
    console.log("You are eligible for this activity.");
};

//Task 4
let agee = 12;
let isMember = false;

if(agee < 12){
    console.log("Your ticket is free!");
}else if(agee > 12 && isMember){
    console.log("The ticket costs $10.");
}else{
    console.log("The ticket costs $15.");
};

//Task 5
let year = 2032;

function isLeapYear(){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log("The year is a Leap Year!");
        return true;
    }else{
        console.log("The year is not a Leap Year!");
        return false;
    };
};

isLeapYear(year);





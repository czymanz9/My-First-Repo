//1. Custom Map Function
function customMap(num, callback){
    let newArr = [];
    for(let i = 0; i < num.length; i++){
        newArr.push(callback(num[i]));
    };
    return newArr;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); // Should output: [2,4,6]

//2. Filter Function
function filter(arr, callback){
    let filteredArr = [];
    for(let i in arr){
        if(callback(arr[i]) === true){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

let resultOne = filter([1,2,3,4,15, 9, 20], function(val) { return val < 10; });
console.log(resultOne); // Should output: [1,2,3,4]

//3. Some Function
function some(arr, callback){
    for(let i in arr){
        if(callback(arr[i])){
            return true;
        }
    }
    return false;
}

let resultTwo = some([1,2,3,4,5, 6], function(val) { return val > 5; });
console.log(resultTwo); // Should output: true

//4. Every Function
function every(arr, callback){
    for(let i in arr){
        if(callback(arr[i]) === false){
            return false;
        }
    }
    return true;
}

let resultThree = every([1,2,3], function(val) { return val > 0; });
console.log(resultThree); // Should output: true

//5. Reduce Function
function reduce(arr, callback){
    let sum = 0;
    for(let i in arr){
        sum = callback(sum, arr[i]);
        
    }
    return sum;
}

let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
console.log(sum); // Should output: 6

//6. Includes Check
function includes(arr, callback){
    for(let i in arr){
        if(callback(arr[i]) === true){
            return true;
        }
    }
    return false;
}

let result = includes([1,3,6 ,7 ,8, 2], function(val) { return val === 2; });
console.log(result); // Should output: true


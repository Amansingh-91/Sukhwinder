console.log("function in js")

// console.log("payment transaction after bug fix "); //bug




// console.log("payment transaction after bug fix"); 




// console.log("payment transaction");





// console.log("payment transaction after bug fix");



// function
// normal syntax function

// create function

/*
    function func_Name(parameters_optional){
        block of code
    }
*/ 
function greet(){

    console.log("hey friends");
}

// call function
greet();

// call
greet();

greet();

// function with parameters => extra peice of information  that we provide to a function


function greetWithName(name){
    console.log("hey",name);
}
// let x;
greetWithName(123);
greetWithName("Aman")
greetWithName("Dharam")
greetWithName()

function login(email,password){
    if(email === "abc@xyz.com" && password === "aman1212"){
        console.log("successfully logged in");
        return true;
    }
    else{
        console.log("invalid username or password");
        return false;
    }
}


let isLoggedIn = login("abc@xyz.com","aman12");

if(isLoggedIn){
    console.log("enjoy the website");
}
else{
    console.log("try to login again");
}
// function with default value for parameters

function sumOfTwoNumbers(number1 = 0, number2 = 0){
    let sum =  number1 + number2;
    return sum;
}

console.log(sumOfTwoNumbers(12,13));
let sumOfThree = sumOfTwoNumbers(12,14) + 15;
console.log(sumOfThree);


// Functions with return type

// Function as an Expression

const myFirstExpressionFunction = function(){
    console.log("I am expression function");
}

myFirstExpressionFunction();

const myFirstExpressionFunctionWithParams = function(myPara = null,myPara2){
    console.log("I am expression function with params anv my value is ",myPara,myPara2);
}

myFirstExpressionFunctionWithParams("Aman")

const myFirstExpressionFunctionWithReturn = function(){
    console.log("I am expression function");
    return "Aman Singh"
}

console.log(myFirstExpressionFunctionWithReturn());


// Arrow Function => are shothand way to write expression function

const myFirstArrowFunction = () => {
    console.log("my first arrow function")
}
myFirstArrowFunction();

const sumOfTwoNumbersArrow = (num1,num2) => num1 + num2;

console.log(sumOfTwoNumbersArrow(12,17));



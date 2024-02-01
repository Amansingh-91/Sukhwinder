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
    }
    else{
        console.log("invalid username or password");
    }
}


login("abc@xyz.com","aman12");

// function with default value for parameters

function sumOfTwoNumbers(number1 = 0, number2 = 0){
    let sum =  number1 + number2;
    console.log(sum);
}

sumOfTwoNumbers(12,13);
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;



const calculator = ()=>{
    
    let result = 0;

    console.log("Result = ",result);

    result = Number(prompt("Enter the number"));
    let secondNumber = 0;
    out:
    while(true){
        let operator = prompt("press + for addition\npress - for subtraction\npress * for multiplication\npress / for division\npress X to exit\npress c to clear");

        switch(operator){
            case '+':
                secondNumber = Number(prompt("Enter the number"));
                result = add(result,secondNumber);
                break;
            case '-':
                secondNumber = Number(prompt("Enter the number"));
                result = sub(result,secondNumber);
                break;
            case '*':
                secondNumber = Number(prompt("Enter the number"));
                result = mul(result,secondNumber);
                break;
            case '/':
                secondNumber = Number(prompt("Enter the number"));
                result = div(result,secondNumber);
                break;
            case 'X':
                console.log("Result = ",result);
                break out;
            case 'c':
                result = 0;
                console.log("Result = ",result);
                result = Number(prompt("Enter the number"));
                break;
            default:
                console.log("Invalid Choice");
        }

        console.log("Result = ",result);
    }


}


calculator();

// write a program that calculates Simple Arithmatic operations(Simple Calculator)

let num1 = parseInt(prompt("Enter Any Number"));
let operation = prompt("Enter The operation you performed (+, -, *, /, %):");
let num2 = parseInt(prompt("Enter Any Number"));

switch(operation) {
    case '+' :{
        document.writeln(`The sum of ${num1} and ${num2} is ${num1+num2}.<br>`);
        break;
    }

    case '-' :{
        document.writeln(`The difference of ${num1} and ${num2} is ${num1-num2}.<br>`);
        break;
    }

    case '*' :{
        document.writeln(`The product of ${num1} and ${num2} is ${num1*num2}.<br>`);
        break;
    }

    case '/' :{
        document.writeln(`The division of ${num1} and ${num2} is ${num1/num2}.<br>`);
        break;
    }

    case '%' :{
        document.writeln(`The remainder of ${num1} and ${num2} is ${num1%num2}.<br>`);
        break;
    }
    default: {
        document.writeln("Invalid Operation<br>");
    }
}
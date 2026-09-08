// Write a program that calculate factorial of given number
let factorial = 1;
let n = parseInt(prompt("Enter the number to find Factorial"));
for(let i = 1; i <= n; i++){
    factorial*=i;
}
document.writeln(`The Factorial of ${n} is ${factorial}.`);
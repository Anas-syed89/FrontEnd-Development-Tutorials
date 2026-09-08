// Write aprogram that takes user's input check that number is Prime Number or Not

let num = parseInt(prompt(`Enter the number which check's Prime number or not`));
let count = 0;
for(let i = 1; i <= num; i++){
    if(num % i == 0) {
        count++;
}
}

if(count == 2){
    document.writeln(`${num} is Prime Number.`);
}
else {
    document.writeln(`${num} is not Prime Number.`);
}

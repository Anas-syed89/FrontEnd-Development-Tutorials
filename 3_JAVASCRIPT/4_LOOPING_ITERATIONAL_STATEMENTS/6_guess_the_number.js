// Simple guessed the number game
let num;
do {
    num = Number(prompt("Guess the number from 0 to 1000"))
    if(num > 500){
        alert("Try Again! Smaller number...")
    }
    else if(num < 500){
        alert("Try Again! Larger number...")
    }
    else if(num == 500){
        alert("Congratulations! You guessed Right Number...")
        let choice = prompt("If you want to contineu Press Yes(Y or y) otherwise No(N or n)").toLowerCase();
        if(choice == 'y'){
            num = 900;
        }
        else {
            alert("Exit Game!");
            break;
        }
    }
}while(true);
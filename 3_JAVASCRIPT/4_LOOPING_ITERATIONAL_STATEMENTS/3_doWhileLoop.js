let num = 0;

do {
    num = Number(prompt("Guess the number (0 to 1000)"));

    if (num === 0) {
        alert("Game ended");
        break;
    }
    else if (num > 500) {
        alert("Try again with a smaller number");
    }
    else if (num < 500) {
        alert("Try again with a larger number");
    }
    else {
        alert("🎉 Congratulations! You guessed the right number");
        break;
    }

} while (num != 0);
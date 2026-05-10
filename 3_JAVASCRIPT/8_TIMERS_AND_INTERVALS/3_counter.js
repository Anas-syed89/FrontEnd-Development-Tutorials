let count = 20;

let timeInterval = setInterval(function () {
    if(count >= 0) {
        console.log(count);
        count--;
    }

    else {
        clearInterval(timeInterval);
    }
}, 1000);
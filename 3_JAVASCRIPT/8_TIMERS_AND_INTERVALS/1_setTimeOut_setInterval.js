// For setTimeOut()
// setTimeOut means Runs a function only once after a specified delay.
// setTimeout(function, timeInMilliseconds);


// For setInterval()
// setInterval means Runs a function repeatedly at a specified time interval.
// setInterval(function, timeInMilliseconds);


setTimeout(function(){
    console.log("Runs after 5 seconds");
}, 5000);

setInterval(function(){
    console.log("This message will appear every 5 seconds");
}, 5000);


let tm = setTimeout(function(){
    console.log("hey")
}, 3000);

// not Print after 3 seconds
clearTimeout(tm);


let cl = setInterval(function(){
    console.log("hey")
}, 3000);

// not Print in every 3 seconds
clearInterval(cl); 
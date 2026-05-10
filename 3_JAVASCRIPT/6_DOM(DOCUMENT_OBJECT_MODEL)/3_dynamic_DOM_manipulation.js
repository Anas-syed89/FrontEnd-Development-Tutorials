// create element
// append or prepend or remove

let h1 = document.createElement("h1");  // create element
h1.textContent = "Hello World!";

let h2 = document.createElement("h2");  // create element
h2.textContent = "This is my JavaScript Code";

// document.querySelector or document.body ----> two ways  

document.querySelector("body").prepend(h1)   // prepend ---> In body tag the 1st element is h1 

document.body.appendChild(h2);     // append ---> In body tag the last element is h1


// remove element
document.querySelector("h3").remove();


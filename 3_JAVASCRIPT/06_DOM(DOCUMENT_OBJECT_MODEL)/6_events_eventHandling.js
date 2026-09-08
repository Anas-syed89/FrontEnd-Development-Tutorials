// EVENTS AND EVENT HANDLING

// CLICK AND DOUBLE CLICK
let div = document.querySelector(".container");

document.querySelector(".btns").addEventListener("click", function (){
    div.style.backgroundColor = "lightgray";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
});


let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
document.querySelector("#btns").addEventListener("dblclick", function (){
    parent.style.backgroundColor = "steelblue";
    parent.style.justifyContent = "center";
    parent.style.alignItems = "center";
});


// INPUT EVENT
let input = document.querySelector("input");
input.addEventListener("input", function (){
    console.log("Typed");
});

input.addEventListener("input", function (evt){
    console.log(evt.data);
});



// FILE INPUT EVENT
let btn = document.querySelector("#btnInput");
let fileInput = document.querySelector("#inputFile");
btn.addEventListener("click", function (){
    fileInput.click();
});

fileInput.addEventListener("change", function (dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});


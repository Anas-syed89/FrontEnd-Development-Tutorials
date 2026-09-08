// .style and classList(add, remove, toggle)

// .style
let h1 = document.querySelector("h1");
h1.style.color = ("#555");
h1.style.fontSize = ("50px");
h1.style.backgroundColor = ("#000");
h1.style.textAlign = ("center")

// classList


// for add
function showStyle() {
    document.querySelector(".myName").classList.add("myNameStyle");
}


// for remove
function removeStyle() {
    document.querySelector(".myName").classList.remove("myNameStyle");
}


// for toggle

function styling() {
    document.querySelector(".box").classList.toggle("boxStyle");
}

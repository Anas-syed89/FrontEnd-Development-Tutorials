// there are multiple attributes in JS but 90% use getAttribute, getAttribute, and removeAttribute
function change_type(){
    let stored = document.getElementById("change").getAttribute("type")
    if(stored == "text"){
        document.getElementById("change").setAttribute("type", "password")
    }
}

let a = document.querySelector("a");
a.removeAttribute("href");

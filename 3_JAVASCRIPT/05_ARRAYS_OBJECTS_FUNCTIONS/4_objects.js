let person = {
    name: "Syed Anas Ali",
    age: 18,
    education:"Bachelors in CS",
    number: 3837299738
}


document.writeln(person.name,"<br>")
document.writeln(person["education"],"<br>")


let keys = Object.keys(person); // Object.keys use convert object into array

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    document.writeln(key + " : " + person[key] + "<br>");
}

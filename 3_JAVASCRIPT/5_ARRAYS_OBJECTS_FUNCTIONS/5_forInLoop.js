// for in loop used to print or display object key values
document.writeln("Mobile Detailed<br>");
let mobile = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 120000,
    color: "Black",
    is5G: true
}

for (let key in mobile) {
  document.writeln(`${key, mobile[key]}<br>`);
}

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");


document.writeln("Car Detailed<br>");
let car = {
    name: "Civic",
    brand: "Honda",
    model: 2023,
    color: "White",
    automatic: true
}

for (let key in car) {
    document.writeln(car[key] + "<br>");
}
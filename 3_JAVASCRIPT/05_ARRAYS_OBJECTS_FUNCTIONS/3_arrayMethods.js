var fruits = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Blueberry', 'Kiwi']


for(var f of fruits) {
    document.writeln(`${f} <br>`)
}


document.writeln("<hr>")


fruits.unshift("Cherry") // add element in the first of array
fruits.push("PineApple") // add element in the end of array
for(var f of fruits) {
    document.writeln(`${f} <br>`)
}


document.writeln(" <hr>")


fruits.shift() // remove first element of array
fruits.pop() // remove last element of array
for(var f of fruits) {
    document.writeln(`${f} <br>`)
}


document.writeln(" <hr>")


// includes  used to find values in array
document.writeln(`${fruits.includes("banana")} <br>`)


document.writeln("<hr>")


// sort used to arrange array elements
    document.writeln(`${fruits.sort()} <br>`)


document.writeln("<hr>")


// reverse used to print array in reverse order
for(var f of fruits) {
    document.writeln(`${f.revese()} <br>`)
}

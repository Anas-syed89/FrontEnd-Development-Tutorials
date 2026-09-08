// One Dimentional Array
document.writeln(`One Dimentional Array <br>`);

let arr = [2,4,6,8,10];

document.writeln(`The Array Elements are:<br>`);
document.writeln(arr.length, "<br>")
// length of array = total no of values stored in an array

arr[0] = 45;

for(let i = 0; i < arr.length; i++){
   document.writeln(arr[i]);
}


document.writeln(`<br>`);
document.writeln(`<br>`);
document.writeln(`<br>`);


// Two Dimentional/Multi_Dimensional Array
document.writeln(`Two Dimentional/Multi_Dimensional Array <br>`);

let matrix = [[2,4,6], [1, 3, 5], [0, 0, 0]];

document.writeln(`The 3x3 matrix is:<br>`);

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
        document.writeln(matrix[i][j] + " ");
    }
   document.writeln(`<br>`);
}

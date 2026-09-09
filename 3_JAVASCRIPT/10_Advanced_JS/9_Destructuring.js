// Destructuring Using Array
const arr = ["Ahmed", "Maqsood", "Zahira"];
const [name1, name2, name3] = arr;
console.log(name1, name2, name3);

// Destructuring Using Object
const user = {
  name: "Anas",
  age: 20,
  Degree: "BSCS",
};
const { Uname, age, degree } = user;
console.log(Uname, age, degree);

// Using Spread operator (...) : Spread operator is used when you want to copy or combine values from an array or object into another one.

// Example 1
const nums = [23, 45, 76, 89, 546, 893, 783, 8370];
const [a, b, , , ...remaining] = nums;
console.log(a, b, remaining); // 76 and 89 skip

// Example 2
const arr1 = [2, 3, 4];
const obj1 = { ...arr1 };
console.log(obj1);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr1));

// Example 3
const student = {
  Name: "Ali",
  age: 20,
  city: "Karachi",
  course: "JavaScript",
  marks: 85,
};
s = [...Object.entries(student)]; // Object.entries-> to convert object into array
console.log(s);

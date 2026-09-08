// foreach: Used to run a function for every item in an array.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

// map: Used to create a new array by changing every item.
const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);
// [2, 4, 6, 8, 10]

// filter: Used to create a new array with items that match a condition.
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
// [2, 4]

// reduce: Used to combine all array items into one final value.
const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);
// 15

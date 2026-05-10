// localStorage


// how to store --> .setItem
localStorage.setItem("name", "Syed Anas");

// how to fetch --> .getItem
let val = localStorage.getItem("name");
console.log(val);

// how to remove --> .removeItem
localStorage.removeItem("name");

// how to update --> .setItem
// update age: 34
localStorage.setItem("age", "23");
localStorage.setItem("age", "34");


// Clear all
localStorage.clear();
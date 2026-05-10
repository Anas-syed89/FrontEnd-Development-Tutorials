// Object
let user = {
  name: "Ali",
  age: 20
};

// Object -> JSON String
let stringData = JSON.stringify(user);
console.log("String:", stringData);

// JSON String -> Object
let newObject = JSON.parse(stringData);
console.log("Object:", newObject);

// Access data
console.log(newObject.name); 
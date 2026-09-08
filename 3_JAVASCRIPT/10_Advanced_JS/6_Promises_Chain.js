function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some Data1");
      resolve("Success!");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some Data2");
      resolve("Success!");
    }, 4000);
  });
}

console.log("Fatching Data 1");

let p1 = asyncFun1();
p1.then((res) => {
  console.log("Result: ", res);
  console.log("Fatching Data 2");
  let p2 = asyncFun2();
  p2.then((res) => {
    console.log("Result: ", res);
  });
});

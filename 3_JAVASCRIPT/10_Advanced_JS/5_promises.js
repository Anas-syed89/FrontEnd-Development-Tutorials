const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am promises");
    // resolve("Success!");
    reject("Network Error!");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("FulFilled", res);
});

promise.catch((err) => {
  console.log("Rejected: ", err);
});

// Creation of Promise like API promises
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data",dataId);
//         resolve("Successfull!")
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000);
//     })
// }

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Successfull!");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

async function getAllData() {
  console.log("Getting Data 1...");
  await getData(45);
  console.log("Getting Data 2...");
  await getData(44589);
  console.log("Getting Data 3...");
  await getData(124840);
}

// basic exmaple
// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("200");
//     }, 3000);
//   });
// }

// async function getWeather() {
//   await api();
//   await api();
// }

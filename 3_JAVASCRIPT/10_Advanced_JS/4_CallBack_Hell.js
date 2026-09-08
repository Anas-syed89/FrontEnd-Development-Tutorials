function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// callback hell
getData(12, () => {
  getData(34, () => {
    getData(4568, () => {
      getData(23);
    });
  });
});

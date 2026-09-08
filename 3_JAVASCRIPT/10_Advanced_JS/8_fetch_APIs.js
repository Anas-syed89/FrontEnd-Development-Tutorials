const URL = "https://purr.woody.cat";
const id = document.querySelector("#idAPI");
const img = document.querySelector("#img");
const btn = document.querySelector("#btnGetData");

const getData = async () => {
  console.log("Getting Data...");
  let reponse = await fetch(URL); // JSON Format
  console.log(reponse);
  let data = await reponse.json(); // convert into JS Object
  id.innerText = data.ID;
  img.src = data.Image;
};

btn.addEventListener("click", getData);

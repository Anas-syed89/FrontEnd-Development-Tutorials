
function change() {

  // 1. getElementById
  document.getElementById("title").style.color = "red";

  // 2. getElementsByClassName
  document.getElementsByClassName("child")[2].style.backgroundColor = "blue";

  // 3. querySelector
  document.querySelector(".child").style.backgroundColor = "red";

  // 4. querySelectorAll
  document.querySelectorAll(".child").forEach(e =>{ // forEach Loop
    e.style.color = "green";
    e.style.border = "3px solid #000"
  })

  // 5. getElementsByTagName
  let items = document.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "green";
    items[i].style.fontSize = "25px";
  }

}

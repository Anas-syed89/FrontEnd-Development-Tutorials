function fun(val) {
  setTimeout(val, 3000);
}

fun(function () {
  console.log("Anas");
});

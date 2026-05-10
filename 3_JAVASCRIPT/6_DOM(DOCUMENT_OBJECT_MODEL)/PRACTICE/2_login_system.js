// Ask for username and password, and display “Login Successful” or "Invalid username or password"


let user_name = prompt("Enter User Name").toLowerCase();
let password = prompt("Enter User Password");

if(user_name == "anas.ali45" && password == "anas") {
    alert("Login SuccessFull!");
}

else {
    alert("Invalid username or password")
}
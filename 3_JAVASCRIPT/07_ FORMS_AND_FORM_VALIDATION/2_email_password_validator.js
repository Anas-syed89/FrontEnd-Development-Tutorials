let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

        document.querySelector("#emailError").textContent = "";
        document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = "true"

    if(!emailAns) {
        document.querySelector("#emailError").textContent = "Email is incorrect"
        document.querySelector("#emailError").style.display = "initial"
        isValid = "false"
    };

    if(!passwordAns) {
        document.querySelector("#passwordError").textContent = "Password is incorrect"
        document.querySelector("#passwordError").style.display = "initial"
        isValid = "false"
    };

    if(isValid) {
        document.querySelector(".resultMessage").textContent = "Every Thing is Correct!"
        document.querySelector(".resultMessage").style.display = "initial"
        form.reset(); 
    };
});

// .value vs .textContent
// .value is used for form input text
// .textContent is used for all text but not for form input

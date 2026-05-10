let username = document.querySelector("#name");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault(); // stop form submit
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const emailValidationPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // username validation
    if(username.value.length <= 5){
        document.querySelector(".hide").style.display = "initial";
    }
    else{
        document.querySelector(".hide").style.display = "none";
    }
  
    // password validation
    if(!passwordRegex.test(password.value)){
        document.querySelector(".passwordError").style.display = "initial";
    }
    else{
        document.querySelector(".passwordError").style.display = "none";
    }

    // email validation
    let ans = emailValidationPattern.test("anas@test.com");
    console.log(ans);
});
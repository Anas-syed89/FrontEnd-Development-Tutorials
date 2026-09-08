document.writeln("Boolean Result <br>")
let x = prompt("Enter Any Number")    // if statement  
if(x > 0 && x < 20) {
    document.writeln("True")
}
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")


document.writeln("Eligiblity <br>") // if else statement
let age = prompt("Enter Your Age")     
      
if(age >= 18) {
    document.writeln("You Are Eligible for Voting")
} else {
    document.writeln("You Are Not Eligible for Voting")
}
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")


// student marksheet Grade Eligiblity   // parseInt = convert string into number
document.writeln("Marksheet<br>")     
let student_name = prompt("Enter Student Name")
let student_id = prompt("Enter Student Id")
let eng =  parseInt(prompt("Enter Your English marks"))
let math =  parseInt(prompt("Enter Your Mathematics marks"))
let phy =  parseInt(prompt("Enter Your Physics marks"))
let comp =  parseInt(prompt("Enter Your Computer marks"))
let chem =  parseInt(prompt("Enter Your Chemistry marks"))
let urdu =  parseInt(prompt("Enter Your Urdu marks"))
let obtained_marks = eng + math + phy + comp + chem + urdu;
let failed_subjects = "";
let percentage = obtained_marks * 100 / 600
document.writeln(`Name: ${student_name}<br>`)
document.writeln(`Your Id: ${student_id}<br>`)

// if else if ladder 
if (eng < 33 ||math < 33 ||phy < 33 ||comp < 33 ||chem < 33 ||urdu < 33) {
    document.writeln("Grade: Failed <br>")
    if(eng < 33) {
        failed_subjects = "English "
    }
    if(math < 33) {
        failed_subjects += "Mathematics "
    }
    if(phy < 33) {
        failed_subjects += "Physics "
    }
    if(comp < 33) {
        failed_subjects += "Computer "
    }
    if(chem < 33) {
        failed_subjects += "Chemistry "
    }
    if(urdu < 33) {
        failed_subjects += "Urdu "
    }

    document.writeln(`Failed Subjects: ${failed_subjects}<br>`);
}

else {
    if(percentage >= 80) {
        document.writeln("Grade: A+")
    } else if (percentage >= 70) {
        document.writeln("Grade: A")
    } else if (percentage >= 60) {
        document.writeln("Grade: B")
    } else if (percentage >= 50) {
        document.writeln("Grade: C")
    } else if (percentage >= 40) {
        document.writeln("Grade: D")
    } else {
        document.writeln("You are Failed, You can need to improve!")
    }

    document.writeln(`Your Percentage is: ${percentage}%<br>`)
}



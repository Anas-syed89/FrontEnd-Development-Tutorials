// Switch Statement

let x = parseInt(prompt("Enter Any Number (1-3)"));

switch(x) 
{
    case 1:{
        document.writeln("Hello World!");
        break;
    }
    case 2:{
        document.writeln("This is my Code!");
        break;
    }
    case 3:{
        document.writeln("Hi, Programming means faced challenges!");
        break;
    }
    default: {
        document.writeln("Wrong Choice!");
        break;
    }
}
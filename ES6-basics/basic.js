'use strict'


// Type conversion
let nameField = false;
console.log(typeof(nameField));
console.log(typeof(String(nameField)));

// Switch statements
let number = 2;
switch(number){
    case 1:
    console.log("This is case 1");
    break;
    case 2:
    console.log("This is case 2");
    break;
    default:
    console.log("This is an unknown case")
}

// Functions
function showMessage(name, message){
    console.log(name + ": " + message);
}

showMessage("Varma", "What's up bro?")

Function Expressions and Arrow functions















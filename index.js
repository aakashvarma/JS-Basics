// Const and assigning values

let interestrate = 0.4;
const rate = 1;
console.log(interestrate)
console.log(rate)

// Variable declaration

let name = "Varma";                 // String
let age = 21;                       // value
let isApproves = true;              //Boolean
let firstName = undefined;          // undefined variable used for showing string variable
let num = null;                     // null is used to show that the variable is a number type

// Objects

let person = {                      // Note: The curly braces are called object literal
    name: "Varma",
    age: 30
};
 
console.log(person);
console.log(person.age);            // Dot notation
console.log(person["name"])         // Bracket Notation

// Arrays

let a = [1, 3, 4];
console.log(a[1]);
console.log(a.length);              // Returns the length of an array

// Functions

function greet() {
    console.log('Hello world');
}

greet();


function square(numb){
    return numb * numb;
}

let number = square(2);
console.log(number);







// // Const and assigning values

// let interestrate = 0.4;
// const rate = 1;
// console.log(interestrate)
// console.log(rate)

// // Variable declaration

// let name = "Varma";                 // String
// let age = 21;                       // value
// let isApproves = true;              //Boolean
// let firstName = undefined;          // undefined variable used for showing string variable
// let num = null;                     // null is used to show that the variable is a number type

// // Objects

// let person = {                      // Note: The curly braces are called object literal
//     name: "Varma",
//     age: 30
// };
 
// console.log(person);
// console.log(person.age);            // Dot notation
// console.log(person["name"])         // Bracket Notation

// // Arrays

// let a = [1, 3, 4];
// console.log(a[1]);
// console.log(a.length);              // Returns the length of an array

// // Functions

// function greet() {
//     console.log('Hello world');
// }

// greet();


// function square(numb){
//     return numb * numb;
// }

// let number = square(2);
// console.log(number);


// function changeText(){
//     document.getElementById('foo').innerHTML = "YOU WILL HAVE A GREAT DAY AHEAD. ^_^";
// }

// String Functions in JavaScript
let string = "     hello "
console.log(string.trim())

let txt = "Please locate where 'locate' occurs!";
var sln = txt.indexOf("locate");
console.log(sln);

var res = txt.slice(7,30);
console.log(res);

var tel = txt.replace('locate', 'find');
console.log(tel);

console.log(txt.charAt(2));
console.log(txt.charCodeAt(2));         // The method returns an UTF-16 cone integer between 0 and 65535


// Number Methods

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600






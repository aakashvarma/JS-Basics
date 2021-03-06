"use strict"

let sayHi = function(){
    console.log("Hello");
};
sayHi();

// Callback functions
let callBack = function(question, yes, no){
    if (question){
        yes();
    }
    else{
        no();
    }
};
callBack(true, 
    function(){console.log("This is true");},
    function(){console.log("This is False");}
    );

// Arrow functions
let square = n => console.log(n*n);
square(5);

let add = (a, b) => a+b;
console.log(add(2,4));














// var userOne = {
//     name: "Aakash",
//     email: "aakashvarma18@gmail.com",
//     login(){
//         console.log(this.email, "has logged in");
//     },
//     logout(){
//         console.log(this.email, "has logged out");
//     }
// };

// console.log(userOne);



class User {
    // first thing to do is to create a constructor function
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.email, "has logged in");
        return this;
    }
    logout(){
        console.log(this.email, "has logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

class Admin extends User{
    // Inheritance
    deleteUser(){
        
    }
}
let userOne = new User('Varma', "aakashvarma@gmail.com");
let userTwo = new User('Aakash', "varma@gmail.com");


userOne.login().updateScore().updateScore().logout(); // Method chaining. This is done my returning 'this' keyword at the end of the method of each function that you want to chain

























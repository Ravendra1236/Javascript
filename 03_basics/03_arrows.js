const user = {
    username : "Ravendra",
    price : 1000,

    welcome : function(){

        // console.log(`${username} , Welcome to our website.`);
        console.log(`${this.username} , Welcome to our website .`); // refrerring to current context
        console.log(this);
    }
}

// user.welcome()
// user.username = "Sam"
// user.welcome()

// console.log(this);          // Empty object

// function chai(){
//     let username = "Ravendra"        
//     console.log(this.username);          // this works in only object
// }
// chai()

// const chai  = function(){
//     let username = "Ravendra"
//     console.log(this.username);

// }
// chai()

// const chai  = () => {
//     let username = "Ravendra"
//     console.log(this);                  // undefined
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2)  => ({username : "Ravendra"})


console.log(addTwo(3,4));
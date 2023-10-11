// If
const isUserLoggedIn = true 
const temp = 41
// condition = true then it will execute

// if(temp === 41 ){
//     console.log("Less than 50");
// }
// else{
//     console.log("Not less than 50");
// }

// < , > , <= , >= , == , === , != , !==

// const score = 200 

// if(score > 100){
//     const power = "Fly"
//     console.log(`USer Power: ${power}`);
// }
// console.log(`USer Power: ${power}`);          // Error
//  Dont use var in place of let here and everywhere

const balance = 1000;

// if(balance > 500)
//     console.log("Test");

// if(balance < 500) {
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("LEss than 750");
// }
// else if (balance <900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard ){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In.");
}
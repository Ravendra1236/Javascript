// const userEmail = "r@gmai.com"
const userEmail = []


// Assuming userEmail is  true    = truthy

// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Dont Have user email");
// }

// Falsy Values : false , 0 , -0 , bigInt 0n , "" , null , undefined ,NaN
// truthy : Other than falsy
// truthy : "0" , 'false' , " " , [] , {} , function(){}

// if(userEmail.length ===0){
//     console.log("Array is empty.");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty");
// }

// false == 0  // true
// false == '' //true
// 0 == ''     //true

// +++++++++++NUllish Coalescing Operator (??): null undefined


// Checks for the safety of Null and undefined
// let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 10

// console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("Greater than 80");
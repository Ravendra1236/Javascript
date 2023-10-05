// Primitive : Call by value (Changes done in copy)

// 7 types: String Number null Boolean undefined Symbol Bigint

 const firstName = "Ravendra"            //String
 const score = 100
 const scorevalue = 100.4           //Number

 const outsidetemp = null;          // null

 let loggedIn = false               //boolean

 let value ;                        //Undefined

 const id = Symbol('123');          //Symbol Provides uniqueness
 const userId = Symbol('123')      

 console.log(id === userId);        // No 

 const bigNumber = 12345678910123n  // Bigint


// Refrence type: Call by refrence (Changes done in itself )

// Arrays , Objects , Functions

//  Javascript is dynamically typed

const heros = ["Superman" , "Hulk" , "Ironman"];  // Arrays

const myObj = {
    name : "Ravendra",
    age : 21 
}
console.log(myObj);

const number = function(){
    console.log(123);
}


console.log(typeof heros);      // Object
console.log(typeof myObj);      // Object
console.log(typeof number);     // function Object 
console.log(typeof bigNumber);  // bigint


// Memory and threads are copmlex but not that much 

//************************************/

//Stack , Heap 


// Stack (Primitve),
// Heap (Refrence)


//Primitve: 
let myName = "Ravendra"

let anotherName = myName ;
anotherName = "Rv";

console.log(myName);
console.log(anotherName);  

 

//Refrence:
let user1 = {
    email : "user@gmail.com",
    upi : "dbnb@oksbi"
};

let user2 = user1;

console.log(user1);
console.log(user2);

user2.email = "ravendra@gmail.com"

console.log(user1);         
console.log(user2);
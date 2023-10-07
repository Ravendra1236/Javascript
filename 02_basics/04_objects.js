// const tinderUser = new object();    // Singleton Object
const tinderuser = {};

tinderuser.id = "234acb";
tinderuser.name = "sammy"
tinderuser.isLoggedIn = true ;

// console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        firstname : "Ravendra",
        lastname : "singh"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.firstname);

// Optional chaining 

const objt1 = {1 : "a" , 2: "b"}
const objt2 = {3 : "a" , 4 : "b"}

// const obj3 = {objt1 , objt2}            // Problem is that Object ke andar Object
// console.log(obj3);

// const obj3 = Object.assign({} , objt1 , objt2)   // Solution to Line 25

//  { } = Target          obj1 , obj2 => Source

const obj3 = {...objt1 , ...objt2}           // Spread

//  IF there is an array in which elements are objects

const users = [
    {
        id : 1,
        userName : "Ravendra"
    },
    {
        id: 2 ,
        userName : "Devendra"
    }
    
]
// console.log(users[1].userName);

console.log(Object.keys(tinderuser));           // Stores in an Array
console.log(Object.values(tinderuser));         // Stores in an Array
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));  // Whther this property is present or not


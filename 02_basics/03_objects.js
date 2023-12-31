// Singleton : Not a obj literal
// Object.create +> Object made by constructors


// Object made by  Literals: 

const mySys = Symbol("key1")            // Creation of Symbol

const jsUser = {
    name : "Ravendra",                  // Inside the PC "name" : "Ravendra"
    age : 21 ,
    location : "Kota",
    email : "ravendra@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday"  , "Sunday"],
    "full_name" : "Ravendra Singh",
    [mySys] : "key1"                        // Syntax to use symbol
}

console.log(jsUser.name);
console.log(jsUser["name"]);       // Why this method: Interview  Check Line number 10 and 22;
console.log(jsUser.full_name);
console.log(jsUser["full_name"]);   
console.log(jsUser[mySys]);

jsUser.email = "chatgpt@gmail.com"
// Object.freeze(jsUser)                   // No one can manipulate my object
console.log(jsUser);

// How to add functions

jsUser.greeting = function(){
    console.log("Hello Js User!");
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);           // function return back

jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.full_name}`);  // this => Tells this particular Object
}

console.log(jsUser.greeting2());
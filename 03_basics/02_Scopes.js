// let , var . const

var c = 300;
let a = 1000;           // Global Scope

if(true){
    let a = 10;         // Local Scope 
    const b = 20 ;
    // var c = 40 ;
    console.log("Inner: " , a);
}

console.log(a);         
// console.log(b);
// console.log(c);
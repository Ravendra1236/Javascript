// Immediately Invoked function Expressions (IIFE)

(function chai (){
    console.log(`DB Connected`);
}) () ;

((name) => {
    console.log(`DB Connected ${name} `);
})("Ravendra");
//  ; is used to end it


// 1. Function which execute imediately 
// 2. Due to some pollution created by global scope to remove that we have used IIFE


// () () 

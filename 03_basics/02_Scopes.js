// let , var . const

var c = 300;
let a = 1000;           // Global Scope

if(true){
    let a = 10;         // Local Scope 
    const b = 20 ;
    // var c = 40 ;
    // console.log("Inner: " , a);
}

// console.log(a);         
// console.log(b);
// console.log(c);


// Child Function access variable of parent functon

function one (){
    const username = "Ravendra"

    function two () {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two();
}
// one();

if(true){
    const username = "Ravendra"
    if(username ==="Ravendra"){
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);        // error
}
// console.log(username);    // Error


// ++++++++++++++++++++ Intersting ++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num+1 ;
}
console.log(addone(5))


// console.log(addTwo(6))          // error becuase we have hold function into a variable
const addTwo = function(num){       
    return + 2
}

// Further we will study in hoisting
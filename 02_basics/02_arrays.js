const marvel_heroes = ["Thor" , "Ironman" , "Spiderman"]

const dc_heroes = ["Superman" , "Flash" , "Batman"]

// marvel_heroes.push(dc_heroes);          // It will take whole array as a single element

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);       // Flash  : = Treat as 2D array

// const all_heroes = marvel_heroes.concat(dc_heroes);         
// console.log(all_heroes);                   // Resolve problem of push

// const all_new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_new_heroes);                 //Same output of above

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// const another_array = [1,2,3,[4,5,6] ,7,[6,7,[1,2,3]]]      //Want to show in single Array

// const realAnotherArray  = another_array.flat(Infinity)      

// console.log(realAnotherArray);


//+++++++++Interesting++++++++++++++++

console.log(Array.isArray("Hello"))
console.log(Array.from("Ravendra"));        // Create this String into Array

console.log(Array.from("23445432"));

console.log(Array.from({name: "Ravendra"}));    // Return Empty Object and We havent tell keys or values


let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1 , score2 ,score3));

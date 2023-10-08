// *****************************************************
// Numbers
const score = 400
// console.log(score);


const balance  = new Number (100)   // Perfect Number
// console.log(balance);


// Like strings in number we also have prototype
// Some of them are: 

// console.log(balance.toString());
// By this we can use string properties in it

// console.log(balance.toFixed(2));  // 100.00 Usually  we use it to show decimal places 

const anotherNum = 123.8787

// console.log(anotherNum.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));  // For Indian currency

// ***************Maths***************

// console.log(Math);

// Some Important
// console.log(Math.abs(-2));       //Absolute // Change into positive
// console.log(Math.round(10.6));    //round off
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.sqrt(9));

// Math.random
console.log(Math.random());    // Value comes in between 1 and 0
// help to make dice game 
console.log((Math.random()*10) + 1 );  // Guarnatee Value will come greater than 0
console.log(Math.floor(Math.random()*10) + 1 );

// Trick
const min = 10;
const max = 20;

// (Math.floor(Math.random() * (max-min +1 ) )+ min )
// console.log(Math.floor(Math.random() * (max-min +1 ) )+ min );
console.log(Math.floor(Math.random() * (max - min +1)) + min);

// let score = "33" ;

// console.log(score);                  //33
// console.log(typeof score);       // String 
// console.log(typeof (score));     // string

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);      // NUmber
// console.log(valueInNumber);             // 33

// // "33" => 33
// // "33abc" ==> NaN Not a Number
// //  true ==> 1
// //  false ==> 0

// let isLoggedIn = "Hello";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// // 1 => true 0=> false
// // "" ==> For empty it will return false
// // "Ravendra" => true

// let stringNumber = "33";
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*********Operations************/

// let value = 3;
// let negValue = -value ;
// console.log(negValue);

let str1 = "Hello";
let str2 = " Ravendra";
let str3 = str1 + str2 ;                        //concatenation
console.log(str3);

// Note : SomeImportant things
console.log("1" + 2);     // 12
console.log(1 + "2");     // 12
console.log("1" + 2 + 2);  

// 122 Because if first 
// element is string then it will consider all elements as strings 


console.log(1 + 2 + "2"); // 32

console.log(+true);     //1
console.log(+"");       //0

let gameCounter =100;
++gameCounter;          // Prefix Postfix 
console.log(gameCounter);